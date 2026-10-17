/**
 * Zobi Fingerprint loader — runs in the main storefront context (NOT the web pixel sandbox).
 * Dynamically loads FingerprintJS OSS from unpkg, computes a stable visitorId,
 * and writes both the id and selected components to localStorage. The sandboxed
 * recoup-pixel reads these keys via browser.localStorage and attaches them to
 * every event payload sent to moneybag, enabling cross-session identity linking
 * even before a customer provides an email/phone.
 *
 * Keys written:
 *   zobi_fp            — FingerprintJS visitorId string
 *   zobi_fp_components — JSON object of selected signals
 *   zobi_fp_ts         — Unix ms timestamp of last computation (for 24h TTL)
 *
 * Served at: <STOREFRONT_ASSET_BASE>/sms/pixel/zobi-fp.js, and as <base>/s/f.js (same bytes).
 * Injected via Shopify ScriptTag (auto-injects on all storefront pages, no merchant action needed).
 */
;(function () {
  var LS_FP = 'zobi_fp'
  var LS_COMPONENTS = 'zobi_fp_components'
  var LS_TS = 'zobi_fp_ts'
  var TTL_MS = 24 * 60 * 60 * 1000

  // ── where to post: the mount our own <script src> was served from, never a literal host ──
  // The host in a ScriptTag src is the one string that ties every client store to us, so the
  // base is movable (engine/storefront/asset_origin.py) and this file must follow it: a script
  // loaded from the neutral host that beaconed to the old one would put the old host back in
  // every store's network log. The literal below is only the fallback for a copy that was
  // somehow inlined without a src.
  var API = (function () {
    var s = document.currentScript
    if (!s || !s.src) {
      var all = document.getElementsByTagName('script')
      for (var i = 0; i < all.length; i++) {
        if (/\/(sms\/pixel\/zobi-fp\.js|s\/f\.js)(\?|$)/.test(all[i].src || '')) { s = all[i]; break }
      }
    }
    try {
      if (s && s.src) {
        var u = new URL(s.src)
        return u.origin + u.pathname.replace(/\/(sms\/pixel\/zobi-fp\.js|s\/f\.js)$/, '')
      }
    } catch (e) {}
    return 'https://cs.gandalf.ee/moneybag'
  })()

  function shouldRefresh() {
    try {
      var ts = parseInt(localStorage.getItem(LS_TS) || '0', 10)
      return isNaN(ts) || Date.now() - ts > TTL_MS
    } catch (e) {
      return true
    }
  }

  // ── Canvas-component hashing ──────────────────────────────────────────────
  // FingerprintJS's canvas component is a dict {winding, geometry, text} whose dataURLs
  // run ~22KB — sending it raw bloated pixel_visitor_logs to 6.7GB (2026-07-01). Hash it
  // client-side. MUST stay byte-identical to the server guard
  // (engine/store/identity.py normalize_fp_components): canonicalize as Python
  // json.dumps(v, sort_keys=True, separators=(",",":"))  [ensure_ascii default],
  // then sha256-hex anything longer than 128 chars. The server guard stays in place as
  // belt-and-suspenders (old cached copies of this script, hashing fallback below).

  // JSON string literal escaped the way Python's json.dumps does (ensure_ascii=True):
  // every code unit outside 0x20-0x7E becomes \uXXXX (lowercase hex). JSON.stringify
  // already handles ", \ and control shorthands identically; only non-ASCII differs.
  function pyJsonString(s) {
    return JSON.stringify(s).replace(/[\u007f-\uffff]/g, function (ch) {
      return '\\u' + ('0000' + ch.charCodeAt(0).toString(16)).slice(-4)
    })
  }

  function canonicalJson(v) {
    if (v === null || typeof v === 'boolean' || typeof v === 'number') return JSON.stringify(v)
    if (typeof v === 'string') return pyJsonString(v)
    if (Array.isArray(v)) {
      var items = []
      for (var i = 0; i < v.length; i++) items.push(canonicalJson(v[i] === undefined ? null : v[i]))
      return '[' + items.join(',') + ']'
    }
    var keys = Object.keys(v).sort()
    var parts = []
    for (var j = 0; j < keys.length; j++) {
      if (v[keys[j]] === undefined) continue
      parts.push(pyJsonString(keys[j]) + ':' + canonicalJson(v[keys[j]]))
    }
    return '{' + parts.join(',') + '}'
  }

  function sha256Hex(str) {
    var bytes = new TextEncoder().encode(str)
    return crypto.subtle.digest('SHA-256', bytes).then(function (buf) {
      var arr = new Uint8Array(buf)
      var hex = ''
      for (var i = 0; i < arr.length; i++) hex += (arr[i] < 16 ? '0' : '') + arr[i].toString(16)
      return hex
    })
  }

  // Mirrors normalize_fp_components: returns a Promise of the value to send as canvas_hash.
  function normalizeCanvas(v) {
    if (v === undefined || v === null) return Promise.resolve(v)
    var s
    if (typeof v === 'object') {
      try { s = canonicalJson(v) } catch (e) { return Promise.resolve(undefined) }
    } else if (typeof v === 'string') {
      s = v
    } else {
      return Promise.resolve(v)
    }
    if (s.length <= 128) return Promise.resolve(s)
    try {
      if (window.crypto && crypto.subtle && window.TextEncoder) {
        return sha256Hex(s).catch(function () { return s })
      }
    } catch (e) {}
    return Promise.resolve(s) // no SubtleCrypto — server guard collapses it
  }

  function computeAndStore() {
    if (!shouldRefresh()) return

    var script = document.createElement('script')
    script.src = API + '/sms/pixel/fp.min.js'
    script.async = true
    script.onload = function () {
      if (!window.FingerprintJS) return
      window.FingerprintJS.load()
        .then(function (agent) { return agent.get() })
        .then(function (result) {
          var comps = result.components || {}

          // canvas and webgl may be objects with a .value, or already a string
          function extractValue(c) {
            if (!c) return undefined
            if (typeof c === 'object' && 'value' in c) return c.value
            return c
          }

          // Hash the canvas component BEFORE it reaches localStorage or the beacon —
          // the sandboxed recoup-pixel forwards zobi_fp_components verbatim, so this is
          // the single client-side choke point for both send paths.
          return normalizeCanvas(extractValue(comps.canvas)).then(function (canvasHash) {
            try {
              var components = {
                canvas_hash: canvasHash,
                webgl_renderer: extractValue(comps.webgl),
                screen:
                  window.screen.width +
                  'x' +
                  window.screen.height +
                  'x' +
                  window.screen.colorDepth,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                languages: navigator.languages
                  ? navigator.languages.join(',')
                  : navigator.language || '',
                hw_concurrency: navigator.hardwareConcurrency || null,
                browser_version:
                  (navigator.userAgent.match(/(Chrome|Safari|Firefox)\/[\d.]+/) || [])[0] || '',
              }

              localStorage.setItem(LS_FP, result.visitorId)
              localStorage.setItem(LS_COMPONENTS, JSON.stringify(components))
              localStorage.setItem(LS_TS, String(Date.now()))
            } catch (e) {
              // localStorage blocked (private browsing mode on some browsers)
            }

            // Send a direct beacon so the server captures the fingerprint immediately.
            // The web pixel reads localStorage asynchronously and misses first-visit fingerprints
            // due to a timing race — this beacon bypasses that entirely.
            // sendBeacon with form-encoded body avoids CORS preflights entirely.
            try {
              // _shopify_y is the durable visitor identity cookie — same value Shopify's
              // web pixel exposes as event.clientId, so beacons and checkout events share the key.
              var shopifyY = (document.cookie.match(/_shopify_y=([^;]+)/) || [])[1] || ''
              var beaconUrl = API + '/sms/pixel/fp-beacon'
              var params = 'fingerprint=' + encodeURIComponent(result.visitorId)
                + '&shop=' + encodeURIComponent((window.Shopify && window.Shopify.shop) || '')
                + '&fp_components=' + encodeURIComponent(JSON.stringify(components))
                + (shopifyY ? '&client_id=' + encodeURIComponent(shopifyY) + '&shopify_y=' + encodeURIComponent(shopifyY) : '')
              var sent = false
              if (navigator.sendBeacon) {
                sent = navigator.sendBeacon(beaconUrl, new Blob([params], { type: 'application/x-www-form-urlencoded' }))
              }
              if (!sent) {
                fetch(beaconUrl, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: params, keepalive: true }).catch(function () {})
              }
            } catch (e) {}
          })
        })
        .catch(function () {})
    }
    script.onerror = function () {}
    document.head.appendChild(script)
  }

  // ── Lasso session reporting ────────────────────────────────────────────────
  // Why this exists: on a Lasso-checkout store the discount CANNOT be carried in a URL — Lasso's
  // checkout reads no discount parameter, so Shopify's /discount/ door renders our code as a label
  // with nothing off the price. The code has to be attached to Lasso's own session, server-side.
  //
  // Lasso mints that session WHILE the customer browses (its storefront script syncs the cart and
  // drops the id in a `lasso_sid` cookie scoped to the registrable domain, ~30 min). So it does not
  // exist at page load — it appears only once something is in the cart, which is why this polls
  // instead of piggy-backing on the fingerprint beacon above.
  //
  // SAFETY: we report ONLY when the visitor arrived through a link we texted (the `zs` token). Lasso
  // creates a session for every visitor and this script sees all of them; reporting them all would
  // let the server discount the whole storefront. The token is what keeps this to people we chose to
  // message. No token -> this block never sends anything, which is every brand that is not using it.
  var LS_ZS = 'zobi_zs'
  var ZS_TTL_MS = 60 * 60 * 1000        // an hour of browsing is generous; stale tokens just expire

  function currentToken() {
    try {
      var m = window.location.search.match(/[?&]zs=([^&#]+)/)
      if (m && m[1]) {
        localStorage.setItem(LS_ZS, JSON.stringify({ t: decodeURIComponent(m[1]), ts: Date.now() }))
        return decodeURIComponent(m[1])
      }
      var raw = JSON.parse(localStorage.getItem(LS_ZS) || 'null')
      if (raw && raw.t && (Date.now() - (raw.ts || 0)) < ZS_TTL_MS) return raw.t
    } catch (e) {}
    return ''
  }

  function readLassoSid() {
    // localStorage FIRST: it is Lasso's canonical, NEVER-expiring copy of the session id (the bundle
    // writes localStorage.setItem('lasso_sid', …) on every cart sync). The cookie is only a 30-min
    // mirror, so a shopper who browses a while, or leaves and returns, is invisible via the cookie
    // but still recoverable here. Cookie is the fallback (private-mode / storage-blocked).
    try {
      var ls = localStorage.getItem('lasso_sid')
      if (ls) return ls
    } catch (e) {}
    try {
      return (document.cookie.match(/(?:^|;\s*)lasso_sid=([^;]+)/) || [])[1] || ''
    } catch (e) { return '' }
  }

  function reportLassoSid(token, sid) {
    try {
      var url = API + '/sms/pixel/lasso-session'
      var body = 'zs=' + encodeURIComponent(token) + '&lasso_sid=' + encodeURIComponent(sid)
        + '&shop=' + encodeURIComponent((window.Shopify && window.Shopify.shop) || '')
      if (navigator.sendBeacon &&
          navigator.sendBeacon(url, new Blob([body], { type: 'application/x-www-form-urlencoded' }))) return
      fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                   body: body, keepalive: true }).catch(function () {})
    } catch (e) {}
  }

  function watchLassoSession() {
    var token = currentToken()
    if (!token) return                  // not one of ours — never report
    var reported = ''

    function check() {
      var sid = readLassoSid()
      if (!sid || sid === reported) return
      reported = sid                    // report each DISTINCT sid once (a cart rebuild can rotate it)
      reportLassoSid(token, sid)
    }

    // Poll for ~15 min (the session lives forever server-side, but the customer's tab rarely does),
    // and ALSO re-check whenever the tab is re-shown or the page is about to unload — Shopify's
    // add-to-cart, tab-switch to checkout, and back-navigation all surface as visibility changes, so
    // the sid is caught even when it appears long after the ~3-min window the old poll gave up at.
    check()
    var tries = 0
    var timer = setInterval(function () {
      tries++
      if (tries > 900) { clearInterval(timer); return }   // ~15 min
      check()
    }, 1000)
    try {
      document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'visible') check()
      })
      window.addEventListener('pagehide', check)
      document.addEventListener('click', check, true)     // add-to-cart / checkout button clicks
    } catch (e) {}
  }

  // ── PPU seed ────────────────────────────────────────────────────────────────
  // A product-page link we texted can carry ?lasso_seed=<sid>, a Lasso session we pre-minted with the
  // discount already on it. Write it to localStorage.lasso_sid BEFORE the customer adds to cart, so
  // Lasso's own storefront script (which reads localStorage.lasso_sid fresh at add-to-cart and passes
  // it as sessionId) REUSES our discounted session — the code then rides into whatever they add and
  // checkout is Lasso, in the merchant's funnel. No beacon, no server round-trip: the session is
  // already discounted server-side; we only tell the browser which one to use.
  //
  // Runs on page load, before any add-to-cart. Overwrites any existing lasso_sid on purpose: this
  // visitor arrived through OUR link, so our pre-discounted session is the one we want them on. Only
  // fires when the param is present — every other visit is byte-identical.
  function seedLassoSession() {
    try {
      var m = window.location.search.match(/[?&]lasso_seed=([^&#]+)/)
      if (!m || !m[1]) return
      var sid = decodeURIComponent(m[1])
      if (sid) localStorage.setItem('lasso_sid', sid)
    } catch (e) {}
  }

  // ── Popup identity capture ──────────────────────────────────────────────────
  // Why this exists: a signup lead comes in through a third-party popup (Klaviyo, Privy, a
  // spin-to-win) that the sandboxed web pixel never sees, so the products this browser viewed could
  // never be tied to the person who later got our opener. On a form submit we send the email/phone
  // they typed together with this browser's fingerprint and Shopify client id; the server records
  // the link (POST /sms/pixel/identify, engine/api/routes_pixel_assets.py). Forms with a password
  // field (login) are skipped. Klaviyo forms also announce submits on window 'klaviyoForms', which
  // covers popups that post over fetch without a DOM submit.
  var IDENTIFY_URL = API + '/sms/pixel/identify'
  var sentIdentities = {}

  function sendIdentity(email, phone, firstName) {
    try {
      email = String(email || '').trim().toLowerCase()
      phone = String(phone || '').trim()
      firstName = String(firstName || '').trim().slice(0, 40)
      if (email.indexOf('@') < 1) email = ''
      if (phone.replace(/\D/g, '').length < 7) phone = ''
      if (!email && !phone) return
      // the name is part of the key: a multi-step popup asks for it on a later step than the
      // email, and that second submit must not be deduped away as "already sent"
      var key = email + '|' + phone + '|' + firstName
      if (sentIdentities[key]) return
      sentIdentities[key] = true
      var fp = ''
      try { fp = localStorage.getItem(LS_FP) || '' } catch (e) {}
      var shopifyY = (document.cookie.match(/_shopify_y=([^;]+)/) || [])[1] || ''
      if (!fp && !shopifyY) return
      var body = 'shop=' + encodeURIComponent((window.Shopify && window.Shopify.shop) || '')
        + '&email=' + encodeURIComponent(email) + '&phone=' + encodeURIComponent(phone)
        + '&fingerprint=' + encodeURIComponent(fp) + '&client_id=' + encodeURIComponent(shopifyY)
        + '&first_name=' + encodeURIComponent(firstName)
      if (navigator.sendBeacon &&
          navigator.sendBeacon(IDENTIFY_URL, new Blob([body], { type: 'application/x-www-form-urlencoded' }))) return
      fetch(IDENTIFY_URL, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                            body: body, keepalive: true }).catch(function () {})
    } catch (e) {}
  }

  // A name field is read too, and only a FIRST-name-shaped one: "first name", "fname",
  // autocomplete="given-name", or a bare "name" (which popups overwhelmingly use for the first
  // name; the server keeps its first token anyway). Last-name and full-name-only fields are left
  // alone, because "Hey Robertson" is worse than no greeting at all.
  var NAME_HINT = /(^|[^a-z])(first[-_ ]?name|fname|given[-_ ]?name|given|firstname)([^a-z]|$)|^name$|customer\[first_name\]/
  var NOT_NAME_HINT = /last|surname|family|company|business|user|nick|full/

  function contactFields(form) {
    var email = ''
    var phone = ''
    var name = ''
    var els = (form && form.elements) || []
    for (var i = 0; i < els.length; i++) {
      var el = els[i]
      if (!el) continue
      var type = String(el.type || '').toLowerCase()
      if (type === 'password') return ['', '', '']
      if (!el.value) continue
      var hint = (String(el.name || '') + ' ' + String(el.id || '') + ' ' +
                  String(el.autocomplete || '') + ' ' + String(el.placeholder || '')).toLowerCase()
      if (!email && (type === 'email' || /e-?mail/.test(hint))) email = el.value
      else if (!phone && (type === 'tel' || /phone|mobile|sms/.test(hint))) phone = el.value
      else if (!name && type !== 'checkbox' && type !== 'radio' &&
               NAME_HINT.test(hint) && !NOT_NAME_HINT.test(hint)) name = el.value
    }
    return [email, phone, name]
  }

  function watchContactForms() {
    try {
      document.addEventListener('submit', function (ev) {
        try {
          var f = contactFields(ev.target)
          sendIdentity(f[0], f[1], f[2])
        } catch (e) {}
      }, true)
      window.addEventListener('klaviyoForms', function (ev) {
        try {
          var d = (ev && ev.detail) || {}
          if (d.type !== 'submit' && d.type !== 'stepSubmit') return
          var m = d.metaData || {}
          sendIdentity(m.$email || m.email, m.$phone_number || m.phone_number,
                       m.$first_name || m.first_name)
        } catch (e) {}
      })
    } catch (e) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { seedLassoSession(); computeAndStore(); watchLassoSession() })
  } else {
    seedLassoSession()
    computeAndStore()
    watchLassoSession()
  }
  // Listeners attach immediately, not at DOMContentLoaded: a popup can open and submit before it.
  watchContactForms()
})()
