import { s as g, d as p, e as N, a as M, b as Tt, i as j, u as Q, g as rt, c as Ge, f as Ce, n as Ot, h as He, j as w, k as je, w as Qe, l as Ue, r as ze, m as _t, o as L, p as E, q as P, t as T, v as x, x as q, y as Je, z as Ie, A as We, B as I, C as Ke, D as F, E as gt, F as U, G as $, H as at, I as G, J as Xe, K as Ye, L as Ze, M as tn, N as tt, O as en, P as we, Q as nn, R as rn, S as an, T as sn, U as on, V as ln, W as cn, X as dn, Y as un } from "./kaching-bundles-api.js";
const pn = () => {
  Rt() || setTimeout(Rt, 5e3);
}, Rt = () => {
  try {
    if (!("__snfKachingCheckout" in window.fetch)) return !1;
    g("checkout_hijack_detected");
  } catch (i) {
    console.error(i);
  }
  return !0;
}, hn = () => {
  const i = /\b__kaching_/, t = ["script", "style"], e = (r) => {
    const a = document.createTreeWalker(r, NodeFilter.SHOW_TEXT, {
      acceptNode: (o) => {
        const l = o.parentElement;
        return !l || t.includes(l.tagName.toLowerCase()) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    let s;
    for (; s = a.nextNode(); ) {
      const o = s.textContent || "";
      if (i.test(o)) {
        const l = s.parentElement;
        if (l.classList.contains("properties-key-value-key"))
          continue;
        if (l.tagName.toLowerCase() === "dt") {
          const c = l.nextElementSibling;
          (c == null ? void 0 : c.tagName.toLowerCase()) === "dd" && (c.style.display = "none");
        }
        l.style.display = "none", g(
          "kaching_property_hidden_v2",
          {
            text: o,
            element: l.tagName
          },
          { sampleRate: 0.01, once: !1 }
        );
      }
    }
  };
  new MutationObserver((r) => {
    for (const a of r)
      for (const s of a.addedNodes)
        s.nodeType === Node.ELEMENT_NODE && e(s);
  }).observe(document.body, {
    childList: !0,
    subtree: !0
  }), e(document.body);
}, fn = () => {
  const i = document.querySelector('link[href*="kaching-bundles.css"]');
  if (!i) return;
  const t = i.closest(
    'div[data-block-type="liquid"]'
  );
  t && (t.dataset.blockType = "liquid-kaching-fix");
}, mn = (i, t) => {
  const e = [], n = i.filter(
    (o) => o.blockVisibility === "selected-products"
  );
  for (const o of n)
    o.selectedProductIds.map(Number).includes(t.id) && e.push(o);
  const r = i.filter(
    (o) => o.blockVisibility === "selected-collections"
  );
  for (const o of r)
    t.collectionIds.some(
      (l) => o.selectedCollectionIds.map(Number).includes(l)
    ) && e.push(o);
  const a = i.filter(
    (o) => o.blockVisibility === "excluded-products"
  );
  for (const o of a)
    !o.excludedProductIds.map(Number).includes(t.id) && !(o.excludedCollectionIds || []).some(
      (l) => t.collectionIds.includes(l)
    ) && e.push(o);
  const s = i.filter(
    (o) => o.blockVisibility === "all-products"
  );
  for (const o of s)
    e.push(o);
  return e;
}, K = ({
  country: i,
  language: t
}) => {
  const e = [];
  return i && e.push(`country: ${i}`), t && e.push(`language: ${t}`), e.length > 0 ? `@inContext(${e.join(", ")})` : "";
}, _n = async (i, {
  productId: t,
  country: e,
  language: n
}) => {
  var a;
  const r = K({ country: e, language: n });
  return ((a = (await i.query(
    `
      query FetchComplementaryProductGIDs($productGID: ID!) ${r} {
        productRecommendations(productId: $productGID, intent: COMPLEMENTARY) {
          id
        }
      }
    `,
    {
      variables: {
        productGID: `gid://shopify/Product/${t}`
      }
    }
  )).productRecommendations) == null ? void 0 : a.map((s) => s.id)) || [];
}, Lt = async (i, {
  country: t,
  language: e,
  blockVisibility: n,
  excludedProductGIDs: r,
  selectedProductGIDs: a,
  selectedCollectionGIDs: s,
  limit: o = 1e3
}) => {
  switch (n) {
    case "selected-products":
      return a.slice(0, o);
    case "all-products":
    case "excluded-products": {
      const l = K({ country: t, language: e });
      let c = [], d = null;
      for (; c.length < o; ) {
        const u = Math.min(o - c.length, 250), h = await i.query(
          `
            query FetchProductGIDs($limit: Int!, $cursor: String) ${l} {
              products(first: $limit, after: $cursor) {
                nodes {
                  id
                }
                pageInfo {
                  hasNextPage
                  endCursor
                }
              }
            }
          `,
          {
            variables: {
              limit: u,
              cursor: d
            }
          }
        );
        if (c.push(...h.products.nodes.map((_) => _.id)), !h.products.pageInfo.hasNextPage) break;
        d = h.products.pageInfo.endCursor;
      }
      if (n === "excluded-products") {
        const u = new Set(r);
        c = c.filter((h) => !u.has(h));
      }
      return c;
    }
    case "selected-collections": {
      const l = K({ country: t, language: e }), c = (await i.query(
        `
          query FetchCollectionProductGIDs($collectionGIDs: [ID!]!, $limit: Int!) ${l} {
            nodes(ids: $collectionGIDs) {
              ... on Collection {
                products(first: $limit) {
                  nodes {
                    id
                  }
                }
              }
            }
          }
        `,
        {
          variables: {
            collectionGIDs: s,
            limit: Math.min(o, 250)
          }
        }
      )).nodes.filter((d) => d !== null).flatMap(
        (d) => d.products.nodes.map((u) => u.id)
      );
      return Array.from(new Set(c)).slice(0, o);
    }
  }
}, ve = `
  id
  availableForSale
  price {
    amount
  }
  compareAtPrice {
    amount
  }
  selectedOptions {
    name
    value
  }
  image {
    id
    url(transform: { maxWidth: 200, maxHeight: 200 })
  }
  unitPriceMeasurement {
    quantityUnit
    quantityValue
    referenceUnit
    referenceValue
  }
  requiresComponents
  sellingPlanAllocations(first: 100) @include(if: $includeSellingPlans) {
    nodes {
      sellingPlan {
        id
      }
      priceAdjustments {
        price {
          amount
        }
        compareAtPrice {
          amount
        }
        perDeliveryPrice {
          amount
        }
      }
    }
  }
  quantityAvailable @include(if: $includeAvailableQuantity)
`, et = async (i, {
  country: t,
  language: e,
  productIds: n,
  includeSellingPlans: r = !0,
  includeAvailableQuantity: a = !0,
  useExternalMetafieldNamespace: s = !1,
  batchSize: o = 250,
  onBatchError: l
}) => {
  if (!n.length)
    return [];
  const c = n.map((f) => typeof f == "string" && f.startsWith("gid://") ? f : `gid://shopify/Product/${f}`), d = K({ country: t, language: e }), u = `
    query FetchProducts($productGIDs: [ID!]!, $includeSellingPlans: Boolean!, $includeAvailableQuantity: Boolean!, $metafieldNamespace: String!) ${d} {
      shop {
        currencyRateConstant: metafield(namespace: $metafieldNamespace, key: "currency_rate_constant") {
          value
        }
      }
      nodes(ids: $productGIDs) {
        ... on Product {
          id
          handle
          onlineStoreUrl
          availableForSale
          createdAt
          title
          featuredImage {
            url
          }
          options {
            name
            optionValues {
              id
              name
              swatch {
                color
                image {
                  previewImage {
                    url(transform: { maxWidth: 200, maxHeight: 200 })
                  }
                }
              }
            }
          }
          variants(first: 250) {
            nodes {
              ${ve}
            }
          }
          collections(first: 50) {
            nodes {
              id
            }
          }
          metafield: metafield(namespace: $metafieldNamespace, key: "text") {
            value
          }
          metafield2: metafield(namespace: $metafieldNamespace, key: "text2") {
            value
          }
          metafield3: metafield(namespace: $metafieldNamespace, key: "text3") {
            value
          }
          metafield4: metafield(namespace: $metafieldNamespace, key: "text4") {
            value
          }
          requiresSellingPlan
          sellingPlanGroups(first: 100) @include(if: $includeSellingPlans) {
            nodes {
              sellingPlans(first: 100) {
                nodes {
                  id
                  name
                  priceAdjustments {
                    adjustmentValue {
                      __typename
                      ... on SellingPlanPercentagePriceAdjustment {
                        adjustmentPercentage
                      }
                      ... on SellingPlanFixedAmountPriceAdjustment {
                        adjustmentAmount {
                          amount
                        }
                      }
                      ... on SellingPlanFixedPriceAdjustment {
                        price {
                          amount
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `, h = s ? "app--2935586817--kaching_bundles" : "$app:kaching_bundles", _ = [], y = Math.min(o, 250);
  for (let f = 0; f < c.length; f += y)
    _.push(c.slice(f, f + y));
  let m = 1;
  const b = async (f) => {
    const k = await i.query(u, {
      variables: {
        productGIDs: f,
        includeSellingPlans: r,
        includeAvailableQuantity: a,
        metafieldNamespace: h
      }
    });
    return k.shop.currencyRateConstant && (m = JSON.parse(k.shop.currencyRateConstant.value).amount / 1e6), k;
  };
  let C;
  if (l) {
    const f = await Promise.allSettled(_.map(b));
    for (const k of f)
      k.status === "rejected" && l(
        k.reason instanceof Error ? k.reason : new Error(String(k.reason))
      );
    C = f.filter(
      (k) => k.status === "fulfilled"
    ).flatMap((k) => k.value.nodes);
  } else
    C = (await Promise.all(_.map(b))).flatMap((f) => f.nodes);
  const v = C.filter((f) => f != null);
  if (l) {
    const f = await Promise.allSettled(
      v.map(async (S) => {
        const O = await xt(
          i,
          S,
          { includeSellingPlans: r, includeAvailableQuantity: a },
          d
        );
        return $t(
          O,
          i.shopifyDomain,
          m
        );
      })
    ), k = [];
    for (const S of f)
      S.status === "fulfilled" ? k.push(S.value) : l(
        S.reason instanceof Error ? S.reason : new Error(String(S.reason))
      );
    return k;
  }
  return (await Promise.all(
    v.map(
      (f) => xt(
        i,
        f,
        {
          includeSellingPlans: r,
          includeAvailableQuantity: a
        },
        d
      )
    )
  )).map(
    (f) => $t(f, i.shopifyDomain, m)
  );
}, xt = async (i, t, e, n = "") => {
  if (t.variants.nodes.length < 250)
    return t;
  const r = /* @__PURE__ */ new Set(), a = [], s = [], o = async (l) => {
    let c = !0, d = null;
    for (; c; ) {
      const u = await i.query(
        `
          query($productGID: ID!, $cursor: String, $reverse: Boolean, $includeSellingPlans: Boolean!, $includeAvailableQuantity: Boolean!) ${n} {
            product(id: $productGID) {
              variants(first: 250, after: $cursor, reverse: $reverse) {
                nodes {
                  ${ve}
                }
                pageInfo {
                  endCursor
                  hasNextPage
                }
              }
            }
          }
        `,
        {
          variables: {
            productGID: t.id,
            cursor: d,
            reverse: l,
            ...e
          }
        }
      ), { nodes: h, pageInfo: _ } = u.product.variants;
      for (const y of h) {
        if (r.has(y.id)) {
          c = !1;
          break;
        }
        r.add(y.id), l ? s.push(y) : a.push(y);
      }
      _.hasNextPage || (c = !1), d = _.endCursor;
    }
  };
  return await Promise.all([
    o(!1),
    o(!0)
  ]), t.variants.nodes = [...a, ...s.reverse()], t;
}, $t = (i, t, e) => {
  var c, d, u, h, _, y;
  const n = i.variants.nodes.map(
    ({ unitPriceMeasurement: m, ...b }) => {
      var C, v, f;
      return {
        id: Number(b.id.split("/").pop()),
        availableForSale: b.availableForSale,
        price: Math.round(Number(b.price.amount) * 100),
        compareAtPrice: b.compareAtPrice ? Math.round(Number(b.compareAtPrice.amount) * 100) : null,
        options: b.selectedOptions.map((k) => k.value),
        imageId: b.image ? Number(b.image.id.split("/").pop()) : null,
        image: ((C = b.image) == null ? void 0 : C.url) || null,
        sellingPlans: ((v = b.sellingPlanAllocations) == null ? void 0 : v.nodes.map((k) => ({
          id: Number(k.sellingPlan.id.split("/").pop()),
          price: k.priceAdjustments.length > 0 ? Math.round(Number(k.priceAdjustments[0].price.amount) * 100) : Math.round(Number(b.price.amount) * 100),
          compareAtPrice: k.priceAdjustments.length > 0 ? Math.round(
            Number(k.priceAdjustments[0].compareAtPrice.amount) * 100
          ) : Math.round(Number(b.price.amount) * 100),
          perDeliveryPrice: k.priceAdjustments.length > 0 ? Math.round(
            Number(k.priceAdjustments[0].perDeliveryPrice.amount) * 100
          ) : Math.round(Number(b.price.amount) * 100)
        }))) || [],
        inventoryManagement: null,
        // Storefront API does not return inventory management, only available in liquid
        inventoryPolicy: null,
        // Storefront API does not return inventory policy, only available in liquid
        inventoryQuantity: (f = b.quantityAvailable) != null ? f : null,
        unitPriceMeasurement: m != null && m.quantityUnit && (m != null && m.referenceUnit) ? {
          quantityValue: m.quantityValue,
          quantityUnit: m.quantityUnit.toLowerCase(),
          referenceValue: m.referenceValue,
          referenceUnit: m.referenceUnit.toLowerCase()
        } : null
      };
    }
  ), r = i.options.map((m, b) => {
    const C = m.optionValues.map((v) => {
      var f, k, S, O;
      return {
        id: Number(v.id.split("/").pop()),
        defaultName: v.name,
        name: v.name,
        swatch: {
          color: ((f = v.swatch) == null ? void 0 : f.color) || null,
          image: ((O = (S = (k = v.swatch) == null ? void 0 : k.image) == null ? void 0 : S.previewImage) == null ? void 0 : O.url) || null
        }
      };
    });
    return {
      defaultName: m.name,
      name: m.name,
      position: b + 1,
      optionValues: gn(C, b, n)
    };
  }), a = (m) => {
    const b = m.priceAdjustments[0];
    if (!b)
      return null;
    const C = b.adjustmentValue;
    switch (C.__typename) {
      case "SellingPlanPercentagePriceAdjustment":
        return {
          type: "percentage",
          value: C.adjustmentPercentage
        };
      case "SellingPlanFixedAmountPriceAdjustment":
        return {
          type: "fixed_amount",
          value: s(C.adjustmentAmount.amount)
        };
      case "SellingPlanFixedPriceAdjustment":
        return {
          type: "price",
          value: s(C.price.amount)
        };
      default:
        throw new Error(
          `Unknown price adjustment type: ${C.__typename}`
        );
    }
  }, s = (m) => e === 1 ? Number(m) * 100 : Math.round(Number(m) * 100 * e), o = ((c = i.sellingPlanGroups) == null ? void 0 : c.nodes.flatMap(
    (m) => m.sellingPlans.nodes.map((b) => ({
      id: Number(b.id.split("/").pop()),
      name: b.name,
      priceAdjustment: a(b)
    }))
  )) || [], l = i.variants.nodes.some(
    (m) => m.requiresComponents
  );
  return {
    id: Number(i.id.split("/").pop()),
    handle: i.handle,
    url: i.onlineStoreUrl || `https://${t}/products/${i.handle}`,
    availableForSale: i.availableForSale,
    createdAt: i.createdAt,
    title: i.title,
    image: ((d = i.featuredImage) == null ? void 0 : d.url) || null,
    collectionIds: i.collections.nodes.map(
      (m) => Number(m.id.split("/").pop())
    ),
    options: r,
    selectedVariantId: Number(
      i.variants.nodes[0].id.split("/").pop()
    ),
    variants: n,
    requiresSellingPlan: i.requiresSellingPlan,
    sellingPlans: o,
    isNativeBundle: l,
    metafields: {
      text: ((u = i.metafield) == null ? void 0 : u.value) || null,
      text2: ((h = i.metafield2) == null ? void 0 : h.value) || null,
      text3: ((_ = i.metafield3) == null ? void 0 : _.value) || null,
      text4: ((y = i.metafield4) == null ? void 0 : y.value) || null
    }
  };
}, gn = (i, t, e) => i.filter((n) => e.filter(
  (r) => r.options[t] === n.name
).length > 0), Vt = async (i, t, e = 200) => (t = t.filter(Boolean).filter((n) => !n.startsWith("placeholder")), t.length === 0 ? [] : (await i.query(
  `
      query FetchMediaImages($mediaImageIds: [ID!]!, $size: Int!) {
        nodes(ids: $mediaImageIds) {
          ... on MediaImage {
            id
            image {
              url(transform: { maxWidth: $size, maxHeight: $size })
            }
          }
        }
      }
    `,
  {
    variables: {
      mediaImageIds: t,
      size: e
    }
  }
)).nodes.filter(Boolean).map((n) => ({
  gid: n.id,
  url: n.image.url
}))), yn = async (i, t) => {
  if (!t.length) return [];
  const e = t.map((n) => `gid://shopify/Product/${n}`);
  return (await i.query(
    `
      query FetchNativeBundleProductIds($productGIDs: [ID!]!) {
        nodes(ids: $productGIDs) {
          ... on Product {
            id
            variants(first: 1) {
              nodes {
                requiresComponents
              }
            }
          }
        }
      }
    `,
    { variables: { productGIDs: e } }
  )).nodes.filter((n) => n !== null).filter(
    (n) => n.variants.nodes.some((r) => r.requiresComponents)
  ).map((n) => Number(n.id.split("/").pop()));
}, bn = async (i, t, e) => {
  const n = t.map((a) => `gid://shopify/Product/${a}`), r = K({
    country: e == null ? void 0 : e.country,
    language: e == null ? void 0 : e.language
  });
  return (await i.query(
    `
      query FetchProductsInDefaultLanguage($productGIDs: [ID!]!) ${r} {
        nodes(ids: $productGIDs) {
          ... on Product {
            id
            options {
              name
              optionValues {
                id
                name
              }
            }
          }
        }
        localization {
          country {
            isoCode
          }
          language {
            isoCode
          }
        }
      }
    `,
    {
      variables: {
        productGIDs: n
      }
    }
  )).nodes.filter((a) => a != null).map(kn);
}, kn = (i) => {
  const t = i.options.map(
    (e, n) => ({
      defaultName: e.name,
      position: n + 1,
      optionValues: e.optionValues.map((r) => ({
        id: Number(r.id.split("/").pop()),
        defaultName: r.name
      }))
    })
  );
  return {
    id: Number(i.id.split("/").pop()),
    options: t
  };
};
var X = /* @__PURE__ */ ((i) => (i.QuantityBreak = "quantity-break", i.Bxgy = "bxgy", i.Bundle = "bundle", i.MixAndMatch = "mix-and-match", i.Sku = "sku", i))(X || {});
const Cn = (i) => [
  ...In(i),
  ...wn(i),
  ...vn(i),
  ...Sn(i),
  ...Pn(i),
  ...An(i),
  ...Bn(i),
  ...Tn(i),
  ...En(i),
  ...Dn(i),
  ...qn(i),
  ...Fn(i),
  ...Nn(i)
].filter((t) => t != null && !t.includes("placeholder")), In = (i) => i.dealBars.flatMap((t) => [t.mediaImageGID, t.badgeImageGID]).filter((t) => t != null), wn = (i) => i.dealBars.flatMap(
  (t) => t.dealBarType === X.Bundle ? t.bundleProducts.map(
    (e) => e.mediaImageGID
  ) : []
).filter((t) => t != null), vn = (i) => i.dealBars.map(
  ({ freeGifts: t }) => (t || []).map((e) => e.mediaImageGID)
).reduce((t, e) => t.concat(e), []).filter((t) => t != null), Sn = (i) => i.dealBars.flatMap(
  ({ multipleGiftsSelectors: t }) => (t || []).map((e) => e.mediaImageGID)
).filter((t) => t != null), Pn = (i) => i.dealBars.map(({ upsells: t }) => (t || []).map((e) => e.mediaImageGID)).reduce((t, e) => t.concat(e), []).filter((t) => t != null), An = (i) => i.swatchOptions ? i.swatchOptions.reduce((t, e) => {
  const n = e.images.map((r) => r.mediaImageGID).filter((r) => r != null);
  return [...t, ...n];
}, []) : [], Bn = (i) => {
  if (!i.collectionBreaksEnabled || !i.collectionBreaks)
    return [];
  const t = i.collectionBreaks.mediaImageGID;
  return t ? [t] : [];
}, Tn = (i) => {
  var t, e, n;
  return i.progressiveGifts ? [
    ...((t = i.progressiveGifts.gifts) == null ? void 0 : t.map((r) => r.mediaImageGID)) || [],
    (e = i.progressiveGifts.style) == null ? void 0 : e.lockedMediaImageGID,
    (n = i.progressiveGifts.dealBarStyle) == null ? void 0 : n.lockedMediaImageGID
  ].filter((r) => r != null) : [];
}, En = (i) => !i.checkboxUpsellsEnabled || !i.checkboxUpsells ? [] : i.checkboxUpsells.upsells.flatMap((t) => [t.mediaImageGID, t.badgeImageGID]).filter((t) => t != null), Dn = (i) => i.dealBars.map((t) => {
  var e;
  return (e = t.productPersonalisation) == null ? void 0 : e.mediaImageGID;
}).filter((t) => t != null), qn = (i) => {
  var n, r;
  const t = i.dealBars.map((a) => {
    var s;
    return (s = a.highlights) == null ? void 0 : s.customIconGID;
  }).filter((a) => a != null), e = (r = (n = i.subscriptions) == null ? void 0 : n.highlights) == null ? void 0 : r.customIconGID;
  return e ? [...t, e] : t;
}, Fn = (i) => (i.badges || []).flatMap(
  (t) => t.badgeType === "custom" && t.imageGID ? [t.imageGID] : []
), Nn = (i) => !i.savingsSummaryEnabled || !i.savingsSummary ? [] : i.savingsSummary.customIconGID ? [i.savingsSummary.customIconGID] : [], Mn = (i) => {
  const t = [
    ...On(i),
    ...Rn(i),
    ...Ln(i),
    ...xn(i),
    ...$n(i),
    ...Vn(i),
    ...Gn(i),
    ...Hn(i)
  ];
  return Array.from(new Set(t.filter((e) => e != null)));
}, On = (i) => i.dealBars.flatMap(
  ({ freeGifts: t }) => t ? t.map((e) => e.productGID) : []
).filter((t) => t != null), Rn = (i) => i.dealBars.flatMap(
  ({ multipleGiftsSelectors: t }) => t ? t.flatMap(
    (e) => e.products ? e.products.map((n) => n.id) : []
  ) : []
).filter((t) => t != null), Ln = (i) => {
  var t;
  return i.progressiveGiftsEnabled ? ((t = i.progressiveGifts) == null ? void 0 : t.gifts.map((e) => e.productGID).filter((e) => e != null)) || [] : [];
}, xn = (i) => i.dealBars.flatMap(({ upsells: t }) => t ? t.map((e) => e.productGID) : []).filter((t) => t != null), $n = (i) => i.dealBars.filter((t) => t.dealBarType === X.Bundle).flatMap(
  ({ bundleProducts: t }) => t ? t.map((e) => e.productGID) : []
).filter((t) => t != null).filter((t) => t !== "default"), Vn = (i) => i.dealBars.filter((t) => t.dealBarType === X.MixAndMatch).flatMap(
  ({ bundleProducts: t }) => t ? t.flatMap((e) => {
    var n, r;
    return [
      e.productGID,
      ...(r = (n = e.selectedProducts) == null ? void 0 : n.map((a) => a.id)) != null ? r : []
    ];
  }) : []
).filter((t) => t != null).filter((t) => t !== "default"), Gn = (i) => !i.checkboxUpsellsEnabled || !i.checkboxUpsells ? [] : i.checkboxUpsells.upsells.map((t) => t.productGID).filter((t) => t != null), Hn = (i) => i.dealBars.filter((t) => t.dealBarType === X.Sku).flatMap(({ productGID: t }) => t ? [t] : []), z = "kachingBundlesSaveOverlayDismissed", jn = "bundles.kachingappz.app", Qn = () => {
  const i = document.createElement("div");
  return i.className = "kaching-bundles-save-overlay", i.setAttribute("role", "status"), i.setAttribute("tabindex", "0"), i.setAttribute(
    "aria-label",
    "Click Save in the top-right corner to activate the app. Press Escape or Enter to dismiss."
  ), i.innerHTML = `
    <div class="kaching-bundles-save-overlay__content">
      <div class="kaching-bundles-save-overlay__text">Click "Save" in the top-right corner.</div>
      <svg class="kaching-bundles-save-overlay__arrow" aria-hidden="true" width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.0235 30.0476C26.9813 26.0688 31.6367 20.3068 34.359 13.6647C34.5787 13.1287 34.7807 12.5866 34.9688 12.0407C34.9872 12.1286 35.0055 12.2166 35.0239 12.3045C35.6997 15.541 36.1871 18.9234 37.35 22.0252C37.7091 22.9828 39.2759 22.7067 39.9528 22.449C40.7647 22.1396 42.0725 21.3396 41.9969 20.292C41.7562 16.9608 40.8171 13.666 40.0928 10.414C39.3726 7.17983 38.6526 3.94569 37.9324 0.711381C37.7809 0.0312821 36.6451 -0.0343474 36.1453 0.0113582C35.3082 0.0879608 34.2573 0.50077 33.6973 1.15893C33.4368 1.46497 33.1749 1.76993 32.9143 2.07579C32.6324 2.30048 32.3929 2.56904 32.2294 2.87801C29.1225 6.52203 26.0063 10.1587 22.8826 13.7888C22.4856 14.2503 22.2166 14.9143 22.9177 15.2375C23.5886 15.5469 24.5829 15.0895 25.0594 14.6178C27.0866 12.6108 29.1155 10.6056 31.1471 8.60291C30.1175 12.9391 28.3489 17.1025 25.7631 20.7229C24.0598 23.1078 21.9 25.3178 19.6649 26.9826C17.264 28.771 14.6378 30.214 11.9792 31.178C10.3347 31.7744 8.62775 32.2461 6.92197 32.6287C5.09815 33.0377 3.24342 33.2486 1.42578 33.6781C0.857063 33.8125 -0.79524 35.2271 0.459136 35.5827C3.73503 36.5115 7.65457 35.7308 10.8601 34.7902C14.4641 33.7324 17.896 32.1362 21.0235 30.0476Z" fill="white"/>
      </svg>
    </div>
  `, i;
}, Gt = (i) => {
  i.classList.add("kaching-bundles-save-overlay--dismissed");
  try {
    sessionStorage.setItem(z, "true");
  } catch {
  }
  setTimeout(() => i.remove(), 300);
}, Un = () => {
  if (sessionStorage.getItem(z))
    return;
  const i = Qn();
  document.body.appendChild(i), requestAnimationFrame(() => {
    i.classList.add("kaching-bundles-save-overlay--visible"), i.focus();
  }), i.addEventListener("click", () => Gt(i)), i.addEventListener("keydown", (t) => {
    (t.key === "Escape" || t.key === "Enter") && Gt(i);
  });
}, zn = async ({
  appHost: i,
  shopifyDomain: t,
  themeId: e
}) => {
  try {
    if (sessionStorage.getItem(z))
      return !0;
  } catch {
  }
  const n = new URLSearchParams({ shop: t });
  e && n.set("theme_id", e.toString());
  const r = `${i}/public_api/app_embed?${n.toString()}`, a = await fetch(r);
  if (!a.ok)
    throw new Error(`API error: ${a.status}`);
  const s = await a.json();
  if (s.themeInaccessible) {
    try {
      sessionStorage.setItem(z, "true");
    } catch {
    }
    return !0;
  }
  if (s.active)
    try {
      sessionStorage.setItem(z, "true");
    } catch {
    }
  return s.active;
}, Jn = async ({
  customApiHost: i,
  shopifyDomain: t,
  themeId: e
}) => {
  const r = `https://${i != null ? i : jn}`;
  try {
    await zn({
      appHost: r,
      shopifyDomain: t,
      themeId: e
    }) || Un();
  } catch {
  }
}, Wn = ({
  defaultTranslations: i,
  localeTranslations: t,
  dealBlockId: e
}) => ({
  ...i,
  ...t == null ? void 0 : t.system,
  ...t == null ? void 0 : t.dealBlocks[e]
}), Kn = (i, { excludeB2bCustomers: t }) => i.requireCustomerLogin && !i.isLoggedIn ? { status: "sign_in_required", signInUrl: Xn(i.locale) } : i.b2bCustomer && t ? { status: "unavailable" } : { status: "eligible" }, Xn = (i) => {
  const { pathname: t, search: e } = window.location, n = "/" + t.replace(/^\/+/, "") + e;
  return `/customer_authentication/login?${new URLSearchParams({ return_to: n, locale: i })}`;
};
function Yn(i, t, e) {
  var r, a;
  return t ? ((a = (r = window.Shopify.currency) == null ? void 0 : r.active) != null ? a : e) === t.currencyCode ? 1 : 1 / t.currencyRate * i : i;
}
function Se(i) {
  const t = i.map((n) => ({
    item: n,
    kachingBundles: Zn(n)
  })), e = new Set(
    t.filter(({ kachingBundles: n }) => Ht(n)).map(({ item: n }) => n.id)
  );
  return t.reduce((n, { item: r, kachingBundles: a }) => Ht(a) || a.collectionBreaksProduct && !a.bxgy && e.has(r.id) ? n + r.quantity : n, 0);
}
function Ht(i) {
  return i ? i.main || !1 : !0;
}
function Zn(i) {
  return i.properties.__kaching_bundles ? JSON.parse(i.properties.__kaching_bundles) : null;
}
function ti({
  items: i,
  primaryItem: t,
  additionalItemsEnabled: e,
  selectionValid: n,
  quantitySelectorVisible: r,
  customPropertiesNeedPropagation: a,
  acceleratedCheckoutQuantity: s
}) {
  return n ? i.length <= 1 ? !0 : !e || !t || a || r && Se(i) !== t.quantity ? !1 : s === t.quantity : !1;
}
const ei = (i, t) => i && t !== 422, jt = (i) => i !== 422;
async function yt() {
  if (window.kachingCartApi) {
    p("Kaching Cart update tiered promotions bar");
    try {
      await window.kachingCartApi.updateTieredPromotionsBar();
    } catch (i) {
      p(
        "Kaching Cart updateTieredPromotionsBar failed",
        N(i)
      );
    }
  }
}
const Et = { "X-Kaching-Cart-Ignore": "1" };
async function bt(i, t) {
  if (!(!i || !t))
    try {
      const e = await fetch(M("cart.js"));
      if (!e.ok) return;
      const n = await e.json(), r = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set();
      for (const o of n.items) {
        const l = kt(o);
        (l == null ? void 0 : l.deal) === i && l.pp === t && (r.add(o.key), l.id && a.add(l.id));
      }
      if (r.size === 0) return;
      for (const o of n.items) {
        const l = kt(o);
        l != null && l.id && a.has(l.id) && r.add(o.key);
      }
      const s = {};
      for (const o of r)
        s[o] = 0;
      await fetch(M("cart/update.js"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...Et
        },
        body: JSON.stringify({ updates: s })
      });
    } catch (e) {
      console.error("removeDealFromCart failed", e);
    }
}
function ni(i) {
  for (const t of i) {
    const e = kt(t);
    if (e != null && e.pp) return e.pp;
  }
}
function kt(i) {
  var e;
  const t = (e = i.properties) == null ? void 0 : e.__kaching_bundles;
  if (typeof t == "string")
    try {
      return JSON.parse(Tt(t));
    } catch {
      return;
    }
}
const ii = (i, { dropItems: t = !1 } = {}) => {
  var s;
  let e;
  try {
    e = JSON.parse(i);
  } catch {
    return null;
  }
  if (e.key != null || !Array.isArray(e.items)) return null;
  const n = e.items.filter(
    (o) => {
      var l;
      return (l = o.properties) == null ? void 0 : l.__kaching_bundles;
    }
  );
  if (!n.length) return null;
  const r = (s = n.find(ri)) != null ? s : n[0], a = { ...e, ...r };
  return t && delete a.items, JSON.stringify(a);
}, ri = (i) => {
  var e;
  const t = (e = i.properties) == null ? void 0 : e.__kaching_bundles;
  if (typeof t != "string") return !1;
  try {
    return !!JSON.parse(Tt(t)).main;
  } catch {
    return !1;
  }
}, ai = (i) => /\/cart\/change(\.js)?(\?|$)/.test(i), si = (i) => {
  const t = { id: null, line: null, quantity: null };
  if (i == null) return t;
  if (i instanceof FormData || i instanceof URLSearchParams)
    return ht(i);
  if (typeof i == "string") {
    if (j(i))
      return ht(Q(i));
    try {
      const e = JSON.parse(i);
      return {
        id: e.id != null ? String(e.id) : null,
        line: e.line != null ? Number(e.line) : null,
        quantity: e.quantity != null ? Number(e.quantity) : null
      };
    } catch {
      return t;
    }
  }
  return t;
}, ht = (i) => {
  const t = i.get("id"), e = i.get("line"), n = i.get("quantity");
  return {
    id: t,
    line: e != null ? Number(e) : null,
    quantity: n != null ? Number(n) : null
  };
}, oi = (i, t) => {
  if (t.line != null && Number.isFinite(t.line)) {
    const e = t.line - 1;
    return e >= 0 && e < i.length ? e : -1;
  }
  if (t.id != null) {
    const e = i.findIndex((r) => r.key === t.id);
    if (e >= 0) return e;
    const n = Number(t.id);
    if (Number.isFinite(n))
      return i.findIndex((r) => r.id === n);
  }
  return -1;
}, li = (i, t) => {
  var o;
  if (t.quantity == null || !Number.isFinite(t.quantity))
    return { rewrite: !1 };
  let e;
  try {
    e = JSON.parse(i);
  } catch {
    return { rewrite: !1 };
  }
  const n = e == null ? void 0 : e.items;
  if (!Array.isArray(n)) return { rewrite: !1 };
  const r = oi(n, t);
  if (r < 0) return { rewrite: !1 };
  const a = n[r];
  return ((o = a.properties) == null ? void 0 : o.__kaching_bundles) ? a.quantity === t.quantity ? { rewrite: !1 } : (a.quantity = t.quantity, { rewrite: !0, body: JSON.stringify(e) }) : { rewrite: !1 };
};
function ci(i, t) {
  const e = /* @__PURE__ */ new Map();
  for (const a of i) {
    const s = di(a);
    e.set(s, (e.get(s) || 0) + a.quantity);
  }
  const n = /* @__PURE__ */ new Map();
  for (const a of t) {
    const s = Qt(a);
    n.set(s, (n.get(s) || 0) + a.quantity);
  }
  for (const [a, s] of e)
    if ((n.get(a) || 0) < s)
      return null;
  const r = new Set(e.keys());
  return t.filter((a) => r.has(Qt(a)));
}
function di(i) {
  return Pe(i.id, i.selling_plan, i.properties);
}
function Qt(i) {
  var t;
  return Pe(
    i.variant_id,
    (t = i.selling_plan_allocation) == null ? void 0 : t.selling_plan.id,
    i.properties
  );
}
function Pe(i, t, e) {
  const n = e == null ? void 0 : e.__kaching_bundles, r = typeof n == "string" ? Tt(n) : "";
  return `${i}|${t != null ? t : ""}|${r}`;
}
const ui = async (i, t) => {
  if (i)
    try {
      const e = hi(await t.clone().text()), n = await fi(t);
      g(
        "debug_cart_add_v6",
        {
          sessionId: rt(),
          sent: i.map(pi),
          added: e,
          cart: n
        },
        { once: !1 }
      );
    } catch {
    }
}, pi = (i) => {
  const t = {
    id: i.id,
    quantity: i.quantity
  };
  try {
    const { deal: e, bar: n, bid: r } = JSON.parse(
      i.properties.__kaching_bundles
    );
    t.deal = e, t.bar = n != null ? n : r;
  } catch {
  }
  return t;
}, Ae = (i) => {
  var t;
  return {
    id: i.id,
    quantity: i.quantity,
    originalLinePrice: i.original_line_price,
    discount: i.line_level_total_discount,
    // Deal bar titles when the discount is ours, since that is what the
    // function labels its discounts with.
    discountTitles: (t = i.line_level_discount_allocations) == null ? void 0 : t.map(
      (e) => {
        var n;
        return (n = e.discount_application) == null ? void 0 : n.title;
      }
    )
  };
}, hi = (i) => {
  try {
    const t = JSON.parse(i);
    return !Array.isArray(t.items) && t.key == null ? void 0 : (Array.isArray(t.items) ? t.items : [t]).map(Ae);
  } catch {
    return;
  }
}, fi = async (i) => {
  var t;
  try {
    return (await ((t = Ge(i)) != null ? t : mi())).items.map(Ae);
  } catch {
    return;
  }
}, mi = async () => (await fetch(M("cart.js"))).json();
function st(i) {
  return J(i) ? gi(i) : _i(i);
}
function J(i) {
  return Array.from(i.keys()).some((t) => t.startsWith("items["));
}
function _i(i) {
  const t = i.get("id");
  if (!t)
    return g(
      "intercept_cart_request_declined_v2",
      {
        reason: "missing_item_id"
      },
      { sampleRate: 0.05, once: !1 }
    ), null;
  const e = {};
  i.forEach((s, o) => {
    const l = o.match(/^properties\[(.+)\]$/);
    l && (e[l[1]] = s);
  }), Ce(e);
  const n = {
    id: Number(t),
    quantity: Number(i.get("quantity")) || 1,
    properties: e
  }, r = i.get("selling_plan");
  r && (n.selling_plan = Number(r));
  const a = i.get("parent_id");
  return a && (n.parent_id = Number(a)), [n];
}
function gi(i) {
  const t = /* @__PURE__ */ new Map();
  if (i.forEach((n, r) => {
    const a = r.match(/^items\[(\d+)\]\[(.+)\]$/);
    if (!a) return;
    const s = Number(a[1]), o = a[2];
    t.has(s) || t.set(s, { properties: {} });
    const l = t.get(s);
    switch (o) {
      case "id":
        l.id = Number(n);
        break;
      case "quantity":
        l.quantity = Number(n);
        break;
      case "selling_plan":
        l.selling_plan = Number(n);
        break;
      case "parent_id":
        l.parent_id = Number(n);
        break;
      default: {
        const c = o.match(/^properties\]\[(.+)$/);
        c && (l.properties[c[1]] = n);
      }
    }
  }), t.size === 0) return null;
  const e = [];
  for (const [, n] of t) {
    if (!n.id) continue;
    Ce(n.properties);
    const r = {
      id: n.id,
      quantity: n.quantity || 1,
      properties: n.properties
    };
    n.selling_plan && (r.selling_plan = n.selling_plan), n.parent_id && (r.parent_id = n.parent_id), e.push(r);
  }
  return e.length > 0 ? e : null;
}
function Ut(i, t) {
  const e = new FormData();
  if (i.forEach((n, r) => {
    Ci(r) || e.append(r, n);
  }), t.length === 1 && !J(i)) {
    const n = t[0];
    if (e.append("id", String(n.id)), e.append("quantity", String(n.quantity)), n.selling_plan && e.append("selling_plan", String(n.selling_plan)), n.parent_id && e.append("parent_id", String(n.parent_id)), n.properties)
      for (const [r, a] of Object.entries(n.properties))
        e.append(`properties[${r}]`, Be(a));
  } else
    t.forEach(
      (n, r) => Ii(e, n, r)
    );
  return e;
}
function yi(i) {
  for (const [, t] of i)
    if (t instanceof Blob) return !0;
  return !1;
}
function bi(i) {
  const t = /* @__PURE__ */ new Set();
  for (const [e] of i)
    if (!e.startsWith("items[")) {
      if (t.has(e)) return !0;
      t.add(e);
    }
  return !1;
}
function ki(i, t) {
  const e = {};
  return i.forEach((n, r) => {
    r.startsWith("items[") || (e[r] = n);
  }), e.items = t, JSON.stringify(e);
}
function Ci(i) {
  return ["id", "quantity", "selling_plan", "parent_id"].includes(i) || // Some themes (e.g. Candy) submit both `id` and `id[]` with the same
  // variant id in their product form. Shopify treats `id[]` as a separate
  // add operation, so it must be stripped along with `id` — otherwise the
  // variant gets added a second time (with empty properties) alongside the
  // rewritten `items[N][...]` payload.
  ["id[]", "quantity[]", "selling_plan[]", "parent_id[]"].includes(i) || i.startsWith("properties[") || i.startsWith("items[");
}
function Ii(i, t, e) {
  if (i.append(`items[${e}][id]`, String(t.id)), i.append(`items[${e}][quantity]`, String(t.quantity)), t.selling_plan && i.append(`items[${e}][selling_plan]`, String(t.selling_plan)), t.parent_id && i.append(`items[${e}][parent_id]`, String(t.parent_id)), t.properties)
    for (const [n, r] of Object.entries(t.properties))
      i.append(
        `items[${e}][properties][${n}]`,
        Be(r)
      );
}
function Be(i) {
  return i instanceof Blob ? i : String(i);
}
const wi = 500, zt = (i) => g(
  "intercept_cart_request_declined_v2",
  {
    reason: "json_parse_failed",
    body: i.slice(0, wi)
  },
  { sampleRate: 0.05, once: !1 }
);
function Te(i) {
  try {
    const t = JSON.parse(i);
    return !t || typeof t != "object" ? (zt(i), null) : Array.isArray(t.items) ? t.items.filter(
      (e) => e && typeof e == "object" && "id" in e
    ).map((e) => Ot(e)) : t.id ? [Ot(t)] : null;
  } catch {
    return zt(i), null;
  }
}
function vi(i, t) {
  try {
    const e = JSON.parse(i), n = [
      "id",
      "quantity",
      "selling_plan",
      "parent_id",
      "properties"
    ], r = {};
    for (const [a, s] of Object.entries(e))
      !n.includes(a) && a !== "items" && !a.startsWith("properties[") && (r[a] = s);
    return t.length === 1 && !Array.isArray(e.items) ? Object.assign(r, t[0]) : r.items = t, JSON.stringify(r);
  } catch {
    return t.length === 1 ? JSON.stringify(t[0]) : JSON.stringify({ items: t });
  }
}
const Si = 100, Pi = 1500;
class Ai {
  constructor() {
    this._inFlight = /* @__PURE__ */ new Map(), this._staleDeadlines = /* @__PURE__ */ new Map();
  }
  // The interceptor's committed-cart check runs inside the in-flight send and
  // can outlive STALE_MS. Evicting during that window would dispatch a fresh
  // full add on top of one that may already be committed, so the check extends
  // how long waiters keep trusting the entry. Bounded by the caller — a popup
  // holding a request open never extends, so the anti-wedge eviction stays.
  extendStale(t, e) {
    this._staleDeadlines.set(t, Date.now() + e);
  }
  // Returns a stable key for a bundle add body, or null if this body either
  // isn't a bundle add or isn't a body shape we know how to dedupe. The cheap
  // string check up front means we don't parse (and don't trigger the parse-
  // error telemetry) for normal non-bundle adds.
  buildKey(t) {
    if (!Bi(t)) return null;
    const e = Ti(t);
    return !(e != null && e.length) || !e.some((n) => n.properties.__kaching_bundles) ? null : Ei(e);
  }
  // Runs `send` and remembers the in-flight Response for `key`. If another
  // call comes in with the same key while the first is in flight, or for a
  // short window after it settles, the second call doesn't run — it gets a
  // clone of the first response and `deduped: true`.
  //
  // If the first request errors out, we don't replay the error: we re-enter
  // so this waiter either joins onto a sibling's fresh retry (if one already
  // started) or starts the retry itself. Without re-entering, three concurrent
  // waiters could each fire their own send after a failed first attempt and
  // double the cart all over again — the bug this guard exists to prevent.
  async dispatch(t, e) {
    const n = this._inFlight.get(t);
    if (n)
      try {
        return { response: (await this._raceStale(t, n)).clone(), deduped: !0 };
      } catch {
        return this.dispatch(t, e);
      }
    const r = e();
    return this._inFlight.set(t, r), r.then(
      () => {
        this._staleDeadlines.delete(t), setTimeout(() => {
          this._inFlight.get(t) === r && this._inFlight.delete(t);
        }, Si);
      },
      () => {
        this._staleDeadlines.delete(t), this._inFlight.get(t) === r && this._inFlight.delete(t);
      }
    ), { response: (await r).clone(), deduped: !1 };
  }
  // Race the in-flight request against a stale timer. If the request doesn't
  // settle within STALE_MS (e.g. a popup is holding the Promise open), we
  // evict the entry and let the caller dispatch fresh rather than blocking
  // the cart button indefinitely — unless the send extended its deadline via
  // extendStale, in which case the timer re-arms until that deadline passes.
  async _raceStale(t, e) {
    const n = e.then((a) => ({ response: a }));
    n.catch(() => {
    });
    let r = Pi;
    for (; ; ) {
      const a = await Promise.race([
        n,
        new Promise(
          (l) => setTimeout(() => l({ stale: !0 }), r)
        )
      ]);
      if ("response" in a)
        return a.response;
      const s = this._staleDeadlines.get(t), o = s ? s - Date.now() : 0;
      if (o <= 0)
        throw this._staleDeadlines.delete(t), this._inFlight.get(t) === e && this._inFlight.delete(t), new Error("stale");
      r = o;
    }
  }
}
function Bi(i) {
  if (typeof i == "string")
    return i.includes("__kaching_bundles");
  if (i instanceof FormData) {
    for (const t of i.keys())
      if (t.includes("__kaching_bundles")) return !0;
    return !1;
  }
  return !1;
}
function Ti(i) {
  try {
    return i instanceof FormData ? st(i) : j(i) ? st(Q(i)) : Te(i);
  } catch {
    return null;
  }
}
function Ei(i) {
  const t = i.map((e) => {
    var n;
    return {
      id: e.id,
      quantity: e.quantity,
      sellingPlan: (n = e.selling_plan) != null ? n : null,
      properties: e.properties
    };
  }).sort((e, n) => {
    var s, o;
    if (e.id !== n.id) return e.id - n.id;
    const r = String((s = e.properties.__kaching_bundles) != null ? s : ""), a = String((o = n.properties.__kaching_bundles) != null ? o : "");
    return r.localeCompare(a);
  });
  return JSON.stringify(t);
}
const Di = ["rever_non_returnable"];
function qi(i, t, e) {
  i = i.map((l) => ({
    ...l
  }));
  const n = i.find(
    (l) => l.properties.__kaching_bundles
  );
  if (!n && e.fallbackDeal) {
    const l = e.fallbackDeal, c = i.filter(
      (y) => !l.product.variants.some((m) => m.id === y.id) && !t.some((m) => m.id === y.id)
    ), d = i.find(
      (y) => l.product.variants.some((m) => m.id === y.id)
    ), u = d ? Kt(d.properties).custom : {}, h = Wt(
      u,
      t,
      e.propagateLineProperties
    );
    return [...t.map(
      (y) => Jt(
        y,
        h,
        u
      )
    ), ...c];
  }
  const r = n ? Kt(n.properties) : { custom: {}, internal: {} }, a = n ? Wt(
    r.custom,
    t,
    e.propagateLineProperties
  ) : null;
  if (n) {
    const l = t.find(
      (c) => c.id === n.id && c.properties.__kaching_bundles === n.properties.__kaching_bundles
    );
    l && (n.quantity = l.quantity, l.selling_plan && (n.selling_plan = l.selling_plan), a && (n.properties = {
      ...r.internal,
      ...a.get(l)
    }));
  }
  return [...t.filter(
    (l) => !i.some(
      (c) => c.id === l.id && c.properties.__kaching_bundles === l.properties.__kaching_bundles
    )
  ).map(
    (l) => Jt(
      l,
      a,
      r.custom
    )
  ), ...i];
}
function Jt(i, t, e) {
  if (t)
    return {
      ...i,
      properties: {
        ...t.get(i),
        ...i.properties
      }
    };
  const n = JSON.parse(i.properties.__kaching_bundles);
  return n != null && n.main ? {
    ...i,
    properties: {
      ...e,
      ...i.properties
    }
  } : i;
}
function Wt(i, t, e) {
  var l;
  if (!e)
    return null;
  const n = {}, r = /* @__PURE__ */ new Map();
  for (const [c, d] of Object.entries(i)) {
    if (Di.includes(c))
      continue;
    const u = c.match(/(\d+)\s*$/);
    if (u) {
      const h = parseInt(u[1], 10), _ = (l = r.get(h)) != null ? l : {};
      _[c] = d, r.set(h, _);
    } else
      n[c] = d;
  }
  const a = t.reduce(
    (c, d) => c + d.quantity,
    0
  );
  for (const [c, d] of r)
    (c < 1 || c > a) && (Object.assign(n, d), r.delete(c));
  const s = /* @__PURE__ */ new Map();
  let o = 0;
  for (const c of t) {
    const d = { ...n };
    for (const [u, h] of r)
      u > o && u <= o + c.quantity && Object.assign(d, h);
    s.set(c, d), o += c.quantity;
  }
  return s;
}
function Kt(i) {
  const t = {}, e = {};
  for (const [n, r] of Object.entries(i))
    n.startsWith("_kaching") || n.startsWith("__kaching") ? e[n] = r : t[n] = r;
  return { custom: t, internal: e };
}
const Fi = [400, 1e3], Ni = 4e3, Xt = /* @__PURE__ */ new WeakMap();
class Mi {
  constructor() {
    this._started = !1, this._registeredDeals = /* @__PURE__ */ new Map(), this._fallbackDeal = null, this._fallbackDealTimeout = null, this._rewriteCartChangeEnabled = !1, this._propagateLinePropertiesEnabled = !1, this._cartChangeDetectionReported = !1, this._dedupeEnabled = !0, this._jsonEncodingEnabled = !1, this._debugCartAddEnabled = !1, this._dedupe = new Ai(), this._skipCartDealIds = /* @__PURE__ */ new Set();
  }
  start(t) {
    this._rewriteCartChangeEnabled = t.cart_change_response_rewrite === !0, this._propagateLinePropertiesEnabled = t.propagate_line_properties === !0, this._dedupeEnabled = t.cart_interceptor_dedupe_disabled !== !0, this._jsonEncodingEnabled = t.cart_interceptor_json_encoding === !0, this._debugCartAddEnabled = t.debug_cart_add === !0, !this._started && (this._started = !0, this._interceptFetchRequests(), this._interceptXHRRequests(), this._interceptCartFormSubmits(), window.OpusNoATC = !0, p("CartInterceptor started"));
  }
  registerDeal(t, e, n, r, a = {}) {
    const s = this._registeredDeals.get(t) || [];
    s.push({ getItems: n, product: e, barTypes: a }), this._registeredDeals.set(t, s), r && this._skipCartDealIds.add(t), p("CartInterceptor deal registered", {
      dealId: t,
      totalDeals: s.length
    });
  }
  setFallbackDeal(t, e) {
    p("CartInterceptor fallback deal set", { dealId: t }), this._fallbackDealTimeout && clearTimeout(this._fallbackDealTimeout), this._fallbackDeal = { dealId: t, product: e }, this._fallbackDealTimeout = window.setTimeout(() => {
      this._fallbackDeal = null, this._fallbackDealTimeout = null;
    }, 2e3);
  }
  // A deselected add must not be rescued into a deal: a fallback set by an
  // earlier selected click can still be inside its 2s window (PRO-554).
  clearFallbackDeal() {
    this._fallbackDealTimeout && (clearTimeout(this._fallbackDealTimeout), this._fallbackDealTimeout = null), this._fallbackDeal = null;
  }
  _interceptFetchRequests() {
    if (window.__kachingBundlesFetchHandler !== void 0) {
      window.__kachingBundlesFetchHandler = (e, n, r) => this._handleFetchRequest(e, n, r), p("CartInterceptor installed into embed fetch handler slot");
      return;
    }
    const t = window.fetch.bind(window);
    window.fetch = (e, n) => this._handleFetchRequest(t, e, n);
  }
  async _handleFetchRequest(t, e, n) {
    var s, o;
    const r = this._withDebugCartAddReport(t), a = ft(e);
    if (!a) return r(e, n);
    if (this._isInterceptableUrl(a)) {
      const l = this._getModifiedBody(a, n == null ? void 0 : n.body, !0), c = (s = l == null ? void 0 : l.body) != null ? s : n == null ? void 0 : n.body, d = this._dedupe.buildKey(c), u = () => this._sendInterceptableCartAdd(
        r,
        e,
        n,
        l,
        this._dedupeEnabled ? d : null
      );
      if (d && this._dedupeEnabled) {
        const { response: h, deduped: _ } = await this._dedupe.dispatch(
          d,
          u
        );
        return _ && g(
          "intercept_cart_request_deduped_v3",
          {
            theme: (o = window.Shopify.theme) == null ? void 0 : o.schema_name
          },
          { sampleRate: 0.05, once: !1 }
        ), h;
      }
      return u();
    } else if (ai(a)) {
      const l = await r(e, n);
      return this._maybeRewriteCartChangeResponse(l, n == null ? void 0 : n.body);
    }
    return r(e, n);
  }
  // Every cart add we let through — the theme's, the merged one, and our own
  // kaching_bundles=true one — goes through this fetch, so wrapping it reports
  // all of them from a single place. Only for shops with debug_cart_add on.
  _withDebugCartAddReport(t) {
    return (e, n) => {
      var r;
      return !this._debugCartAddEnabled || !((r = ft(e)) != null && r.includes("cart/add")) ? t(e, n) : this._cartAddWithDebugReport(t, e, n);
    };
  }
  async _cartAddWithDebugReport(t, e, n) {
    const r = await t(e, n), a = n == null ? void 0 : n.body;
    return (typeof a == "string" || a instanceof FormData) && ui(this._parseOriginalItems(a), r), r;
  }
  async _sendInterceptableCartAdd(t, e, n, r, a = null) {
    var d, u, h, _, y;
    if (!r)
      return t(e, n);
    const s = He(t), o = s.fetch, l = { ...n }, c = this._modifiedRequestInit(e, n, r);
    this._writeBackRequest(n, c, r), w("Intercepting cart/add request, merging bundle items"), g(
      "intercept_cart_request_v3",
      {
        type: "fetch",
        theme: (d = window.Shopify.theme) == null ? void 0 : d.schema_name
      },
      { sampleRate: 0.01, once: !1 }
    );
    try {
      const m = await o(e, c);
      return await this._rewriteCartAddResponse(m, r);
    } catch (m) {
      p("Modified request failed, attempting recovery", { error: m }), g(
        "intercept_cart_request_failed_v1",
        {
          type: "fetch",
          theme: (u = window.Shopify.theme) == null ? void 0 : u.schema_name,
          error: N(m)
        },
        { once: !1 }
      );
      const b = await this._committedCartAddResponse(
        e,
        r,
        a
      );
      if (b)
        return g("intercept_cart_request_retry_skipped", {
          type: "fetch",
          theme: (h = window.Shopify.theme) == null ? void 0 : h.schema_name
        }), b;
      try {
        const C = await o(e, c);
        return g(
          "intercept_cart_request_merged_retry_v1",
          {
            outcome: "recovered",
            theme: (_ = window.Shopify.theme) == null ? void 0 : _.schema_name
          },
          { once: !1 }
        ), await this._rewriteCartAddResponse(C, r);
      } catch (C) {
        const v = await this._committedCartAddResponse(
          e,
          r,
          a
        );
        return g(
          "intercept_cart_request_merged_retry_v1",
          {
            outcome: v ? "recovered_committed" : "fell_back",
            theme: (y = window.Shopify.theme) == null ? void 0 : y.schema_name,
            error: N(C)
          },
          { once: !1 }
        ), v || (s.fallback(), this._writeBackRequest(n, l, r), o(e, l));
      }
    }
  }
  // Shopify's shop_events_listener reads the request body off the init object
  // the theme passed, once the response lands. With the app embed's parse-time
  // fetch wrapper on the page the listener sits outside us, so it compares the
  // theme's line count against our merged response and drops the add. Writing
  // the request we actually send back onto the theme's init lets it count that
  // one: the merged request up front, the theme's own again before a fallback.
  // Not for a single-line add handed back in the single-item shape: there the
  // listener reads the quantity off that same body, which must stay the theme's.
  _writeBackRequest(t, e, n) {
    !t || !this._jsonEncodingEnabled || n.expandedSingleLineAdd || (t.body = e.body, t.headers = e.headers);
  }
  async _committedCartAddResponse(t, e, n) {
    var a;
    n && this._dedupe.extendStale(n, Ni);
    const r = await this._findCommittedCartLines(e.items);
    return r ? this._rewriteCartAddResponse(
      this._withResponseUrl(
        new Response(JSON.stringify({ items: r }), {
          status: 200,
          headers: { "content-type": "application/json" }
        }),
        (a = ft(t)) != null ? a : ""
      ),
      e
    ) : null;
  }
  // Swapping only the body would keep the theme's original Content-Type
  // header; a re-encoded body must carry its own.
  _modifiedRequestInit(t, e, n) {
    var a;
    const r = { ...e, body: n.body };
    if (n.contentType) {
      const s = new Headers(
        (a = e == null ? void 0 : e.headers) != null ? a : t instanceof Request ? t.headers : void 0
      );
      s.set("Content-Type", n.contentType), r.headers = s;
    }
    return r;
  }
  async _findCommittedCartLines(t) {
    for (const e of Fi) {
      await new Promise((n) => setTimeout(n, e));
      try {
        const n = await fetch(M("cart.js"));
        if (!n.ok) continue;
        const r = await n.json(), a = ci(t, r.items);
        if (a)
          return a;
      } catch {
        continue;
      }
    }
    return null;
  }
  async _rewriteCartAddResponse(t, e) {
    var n, r;
    if (!t.ok)
      return jt(t.status) && g(
        "intercept_cart_request_failed_v1",
        {
          type: "fetch",
          theme: (n = window.Shopify.theme) == null ? void 0 : n.schema_name,
          status: t.status
        },
        { once: !1 }
      ), t;
    try {
      const a = ii(await t.clone().text(), {
        dropItems: e.expandedSingleLineAdd && this._jsonEncodingEnabled
      });
      if (!a) return t;
      e.expandedSingleLineAdd && g(
        "intercept_cart_single_line_expansion_detected",
        {
          applied: this._jsonEncodingEnabled,
          theme: (r = window.Shopify.theme) == null ? void 0 : r.schema_name
        },
        { sampleRate: 0.05, once: !1 }
      );
      const s = new Headers(t.headers);
      return s.delete("content-length"), this._withResponseUrl(
        new Response(a, {
          status: t.status,
          statusText: t.statusText,
          headers: s
        }),
        t.url
      );
    } catch (a) {
      return p("Cart add response rewrite failed, returning original", {
        error: a
      }), t;
    }
  }
  async _maybeRewriteCartChangeResponse(t, e) {
    var a;
    if (!t.ok || !(t.headers.get("content-type") || "").includes("json")) return t;
    const r = si(e);
    if (r.quantity == null || !this._rewriteCartChangeEnabled && this._cartChangeDetectionReported)
      return t;
    try {
      const o = await t.clone().text(), l = li(o, r);
      if (!l.rewrite || (this._cartChangeDetectionReported || (this._cartChangeDetectionReported = !0, g("cart_change_rewrite_detected", {
        applied: this._rewriteCartChangeEnabled,
        theme: (a = window.Shopify.theme) == null ? void 0 : a.schema_name
      })), !this._rewriteCartChangeEnabled)) return t;
      const c = new Headers(t.headers);
      return c.delete("content-length"), this._withResponseUrl(
        new Response(l.body, {
          status: t.status,
          statusText: t.statusText,
          headers: c
        }),
        t.url
      );
    } catch (s) {
      return p("Cart change response rewrite failed, returning original", {
        error: s
      }), t;
    }
  }
  _interceptXHRRequests() {
    var o, l, c, d;
    const t = XMLHttpRequest.prototype.open, e = XMLHttpRequest.prototype.send, n = function(u, h, _ = !0, y, m) {
      return Xt.set(this, h instanceof URL ? h.href : h), t.call(this, u, h, _, y, m);
    }, r = function(u) {
      var _, y;
      const h = Xt.get(this);
      if (h) {
        const m = H._getModifiedBody(h, u);
        if (m) {
          w("Intercepting XHR cart/add request, merging bundle items"), g(
            "intercept_cart_request_v3",
            {
              type: "xhr",
              theme: (_ = window.Shopify.theme) == null ? void 0 : _.schema_name
            },
            { sampleRate: 0.01, once: !1 }
          );
          try {
            return e.call(this, m.body);
          } catch (b) {
            return p("Modified XHR request failed, retrying with original", {
              error: b
            }), g(
              "intercept_cart_request_failed_v1",
              {
                type: "xhr",
                theme: (y = window.Shopify.theme) == null ? void 0 : y.schema_name,
                error: N(b)
              },
              { once: !1 }
            ), e.call(this, u);
          }
        }
      }
      return e.call(this, u);
    }, a = Object.getOwnPropertyDescriptor(
      XMLHttpRequest.prototype,
      "open"
    ), s = Object.getOwnPropertyDescriptor(
      XMLHttpRequest.prototype,
      "send"
    );
    if ((a == null ? void 0 : a.configurable) === !1 || (s == null ? void 0 : s.configurable) === !1) {
      p("Cannot intercept XHR - prototype methods are not configurable");
      return;
    }
    Object.defineProperty(XMLHttpRequest.prototype, "open", {
      value: n,
      writable: (o = a == null ? void 0 : a.writable) != null ? o : !0,
      configurable: (l = a == null ? void 0 : a.configurable) != null ? l : !0
    }), Object.defineProperty(XMLHttpRequest.prototype, "send", {
      value: r,
      writable: (c = s == null ? void 0 : s.writable) != null ? c : !0,
      configurable: (d = s == null ? void 0 : s.configurable) != null ? d : !0
    });
  }
  _interceptCartFormSubmits() {
    const t = async (e) => {
      var d, u, h, _, y, m, b;
      if (e.defaultPrevented || this._fallbackDeal && this._skipCartDealIds.has(this._fallbackDeal.dealId) || !(e.target instanceof HTMLFormElement))
        return;
      const n = e.target, r = n.action;
      if (!r.includes("/cart/add"))
        return;
      const a = new FormData(n), s = this._getModifiedBody(r, a);
      if (!s)
        return;
      e.preventDefault(), g(
        "intercept_cart_request_v3",
        {
          type: "form",
          theme: (d = window.Shopify.theme) == null ? void 0 : d.schema_name
        },
        { sampleRate: 0.01, once: !1 }
      );
      const o = this._parseOriginalItems(a), l = o ? ze(o, (u = this._fallbackDeal) == null ? void 0 : u.dealId) : (h = this._fallbackDeal) == null ? void 0 : h.dealId, c = l ? this._skipCartDealIds.has(l) : !1;
      try {
        c && await bt(l, ni(o != null ? o : []));
        let C = null;
        try {
          C = await fetch(r, {
            method: "POST",
            body: a,
            // Only the skipCart branch below settles Kaching Cart before it
            // navigates. The /cart branch does not, so it still needs the
            // refetch that this header would suppress.
            headers: c ? Et : void 0
          });
        } catch (v) {
          if (g(
            "intercept_cart_request_failed_v1",
            {
              type: "form",
              theme: (_ = window.Shopify.theme) == null ? void 0 : _.schema_name,
              error: N(v)
            },
            { once: !1 }
          ), !await this._findCommittedCartLines(
            s.items
          )) {
            p("Fetch request failed, submitting original form", {
              error: v
            }), n.submit();
            return;
          }
          g("intercept_cart_request_retry_skipped", {
            type: "form",
            theme: (y = window.Shopify.theme) == null ? void 0 : y.schema_name
          });
        }
        if (C && !C.ok) {
          jt(C.status) && g(
            "intercept_cart_request_failed_v1",
            {
              type: "form",
              theme: (m = window.Shopify.theme) == null ? void 0 : m.schema_name,
              status: C.status
            },
            { once: !1 }
          ), p("Merged form request failed, submitting original form", {
            status: C.status
          }), n.submit();
          return;
        }
        c && await yt(), window.location.href = c ? M("checkout") : "/cart";
      } catch (C) {
        p("Fetch request failed, submitting original form", {
          error: C
        }), g(
          "intercept_cart_request_failed_v1",
          {
            type: "form",
            theme: (b = window.Shopify.theme) == null ? void 0 : b.schema_name,
            error: N(C)
          },
          { once: !1 }
        ), n.submit();
      }
    };
    document.addEventListener("submit", t), setTimeout(() => {
      document.removeEventListener("submit", t), document.addEventListener("submit", t);
    }, 3e3);
  }
  _getModifiedBody(t, e, n = !1) {
    try {
      if (!this._isInterceptableUrl(t))
        return null;
      if (p("Request body", e), typeof e != "string" && !(e instanceof FormData))
        return g(
          "intercept_cart_request_declined_v2",
          {
            reason: "invalid_body_type"
          },
          { sampleRate: 0.05, once: !1 }
        ), null;
      const r = this._parseOriginalItems(e);
      if (p("Original items", r), !r)
        return null;
      const a = this._findBundleItems(r);
      if (p("Bundle items", a), !a)
        return null;
      const s = this._mergeItems(r, a);
      if (p("Merged items", s), JSON.stringify(r) === JSON.stringify(s) && !je(e))
        return null;
      const o = this._updateBody(e, s, n);
      return p("Updated body", o.body), {
        body: o.body,
        items: s,
        contentType: o.contentType,
        expandedSingleLineAdd: s.length > 1 && !this._usesItemsArrayShape(e)
      };
    } catch (r) {
      return p("CartInterceptor error, falling back to original request", {
        error: r
      }), g(
        "intercept_cart_request_declined_v2",
        {
          reason: "processing_exception"
        },
        { sampleRate: 0.05, once: !1 }
      ), null;
    }
  }
  _isInterceptableUrl(t) {
    return t.includes("cart/add") && !t.includes("kaching_bundles=true") && !t.includes("kaching-cart=true") && !t.includes("kaching_popup=true") && !t.includes("kaching_subscriptions_gift=true");
  }
  _usesItemsArrayShape(t) {
    return t instanceof FormData ? J(t) : j(t) ? J(Q(t)) : Array.isArray(JSON.parse(t).items);
  }
  _parseOriginalItems(t) {
    if (t instanceof FormData)
      return st(t);
    if (j(t)) {
      const e = Q(t);
      return st(e);
    }
    return Te(t);
  }
  _findBundleItems(t) {
    var s, o;
    const e = t.find(
      (l) => l.properties.__kaching_bundles
    ), n = e ? JSON.parse(e.properties.__kaching_bundles).deal : (s = this._fallbackDeal) == null ? void 0 : s.dealId;
    if (!n)
      return null;
    const r = this._fallbackDeal;
    if (!e && r) {
      if (!t.some(
        (c) => r.product.variants.some((d) => d.id === c.id)
      ))
        return null;
      g(
        "fallback_deal_used_v3",
        {
          theme: (o = window.Shopify.theme) == null ? void 0 : o.schema_name
        },
        { sampleRate: 0.05, once: !1 }
      );
    }
    const a = this._registeredDeals.get(n);
    if (!(a != null && a.length))
      return p("No registered deals found", { dealId: n }), e && this._reportPassthrough(e, "no_registered_deals", n, []), null;
    for (const { getItems: l, product: c } of a) {
      const d = l();
      if (e ? d.some(
        (h) => t.some(
          (_) => _.id === h.id && _.properties.__kaching_bundles === h.properties.__kaching_bundles
        )
      ) : d.length > 0 && c.id === (r == null ? void 0 : r.product.id)) return d;
    }
    return p("No matching items found for deal", { dealId: n }), e && this._reportPassthrough(e, "no_matching_deal", n, a), null;
  }
  // A tagged add we fail to merge reaches the cart as a lone full-price line
  // with a deal property — the failure mode behind PRO-554 that emitted no
  // telemetry at all. barType and registeredLines tell whether the
  // passthrough lost lines: only bars that add extra lines are harmed.
  _reportPassthrough(t, e, n, r) {
    var a;
    try {
      const s = JSON.parse(
        t.properties.__kaching_bundles
      ), o = (a = s.bar) != null ? a : s.bid;
      g("intercept_cart_request_passthrough_v2", {
        reason: e,
        deal: n,
        hasBar: !!o,
        barType: r.map((l) => l.barTypes[o]).find(Boolean),
        registeredLines: Math.max(
          0,
          ...r.map((l) => l.getItems().length)
        )
      });
    } catch (s) {
      console.error(s);
    }
  }
  _mergeItems(t, e) {
    return qi(t, e, {
      fallbackDeal: this._fallbackDeal,
      propagateLineProperties: this._propagateLinePropertiesEnabled
    });
  }
  // Gated so a shop with the flag off keeps byte-identical behaviour: the url
  // only matters once the listener can count the add — `dropItems` for a
  // single-line body, the written-back merged body for an items[] one — and
  // both are gated on the same flag.
  _withResponseUrl(t, e) {
    return this._jsonEncodingEnabled ? Qe(t, e) : t;
  }
  _updateBody(t, e, n) {
    var r, a;
    if (t instanceof FormData) {
      const s = Ut(t, e);
      return (r = this._jsonEncodedBody(
        s,
        e,
        n
      )) != null ? r : { body: s };
    }
    if (j(t)) {
      const s = Q(t), o = Ut(s, e);
      return (a = this._jsonEncodedBody(
        o,
        e,
        n
      )) != null ? a : { body: Ue(o) };
    }
    return { body: vi(t, e) };
  }
  // Shopify's shop_events_listener answers a bulk `{ items: [...] }` response
  // by parsing the request body and comparing its item count against the
  // response's. JSON.parse keeps every merged line, but the listener's other
  // two parsers collapse `items[N]` entries that repeat a variant id into a
  // single item: a url-encoded body throws outright, and a FormData body
  // silently counts short whenever a quantity break splits one variant across
  // several lines. Either way the counts disagree, the listener throws
  // "Payload body and response have different number of items", and
  // product_added_to_cart is dropped for the whole add — our own pixel still
  // fires, so the add only goes missing from Shopify's native analytics. JSON
  // is the one encoding whose count always matches. Fetch-only: it is the only
  // path that can replace the Content-Type header alongside the body (XHR
  // can't rewrite an already-set header). The event reports every hit so shops
  // still losing the pixel event are visible before the flag is enabled.
  _jsonEncodedBody(t, e, n) {
    var a;
    if (!n || !J(t))
      return null;
    const r = Oi(t);
    return g(
      "intercept_cart_json_encoding_detected_v2",
      {
        applied: this._jsonEncodingEnabled && !r,
        blocked: r,
        theme: (a = window.Shopify.theme) == null ? void 0 : a.schema_name
      },
      { sampleRate: 0.05, once: !1 }
    ), r || !this._jsonEncodingEnabled ? null : {
      body: ki(t, e),
      contentType: "application/json"
    };
  }
}
const Oi = (i) => yi(i) ? "file_property" : bi(i) ? "repeated_field" : null, ft = (i) => typeof i == "string" ? i : i instanceof URL ? i.href : i && typeof i == "object" && "url" in i ? i.url : null, H = new Mi();
function Ri(i, t) {
  var e;
  if ((i == null ? void 0 : i.dealBarType) === _t.Sku && i.productGID)
    return L(i.productGID);
  if ((i == null ? void 0 : i.dealBarType) === _t.Bundle && i.bundleProducts) {
    const n = i.bundleProducts.some(
      (a) => a.productGID === "default"
    ), r = (e = i.bundleProducts[0]) == null ? void 0 : e.productGID;
    if (!n && r)
      return L(r);
  }
  return t;
}
const Yt = /* @__PURE__ */ new WeakSet();
function Li(i, t) {
  var o;
  if (Yt.has(i)) return;
  Yt.add(i);
  const e = (o = i.closest("main")) != null ? o : document.body;
  let n = i.getAttribute("selling-plan-id") || void 0;
  const r = () => {
    let l = i;
    for (; l; ) {
      const c = T(
        'input[name="selling_plan"]:checked',
        l
      );
      if (c) return c.value || void 0;
      const d = T(
        'input[name="selling_plan"]',
        l
      );
      if (d) return d.value || void 0;
      if (l === e) break;
      l = l.parentElement;
    }
  }, a = (l) => {
    n !== l && (n = l, p("observeExternalSellingPlanInput", l), P(i, "selling-plan-id", l != null ? l : ""));
  };
  a(r()), E(e, "change", (l) => {
    const c = l.target;
    (c == null ? void 0 : c.name) === "selling_plan" && a(r());
  }), new MutationObserver(() => {
    a(r());
  }).observe(e, {
    childList: !0,
    subtree: !0
  });
}
function Zt(i, t) {
  var e;
  if (i.featuredImages && i.featuredImages.length > 0)
    return (e = i.featuredImages.find(
      (n) => L(n.productGID) === t
    )) == null ? void 0 : e.mediaGID;
  if (i.featuredMediaGID && !(i.featuredProductGID && L(i.featuredProductGID) !== t))
    return i.featuredMediaGID;
}
const xi = (i, t, e) => {
  Ee(String(L(i)), {
    activatedGalleries: /* @__PURE__ */ new Set(),
    clickedControls: /* @__PURE__ */ new Set(),
    pendingScrollTargets: [],
    galleryOwner: e,
    imageUrl: t
  });
}, $i = (i) => {
  const t = zi(i), e = document.querySelector("[data-media-id]");
  if (!e)
    return;
  const n = e.getAttribute("data-media-id");
  Ee(
    n.slice(n.lastIndexOf("-") + 1),
    {
      activatedGalleries: t,
      clickedControls: /* @__PURE__ */ new Set(),
      pendingScrollTargets: [],
      galleryOwner: i
    }
  );
}, Ee = (i, t) => {
  var e;
  try {
    const n = tr(i), { activatedGalleries: r, imageUrl: a } = t;
    if (n.length === 0) {
      if (Zi(i, r) || a && Ji(a, t))
        return;
      p("activateGalleryMedia: no media element matched", i);
      return;
    }
    const s = n.filter(
      (u) => u.matches("button[data-action='select'][data-media-id]")
    ), o = n.filter(
      (u) => !u.matches("button[data-action='select'][data-media-id]")
    ), l = o.filter(x), c = s.filter(x), d = l.length ? l : c.length ? c : [(e = o[0]) != null ? e : n[0]];
    for (const u of d)
      Vi(u, i, t);
    De(t);
  } catch (n) {
    console.error(n);
  }
}, Vi = (i, t, e) => {
  const { activatedGalleries: n, clickedControls: r, pendingScrollTargets: a } = e, s = i.getAttribute("data-media-id"), o = s !== t, l = i.closest(Fe);
  if (l && Qi(l, t, n))
    return;
  const c = i.closest(
    "media-gallery"
  );
  if (!l && o && c && typeof c.setActiveMedia == "function") {
    n.has(c) || (n.add(c), c.setActiveMedia(s, !1));
    return;
  }
  const d = i.closest(
    "slideshow-component"
  );
  if (d && typeof d.select == "function") {
    const _ = i.closest("slideshow-slide");
    if (_) {
      if (!n.has(d)) {
        n.add(d);
        const y = Array.from(
          d.querySelectorAll("slideshow-slide")
        );
        d.select(y.indexOf(_));
      }
      return;
    }
  }
  if (Wi(i, t, n) || Ki(i, t, n) || Yi(i, t, n) || Ui(i, t, n) || Xi(i, t, n) || Dt(i, n) || Ne(i, e))
    return;
  const u = er(t);
  for (const _ of u)
    if (!r.has(_)) {
      r.add(_), ot(_, n), _.click();
      return;
    }
  const h = qe(i);
  if (h) {
    r.has(h) || (r.add(h), ot(h, n), h.click());
    return;
  }
  a.push(i);
}, De = ({
  pendingScrollTargets: i,
  activatedGalleries: t
}) => {
  for (const e of i)
    Dt(e, t) || (ot(e, t), e.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest"
    }));
}, te = "button, [role='button'], a[href^='#']", Gi = /zoom|lightbox|photoswipe|pswp|fullscreen|modal|dialog/i, Hi = (i) => Gi.test(i.className + "") || i.closest(
  "modal-opener, gallery-zoom-open, zoom-dialog, [aria-haspopup='dialog']"
) !== null, qe = (i) => {
  var n;
  const t = getComputedStyle(i).cursor === "pointer" && !i.closest("a[href]:not([href^='#'])");
  return (n = [
    i.closest(te),
    ...Array.from(
      i.querySelectorAll(te)
    ),
    t ? i : null
  ].filter((r) => r !== null).find((r) => !Hi(r))) != null ? n : null;
}, ot = (i, t) => {
  const e = i.closest(
    ".shopify-section, section, [id^='shopify-section']"
  );
  e && t.add(e);
}, Dt = (i, t) => {
  let e = i;
  for (; e; ) {
    if (t.has(e))
      return !0;
    e = e.parentElement;
  }
  return !1;
}, Fe = "media-gallery.m-media-gallery[data-context='product']", ji = ".m-media-gallery__list > .m-product-media--item[data-media-id][data-index]:not(.swiper-slide-duplicate)", Qi = (i, t, e) => {
  var o;
  if (e.has(i))
    return !0;
  const n = Array.from(
    i.querySelectorAll(ji)
  ).find(
    (l) => l.closest(Fe) === i && l.getAttribute("data-media-id") === t
  ), r = (o = n == null ? void 0 : n.getAttribute("data-index")) == null ? void 0 : o.trim(), a = r ? Number(r) : Number.NaN, s = a + 1;
  return !Number.isSafeInteger(a) || a < 0 || !Number.isSafeInteger(s) || typeof i.setActiveMedia != "function" ? !1 : (e.add(i), i.setActiveMedia({
    featured_media: { id: Number(t), position: s }
  }), !0);
}, ee = "swiper-slider-container.swiper-slider__product-page__mobile", Ui = (i, t, e) => {
  var s;
  const n = i.closest(ee), r = (s = n == null ? void 0 : n.parentElement) == null ? void 0 : s.closest(
    ".product--thumbnail_slider__mobile"
  );
  return !n || !r ? !1 : e.has(n) ? !0 : !Array.from(
    n.querySelectorAll("swiper-slider [data-media-id]")
  ).some(
    (o) => o.closest(ee) === n && o.getAttribute("data-media-id") === t
  ) || typeof n.changeSlide != "function" ? !1 : (e.add(n), n.changeSlide(t), !0);
}, lt = /* @__PURE__ */ new Map(), Ne = (i, { activatedGalleries: t, galleryOwner: e }) => {
  const n = i.closest(".swiper-slide"), r = i.closest(".swiper"), a = r == null ? void 0 : r.swiper;
  if (!n || !r || !a || typeof a.slideTo != "function")
    return !1;
  if (t.has(r))
    return !0;
  const s = n.getAttribute("data-swiper-slide-index"), o = s ? Number(s) : Number.NaN;
  if (Number.isSafeInteger(o) && o >= 0)
    return typeof a.slideToLoop != "function" ? !1 : (ne(r, a, e), t.add(r), a.slideToLoop(o), !0);
  const c = Array.from(
    r.querySelectorAll(".swiper-slide:not(.swiper-slide-duplicate)")
  ).indexOf(n);
  return c < 0 ? !1 : (ne(r, a, e), t.add(r), a.slideTo(c), !0);
}, ne = (i, t, e) => {
  var n, r;
  lt.has(i) || lt.set(i, {
    initialIndex: (r = (n = t.realIndex) != null ? n : t.activeIndex) != null ? r : 0,
    owner: e
  });
}, zi = (i) => {
  var e;
  const t = /* @__PURE__ */ new Set();
  for (const [n, { initialIndex: r, owner: a }] of lt) {
    if (a !== i || (lt.delete(n), !n.isConnected))
      continue;
    const s = n.swiper;
    if (s) {
      try {
        typeof s.slideToLoop == "function" ? s.slideToLoop(r) : (e = s.slideTo) == null || e.call(s, r);
      } catch (o) {
        console.error(o);
        continue;
      }
      t.add(n);
    }
  }
  return t;
}, Ji = (i, t) => {
  const { activatedGalleries: e, clickedControls: n, pendingScrollTargets: r } = t, a = ie(i);
  if (!a)
    return !1;
  const s = [];
  for (const c of Array.from(document.images)) {
    if (ie(c.currentSrc || c.src) !== a)
      continue;
    const d = c.closest(
      ".swiper-slide, [data-position], li, figure"
    ) || c;
    s.includes(d) || s.push(d);
  }
  if (s.length === 0)
    return !1;
  const o = s.filter(x), l = o.length ? o : [s[0]];
  for (const c of l) {
    if (Dt(c, e) || Ne(c, t))
      continue;
    const d = qe(c);
    if (d) {
      n.has(d) || (n.add(d), ot(d, e), d.click());
      continue;
    }
    r.push(c);
  }
  return De(t), !0;
}, ie = (i) => {
  if (!i)
    return null;
  const t = i.split(/[?#]/)[0], e = t.slice(t.lastIndexOf("/") + 1);
  return e ? decodeURIComponent(e).replace(/_\d+x\d*(?=\.[a-z]+$)/i, "").toLowerCase() : null;
}, Wi = (i, t, e) => {
  var l;
  const n = i.closest(
    "[data-product-single-media-slider].flickity-enabled"
  );
  if (!n)
    return !1;
  if (e.has(n))
    return !0;
  const a = Array.from(
    n.querySelectorAll("[data-product-slide]")
  ).findIndex(
    (c) => [c.getAttribute("data-id"), c.getAttribute("data-media-id")].some(
      (d) => d === t || (d == null ? void 0 : d.endsWith(`-${t}`))
    )
  ), s = (l = window.theme) == null ? void 0 : l.Flickity;
  if (a < 0 || !s || typeof s.data != "function")
    return !1;
  const o = s.data(n);
  return !o || typeof o.select != "function" ? !1 : (e.add(n), o.select(a), !0);
}, Ki = (i, t, e) => {
  const n = i.closest(
    "[data-product-slideshow].flickity-enabled"
  );
  return n ? (e.has(n) || (e.add(n), n.dispatchEvent(
    new CustomEvent("theme:image:change", { detail: { id: t } })
  )), !0) : !1;
}, Xi = (i, t, e) => {
  var l, c;
  const n = i.closest(
    "[data-product-photos].flickity-enabled"
  );
  if (!n)
    return !1;
  if (e.has(n))
    return !0;
  const a = Array.from(
    n.querySelectorAll("[data-media-id]")
  ).findIndex((d) => {
    const u = d.getAttribute("data-media-id");
    return u === t || (u == null ? void 0 : u.endsWith(`-${t}`));
  }), s = (c = (l = window.theme) == null ? void 0 : l.Flickity) != null ? c : window.Flickity;
  if (a < 0 || typeof (s == null ? void 0 : s.data) != "function")
    return !1;
  const o = s.data(n);
  return !o || typeof o.select != "function" ? !1 : (e.add(n), o.select(a), !0);
}, qt = "[data-section-type='product'][data-product-id]", Me = (i) => `a.product__thumb[data-product-thumb][data-id='${i}'][data-index]`, Oe = (i, t, e) => e.has(i) ? !0 : Array.from(
  i.querySelectorAll(Me(t))
).some(
  (r) => r.closest(qt) === i
) ? (e.add(i), i.dispatchEvent(
  new CustomEvent("variantImageChange", {
    detail: {
      variant: {
        featured_media: {
          id: Number(t),
          preview_image: { src: null }
        }
      }
    }
  })
), !0) : !1, Yi = (i, t, e) => {
  if (!i.matches(".product-main-slide[data-media-id]"))
    return !1;
  const n = i.closest(qt);
  return n ? Oe(n, t, e) : !1;
}, Zi = (i, t) => {
  const e = [], n = document.querySelectorAll(
    Me(i)
  );
  for (const o of n) {
    const l = o.closest(qt);
    l && !e.includes(l) && e.push(l);
  }
  const r = e.filter(x), a = r.length ? r : e.slice(0, 1);
  let s = !1;
  for (const o of a)
    s = Oe(o, i, t) || s;
  return s;
}, tr = (i) => {
  const t = document.querySelectorAll("[data-media-id]"), e = [];
  for (const n of t) {
    const r = n.getAttribute("data-media-id");
    (r === i || r.endsWith(`-${i}`)) && e.push(n);
  }
  return e;
}, er = (i) => {
  const t = Array.from(
    document.querySelectorAll(
      `button[data-target$="-${i}"], button[data-action='select'][data-media-id='${i}'], button[data-action='select'][data-media-id$='-${i}']`
    )
  ), e = t.filter(x), n = t.filter(
    (r) => !x(r)
  );
  return [...e, ...n];
}, nt = async (i, t, e, n) => {
  var l;
  if (!t || e.length === 0) return;
  const r = nr(n);
  if (r.length === 0) return;
  const a = e.map((c) => c.id), s = (l = r.find((c) => c.localization)) == null ? void 0 : l.localization, o = new q(
    i,
    t
  );
  try {
    const c = await bn(
      o,
      a,
      s
    );
    for (const d of e) {
      const u = c.find(
        (h) => h.id === d.id
      );
      u && ir(d, u);
    }
  } catch (c) {
    console.error("[Kaching Bundles] Failed to fetch swatches", c), setTimeout(() => {
      throw c;
    }, 0);
  }
}, nr = (i) => i.map((e) => e.swatchOptions || []).reduce((e, n) => e.concat(n), []).filter((e) => e != null).filter((e) => e.swatchType !== "default"), ir = (i, t) => {
  for (const e of t.options) {
    const n = i.options.find(
      (r) => r.position === e.position
    );
    if (n) {
      n.defaultName = e.defaultName;
      for (const r of e.optionValues) {
        const a = n.optionValues.find(
          (s) => s.id === r.id
        );
        a && (a.defaultName = r.defaultName);
      }
    }
  }
}, re = window, rr = [
  '[name^="properties["]',
  ':not([name="properties[__kaching_bundles]"])',
  ':not([name="properties[__kaching_session_id]"])'
].join("");
class ar {
  constructor(t, e, n, r, a, s, o) {
    var l, c, d, u;
    if (this._featuredImageActivated = !1, this._featuredMediaImageUrls = /* @__PURE__ */ new Map(), this._featuredImageSelectionSequence = 0, this._items = [], this._clickedAddToCartBeforeFormSubmit = !1, this._isFirstVariantChange = !0, this._personalisationBlockReportedBars = /* @__PURE__ */ new Set(), w("Deal block id:", a.id), w("Deal block settings", a), w("Config", n), w("Product", s), w("Deal block widget", { widget: t }), w("Cart form", { form: (l = e.addToCartForm()) == null ? void 0 : l.form }), w("Add to cart button", {
      button: (c = e.addToCartButton()) == null ? void 0 : c.button
    }), w("Quantity input", { input: e.quantityInput() }), w("Variant picker", {
      picker: (d = e.variantPicker()) == null ? void 0 : d.elements()
    }), this._dealBlockElement = t, this._productBlock = e, this._globalConfig = n, this._translations = r, this._dealBlockSettings = a, this._product = s, this._otherProductsFromLiquid = o, this._country = this._globalConfig.country, this._language = this._globalConfig.locale.split("-")[0].toUpperCase(), this._globalConfig.featureFlags.initialize_with_form_variant) {
      let h = this._product.selectedVariantId || this._product.variants[0].id;
      const _ = (u = this._productBlock.addToCartForm()) == null ? void 0 : u.currentVariantId();
      _ && this._product.variants.some((y) => y.id == _) && (h = _), this._currentVariantId = h;
    } else
      this._currentVariantId = this._product.selectedVariantId || this._product.variants[0].id;
    this._initialize();
  }
  _initialize() {
    P(
      this._dealBlockElement,
      "deal-block-id",
      this._dealBlockSettings.id
    ), P(
      this._dealBlockElement,
      "config",
      JSON.stringify(this._globalConfig)
    ), P(
      this._dealBlockElement,
      "translations",
      JSON.stringify(this._translations)
    ), P(
      this._dealBlockElement,
      "deal-block",
      JSON.stringify(this._dealBlockSettings)
    ), P(
      this._dealBlockElement,
      "product",
      JSON.stringify(this._product)
    ), P(
      this._dealBlockElement,
      "current-variant-id",
      String(this._currentVariantId)
    ), P(
      this._dealBlockElement,
      "other-products",
      JSON.stringify(this._otherProductsFromLiquid)
    ), this._loadMediaImagesAsync(), this._loadOtherProductsAsync(), this._loadCollectionBreaksProductsAsync(), this._loadComplementaryProductsAsync(), this._loadNativeBundleProductIdsAsync(), this._listenForExternalSellingPlanInput();
    const t = !!this._productBlock.addToCartForm(), e = !t && !!this._productBlock.addToCartButton();
    !t && !e || this._addEventListeners(e);
  }
  async _loadMediaImagesAsync() {
    if (!this._globalConfig.storefrontAccessToken)
      return;
    const t = new q(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken
    ), e = Cn(this._dealBlockSettings), n = await Vt(t, e, 300);
    P(
      this._dealBlockElement,
      "media-images",
      JSON.stringify(n)
    );
  }
  async _loadOtherProductsAsync() {
    if (!this._globalConfig.storefrontAccessToken)
      return;
    const t = Mn(this._dealBlockSettings);
    if (!t.length)
      return;
    const e = new Set(
      this._otherProductsFromLiquid.map((o) => o.id)
    ), n = t.filter(
      (o) => !e.has(L(o))
    ), r = new q(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken
    ), a = n.length ? await et(r, {
      country: this._country,
      language: this._language,
      productIds: n,
      includeSellingPlans: this._globalConfig.includeSellingPlans,
      includeAvailableQuantity: this._globalConfig.includeAvailableQuantity,
      useExternalMetafieldNamespace: !1
    }) : [], s = [...this._otherProductsFromLiquid, ...a];
    await nt(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken,
      s,
      [this._dealBlockSettings]
    ), P(
      this._dealBlockElement,
      "other-products",
      JSON.stringify(s)
    );
  }
  async _loadCollectionBreaksProductsAsync() {
    if (!this._globalConfig.storefrontAccessToken)
      return;
    const { collectionBreaksEnabled: t, collectionBreaks: e } = this._dealBlockSettings;
    if (!t || !e)
      return;
    const n = new q(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken
    );
    let r;
    e.visibility === "deal-products" ? r = await Lt(n, {
      country: this._country,
      language: this._language,
      blockVisibility: this._dealBlockSettings.blockVisibility,
      excludedProductGIDs: (this._dealBlockSettings.excludedProductIds || []).map((s) => `gid://shopify/Product/${s}`),
      selectedProductGIDs: (this._dealBlockSettings.selectedProductIds || []).map((s) => `gid://shopify/Product/${s}`),
      selectedCollectionGIDs: (this._dealBlockSettings.selectedCollectionIds || []).map((s) => `gid://shopify/Collection/${s}`)
    }) : r = await Lt(n, {
      country: this._country,
      language: this._language,
      blockVisibility: e.visibility,
      excludedProductGIDs: (e.excludedProducts || []).map(
        ({ id: s }) => s
      ),
      selectedProductGIDs: (e.selectedProducts || []).map(
        ({ id: s }) => s
      ),
      selectedCollectionGIDs: (e.selectedCollections || []).map(({ id: s }) => s)
    });
    let a = await et(n, {
      country: this._country,
      language: this._language,
      productIds: r.map((s) => Number(s.split("/").pop())),
      includeSellingPlans: this._globalConfig.includeSellingPlans,
      includeAvailableQuantity: this._globalConfig.includeAvailableQuantity,
      useExternalMetafieldNamespace: !1,
      batchSize: 20,
      onBatchError: (s) => {
        var o;
        return Ke(s.message, (o = s.stack) != null ? o : "", {
          sampleRate: 1
        });
      }
    });
    a = a.filter(
      (s) => s.availableForSale
    ), a.sort((s, o) => s.id === this._product.id ? -1 : o.id === this._product.id ? 1 : 0), await nt(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken,
      a,
      [this._dealBlockSettings]
    ), P(
      this._dealBlockElement,
      "collection-breaks-products",
      JSON.stringify(a)
    ), setTimeout(() => {
      this._preloadImages(a);
    }, 1e3);
  }
  async _loadComplementaryProductsAsync() {
    var a, s;
    if (!(this._dealBlockSettings.dealBars.some(
      (o) => {
        var l;
        return (l = o.upsells) == null ? void 0 : l.some(
          (c) => c.productSource === "complementary"
        );
      }
    ) || ((s = (a = this._dealBlockSettings.checkboxUpsells) == null ? void 0 : a.upsells) == null ? void 0 : s.some(
      (o) => o.productSource === "complementary"
    ))) || !this._globalConfig.storefrontAccessToken)
      return;
    const e = new q(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken
    ), n = await _n(
      e,
      {
        country: this._country,
        language: this._language,
        productId: this._product.id
      }
    );
    if (!n.length)
      return;
    let r = await et(e, {
      country: this._country,
      language: this._language,
      productIds: n.map(
        (o) => Number(o.split("/").pop())
      ),
      includeSellingPlans: this._globalConfig.includeSellingPlans,
      includeAvailableQuantity: this._globalConfig.includeAvailableQuantity,
      useExternalMetafieldNamespace: !1
    });
    r = r.filter(
      (o) => o.availableForSale
    ), await nt(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken,
      r,
      [this._dealBlockSettings]
    ), P(
      this._dealBlockElement,
      "complementary-products",
      JSON.stringify(r)
    );
  }
  async _loadNativeBundleProductIdsAsync() {
    if (!this._globalConfig.storefrontAccessToken)
      return;
    const t = [
      this._product,
      ...this._otherProductsFromLiquid
    ].filter((r) => r.isNativeBundle === null);
    if (t.length === 0)
      return;
    const e = new q(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken
    ), n = await yn(
      e,
      t.map((r) => r.id)
    );
    n.length > 0 && P(
      this._dealBlockElement,
      "native-bundle-product-ids",
      JSON.stringify(n)
    );
  }
  _preloadImages(t) {
    for (const e of t) {
      const n = e.variants[0].image || e.image;
      if (n) {
        const r = new Image();
        r.src = n;
      }
    }
  }
  _addEventListeners(t) {
    if (this._listenForVariantUrlChange(), this._listenForQuantityInputChange(), this._listenForBlockVariantSelect(), this._listenForBlockDealBarSelect(), this._listenForBlockDealBarFeaturedImage(), this._listenForBlockItemsChange(), this._listenForPagePropertyChange(), this._listenForFormReplaced(), this._listenForBlockAddToCartRequested(), t || (this._listenForFormVariantIdChange(), this._listenForFormSellingPlanChange()), this._listenForAmountDiscountExceedsPrice(), this._listenForUpsellSubscriptionInherited(), !window.kachingBundlesDisableAddToCartHandling) {
      if (this._globalConfig.featureFlags.intercept_cart_request) {
        H.start(this._globalConfig.featureFlags);
        const e = this._dealBlockSettings.nanoId || this._dealBlockSettings.id;
        H.registerDeal(
          e,
          this._product,
          () => this._items,
          this._dealBlockSettings.skipCart === !0,
          Object.fromEntries(
            this._dealBlockSettings.dealBars.map((n) => {
              var r;
              return [
                n.id,
                (r = n.dealBarType) != null ? r : "quantity-break"
              ];
            })
          )
        );
      }
      this._listenForAddToCartClick();
    }
  }
  _listenForBlockAddToCartRequested() {
    E(
      this._dealBlockElement,
      "add-to-cart-requested",
      async (t) => {
        var r, a;
        const e = (r = t.detail) == null ? void 0 : r.items;
        if (!(e != null && e.length))
          return;
        p("add-to-cart-requested", e);
        const n = (a = this._productBlock.addToCartButton()) == null ? void 0 : a.button;
        if (n) {
          this._overrideItemsForNextAddToCart = e, n.click();
          return;
        }
        await bt(
          this._dealBlockSettings.nanoId || this._dealBlockSettings.id,
          this._product.id
        ), await this._makeAddToCartRequest({ items: e }), await yt(), window.location.href = M("checkout");
      }
    );
  }
  /* Native variant change handling */
  _listenForVariantUrlChange() {
    Je(), E(re, "locationchange", () => {
      const e = new URLSearchParams(re.location.search).get("variant");
      e && (p("listenForVariantUrlChange", e), this._handleNativeVariantChange(Number(e)));
    });
  }
  _listenForFormVariantIdChange() {
    const t = this._productBlock.addToCartForm();
    t && t.onVariantIdChange((e) => {
      p("listenForFormVariantIdChange", e), this._handleNativeVariantChange(e);
    });
  }
  _handleNativeVariantChange(t) {
    if (p("handleNativeVariantChange", {
      variantId: t,
      currentVariantId: this._currentVariantId
    }), t != this._currentVariantId && this._product.variants.find((e) => e.id == t)) {
      if (this._globalConfig.featureFlags.remove_variant_change_delay ? window.kachingBundlesCurrentVariantChangeInProgress || (this._currentVariantId = t) : this._currentVariantId = t, this._globalConfig.featureFlags.remove_variant_change_delay) {
        if (window.kachingBundlesCurrentVariantChangeInProgress) {
          p("handleNativeVariantChange", "skipping");
          return;
        }
      } else if (this._dealBlockElement.dataset.nativeVariantChangeInProgress || window.kachingBundlesCurrentVariantChangeInProgress) {
        p("handleNativeVariantChange", "skipping");
        return;
      }
      this._dealBlockElement.dataset.nativeVariantChangeInProgress = "true", setTimeout(
        () => {
          delete this._dealBlockElement.dataset.nativeVariantChangeInProgress;
        },
        this._globalConfig.featureFlags.remove_variant_change_delay ? 1e3 : 500
      ), P(this._dealBlockElement, "current-variant-source", "native"), P(
        this._dealBlockElement,
        "current-variant-id",
        String(t)
      );
    }
  }
  _listenForFormSellingPlanChange() {
    if (!this._globalConfig.featureFlags.observe_form_selling_plan)
      return;
    const t = this._productBlock.addToCartForm();
    if (t) {
      try {
        !!T(
          'input[name="selling_plan"][type="radio"]',
          t.form
        ) && g(
          "selling_plan_radio_detected_v2",
          {
            dealBlockId: this._dealBlockSettings.id,
            productId: this._product.id
          },
          { once: !1 }
        );
      } catch {
      }
      t.onSellingPlanChange((e) => {
        p("listenForFormSellingPlanChange", e), P(
          this._dealBlockElement,
          "selling-plan-id",
          e ? String(e) : ""
        );
      });
    }
  }
  _listenForExternalSellingPlanInput() {
    this._globalConfig.featureFlags.observe_external_selling_plan && (this._productBlock.addToCartForm() || Li(this._dealBlockElement));
  }
  /* Native quantity input */
  _listenForQuantityInputChange() {
    this._productBlock.onQuantityInputChange((t) => {
      var e;
      if (p("_listenForQuantityInputChange", t), this._globalConfig.featureFlags.accelerated_checkout_additional_items && ((e = this._productBlock.addToCartForm()) == null || e.toggleAcceleratedCheckoutButtons(
        this._shouldShowAcceleratedCheckoutButtons()
      )), !window.kachingBundlesQuantityChangeInProgress) {
        if (!this._globalConfig.keepQuantityInput || window.kachingBundlesCurrentVariantChangeInProgress || this._dealBlockElement.dataset.nativeVariantChangeInProgress) {
          this._changeQuantityInput();
          return;
        }
        this._globalConfig.keepQuantityInput && P(this._dealBlockElement, "quantity", String(t));
      }
    });
  }
  _changeQuantityInput() {
    const t = this._productBlock.quantityInput();
    !t || this._items.length === 0 || window.kachingBundlesDisableAddToCartHandling && !this._globalConfig.keepQuantityInput || this._setQuantityInputValue(t, this._quantityInputValue());
  }
  // The total is only for the shopper to see. Without a visible selector the
  // form carries the primary line quantity, which accelerated checkout reads.
  _quantityInputValue() {
    const t = this._primaryItem();
    return t && this._globalConfig.featureFlags.accelerated_checkout_additional_items && !this._productBlock.quantitySelectorVisible() ? t.quantity : Se(this._items);
  }
  _setQuantityInputValue(t, e) {
    window.kachingBundlesQuantityChangeInProgress = !0, p("_setQuantityInputValue", e), t.value = String(e), this._globalConfig.shopifyDomain === "119a01-bf.myshopify.com" && t.dispatchEvent(new Event("input", { bubbles: !0 })), t.dispatchEvent(new Event("change", { bubbles: !0 })), setTimeout(() => {
      delete window.kachingBundlesQuantityChangeInProgress;
    }, 100);
  }
  /* Block variants change handling */
  _listenForBlockVariantSelect() {
    E(this._dealBlockElement, "variant-selected", (t) => {
      const { variantId: e } = t.detail;
      p("listenForBlockVariantSelect", e), this._changeCurrentVariant(e);
    });
  }
  _listenForBlockDealBarSelect() {
    this._globalConfig.webPixel && this._dealBlockElement.addEventListener("deal-bar-selected", (t) => {
      const { dealBarId: e } = t.detail, n = this._dealBlockSettings.dealBars.find(
        (a) => a.id === e
      ), r = Ri(n, this._product.id);
      Ie("kaching_deal_bar_selected", {
        product_id: r,
        deal_block_id: this._dealBlockSettings.id,
        deal_bar_id: e,
        ab_test_variant_id: this._dealBlockSettings.abTestVariantId,
        deal_block_version_id: this._dealBlockSettings.versionId
      });
    });
  }
  // Resolved eagerly so galleries without data-media-id (matched by image URL)
  // can switch on the first bar click instead of waiting for a fetch.
  async _loadFeaturedMediaImagesAsync() {
    const t = [
      ...new Set(
        this._dealBlockSettings.dealBars.map(
          (r) => Zt(r, this._product.id)
        ).filter((r) => r != null)
      )
    ];
    if (!t.length || !this._globalConfig.storefrontAccessToken || t.every(
      (r) => this._featuredMediaMatchedById(r)
    ))
      return;
    const n = new q(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken
    );
    try {
      const r = await Vt(
        n,
        t,
        600
      );
      for (const { gid: a, url: s } of r)
        this._featuredMediaImageUrls.set(a, s);
    } catch (r) {
      console.error(r);
    }
  }
  _featuredMediaMatchedById(t) {
    const e = L(t);
    return !!document.querySelector(
      `[data-media-id="${e}"], [data-media-id$="-${e}"]`
    );
  }
  _listenForBlockDealBarFeaturedImage() {
    this._featuredMediaImagesPromise = this._loadFeaturedMediaImagesAsync(), E(
      this._dealBlockElement,
      "deal-bar-selected",
      async (t) => {
        const { dealBarId: e, preselected: n } = t.detail;
        if (n)
          return;
        const r = e ? this._dealBlockSettings.dealBars.find((s) => s.id === e) : void 0, a = r && Zt(r, this._product.id);
        if (a) {
          p("listenForBlockDealBarFeaturedImage", a);
          const s = ++this._featuredImageSelectionSequence;
          if (!this._featuredMediaMatchedById(a) && (await this._featuredMediaImagesPromise, s !== this._featuredImageSelectionSequence))
            return;
          this._featuredImageActivated = !0, xi(
            a,
            this._featuredMediaImageUrls.get(a),
            this
          );
          return;
        }
        this._featuredImageSelectionSequence++, this._featuredImageActivated && (this._featuredImageActivated = !1, $i(this));
      }
    );
  }
  _listenForBlockItemsChange() {
    const t = We(
      this._dealBlockSettings,
      this._globalConfig.featureFlags
    );
    E(this._dealBlockElement, "items-changed", () => {
      var r, a, s, o;
      clearTimeout(this._updateQuantityInputTimeoutHandle);
      const e = this._dealBlockElement.pricing();
      this._items = this._dealBlockElement.items(), w("Selected items changed", this._items), (r = this._productBlock.addToCartForm()) == null || r.toggleAcceleratedCheckoutButtons(
        this._shouldShowAcceleratedCheckoutButtons()
      ), (a = this._productBlock.addToCartButton()) == null || a.updatePrice(
        e.discountedPrice,
        e.fullPrice,
        t
      ), clearTimeout(this._updateAddToCartButtonPriceTimeoutHandle), this._updateAddToCartButtonPriceTimeoutHandle = setTimeout(
        () => {
          var l;
          return (l = this._productBlock.addToCartButton()) == null ? void 0 : l.updatePrice(
            e.discountedPrice,
            e.fullPrice,
            t
          );
        },
        2e3
      );
      const n = this._primaryItem();
      if (this._updateAdditionalItems(n), !!n) {
        if (this._changeCurrentVariant(n.id), (s = this._productBlock.addToCartForm()) == null || s.updateItem(n), this._changeQuantityInput(), (o = this._productBlock.addToCartForm()) == null || o.toggleAcceleratedCheckoutButtons(
          this._shouldShowAcceleratedCheckoutButtons()
        ), this._isFirstVariantChange && (this._updateQuantityInputTimeoutHandle = setTimeout(() => {
          this._changeQuantityInput(), delete this._updateQuantityInputTimeoutHandle;
        }, 1e3), this._isFirstVariantChange = !1), this._dealBlockSettings.updateNativePrice) {
          clearTimeout(this._updateNativePriceTimeoutHandle);
          const l = this._dealBlockSettings.updateNativePriceType === "item" ? e.discountedPricePerItem : e.discountedPrice, c = this._dealBlockSettings.updateNativePriceType === "item" ? e.fullPricePerItem : e.fullPrice;
          this._productBlock.updatePrice(l, c), this._updateNativePriceTimeoutHandle = setTimeout(() => {
            this._productBlock.updatePrice(l, c);
          }, 1e3);
        }
        this._reconvertPrices();
      }
    });
  }
  _reconvertPrices() {
    var t, e, n, r;
    p("reconvertPrices");
    try {
      (t = window.bucksCC) != null && t.reConvert && window.bucksCC.reConvert(), (e = window.baCurr) != null && e.refreshConversion && window.baCurr.refreshConversion(), (n = window.DoublyGlobalCurrency) != null && n.convertAll && window.DoublyGlobalCurrency.convertAll(), (r = window.conversionBearAutoCurrencyConverter) != null && r.convertPricesOnPage && window.conversionBearAutoCurrencyConverter.convertPricesOnPage(), window.mlvedaload && window.mlvedaload();
    } catch (a) {
      console.error(a);
    }
  }
  _changeCurrentVariant(t) {
    const e = this._product.variants.find((a) => a.id == t);
    if (p("_changeCurrentVariant", {
      variantId: t,
      currentVariantId: this._currentVariantId
    }), this._currentVariantId == t || (this._currentVariantId = t, !e))
      return;
    this._globalConfig.featureFlags.propagate_picker_option_changes && (P(this._dealBlockElement, "current-variant-source", "bar"), P(
      this._dealBlockElement,
      "current-variant-id",
      String(t)
    ));
    const n = this._productBlock.variantPicker();
    if (!n)
      return;
    (this._globalConfig.featureFlags.remove_variant_change_delay ? !this._dealBlockElement.dataset.nativeVariantChangeInProgress : !0) && (clearTimeout(window.kachingBundlesCurrentVariantChangeInProgress), window.kachingBundlesCurrentVariantChangeInProgress = setTimeout(() => {
      delete window.kachingBundlesCurrentVariantChangeInProgress;
    }, 1e3));
    for (const [a, s] of e.options.entries()) {
      const o = this._product.options[a], l = o.name, c = o.optionValues.find(
        (d) => d.name === s
      ).id;
      n.select(
        a + 1,
        c,
        l,
        s,
        this._product.id,
        e.id
      );
    }
  }
  _listenForAmountDiscountExceedsPrice() {
    document.addEventListener(
      "kaching-bundles-amount-discount-exceeds-price",
      (t) => {
        var r;
        const { totalDiscount: e, fullOrderPrice: n } = t.detail;
        g("amount_discount_exceeds_price_v3", {
          dealBlockId: this._dealBlockSettings.id,
          productId: this._product.id,
          country: this._country,
          currency: (r = window.Shopify.currency) == null ? void 0 : r.active,
          totalDiscount: e,
          fullOrderPrice: n
        });
      },
      { once: !0 }
    );
  }
  _listenForUpsellSubscriptionInherited() {
    document.addEventListener(
      "kaching-bundles-upsell-subscription-inherited",
      (t) => {
        const { type: e } = t.detail;
        g("upsell_subscription_inherited", {
          dealBlockId: this._dealBlockSettings.id,
          productId: this._product.id,
          upsellType: e
        });
      },
      { once: !0 }
    );
  }
  /* Add to cart */
  _refreshItemsBeforeAddToCart() {
    var e;
    this._dealBlockElement.rotateBundleNonce(), this._overrideItemsForNextAddToCart ? (this._items = this._overrideItemsForNextAddToCart, this._overrideItemsForNextAddToCart = void 0) : this._items = this._dealBlockElement.items();
    const t = this._primaryItem();
    t && ((e = this._productBlock.addToCartForm()) == null || e.updateItem(t)), this._updateAdditionalItems(t);
  }
  // Accelerated checkout reads the primary line properties at wallet click,
  // but the additional lines carry the properties written here.
  _listenForPagePropertyChange() {
    if (!this._globalConfig.featureFlags.accelerated_checkout_additional_items)
      return;
    const t = (e) => {
      const [n] = e.composedPath();
      !(n instanceof Element) || !n.matches(rr) || this._refreshAdditionalItems();
    };
    E(document, "input", t, {
      capture: !0
    }), E(document, "change", t, {
      capture: !0
    });
  }
  // The replaced form replays additional items built from the old form's
  // properties and quantity. The microtask waits for ProductBlock to find the
  // new quantity input, whose removal observer can run after the form's.
  _listenForFormReplaced() {
    var t;
    this._globalConfig.featureFlags.accelerated_checkout_additional_items && ((t = this._productBlock.addToCartForm()) == null || t.onReplaced(
      () => queueMicrotask(() => {
        this._changeQuantityInput(), this._refreshAdditionalItems();
      })
    ));
  }
  _refreshAdditionalItems() {
    var t;
    this._updateAdditionalItems(this._primaryItem()), (t = this._productBlock.addToCartForm()) == null || t.toggleAcceleratedCheckoutButtons(
      this._shouldShowAcceleratedCheckoutButtons()
    );
  }
  _primaryItem() {
    var e;
    const t = this._items.filter(
      (n) => this._isNativeFormProductItem(n)
    );
    return (e = t.find((n) => n.id == this._currentVariantId)) != null ? e : t[0];
  }
  _updateAdditionalItems(t) {
    var r, a, s;
    if (!this._globalConfig.featureFlags.accelerated_checkout_additional_items)
      return;
    const e = (a = (r = this._productBlock.addToCartForm()) == null ? void 0 : r.pageProperties()) != null ? a : {}, n = t ? this._items.filter((o) => o !== t).map((o) => this._withPageProperties(o, e)) : [];
    (s = this._productBlock.addToCartForm()) == null || s.updateAdditionalItems(n);
  }
  _listenForAddToCartClick() {
    const t = this._productBlock.addToCartButton();
    if (!t)
      return;
    t.setValidation(() => {
      const a = this._dealBlockElement.validateItemSelection();
      return a.rule === "personalisation" && this._reportRequiredPersonalisationBlock(), a.valid;
    }), t.onClick(() => {
      if (this._refreshItemsBeforeAddToCart(), this._globalConfig.featureFlags.intercept_cart_request)
        if (this._dealBlockElement.isItemSelectionValid() && this._items.some((s) => s.properties.__kaching_bundles)) {
          const s = this._dealBlockSettings.nanoId || this._dealBlockSettings.id;
          H.setFallbackDeal(s, this._product);
        } else
          H.clearFallbackDeal();
    });
    const e = () => window.kachingBundlesDisableAddToCartHandling ? !1 : this._dealBlockSettings.skipCart || this._isUpcartAppEnabled() || this._isOpusAppEnabled() || this._isKrakenCartAppEnabled() ? !0 : this._globalConfig.featureFlags.intercept_cart_request ? !1 : this._items.length > 1, n = async () => {
      var a;
      if (this._dealBlockSettings.skipCart) {
        await bt(
          this._dealBlockSettings.nanoId || this._dealBlockSettings.id,
          this._product.id
        ), await this._addAllItemsToCart(), await yt(), window.location.href = M("checkout");
        return;
      }
      if (this._isUpcartAppEnabled()) {
        try {
          window.upcartOpenCart && window.upcartOpenCart();
        } catch (s) {
          console.error("upcartOpenCart error", s);
        }
        await this._addAllItemsToCart(), window.upcartRefreshCart && window.upcartRefreshCart();
        return;
      }
      if (this._isOpusAppEnabled()) {
        try {
          window.opusOpen && window.opusOpen();
        } catch (s) {
          console.error("opusOpen error", s);
        }
        await this._addAllItemsToCart(), window.opusRefreshCart && window.opusRefreshCart();
        return;
      }
      if (this._isKrakenCartAppEnabled()) {
        try {
          (a = window.KrakenCart) != null && a.toggleCart && window.KrakenCart.toggleCart(!0);
        } catch (s) {
          console.error("KrakenCart error", s);
        }
        await this._addAllItemsToCart();
        return;
      }
      return this._addItemsExceptCurrentToCart();
    }, r = () => this._dealBlockSettings.skipCart || this._isUpcartAppEnabled() || this._isOpusAppEnabled() || this._isKrakenCartAppEnabled();
    t.onClickIfConditionMet(
      e,
      n,
      r
    ), !this._globalConfig.featureFlags.intercept_cart_request && (this._setupUpcart(), this._setupOpus(), this._setupKrakenCart());
  }
  _setupUpcart() {
    window.upcartShouldSkipAddToCartInterceptor = !0;
    const t = window.upcartShouldSkipAddToCart;
    window.upcartShouldSkipAddToCart = (e) => typeof t == "function" && t(e) === !0 ? !0 : e.includes("kaching_bundles=true");
  }
  _setupOpus() {
    [
      "the-gloria-skincare.myshopify.com",
      "xzxihx-8t.myshopify.com",
      "e76602-61.myshopify.com",
      "a09a84.myshopify.com"
    ].includes(this._globalConfig.shopifyDomain) && (window.OpusNoATC = !0);
  }
  _setupKrakenCart() {
    window.krakenCartIsFormATCEnabled = !1;
  }
  _isUpcartAppEnabled() {
    return this._globalConfig.featureFlags.intercept_cart_request || this._globalConfig.shopifyDomain === "qu1udi-ws.myshopify.com" ? !1 : !!T("#UpcartPopup") || !!window.upcartDocumentOrShadowRoot;
  }
  _isOpusAppEnabled() {
    return this._globalConfig.featureFlags.intercept_cart_request || ![
      "the-gloria-skincare.myshopify.com",
      "xzxihx-8t.myshopify.com",
      "e76602-61.myshopify.com",
      "a09a84.myshopify.com"
    ].includes(this._globalConfig.shopifyDomain) ? !1 : window.opusActive || !1;
  }
  _isKrakenCartAppEnabled() {
    var t;
    return this._globalConfig.featureFlags.intercept_cart_request ? !1 : ((t = window.KrakenCart) == null ? void 0 : t.isActive) && window.KrakenCart.isActive() || !1;
  }
  async _addItemsExceptCurrentToCart() {
    var l;
    p("addItemsExceptCurrentToCart", this._items);
    const t = (l = this._productBlock.addToCartForm()) == null ? void 0 : l.currentVariantId();
    setTimeout(() => {
      t != this._currentVariantId && g(
        "different_current_variant_v5",
        {
          form: t,
          object: this._currentVariantId
        },
        { sampleRate: 0.05, once: !1 }
      );
    });
    const e = this._items.findIndex(
      (c) => this._isNativeFormProductItem(c) && c.id == t
    ), n = this._items.filter(
      (c, d) => d !== e
    ), r = n.filter((c) => c.parent_id), a = n.filter((c) => !c.parent_id), s = [
      ...r.reverse(),
      ...a
    ].map(({ parent_id: c, ...d }) => d);
    w("Adding only extra items to cart", s);
    const o = e >= 0 ? this._items[e] : void 0;
    if (o) {
      const c = this._productBlock.quantityInput();
      c && this._setQuantityInputValue(c, o.quantity);
    }
    try {
      await this._makeAddToCartRequest({
        items: s,
        partial: !0
      });
    } catch (c) {
      throw this._changeQuantityInput(), c;
    }
  }
  async _addAllItemsToCart() {
    var e, n;
    p("addAllItemsToCart", this._items);
    let t = this._items;
    t.length === 0 && (t = [
      {
        id: (n = (e = this._productBlock.addToCartForm()) == null ? void 0 : e.currentVariantId()) != null ? n : this._currentVariantId,
        quantity: 1,
        properties: {}
      }
    ]), w("Adding all items to cart", t), await this._makeAddToCartRequest({ items: t });
  }
  _collectProperties() {
    const e = I(
      '[name^="properties"]'
    ).map((n) => [n.name.match(/properties\[(.*)\]/)[1], n.value]).filter(([n]) => n !== "__kaching_bundles");
    return Object.fromEntries(e);
  }
  _isMainProductItem(t) {
    const e = this._kachingBundlesProperty(t);
    return e ? e.main || !1 : !0;
  }
  _isNativeFormProductItem(t) {
    const e = this._kachingBundlesProperty(t);
    return (e == null ? void 0 : e.bxgy) === !0 ? !1 : this._isMainProductItem(t);
  }
  _shouldShowAcceleratedCheckoutButtons() {
    var t, e;
    return ti({
      items: this._items,
      primaryItem: this._primaryItem(),
      additionalItemsEnabled: !!this._globalConfig.featureFlags.accelerated_checkout_additional_items,
      selectionValid: this._dealBlockElement.isItemSelectionValid(),
      quantitySelectorVisible: this._productBlock.quantitySelectorVisible(),
      customPropertiesNeedPropagation: this._customPropertiesNeedPropagation(),
      acceleratedCheckoutQuantity: (e = (t = this._productBlock.addToCartForm()) == null ? void 0 : t.acceleratedCheckoutQuantity()) != null ? e : 1
    });
  }
  // The cart interceptor spreads custom properties over the bundle lines, but
  // accelerated checkout reads the primary line straight from the page. Hidden
  // properties (keys starting with "_") don't need to reach the bundle lines.
  _customPropertiesNeedPropagation() {
    var e;
    if (!this._globalConfig.featureFlags.propagate_line_properties)
      return !1;
    const t = (e = this._productBlock.addToCartForm()) == null ? void 0 : e.pageProperties();
    return Object.keys(t != null ? t : {}).some((n) => !n.startsWith("_"));
  }
  _reportRequiredPersonalisationBlock() {
    try {
      const t = this._dealBlockElement.selectedDealBarId;
      if (!t || this._personalisationBlockReportedBars.has(t))
        return;
      this._personalisationBlockReportedBars.add(t), g(
        "required_personalisation_blocked",
        {
          deal_block_id: this._dealBlockSettings.id,
          deal_bar_id: t
        },
        { once: !1 }
      );
    } catch (t) {
      console.error(t);
    }
  }
  _kachingBundlesProperty(t) {
    return t.properties.__kaching_bundles ? JSON.parse(
      t.properties.__kaching_bundles
    ) : null;
  }
  _withPageProperties(t, e) {
    var n;
    return !this._isMainProductItem(t) && !((n = this._kachingBundlesProperty(t)) != null && n.collectionBreaksProduct) ? t : {
      ...t,
      properties: { ...e, ...t.properties }
    };
  }
  async _makeAddToCartRequest({
    items: t,
    partial: e = !1
  }) {
    var d, u;
    const n = this._collectProperties(), r = t.map(
      (h) => this._withPageProperties(h, n)
    );
    setTimeout(() => this._logCollectionBreakProperties(n));
    const a = { kaching_bundles: "true" };
    e && (a.partial = "true");
    const s = {
      "Content-Type": "application/json",
      ...e ? {} : Et
    };
    let o;
    try {
      o = await fetch(M("cart/add.js", a), {
        method: "POST",
        body: JSON.stringify({ items: r }),
        headers: s
      });
    } catch (h) {
      throw g(
        "bundle_cart_add_failed_v2",
        {
          partial: e,
          aborted: !0,
          reason: N(h),
          theme: (d = window.Shopify.theme) == null ? void 0 : d.schema_name
        },
        { once: !1 }
      ), h;
    }
    if (o.ok)
      return;
    let l;
    try {
      l = (await o.json()).description;
    } catch {
      l = void 0;
    }
    const c = ei(e, o.status);
    if (g(
      "bundle_cart_add_failed_v2",
      {
        status: o.status,
        partial: e,
        aborted: c,
        reason: l,
        theme: (u = window.Shopify.theme) == null ? void 0 : u.schema_name
      },
      { once: !1 }
    ), c)
      throw new Error(`cart/add.js failed with HTTP ${o.status}`);
  }
  _logCollectionBreakProperties(t) {
    if (!this._dealBlockSettings.collectionBreaksEnabled)
      return;
    const e = Object.fromEntries(
      Object.entries(t).filter(
        ([n]) => !n.startsWith("__kaching_")
      )
    );
    Object.keys(e).length !== 0 && g(
      "collection_break_properties_v3",
      {
        properties: e
      },
      { sampleRate: 0.05, once: !1 }
    );
  }
}
const sr = "essential-preorder:kaching-bundles-pv-updated", Ct = "kaching-bundles-block, kaching-bundles-bar", ae = "variant-badges", pt = "[]";
let R = pt, se = !1, oe = !1, le = !1;
function or() {
  try {
    se || (se = !0, E(
      window,
      sr,
      () => ce(!0)
    )), ce(!1);
  } catch (i) {
    console.error(i);
  }
}
function ce(i) {
  var n, r, a;
  const t = (a = (r = (n = window.essentialPreorderConfigs) == null ? void 0 : n.kachingBundles) == null ? void 0 : r.preorderVariants) != null ? a : [];
  lr(t, i);
  const e = cr(t);
  e !== R && (R = e, p("Essential preorder badges updated", R), dr(), R !== pt && ur());
}
function lr(i, t) {
  le || i.length === 0 || (le = !0, g(
    "essential_preorders_detected_v6",
    {
      variantCount: i.length,
      badgeCount: i.filter((e) => e.badgeHtml).length,
      late: t
    },
    { sampleRate: 0.1 }
  ));
}
function cr(i) {
  const t = [];
  for (const { id: e, badgeHtml: n } of i)
    e && n && t.push({ variantId: e, badgeHtml: n });
  return JSON.stringify(t);
}
function dr() {
  for (const i of I(Ct))
    It(i);
}
function It(i) {
  var e;
  ((e = i.getAttribute(ae)) != null ? e : pt) !== R && P(i, ae, R);
}
function ur() {
  if (oe)
    return;
  oe = !0, new MutationObserver((t) => {
    if (R !== pt) {
      for (const e of t)
        for (const n of e.addedNodes)
          if (n instanceof HTMLElement) {
            if (n.matches(Ct)) {
              It(n);
              continue;
            }
            if (n.firstElementChild)
              for (const r of I(Ct, n))
                It(r);
          }
    }
  }).observe(document.body, {
    childList: !0,
    subtree: !0
  });
}
function pr(i) {
  const t = i.getAttribute("product-id");
  if (!t) return;
  const n = I(
    `kaching-bundle[data-initialized="true"][product-id="${t}"] kaching-bundles-block`
  ).map((r) => r.selectedDealBarId).find((r) => r);
  n && (F(i).selectedDealBarId = n);
}
function hr(i, t, e) {
  const n = F(i).selectedDealBarId;
  if (delete F(i).selectedDealBarId, !n) return;
  const r = t.dealBars.find(
    (s) => s.id === n
  );
  if (!(!r || r.hideBehindScratchOff && t.scratchOffEnabled && e.availableForSale))
    return n;
}
const Z = "kaching-bundles-atc-total";
class fr {
  constructor(t) {
    this._submitInProgress = !1, this._ignoreClick = !1, this._clickHandler = null, this._onClickCallback = null, this._onClickListenerRegistered = !1, this._validationCallback = null, this._horizonAnimationDisabled = !1, this.button = t;
  }
  onClick(t) {
    this._onClickCallback = t;
  }
  setValidation(t) {
    this._validationCallback = t;
  }
  onClickIfConditionMet(t, e, n) {
    this._clickHandler = {
      condition: t,
      callback: e,
      shouldPreventDefault: n
    }, this._registerClickHandler();
  }
  replaceButton(t) {
    w("New add to cart button", { button: t }), this.button = t, this._clickHandler && this._registerClickHandler();
  }
  _registerClickHandler() {
    if (!this._clickHandler)
      return;
    this._setupHorizonThemeHandling(), this._registerOnClickListener();
    const t = async (n) => {
      var o;
      if (this._validationCallback && !this._validationCallback()) {
        n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation();
        return;
      }
      const r = this._clickHandler.condition(), a = this._clickHandler.shouldPreventDefault();
      if (this._ignoreClick || w("Add to cart button clicked"), p("AddToCartButton#interceptClick", {
        conditionMet: r,
        preventDefault: a,
        submitInProgress: this._submitInProgress,
        ignoreClick: this._ignoreClick
      }), !r)
        return;
      if (this._submitInProgress) {
        this._submitInProgress = !1;
        return;
      }
      if (this._ignoreClick)
        return;
      this._submitInProgress = !0, this._ignoreClick = !0, this.button.disabled = !0;
      const s = setTimeout(() => {
        this._ignoreClick = !1;
      }, 1e3);
      n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation();
      try {
        await this._clickHandler.callback();
      } catch (l) {
        p("Add to cart callback failed, not submitting", { error: l }), clearTimeout(s), this._submitInProgress = !1, this._ignoreClick = !1, this.button.disabled = !1, g(
          "add_to_cart_callback_failed_v2",
          {
            error: N(l),
            theme: (o = window.Shopify.theme) == null ? void 0 : o.schema_name
          },
          { once: !1 }
        );
        return;
      }
      if (this.button.disabled = !1, a) {
        this._submitInProgress = !1;
        return;
      }
      await new Promise((l) => setTimeout(l, 200)), this.button.click();
    };
    this.button.addEventListener("click", t, !0);
  }
  // Listens on window capture, not on the button: a theme's own
  // document-capture click handler that calls stopPropagation() and fires its
  // /cart/add fetch (pur-plant.es pp-product-main.js) would otherwise run
  // before us, so the interceptor's fallback deal would never arm in time.
  // Window capture runs before any document or button listener, whatever
  // the registration order (PRO-563).
  _registerOnClickListener() {
    this._onClickListenerRegistered || (this._onClickListenerRegistered = !0, window.addEventListener(
      "click",
      (t) => {
        !t.composedPath().includes(this.button) || this._submitInProgress || this._ignoreClick || (this._onClickCallback && this._onClickCallback(), this._validationCallback && !this._validationCallback() && (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation()));
      },
      !0
    ));
  }
  updatePrice(t, e, n = !1) {
    const r = this._findAllAddToCartPriceElements(this.button);
    if ((!n || r.length > 0) && this._removeTotalPrice(), r.length === 0) {
      n && this._updateTotalPrice(t);
      return;
    }
    const a = r.find(
      (o) => this._isCompareAtPriceElement(o)
    ), s = r.find((o) => o !== a) || r[0];
    s.innerHTML = t.amount > 0 ? t.formatted : "", a && a !== s && (e.amount > t.amount && t.amount > 0 ? (a.innerHTML = e.formatted, a.style.display = "") : a.innerHTML = "");
  }
  // Only for buttons the theme left without a price of its own; a submit
  // input has no child content to append to.
  _updateTotalPrice(t) {
    if (this.button.tagName === "INPUT")
      return;
    let e = this.button.querySelector(
      `.${Z}`
    );
    e || (e = document.createElement("span"), e.className = Z, this.button.appendChild(e)), e.innerHTML = t.amount > 0 ? ` · ${t.formatted}` : "";
  }
  _removeTotalPrice() {
    var t;
    (t = this.button.querySelector(`.${Z}`)) == null || t.remove();
  }
  _setupHorizonThemeHandling() {
    const t = this.button.closest("add-to-cart-component");
    t && this.button.addEventListener(
      "pointerdown",
      () => {
        this._validationCallback && !this._validationCallback() ? (t.setAttribute("data-add-to-cart-animation", "false"), this._horizonAnimationDisabled = !0) : this._horizonAnimationDisabled && (t.setAttribute("data-add-to-cart-animation", "true"), this._horizonAnimationDisabled = !1);
      },
      !0
    );
  }
  _isPriceNode(t) {
    var n;
    const e = (n = t.childNodes[0]) == null ? void 0 : n.nodeValue;
    return !!(e && e.match(/\d/) && !e.match(/\p{L}{4}/u) && !e.includes("%"));
  }
  _findAllAddToCartPriceElements(t) {
    const e = [];
    if (!t.childNodes.length || t.classList.contains(Z))
      return e;
    if (this._isPriceNode(t))
      return e.push(t), e;
    for (const n of t.childNodes)
      e.push(...this._findAllAddToCartPriceElements(n));
    return e;
  }
  _isCompareAtPriceElement(t) {
    let e = t;
    for (; e && e !== this.button; ) {
      const n = e.tagName;
      if (n === "S" || n === "DEL" || n === "STRIKE" || /compare/i.test(e.className || "") || getComputedStyle(e).textDecorationLine.includes("line-through"))
        return !0;
      e = e.parentElement;
    }
    return !1;
  }
}
const de = "shopify-additional-items", mr = /^shopify-additional-items\[(\d+)\]/, ue = "data-kaching-bundles-additional-item", _r = ["__kaching_bundles", "__kaching_session_id"];
class gr {
  constructor(t, e, n, r, a) {
    this._acceleratedCheckoutButtonsEnabled = !0, this._currentItem = null, this._additionalItems = [], this._variantIdChangeCallback = null, this._sellingPlanChangeCallback = null, this._variantIdIntervalId = null, this._sellingPlanObserver = null, this._sellingPlanChangeHandler = null, this._replacedCallbacks = [], p("AddToCartForm", {
      form: t,
      addQuantityInput: e,
      allowSellingPlanUpdate: r
    }), this.form = t, this._addQuantityInput = e, this._keepQuantityInput = n, this._allowSellingPlanUpdate = r, this._addSessionId = a, this._addSessionIdInput();
  }
  _addSessionIdInput() {
    if (!this._addSessionId)
      return;
    const t = this._findOrCreateInput(
      "properties[__kaching_session_id]"
    );
    t.value = rt();
  }
  updateItem(t) {
    p("AddToCartForm#updateItem", [this.form, t]), this._currentItem = t, this._updateIdInput(t.id), this._updateQuantityInput(t.quantity), this._updateKachingBundlesPropertyInput(t.properties), this._updateSellingPlanInput(t.selling_plan);
  }
  updateAdditionalItems(t) {
    p("AddToCartForm#updateAdditionalItems", [this.form, t]), this._additionalItems = t, this._removeAdditionalItemInputs();
    const e = this._lastOtherAdditionalItemIndex() + 1;
    t.forEach((n, r) => {
      const a = `${de}[${e + r}]`;
      this._appendAdditionalItemInput(`${a}[id]`, String(n.id)), this._appendAdditionalItemInput(
        `${a}[quantity]`,
        String(n.quantity)
      ), n.parent_id && this._appendAdditionalItemInput(
        `${a}[parent_id]`,
        String(n.parent_id)
      ), n.selling_plan && this._appendAdditionalItemInput(
        `${a}[selling_plan]`,
        String(n.selling_plan)
      );
      const s = this._additionalItemProperties(n.properties);
      s.length > 0 && this._appendAdditionalItemInput(
        `${a}[properties]`,
        JSON.stringify(s)
      );
    });
  }
  // Themes and other apps write additional items into the same form, so ours
  // go after the highest index they use.
  _lastOtherAdditionalItemIndex() {
    const t = Array.from(this.form.elements).map((e) => {
      var r;
      const n = (r = e.getAttribute("name")) == null ? void 0 : r.match(mr);
      return n ? Number(n[1]) : 0;
    });
    return Math.max(0, ...t);
  }
  // Accelerated checkout parses this field as a JSON list of key/value pairs.
  // A parse error drops every additional item.
  _additionalItemProperties(t) {
    return Object.entries(t).map(([e, n]) => ({
      key: e,
      value: e === "__kaching_bundles" ? this._encodeBundlesProperty(n) : String(n)
    })).filter(({ value: e }) => e !== "");
  }
  // Mirrors how accelerated checkout reads the primary line properties: fields
  // bound to the form by a `form` attribute starting with its id, then fields
  // inside it, later ones winning. Disabled fields count, unlike on submit.
  pageProperties() {
    const t = '[name^="properties"]', n = [
      ...this.form.id ? Array.from(document.querySelectorAll(`${t}[form]`)).filter(
        (a) => a.getAttribute("form").startsWith(this.form.id)
      ) : [],
      ...this.form.querySelectorAll(t)
    ], r = {};
    for (const a of n) {
      const s = yr(a.getAttribute("name")), o = br(a);
      !s || _r.includes(s) || typeof o != "string" || o.trim() === "" || (r[s] = o);
    }
    return r;
  }
  currentVariantId() {
    const t = this._findVariantIdElement();
    if (t)
      return Number(t.value);
  }
  onVariantIdChange(t) {
    this._variantIdChangeCallback = t, this._registerVariantIdObserver();
  }
  _registerVariantIdObserver() {
    if (!this._variantIdChangeCallback)
      return;
    this._variantIdIntervalId !== null && (window.clearInterval(this._variantIdIntervalId), this._variantIdIntervalId = null);
    const t = this._variantIdChangeCallback, e = this._findVariantIdElement();
    if (e instanceof HTMLInputElement && gt(e, "value", (n, r) => {
      n !== r && r && t(Number(r));
    }), e instanceof HTMLSelectElement) {
      let n;
      this._variantIdIntervalId = window.setInterval(() => {
        const r = e.value;
        n !== r && r && (n = r, t(Number(r)));
      }, 100);
    }
  }
  onSellingPlanChange(t) {
    this._sellingPlanChangeCallback = t, this._registerSellingPlanObserver();
  }
  _registerSellingPlanObserver() {
    if (this._allowSellingPlanUpdate || !this._sellingPlanChangeCallback)
      return;
    this._sellingPlanObserver && (this._sellingPlanObserver.disconnect(), this._sellingPlanObserver = null);
    const t = this._sellingPlanChangeCallback;
    let e;
    const n = (s) => {
      e !== s && (e = s, t(s ? Number(s) : void 0));
    };
    let r = null;
    const a = () => {
      var l;
      const s = this._findInput("selling_plan");
      s !== r && (r = s, s && gt(s, "value", (c, d) => {
        n(d);
      })), this._sellingPlanChangeHandler || (this._sellingPlanChangeHandler = (c) => {
        const d = c.target;
        d.name === "selling_plan" && n(d.value);
      }, this.form.addEventListener("change", this._sellingPlanChangeHandler));
      const o = T(
        'input[name="selling_plan"]:checked',
        this.form
      );
      n((l = o == null ? void 0 : o.value) != null ? l : s == null ? void 0 : s.value);
    };
    a(), this._sellingPlanObserver = new MutationObserver((s) => {
      s.some((o) => o.type === "childList") && a();
    }), this._sellingPlanObserver.observe(this.form, {
      childList: !0,
      subtree: !0
    });
  }
  // Mirrors how accelerated checkout reads the primary line quantity: the
  // first field named "quantity", disabled or not, 1 without one and 0 when
  // blank.
  acceleratedCheckoutQuantity() {
    const t = this.form.elements.namedItem("quantity"), e = t instanceof RadioNodeList ? t.item(0) : t, n = e instanceof HTMLInputElement || e instanceof HTMLSelectElement ? e.value : null;
    return Number(n != null ? n : "1");
  }
  toggleAcceleratedCheckoutButtons(t) {
    const e = "kaching-bundles-form--different-variants-selected";
    this._acceleratedCheckoutButtonsEnabled = t, t ? this.form.classList.remove(e) : this.form.classList.add(e);
  }
  _cleanupObservers() {
    this._variantIdIntervalId !== null && (window.clearInterval(this._variantIdIntervalId), this._variantIdIntervalId = null), this._sellingPlanObserver && (this._sellingPlanObserver.disconnect(), this._sellingPlanObserver = null), this._sellingPlanChangeHandler && (this.form.removeEventListener("change", this._sellingPlanChangeHandler), this._sellingPlanChangeHandler = null);
  }
  replaceForm(t) {
    w("New add to cart form", { form: t }), this._cleanupObservers(), this._removeAdditionalItemInputs(), this.form = t, this._addSessionIdInput(), this.toggleAcceleratedCheckoutButtons(
      this._acceleratedCheckoutButtonsEnabled
    ), this._currentItem && this.updateItem(this._currentItem), this._additionalItems.length > 0 && this.updateAdditionalItems(this._additionalItems), this._registerVariantIdObserver(), this._registerSellingPlanObserver(), this._replacedCallbacks.forEach((e) => e());
  }
  onReplaced(t) {
    this._replacedCallbacks.push(t);
  }
  _updateIdInput(t) {
    const e = this._findVariantIdElement() || this._createInput("id"), n = String(t);
    this._ensureSelectOptionExists(e, n), e.disabled = !1, e.value = n;
  }
  _updateQuantityInput(t) {
    p("AddToCartForm#_updateQuantityInput", t);
    const e = this._resolveQuantityInput();
    e && (e.disabled = !1, e.value = String(t));
  }
  _updateKachingBundlesPropertyInput(t) {
    var e, n;
    if (t.__kaching_bundles) {
      const r = this._findOrCreateInput(
        "properties[__kaching_bundles]"
      );
      r.disabled = !1, r.value = this._encodeBundlesProperty(
        t.__kaching_bundles
      );
      const a = (n = (e = window.Shopify.theme) == null ? void 0 : e.schema_name) == null ? void 0 : n.toLowerCase();
      a != null && a.includes("pipeline") && (r.dataset.morphSkip = "true");
    } else {
      const r = this._findInput("properties[__kaching_bundles]");
      r == null || r.remove();
    }
  }
  _encodeBundlesProperty(t) {
    var n, r;
    const e = (r = (n = window.Shopify.theme) == null ? void 0 : n.schema_name) == null ? void 0 : r.toLowerCase();
    return e != null && e.includes("shrine pro") || e != null && e.includes("ascendify") ? btoa(t) : t;
  }
  _updateSellingPlanInput(t) {
    if (this._allowSellingPlanUpdate)
      if (t) {
        const e = this._findOrCreateInput("selling_plan");
        e.disabled = !1, e.value = String(t);
      } else {
        const e = this._findInput("selling_plan");
        e == null || e.remove();
      }
  }
  _removeAdditionalItemInputs() {
    I(
      `[name^="${de}"][${ue}]`,
      this.form
    ).forEach((t) => t.remove());
  }
  _appendAdditionalItemInput(t, e) {
    var a, s;
    const n = U("input");
    n.type = "hidden", n.name = t, n.value = e, n.setAttribute(ue, "");
    const r = (s = (a = window.Shopify.theme) == null ? void 0 : a.schema_name) == null ? void 0 : s.toLowerCase();
    r != null && r.includes("pipeline") && (n.dataset.morphSkip = "true"), this.form.appendChild(n);
  }
  _findOrCreateInput(t) {
    return this._findInput(t) || this._createInput(t);
  }
  _ensureSelectOptionExists(t, e) {
    if (!(t instanceof HTMLSelectElement)) return;
    if (!Array.from(t.options).some(
      (r) => r.value === e
    )) {
      const r = U("option");
      r.value = e, r.text = "", t.appendChild(r);
    }
  }
  _findInput(t) {
    return T(
      `[name="${t}"]`,
      this.form
    );
  }
  // An integration that owns add-to-cart manages the native quantity input
  // itself, matching the opt-out in DealBlock#_changeQuantityInput.
  _resolveQuantityInput() {
    var t;
    return window.kachingBundlesDisableAddToCartHandling && !this._keepQuantityInput ? null : (t = this._findSubmittedInput("quantity")) != null ? t : this._addQuantityInput ? this._createInput("quantity") : null;
  }
  // Themes may bind an input to the form with the `form` attribute instead of
  // nesting it, so a subtree lookup misses an input the form still submits.
  _findSubmittedInput(t) {
    var e;
    return (e = this._findInput(t)) != null ? e : Array.from(this.form.elements).find(
      (n) => n instanceof HTMLInputElement && n.name === t && n.type !== "radio" && n.type !== "checkbox"
    ) || null;
  }
  _findVariantIdElement() {
    return Array.from(this.form.elements).find(
      (t) => (t instanceof HTMLInputElement || t instanceof HTMLSelectElement) && t.name === "id"
    ) || null;
  }
  _createInput(t) {
    const e = U("input");
    return e.type = "hidden", e.name = t, this.form.prepend(e), e;
  }
}
function yr(i) {
  const t = i.indexOf("["), e = i.lastIndexOf("]");
  return t === -1 || e === -1 ? null : i.substring(t + 1, e);
}
function br(i) {
  var t;
  if (!(["radio", "checkbox"].includes((t = i.type) != null ? t : "") && !i.checked))
    return i.value === "" ? void 0 : i.value;
}
const wt = "kaching-bundle, kaching-bundle-deals", vt = [
  'form[action*="/cart/add"]',
  "form[data-instant-form-product-url]",
  // Instant page builder
  'form[action$="/add"]'
], St = [
  '[data-button-action="add-to-cart"]'
  // Dropmagic
], Pt = [
  '[data-pf-type^="ProductATC"]',
  // PageFly sometimes uses ProductATC2
  "button.gp-button-atc",
  // Gempages
  "gp-product-button button",
  // Gempages v7
  "x-buy-button",
  // Minimog
  "button.button--addToCart",
  // Booster
  'button[type="submit"]',
  'input[type="submit"]'
], Re = [
  // Gempages
  [
    '[data-icon="gpicon-product-cartbutton"]',
    '[data-icon="gpicon-product-quantity"]'
  ],
  // Gempages v7
  ["gp-product-button", "gp-product-quantity"],
  // Dawn (and other free themes)
  ["product-form", ".product-form__quantity"],
  // Horizon
  [".buy-buttons-block", ".quantity-selector-wrapper"],
  // PageFly app
  ['[data-pf-type^="ProductATC"]', '[data-pf-type="ProductQuantity"]'],
  // PageFly sometimes uses ProductATC2
  // Debut
  [".product-form__item--submit", 'label[for="Quantity-product-template"]'],
  // Debutify
  [".product-single__add-to-cart", ".product-single__quantity"],
  // Impact
  [".product-info__buy-buttons", ".product-info__quantity-selector"],
  // Prestige
  [
    ".ProductForm__BuyButtons, .ProductForm__AddToCart",
    ".ProductForm__QuantitySelector"
  ],
  // Prestige (v7)
  ['[data-block-type="buy-buttons"]', '[data-block-type="quantity-selector"]'],
  // Envy
  [".product-page--submit-action", ".quantity-controls__outer"],
  // Warehouse
  [".product-form__payment-container", ".product-form__info-item--quantity"],
  // Atlantic
  ["[data-product-submit]", ".product-quantity-input"],
  // Empire
  [".product-form--atc", ".product-form--atc-qty"],
  // Turbo
  [".purchase-details", ".purchase-details__quantity"],
  // Expanse
  [".product-single__form .payment-buttons", ".product__quantity"],
  // Minimal
  [".product-form--wide", ".product-single__quantity"],
  // Brooklyn
  [".product-single__add-to-cart", ".product-single__quantity"],
  // Blockshop
  [".product-form--button-container", null],
  // Venture
  [".product-form__item--submit", ".product-form__item--quantity"],
  // Showcase
  [".product-detail__form__action", null],
  // Palo Alto
  [".product__submit__buttons", null],
  // Symmetry
  [".buy-buttons-row", ".quantity-wrapper"],
  // Kalles, Unsen
  [".t4s-product-form__buttons", "[data-quantity-wrapper]"],
  // Alchemy
  [".qty-wrapper--with-payment-button", ".product-qty"],
  // Baseline
  [".shopify-product-form", ".product-quantity-block"],
  // Shapes
  [".shopify-product-form", ".product-block-quantity-selector"],
  // Colors
  [".type_buy_buttons", ".type_quantity_selector"],
  // Motion
  [".product-single__form .add-to-cart", ".product__quantity"],
  // Avenue
  [".purchase-section", ".quantity.form"],
  // Ella
  [".product-form__buttons", ".quantity_selector"],
  // Booster
  [".product__atc", ".quantity--input"],
  // Focal
  [".product-form__payment-container", ".quantity-selector"],
  // EComposer
  [".ecom-product-single__add-to-cart", ".ecom-product-single__quantity"],
  // Solodrop
  [".product-form__submit", ".product__quantity"],
  // Enterprise
  [".product-info__add-to-cart", "quantity-input"],
  // Yuva
  [".yv-checkout-btn", ".yv-product-quantity"],
  // Reformation
  [".product-add-to-cart-container", "quantity-selector"],
  // Pipeline
  [".product__block__buttons", ".product__block__quantity"],
  // Minimog
  ["x-buy-button", "x-quantity-input"],
  // Xtra
  [".submit:has(.overlay-buy_button)", ".input-amount"],
  // Instant page builder
  [
    '[data-instant-action-type="redirect-to-cart"]',
    '[data-instant-type="container"]:has(> .instant-quantity-input)'
  ]
], kr = (i, t, e, n) => {
  if (p("_updateNativePrice", {
    discountedPrice: t,
    fullPrice: e
  }), e.amount > 0) {
    const r = mt(
      "[data-kaching-price-compare]",
      n.customSelectors.priceCompare
    );
    if (r.length > 0)
      for (const a of r)
        e.amount > t.amount ? (a.innerHTML = e.formatted, a.style.display = "") : a.style.display = "none";
    else {
      const a = [
        ".price--large .price__sale .price-item--regular",
        // Dawn, Shrine
        ".price--medium .price__sale .price-item--regular",
        // Be Yours
        ".lumin-price .price__sale .price-item--regular",
        // Architect, Beauty
        ".product-page-price .price__sale .price-item--regular",
        // Craft, Atlas
        ".f-price--large .f-price__sale .f-price-item--regular",
        // Sleek
        'gp-product-price div[type="compare"]',
        // Gempages
        "gp-product-price .gp-product-compare-price",
        // Gempages
        "product-price .compare-at-price",
        // Horizon
        ".pp-product-price .pp-price-item--sale",
        // Page Pilot
        ".product__price-and-badge .product__price--compare",
        // Palo Alto
        ".product-block--price span[data-compare-price]",
        // Impulse
        ".main-product__block-price .m-price__sale .m-price-item--regular",
        // Minimog
        ".product-info__price compare-at-price",
        // Impact
        '.product-info__block-item[data-block-type="price"] compare-at-price',
        // Prestige
        ".product-form__info-item .price--compare",
        // Warehouse
        '[data-product-type="compare_at_price"]',
        // PageFly
        ".product__price-wrapper .price__container .price__sale del",
        // Marble
        ".product__price-wrapper .price__container .product__price span:not(.visually-hidden)"
        // Marble
      ].flatMap((o) => I(o)), s = $(
        i,
        a
      );
      if (s) {
        s.innerHTML = e.formatted;
        const o = s.closest("gp-product-price");
        o instanceof HTMLElement && (o.dataset.hidden = e.amount > t.amount ? "false" : "true");
      }
    }
    for (const a of mt(
      "[data-kaching-label]",
      n.customSelectors.label
    ))
      a.innerHTML !== e.formatted && (a.innerHTML = e.formatted);
  }
  if (t.amount > 0) {
    const r = mt(
      "[data-kaching-price]",
      n.customSelectors.price
    );
    if (r.length > 0)
      for (const a of r)
        a.innerHTML = t.formatted;
    else {
      const a = [
        ".price--large .price__regular .price-item--regular",
        // Dawn, Shrine
        ".price--large .price__sale .price-item--sale",
        // Dawn, Shrine
        ".price--medium .price__regular .price-item--regular",
        // Be Yours
        ".price--medium .price__sale .price-item--sale",
        // Be Yours
        ".lumin-price .price__regular .price-item--regular",
        // Architect, Beauty
        ".lumin-price .price__sale .price-item--sale",
        // Architect, Beauty
        ".product-page-price .price__regular .price-item--regular",
        // Craft, Atlas
        ".product-page-price .price__sale .price-item--sale",
        // Craft, Atlas
        ".f-price--large .f-price__regular .f-price-item--regular",
        // Sleek
        ".f-price--large .f-price__sale .f-price-item--sale",
        // Sleek
        'gp-product-price div[type="regular"]',
        // Gempages
        "gp-product-price .gp-price:not(.gp-product-compare-price)",
        // Gempages
        "product-price .price",
        // Horizon
        ".pp-product-price .pp-price-item--regular",
        // Page Pilot
        ".product__price-and-badge .product__price--regular",
        // Palo Alto
        ".product-block--price span[data-product-price]",
        // Impulse
        ".main-product__block-price .m-price__sale .m-price-item--sale",
        // Minimog
        ".product-info__price sale-price",
        // Impact
        '.product-info__block-item[data-block-type="price"] sale-price',
        // Prestige
        ".product-form__info-item .price:not(.price--compare)",
        // Warehouse
        '[data-product-type="price"]',
        // PageFly
        ".product__price-wrapper .price__container .price__sale ins"
        // Marble
      ].flatMap((o) => I(o)), s = $(i, a);
      s && (s.innerHTML = t.formatted);
    }
  }
  if (t.amount > 0 && e.amount > 0) {
    const r = Math.round(
      (e.amount - t.amount) / e.amount * 100
    ), a = I("[data-kaching-price-badge]");
    if (a.length > 0)
      for (const s of a)
        r > 0 ? (s.innerHTML = s.innerHTML.replace(
          /\d+%/,
          `${r}%`
        ), s.style.display = "") : s.style.display = "none";
    else {
      const s = [
        ".price--large .price__badge-sale",
        // Dawn, Shrine
        ".lumin-price .price__badge-sale",
        // Architect
        ".product-page-price .price__badge-sale",
        // Craft, Atlas
        "gp-product-tag div[data-gp-text]",
        // Gempages
        ".product__price-and-badge span[data-price-off-amount]",
        // Palo Alto
        ".product-block--price span[data-save-price]",
        // Impulse
        ".product-info__price on-sale-badge"
        // Impact
      ].flatMap((l) => I(l)), o = $(i, s);
      o && (/\d/.test(o.innerHTML) && !o.innerHTML.includes("%") ? o.style.display = "none" : o.innerHTML = o.innerHTML.replace(/\d+%/, `${r}%`));
    }
  }
}, mt = (i, t) => I(t || i);
class W {
  static find(t, e) {
    let n = at(t);
    for (; n; ) {
      if (e) {
        const s = I(
          e,
          n
        );
        if (s.length > 0)
          return new W(s);
      }
      const r = T(
        [
          "variant-selects",
          "variant-radios",
          "variant-picker",
          "product-variants",
          "gp-product-variants",
          ".gf_variants-wrapper",
          '[data-pf-type="ProductVariantSwatches"]',
          ".product-selectors",
          ".product-block-variant-picker",
          "dm-variant-selects",
          "simple-variant-picker"
        ].join(", "),
        n
      );
      if (r) return new W([r]);
      let a = I(
        [
          ".selector-wrapper",
          ".radio-wrapper",
          ".variant-wrapper",
          "div[data-product-option]",
          ".pp-variant-picker"
        ].join(", "),
        n
      );
      if (window.Shopify.shop && ["28212b.myshopify.com", "9bd9ad.myshopify.com"].includes(
        window.Shopify.shop
      ) && (a = I(
        ".selector-wrapper, .radio-wrapper, .variant-wrapper, .select-wrapper, div[data-product-option]",
        n
      )), a.length > 0) {
        const s = a.filter(
          (o) => !a.some(
            (l) => l !== o && l.contains(o)
          )
        );
        return new W(s);
      }
      n = at(n);
    }
    return null;
  }
  constructor(t) {
    this._elements = t;
  }
  elements() {
    return this._elements;
  }
  hide() {
    for (const t of this._elements)
      t.style.display = "none", t.parentElement.classList.add(
        "kaching-bundles--variant-selects-hidden"
      );
  }
  select(t, e, n, r, a, s) {
    p("VariantPicker#select", [
      t,
      e,
      n,
      r
    ]), this._clickOptionWrapper(n, r) || this._clickRadioInput(
      t,
      e,
      n,
      r,
      a
    ) || this._setSelectValue(t, n, r) || this._setSelectVariantId(s) || this._clickButton(n, r);
  }
  // GemPages v7
  _clickOptionWrapper(t, e) {
    const r = this._elements.map((a) => I(".option-value-wrapper", a)).flat().find(
      (a) => a.getAttribute("option-data") === t && a.getAttribute("option-value") === e
    );
    return r ? (p("VariantPicker#_clickOptionWrapper", r), r.click(), !0) : !1;
  }
  _clickRadioInput(t, e, n, r, a) {
    const s = this._elements.map((c) => [...c.querySelectorAll("input")]).flat();
    let o = s.filter(
      (c) => [
        n,
        `${n}-${t}`,
        `options[${n}]`,
        `option${t}`,
        `option-${a}-${t - 1}`,
        `${a}-options-${n}`
      ].includes(c.name.trim())
    );
    o.length || (o = s.filter(
      (c) => c.dataset.optionPosition ? Number(c.dataset.optionPosition) === t : !1
    )), o.length || (o = s.filter((c) => c.type === "radio"));
    const l = o.find(
      (c) => c.value == r || c.value === String(e)
    );
    return l ? (p("VariantPicker#_clickRadioInput", l), l.click(), !0) : !1;
  }
  _setSelectValue(t, e, n) {
    const a = this._elements.map((o) => [...o.querySelectorAll("select")]).flat().find((o) => !!([`options[${e}]`, `option${t}`].includes(o.name) || o.dataset.index === `option${t}` || o.dataset.optionName === e || [
      `SingleOptionSelector-product-${t - 1}`,
      // PageFly
      `p-variant-dropdown-${t}`,
      // Gempages v6
      `option-${e.toLowerCase().replace(/ /g, "-")}`
    ].includes(o.id)));
    return !a || ![...a.options].find(
      (o) => o.value == n
    ) ? !1 : a.value === n ? (p("VariantPicker#_setSelectValue - already set", {
      variantSelect: a,
      optionValue: n
    }), !0) : (p("VariantPicker#_setSelectValue", { variantSelect: a, optionValue: n }), a.value = n, a.dispatchEvent(new Event("change", { bubbles: !0 })), !0);
  }
  _setSelectVariantId(t) {
    const n = this._elements.map((r) => [...r.querySelectorAll("select")]).flat().find(
      (r) => [...r.options].find((a) => Number(a.value) === t)
    );
    return n ? n.value === String(t) ? (p("VariantPicker#_setSelectVariantId - already set", {
      variantSelect: n,
      variantId: t
    }), !0) : (p("VariantPicker#_setSelectVariantId", { variantSelect: n, variantId: t }), n.value = String(t), n.dispatchEvent(new Event("change", { bubbles: !0 })), !0) : !1;
  }
  _clickButton(t, e) {
    const n = this._elements.find(
      (a) => a.getAttribute("data-product-option") === t
    );
    if (!n) return !1;
    const r = I("[data-value]", n).find(
      (a) => a.getAttribute("data-value") === e
    );
    return r ? (p("VariantPicker#_clickButton", r), r.click(), !0) : !1;
  }
}
class Cr {
  constructor(t, e, n) {
    this._variantPicker = null, this._quantityElement = null, this._quantityInput = null, this._hiddenQuantityElement = null, this._onQuantityChange = null, this._addToCartForm = null, this._addToCartButton = null, this._placeholder = t, this._globalConfig = e, this._dealBlockSettings = n;
  }
  initialize() {
    this._findVariantPicker(), this._observeVariantPickerRemoval(), this._findQuantityInput(), this._listenForQuantityInputChange(), this._observeQuantityInputRemoval(), this._findAddToCartForm(), this._observeAddToCartFormRemoval(), this._findAddToCartButton(), this._moveAddToCartButtonOutOfQuantityElement(), this._observeAddToCartButtonRemoval();
  }
  variantPicker() {
    return this._variantPicker;
  }
  quantityInput() {
    return this._quantityInput;
  }
  // A quantity input the extension adds to the form is never visible: it is
  // only created when the page has no quantity element.
  quantitySelectorVisible() {
    return !this._quantityElement || !this._quantityInput || this._hiddenQuantityElement ? !1 : x(this._quantityElement);
  }
  addToCartForm() {
    return this._addToCartForm;
  }
  addToCartButton() {
    return this._addToCartButton;
  }
  onQuantityInputChange(t) {
    this._onQuantityChange = t;
  }
  updatePrice(t, e) {
    kr(
      this._placeholder,
      t,
      e,
      this._globalConfig
    );
  }
  _findVariantPicker() {
    const t = W.find(
      this._placeholder,
      this._globalConfig.customSelectors.variantPicker
    );
    t && (this._dealBlockSettings.hideVariantPicker && t.hide(), this._variantPicker = t);
  }
  _observeVariantPickerRemoval() {
    this._variantPicker && G(this._variantPicker.elements()[0], () => {
      var t, e;
      this._findVariantPicker(), w("New variant picker", {
        picker: (t = this._variantPicker) == null ? void 0 : t.elements()
      }), g(
        "variant_picker_removed_v2",
        {
          recreated: !!this._variantPicker,
          theme: (e = window.Shopify.theme) == null ? void 0 : e.schema_name
        },
        { sampleRate: 0.01, once: !1 }
      ), this._observeVariantPickerRemoval();
    });
  }
  _findQuantityInput() {
    const t = this._findQuantityElements(), n = $(
      this._placeholder,
      t,
      6
    );
    if (!n)
      return;
    this._quantityElement = n, this._globalConfig.keepQuantityInput || (this._hiddenQuantityElement = n, n.style.display = "none");
    const r = n.matches("input") ? n : n.querySelector("input");
    this._quantityInput = r;
  }
  _listenForQuantityInputChange() {
    this._quantityInput && (E(this._quantityInput, "change", () => {
      this._onQuantityChange && this._onQuantityChange(Number(this._quantityInput.value));
    }), gt(this._quantityInput, "value", (t, e) => {
      t !== e && this._onQuantityChange && this._onQuantityChange(Number(e));
    }));
  }
  _observeQuantityInputRemoval() {
    this._quantityInput && G(this._quantityInput, () => {
      var t;
      this._findQuantityInput(), this._listenForQuantityInputChange(), this._moveAddToCartButtonOutOfQuantityElement(), w("New quantity input", {
        input: this._quantityInput
      }), g(
        "quantity_input_removed_v2",
        {
          recreated: !!this._quantityInput,
          theme: (t = window.Shopify.theme) == null ? void 0 : t.schema_name
        },
        { sampleRate: 0.01, once: !1 }
      ), this._observeQuantityInputRemoval();
    });
  }
  _findQuantityElements() {
    const t = this._globalConfig.customSelectors.quantity;
    if (t) {
      const e = I(t);
      if (e.length)
        return e;
    }
    for (const [e, n] of Re) {
      if (!n)
        continue;
      const r = I(n);
      if (r.length)
        return r;
    }
    return I(".product-form__quantity");
  }
  _findAddToCartForm() {
    const t = this._findCartForm();
    if (!t)
      return;
    const e = !!this._dealBlockSettings.subscriptionsEnabled || this._dealBlockSettings.dealBars.some(
      (r) => r.sellingPlanEnabled
    ), n = !!this._dealBlockSettings.abTestVariantId || this._globalConfig.featureFlags.debug_cart_add === !0;
    this._addToCartForm = new gr(
      t,
      !this._quantityInput,
      !!this._globalConfig.keepQuantityInput,
      e,
      n
    );
  }
  _findCartForm() {
    let t = at(this._placeholder);
    for (; t; ) {
      for (const e of vt)
        for (const n of [
          this._globalConfig.customSelectors.addToCartButton,
          ...Pt,
          "button"
        ]) {
          if (!n)
            continue;
          const r = T(
            `${e} ${n}`,
            t
          );
          if (r) {
            const a = r.closest(
              e
            );
            if (!a) continue;
            return !a.contains(this._placeholder) && a.querySelector(wt) ? null : a;
          }
        }
      if (this._hasFormlessAddToCartButtonIn(t))
        return null;
      t = at(t);
    }
    return null;
  }
  _observeAddToCartFormRemoval() {
    var e;
    const t = (e = this._addToCartForm) == null ? void 0 : e.form;
    window.Shopify.designMode || !t || G(t, () => {
      var r, a;
      const n = this._findCartForm();
      n && ((r = this._addToCartForm) == null || r.replaceForm(n), g(
        "cart_form_removed_v2",
        {
          theme: (a = window.Shopify.theme) == null ? void 0 : a.schema_name
        },
        { sampleRate: 0.01, once: !1 }
      ), this._observeAddToCartFormRemoval());
    });
  }
  _findAddToCartButton() {
    const t = this._findAddToCartButtonElement() || this._findFormlessAddToCartButtonElement();
    if (!t) {
      this._warnAboutMissingAddToCartButton(), this._addToCartButton = null;
      return;
    }
    this._addToCartButton = new fr(t);
  }
  _moveAddToCartButtonOutOfQuantityElement() {
    !this._hiddenQuantityElement || !this._addToCartButton || this._hiddenQuantityElement.contains(this._addToCartButton.button) && this._hiddenQuantityElement.after(this._addToCartButton.button);
  }
  _findAddToCartButtonElement() {
    var a, s;
    const t = (a = this.addToCartForm()) == null ? void 0 : a.form;
    if (!t)
      return null;
    if (this._globalConfig.customSelectors.addToCartButton) {
      const o = T(
        this._globalConfig.customSelectors.addToCartButton,
        t
      );
      if (o)
        return o;
    }
    const e = [];
    for (const o of Pt) {
      const l = I(o, t);
      e.push(...l);
    }
    const n = $(
      this._placeholder,
      e
    );
    if (n)
      return n;
    const r = t.getRootNode();
    if (r instanceof ShadowRoot) {
      try {
        g("shadow_root_cart_form_v1", {
          host: r.host.tagName.toLowerCase(),
          addToCartButtonFound: e.length > 0,
          theme: (s = window.Shopify.theme) == null ? void 0 : s.schema_name
        });
      } catch (o) {
        console.error(o);
      }
      if (e.length)
        return e[0];
    }
    return t.querySelector("button");
  }
  // This buy area adds to cart with JS: a builder button under the ancestor
  // being walked, belonging to no cart form of its own. Stops _findCartForm
  // from climbing further to a form elsewhere on the page -- related products,
  // a drawer -- and writing our hidden inputs into a form that button never
  // submits, which would leave the deal out of the cart. Checked only after
  // this level's form lookup, so a form alongside the button still wins and
  // the choice matches _findPosition. Gated on the interceptor, the only path
  // that carries the deal from such a click: without it, dropping the form
  // would leave the add-to-cart wired to nothing.
  _hasFormlessAddToCartButtonIn(t) {
    if (this._globalConfig.featureFlags.intercept_cart_request !== !0)
      return !1;
    for (const e of St) {
      const n = T(e, t);
      if (n && !n.closest(vt.join(", ")))
        return !0;
    }
    return !1;
  }
  _findFormlessAddToCartButtonElement() {
    return this._addToCartForm || this._globalConfig.featureFlags.intercept_cart_request !== !0 ? null : this._findNearestAddToCartButtonElement([
      this._globalConfig.customSelectors.addToCartButton,
      ...St
    ]);
  }
  _findNearestAddToCartButtonElement(t) {
    for (const n of t) {
      if (!n)
        continue;
      const r = I(n);
      if (r.length === 0)
        continue;
      const a = $(
        this._placeholder,
        r,
        3
      );
      if (a)
        return a;
    }
    return null;
  }
  _observeAddToCartButtonRemoval() {
    this._addToCartButton && G(this._addToCartButton.button, () => {
      var e, n;
      if ((e = this._addToCartButton) != null && e.button.isConnected) {
        this._observeAddToCartButtonRemoval();
        return;
      }
      let t = this._findAddToCartButtonElement() || this._findFormlessAddToCartButtonElement();
      t ? (this._addToCartButton.replaceButton(t), this._moveAddToCartButtonOutOfQuantityElement()) : this._addToCartButton = null, g(
        "add_to_cart_button_removed_v2",
        {
          recreated: !!t,
          theme: (n = window.Shopify.theme) == null ? void 0 : n.schema_name
        },
        { sampleRate: 0.01, once: !1 }
      ), this._observeAddToCartButtonRemoval();
    });
  }
  _warnAboutMissingAddToCartButton() {
    new URLSearchParams(window.location.search).get("source") !== "visualPreviewInitialLoad" && console.log(
      "%c[Kaching Bundles] Add to cart button not found. Please add a selector to the settings page or contact support.",
      "background: #f8d7da; color: #721c24; padding: 8px; border-left: 4px solid #f5c6cb;"
    );
  }
}
const Ir = (i, t, e, n, r) => {
  if (!e.stickyAtcEnabled || t.offsetParent === null || document.querySelector(".kaching-bundles-sticky-atc-wrapper"))
    return;
  const a = document.createElement("div");
  a.classList.add("kaching-bundles-sticky-atc-wrapper"), document.body.appendChild(a);
  const s = document.createElement("div");
  s.classList.add("kaching-bundles-sticky-atc-spacer"), a.appendChild(s);
  const o = document.createElement("kaching-bundles-sticky-atc");
  o.setAttribute(
    "sticky-atc",
    JSON.stringify(e.stickyAtc)
  ), o.setAttribute("config", JSON.stringify(i)), o.setAttribute("translations", JSON.stringify(n)), o.setAttribute("product", JSON.stringify(r)), o.setAttribute("deal-block", JSON.stringify(e)), a.appendChild(o), o.addEventListener(
    "kaching-bundles-sticky-atc-clicked",
    () => {
      const h = t.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: h,
        behavior: "smooth"
      });
    }
  );
  let l = !1;
  const c = () => {
    const u = t.getBoundingClientRect().bottom < 0;
    u !== l && (l = u, u ? (o.style.display = "block", requestAnimationFrame(() => {
      l && o.classList.add("kaching-bundles-sticky-atc--visible");
    })) : o.classList.contains("kaching-bundles-sticky-atc--visible") && (o.classList.remove("kaching-bundles-sticky-atc--visible"), o.addEventListener(
      "transitionend",
      () => {
        l || (o.style.display = "");
      },
      { once: !0 }
    )));
  };
  requestAnimationFrame(c), window.addEventListener("scroll", c, { passive: !0 }), new ResizeObserver(() => {
    const u = o.offsetHeight;
    s.style.height = `${u}px`;
  }).observe(o);
}, wr = "widget_web_vitals_v2", vr = 0.1, Sr = 'script[src*="/kaching-bundles"][src*="/loader.js"][fetchpriority], link[rel="modulepreload"][href*="/kaching-bundles"][fetchpriority]';
let pe = !1, he = !1, At, ct, dt, it, ut, V, Ft, Bt = 0, Le, xe = !1, Nt = !1;
const Pr = () => {
  var i, t;
  return (t = (i = document.querySelector(Sr)) == null ? void 0 : i.getAttribute("fetchpriority")) != null ? t : "missing";
}, Ar = (i) => {
  ct === void 0 && (ct = Math.round(i));
}, Br = () => {
  dt === void 0 && (dt = Math.round(performance.now()), it = document.visibilityState === "hidden");
}, Tr = () => {
  ut === void 0 && (ut = Math.round(performance.now()));
}, Er = (i) => {
  V === void 0 && (Bt = performance.now(), V = Math.round(Bt), Le = i, requestAnimationFrame(() => {
    setTimeout(() => {
      Ft = Math.round(performance.now());
    }, 0);
  }));
}, fe = () => {
  xe = !0;
}, me = async () => {
  var i;
  if (!pe && !((i = window.Shopify) != null && i.designMode) && typeof PerformanceObserver != "undefined" && (pe = !0, !(it != null ? it : document.visibilityState === "hidden") && !(!Xe() && !Ye() && Math.random() > vr))) {
    document.addEventListener("visibilitychange", () => {
      document.visibilityState === "hidden" && _e();
    }), window.addEventListener("pagehide", _e);
    try {
      const t = await import("./web-vitals-collector.js");
      t.start(() => ({
        bundleImportMs: ct,
        initStartMs: dt,
        dataReadyMs: ut,
        widgetMountedMs: V,
        widgetPaintedMs: Ft,
        widgetInsertedAt: Bt,
        widgetElement: Le,
        hiddenBeforeMount: Nt
      })), At = t;
    } catch (t) {
      console.error(t);
    }
  }
}, _e = () => {
  V === void 0 && (Nt = !0), !he && (xe && V === void 0 || (he = !0, At ? At.flush() : Dr()));
}, Dr = () => {
  var i, t, e, n;
  try {
    const r = navigator.connection, a = {
      bundleImportMs: ct,
      initStartMs: dt,
      dataReadyMs: ut,
      widgetMountedMs: V,
      widgetPaintedMs: Ft,
      hiddenBeforeMount: Nt ? 1 : 0,
      theme: (t = (i = window.Shopify) == null ? void 0 : i.theme) == null ? void 0 : t.schema_name,
      fetchPriority: Pr(),
      themeStoreId: (n = (e = window.Shopify) == null ? void 0 : e.theme) == null ? void 0 : n.theme_store_id,
      effectiveType: r == null ? void 0 : r.effectiveType
    };
    p("web vitals", a), Ze(wr, a);
  } catch (r) {
    console.error(r);
  }
};
class ge {
  constructor(t) {
    this._globalConfig = t, setTimeout(() => {
      const e = document.querySelector(
        'link[href*="kaching-bundles.css"]'
      );
      e && G(e, () => {
        var n;
        g(
          "css_removed",
          {
            theme: (n = window.Shopify.theme) == null ? void 0 : n.schema_name
          },
          { sampleRate: 0.01 }
        );
      });
    }, 100), or();
  }
  initialize() {
    this._setupTranslations();
    const t = I(wt);
    this._addProductIdForPlaceholders(t), t.length === 0 && this._addPlaceholders(), Fr() && me(), this._initializePlaceholders(), this._globalConfig.abTestsRunning && tn(), this._setupPlaceholderObserver();
  }
  _setupTranslations() {
    const t = tt("script#kaching-bundles-translations") || [], e = t.find(
      (n) => n.locale === this._globalConfig.locale
    );
    this._translations = e == null ? void 0 : e.translations, rn(t);
  }
  _addProductIdForPlaceholders(t) {
    const e = tt("script.kaching-bundles-product[data-main]");
    if (e)
      for (const n of t)
        n.getAttribute("product-id") || n.setAttribute("product-id", e.id);
  }
  _addPlaceholders() {
    if (!T("script.kaching-bundles-deal-block-settings"))
      return;
    const t = this._findPosition();
    if (!t)
      return;
    const e = tt("script.kaching-bundles-product[data-main]"), n = e && e.id || this._globalConfig.productId, r = U("kaching-bundle");
    r.setAttribute("product-id", n), t.parentElement.insertBefore(r, t);
  }
  async _initializePlaceholders() {
    const t = [...I(wt)].filter(
      (o) => o.getAttribute("product-id")
    );
    if (p("_initializePlaceholders", t), t.length === 0) {
      fe(), window.kachingBundlesInitialized = !0, window.dispatchEvent(new CustomEvent("kaching-bundles-initialized"));
      return;
    }
    if (t.filter(
      (o) => !F(o).initialized
    ).length === 0)
      return;
    const n = await this._fetchPlaceholdersData(t);
    p("placeholdersData", n);
    const r = Array.from(n.values()).map(({ dealBlock: o }) => o).filter((o) => o != null), a = Array.from(n.values()).map(({ product: o }) => o).filter((o) => o != null);
    await nt(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken,
      a,
      r
    ), Tr();
    const s = rt();
    for (const o of t) {
      const { product: l, dealBlock: c } = n.get(o);
      if (!l || !c) {
        F(o).initialized = "skipped";
        continue;
      }
      await this._initializePlaceholder(
        o,
        l,
        c,
        s
      );
    }
    t.some(
      (o) => F(o).initialized === "true"
    ) || fe(), window.kachingBundlesInitialized = !0, window.dispatchEvent(new CustomEvent("kaching-bundles-initialized"));
  }
  async _initializePlaceholder(t, e, n, r) {
    var _;
    const a = e.id;
    me(), this._globalConfig.webPixel ? (p("Tracking view with web pixel", (_ = window.Shopify) == null ? void 0 : _.analytics), Ie("kaching_bundle_viewed", {
      product_id: a,
      deal_block_id: n.id,
      ab_test_variant_id: n.abTestVariantId,
      deal_block_version_id: n.versionId,
      session_id: r
    })) : (p("Tracking view without web pixel (legacy)"), setTimeout(() => {
      en(
        this._globalConfig.shopifyDomain,
        n.id,
        a,
        n.abTestVariantId,
        n.versionId,
        r
      );
    }, 2e3));
    const s = Wn({
      defaultTranslations: this._globalConfig.defaultTranslations,
      localeTranslations: this._translations,
      dealBlockId: n.id
    }), o = this._globalConfig.locale === this._globalConfig.liquidLocale ? I("script.kaching-bundles-product:not([data-main])").map((y) => JSON.parse(y.textContent)).filter((y) => y.variants.length < 250) : [], l = performance.now();
    await import("./kaching-bundles-block.js"), Ar(performance.now() - l);
    const c = { ...this._globalConfig };
    c.currencyRate = Yn(
      this._globalConfig.currencyRate,
      n.currency,
      this._globalConfig.marketCurrencyCode
    ), n.dealBars.some(
      (y) => y.dealBarType === _t.QuantityBreak && y.quantitySelector
    ) && (c.keepQuantityInput = !1);
    const d = new Cr(t, c, n);
    d.initialize();
    const u = U(
      "kaching-bundles-block"
    );
    u.setAttribute("data-instant-styles", "none");
    const h = hr(
      t,
      n,
      e
    );
    for (h && u.setAttribute("selected-deal-bar-id", h), new ar(
      u,
      d,
      c,
      s,
      n,
      e,
      o
    ); t.firstChild; )
      t.removeChild(t.firstChild);
    t.appendChild(u), F(t).initialized = "true", Er(u), qr(u), Ir(
      this._globalConfig,
      u,
      n,
      s,
      e
    );
  }
  _setupPlaceholderObserver() {
    if (window.Shopify.designMode)
      return;
    new MutationObserver((e) => {
      var r;
      const n = [];
      for (const a of e)
        for (const s of Array.from(a.addedNodes)) {
          if (!(s instanceof HTMLElement)) continue;
          const o = s.tagName === "KACHING-BUNDLE" ? [s] : Array.from(
            s.querySelectorAll("kaching-bundle")
          );
          for (const l of o)
            F(l).initialized || n.push(l);
        }
      n.length > 0 && (this._globalConfig.featureFlags.reinitialize_morphed_placeholders ? (w("Initializing new kaching-bundle placeholder"), n.forEach(pr), this._initializePlaceholders()) : document.querySelector(
        "#replo-fullpage-element, #replo-element-styles"
      ) || g(
        "kaching_bundle_added_v9",
        {
          theme: (r = window.Shopify.theme) == null ? void 0 : r.schema_name
        },
        { sampleRate: 0.01, once: !1 }
      ));
    }).observe(document.body, {
      childList: !0,
      subtree: !0
    });
  }
  async _fetchPlaceholdersData(t) {
    var C, v;
    const e = t.map(
      (f) => Number(f.getAttribute("product-id"))
    ), n = new Map(
      this._globalConfig.locale === this._globalConfig.liquidLocale ? I("script.kaching-bundles-product[data-main]").map((f) => JSON.parse(f.textContent)).filter((f) => f.variants.length < 250).map((f) => [f.id, f]) : []
    ), r = e.filter(
      (f) => !n.has(f)
    ), a = I(
      "script.kaching-bundles-deal-block-settings"
    ), s = /* @__PURE__ */ new Map();
    for (const f of e) {
      const k = a.filter(
        (S) => Number(F(S).productId) === f
      );
      k.length && s.set(
        f,
        k.map(
          (S) => S.textContent ? JSON.parse(S.textContent) : null
        )
      );
    }
    const o = e.filter(
      (f) => !s.has(f)
    ), l = this._globalConfig.storefrontAccessToken ? new q(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken
    ) : null, c = l && r.length > 0 ? et(l, {
      country: this._globalConfig.country,
      language: this._globalConfig.locale.split("-")[0].toUpperCase(),
      productIds: r,
      includeSellingPlans: this._globalConfig.includeSellingPlans,
      includeAvailableQuantity: this._globalConfig.includeAvailableQuantity,
      useExternalMetafieldNamespace: !1
    }) : [], d = l && o.length > 0 ? we(l, {
      useExternalMetafieldNamespace: !1,
      useMetaobjects: this._globalConfig.featureFlags.storefront_metaobjects
    }) : [], [u, h] = await Promise.all([
      c,
      d
    ]), _ = new Map(
      r.map((f) => [
        f,
        u.find((k) => k.id == f)
      ])
    ), y = new Map([...n, ..._]), m = rt(), b = /* @__PURE__ */ new Map();
    for (const f of t) {
      const k = Number(f.getAttribute("product-id")), S = y.get(k);
      if (!S)
        continue;
      const O = ((C = s.get(k)) == null ? void 0 : C.filter((A) => A)) || h;
      O.sort((A, D) => {
        const Mt = !!A.marketId, Ve = !!D.marketId;
        return Mt === Ve ? 0 : Mt ? -1 : 1;
      });
      let B = mn(O, S);
      p("applicableDealBlocks", B), B = B.filter((A) => A.marketId ? A.marketId === this._globalConfig.marketId : !0), B = B.filter(
        (A) => {
          var D;
          return !((D = A.excludedMarketIds) != null && D.includes(this._globalConfig.marketId));
        }
      ), B = B.filter((A) => A.abTestVariantId ? nn(A, m) : !0), B = B.filter(
        (A) => Kn(this._globalConfig, A).status === "eligible"
      );
      const Y = (v = f.getAttribute("manual-deal-block-id")) == null ? void 0 : v.trim();
      if (Y) {
        const A = B.findIndex(
          (D) => D.id === Y || D.nanoId === Y
        );
        if (w("Manual deal override", {
          deal: B[A],
          manualDealBlockId: Y,
          manualDealBlockIndex: A
        }), A > 0) {
          const [D] = B.splice(
            A,
            1
          );
          B.unshift(D);
        }
      }
      if (!B.length) {
        b.set(f, {
          product: S,
          dealBlock: null
        });
        continue;
      }
      b.set(f, {
        product: S,
        dealBlock: B[0]
      });
    }
    return b;
  }
  _findPosition() {
    const t = this._findGempagesPosition();
    if (t)
      return t;
    const e = this._findThemePosition();
    if (e)
      return e;
    const n = this._findDefaultPosition();
    return n || this._findFormlessPosition();
  }
  // Last resort: a page builder that adds to cart with JS, so none of the
  // form-based anchors above exist. Gated on the interceptor, because it is
  // the only path that carries the deal into the cart from such a click --
  // without it the widget would render with nothing wired to add-to-cart.
  _findFormlessPosition() {
    if (this._globalConfig.featureFlags.intercept_cart_request !== !0)
      return null;
    for (const t of St) {
      const e = T(t);
      if (e)
        return e;
    }
    return null;
  }
  // Temporary
  _findGempagesPosition() {
    const t = I("gp-product-button");
    for (const e of t)
      if (!e.closest("gp-sticky"))
        return e;
    return null;
  }
  _findThemePosition() {
    for (const t of Re) {
      const e = T(t[0]);
      if (e) {
        if (e.closest(
          ".dbtfy-sticky-addtocart, .cart-drawer, cart-drawer, cart-items"
        ))
          continue;
        return setTimeout(() => {
          var r;
          const n = e.closest(
            '[class*="cart"], [class*="Cart"]'
          );
          n && n.tagName.toLowerCase() !== "body" && !n.classList.toString().includes("add-to-cart") && !n.classList.toString().includes("AddToCart") && !n.classList.toString().includes("icartShopifyCartContent") && g(
            "theme_position_in_cart_drawer_v8",
            {
              selector: t[0],
              classes: n.classList.toString(),
              theme: (r = window.Shopify.theme) == null ? void 0 : r.schema_name
            },
            { sampleRate: 0.01 }
          );
        }), e;
      }
    }
    return null;
  }
  _findDefaultPosition() {
    for (const t of vt)
      for (const e of [
        this._globalConfig.customSelectors.addToCartButton,
        ...Pt,
        "button"
      ]) {
        if (!e)
          continue;
        const n = T(
          `${t} ${e}`
        );
        if (n)
          return n.parentElement;
      }
    return null;
  }
}
function qr(i) {
  const t = () => typeof window.FastClick != "undefined" || typeof window.T4SThemeSP != "undefined" && typeof window.T4SThemeSP.FastClick != "undefined" || typeof window.BEEThemeSP != "undefined" && typeof window.BEEThemeSP.FastClick != "undefined", e = setInterval(() => {
    t() && (clearInterval(e), I("*", i).forEach(
      (n) => an(n, "needsclick")
    ));
  }, 500);
}
const Fr = () => I("script.kaching-bundles-deal-block-settings").some(
  (i) => {
    var t;
    return (t = i.textContent) == null ? void 0 : t.trim();
  }
), ye = (i) => {
  var t;
  ((t = window.Shopify.theme) == null ? void 0 : t.theme_store_id) === 801 ? setTimeout(() => new ge(i).initialize(), 100) : new ge(i).initialize();
}, be = async (i, t) => JSON.stringify(
  await we(
    new q(
      i.shopifyDomain,
      t
    ),
    {
      useExternalMetafieldNamespace: !1,
      useMetaobjects: i.featureFlags.storefront_metaobjects
    }
  )
), Nr = async () => {
  const i = await fetch(location.href), e = new DOMParser().parseFromString(
    await i.text(),
    "text/html"
  ).querySelector("script#kaching-bundles-config");
  return e && JSON.parse(e.textContent).storefrontAccessToken;
}, Mr = async (i) => {
  const { storefrontAccessToken: t } = i, e = t && await be(i, t), n = async () => t ? await be(i, t) !== e : !!await Nr();
  let r;
  E(window, "resize", () => {
    clearTimeout(r), r = setTimeout(async () => {
      await n() && location.reload();
    }, 500);
  });
}, $e = () => {
  var t;
  if (Br(), sn()) {
    const e = I(
      "style#kaching-bundles-custom-css"
    );
    for (const n of e)
      n.remove();
    return;
  }
  const i = tt(
    "script#kaching-bundles-config"
  );
  i && (w("Shopify domain:", i.shopifyDomain), on(), pn(), ln(i), cn(i), window.kachingBundlesKeepQuantityInput && (i.keepQuantityInput = !0), ye(i), window.Shopify.designMode && (E(window, "shopify:section:load", () => {
    ye(i);
  }), Mr(i), i.isDeprecatedAppEmbed || Jn({
    customApiHost: i.customApiHost,
    shopifyDomain: i.shopifyDomain,
    themeId: (t = window.Shopify.theme) == null ? void 0 : t.id
  })), hn(), fn(), window.kachingBundlesApi = dn(i), setTimeout(() => {
    un();
  }, 1e3));
};
window.__kachingBundlesInitializeInternal = $e;
const ke = () => {
  window.kachingBundlesDisableAutoInitialize || $e();
};
document.readyState === "loading" ? (p("Waiting for DOMContentLoaded"), document.addEventListener("DOMContentLoaded", ke)) : ke();
const Rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  wr as M,
  Rr as k,
  Pr as r
};
