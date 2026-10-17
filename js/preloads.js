
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com","https://extensions.shopifycdn.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.DsjDEvpF.js","/cdn/shopifycloud/checkout-web/assets/c1/app.CooG55fE.js","/cdn/shopifycloud/checkout-web/assets/c1/2c1ab0fe.Dbn2KvkT.js","/cdn/shopifycloud/checkout-web/assets/c1/6a2fc6d6.ob2Vz3Qz.js","/cdn/shopifycloud/checkout-web/assets/c1/4b4bc88f.z1yoAwwH.js","/cdn/shopifycloud/checkout-web/assets/c1/bfe75f31.CeEm_sIx.js","/cdn/shopifycloud/checkout-web/assets/c1/2bac2c53.CBL7jHzd.js","/cdn/shopifycloud/checkout-web/assets/c1/9dba8418.NidtnoQ4.js","/cdn/shopifycloud/checkout-web/assets/c1/cb38e5c2.BMWpCITo.js","/cdn/shopifycloud/checkout-web/assets/c1/3d539943.CHiZMBrZ.js","/cdn/shopifycloud/checkout-web/assets/c1/2255f8fa.CYWjsjse.js","/cdn/shopifycloud/checkout-web/assets/c1/d25d1b95.DYvnxyL-.js","/cdn/shopifycloud/checkout-web/assets/c1/b8733b27.zcrWwlcv.js","/cdn/shopifycloud/checkout-web/assets/c1/e39bc11c.CPXDRKy_.js","/cdn/shopifycloud/checkout-web/assets/c1/08a3b809.Ce8w6gv6.js","/cdn/shopifycloud/checkout-web/assets/c1/164ad2e3.FTBuhkTQ.js","/cdn/shopifycloud/checkout-web/assets/c1/69fae6d4.DwAzRqQZ.js","/cdn/shopifycloud/checkout-web/assets/c1/f67abd2c.nPTvXZJz.js","/cdn/shopifycloud/checkout-web/assets/c1/e12db40c.DF32J314.js","/cdn/shopifycloud/checkout-web/assets/c1/60a453ce.B80X1bY8.js","/cdn/shopifycloud/checkout-web/assets/c1/fb3b4968.cS5s3391.js","/cdn/shopifycloud/checkout-web/assets/c1/f8706cb6.H5idtf8V.js","/cdn/shopifycloud/checkout-web/assets/c1/dffdfb34.BM70-hlD.js","/cdn/shopifycloud/checkout-web/assets/c1/3ca8ef7e.CoLpsNbY.js","/cdn/shopifycloud/checkout-web/assets/c1/1f5e7811.a2EjfHnG.js","/cdn/shopifycloud/checkout-web/assets/c1/1a6c2867.D8mTtJ_Z.js","/cdn/shopifycloud/checkout-web/assets/c1/2fdb3dd3.Dn592ndi.js","/cdn/shopifycloud/checkout-web/assets/c1/22345fd4.DfRWVvfi.js","/cdn/shopifycloud/checkout-web/assets/c1/0e67bd3b.rVVcKKmW.js","/cdn/shopifycloud/checkout-web/assets/c1/74835653.BLveyRHP.js","/cdn/shopifycloud/checkout-web/assets/c1/a9fa9fda.CPgABguf.js","/cdn/shopifycloud/checkout-web/assets/c1/ca3e798e.BBho0lps.js","/cdn/shopifycloud/checkout-web/assets/c1/47b970b2.DCFIpVFI.js","/cdn/shopifycloud/checkout-web/assets/c1/064f6ac1.DHFjHCTV.js","/cdn/shopifycloud/checkout-web/assets/c1/efa0389a.BBF5Yj3v.js","/cdn/shopifycloud/checkout-web/assets/c1/4b1c22b7.Tf9Z0cR8.js","/cdn/shopifycloud/checkout-web/assets/c1/17425706.Du5FyTeZ.js","/cdn/shopifycloud/checkout-web/assets/c1/cb5cf153.DR2k6GTr.js","/cdn/shopifycloud/checkout-web/assets/c1/e3e348f2.DlRIwDFx.js","/cdn/shopifycloud/checkout-web/assets/c1/71ae3d5c.BgAyZsA9.js","/cdn/shopifycloud/checkout-web/assets/c1/78ab3dd0.UjAWxVn0.js","/cdn/shopifycloud/checkout-web/assets/c1/89e2d30a.BHZyUNbR.js","/cdn/shopifycloud/checkout-web/assets/c1/ed9f2238.3jB1CnRm.js","/cdn/shopifycloud/checkout-web/assets/c1/6fb6f9d8.D6yUmBOq.js","/cdn/shopifycloud/checkout-web/assets/c1/1444e6bd.CLS56A6L.js","/cdn/shopifycloud/checkout-web/assets/c1/0b8657b8.CiDJmOSt.js","/cdn/shopifycloud/checkout-web/assets/c1/55098bf1.C9NOZwx2.js","/cdn/shopifycloud/checkout-web/assets/c1/a422df8c.Cf87EYCO.js","/cdn/shopifycloud/checkout-web/assets/c1/f49d4216.CilLybTV.js","/cdn/shopifycloud/checkout-web/assets/c1/79974aab.BEktvauy.js","/cdn/shopifycloud/checkout-web/assets/c1/7b0c98ea.CmmnLN9P.js","/cdn/shopifycloud/checkout-web/assets/c1/d22d2b80.B6GNsBAl.js","/cdn/shopifycloud/checkout-web/assets/c1/f58f39d8.CX1OVCRt.js","/cdn/shopifycloud/checkout-web/assets/c1/e03065ab.CTM9K0Hk.js","/cdn/shopifycloud/checkout-web/assets/c1/0e9ee714.KXiBhcvk.js","/cdn/shopifycloud/checkout-web/assets/c1/39921a74.bahNnP3U.js","/cdn/shopifycloud/checkout-web/assets/c1/7a8217fd.qHfhLK3T.js","/cdn/shopifycloud/checkout-web/assets/c1/c6b02d73.Ba1sudbg.js","/cdn/shopifycloud/checkout-web/assets/c1/ec391382.Bx3C9xNN.js","/cdn/shopifycloud/checkout-web/assets/c1/24773686.CplnJ3xw.js","/cdn/shopifycloud/checkout-web/assets/c1/2210eadb.DF0gIp_2.js","/cdn/shopifycloud/checkout-web/assets/c1/71b60e0a.DfPLdYsH.js","/cdn/shopifycloud/checkout-web/assets/c1/6bfea526.D62LLGBP.js","/cdn/shopifycloud/checkout-web/assets/c1/ac5a19ff.la4o1mqh.js","/cdn/shopifycloud/checkout-web/assets/c1/598fef4e.CSEeJ9se.js","/cdn/shopifycloud/checkout-web/assets/c1/e77f7fe0.ByPUY0fc.js","/cdn/shopifycloud/checkout-web/assets/c1/cc6ff67d.CxMx1fOJ.js","/cdn/shopifycloud/checkout-web/assets/c1/bf513f9c.B3u9Jber.js","/cdn/shopifycloud/checkout-web/assets/c1/dfca5da5.DtiE-B_a.js","/cdn/shopifycloud/checkout-web/assets/c1/dae24aab.CVNnVl1k.js","/cdn/shopifycloud/checkout-web/assets/c1/ddf59287._uCuCuxL.js","/cdn/shopifycloud/checkout-web/assets/c1/01973ac7.D5XeeIWW.js","/cdn/shopifycloud/checkout-web/assets/c1/58314944.C8o0ZBBk.js","/cdn/shopifycloud/checkout-web/assets/c1/945a08d6.DsBMy-Sv.js","/cdn/shopifycloud/checkout-web/assets/c1/7bc8057b.jS2i-qiP.js","/cdn/shopifycloud/checkout-web/assets/c1/a25deb9a.e6U0ww9n.js","/cdn/shopifycloud/checkout-web/assets/c1/2b89a178.BVP6w6_h.js","/cdn/shopifycloud/checkout-web/assets/c1/b684bff6.bwJyjEIe.js","/cdn/shopifycloud/checkout-web/assets/c1/910cd6e2.BdYIBApg.js","/cdn/shopifycloud/checkout-web/assets/c1/347b440c.Cr4Lo5jt.js","/cdn/shopifycloud/checkout-web/assets/c1/9ce08e25.CVFGyfHb.js","/cdn/shopifycloud/checkout-web/assets/c1/181d38d3.CkWlyM7r.js","/cdn/shopifycloud/checkout-web/assets/c1/792bb671.B3OvVnSg.js","/cdn/shopifycloud/checkout-web/assets/c1/9ca7d819.NFD4561s.js","/cdn/shopifycloud/checkout-web/assets/c1/f51e663e.BOJ2cLC5.js","/cdn/shopifycloud/checkout-web/assets/c1/21cc90a2.DHzOO82q.js","/cdn/shopifycloud/checkout-web/assets/c1/64de7b49.D8TZokHI.js","/cdn/shopifycloud/checkout-web/assets/c1/ca0c3e72.CvmHYoux.js","/cdn/shopifycloud/checkout-web/assets/c1/8e79be58.BLZlQ4SW.js","/cdn/shopifycloud/checkout-web/assets/c1/90e26f5f.BtzmBOQP.js","/cdn/shopifycloud/checkout-web/assets/c1/31cc568e.95lmLO5k.js","/cdn/shopifycloud/checkout-web/assets/c1/65f3d4da.Bb3QiqCm.js","/cdn/shopifycloud/checkout-web/assets/c1/ca5e9c49.C4Dgo0WK.js","/cdn/shopifycloud/checkout-web/assets/c1/f3e117aa.DNLKh0Hn.js","/cdn/shopifycloud/checkout-web/assets/c1/7aefefff.BQWXUkDp.js","/cdn/shopifycloud/checkout-web/assets/c1/b3389d5c.JToQX7EK.js","/cdn/shopifycloud/checkout-web/assets/c1/73a9b0a0.D8197R8-.js","/cdn/shopifycloud/checkout-web/assets/c1/25604ae0.56pfEpxV.js","/cdn/shopifycloud/checkout-web/assets/c1/dada7e07.d_Jgr9HV.js","/cdn/shopifycloud/checkout-web/assets/c1/86720dbb.Ctpif1U0.js","/cdn/shopifycloud/checkout-web/assets/c1/f692f62f.BHFpWwLS.js","/cdn/shopifycloud/checkout-web/assets/c1/9babe369.SH-YgBx8.js","/cdn/shopifycloud/checkout-web/assets/c1/434e3b0a.oup8Ur0H.js","/cdn/shopifycloud/checkout-web/assets/c1/e0989459.CIFtnx6c.js","/cdn/shopifycloud/checkout-web/assets/c1/cdfd59e6.CxVDNOs9.js","/cdn/shopifycloud/checkout-web/assets/c1/fc21c11a.DX71sl9j.js","/cdn/shopifycloud/checkout-web/assets/c1/e129c76e.CdUlGY39.js","/cdn/shopifycloud/checkout-web/assets/c1/d4ea2faa.CFmOkqFN.js","/cdn/shopifycloud/checkout-web/assets/c1/fe885b80.D6XeXzR1.js","/cdn/shopifycloud/checkout-web/assets/c1/f78726c8.COms9s2w.js","/cdn/shopifycloud/checkout-web/assets/c1/e477f96c.DtwGO4P4.js","/cdn/shopifycloud/checkout-web/assets/c1/d7065744.DH5rilol.js","/cdn/shopifycloud/checkout-web/assets/c1/7ee73f43.ChJI3xSJ.js","/cdn/shopifycloud/checkout-web/assets/c1/0c0ad074.BVCUV6D7.js","/cdn/shopifycloud/checkout-web/assets/c1/8fe56fc9._gTwhRQ_.js","/cdn/shopifycloud/checkout-web/assets/c1/87bfafec.CxwEzGHg.js","/cdn/shopifycloud/checkout-web/assets/c1/051149c8.lHD9iIAq.js","/cdn/shopifycloud/checkout-web/assets/c1/d2e6a587.BTa3jGZQ.js","/cdn/shopifycloud/checkout-web/assets/c1/c10167e6.a4UUxC0y.js","/cdn/shopifycloud/checkout-web/assets/c1/b9c0319a.CZrWIGzl.js","/cdn/shopifycloud/checkout-web/assets/c1/17e57de1.C4OivbHV.js","/cdn/shopifycloud/checkout-web/assets/c1/4b77f49a.4HmIEZUf.js","/cdn/shopifycloud/checkout-web/assets/c1/66338e00.Da1xn8CS.js","/cdn/shopifycloud/checkout-web/assets/c1/e77d135d.Dz0RetrO.js","/cdn/shopifycloud/checkout-web/assets/c1/24fcbaf6.B9Of6sC3.js","/cdn/shopifycloud/checkout-web/assets/c1/b13c0af6.D4KDplwL.js","/cdn/shopifycloud/checkout-web/assets/c1/49758c58.B9KpzE-x.js","/cdn/shopifycloud/checkout-web/assets/c1/28ac86c0.Dl9oBX48.js","/cdn/shopifycloud/checkout-web/assets/c1/3e6029dd.CPkH6IvK.js","/cdn/shopifycloud/checkout-web/assets/c1/30074413.B0lR3PuK.js","/cdn/shopifycloud/checkout-web/assets/c1/9f57d2aa.CuEeAtyX.js","/cdn/shopifycloud/checkout-web/assets/c1/8574876b.DdFjDDde.js","/cdn/shopifycloud/checkout-web/assets/c1/33d2e4fc.2Yl3W9KZ.js","/cdn/shopifycloud/checkout-web/assets/c1/27f09e31.CJyRwTMf.js","/cdn/shopifycloud/checkout-web/assets/c1/137622f3.C5c6_eMX.js","/cdn/shopifycloud/checkout-web/assets/c1/54bf0ebb.C_P0-c6s.js","/cdn/shopifycloud/checkout-web/assets/c1/29034f35.7WHWnwob.js","/cdn/shopifycloud/checkout-web/assets/c1/c610ba76.Btl55GXs.js","/cdn/shopifycloud/checkout-web/assets/c1/33682ee7.D0Q8WdWw.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox.CWEHTRbu.worker.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox-2025-07.DQMbyApp.worker.js","https://extensions.shopifycdn.com/shopifycloud/checkout-web/assets/c1/polyfills-entry-modern.Cu6fUfaP.worker.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.CcGlIMpn.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/wallet-prefilled-guest-return.BZwmSkmD.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/hydrate.noyuxvQL.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.C_uC3EPz.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VatNumberValidationField.CAYYnuvZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShopPayLogo.87JMHPUK.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShopPayVerificationTrigger.BnDF3H7t.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BillingAddressForm.BdwN7V1K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PhoneField.uZEuHncj.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Popover.Bi1nHaU-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Choice.CrYuHUmO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EmptyState.BEvzDDvy.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/TransitionHeight.CuRoM9zv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StickyPayButton.D-gNjNDa.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Switch.BS8yVgoP.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayProgressIntercepts.CIy8uDiZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Tipping.BcTJoNaV.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentIcon.gzvCNwz_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentLine.DT05kVlY.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/constants.xO_7ctnq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Middot.D7Ujmshx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EstimatedDeliveryContent.B_THySFF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethods.DU0m5rdF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.vTcdVGq4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BelowTheFoldContent.BKRoWsh4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RememberMeSection.JBO5WNhc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentMethodProgressionHost.C0BOgdmL.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RedirectionNotice.DgiInWJ-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PayButtonSection.CZuxzxFG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/hooks.BDst-6PZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.D-F4uQ9M.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.BlloiNDx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentOptionSelector.s-Kd_X2E.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RuntimeExtension.DWkDBM73.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AnnouncementRuntimeExtensions.DbBB6lBJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/QRCode.BZ_m5G5a.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Pressable.D9SfDfsb.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DateField.CFFsBmUK.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/NumberField.CRpcZnVJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Sheet.CpR5hiDV.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0702/4023/9933/files/biocleanse_100k_happy_customers_exact_background_2_x320.jpg?v=1782331565","https://cdn.shopify.com/s/files/1/0702/4023/9933/files/BIOCLEANSE_3_2000x.png?v=1756929162"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  