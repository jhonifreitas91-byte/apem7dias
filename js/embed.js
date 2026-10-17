(() => {
  // Stores that must not have ANY storage written — and must not even load the
  // tracking bundle — before the visitor has consented. Merchant-requested
  // (ePrivacy / GDPR). Every other store keeps loading immediately, unchanged.
  // Hardcoded on purpose: looking the list up over the network would itself be
  // a request made before consent.
  var CONSENT_GATED_SHOPS = ["futurekind.myshopify.com", "futurekind.com"];

  // Held in memory only; written to localStorage once we are allowed to.
  var viewedItem = window.item;

  function loadBundle() {
    var s = document.createElement("script");
    s.src = "https://cdn.aimerce.ai/a.browser.shopify.umd.js";
    s.async = true;
    document.head.appendChild(s);
  }

  function rememberViewedItem() {
    if (!viewedItem) return;
    localStorage.setItem("__aim_viewed", JSON.stringify(viewedItem));
    try {
      const existing = localStorage.getItem("__aim_vi") || "[]";
      const viewed = JSON.parse(existing);
      const index = viewed.findIndex((v) => v.ProductID === viewedItem.ProductID);
      if (index === -1) {
        viewed.push(viewedItem);
        localStorage.setItem("__aim_vi", JSON.stringify(viewed));
      }
    } catch (e) {
      console.warn(e);
    }
  }

  function start() {
    loadBundle();
    rememberViewedItem();
  }

  function isConsentGated() {
    var shop = (window.Shopify && window.Shopify.shop) || "";
    var host = window.location.hostname || "";
    return CONSENT_GATED_SHOPS.some(function (domain) {
      return shop === domain || host === domain || host.endsWith("." + domain);
    });
  }

  // --- early landing beacon -------------------------------------------------
  // iOS WebKit loses our Web Pixel's first-screen events for a large share of
  // ad landings: the PageView, and the ViewContent with it (2026-09-27: of iOS
  // product-page landings whose pixel PageView was missing, 4.7% had a
  // ViewContent). The bundle loads too late to help visitors who leave in the
  // first second or two. This sends one small copy of each from the <head>,
  // marked `aim_landing_beacon`. Orga only ever uses it as a backup: it goes
  // to Meta solely when the pixel's own copy never arrives, only for shops
  // that turned it on, and never to PostHog (Orga
  // LandingPageViewFallbackService). Requires that Orga release first:
  // an Orga that does not know the marker would dispatch these as ordinary
  // events.
  //
  // The mobile page view is sent right away, like the bundle's. The
  // ViewContent is stricter than the bundle: nothing is sent for it until
  // Shopify's Customer Privacy API positively allows it. Stores that must not
  // be tracked before consent, and those whose consent the bundle handles
  // specially, get no beacon at all.
  var BEACON_URL = "https://e.aimerce.ai/api/v1/ingress/e/";
  // Keep in step with analytics src/browser/shopify-consent.ts.
  var BUNDLE_CONSENT_PILOTS = ["jockey", "playbetter", "cradlewise"];
  var BEACON_WAIT_MS = 10000;
  var landingStartedAt = Date.now();

  function beaconConsent() {
    try {
      var cp = window.Shopify && window.Shopify.customerPrivacy;
      if (!cp || typeof cp.analyticsProcessingAllowed !== "function") return null;
      return !!(cp.analyticsProcessingAllowed() || cp.marketingAllowed());
    } catch (e) {
      return null;
    }
  }

  function queryParam(name) {
    try {
      return new URLSearchParams(window.location.search).get(name) || "";
    } catch (e) {
      return "";
    }
  }

  function readCookie(name) {
    var parts = document.cookie ? document.cookie.split("; ") : [];
    for (var i = 0; i < parts.length; i++) {
      var eq = parts[i].indexOf("=");
      if (parts[i].slice(0, eq) === name) {
        try {
          return decodeURIComponent(parts[i].slice(eq + 1));
        } catch (e) {
          return parts[i].slice(eq + 1);
        }
      }
    }
    return "";
  }

  // The visitor id, resolved exactly as the bundle's getClientUid() does
  // (analytics src/browser/identification.ts): `_shopify_y`, else the
  // `_aim_u_i` kept in localStorage, else a new one stored there. On years.co
  // the bundle reads its shared `_aim_u_i` cookie first, so this does too.
  // Deliberately never writes the `_aim_u_i` cookie: the Web Pixel prefers
  // that cookie when Shopify gives it no clientId, and a value written here
  // first would make the pixel and the bundle disagree about who the visitor is.
  function visitorId() {
    var host = String(window.location.hostname || "").toLowerCase();
    if (host === "years.co" || host.slice(-9) === ".years.co") {
      var shared = readCookie("_aim_u_i");
      if (shared) return shared;
    }
    var main = readCookie("_shopify_y");
    if (main) return main;
    var stored = "";
    try {
      stored = localStorage.getItem("_aim_u_i") || "";
    } catch (e) {}
    if (stored) return stored;
    var id =
      window.crypto && typeof window.crypto.randomUUID === "function"
        ? window.crypto.randomUUID()
        : Date.now() + "." + Math.random().toString().substring(2);
    // What the bundle would store itself when it finds nothing, so it adopts
    // this id when it loads.
    try {
      localStorage.setItem("_aim_u_i", id);
    } catch (e) {}
    return id;
  }

  // Phone, tablet or desktop, decided in the browser: iPadOS Safari sends a
  // desktop (Macintosh) user agent, so only touch support tells an iPad apart.
  function deviceType() {
    var ua = navigator.userAgent || "";
    if (/iPad/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) return "Tablet";
    if (/iPhone|iPod/.test(ua) || (/Android/.test(ua) && /Mobile/.test(ua))) return "Mobile";
    if (/Android/.test(ua)) return "Tablet";
    return "Desktop";
  }

  function newEventId() {
    return window.crypto && typeof window.crypto.randomUUID === "function"
      ? window.crypto.randomUUID()
      : "embed-" + Date.now() + "-" + Math.random().toString(36).slice(2);
  }

  // The product being viewed, in the shape the Web Pixel reports it
  // (`pixelViewedProductVariant`), so Orga builds the same content_ids for it.
  function viewedVariant() {
    var meta = window.ShopifyAnalytics && window.ShopifyAnalytics.meta;
    var product = meta && meta.product;
    if (!product || !product.id || !product.variants || !product.variants.length) return null;
    var wanted = queryParam("variant");
    var variant = product.variants[0];
    for (var i = 0; i < product.variants.length; i++) {
      if (String(product.variants[i].id) === wanted) variant = product.variants[i];
    }
    var amount = Number(variant.price) / 100;
    if (!(amount > 0)) return null;
    // Shopify writes ShopifyAnalytics.meta.currency next to these prices and
    // pairs the two in its own analytics, so it is the right label for them
    // whichever currency a multi-market store presents in.
    var currency =
      meta.currency || (window.Shopify && window.Shopify.currency && window.Shopify.currency.active) || "";
    var name = String(variant.name || "");
    var variantTitle = String(variant.public_title || "");
    var suffix = " - " + variantTitle;
    var productTitle =
      variantTitle && name.slice(-suffix.length) === suffix ? name.slice(0, -suffix.length) : name;
    return {
      id: String(variant.id),
      sku: variant.sku || "",
      title: variantTitle,
      price: { amount: amount, currencyCode: currency },
      product: { id: String(product.id), title: productTitle },
    };
  }

  function sendBeacon(event, distinctId, extra) {
    var properties = {
      token: (window.Shopify && window.Shopify.shop) || window.location.hostname,
      distinct_id: distinctId,
      $current_url: window.location.href,
      $host: window.location.hostname,
      $pathname: window.location.pathname,
      $referrer: document.referrer || "",
      $raw_user_agent: navigator.userAgent,
      $screen_width: window.screen && window.screen.width,
      $screen_height: window.screen && window.screen.height,
      $time: landingStartedAt / 1000,
      $device_type: deviceType(),
      $lib: "aimerce-embed",
      aim_landing_beacon: true,
    };
    for (var key in extra) properties[key] = extra[key];
    try {
      // text/plain keeps this a simple request (no CORS preflight); keepalive
      // lets it finish if the visitor is already leaving.
      fetch(BEACON_URL, {
        method: "POST",
        keepalive: true,
        credentials: "omit",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ event: event, uuid: newEventId(), properties: properties }),
      }).catch(function () {});
    } catch (e) {}
  }

  function startLandingBeacon() {
    if (window.top !== window) return;
    if (window.Shopify && window.Shopify.designMode) return;
    if (isConsentGated()) return;
    var shop = String((window.Shopify && window.Shopify.shop) || "").toLowerCase();
    var host = String(window.location.hostname || "").toLowerCase();
    var piloted = BUNDLE_CONSENT_PILOTS.some(function (keyword) {
      return shop.indexOf(keyword) !== -1 || host.indexOf(keyword) !== -1;
    });
    if (piloted) return;
    // A landing from a Meta ad: the only kind the backup applies to.
    if (!queryParam("fbclid")) return;

    var productPage = /\/products\//.test(window.location.pathname);
    var distinctId = "";
    // The page view backup is for mobile landings only (iOS first screens,
    // quick mobile bounces); on desktop the pixel's copy arrives.
    var sentPageView = deviceType() === "Desktop";
    var sentViewContent = !productPage;
    var poll;

    function stop() {
      clearInterval(poll);
      document.removeEventListener("visitorConsentCollected", tick);
    }

    function tick() {
      // The mobile page view goes out without waiting for consent, as the
      // bundle's own page view does. Waiting for Shopify's Customer Privacy
      // API took seconds, and those seconds are when the visitors this
      // exists for leave.
      if (!sentPageView) {
        sentPageView = true;
        distinctId = distinctId || visitorId();
        sendBeacon("$pageview", distinctId, {});
      }
      if (beaconConsent() !== true) return;
      distinctId = distinctId || visitorId();
      if (!sentViewContent) {
        var variant = viewedVariant();
        if (variant) {
          sentViewContent = true;
          sendBeacon("aim_view_item", distinctId, { pixelViewedProductVariant: variant });
        }
      }
      if (sentPageView && sentViewContent) stop();
    }

    try {
      if (!(window.Shopify && window.Shopify.customerPrivacy) && window.Shopify && window.Shopify.loadFeatures) {
        window.Shopify.loadFeatures([{ name: "consent-tracking-api", version: "0.1" }], function () {});
      }
    } catch (e) {}
    document.addEventListener("visitorConsentCollected", tick);
    poll = setInterval(tick, 100);
    setTimeout(stop, BEACON_WAIT_MS);
    tick();
  }

  try {
    startLandingBeacon();
  } catch (e) {}

  if (!isConsentGated()) {
    start();
    return;
  }

  // --- consent-gated path ---------------------------------------------------
  // Nothing above has touched storage yet. Wait for Shopify's Customer Privacy
  // API to report a granted consent, then start. `null` means "not known yet"
  // and must NOT be treated as granted.
  function consentGranted() {
    try {
      var cp = window.Shopify && window.Shopify.customerPrivacy;
      if (!cp || typeof cp.analyticsProcessingAllowed !== "function") return null;
      return !!(cp.analyticsProcessingAllowed() || cp.marketingAllowed());
    } catch (e) {
      return null;
    }
  }

  var started = false;
  var poll;

  function startIfAllowed() {
    if (started || consentGranted() !== true) return;
    started = true;
    clearInterval(poll);
    document.removeEventListener("visitorConsentCollected", startIfAllowed);
    start();
  }

  // The bundle normally loads the Customer Privacy API for us; it is not here
  // yet, so ask for it directly.
  try {
    if (window.Shopify && window.Shopify.loadFeatures) {
      window.Shopify.loadFeatures(
        [{ name: "consent-tracking-api", version: "0.1" }],
        function () {},
      );
    }
  } catch (e) {}

  document.addEventListener("visitorConsentCollected", startIfAllowed);
  // Poll for the first 30s to cover consent already granted on a return visit
  // and CMPs that update consent without firing the event; the listener stays
  // on afterwards so a later opt-in still starts us.
  poll = setInterval(startIfAllowed, 300);
  setTimeout(function () {
    clearInterval(poll);
  }, 30000);
  startIfAllowed();
})();
