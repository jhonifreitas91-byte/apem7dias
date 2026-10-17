(function() {
  try {
    if (typeof document != "undefined") {
      var Wt = document.createElement("style");
      Wt.id = "kaching-bundles-styles", Wt.appendChild(document.createTextNode(`.kaching-bundles .kaching-bundles__multiple-gifts-selector{position:relative}.kaching-bundles .kaching-bundles__multiple-gifts-selector__clickable-overlay{position:absolute;inset:0;cursor:pointer}.kaching-bundles .kaching-bundles__multiple-gifts-selector__photos{position:relative;display:flex;align-items:center;flex-shrink:0;padding-block:2px}.kaching-bundles .kaching-bundles__multiple-gifts-selector__photo{box-sizing:border-box;width:40px;height:40px;-o-object-fit:cover;object-fit:cover;background-color:#fff;border-radius:8px;border:1px solid var(--kaching-free-gift-background-color, #fff)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__multiple-gifts-selector__photo{border-color:var(--kaching-free-gift-selected-background-color, #000)}.kaching-bundles .kaching-bundles__multiple-gifts-selector__photo:not(:first-child){margin-inline-start:-16px}.kaching-bundles .kaching-bundles__multiple-gifts-selector__photo-count{box-sizing:border-box;position:absolute;top:0;inset-inline-end:0;transform:translate(18%,-3%);display:flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;border:1px solid var(--kaching-free-gift-text-color, #000);background-color:var(--kaching-free-gift-background-color, rgba(0, 0, 0, .3));color:var(--kaching-free-gift-text-color, #000);font-size:calc(var(--kaching-free-gift-font-size, 13px) - 2px);font-weight:var(--kaching-free-gift-font-weight, bold);line-height:1}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__multiple-gifts-selector__photo-count{border-color:var(--kaching-free-gift-selected-text-color, #fff);background-color:var(--kaching-free-gift-selected-background-color, #000);color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__bundle-products{display:flex;justify-content:space-evenly;margin-top:12px;margin-bottom:4px;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-radius:calc(var(--bar-border-radius, 0) * 3 / 4)}.kaching-bundles .kaching-bundles__bundle-products .kaching-bundles__bar-variant-selects{justify-content:center}.kaching-bundles .kaching-bundles__bundle-products__divider{display:flex;flex-direction:column;align-items:center;width:0;overflow:visible}.kaching-bundles .kaching-bundles__bundle-products__divider *{max-width:initial}.kaching-bundles .kaching-bundles__bundle-products__divider-line{display:flex;flex:1;width:1px;background-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bundle-products__divider-icon{display:flex}.kaching-bundles .kaching-bundles__bundle-products__divider-icon svg{color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bundle-products__product{display:flex;flex:1;flex-direction:column;align-items:center;min-width:0;gap:5px;padding:12px}.kaching-bundles .kaching-bundles__bundle-products__product.kaching-bundles__bundle-products__product--placeholder{justify-content:center;text-align:center;font-size:13px;font-weight:700;color:#555}.kaching-bundles .kaching-bundles__bundle-products__wrapper{display:flex;align-items:center;gap:10px;min-width:0}.kaching-bundles .kaching-bundles__bundle-products__content{display:flex;flex-direction:column;align-items:flex-start;min-width:0}.kaching-bundles .kaching-bundles__bundle-products__link{display:flex;flex-shrink:0;text-decoration:none}.kaching-bundles .kaching-bundles__bundle-products__image{flex-shrink:0;height:50px;width:auto;max-width:100%;border-radius:var(--kaching-bundle-products-image-border-radius, 0)}.kaching-bundles .kaching-bundles__bundle-products__image-placeholder{flex-shrink:0;height:50px;width:50px}.kaching-bundles .kaching-bundles__bundle-products__title{overflow-wrap:break-word;text-align:center;font-size:13px;color:var(--bar-title-color);font-weight:var(--bar-title-font-weight, 700);font-style:var(--bar-title-font-style)}.kaching-bundles .kaching-bundles__bundle-products__pricing{display:flex;flex-shrink:0;flex-wrap:wrap;justify-content:center;align-items:baseline;gap:5px}.kaching-bundles .kaching-bundles__bundle-products__price{font-size:13px;font-weight:700;color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__bundle-products__full-price{text-decoration:line-through;font-size:12px;color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__bundle-products__unit-price{width:100%;text-align:center;font-size:12px;color:var(--bar-full-price-color, #555);text-transform:uppercase}.kaching-bundles .kaching-bundles__bundle-products--hidden{display:none}.kaching-bundles .kaching-bundles__bundle-products--vertical{flex-direction:column}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__divider{flex-direction:row;width:100%;height:0}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__divider-line{width:auto;height:1px}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__product{flex-direction:row;justify-content:space-between;padding:14px 12px}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__pricing{flex-direction:column;align-items:flex-end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__pricing--with-unit-price{flex-flow:row wrap;justify-content:flex-end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__unit-price{text-align:end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__title{text-align:start}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__image{width:50px;height:auto;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bar-variant-selects{justify-content:flex-start}.kaching-bundles .kaching-bundles__mix-and-match-products{display:flex;flex-direction:column;margin-top:12px;margin-bottom:4px;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-radius:calc(var(--bar-border-radius, 0) * 3 / 4);overflow:hidden}.kaching-bundles .kaching-bundles__mix-and-match-products--hidden{display:none}.kaching-bundles .kaching-bundles__mix-and-match-products__divider{display:flex;flex-direction:row;align-items:center;gap:4px;width:100%;height:0;overflow:visible}.kaching-bundles .kaching-bundles__mix-and-match-products__divider-line{display:flex;flex:1;width:auto;height:1px;background-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__mix-and-match-products__divider-icon{display:flex}.kaching-bundles .kaching-bundles__mix-and-match-products__divider-icon svg{color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__mix-and-match-product{display:grid;grid-template-columns:auto minmax(0,1fr) auto auto;gap:12px;align-items:center;padding:12px}.kaching-bundles .kaching-bundles__mix-and-match-product__content{display:flex;flex-direction:column;gap:6px;min-width:0}.kaching-bundles .kaching-bundles__mix-and-match-product__pricing{display:flex;justify-content:flex-end}.kaching-bundles .kaching-bundles__mix-and-match-product__pricing .kaching-bundles__bundle-products__pricing{flex-direction:column;align-items:flex-end;gap:0}.kaching-bundles .kaching-bundles__mix-and-match-product__image-link{display:flex;flex-shrink:0;text-decoration:none}.kaching-bundles .kaching-bundles__mix-and-match-product__image{flex-shrink:0;height:50px;width:auto;max-width:100%;border-radius:var(--kaching-bundle-products-image-border-radius, 0)}.kaching-bundles .kaching-bundles__mix-and-match-product__image-placeholder{height:50px;width:50px}.kaching-bundles .kaching-bundles__mix-and-match-product__title-link{align-self:flex-start;text-decoration:none}.kaching-bundles .kaching-bundles__mix-and-match-product__title{overflow-wrap:break-word;text-align:start;font-size:13px;color:var(--bar-title-color);font-weight:var(--bar-title-font-weight, 700);font-style:var(--bar-title-font-style)}.kaching-bundles .kaching-bundles__mix-and-match-product__swap-button{display:inline-flex;align-items:center;justify-content:center;padding:8px 12px;border-radius:var(--bar-border-radius, 8px);background-color:var(--collection-product-button-color, #2b2b2b);color:var(--collection-product-button-text-color, #ffffff);font-size:13px;line-height:1.2;text-align:center;cursor:pointer;white-space:nowrap}.kaching-bundles .kaching-bundles__mix-and-match-products__placeholder{display:flex;align-items:center;justify-content:center;padding:14px 12px;color:#0006;font-style:italic}.kaching-bundles .kaching-bundles__checkbox-upsells__upsell .kaching-bundles__bar-main{gap:10px}.kaching-bundles .kaching-bundles__checkbox-upsells__upsell .kaching-bundles__selling-plan-select{margin-top:5px}.kaching-bundles .kaching-bundles__checkbox-upsells__checkbox{all:unset;display:flex;flex-shrink:0;width:20px;height:20px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__checkbox-upsells__checkbox.kaching-bundles__checkbox-upsells__checkbox--selected{border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__checkbox-upsells__image{width:initial;max-width:50px;max-height:50px;border-radius:calc(var(--bar-border-radius, 0) / 2)}.kaching-bundles .kaching-bundles__choose-multiple-gifts-modal{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;justify-content:center;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-choose-multiple-gifts-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__choose-multiple-gifts-modal__content{position:relative;z-index:10000;min-width:min(470px,95%);max-width:700px;max-height:calc(100dvh - 20px);width:100%;display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__choose-multiple-gifts{display:flex;flex-direction:column;border-radius:10px;background-color:#fff;max-height:100%;overflow:hidden}.kaching-bundles .kaching-bundles__choose-multiple-gifts__header{display:flex;align-items:center;justify-content:space-between;padding:16px 16px 0;margin-block:2px 18px;color:var(--kaching-choose-multiple-gifts-text-color, #000);flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__heading{margin:0;font-weight:650;font-size:16px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-multiple-gifts__products{display:flex;flex-direction:column;gap:16px;padding:0 16px;flex:1;overflow-y:auto;min-height:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{display:flex;align-items:center;justify-content:space-between;gap:20px}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{gap:12px}}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{flex-direction:column;align-items:stretch;gap:12px}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-container{display:flex;align-items:center;gap:12px;min-width:0;flex:1}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-container{gap:8px}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-image-link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-image{display:flex;border-radius:8px;border:1px solid #e5e5e3;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-choose-multiple-gifts-photo-size, 100px);max-height:calc(var(--kaching-choose-multiple-gifts-photo-size, 100px) * 2)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-content{display:flex;flex-direction:column;gap:4px;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-link{text-decoration:none}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-title{overflow-wrap:break-word;font-weight:650;font-size:var(--kaching-choose-multiple-gifts-text-size, 14px);color:var(--kaching-choose-multiple-gifts-text-color, #000)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selectors{display:flex;flex-direction:column;gap:8px;margin-top:8px;min-width:0;max-width:100%}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-row{display:flex;align-items:flex-start;gap:8px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-counter{display:flex;align-items:center;justify-content:center;flex-shrink:0;min-width:24px;height:24px;font-size:12px;color:#000}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-content{flex:1;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-with-counter{display:flex;align-items:center;gap:8px;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-wrapper{flex:1;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__subtitle{font-size:14px;font-weight:400;color:var(--kaching-choose-multiple-gifts-text-color, #000)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-price-container{display:flex;gap:10px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-price{font-size:14px;font-weight:650;color:var(--kaching-choose-multiple-gifts-price-color, #f04438)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-compare-at-price{font-size:14px;font-weight:650;text-decoration:line-through;color:var(--kaching-choose-multiple-gifts-compare-at-price-color, #667085)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;display:flex;justify-content:center;align-items:center;border:none;font-weight:600;padding:10px 12px;line-height:1.4;border-radius:8px;cursor:pointer;font-size:var(--kaching-choose-multiple-gifts-button-size, 16px);background-color:var(--kaching-choose-multiple-gifts-button-color, #7f56d9);color:var(--kaching-choose-multiple-gifts-button-text-color, #fff)}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button{flex:1}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button--disabled{background-color:#eaecf0;color:#98a2b3;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button--selected{display:flex;align-items:center;gap:8px;background-color:#fff;color:#414651;border:1px solid #d5d7da}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:24px;margin-top:16px;padding:16px;border-top:1px solid #e5e5e3;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-text{font-size:14px;font-weight:400;color:#535862;flex:1;min-width:0;overflow-wrap:break-word}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-buttons{display:flex;gap:8px;flex:1;min-width:0;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;height:40px;min-width:80px;font-size:14px;font-weight:600;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex:1;box-shadow:0 1px 2px #0a0d120d}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--cancel{background-color:#fff;border:1px solid #d5d7da;color:#414651}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--confirm{background-color:#000;color:#fff}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--confirm:disabled{background-color:#eaecf0;border:1px solid #e9eaeb;color:#98a2b3;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{display:flex;align-items:center;gap:12px;flex-shrink:0}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{gap:8px}}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{flex-direction:row-reverse;justify-content:space-between;flex-shrink:1}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity{display:flex;align-items:center;justify-content:space-between;width:72px;height:42px;border:1px solid #d6d6d6;border-radius:8px;overflow:hidden}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button{all:unset;display:flex;align-items:center;justify-content:center;width:28px;height:100%;cursor:pointer;color:#424242}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button[aria-disabled=true]{opacity:.4;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button img{filter:brightness(0) saturate(100%) invert(24%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(96%) contrast(89%)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-value{font-size:14px;font-weight:600;color:#414651}body:has(.kaching-bundles__choose-multiple-gifts-modal){overflow:hidden}.kaching-bundles .kaching-bundles__mix-and-match-choose-product-modal{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;overflow-y:auto;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-mix-and-match-choose-product-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__mix-and-match-choose-product-modal__content{position:relative;z-index:10000;margin:auto;min-width:min(470px,95%);max-width:700px;width:100%}.kaching-bundles .kaching-bundles__mix-and-match-choose-product{display:flex;flex-direction:column;padding:16px;border-radius:10px;background-color:#fff}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__header{display:flex;align-items:center;justify-content:space-between;margin-block:2px 18px;color:var(--kaching-mix-and-match-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__heading{margin:0;font-weight:650;font-size:16px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__products{display:flex;flex-direction:column;gap:16px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__empty-state{display:flex;flex-direction:column;align-items:center;text-align:center;color:#4b5565}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product{display:flex;align-items:center;justify-content:space-between;gap:20px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-container{display:flex;align-items:center;gap:12px;min-width:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-image-link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-image{display:flex;border-radius:8px;border:1px solid #e5e5e3;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-mix-and-match-choose-product-photo-size, 100px);max-height:calc(var(--kaching-mix-and-match-choose-product-photo-size, 100px) * 2)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-content{display:flex;flex-direction:column;gap:4px;min-width:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-link{text-decoration:none}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-title{overflow-wrap:break-word;font-weight:650;font-size:var(--kaching-mix-and-match-choose-product-text-size, 14px);color:var(--kaching-mix-and-match-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__subtitle{font-size:14px;font-weight:400;color:var(--kaching-mix-and-match-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-price-container{display:flex;gap:10px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-price{font-size:14px;font-weight:650;color:var(--kaching-mix-and-match-choose-product-price-color, #f04438)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-compare-at-price{font-size:14px;font-weight:650;text-decoration:line-through;color:var(--kaching-mix-and-match-choose-product-compare-at-price-color, #667085)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-option-names.kaching-bundles__bar-variant-names,.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-variant-name.kaching-bundles__single-variant-name{color:inherit;margin-block:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;border:none;font-weight:600;padding:12px;line-height:1.2;border-radius:8px;cursor:pointer;font-size:var(--kaching-mix-and-match-choose-product-button-size, 16px);background-color:var(--kaching-mix-and-match-choose-product-button-color, #7f56d9);color:var(--kaching-mix-and-match-choose-product-button-text-color, #fff)}body:has(.kaching-bundles__mix-and-match-choose-product-modal){overflow:hidden}.kaching-bundles .kaching-bundles__bar-collection-products{display:flex;flex-direction:column;gap:5px;margin-top:5px}.kaching-bundles .kaching-bundles__collection-product{display:flex;gap:16px;align-items:center;justify-content:space-between}.kaching-bundles .kaching-bundles__collection-product .kaching-bundles__bar-variant-names{display:none;margin-block:0}.kaching-bundles .kaching-bundles__collection-product__image--default{background-color:#fff;border:1px solid #e9e9e9;color:#000}.kaching-bundles .kaching-bundles__collection-product--require-selection{padding:8px;border-radius:12px;background-color:var(--kaching-collection-breaks-require-selection-background-color)}.kaching-bundles .kaching-bundles__collection-product--require-selection .kaching-bundles__collection-product__image--default{border-color:var(--kaching-collection-breaks-require-selection-text-color);color:var(--kaching-collection-breaks-require-selection-text-color)}.kaching-bundles .kaching-bundles__collection-breaks-alert{display:flex;align-items:center;gap:8px;margin-top:10px;padding:8px 12px;border-radius:12px;font-size:12px;background-color:var(--kaching-collection-breaks-require-selection-background-color, rgb(254, 228, 226));color:var(--kaching-collection-breaks-require-selection-text-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__collection-breaks-alert__icon{flex-shrink:0;width:16px;height:16px}.kaching-bundles .kaching-bundles__collection-product__main{display:flex;gap:16px;align-items:center;min-width:0}.kaching-bundles .kaching-bundles__collection-product__content{display:flex;flex-direction:column;gap:3px;min-width:0}.kaching-bundles .kaching-bundles__collection-product__link{display:flex;flex-shrink:0;text-decoration:none}.kaching-bundles .kaching-bundles__collection-product__image{flex-shrink:0;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-collection-breaks-product-photo-size, 40px);border-radius:var(--kaching-collection-breaks-image-border-radius, 0)}.kaching-bundles .kaching-bundles__collection-product__title{font-size:16px;color:var(--kaching-collection-breaks-product-title-color, #000)}.kaching-bundles .kaching-bundles__collection-product__choose-product-image{cursor:pointer;line-height:0}.kaching-bundles .kaching-bundles__collection-product__choose-product-button{cursor:pointer;color:#fff;font-size:12px;line-height:1.4;padding:6px 14px;border-radius:8px;background-color:var(--kaching-collection-breaks-button-color, #333)}.kaching-bundles .kaching-bundles__collection-product__remove-button{display:flex;align-items:center;justify-content:center;height:24px;width:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product-modal{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;overflow-y:auto;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-choose-product-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__choose-product-modal__content{position:relative;z-index:10000;margin:auto;min-width:min(470px,95%);max-width:700px;width:100%}.kaching-bundles .kaching-bundles__choose-product{display:flex;flex-direction:column;padding:16px;border-radius:10px;background-color:#fff}.kaching-bundles .kaching-bundles__choose-product__header{display:flex;align-items:center;justify-content:space-between;margin-block:2px 18px;color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__heading{margin:0;font-weight:650;font-size:16px}.kaching-bundles .kaching-bundles__choose-product__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__products{display:flex;flex-direction:column;gap:16px}.kaching-bundles .kaching-bundles__choose-product__controls{display:flex;align-items:center;gap:10px;margin-bottom:14px}.kaching-bundles .kaching-bundles__choose-product__search-field{position:relative;flex:1 1 auto;min-width:0}.kaching-bundles .kaching-bundles__choose-product__search-icon{position:absolute;top:50%;left:12px;transform:translateY(-50%);width:16px;height:16px;pointer-events:none}.kaching-bundles .kaching-bundles__choose-product__search-input{box-sizing:border-box;width:100%;padding:10px 12px 10px 36px;border:1px solid #d5d7da;border-radius:8px;font-size:14px;color:var(--kaching-choose-product-text-color, #000);background-color:#fff}.kaching-bundles .kaching-bundles__choose-product__sort{position:relative;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-product__sort-button{display:inline-flex;align-items:center;gap:8px;padding:10px 12px;border:1px solid #d5d7da;border-radius:8px;background:#fff;color:var(--kaching-choose-product-text-color, #000);font-size:14px;line-height:1;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__sort-icon{width:16px;height:16px;display:block}.kaching-bundles .kaching-bundles__choose-product__sort-menu{position:absolute;top:calc(100% + 6px);right:0;z-index:2;min-width:210px;display:flex;flex-direction:column;border:1px solid #d5d7da;border-radius:10px;background:#fff;box-shadow:0 8px 24px #10182824;overflow:hidden}.kaching-bundles .kaching-bundles__choose-product__sort-option{display:flex;align-items:center;justify-content:space-between;gap:12px;border:none;background:#fff;text-align:start;padding:10px 12px;font-size:14px;color:var(--kaching-choose-product-text-color, #000);cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__sort-option-check{flex-shrink:0;width:16px;height:16px;display:block}.kaching-bundles .kaching-bundles__choose-product__sort-option:hover{background:#f8fafc}.kaching-bundles .kaching-bundles__choose-product__empty-state{display:flex;flex-direction:column;align-items:center;text-align:center;color:#4b5565}.kaching-bundles .kaching-bundles__choose-product__empty-state-icon-wrapper{display:flex;align-items:center;justify-content:center;width:48px;height:48px;margin-bottom:16px}.kaching-bundles .kaching-bundles__choose-product__empty-state-icon{width:48px;height:48px}.kaching-bundles .kaching-bundles__choose-product__empty-state-title{font-size:18px;font-weight:500;color:#181d27}.kaching-bundles .kaching-bundles__choose-product__empty-state-description{margin-top:8px;font-size:14px;color:#535862}.kaching-bundles .kaching-bundles__choose-product__empty-state-clear-button{margin-top:16px;padding:10px 16px;border:1px solid #d5d7da;border-radius:8px;background:#fff;color:#414651;font-size:14px;font-weight:600}.kaching-bundles .kaching-bundles__choose-product__product{display:flex;align-items:center;justify-content:space-between;gap:20px}.kaching-bundles .kaching-bundles__choose-product__product-container{display:flex;align-items:center;gap:12px;min-width:0}.kaching-bundles .kaching-bundles__choose-product__product-image-link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-product__product-image{display:flex;border-radius:8px;border:1px solid #e5e5e3;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-choose-product-photo-size, 100px);max-height:calc(var(--kaching-choose-product-photo-size, 100px) * 2)}.kaching-bundles .kaching-bundles__choose-product__product-content{display:flex;flex-direction:column;gap:4px;min-width:0}.kaching-bundles .kaching-bundles__choose-product__product-link{text-decoration:none}.kaching-bundles .kaching-bundles__choose-product__product-title{overflow-wrap:break-word;font-weight:650;font-size:var(--kaching-choose-product-text-size, 14px);color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__subtitle{font-size:14px;font-weight:400;color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__product-price-container{display:flex;gap:10px}.kaching-bundles .kaching-bundles__choose-product__product-price{font-size:14px;font-weight:650;color:var(--kaching-choose-product-price-color, #f04438)}.kaching-bundles .kaching-bundles__choose-product__product-compare-at-price{font-size:14px;font-weight:650;text-decoration:line-through;color:var(--kaching-choose-product-compare-at-price-color, #667085)}.kaching-bundles .kaching-bundles__choose-product__product-option-names.kaching-bundles__bar-variant-names,.kaching-bundles .kaching-bundles__choose-product__product-variant-name.kaching-bundles__single-variant-name{color:inherit;margin-block:0}.kaching-bundles .kaching-bundles__choose-product__product-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;border:none;font-weight:600;padding:12px;line-height:1.2;border-radius:8px;cursor:pointer;font-size:var(--kaching-choose-product-button-size, 16px);background-color:var(--kaching-choose-product-button-color, #7f56d9);color:var(--kaching-choose-product-button-text-color, #fff)}body:has(.kaching-bundles__choose-product-modal){overflow:hidden}.kaching-bundles .kaching-bundles__free-gift{display:flex;align-items:center;justify-content:space-between;margin-inline:1px;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);gap:5px 10px;background-color:var(--kaching-free-gift-background-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__free-gift:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__free-gift.kaching-bundles__free-gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__free-gift__link{pointer-events:none}.kaching-bundles .kaching-bundles__free-gift__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__free-gift__main:has(.kaching-bundles__swatch-buttons){overflow-x:auto}.kaching-bundles .kaching-bundles__free-gift__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__free-gift__content--clickable{cursor:pointer}.kaching-bundles .kaching-bundles__free-gift__add-button{all:unset;display:flex;cursor:pointer;line-height:0;padding:4px;margin:-4px -4px -4px -6px;color:var(--kaching-free-gift-text-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__add-button{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__text{color:var(--kaching-free-gift-text-color, #000);font-size:var(--kaching-free-gift-font-size, 13px);font-weight:var(--kaching-free-gift-font-weight, bold);font-style:var(--kaching-free-gift-font-style, normal)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__text{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__image{display:flex;flex-shrink:0;width:auto;height:var(--kaching-free-gift-image-height, 30px);border-radius:var(--kaching-free-gift-image-border-radius, 0)}.kaching-bundles .kaching-bundles__free-gift__full-price{flex-shrink:0;text-decoration:line-through;font-size:calc(var(--kaching-free-gift-font-size, 13px) - 1px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--kaching-free-gift-text-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__full-price{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__divider{height:1px;display:flex}.kaching-bundles .kaching-bundles__free-gift-summary{gap:8px;justify-content:flex-start}.kaching-bundles .kaching-bundles__free-gift-summary__images{display:flex;flex-shrink:0;align-items:center}.kaching-bundles .kaching-bundles__free-gift-summary__image{display:flex;flex-shrink:0;width:auto;height:var(--kaching-free-gift-image-height, 30px);border-radius:var(--kaching-free-gift-image-border-radius, 0);margin-inline-start:-8px;border:1px solid var(--kaching-free-gift-background-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__free-gift-summary__image:first-child{margin-inline-start:0}.kaching-bundles .kaching-bundles__free-gift-summary__image--no-border{border-color:transparent}.kaching-bundles .kaching-bundles__upsell{display:flex;align-items:center;justify-content:space-between;position:relative;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);margin-inline:1px;gap:5px 10px;background-color:var(--kaching-upsell-background-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__upsell.kaching-bundles__upsell--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__upsell--badge-border-all{margin:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell--badge-border-top{margin-top:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell--badge-border-bottom{margin-bottom:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell--badge-border-left{min-height:var(--badge-border-min-length, auto);margin-left:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell--badge-border-right{min-height:var(--badge-border-min-length, auto);margin-right:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--all{inset:calc(-1 * var(--badge-border-thickness, 22px))}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--top{inset:calc(-1 * var(--badge-border-thickness, 22px)) 0 auto;height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--bottom{inset:auto 0 calc(-1 * var(--badge-border-thickness, 22px));height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--left{inset:0 auto 0 calc(-1 * var(--badge-border-thickness, 22px));width:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--right{inset:0 calc(-1 * var(--badge-border-thickness, 22px)) 0 auto;width:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__upsell__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__upsell__link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__upsell__image{width:auto;height:var(--kaching-upsell-image-height, 30px);border-radius:var(--kaching-upsell-image-border-radius, 0)}.kaching-bundles .kaching-bundles__upsell__checkbox{all:unset;display:flex;flex-shrink:0;width:16px;height:16px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;margin-inline-end:4px;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell__checkbox.kaching-bundles__upsell__checkbox--selected{border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell__text{display:flex;min-height:30px;align-items:center;cursor:pointer;overflow-wrap:break-word;color:var(--kaching-upsell-text-color, #000);font-size:var(--kaching-upsell-font-size, 13px);font-weight:var(--kaching-upsell-font-weight, bold);font-style:var(--kaching-upsell-font-style, normal)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell__text{color:var(--kaching-upsell-selected-text-color, #000)}.kaching-bundles .kaching-bundles__upsell__pricing{align-items:flex-end;display:flex;flex-direction:column;flex-shrink:0}.kaching-bundles .kaching-bundles__upsell__pricing-row{display:flex;align-items:baseline;gap:6px}.kaching-bundles .kaching-bundles__upsell__price{font-size:var(--kaching-upsell-font-size, 13px);font-weight:var(--bar-title-font-weight);font-style:var(--bar-title-font-style);color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__upsell__pricing-row--secondary .kaching-bundles__upsell__price{font-size:calc(var(--kaching-upsell-font-size, 13px) - 1px)}.kaching-bundles .kaching-bundles__upsell__full-price,.kaching-bundles .kaching-bundles__upsell__unit-price{font-size:calc(var(--kaching-upsell-font-size, 13px) - 1px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__upsell__full-price{text-decoration:line-through}.kaching-bundles .kaching-bundles__upsell__unit-price{text-transform:uppercase}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__free-gift{flex-direction:column;padding-inline-end:8px}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__upsell{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__upsell__pricing{flex-direction:row;gap:5px;align-items:center}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--kaching-free-gift-selected-background-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-all .kaching-bundles__free-gift:last-child,.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__free-gift:last-child{margin-inline:0;margin-block-end:0;border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__free-gift:last-child{border-end-start-radius:0;border-end-end-radius:0}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--kaching-upsell-selected-background-color, rgba(0, 0, 0, .2))}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-all,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-left{margin-left:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-all,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-right{margin-right:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-all:last-child,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-bottom:last-child{margin-block-end:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gifts{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift{display:flex;align-items:center;justify-content:space-between;margin-inline:1px;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);gap:5px 10px;background-color:var(--kaching-deal-bar-progressive-gift-background-color, var(--bar-border-color, #fff))}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__link{pointer-events:none}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__main:has(.kaching-bundles__swatch-buttons){overflow-x:auto}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__image{display:flex;flex-shrink:0;width:auto;height:var(--kaching-deal-bar-progressive-gift-image-size, 40px);border-radius:var(--kaching-deal-bar-progressive-gift-corner-radius, 0)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__image--locked-product{opacity:.4}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-text-color, #000);font-size:var(--kaching-deal-bar-progressive-gift-text-size, 14px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-selected-text-color, #fff);font-weight:500}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__labels{display:flex;align-items:center;gap:5px}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__label{background-color:var(--kaching-deal-bar-progressive-gift-label-background-color);color:var(--kaching-deal-bar-progressive-gift-label-text-color);font-size:var(--kaching-deal-bar-progressive-gift-label-text-size, 12px);padding:2px 8px;border-radius:16px;white-space:nowrap;font-weight:500}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__label-crossed-out{text-decoration:line-through}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__lock-icon{display:flex;align-items:center;justify-content:center;color:var(--kaching-deal-bar-progressive-gift-locked-icon-color, #667085)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__lock-icon svg{width:auto;height:100%}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--locked .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-locked-text-color, #555);font-size:var(--kaching-deal-bar-progressive-gift-locked-text-size, 14px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--locked .kaching-bundles__deal-bar-progressive-gift__label{background-color:var(--kaching-deal-bar-progressive-gift-locked-label-background-color);color:var(--kaching-deal-bar-progressive-gift-locked-label-text-color);font-size:var(--kaching-deal-bar-progressive-gift-locked-label-text-size, 12px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--kaching-deal-bar-progressive-gift-selected-background-color, var(--bar-selected-border-color))}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__product-personalisation{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;gap:10px;background-color:#fafafa;border-radius:calc(var(--bar-border-radius, 10px) - 4px);border:1px dashed #d6d6d6;margin-top:12px;cursor:pointer}.kaching-bundles .kaching-bundles__product-personalisation--filled{border-style:solid}.kaching-bundles .kaching-bundles__product-personalisation--required-error{border-style:solid;border-color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__product-personalisation__main{display:flex;align-items:center;gap:10px;min-width:0;flex:1}.kaching-bundles .kaching-bundles__product-personalisation__image-wrapper{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--kaching-product-personalisation-image-height, 40px);height:var(--kaching-product-personalisation-image-height, 40px);background-color:#fff;border-radius:calc(var(--bar-border-radius, 10px) - 6px);border:1px solid #d6d6d6}.kaching-bundles .kaching-bundles__product-personalisation__image{display:flex;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.kaching-bundles .kaching-bundles__product-personalisation__image--default{width:70%;height:70%;-o-object-fit:contain;object-fit:contain;opacity:.7;color:#000}.kaching-bundles .kaching-bundles__product-personalisation__content{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1}.kaching-bundles .kaching-bundles__product-personalisation__title{color:#000;font-size:14px;font-weight:600;font-style:normal}.kaching-bundles .kaching-bundles__product-personalisation__subtitle{color:#555;font-size:13px;font-weight:400;font-style:normal}.kaching-bundles .kaching-bundles__product-personalisation__pricing{display:flex;flex-direction:column;align-items:flex-end;flex-shrink:0;gap:2px}.kaching-bundles .kaching-bundles__product-personalisation__price{font-size:14px;font-weight:500;font-style:normal;color:#000}.kaching-bundles .kaching-bundles__product-personalisation__compare-at-price{font-size:12px;font-weight:400;font-style:normal;color:#888;line-height:1.2;text-decoration:line-through}.kaching-bundles .kaching-bundles__product-personalisation__price .kaching-bundles__product-personalisation__unit-label{font-size:calc(var(--kaching-bundles-unit-label-font-size, 14px) - 4px);font-weight:var(--kaching-bundles-unit-label-font-weight, normal);font-style:var(--kaching-bundles-unit-label-font-style, normal)}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation{flex-direction:column;align-items:stretch;text-align:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation__main{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation__pricing{flex-direction:row;justify-content:center;gap:8px;align-items:baseline}.kaching-bundles .kaching-bundles__personalisation-modal-overlay{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;overflow-y:auto;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-product-personalisation-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__personalisation-modal-overlay--inline{position:relative;z-index:auto;inset:auto;padding:20px;border-radius:var(--kaching-product-personalisation-radius, 16px)}.kaching-bundles .kaching-bundles__personalisation-modal-overlay__content{position:relative;z-index:10000;margin:auto;min-width:min(470px,95%);max-width:700px;width:100%}.kaching-bundles .kaching-bundles__personalisation-modal{display:flex;flex-direction:column;padding:var(--kaching-product-personalisation-gap-0, 20px);border-radius:var(--kaching-product-personalisation-radius, 16px);background-color:#fff}.kaching-bundles .kaching-bundles__personalisation-modal__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--kaching-product-personalisation-gap-0, 20px);color:var(--kaching-product-personalisation-primary-text-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__heading{margin:0;font-weight:650;font-size:var(--kaching-product-personalisation-font-0, 24px)}.kaching-bundles .kaching-bundles__personalisation-modal__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__personalisation-modal__items{display:flex;flex-direction:column;gap:var(--kaching-product-personalisation-gap-1, 16px);padding:var(--kaching-product-personalisation-gap-1, 16px);border:1px solid #e9e9e9;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px)}.kaching-bundles .kaching-bundles__personalisation-modal__item{display:flex;flex-direction:column;gap:var(--kaching-product-personalisation-gap-2, 12px)}.kaching-bundles .kaching-bundles__personalisation-modal__item-info{display:flex;align-items:center;gap:var(--kaching-product-personalisation-gap-2, 12px)}.kaching-bundles .kaching-bundles__personalisation-modal__item-image-wrapper{flex-shrink:0;width:var(--kaching-product-personalisation-image-size, 48px);height:var(--kaching-product-personalisation-image-size, 48px);border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);border:1px solid #e9e9e9;overflow:hidden}.kaching-bundles .kaching-bundles__personalisation-modal__item-image{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__personalisation-modal__item-details{display:flex;flex-direction:column;gap:2px;min-width:0}.kaching-bundles .kaching-bundles__personalisation-modal__item-title{font-size:var(--kaching-product-personalisation-text-size, 16px);font-weight:600;color:var(--kaching-product-personalisation-primary-text-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__item-variant{font-size:var(--kaching-product-personalisation-font-3, 12px);color:var(--kaching-product-personalisation-secondary-text-color, rgb(115, 115, 115))}.kaching-bundles .kaching-bundles__personalisation-modal__input-wrapper{display:flex;flex-direction:column;gap:4px}.kaching-bundles .kaching-bundles__personalisation-modal__input-container{position:relative;display:flex;align-items:center}.kaching-bundles .kaching-bundles__personalisation-modal__input-clear{all:unset;position:absolute;right:12px;display:flex;align-items:center;justify-content:center;width:16px;height:16px;cursor:pointer}.kaching-bundles .kaching-bundles__personalisation-modal__input{width:100%;padding:10px 12px;border:1px solid #e9e9e9;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);font-size:var(--kaching-product-personalisation-font-2, 16px);outline:none!important;box-shadow:none!important;box-sizing:border-box}.kaching-bundles .kaching-bundles__personalisation-modal__input:focus{border-color:#333;outline:none!important;box-shadow:none!important}.kaching-bundles .kaching-bundles__personalisation-modal__input:focus-visible{outline:2px solid #333!important;outline-offset:-1px}.kaching-bundles .kaching-bundles__personalisation-modal__input::-moz-placeholder{color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input::placeholder{color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input--with-clear{padding-right:40px}.kaching-bundles .kaching-bundles__personalisation-modal__input--error{border-color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__input--error:focus{border-color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__input-counter{font-size:var(--kaching-product-personalisation-font-3, 12px);color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input-counter--error{color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__input-error{font-size:var(--kaching-product-personalisation-font-3, 12px);color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__actions{display:flex;gap:var(--kaching-product-personalisation-gap-1, 16px);margin-top:var(--kaching-product-personalisation-gap-0, 20px)}.kaching-bundles .kaching-bundles__personalisation-modal__button{flex:1;padding:12px 16px;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);font-size:var(--kaching-product-personalisation-font-2, 16px);font-weight:500;cursor:pointer;border:none;box-shadow:0 1px 2px #0a0d120d}.kaching-bundles .kaching-bundles__personalisation-modal__button--cancel{background:#fff;color:#333;border:1px solid #d5d7da}.kaching-bundles .kaching-bundles__personalisation-modal__button--confirm{color:var(--kaching-product-personalisation-button-text-color, rgb(255, 255, 255));border:1px solid var(--kaching-product-personalisation-button-color, rgb(0, 0, 0));background:var(--kaching-product-personalisation-button-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__button--disabled{cursor:not-allowed;border:1px solid #e9eaeb;background:#eaecf0;color:#98a2b3}.kaching-bundles .kaching-bundles__progressive-gifts{display:flex;flex-direction:column;gap:calc(10px * var(--block-spacing, 1) + 4px);margin-top:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__header{display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__progressive-gifts__title{color:var(--kaching-bundles-progressive-gifts-title-color, #000);text-align:var(--kaching-bundles-progressive-gifts-title-alignment, center);font-weight:var(--kaching-bundles-progressive-gifts-title-weight, bold);font-style:var(--kaching-bundles-progressive-gifts-title-style, normal);font-size:var(--kaching-bundles-progressive-gifts-title-size, 20px)}.kaching-bundles .kaching-bundles__progressive-gifts__subtitle{color:var(--kaching-bundles-progressive-gifts-subtitle-color, #000);text-align:var(--kaching-bundles-progressive-gifts-subtitle-alignment, center);font-weight:var(--kaching-bundles-progressive-gifts-subtitle-weight, 450);font-style:var(--kaching-bundles-progressive-gifts-subtitle-style, normal);font-size:var(--kaching-bundles-progressive-gifts-subtitle-size, 16px)}.kaching-bundles .kaching-bundles__progressive-gifts__gifts{display:grid;grid-template-columns:repeat(auto-fit,minmax(0,1fr));justify-content:center;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gift{position:relative;display:flex;flex-direction:column;align-items:center;padding:calc(10px * var(--block-spacing, 1));gap:calc(6px * var(--block-spacing, 1));border-radius:var(--kaching-bundles-progressive-gifts-border-radius);background-color:var(--kaching-bundles-progressive-gifts-background-color);box-shadow:inset 0 0 0 2px var(--kaching-bundles-progressive-gifts-border-color, #000)}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked{background-color:var(--kaching-bundles-progressive-gifts-locked-background-color);box-shadow:inset 0 0 0 1px var(--kaching-bundles-progressive-gifts-locked-border-color, rgba(0, 0, 0, .3));cursor:pointer}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:hover,.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:focus{box-shadow:inset 0 0 0 2px var(--kaching-bundles-progressive-gifts-locked-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:focus{outline:none}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__progressive-gifts__gift__content{display:flex;flex-direction:column;max-width:100%;gap:calc(6px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image-wrapper{display:flex;flex-shrink:0;align-items:center;justify-content:center;height:var(--kaching-bundles-progressive-gifts-image-size, 100px);width:initial;max-width:100%;margin-top:max(0px,(100px - var(--kaching-bundles-progressive-gifts-image-size, 100px)) / 5);color:var(--kaching-bundles-progressive-gifts-locked-icon-color, #667085);border-radius:calc(var(--kaching-bundles-progressive-gifts-border-radius) / 2);background-color:transparent}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image-wrapper svg{width:auto;height:100%}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image{-o-object-fit:contain;object-fit:contain;max-height:100%;max-width:100%;border-radius:calc(var(--kaching-bundles-progressive-gifts-border-radius) / 2);width:initial}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image--locked-product{opacity:.4}.kaching-bundles .kaching-bundles__progressive-gifts__gift__details{display:flex;flex-direction:column;gap:4px;align-items:center;min-width:0}.kaching-bundles .kaching-bundles__progressive-gifts__gift__details__content{display:flex;align-items:center;gap:8px}.kaching-bundles .kaching-bundles__progressive-gifts__gift__title{font-weight:500;text-align:center;color:var(--kaching-bundles-progressive-gifts-text-color, #000);font-size:var(--kaching-bundles-progressive-gifts-text-size, 14px)}.kaching-bundles .kaching-bundles__progressive-gifts__gift__title.kaching-bundles__progressive-gifts__gift__title--locked{color:var(--kaching-bundles-progressive-gifts-locked-text-color, #555);font-size:var(--kaching-bundles-progressive-gifts-locked-text-size, 14px)}.kaching-bundles .kaching-bundles__progressive-gifts__gift:not(.kaching-bundles__progressive-gifts__gift--locked) .kaching-bundles__progressive-gifts__gift__image,.kaching-bundles .kaching-bundles__progressive-gifts__gift:not(.kaching-bundles__progressive-gifts__gift--locked) .kaching-bundles__progressive-gifts__gift__title{animation:kaching-progressive-gift-unlock .6s ease-out}@keyframes kaching-progressive-gift-unlock{0%{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label{display:flex;flex-direction:row;align-items:center;position:absolute;top:-8px;left:50%;transform:translate(-50%);line-height:1;gap:calc(5px * var(--block-spacing, 1));padding:calc(8px * var(--block-spacing, 1));background-color:var(--kaching-bundles-progressive-gifts-label-background-color, #eee);border-radius:var(--kaching-bundles-progressive-gifts-border-radius)}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label__text{font-weight:450;color:var(--kaching-bundles-progressive-gifts-label-text-color, #777);font-size:var(--kaching-bundles-progressive-gifts-label-text-size, 12px);white-space:nowrap}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label__text.kaching-bundles__progressive-gifts__gift__label__text--crossed-out{text-decoration:line-through}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical{display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift{flex-direction:row;justify-content:space-between;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__content{flex-direction:row;align-items:center;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__details{align-items:flex-start}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__image-wrapper{margin-top:0;height:var(--kaching-bundles-progressive-gifts-image-size, 50px);width:var(--kaching-bundles-progressive-gifts-image-size, 50px)}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__title{text-align:start}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__label{position:initial;transform:none}.kaching-bundles .kaching-bundles-savings-summary{display:flex;align-items:center;justify-content:var(--kaching-bundles-savings-summary-alignment, flex-start);gap:8px;padding:12px 16px;margin-top:calc(10px * var(--block-spacing, 1));background-color:var(--kaching-bundles-savings-summary-background-color, #f5fcf7);color:var(--kaching-bundles-savings-summary-text-color, #1b5933);border-style:solid;border-color:var(--kaching-bundles-savings-summary-border-color, #457757);border-width:var(--kaching-bundles-savings-summary-border-width, 1px);border-radius:var(--kaching-bundles-savings-summary-border-radius, 8px);font-size:var(--kaching-bundles-savings-summary-title-font-size, 14px);font-style:var(--kaching-bundles-savings-summary-title-font-style, normal);font-weight:var(--kaching-bundles-savings-summary-title-font-weight, 500)}.kaching-bundles .kaching-bundles-savings-summary__icon{display:flex;align-items:center;width:1.2em;height:1.2em;flex-shrink:0;color:var(--kaching-bundles-savings-summary-icon-color, #1c5632)}.kaching-bundles .kaching-bundles-savings-summary__icon svg{width:100%;height:100%}.kaching-bundles .kaching-bundles-savings-summary__icon img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles-savings-summary__value{color:var(--kaching-bundles-savings-summary-value-color, #000000)}.kaching-bundles .kaching-bundles__scratch-off{position:relative;display:flex;flex-direction:column;gap:calc(10px * var(--block-spacing, 1));margin:calc(5px * var(--block-spacing, 1)) 0}.kaching-bundles .kaching-bundles__scratch-off>.kaching-bundles__bar{margin:0}.kaching-bundles .kaching-bundles__scratch-off--unscratched{-webkit-user-select:none;-moz-user-select:none;user-select:none}.kaching-bundles .kaching-bundles__scratch-off--unscratched .kaching-bundles__bar{pointer-events:none}.kaching-bundles .kaching-bundles__scratch-off--revealing .kaching-bundles__bar-most-popular{animation:kaching-scratch-off-badge-pop .3s cubic-bezier(.34,1.56,.64,1) both}@keyframes kaching-scratch-off-badge-pop{0%{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}.kaching-bundles .kaching-bundles__scratch-off--unscratched:not(.kaching-bundles__scratch-off--revealing) .kaching-bundles__bar-most-popular{visibility:hidden}.kaching-bundles .kaching-bundles__scratch-off--loading{visibility:hidden}.kaching-bundles .kaching-bundles__scratch-off-canvas{position:absolute;inset:0;width:100%;height:100%;border-radius:var(--bar-border-radius, 8px);cursor:pointer;touch-action:none;transition:opacity .3s ease-out;z-index:11}.kaching-bundles .kaching-bundles__scratch-off-canvas--revealing{opacity:0;pointer-events:none}.kaching-bundles .kaching-bundles__scratch-off-hint{position:absolute;inset:0;margin:auto;width:calc(100% - 10px);height:calc(100% - 10px);max-width:317px;max-height:143px;pointer-events:none;opacity:.4;transition:opacity .3s ease-out;z-index:12}.kaching-bundles .kaching-bundles__scratch-off-hint--hidden{opacity:0}.kaching-bundles .kaching-bundles__scratch-off-hint-path{stroke-dasharray:1200;stroke-dashoffset:1200;animation:kaching-scratch-off-hint-draw 2.8s cubic-bezier(.4,0,.2,1) infinite}@keyframes kaching-scratch-off-hint-draw{0%{stroke-dashoffset:1200;opacity:1}60%{stroke-dashoffset:0;opacity:1}80%{stroke-dashoffset:0;opacity:1}to{stroke-dashoffset:0;opacity:0}}.kaching-bundles .kaching-bundles__scratch-off-title{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:24px;color:var(--scratch-off-title-color);font-weight:700;font-size:var(--scratch-off-title-size);line-height:1.25;text-align:center;pointer-events:none;transition:opacity .3s ease-out;z-index:12}.kaching-bundles .kaching-bundles__scratch-off-title--hidden{opacity:0}.kaching-bundles .kaching-bundles-sticky-atc{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:16px;box-shadow:0 0 10px #00000040;background-color:var(--kaching-bundles-sticky-atc-background-color, #fff)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__content{display:flex;align-items:center;gap:16px}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__image{display:var(--kaching-bundles-sticky-atc-image-display, block);width:auto;height:var(--kaching-bundles-sticky-atc-product-photo-size, 40px);border-radius:var(--kaching-bundles-sticky-atc-product-photo-corner-radius, 0)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__title{color:var(--kaching-bundles-sticky-atc-title-color, #000);font-size:var(--kaching-bundles-sticky-atc-title-font-size, 16px);font-style:var(--kaching-bundles-sticky-atc-title-font-style, normal);font-weight:var(--kaching-bundles-sticky-atc-title-font-weight, 400)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__button{all:unset;white-space:nowrap;cursor:pointer;background-color:var(--kaching-bundles-sticky-atc-button-color, #303030);color:var(--kaching-bundles-sticky-atc-button-text-color, #fff);font-size:var(--kaching-bundles-sticky-atc-button-font-size, 16px);font-style:var(--kaching-bundles-sticky-atc-button-font-style, normal);font-weight:var(--kaching-bundles-sticky-atc-button-font-weight, 400);padding:var(--kaching-bundles-sticky-atc-button-padding, 15px);border-radius:var(--kaching-bundles-sticky-atc-button-corner-radius, 8px)}@media (width < 750px){.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__image{display:var(--kaching-bundles-sticky-atc-image-display-mobile, var(--kaching-bundles-sticky-atc-image-display, block));height:var(--kaching-bundles-sticky-atc-product-photo-size-mobile, var(--kaching-bundles-sticky-atc-product-photo-size, 40px));border-radius:var(--kaching-bundles-sticky-atc-product-photo-corner-radius-mobile, var(--kaching-bundles-sticky-atc-product-photo-corner-radius, 0))}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__title{font-size:var(--kaching-bundles-sticky-atc-title-font-size-mobile, var(--kaching-bundles-sticky-atc-title-font-size, 16px))}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__button{font-size:var(--kaching-bundles-sticky-atc-button-font-size-mobile, var(--kaching-bundles-sticky-atc-button-font-size, 16px));padding:var(--kaching-bundles-sticky-atc-button-padding-mobile, var(--kaching-bundles-sticky-atc-button-padding, 15px));border-radius:var(--kaching-bundles-sticky-atc-button-corner-radius-mobile, var(--kaching-bundles-sticky-atc-button-corner-radius, 8px))}}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal.kaching-bundles__bars{grid-template-columns:repeat(2,1fr)}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal .kaching-bundles__bar-wrapper{padding:10px 7px}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-container{border:2px dashed var(--bar-selected-border-color, #000);box-shadow:none}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-wrapper{margin:-2px}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-variants{display:flex}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__title{display:inline-block;overflow-wrap:break-word;font-weight:700;font-size:var(--kaching-subscriptions-title-font-size, 15px);color:var(--kaching-subscriptions-title-color, #000)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__subtitle{display:inline-block;overflow-wrap:break-word;font-size:var(--kaching-subscriptions-subtitle-font-size, 13px);color:var(--kaching-subscriptions-subtitle-color, #555)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__bar-price{font-size:var(--kaching-subscriptions-title-font-size, 15px);color:var(--kaching-subscriptions-title-color, #000)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__bar-full-price{font-size:var(--kaching-subscriptions-subtitle-font-size, 13px);color:var(--kaching-subscriptions-subtitle-color, #555)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__checkbox{all:unset;display:flex;flex-shrink:0;width:20px;height:20px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--link{display:flex;justify-content:center;align-items:center;padding:8px 0}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__link{all:unset;cursor:pointer;display:inline;text-decoration:underline;text-underline-offset:3px;font-size:var(--kaching-subscriptions-title-font-size, 15px);color:var(--kaching-subscriptions-title-color, #000)}.kaching-bundles .kaching-bundles__timer{display:flex;align-items:center;background-color:var(--kaching-bundles-timer-background-color, #000);color:var(--kaching-bundles-timer-text-color, #fff);padding:10px 20px;border-radius:var(--bar-border-radius, 8px);margin-bottom:calc(8px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__timer-title{flex:1;text-align:var(--kaching-bundles-timer-title-alignment, center);font-size:var(--kaching-bundles-timer-title-size, 13px);font-weight:var(--kaching-bundles-timer-title-font-weight, bold);font-style:var(--kaching-bundles-timer-title-font-style, normal)}.kaching-bundles .kaching-bundles__swatch-dropdown{display:flex;position:relative;min-width:0;margin:0}.kaching-bundles .kaching-bundles__swatch{display:flex;flex-shrink:0;background-size:cover;background-position:center;overflow:hidden;position:relative;width:var(--kaching-swatch-size, 20px);height:var(--kaching-swatch-size, 20px);border:1px solid var(--kaching-swatch-border-color, #c2cdd6);background-color:var(--kaching-swatch-color, #fff);background-image:var(--kaching-swatch-image-url, none);border-radius:var(--kaching-swatch-border-radius, 0)}.kaching-bundles .kaching-bundles__swatch.kaching-bundles__swatch--unavailable{border-color:#121212;opacity:.4}.kaching-bundles .kaching-bundles__swatch.kaching-bundles__swatch--unavailable:after{content:"";position:absolute;bottom:0;left:0;width:140%;height:1px;background-color:#121212;transform:rotate(-45deg);transform-origin:left}.kaching-bundles .kaching-bundles__swatches-dropdown__color{display:flex;width:20px;height:20px;border:1px solid #c2cdd6;background-size:cover;background-position:center}.kaching-bundles .kaching-bundles__swatch-dropdown__options{display:flex;flex-direction:column;max-width:400px;max-height:500px;overflow:auto;position:fixed;top:0;left:0;border:1px solid #ccc;background-color:#fff;z-index:1000;box-shadow:0 20px 20px #1a1a1a47}.kaching-bundles .kaching-bundles__swatch-dropdown__option{font-size:14px;font-weight:400;font-style:normal;display:flex;align-items:center;gap:10px;white-space:nowrap;padding-block:10px;padding-inline:10px 60px;border:none;border-bottom:1px solid #dfe3e8;cursor:pointer;color:#000;background:none}.kaching-bundles .kaching-bundles__swatch-dropdown__option:last-child{border-bottom:none}.kaching-bundles .kaching-bundles__swatch-dropdown__option:hover,.kaching-bundles .kaching-bundles__swatch-dropdown__option--focused{background-color:#f0f0f0}.kaching-bundles .kaching-bundles__swatch-buttons{display:flex;overflow:auto}.kaching-bundles .kaching-bundles__pill-buttons{display:flex;flex-wrap:wrap;gap:8px;min-width:0;max-width:100%}.kaching-bundles .kaching-bundles__pill-buttons__button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;padding:.65em 1em;border:1px solid var(--kaching-pill-border-color, rgba(0, 0, 0, .3));border-radius:var(--kaching-pill-corner-radius, 10px);background:var(--kaching-pill-background-color, #fff);color:var(--kaching-pill-text-color, #000);font-size:var(--kaching-pill-font-size, 14px);font-weight:var(--kaching-pill-font-weight, 400);font-style:var(--kaching-pill-font-style, normal);line-height:1.3;text-align:center;cursor:pointer}.kaching-bundles .kaching-bundles__pill-buttons__button.kaching-bundles__pill-buttons__button--selected{border-color:var(--kaching-pill-selected-border-color, #000);background:var(--kaching-pill-selected-background-color, #000);color:var(--kaching-pill-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__pill-buttons__button.kaching-bundles__pill-buttons__button--unavailable{opacity:.4;text-decoration:line-through}.kaching-bundles .kaching-bundles__swatch-buttons__button{display:flex;align-items:center;box-sizing:border-box;border:none;padding:9px;background:#fff;cursor:pointer;border-top:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-bottom:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button:first-of-type{border-start-start-radius:var(--bar-variant-select-border-radius, 0);border-end-start-radius:var(--bar-variant-select-border-radius, 0);border-inline-start:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button:last-of-type{border-start-end-radius:var(--bar-variant-select-border-radius, 0);border-end-end-radius:var(--bar-variant-select-border-radius, 0);border-inline-end:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected{padding:8px 7px;border:2px solid var(--bar-selected-border-color, #50b83c)}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected:first-of-type{padding-inline-start:8px}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected:last-of-type{padding-inline-end:8px}.kaching-bundles .kaching-bundles__bar-variant__content.kaching-bundles__bar-variant__content--with-option-names{align-items:flex-start}.kaching-bundles .kaching-bundles__bar-variant-option{display:flex;flex-direction:column;align-items:flex-start;gap:4px;min-width:0;max-width:100%}.kaching-bundles .kaching-bundles__bar-variant-option__name{font-size:13px;line-height:1.3}.kaching-bundles .kaching-bundles__bar-variant-option__name-label{font-weight:600}.kaching-bundles .kaching-bundles__bar-variant-option__name-value{font-weight:400;opacity:.85}.kaching-bundles .kaching-bundles__quantity-selector{display:flex;width:-moz-fit-content;width:fit-content;border:1px solid #cccccc;box-sizing:border-box;overflow:hidden;margin-top:5px;border-radius:calc(var(--bar-border-radius, 0) / 2)}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button{display:flex;align-items:center;justify-content:center;width:30px;height:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;background-color:#fff;color:#000;border-radius:0}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button:hover{background-color:#eee}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button.kaching-bundles__quantity-selector__button--disabled{cursor:not-allowed;pointer-events:none}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button.kaching-bundles__quantity-selector__button--disabled img{opacity:.5}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input{all:unset;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;height:30px;width:30px;padding:0;border:1px solid #cccccc;border-top:none;border-bottom:none;background-color:#fff;color:#000;text-align:center;font-size:16px;font-weight:400;box-sizing:border-box}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input::-webkit-outer-spin-button,.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input::-webkit-inner-spin-button{-webkit-appearance:none;appearance:none;margin:0}.kaching-bundles .kaching-bundles__highlights{display:flex;flex-direction:column;gap:8px;padding:10px 0}.kaching-bundles .kaching-bundles__highlights--horizontal{flex-flow:row wrap}.kaching-bundles .kaching-bundles__highlights__item{display:flex;gap:8px}.kaching-bundles .kaching-bundles__highlights__icon{display:flex;align-items:center;flex-shrink:0;color:var(--kaching-highlights-icon-color, #000);width:var(--kaching-highlights-icon-size, 16px);height:var(--kaching-highlights-icon-size, 16px)}.kaching-bundles .kaching-bundles__highlights__icon svg{width:100%;height:100%}.kaching-bundles .kaching-bundles__highlights__icon img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__highlights__text{color:var(--kaching-highlights-text-color, #808080);font-size:var(--kaching-highlights-text-size, 16px);line-height:1.3}.kaching-bundles .kaching-bundles__low-stock-alert{color:var(--kaching-bundles-low-stock-alert-text-color, #ff0909);font-size:14px}.kaching-bundles img{width:initial}.kaching-bundles svg{width:initial;height:initial}.kaching-bundles .kaching-bundles__block{display:flex;flex-direction:column;width:100%;margin-top:15px;margin-bottom:10px;text-align:start;line-height:1.4;font-family:var(--block-font-family, inherit)}.kaching-bundles .kaching-bundles__block--hidden{display:none!important}.kaching-bundles .kaching-bundles__block.kaching-bundles__block--loaded{display:flex}.kaching-bundles .kaching-bundles__block-title{display:flex;align-items:center;text-align:center;gap:8px;margin-top:10px;margin-bottom:10px;color:var(--block-block-title-color, #000);font-size:var(--block-title-font-size, 14px);font-weight:var(--block-title-font-weight, bold);font-style:var(--block-title-font-style)}.kaching-bundles .kaching-bundles__block>.kaching-bundles__block-title:first-child{margin-top:0}.kaching-bundles .kaching-bundles__block-title:before,.kaching-bundles .kaching-bundles__block-title:after{content:"";flex-grow:1;height:2px;background-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bars{display:flex;flex-direction:column;position:relative}.kaching-bundles .kaching-bundles__bars--badge-border-all{--badge-ring-outer: calc( var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px) );padding:var(--badge-ring-outer)}.kaching-bundles .kaching-bundles__bars--badge-border-top{padding-top:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bars--badge-border-bottom{padding-bottom:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bars--badge-border-left{padding-left:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bars--badge-border-right{padding-right:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bars--badge-border-left,.kaching-bundles .kaching-bundles__bars--badge-border-right{min-height:var(--badge-border-min-length, auto);border-radius:var(--bar-border-radius, 8px);box-shadow:0 1px 10px var(--badge-border-wrap-color, rgba(0, 0, 0, .12))}.kaching-bundles .kaching-bundles__bars--badge-border-all,.kaching-bundles .kaching-bundles__bars--badge-border-top,.kaching-bundles .kaching-bundles__bars--badge-border-bottom{row-gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__subscriptions-wrapper{position:relative}.kaching-bundles .kaching-bundles__bar{display:flex;flex:1;margin:calc(5px * var(--block-spacing, 1)) 0;position:relative}.kaching-bundles .kaching-bundles__bars--badge-border-all>.kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-all>.kaching-bundles__scratch-off,.kaching-bundles .kaching-bundles__bars--badge-border-top>.kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-top>.kaching-bundles__scratch-off,.kaching-bundles .kaching-bundles__bars--badge-border-bottom>.kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-bottom>.kaching-bundles__scratch-off{margin-block:0}.kaching-bundles .kaching-bundles__bar--disabled{opacity:.3}.kaching-bundles .kaching-bundles__bar-container--sold-out{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--kaching-bundles-show-as-sold-out-opacity, .3)}.kaching-bundles .kaching-bundles__bar-sold-out-badge{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);padding:6px 12px;border-radius:8px;font-weight:600;background-color:var(--kaching-bundles-show-as-sold-out-background-color, #000);color:var(--kaching-bundles-show-as-sold-out-text-color, #fff);font-size:var(--kaching-bundles-show-as-sold-out-text-size, 13px);z-index:10;text-align:center}.kaching-bundles .kaching-bundles__bar>input[type=radio]{display:none}.kaching-bundles .kaching-bundles__bar-image{-o-object-fit:contain;object-fit:contain;height:var(--bar-image-size, 48px);width:var(--bar-image-size, 48px);border-radius:var(--bar-image-border-radius, 0)}.kaching-bundles .kaching-bundles__bar-radio{display:flex;flex-shrink:0;width:20px;height:20px;border-radius:50%;background:#fff;border:3px solid #fff;box-sizing:border-box;box-shadow:0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-radio{background:var(--bar-selected-border-color, #000);box-shadow:0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-container{display:flex!important;flex-direction:column;justify-content:center;align-items:initial;position:relative;box-sizing:border-box;cursor:pointer;width:100%;margin:0;padding:0;border:none;background-color:var(--bar-background-color, #fff);border-radius:var(--bar-border-radius);box-shadow:inset 0 0 0 1px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-wrapper{padding:calc(10px * var(--block-spacing, 1)) calc(15px * var(--block-spacing, 1) + 5px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__bar-wrapper{position:relative;z-index:1;flex:1;box-sizing:border-box;min-height:var(--badge-border-min-length, auto);padding:calc(10px * var(--block-spacing, 1)) calc(15px * var(--block-spacing, 1) + 5px);background-color:var(--bar-background-color, #fff);border-radius:var(--bar-border-radius);display:flex;flex-direction:column;justify-content:center}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__bar-wrapper{margin-inline-start:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));border-start-start-radius:var(--badge-concave-depth, 8px);border-end-start-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__bar-wrapper{margin-inline-end:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));border-start-end-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container:hover{opacity:1;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-container:has(:focus-visible){opacity:1;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-container *{letter-spacing:normal;text-transform:initial}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container{cursor:default;background-color:var(--bar-selected-background-color);box-shadow:inset 0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-most-popular{position:absolute;z-index:3}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--simple{top:-8px;right:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--fancy{top:-27px;right:-15px}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--custom{top:-25px;right:-15px}.kaching-bundles .kaching-bundles__bar-most-popular--custom .kaching-bundles__bar-most-popular__custom-image{max-height:var(--badge-size, 56px);width:auto;display:block}.kaching-bundles .kaching-bundles__bar-most-popular svg{color:var(--bar-most-popular-background-color)}.kaching-bundles .kaching-bundles__bar-most-popular svg .most-popular-text{fill:var(--bar-most-popular-color)}.kaching-bundles .kaching-bundles__bar-most-popular--fancy svg{width:var(--badge-size, 102px);height:auto}.kaching-bundles .kaching-bundles__bar-most-popular__content{margin:0 8px;padding:6px 8px;border-radius:0 0 5px 5px;font-family:sans-serif;font-size:var(--badge-text-size, 12px);font-weight:700;line-height:1;color:var(--bar-most-popular-color, #fff);background-color:var(--bar-most-popular-background-color)}.kaching-bundles .kaching-bundles__badge-border{position:absolute;z-index:1;display:flex;box-sizing:border-box;overflow:hidden;align-items:center;justify-content:center;font-family:sans-serif;font-size:max(6px,min(var(--badge-text-size, 12px),var(--badge-border-thickness, 22px) - 6px));font-weight:700;line-height:1;letter-spacing:normal;color:var(--bar-most-popular-color, #fff);background-color:var(--bar-most-popular-background-color, #000)}.kaching-bundles .kaching-bundles__badge-border--top{inset:0 0 auto;height:var(--badge-border-thickness, 22px);border-radius:var(--bar-border-radius, 8px) var(--bar-border-radius, 8px) 0 0}.kaching-bundles .kaching-bundles__badge-border--bottom{inset:auto 0 0;height:var(--badge-border-thickness, 22px);border-radius:0 0 var(--bar-border-radius, 8px) var(--bar-border-radius, 8px)}.kaching-bundles .kaching-bundles__badge-border--left{inset:0 auto 0 0;width:var(--badge-border-thickness, 22px);border-radius:var(--bar-border-radius, 8px) 0 0 var(--bar-border-radius, 8px)}.kaching-bundles .kaching-bundles__badge-border__side{position:absolute;display:flex;align-items:center;justify-content:center;overflow:hidden;white-space:nowrap}.kaching-bundles .kaching-bundles__badge-border .kaching-bundles__badge-border__text,.kaching-bundles .kaching-bundles__badge-border .kaching-bundles__badge-border__side{letter-spacing:normal}.kaching-bundles .kaching-bundles__badge-border__curve{position:absolute;inset:0;width:100%;height:100%}.kaching-bundles .kaching-bundles__badge-border__curve text{font-family:sans-serif;font-size:max(6px,min(var(--badge-text-size, 12px),var(--badge-border-thickness, 22px) - 6px));font-weight:700;letter-spacing:normal;fill:var(--bar-most-popular-color, #fff)}.kaching-bundles .kaching-bundles__badge-border--all{inset:0;background-color:transparent;pointer-events:none}.kaching-bundles .kaching-bundles__badge-border__band{display:block;position:absolute;inset:0;padding:var(--badge-border-thickness, 22px);border-radius:calc(var(--bar-border-radius, 8px) + var(--badge-ring-outer));background-color:var(--bar-most-popular-background-color, #000);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude}.kaching-bundles .kaching-bundles__badge-border__side--top{inset:0 0 auto;height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__badge-border__side--bottom{inset:auto 0 0;height:var(--badge-border-thickness, 22px);transform:rotate(180deg)}.kaching-bundles .kaching-bundles__badge-border__side--left{inset:var(--badge-border-thickness, 22px) auto var(--badge-border-thickness, 22px) 0;width:var(--badge-border-thickness, 22px);writing-mode:vertical-rl;transform:rotate(180deg)}.kaching-bundles .kaching-bundles__badge-border__side--right{inset:var(--badge-border-thickness, 22px) 0 var(--badge-border-thickness, 22px) auto;width:var(--badge-border-thickness, 22px);writing-mode:vertical-rl}.kaching-bundles .kaching-bundles__badge-border--left .kaching-bundles__badge-border__text{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap;text-align:center}.kaching-bundles .kaching-bundles__badge-border--right{inset:0 0 0 auto;width:var(--badge-border-thickness, 22px);border-radius:0 var(--bar-border-radius, 8px) var(--bar-border-radius, 8px) 0}.kaching-bundles .kaching-bundles__badge-border--right .kaching-bundles__badge-border__text{writing-mode:vertical-rl;white-space:nowrap;text-align:center}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--all{inset:calc(-1 * var(--badge-ring-outer))}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--top{inset:0 0 auto;height:calc(var(--badge-border-thickness, 22px) + var(--badge-concave-extra));border-radius:var(--bar-border-radius, 8px) var(--bar-border-radius, 8px) 0 0;display:flex;align-items:flex-start;justify-content:center;-webkit-mask:linear-gradient(#000,#000) left top/100% var(--badge-border-thickness, 22px) no-repeat,radial-gradient(circle at 100% 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left bottom/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat,radial-gradient(circle at 0 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right bottom/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat;mask:linear-gradient(#000,#000) left top/100% var(--badge-border-thickness, 22px) no-repeat,radial-gradient(circle at 100% 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left bottom/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat,radial-gradient(circle at 0 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right bottom/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--top .kaching-bundles__badge-border__text{display:flex;align-items:center;height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--bottom{inset:auto 0 0;height:calc(var(--badge-border-thickness, 22px) + var(--badge-concave-extra));border-radius:0 0 var(--bar-border-radius, 8px) var(--bar-border-radius, 8px);display:flex;align-items:flex-end;justify-content:center;-webkit-mask:linear-gradient(#000,#000) left bottom/100% var(--badge-border-thickness, 22px) no-repeat,radial-gradient(circle at 100% 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left top/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat,radial-gradient(circle at 0 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right top/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat;mask:linear-gradient(#000,#000) left bottom/100% var(--badge-border-thickness, 22px) no-repeat,radial-gradient(circle at 100% 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left top/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat,radial-gradient(circle at 0 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right top/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--bottom .kaching-bundles__badge-border__text{display:flex;align-items:center;height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--left{inset:0 auto 0 0;width:calc(var(--badge-border-thickness, 22px) + var(--badge-concave-extra));border-radius:var(--bar-border-radius, 8px) 0 0 var(--bar-border-radius, 8px);display:flex;align-items:center;justify-content:flex-start;-webkit-mask:linear-gradient(#000,#000) left top/var(--badge-border-thickness, 22px) 100% no-repeat,radial-gradient(circle at 100% 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right top/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat,radial-gradient(circle at 100% 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right bottom/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat;mask:linear-gradient(#000,#000) left top/var(--badge-border-thickness, 22px) 100% no-repeat,radial-gradient(circle at 100% 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right top/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat,radial-gradient(circle at 100% 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right bottom/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--right{inset:0 0 0 auto;width:calc(var(--badge-border-thickness, 22px) + var(--badge-concave-extra));border-radius:0 var(--bar-border-radius, 8px) var(--bar-border-radius, 8px) 0;display:flex;align-items:center;justify-content:flex-end;-webkit-mask:linear-gradient(#000,#000) right top/var(--badge-border-thickness, 22px) 100% no-repeat,radial-gradient(circle at 0 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left top/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat,radial-gradient(circle at 0 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left bottom/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat;mask:linear-gradient(#000,#000) right top/var(--badge-border-thickness, 22px) 100% no-repeat,radial-gradient(circle at 0 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left top/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat,radial-gradient(circle at 0 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left bottom/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--left .kaching-bundles__badge-border__text,.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--right .kaching-bundles__badge-border__text{display:flex;align-items:center;justify-content:center;width:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-all{--badge-ring-outer: calc( var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px) );margin:var(--badge-ring-outer)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top,.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom,.kaching-bundles .kaching-bundles__bar-container--badge-border-left,.kaching-bundles .kaching-bundles__bar-container--badge-border-right{--badge-concave-extra: max( 0px, var(--badge-concave-depth, 8px) - var(--badge-border-gap, 0px) )}.kaching-bundles .kaching-bundles__bar-container--badge-border-top{box-shadow:none}.kaching-bundles .kaching-bundles__bar-container--badge-border-top:after{content:"";position:absolute;inset:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px)) 0 0;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-top:var(--badge-border-gap-border, none);border-start-start-radius:var(--badge-concave-depth, 8px);border-start-end-radius:var(--badge-concave-depth, 8px);border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius);pointer-events:none;z-index:2}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-top:after{border-width:2px;border-color:var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom{box-shadow:none}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:after{content:"";position:absolute;inset:0 0 calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-bottom:var(--badge-border-gap-border, none);border-start-start-radius:var(--bar-border-radius);border-start-end-radius:var(--bar-border-radius);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px);pointer-events:none;z-index:2}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-bottom:after{border-width:2px;border-color:var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-container--badge-border-left,.kaching-bundles .kaching-bundles__bar-container--badge-border-right{box-shadow:none;background-color:transparent;min-height:var(--badge-border-min-length, auto)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top:hover,.kaching-bundles .kaching-bundles__bar-container--badge-border-top:has(:focus-visible),.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:hover,.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:has(:focus-visible),.kaching-bundles .kaching-bundles__bar-container--badge-border-left:hover,.kaching-bundles .kaching-bundles__bar-container--badge-border-left:has(:focus-visible),.kaching-bundles .kaching-bundles__bar-container--badge-border-right:hover,.kaching-bundles .kaching-bundles__bar-container--badge-border-right:has(:focus-visible),.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-top,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-bottom,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-left,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-right{box-shadow:none}.kaching-bundles .kaching-bundles__bar-container--badge-border-left:after{content:"";position:absolute;inset:0 0 0 calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-left:var(--badge-border-gap-border, none);border-start-start-radius:var(--badge-concave-depth, 8px);border-start-end-radius:var(--bar-border-radius);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--bar-border-radius);pointer-events:none;z-index:2}.kaching-bundles .kaching-bundles__bar-container--badge-border-right:after{content:"";position:absolute;inset:0 calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px)) 0 0;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-right:var(--badge-border-gap-border, none);border-start-start-radius:var(--bar-border-radius);border-start-end-radius:var(--badge-concave-depth, 8px);border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--badge-concave-depth, 8px);pointer-events:none;z-index:2}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-left:after,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-right:after{border-width:2px;border-color:var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-most-popular__content:before,.kaching-bundles .kaching-bundles__bar-most-popular__content:after{display:block;position:absolute;top:0;width:0;height:0;content:"";border-bottom:8px solid var(--bar-most-popular-background-color, transparent);filter:brightness(.7)}.kaching-bundles .kaching-bundles__bar-most-popular__content:before{left:0;border-left:8px solid transparent}.kaching-bundles .kaching-bundles__bar-most-popular__content:after{right:0;border-right:8px solid transparent}@media (width >= 750px){.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--fancy,.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--custom{right:-20px}}.kaching-bundles .kaching-bundles__bar-main{display:flex;align-items:center;gap:18px;min-height:55px}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-main{cursor:pointer}.kaching-bundles .kaching-bundles__bar-content{align-items:center;justify-content:space-between;display:flex;gap:8px;flex:1}.kaching-bundles .kaching-bundles__bar-content-left{display:flex;flex-direction:column;flex:1;align-items:flex-start}.kaching-bundles .kaching-bundles__bar-first-line{display:flex;flex-wrap:wrap;-moz-column-gap:8px;column-gap:8px;align-items:center}.kaching-bundles .kaching-bundles__bar-second-line{display:flex;flex-wrap:wrap;align-items:center;-moz-column-gap:10px;column-gap:10px}.kaching-bundles .kaching-bundles__bar-title{display:inline-block;overflow-wrap:break-word;font-size:var(--bar-title-font-size, 20px);font-weight:var(--bar-title-font-weight, 500);font-style:var(--bar-title-font-style);color:var(--bar-title-color, #000)}.kaching-bundles .kaching-bundles__bar-label{display:inline-flex;align-items:center;justify-content:center;gap:4px;vertical-align:top;padding:4px 8px;overflow-wrap:break-word;background-color:var(--bar-label-background-color, #eee);color:var(--bar-label-color, #777);font-size:var(--bar-label-font-size, 12px);font-weight:var(--bar-label-font-weight);font-style:var(--bar-label-font-style);border-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-subtitle{overflow-wrap:break-word;font-size:var(--bar-subtitle-font-size, 14px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-subtitle-color, #555)}.kaching-bundles .kaching-bundles__bar-pricing{align-items:flex-end;display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__bars--hide-prices .kaching-bundles__bar-pricing{display:none}.kaching-bundles .kaching-bundles__bar-pricing-row{display:flex;align-items:baseline;gap:6px}.kaching-bundles .kaching-bundles__bar-price{font-size:var(--bar-title-font-size, 20px);font-weight:var(--bar-title-font-weight, 500);font-style:var(--bar-title-font-style);color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__bar-price .kaching-bundles__bar-price__unit-label{font-size:var(--kaching-bundles-unit-label-font-size, 14px);font-weight:var(--kaching-bundles-unit-label-font-weight, normal);font-style:var(--kaching-bundles-unit-label-font-style)}.kaching-bundles .kaching-bundles__bar-pricing-row--secondary .kaching-bundles__bar-price{font-size:var(--bar-subtitle-font-size)}.kaching-bundles .kaching-bundles__bar-full-price,.kaching-bundles .kaching-bundles__bar-unit-price{font-size:var(--bar-subtitle-font-size, 14px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__bar-full-price{text-decoration:line-through}.kaching-bundles .kaching-bundles__bar-unit-price{text-transform:uppercase}.kaching-bundles .kaching-bundles__bar-variants{display:none;flex-direction:column;align-items:flex-start}.kaching-bundles .kaching-bundles__bar-variant{flex:1;max-width:100%}.kaching-bundles .kaching-bundles__bar-variants .kaching-bundles__bar-variant{margin-top:5px}.kaching-bundles .kaching-bundles__bar-variant__content{display:flex;align-items:center}.kaching-bundles .kaching-bundles__invalid-variant-error{color:red;font-size:12px;padding-bottom:2px}.kaching-bundles .kaching-bundles__bar-variant-names{font-size:12px;color:var(--bar-subtitle-color, #555);margin-block:3px}.kaching-bundles .kaching-bundles__bar-variant-names>span:not(:last-child):after{content:", "}.kaching-bundles .kaching-bundles__single-variant-name{display:flex;flex-direction:column;font-size:12px;color:var(--bar-subtitle-color, #555);margin-block:3px}.kaching-bundles .kaching-bundles__bar-variant-number{font-size:12px;margin-right:2px;min-width:20px;display:inline-flex;color:var(--bar-title-color, #000)}.kaching-bundles .kaching-bundles__bar-variant-number--hidden{display:none}.kaching-bundles .kaching-bundles__bar-variant-image{width:initial;max-width:40px;max-height:40px;border-radius:calc(var(--bar-border-radius, 0) / 2);margin-right:7px}.kaching-bundles .kaching-bundles__bar-variant-main{display:flex;flex-direction:column;min-width:0}.kaching-bundles .kaching-bundles__bar-variant-selects{display:flex;min-width:0;margin-right:2px;margin-bottom:2px;flex-wrap:wrap;gap:7px}.kaching-bundles .kaching-bundles__bar-variant-select{font-size:14px;font-weight:400;font-style:normal;font-family:var(--block-font-family, inherit);-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;padding:7px 25px 7px 7px;margin:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;background-image:url("data:image/svg+xml;utf8,<svg width='10' height='4' viewBox='0 0 10 4' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5 4L0.669872 0.25L9.33013 0.249999L5 4Z' fill='black'/></svg>")!important;background-repeat:no-repeat!important;background-position:right 8px center!important;background-color:#fff;background-size:initial;color:#000;outline:none;max-width:100%;width:auto;height:auto;min-height:auto;display:flex;align-items:center;gap:10px;cursor:pointer;box-shadow:inset 0 0 0 1px var(--bar-border-color, rgba(0, 0, 0, .3));border-radius:var(--bar-variant-select-border-radius, 0)}.kaching-bundles .kaching-bundles__bar-variant-select span{overflow:hidden;text-overflow:ellipsis}.kaching-bundles .kaching-bundles__bar-variant-selector-wrapper{display:flex;flex-wrap:wrap;align-items:center;-moz-column-gap:10px;column-gap:10px;max-width:100%}.kaching-bundles .kaching-bundles__selling-plan-select{width:100%}.kaching-bundles .kaching-bundles__bar-selling-plan{margin-top:5px;margin-bottom:5px}.kaching-bundles .kaching-bundles__bar-variant--invalid .kaching-bundles__bar-variant-select{box-shadow:0 0 0 1px red}.kaching-bundles .kaching-bundles__bar-variant-select:hover{border:none;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-variant-select:focus{border:none;box-shadow:inset 0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-variant--invalid .kaching-bundles__bar-variant-select:is(:hover,:focus){box-shadow:0 0 0 2px red}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-variants,.kaching-bundles .kaching-bundles__bar-variants--visible{display:flex}.kaching-bundles .kaching-bundles__out-of-stock{background-color:#ff2d2d4d;border:1px solid #ff2c2c;color:#df2121;padding:8px 12px;margin:5px 0;font-size:14px}.kaching-bundles .kaching-bundles__bars--horizontal.kaching-bundles__bars{display:grid;grid-template-columns:repeat(var(--bundle-bars-per-row, 3),1fr);gap:calc(10px * var(--block-spacing, 1));overflow-x:auto}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar{position:relative}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 7px 10px;height:100%}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-main{flex-direction:column;gap:10px;text-align:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-content{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-content-left{align-items:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-second-line{justify-content:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-label{position:absolute;top:0;left:0;right:0;margin-right:0;border-top-left-radius:var(--bar-label-border-top-radius);border-top-right-radius:var(--bar-label-border-top-radius)}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-pricing{align-items:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-variants{align-items:center;margin-top:10px;margin-bottom:5px}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-variant-selector-wrapper{justify-content:center}.kaching-bundles .kaching-bundles__bars--grid.kaching-bundles__bars{display:grid;grid-template-columns:repeat(2,1fr);gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar{margin:0}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar-radio{display:none}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-container,.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-container:hover,.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar--selected .kaching-bundles__bar-container{box-shadow:none}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-pricing{flex-direction:row;gap:10px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--simple) .kaching-bundles__bar-main{margin-top:7px;margin-bottom:7px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--fancy) .kaching-bundles__bar-pricing{margin-top:18px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--custom) .kaching-bundles__bar-pricing{margin-top:18px}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--simple) .kaching-bundles__bar-variants{margin-top:-7px}.kaching-bundles .kaching-bundles__bar-full-price:before,.kaching-bundles .kaching-bundles__bar-price:before{content:attr(data-a11y-label);position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}@media (prefers-reduced-motion: reduce){.kaching-bundles *,.kaching-bundles *:before,.kaching-bundles *:after{transition-duration:.01ms!important;animation-duration:.01ms!important}}.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__subscriptions-wrapper .kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-top .kaching-bundles__subscriptions-wrapper .kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-bottom .kaching-bundles__subscriptions-wrapper .kaching-bundles__bar{margin-block:0}.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__subscriptions-wrapper .kaching-bundles__bars,.kaching-bundles .kaching-bundles__bars--badge-border-top .kaching-bundles__subscriptions-wrapper .kaching-bundles__bars,.kaching-bundles .kaching-bundles__bars--badge-border-bottom .kaching-bundles__subscriptions-wrapper .kaching-bundles__bars{row-gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__bar-container--badge-border-left:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar-container--badge-border-right:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) .kaching-bundles__bar-wrapper{border-end-start-radius:0;border-end-end-radius:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-top .kaching-bundles__bar-wrapper{position:relative;z-index:1;margin-top:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));background-color:var(--bar-background-color, #fff);border-start-start-radius:var(--badge-concave-depth, 8px);border-start-end-radius:var(--badge-concave-depth, 8px);border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) .kaching-bundles__bar-wrapper{border-end-start-radius:0;border-end-end-radius:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-top :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__bar-wrapper{position:relative;z-index:1;margin-bottom:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));background-color:var(--bar-background-color, #fff);border-start-start-radius:var(--bar-border-radius);border-start-end-radius:var(--bar-border-radius);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts){position:relative;z-index:1}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) .kaching-bundles__bar-wrapper{margin-bottom:0;border-end-start-radius:0;border-end-end-radius:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{margin-bottom:var(--badge-border-thickness, 22px);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts),.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts),.kaching-bundles .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts),.kaching-bundles .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts){margin-inline:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts){position:relative;z-index:1;margin-inline-start:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts){position:relative;z-index:1;margin-inline-end:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child,.kaching-bundles .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{margin-block-end:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{margin-inline-start:var(--badge-border-thickness, 22px);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{margin-inline-end:var(--badge-border-thickness, 22px);border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:0;border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__deal-bar-progressive-gift:last-child,.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__deal-bar-progressive-gift:last-child{border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__deal-bar-progressive-gift:last-child{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top .kaching-bundles__deal-bar-progressive-gift,.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__deal-bar-progressive-gift,.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__deal-bar-progressive-gift,.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__deal-bar-progressive-gift{margin-inline:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__free-gift__divider{margin-inline-start:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__free-gift__divider{margin-inline-end:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-top .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-left .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-right .kaching-bundles__bar-wrapper{background-color:var(--bar-selected-background-color)}`)), document.head.appendChild(Wt);
    }
  } catch (gn) {
    console.error("vite-plugin-css-injected-by-js", gn);
  }
})();
var g1 = Object.defineProperty, h1 = Object.getPrototypeOf, p1 = Reflect.get, rh = (Wt) => {
  throw TypeError(Wt);
}, b1 = (Wt, gn, zn) => gn in Wt ? g1(Wt, gn, { enumerable: !0, configurable: !0, writable: !0, value: zn }) : Wt[gn] = zn, Pn = (Wt, gn, zn) => b1(Wt, typeof gn != "symbol" ? gn + "" : gn, zn), pc = (Wt, gn, zn) => gn.has(Wt) || rh("Cannot " + zn), Se = (Wt, gn, zn) => (pc(Wt, gn, "read from private field"), zn ? zn.call(Wt) : gn.get(Wt)), xt = (Wt, gn, zn) => gn.has(Wt) ? rh("Cannot add the same private member more than once") : gn instanceof WeakSet ? gn.add(Wt) : gn.set(Wt, zn), Pt = (Wt, gn, zn, Ls) => (pc(Wt, gn, "write to private field"), gn.set(Wt, zn), zn), cn = (Wt, gn, zn) => (pc(Wt, gn, "access private method"), zn), f1 = (Wt, gn, zn) => p1(h1(Wt), zn, gn);
(function(Wt) {
  var gn, zn, Ls, nl, rl, Ja, Ma, al, il, ll, br, Es, Ya, js, bc, Yr, Br, Ll, ha, wi, pa, Or, fr, ba, Ka, Xa, za, Pi, ei, Rs, Ns, Cr, fc, vc, El, jl, Qs, $a, Da, Ta, Rl, Ws, ti, sl, Nl, Hs, _c, Va, Fr, ol, Ql, Us, Zs, kc, cl, Kr, ni, Js, Wl, mc, xc, fa, va, Aa, Ys, _a, ul, Hl, Ul, Zl;
  String.prototype.replaceAll || (String.prototype.replaceAll = function(n, t) {
    if (typeof n == "string") {
      const r = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return this.replace(new RegExp(r, "g"), t);
    }
    if (n instanceof RegExp) {
      if (!n.global) throw new TypeError("replaceAll must be called with a global RegExp");
      return this.replace(n, t);
    }
    return this.replace(n, t);
  }), typeof window != "undefined" && ((Ls = (zn = (gn = window.__svelte) != null ? gn : window.__svelte = {}).v) != null ? Ls : zn.v = /* @__PURE__ */ new Set()).add("5");
  const Jl = "[!", ri = {}, Nn = Symbol(), ah = !1;
  var dl = Array.isArray, ih = Array.prototype.indexOf, Ks = Array.from, Yl = Object.keys, ai = Object.defineProperty, ii = Object.getOwnPropertyDescriptor, yc = Object.getOwnPropertyDescriptors, wc = Object.prototype, lh = Array.prototype, Kl = Object.getPrototypeOf, Pc = Object.isExtensible;
  const Xr = () => {
  };
  function sh(n) {
    return n();
  }
  function Xs(n) {
    for (var t = 0; t < n.length; t++) n[t]();
  }
  function Sc() {
    var n, t;
    return { promise: new Promise((r, a) => {
      n = r, t = a;
    }), resolve: n, reject: t };
  }
  const gl = 16, Xl = 32, Bc = 64, eo = 128, Lr = 256, to = 512, er = 1024, ea = 2048, li = 4096, ta = 8192, Si = 16384, no = 32768, Bi = 65536, oh = 1 << 17, Cc = 1 << 19, ro = 1 << 21, si = 1 << 23, ka = Symbol("$state"), Ic = Symbol("legacy props"), ch = Symbol(""), Ci = new class extends Error {
    constructor() {
      super(...arguments), Pn(this, "name", "StaleReactionError"), Pn(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
    }
  }();
  function ao(n) {
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
  }
  function hl(n) {
    console.warn("https://svelte.dev/e/hydration_mismatch");
  }
  let Mt, _t = !1;
  function tr(n) {
    _t = n;
  }
  function Vn(n) {
    if (n === null) throw hl(), ri;
    return Mt = n;
  }
  function Ir() {
    return Vn(Er(Mt));
  }
  function y(n) {
    if (_t) {
      if (Er(Mt) !== null) throw hl(), ri;
      Mt = n;
    }
  }
  function ma(n = 1) {
    if (_t) {
      for (var t = n, r = Mt; t--; ) r = Er(r);
      Mt = r;
    }
  }
  function es(n = !0) {
    for (var t = 0, r = Mt; ; ) {
      if (r.nodeType === 8) {
        var a = r.data;
        if (a === "]") {
          if (t === 0) return r;
          t -= 1;
        } else a !== "[" && a !== Jl || (t += 1);
      }
      var s = Er(r);
      n && r.remove(), r = s;
    }
  }
  function Mc(n) {
    if (!n || n.nodeType !== 8) throw hl(), ri;
    return n.data;
  }
  function zc(n) {
    return n === this.v;
  }
  function io(n, t) {
    return n != n ? t == t : n !== t || n !== null && typeof n == "object" || typeof n == "function";
  }
  function $c(n) {
    return !io(n, this.v);
  }
  let Ii = !1;
  const uh = [];
  function qa(n, t = !1, r = !1) {
    return ts(n, /* @__PURE__ */ new Map(), "", uh, null, r);
  }
  function ts(n, t, r, a, s = null, o = !1) {
    if (typeof n == "object" && n !== null) {
      var c = t.get(n);
      if (c !== void 0) return c;
      if (n instanceof Map) return new Map(n);
      if (n instanceof Set) return new Set(n);
      if (dl(n)) {
        var l = Array(n.length);
        t.set(n, l), s !== null && t.set(s, l);
        for (var i = 0; i < n.length; i += 1) {
          var u = n[i];
          i in n && (l[i] = ts(u, t, r, a, null, o));
        }
        return l;
      }
      if (Kl(n) === wc) {
        for (var g in l = {}, t.set(n, l), s !== null && t.set(s, l), n) l[g] = ts(n[g], t, r, a, null, o);
        return l;
      }
      if (n instanceof Date) return structuredClone(n);
      if (typeof n.toJSON == "function" && !o) return ts(n.toJSON(), t, r, a, n);
    }
    if (n instanceof EventTarget) return n;
    try {
      return structuredClone(n);
    } catch {
      return n;
    }
  }
  let vn = null;
  function Mi(n) {
    vn = n;
  }
  function Ga(n) {
    return Dc().get(n);
  }
  function Oa(n, t) {
    return Dc().set(n, t), t;
  }
  function rt(n, t = !1, r) {
    vn = { p: vn, c: null, e: null, s: n, x: null, l: Ii && !t ? { s: null, u: null, $: [] } : null };
  }
  function at(n) {
    var t = vn, r = t.e;
    if (r !== null) for (var a of (t.e = null, r)) eu(a);
    return n !== void 0 && (t.x = n), vn = t.p, n != null ? n : {};
  }
  function zi() {
    return !Ii || vn !== null && vn.l === null;
  }
  function Dc(n) {
    var t;
    return vn === null && ao(), (t = vn.c) != null ? t : vn.c = new Map((function(r) {
      let a = r.p;
      for (; a !== null; ) {
        const s = a.c;
        if (s !== null) return s;
        a = a.p;
      }
      return null;
    })(vn) || void 0);
  }
  let oi = [];
  function Tc() {
    var n = oi;
    oi = [], Xs(n);
  }
  function Fa(n) {
    if (oi.length === 0 && !bl) {
      var t = oi;
      queueMicrotask(() => {
        t === oi && Tc();
      });
    }
    oi.push(n);
  }
  function dh() {
    for (; oi.length > 0; ) Tc();
  }
  const gh = /* @__PURE__ */ new WeakMap();
  function Vc(n) {
    var t = jt;
    if (t === null) return Qt.f |= si, n;
    if ((t.f & no) === 0) {
      if ((t.f & eo) === 0) throw !t.parent && n instanceof Error && Ac(n), n;
      t.b.error(n);
    } else $i(n, t);
  }
  function $i(n, t) {
    for (; t !== null; ) {
      if ((t.f & eo) !== 0) try {
        return void t.b.error(n);
      } catch (r) {
        n = r;
      }
      t = t.parent;
    }
    throw n instanceof Error && Ac(n), n;
  }
  function Ac(n) {
    const t = gh.get(n);
    t && (ai(n, "message", { value: t.message }), ai(n, "stack", { value: t.stack }));
  }
  const ns = /* @__PURE__ */ new Set();
  let _n = null, pl = null, ur = null, lo = /* @__PURE__ */ new Set(), na = [], rs = null, so = !1, bl = !1;
  nl = /* @__PURE__ */ new WeakMap(), rl = /* @__PURE__ */ new WeakMap(), Ja = /* @__PURE__ */ new WeakMap(), Ma = /* @__PURE__ */ new WeakMap(), al = /* @__PURE__ */ new WeakMap(), il = /* @__PURE__ */ new WeakMap(), ll = /* @__PURE__ */ new WeakMap(), br = /* @__PURE__ */ new WeakSet(), Es = function(n, t) {
    var r;
    n.f ^= er;
    for (var a = n.first; a !== null; ) {
      var s = a.f, o = !!(96 & s), c = o && (s & er) !== 0 || (s & ta) !== 0 || this.skipped_effects.has(a);
      if ((a.f & eo) !== 0 && ((r = a.b) != null && r.is_pending()) && (t = { parent: t, effect: a, effects: [], render_effects: [], block_effects: [] }), !c && a.fn !== null) {
        o ? a.f ^= er : 4 & s ? t.effects.push(a) : ls(a) && ((a.f & gl) !== 0 && t.block_effects.push(a), os(a));
        var l = a.first;
        if (l !== null) {
          a = l;
          continue;
        }
      }
      var i = a.parent;
      for (a = a.next; a === null && i !== null; ) i === t.effect && (cn(this, br, Ya).call(this, t.effects), cn(this, br, Ya).call(this, t.render_effects), cn(this, br, Ya).call(this, t.block_effects), t = t.parent), a = i.next, i = i.parent;
    }
  }, Ya = function(n) {
    for (const t of n)
      ((t.f & ea) !== 0 ? Se(this, il) : Se(this, ll)).push(t), rr(t, er);
  }, js = function() {
    if (Se(this, Ma) === 0) {
      for (const n of Se(this, rl)) n();
      Se(this, rl).clear();
    }
    Se(this, Ja) === 0 && cn(this, br, bc).call(this);
  }, bc = function() {
    var n, t;
    if (ns.size > 1) {
      Se(this, nl).clear();
      var r = ur, a = !0, s = { parent: null, effect: null, effects: [], render_effects: [], block_effects: [] };
      for (const o of ns) {
        if (o === this) {
          a = !1;
          continue;
        }
        const c = [];
        for (const [i, u] of this.current) {
          if (o.current.has(i)) {
            if (!a || u === o.current.get(i)) continue;
            o.current.set(i, u);
          }
          c.push(i);
        }
        if (c.length === 0) continue;
        const l = [...o.current.keys()].filter((i) => !this.current.has(i));
        if (l.length > 0) {
          for (const i of c) Oc(i, l);
          if (na.length > 0) {
            _n = o, o.apply();
            for (const i of na) cn(n = o, br, Es).call(n, i, s);
            na = [], o.deactivate();
          }
        }
      }
      _n = null, ur = r;
    }
    this.committed = !0, ns.delete(this), (t = Se(this, al)) == null || t.resolve();
  };
  let ci = class hc {
    constructor() {
      xt(this, br), Pn(this, "committed", !1), Pn(this, "current", /* @__PURE__ */ new Map()), xt(this, nl, /* @__PURE__ */ new Map()), xt(this, rl, /* @__PURE__ */ new Set()), xt(this, Ja, 0), xt(this, Ma, 0), xt(this, al, null), xt(this, il, []), xt(this, ll, []), Pn(this, "skipped_effects", /* @__PURE__ */ new Set());
    }
    process(t) {
      na = [], pl = null, this.apply();
      var r = { parent: null, effect: null, effects: [], render_effects: [], block_effects: [] };
      for (const a of t) cn(this, br, Es).call(this, a, r);
      cn(this, br, js).call(this), Se(this, Ma) > 0 ? (cn(this, br, Ya).call(this, r.effects), cn(this, br, Ya).call(this, r.render_effects), cn(this, br, Ya).call(this, r.block_effects)) : (pl = this, _n = null, Gc(r.render_effects), Gc(r.effects), pl = null), ur = null;
    }
    capture(t, r) {
      Se(this, nl).has(t) || Se(this, nl).set(t, r), this.current.set(t, t.v), ur == null || ur.set(t, t.v);
    }
    activate() {
      _n = this;
    }
    deactivate() {
      _n = null, ur = null;
    }
    flush() {
      if (na.length > 0) {
        if (this.activate(), qc(), _n !== null && _n !== this) return;
      } else cn(this, br, js).call(this);
      this.deactivate();
      for (const t of lo) if (lo.delete(t), t(), _n !== null) break;
    }
    increment(t) {
      Pt(this, Ja, Se(this, Ja) + 1), t && Pt(this, Ma, Se(this, Ma) + 1);
    }
    decrement(t) {
      Pt(this, Ja, Se(this, Ja) - 1), t && Pt(this, Ma, Se(this, Ma) - 1);
      for (const r of Se(this, il)) rr(r, ea), ui(r);
      for (const r of Se(this, ll)) rr(r, li), ui(r);
      Pt(this, il, []), Pt(this, ll, []), this.flush();
    }
    add_callback(t) {
      Se(this, rl).add(t);
    }
    settled() {
      var t;
      return ((t = Se(this, al)) != null ? t : Pt(this, al, Sc())).promise;
    }
    static ensure() {
      if (_n === null) {
        const t = _n = new hc();
        ns.add(_n), bl || hc.enqueue(() => {
          _n === t && t.flush();
        });
      }
      return _n;
    }
    static enqueue(t) {
      Fa(t);
    }
    apply() {
    }
  };
  function v(n) {
    var t = bl;
    bl = !0;
    try {
      for (; ; ) {
        if (dh(), na.length === 0 && (_n == null || _n.flush(), na.length === 0)) return void (rs = null);
        qc();
      }
    } finally {
      bl = t;
    }
  }
  function qc() {
    var n = Vi;
    so = !0;
    try {
      var t = 0;
      for (ou(!0); na.length > 0; ) {
        var r = ci.ensure();
        t++ > 1e3 && hh(), r.process(na), La.clear();
      }
    } finally {
      so = !1, ou(n), rs = null;
    }
  }
  function hh() {
    try {
      (function() {
        throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
      })();
    } catch (n) {
      $i(n, rs);
    }
  }
  let ra = null;
  function Gc(n) {
    var t = n.length;
    if (t !== 0) {
      for (var r = 0; r < t; ) {
        var a = n[r++];
        if (!(24576 & a.f) && ls(a) && (ra = /* @__PURE__ */ new Set(), os(a), a.deps === null && a.first === null && a.nodes_start === null && (a.teardown === null && a.ac === null ? au(a) : a.fn = null), (ra == null ? void 0 : ra.size) > 0)) {
          La.clear();
          for (const s of ra) {
            if (24576 & s.f) continue;
            const o = [s];
            let c = s.parent;
            for (; c !== null; ) ra.has(c) && (ra.delete(c), o.push(c)), c = c.parent;
            for (let l = o.length - 1; l >= 0; l--) {
              const i = o[l];
              24576 & i.f || os(i);
            }
          }
          ra.clear();
        }
      }
      ra = null;
    }
  }
  function Oc(n, t) {
    if (n.reactions !== null) for (const r of n.reactions) {
      const a = r.f;
      2 & a ? Oc(r, t) : 4194320 & a && Fc(r, t) && (rr(r, ea), ui(r));
    }
  }
  function Fc(n, t) {
    if (n.deps !== null) {
      for (const r of n.deps)
        if (t.includes(r) || 2 & r.f && Fc(r, t)) return !0;
    }
    return !1;
  }
  function ui(n) {
    for (var t = rs = n; t.parent !== null; ) {
      var r = (t = t.parent).f;
      if (so && t === jt && (r & gl) !== 0) return;
      if (96 & r) {
        if ((r & er) === 0) return;
        t.f ^= er;
      }
    }
    na.push(t);
  }
  function Lc(n) {
    let t, r = 0, a = xa(0);
    return () => {
      Qt === null || Rr || (e(a), kl(() => (r === 0 && (t = tn(() => n(() => vr(a)))), r += 1, () => {
        Fa(() => {
          r -= 1, r === 0 && (t == null || t(), t = void 0, vr(a));
        });
      })));
    };
  }
  class ph {
    constructor(t, r, a) {
      xt(this, Cr), Pn(this, "parent"), xt(this, Yr, !1), xt(this, Br), xt(this, Ll, _t ? Mt : null), xt(this, ha), xt(this, wi), xt(this, pa), xt(this, Or, null), xt(this, fr, null), xt(this, ba, null), xt(this, Ka, null), xt(this, Xa, 0), xt(this, za, 0), xt(this, Pi, !1), xt(this, ei, null), xt(this, Rs, () => {
        Se(this, ei) && Di(Se(this, ei), Se(this, Xa));
      }), xt(this, Ns, Lc(() => (Pt(this, ei, xa(Se(this, Xa))), () => {
        Pt(this, ei, null);
      }))), Pt(this, Br, t), Pt(this, ha, r), Pt(this, wi, a), this.parent = jt.b, Pt(this, Yr, !!Se(this, ha).pending), Pt(this, pa, ya(() => {
        if (jt.b = this, _t) {
          const s = Se(this, Ll);
          Ir(), s.nodeType === 8 && s.data === Jl ? cn(this, Cr, vc).call(this) : cn(this, Cr, fc).call(this);
        } else {
          try {
            Pt(this, Or, kr(() => a(Se(this, Br))));
          } catch (s) {
            this.error(s);
          }
          Se(this, za) > 0 ? cn(this, Cr, jl).call(this) : Pt(this, Yr, !1);
        }
      }, 589952)), _t && Pt(this, Br, Mt);
    }
    is_pending() {
      return Se(this, Yr) || !!this.parent && this.parent.is_pending();
    }
    has_pending_snippet() {
      return !!Se(this, ha).pending;
    }
    update_pending_count(t) {
      cn(this, Cr, Qs).call(this, t), Pt(this, Xa, Se(this, Xa) + t), lo.add(Se(this, Rs));
    }
    get_effect_pending() {
      return Se(this, Ns).call(this), e(Se(this, ei));
    }
    error(t) {
      var r = Se(this, ha).onerror;
      let a = Se(this, ha).failed;
      if (Se(this, Pi) || !r && !a) throw t;
      Se(this, Or) && (En(Se(this, Or)), Pt(this, Or, null)), Se(this, fr) && (En(Se(this, fr)), Pt(this, fr, null)), Se(this, ba) && (En(Se(this, ba)), Pt(this, ba, null)), _t && (Vn(Se(this, Ll)), ma(), Vn(es()));
      var s = !1, o = !1;
      const c = () => {
        s ? console.warn("https://svelte.dev/e/svelte_boundary_reset_noop") : (s = !0, o && (function() {
          throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
        })(), ci.ensure(), Pt(this, Xa, 0), Se(this, ba) !== null && Ti(Se(this, ba), () => {
          Pt(this, ba, null);
        }), Pt(this, Yr, this.has_pending_snippet()), Pt(this, Or, cn(this, Cr, El).call(this, () => (Pt(this, Pi, !1), kr(() => Se(this, wi).call(this, Se(this, Br)))))), Se(this, za) > 0 ? cn(this, Cr, jl).call(this) : Pt(this, Yr, !1));
      };
      var l = Qt;
      try {
        Zn(null), o = !0, r == null || r(t, c), o = !1;
      } catch (i) {
        $i(i, Se(this, pa) && Se(this, pa).parent);
      } finally {
        Zn(l);
      }
      a && Fa(() => {
        Pt(this, ba, cn(this, Cr, El).call(this, () => {
          Pt(this, Pi, !0);
          try {
            return kr(() => {
              a(Se(this, Br), () => t, () => c);
            });
          } catch (i) {
            return $i(i, Se(this, pa).parent), null;
          } finally {
            Pt(this, Pi, !1);
          }
        }));
      });
    }
  }
  function Ec(n, t, r) {
    const a = zi() ? fl : as;
    if (t.length !== 0) {
      var s = _n, o = jt, c = (function() {
        var i = jt, u = Qt, g = vn, k = _n, f = _t;
        if (f) var h = Mt;
        return function() {
          aa(i), Zn(u), Mi(g), k == null || k.activate(), f && (tr(!0), Vn(h));
        };
      })(), l = _t;
      Promise.all(t.map((i) => bh(i))).then((i) => {
        c();
        try {
          r([...n.map(a), ...i]);
        } catch (u) {
          (o.f & Si) === 0 && $i(u, o);
        }
        l && tr(!1), s == null || s.deactivate(), oo();
      }).catch((i) => {
        $i(i, o);
      });
    } else r(n.map(a));
  }
  function oo() {
    aa(null), Zn(null), Mi(null);
  }
  function fl(n) {
    var t = 2050, r = Qt !== null && 2 & Qt.f ? Qt : null;
    return jt === null || r !== null && (r.f & Lr) !== 0 ? t |= Lr : jt.f |= Cc, { ctx: vn, deps: null, effects: null, equals: zc, f: t, fn: n, reactions: null, rv: 0, v: Nn, wv: 0, parent: r != null ? r : jt, ac: null };
  }
  function bh(n, t) {
    let r = jt;
    r === null && (function() {
      throw new Error("https://svelte.dev/e/async_derived_orphan");
    })();
    var a = r.b, s = void 0, o = xa(Nn), c = !Qt, l = /* @__PURE__ */ new Map();
    return (function(i) {
      jr(4718592, i, !0);
    })(() => {
      var i, u = Sc();
      s = u.promise;
      try {
        Promise.resolve(n()).then(u.resolve, u.reject).then(() => {
          g === _n && g.committed && g.deactivate(), oo();
        });
      } catch (h) {
        u.reject(h), oo();
      }
      var g = _n;
      if (c) {
        var k = !a.is_pending();
        a.update_pending_count(1), g.increment(k), (i = l.get(g)) == null || i.reject(Ci), l.delete(g), l.set(g, u);
      }
      const f = (h, p = void 0) => {
        if (g.activate(), p) p !== Ci && (o.f |= si, Di(o, p));
        else {
          (o.f & si) !== 0 && (o.f ^= si), Di(o, h);
          for (const [x, m] of l) {
            if (l.delete(x), x === g) break;
            m.reject(Ci);
          }
        }
        c && (a.update_pending_count(-1), g.decrement(k));
      };
      u.promise.then(f, (h) => f(null, h || "unknown"));
    }), vl(() => {
      for (const i of l.values()) i.reject(Ci);
    }), new Promise((i) => {
      (function u(g) {
        function k() {
          g === s ? i(o) : u(s);
        }
        g.then(k, k);
      })(s);
    });
  }
  function d(n) {
    const t = fl(n);
    return uu(t), t;
  }
  function as(n) {
    const t = fl(n);
    return t.equals = $c, t;
  }
  function jc(n) {
    var t = n.effects;
    if (t !== null) {
      n.effects = null;
      for (var r = 0; r < t.length; r += 1) En(t[r]);
    }
  }
  function co(n) {
    var t, r = jt;
    aa((function(a) {
      for (var s = a.parent; s !== null; ) {
        if (!(2 & s.f)) return s;
        s = s.parent;
      }
      return null;
    })(n));
    try {
      jc(n), t = bu(n);
    } finally {
      aa(r);
    }
    return t;
  }
  function Rc(n) {
    var t = co(n);
    n.equals(t) || (n.v = t, n.wv = hu()), di || (ur !== null ? ur.set(n, n.v) : rr(n, !Ea && (n.f & Lr) === 0 || n.deps === null ? er : li));
  }
  Yr = /* @__PURE__ */ new WeakMap(), Br = /* @__PURE__ */ new WeakMap(), Ll = /* @__PURE__ */ new WeakMap(), ha = /* @__PURE__ */ new WeakMap(), wi = /* @__PURE__ */ new WeakMap(), pa = /* @__PURE__ */ new WeakMap(), Or = /* @__PURE__ */ new WeakMap(), fr = /* @__PURE__ */ new WeakMap(), ba = /* @__PURE__ */ new WeakMap(), Ka = /* @__PURE__ */ new WeakMap(), Xa = /* @__PURE__ */ new WeakMap(), za = /* @__PURE__ */ new WeakMap(), Pi = /* @__PURE__ */ new WeakMap(), ei = /* @__PURE__ */ new WeakMap(), Rs = /* @__PURE__ */ new WeakMap(), Ns = /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ new WeakSet(), fc = function() {
    try {
      Pt(this, Or, kr(() => Se(this, wi).call(this, Se(this, Br))));
    } catch (n) {
      this.error(n);
    }
    Pt(this, Yr, !1);
  }, vc = function() {
    const n = Se(this, ha).pending;
    n && (Pt(this, fr, kr(() => n(Se(this, Br)))), ci.enqueue(() => {
      Pt(this, Or, cn(this, Cr, El).call(this, () => (ci.ensure(), kr(() => Se(this, wi).call(this, Se(this, Br)))))), Se(this, za) > 0 ? cn(this, Cr, jl).call(this) : (Ti(Se(this, fr), () => {
        Pt(this, fr, null);
      }), Pt(this, Yr, !1));
    }));
  }, El = function(n) {
    var t = jt, r = Qt, a = vn;
    aa(Se(this, pa)), Zn(Se(this, pa)), Mi(Se(this, pa).ctx);
    try {
      return n();
    } catch (s) {
      return Vc(s), null;
    } finally {
      aa(t), Zn(r), Mi(a);
    }
  }, jl = function() {
    const n = Se(this, ha).pending;
    Se(this, Or) !== null && (Pt(this, Ka, document.createDocumentFragment()), su(Se(this, Or), Se(this, Ka))), Se(this, fr) === null && Pt(this, fr, kr(() => n(Se(this, Br))));
  }, Qs = function(n) {
    var t;
    this.has_pending_snippet() ? (Pt(this, za, Se(this, za) + n), Se(this, za) === 0 && (Pt(this, Yr, !1), Se(this, fr) && Ti(Se(this, fr), () => {
      Pt(this, fr, null);
    }), Se(this, Ka) && (Se(this, Br).before(Se(this, Ka)), Pt(this, Ka, null)))) : this.parent && cn(t = this.parent, Cr, Qs).call(t, n);
  };
  const La = /* @__PURE__ */ new Map();
  function xa(n, t) {
    return { f: 0, v: n, reactions: null, equals: zc, rv: 0, wv: 0 };
  }
  function Fe(n, t) {
    const r = xa(n);
    return uu(r), r;
  }
  function uo(n, t = !1, r = !0) {
    var a, s;
    const o = xa(n);
    return t || (o.equals = $c), Ii && r && vn !== null && vn.l !== null && ((s = (a = vn.l).s) != null ? s : a.s = []).push(o), o;
  }
  function te(n, t, r = !1) {
    return Qt !== null && (!Rr || (Qt.f & oh) !== 0) && zi() && 4325394 & Qt.f && !(zr != null && zr.includes(n)) && (function() {
      throw new Error("https://svelte.dev/e/state_unsafe_mutation");
    })(), Di(n, r ? ut(t) : t);
  }
  function Di(n, t) {
    if (!n.equals(t)) {
      var r = n.v;
      di ? La.set(n, t) : La.set(n, r), n.v = t, ci.ensure().capture(n, r), 2 & n.f && ((n.f & ea) !== 0 && co(n), rr(n, (n.f & Lr) === 0 ? er : li)), n.wv = hu(), Nc(n, ea), !zi() || jt === null || (jt.f & er) === 0 || 96 & jt.f || ($r === null ? (function(a) {
        $r = a;
      })([n]) : $r.push(n));
    }
    return t;
  }
  function vr(n) {
    te(n, n.v + 1);
  }
  function Nc(n, t) {
    var r = n.reactions;
    if (r !== null) for (var a = zi(), s = r.length, o = 0; o < s; o++) {
      var c = r[o], l = c.f;
      if (a || c !== jt) {
        var i = (l & ea) === 0;
        i && rr(c, t), 2 & l ? Nc(c, li) : i && ((l & gl) !== 0 && ra !== null && ra.add(c), ui(c));
      }
    }
  }
  function ut(n) {
    if (typeof n != "object" || n === null || ka in n) return n;
    const t = Kl(n);
    if (t !== wc && t !== lh) return n;
    var r = /* @__PURE__ */ new Map(), a = dl(n), s = Fe(0), o = Nr, c = (l) => {
      if (Nr === o) return l();
      var i = Qt, u = Nr;
      Zn(null), gu(o);
      var g = l();
      return Zn(i), gu(u), g;
    };
    return a && r.set("length", Fe(n.length)), new Proxy(n, { defineProperty(l, i, u) {
      "value" in u && u.configurable !== !1 && u.enumerable !== !1 && u.writable !== !1 || (function() {
        throw new Error("https://svelte.dev/e/state_descriptors_fixed");
      })();
      var g = r.get(i);
      return g === void 0 ? g = c(() => {
        var k = Fe(u.value);
        return r.set(i, k), k;
      }) : te(g, u.value, !0), !0;
    }, deleteProperty(l, i) {
      var u = r.get(i);
      if (u === void 0) {
        if (i in l) {
          const g = c(() => Fe(Nn));
          r.set(i, g), vr(s);
        }
      } else te(u, Nn), vr(s);
      return !0;
    }, get(l, i, u) {
      var g;
      if (i === ka) return n;
      var k = r.get(i), f = i in l;
      if (k !== void 0 || f && !((g = ii(l, i)) != null && g.writable) || (k = c(() => Fe(ut(f ? l[i] : Nn))), r.set(i, k)), k !== void 0) {
        var h = e(k);
        return h === Nn ? void 0 : h;
      }
      return Reflect.get(l, i, u);
    }, getOwnPropertyDescriptor(l, i) {
      var u = Reflect.getOwnPropertyDescriptor(l, i);
      if (u && "value" in u) {
        var g = r.get(i);
        g && (u.value = e(g));
      } else if (u === void 0) {
        var k = r.get(i), f = k == null ? void 0 : k.v;
        if (k !== void 0 && f !== Nn) return { enumerable: !0, configurable: !0, value: f, writable: !0 };
      }
      return u;
    }, has(l, i) {
      var u;
      if (i === ka) return !0;
      var g = r.get(i), k = g !== void 0 && g.v !== Nn || Reflect.has(l, i);
      return (g !== void 0 || jt !== null && (!k || (u = ii(l, i)) != null && u.writable)) && (g === void 0 && (g = c(() => Fe(k ? ut(l[i]) : Nn)), r.set(i, g)), e(g) === Nn) ? !1 : k;
    }, set(l, i, u, g) {
      var k, f = r.get(i), h = i in l;
      if (a && i === "length") for (var p = u; p < f.v; p += 1) {
        var x = r.get(p + "");
        x !== void 0 ? te(x, Nn) : p in l && (x = c(() => Fe(Nn)), r.set(p + "", x));
      }
      f === void 0 ? h && !((k = ii(l, i)) != null && k.writable) || (te(f = c(() => Fe(void 0)), ut(u)), r.set(i, f)) : (h = f.v !== Nn, te(f, c(() => ut(u))));
      var m = Reflect.getOwnPropertyDescriptor(l, i);
      if (m != null && m.set && m.set.call(g, u), !h) {
        if (a && typeof i == "string") {
          var I = r.get("length"), P = Number(i);
          Number.isInteger(P) && P >= I.v && te(I, P + 1);
        }
        vr(s);
      }
      return !0;
    }, ownKeys(l) {
      e(s);
      var i = Reflect.ownKeys(l).filter((k) => {
        var f = r.get(k);
        return f === void 0 || f.v !== Nn;
      });
      for (var [u, g] of r) g.v === Nn || u in l || i.push(u);
      return i;
    }, setPrototypeOf() {
      (function() {
        throw new Error("https://svelte.dev/e/state_prototype_fixed");
      })();
    } });
  }
  function Qc(n) {
    try {
      if (n !== null && typeof n == "object" && ka in n) return n[ka];
    } catch {
    }
    return n;
  }
  function fh(n, t) {
    return Object.is(Qc(n), Qc(t));
  }
  var Wc, Hc, Uc, Zc;
  function go() {
    if (Wc === void 0) {
      Wc = window, Hc = /Firefox/.test(navigator.userAgent);
      var n = Element.prototype, t = Node.prototype, r = Text.prototype;
      Uc = ii(t, "firstChild").get, Zc = ii(t, "nextSibling").get, Pc(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), Pc(r) && (r.__t = void 0);
    }
  }
  function Mr(n = "") {
    return document.createTextNode(n);
  }
  function Qn(n) {
    return Uc.call(n);
  }
  function Er(n) {
    return Zc.call(n);
  }
  function w(n, t) {
    if (!_t) return Qn(n);
    var r = Qn(Mt);
    if (r === null) r = Mt.appendChild(Mr());
    else if (t && r.nodeType !== 3) {
      var a = Mr();
      return r == null || r.before(a), Vn(a), a;
    }
    return Vn(r), r;
  }
  function _e(n, t = !1) {
    if (!_t) {
      var r = Qn(n);
      return r instanceof Comment && r.data === "" ? Er(r) : r;
    }
    if (t && (Mt == null ? void 0 : Mt.nodeType) !== 3) {
      var a = Mr();
      return Mt == null || Mt.before(a), Vn(a), a;
    }
    return Mt;
  }
  function L(n, t = 1, r = !1) {
    let a = _t ? Mt : n;
    for (var s; t--; ) s = a, a = Er(a);
    if (!_t) return a;
    if (r && (a == null ? void 0 : a.nodeType) !== 3) {
      var o = Mr();
      return a === null ? s == null || s.after(o) : a.before(o), Vn(o), o;
    }
    return Vn(a), a;
  }
  function Jc(n) {
    n.textContent = "";
  }
  function vh(n, t) {
    if (t) {
      const r = document.body;
      n.autofocus = !0, Fa(() => {
        document.activeElement === r && n.focus();
      });
    }
  }
  let Yc = !1;
  function Kc() {
    Yc || (Yc = !0, document.addEventListener("reset", (n) => {
      Promise.resolve().then(() => {
        var t;
        if (!n.defaultPrevented) for (const r of n.target.elements) (t = r.__on_r) == null || t.call(r);
      });
    }, { capture: !0 }));
  }
  function is(n) {
    var t = Qt, r = jt;
    Zn(null), aa(null);
    try {
      return n();
    } finally {
      Zn(t), aa(r);
    }
  }
  function Xc(n) {
    jt === null && Qt === null && (function() {
      throw new Error("https://svelte.dev/e/effect_orphan");
    })(), Qt !== null && (Qt.f & Lr) !== 0 && jt === null && (function() {
      throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
    })(), di && (function() {
      throw new Error("https://svelte.dev/e/effect_in_teardown");
    })();
  }
  function jr(n, t, r, a = !0) {
    var s, o = jt;
    o !== null && (o.f & ta) !== 0 && (n |= ta);
    var c = { ctx: vn, deps: null, nodes_start: null, nodes_end: null, f: n | ea, first: null, fn: t, last: null, next: null, parent: o, b: o && o.b, prev: null, teardown: null, transitions: null, wv: 0, ac: null };
    if (r) try {
      os(c), c.f |= no;
    } catch (u) {
      throw En(c), u;
    }
    else t !== null && ui(c);
    if (a) {
      var l = c;
      if (r && l.deps === null && l.teardown === null && l.nodes_start === null && l.first === l.last && (l.f & Cc) === 0 && (l = l.first), l !== null && (l.parent = o, o !== null && (function(u, g) {
        var k = g.last;
        k === null ? g.last = g.first = u : (k.next = u, u.prev = k, g.last = u);
      })(l, o), Qt !== null && 2 & Qt.f && (n & Bc) === 0)) {
        var i = Qt;
        ((s = i.effects) != null ? s : i.effects = []).push(l);
      }
    }
    return c;
  }
  function vl(n) {
    const t = jr(8, null, !1);
    return rr(t, er), t.teardown = n, t;
  }
  function et(n) {
    var t;
    Xc();
    var r = jt.f;
    if (!(!Qt && (r & Xl) !== 0 && (r & no) === 0)) return eu(n);
    var a = vn;
    ((t = a.e) != null ? t : a.e = []).push(n);
  }
  function eu(n) {
    return jr(1048580, n, !1);
  }
  function _r(n) {
    return Xc(), jr(1048584, n, !0);
  }
  function _l(n) {
    return jr(4, n, !1);
  }
  function kl(n, t = 0) {
    return jr(8 | t, n, !0);
  }
  function ke(n, t = [], r = []) {
    Ec(t, r, (a) => {
      jr(8, () => n(...a.map(e)), !0);
    });
  }
  function ya(n, t = 0) {
    return jr(gl | t, n, !0);
  }
  function kr(n, t = !0) {
    return jr(524320, n, !0, t);
  }
  function tu(n) {
    var t = n.teardown;
    if (t !== null) {
      const r = di, a = Qt;
      cu(!0), Zn(null);
      try {
        t.call(null);
      } finally {
        cu(r), Zn(a);
      }
    }
  }
  function nu(n, t = !1) {
    var r = n.first;
    for (n.first = n.last = null; r !== null; ) {
      const s = r.ac;
      s !== null && is(() => {
        s.abort(Ci);
      });
      var a = r.next;
      (r.f & Bc) !== 0 ? r.parent = null : En(r, t), r = a;
    }
  }
  function En(n, t = !0) {
    var r = !1;
    (t || 262144 & n.f) && n.nodes_start !== null && n.nodes_end !== null && (ru(n.nodes_start, n.nodes_end), r = !0), nu(n, t && !r), ss(n, 0), rr(n, Si);
    var a = n.transitions;
    if (a !== null) for (const o of a) o.stop();
    tu(n);
    var s = n.parent;
    s !== null && s.first !== null && au(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes_start = n.nodes_end = n.ac = null;
  }
  function ru(n, t) {
    for (; n !== null; ) {
      var r = n === t ? null : Er(n);
      n.remove(), n = r;
    }
  }
  function au(n) {
    var t = n.parent, r = n.prev, a = n.next;
    r !== null && (r.next = a), a !== null && (a.prev = r), t !== null && (t.first === n && (t.first = a), t.last === n && (t.last = r));
  }
  function Ti(n, t, r = !0) {
    var a = [];
    ho(n, a, !0), iu(a, () => {
      r && En(n), t && t();
    });
  }
  function iu(n, t) {
    var r = n.length;
    if (r > 0) {
      var a = () => --r || t();
      for (var s of n) s.out(a);
    } else t();
  }
  function ho(n, t, r) {
    if ((n.f & ta) === 0) {
      if (n.f ^= ta, n.transitions !== null) for (const o of n.transitions) (o.is_global || r) && t.push(o);
      for (var a = n.first; a !== null; ) {
        var s = a.next;
        ho(a, t, ((a.f & Bi) !== 0 || (a.f & Xl) !== 0) && r), a = s;
      }
    }
  }
  function po(n) {
    lu(n, !0);
  }
  function lu(n, t) {
    if ((n.f & ta) !== 0) {
      n.f ^= ta, (n.f & er) === 0 && (rr(n, ea), ui(n));
      for (var r = n.first; r !== null; ) {
        var a = r.next;
        lu(r, ((r.f & Bi) !== 0 || (r.f & Xl) !== 0) && t), r = a;
      }
      if (n.transitions !== null) for (const s of n.transitions) (s.is_global || t) && s.in();
    }
  }
  function su(n, t) {
    for (var r = n.nodes_start, a = n.nodes_end; r !== null; ) {
      var s = r === a ? null : Er(r);
      t.append(r), r = s;
    }
  }
  let Vi = !1;
  function ou(n) {
    Vi = n;
  }
  let di = !1;
  function cu(n) {
    di = n;
  }
  let Qt = null, Rr = !1;
  function Zn(n) {
    Qt = n;
  }
  let jt = null;
  function aa(n) {
    jt = n;
  }
  let zr = null;
  function uu(n) {
    Qt !== null && (zr === null ? zr = [n] : zr.push(n));
  }
  let nr = null, mr = 0, $r = null, du = 1, ml = 0, Nr = ml;
  function gu(n) {
    Nr = n;
  }
  let Ea = !1;
  function hu() {
    return ++du;
  }
  function ls(n) {
    var t, r, a = n.f;
    if ((a & ea) !== 0) return !0;
    if ((a & li) !== 0) {
      var s = n.deps, o = (a & Lr) !== 0;
      if (s !== null) {
        var c, l, i = (a & to) !== 0, u = o && jt !== null && !Ea, g = s.length;
        if ((i || u) && (jt === null || (jt.f & Si) === 0)) {
          var k = n, f = k.parent;
          for (c = 0; c < g; c++) l = s[c], !i && ((t = l == null ? void 0 : l.reactions) != null && t.includes(k)) || ((r = l.reactions) != null ? r : l.reactions = []).push(k);
          i && (k.f ^= to), u && f !== null && (f.f & Lr) === 0 && (k.f ^= Lr);
        }
        for (c = 0; c < g; c++) if (ls(l = s[c]) && Rc(l), l.wv > n.wv) return !0;
      }
      o && (jt === null || Ea) || rr(n, er);
    }
    return !1;
  }
  function pu(n, t, r = !0) {
    var a = n.reactions;
    if (a !== null && !(zr != null && zr.includes(n))) for (var s = 0; s < a.length; s++) {
      var o = a[s];
      2 & o.f ? pu(o, t, !1) : t === o && (r ? rr(o, ea) : (o.f & er) !== 0 && rr(o, li), ui(o));
    }
  }
  function bu(n) {
    var t, r, a = nr, s = mr, o = $r, c = Qt, l = Ea, i = zr, u = vn, g = Rr, k = Nr, f = n.f;
    nr = null, mr = 0, $r = null, Ea = (f & Lr) !== 0 && (Rr || !Vi || Qt === null), Qt = 96 & f ? null : n, zr = null, Mi(n.ctx), Rr = !1, Nr = ++ml, n.ac !== null && (is(() => {
      n.ac.abort(Ci);
    }), n.ac = null);
    try {
      n.f |= ro;
      var h = (0, n.fn)(), p = n.deps;
      if (nr !== null) {
        var x;
        if (ss(n, mr), p !== null && mr > 0) for (p.length = mr + nr.length, x = 0; x < nr.length; x++) p[mr + x] = nr[x];
        else n.deps = p = nr;
        if (!Ea || 2 & f && n.reactions !== null) for (x = mr; x < p.length; x++) ((r = (t = p[x]).reactions) != null ? r : t.reactions = []).push(n);
      } else p !== null && mr < p.length && (ss(n, mr), p.length = mr);
      if (zi() && $r !== null && !Rr && p !== null && !(6146 & n.f)) for (x = 0; x < $r.length; x++) pu($r[x], n);
      return c !== null && c !== n && (ml++, $r !== null && (o === null ? o = $r : o.push(...$r))), (n.f & si) !== 0 && (n.f ^= si), h;
    } catch (m) {
      return Vc(m);
    } finally {
      n.f ^= ro, nr = a, mr = s, $r = o, Qt = c, Ea = l, zr = i, Mi(u), Rr = g, Nr = k;
    }
  }
  function _h(n, t) {
    let r = t.reactions;
    if (r !== null) {
      var a = ih.call(r, n);
      if (a !== -1) {
        var s = r.length - 1;
        s === 0 ? r = t.reactions = null : (r[a] = r[s], r.pop());
      }
    }
    r === null && 2 & t.f && (nr === null || !nr.includes(t)) && (rr(t, li), 768 & t.f || (t.f ^= to), jc(t), ss(t, 0));
  }
  function ss(n, t) {
    var r = n.deps;
    if (r !== null) for (var a = t; a < r.length; a++) _h(n, r[a]);
  }
  function os(n) {
    var t = n.f;
    if ((t & Si) === 0) {
      rr(n, er);
      var r = jt, a = Vi;
      jt = n, Vi = !0;
      try {
        (t & gl) !== 0 ? (function(o) {
          for (var c = o.first; c !== null; ) {
            var l = c.next;
            (c.f & Xl) === 0 && En(c), c = l;
          }
        })(n) : nu(n), tu(n);
        var s = bu(n);
        n.teardown = typeof s == "function" ? s : null, n.wv = du;
      } finally {
        Vi = a, jt = r;
      }
    }
  }
  async function cs() {
    await Promise.resolve(), v();
  }
  function e(n) {
    var t, r = !!(2 & n.f);
    if (Qt === null || Rr) {
      if (r && n.deps === null && n.effects === null) {
        var a = n, s = a.parent;
        s !== null && (s.f & Lr) === 0 && (a.f ^= Lr);
      }
    } else if (!(jt !== null && (jt.f & Si) !== 0) && !(zr != null && zr.includes(n))) {
      var o = Qt.deps;
      if ((Qt.f & ro) !== 0) n.rv < ml && (n.rv = ml, nr === null && o !== null && o[mr] === n ? mr++ : nr === null ? nr = [n] : Ea && nr.includes(n) || nr.push(n));
      else {
        ((t = Qt.deps) != null ? t : Qt.deps = []).push(n);
        var c = n.reactions;
        c === null ? n.reactions = [Qt] : c.includes(Qt) || c.push(Qt);
      }
    }
    if (di) {
      if (La.has(n)) return La.get(n);
      if (r) {
        var l = (a = n).v;
        return ((a.f & er) === 0 && a.reactions !== null || fu(a)) && (l = co(a)), La.set(a, l), l;
      }
    } else if (r) {
      if (a = n, ur == null ? void 0 : ur.has(a)) return ur.get(a);
      ls(a) && Rc(a);
    }
    if (ur != null && ur.has(n)) return ur.get(n);
    if ((n.f & si) !== 0) throw n.v;
    return n.v;
  }
  function fu(n) {
    if (n.v === Nn) return !0;
    if (n.deps === null) return !1;
    for (const t of n.deps)
      if (La.has(t) || 2 & t.f && fu(t)) return !0;
    return !1;
  }
  function tn(n) {
    var t = Rr;
    try {
      return Rr = !0, n();
    } finally {
      Rr = t;
    }
  }
  const kh = -7169;
  function rr(n, t) {
    n.f = n.f & kh | t;
  }
  function vu(n) {
    if (typeof n == "object" && n && !(n instanceof EventTarget)) {
      if (ka in n) bo(n);
      else if (!Array.isArray(n)) for (let t in n) {
        const r = n[t];
        typeof r == "object" && r && ka in r && bo(r);
      }
    }
  }
  function bo(n, t = /* @__PURE__ */ new Set()) {
    if (!(typeof n != "object" || n === null || n instanceof EventTarget || t.has(n))) {
      t.add(n), n instanceof Date && n.getTime();
      for (let a in n) try {
        bo(n[a], t);
      } catch {
      }
      const r = Kl(n);
      if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
        const a = yc(r);
        for (let s in a) {
          const o = a[s].get;
          if (o) try {
            o.call(n);
          } catch {
          }
        }
      }
    }
  }
  const _u = /* @__PURE__ */ new Set(), fo = /* @__PURE__ */ new Set();
  function vo(n, t, r, a = {}) {
    function s(o) {
      if (a.capture || xl.call(t, o), !o.cancelBubble) return is(() => r == null ? void 0 : r.call(this, o));
    }
    return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? Fa(() => {
      t.addEventListener(n, s, a);
    }) : t.addEventListener(n, s, a), s;
  }
  function us(n, t, r, a, s) {
    var o = { capture: a, passive: s }, c = vo(n, t, r, o);
    (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && vl(() => {
      t.removeEventListener(n, c, o);
    });
  }
  function jn(n) {
    for (var t = 0; t < n.length; t++) _u.add(n[t]);
    for (var r of fo) r(n);
  }
  let ku = null;
  function xl(n) {
    var t, r = this, a = r.ownerDocument, s = n.type, o = ((t = n.composedPath) == null ? void 0 : t.call(n)) || [], c = o[0] || n.target;
    ku = n;
    var l = 0, i = ku === n && n.__root;
    if (i) {
      var u = o.indexOf(i);
      if (u !== -1 && (r === document || r === window)) return void (n.__root = r);
      var g = o.indexOf(r);
      if (g === -1) return;
      u <= g && (l = u);
    }
    if ((c = o[l] || n.target) !== r) {
      ai(n, "currentTarget", { configurable: !0, get: () => c || a });
      var k = Qt, f = jt;
      Zn(null), aa(null);
      try {
        for (var h, p = []; c !== null; ) {
          var x = c.assignedSlot || c.parentNode || c.host || null;
          try {
            var m = c["__" + s];
            if (m != null && (!c.disabled || n.target === c)) if (dl(m)) {
              var [I, ...P] = m;
              I.apply(c, [n, ...P]);
            } else m.call(c, n);
          } catch (A) {
            h ? p.push(A) : h = A;
          }
          if (n.cancelBubble || x === r || x === null) break;
          c = x;
        }
        if (h) {
          for (let A of p) queueMicrotask(() => {
            throw A;
          });
          throw h;
        }
      } finally {
        n.__root = r, delete n.currentTarget, Zn(k), aa(f);
      }
    }
  }
  function _o(n) {
    var t = document.createElement("template");
    return t.innerHTML = n.replaceAll("<!>", "<!---->"), t.content;
  }
  function dr(n, t) {
    var r = jt;
    r.nodes_start === null && (r.nodes_start = n, r.nodes_end = t);
  }
  function $(n, t) {
    var r, a = !!(1 & t), s = !!(2 & t), o = !n.startsWith("<!>");
    return () => {
      if (_t) return dr(Mt, null), Mt;
      r === void 0 && (r = _o(o ? n : "<!>" + n), a || (r = Qn(r)));
      var c = s || Hc ? document.importNode(r, !0) : r.cloneNode(!0);
      return a ? dr(Qn(c), c.lastChild) : dr(c, c), c;
    };
  }
  function mh(n, t, r = "svg") {
    var a, s = !n.startsWith("<!>"), o = !!(1 & t), c = `<${r}>${s ? n : "<!>" + n}</${r}>`;
    return () => {
      if (_t) return dr(Mt, null), Mt;
      if (!a) {
        var l = Qn(_o(c));
        if (o) for (a = document.createDocumentFragment(); Qn(l); ) a.appendChild(Qn(l));
        else a = Qn(l);
      }
      var i = a.cloneNode(!0);
      return o ? dr(Qn(i), i.lastChild) : dr(i, i), i;
    };
  }
  function Gn(n, t) {
    return mh(n, t, "svg");
  }
  function Jn(n = "") {
    if (!_t) {
      var t = Mr(n + "");
      return dr(t, t), t;
    }
    var r = Mt;
    return r.nodeType !== 3 && (r.before(r = Mr()), Vn(r)), dr(r, r), r;
  }
  function ze() {
    if (_t) return dr(Mt, null), Mt;
    var n = document.createDocumentFragment(), t = document.createComment(""), r = Mr();
    return n.append(t, r), dr(t, r), n;
  }
  function b(n, t) {
    if (_t) return jt.nodes_end = Mt, void Ir();
    n !== null && n.before(t);
  }
  function xh(n) {
    return n.endsWith("capture") && n !== "gotpointercapture" && n !== "lostpointercapture";
  }
  const yh = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];
  function wh(n) {
    return yh.includes(n);
  }
  const Ph = { formnovalidate: "formNoValidate", ismap: "isMap", nomodule: "noModule", playsinline: "playsInline", readonly: "readOnly", defaultvalue: "defaultValue", defaultchecked: "defaultChecked", srcobject: "srcObject", novalidate: "noValidate", allowfullscreen: "allowFullscreen", disablepictureinpicture: "disablePictureInPicture", disableremoteplayback: "disableRemotePlayback" };
  function Sh(n) {
    var t;
    return n = n.toLowerCase(), (t = Ph[n]) != null ? t : n;
  }
  const Bh = ["touchstart", "touchmove"];
  function Ch(n) {
    return Bh.includes(n);
  }
  const Ih = ["textarea", "script", "style", "title"];
  function pt(n, t) {
    var r, a = t == null ? "" : typeof t == "object" ? t + "" : t;
    a !== ((r = n.__t) != null ? r : n.__t = n.nodeValue) && (n.__t = a, n.nodeValue = a + "");
  }
  function mu(n, t) {
    return xu(n, t);
  }
  function Mh(n, t) {
    var r;
    go(), t.intro = (r = t.intro) != null && r;
    const a = t.target, s = _t, o = Mt;
    try {
      for (var c = Qn(a); c && (c.nodeType !== 8 || c.data !== "["); ) c = Er(c);
      if (!c) throw ri;
      tr(!0), Vn(c);
      const l = xu(n, { ...t, anchor: c });
      return tr(!1), l;
    } catch (l) {
      if (l instanceof Error && l.message.split(`
`).some((i) => i.startsWith("https://svelte.dev/e/"))) throw l;
      return l !== ri && console.warn("Failed to hydrate: ", l), t.recover === !1 && (function() {
        throw new Error("https://svelte.dev/e/hydration_failed");
      })(), go(), Jc(a), tr(!1), mu(n, t);
    } finally {
      tr(s), Vn(o);
    }
  }
  const Ai = /* @__PURE__ */ new Map();
  function xu(n, { target: t, anchor: r, props: a = {}, events: s, context: o, intro: c = !0 }) {
    go();
    var l = /* @__PURE__ */ new Set(), i = (k) => {
      for (var f = 0; f < k.length; f++) {
        var h = k[f];
        if (!l.has(h)) {
          l.add(h);
          var p = Ch(h);
          t.addEventListener(h, xl, { passive: p });
          var x = Ai.get(h);
          x === void 0 ? (document.addEventListener(h, xl, { passive: p }), Ai.set(h, 1)) : Ai.set(h, x + 1);
        }
      }
    };
    i(Ks(_u)), fo.add(i);
    var u = void 0, g = (function(k) {
      ci.ensure();
      const f = jr(524352, k, !0);
      return (h = {}) => new Promise((p) => {
        h.outro ? Ti(f, () => {
          En(f), p(void 0);
        }) : (En(f), p(void 0));
      });
    })(() => {
      var k = r != null ? r : t.appendChild(Mr());
      return (function(f, h, p) {
        new ph(f, h, p);
      })(k, { pending: () => {
      } }, (f) => {
        if (o && (rt({}), vn.c = o), s && (a.$$events = s), _t && dr(f, null), u = n(f, a) || {}, _t && (jt.nodes_end = Mt, Mt === null || Mt.nodeType !== 8 || Mt.data !== "]")) throw hl(), ri;
        o && at();
      }), () => {
        var f;
        for (var h of l) {
          t.removeEventListener(h, xl);
          var p = Ai.get(h);
          --p === 0 ? (document.removeEventListener(h, xl), Ai.delete(h)) : Ai.set(h, p);
        }
        fo.delete(i), k !== r && ((f = k.parentNode) == null || f.removeChild(k));
      };
    });
    return ko.set(u, g), u;
  }
  let ko = /* @__PURE__ */ new WeakMap();
  class yl {
    constructor(t, r = !0) {
      Pn(this, "anchor"), xt(this, $a, /* @__PURE__ */ new Map()), xt(this, Da, /* @__PURE__ */ new Map()), xt(this, Ta, /* @__PURE__ */ new Map()), xt(this, Rl, !0), xt(this, Ws, () => {
        var a = _n;
        if (Se(this, $a).has(a)) {
          var s = Se(this, $a).get(a), o = Se(this, Da).get(s);
          if (o) po(o);
          else {
            var c = Se(this, Ta).get(s);
            c && (Se(this, Da).set(s, c.effect), Se(this, Ta).delete(s), c.fragment.lastChild.remove(), this.anchor.before(c.fragment), o = c.effect);
          }
          for (const [l, i] of Se(this, $a)) {
            if (Se(this, $a).delete(l), l === a) break;
            const u = Se(this, Ta).get(i);
            u && (En(u.effect), Se(this, Ta).delete(i));
          }
          for (const [l, i] of Se(this, Da)) {
            if (l === s) continue;
            const u = () => {
              if (Array.from(Se(this, $a).values()).includes(l)) {
                var g = document.createDocumentFragment();
                su(i, g), g.append(Mr()), Se(this, Ta).set(l, { effect: i, fragment: g });
              } else En(i);
              Se(this, Da).delete(l);
            };
            Se(this, Rl) || !o ? Ti(i, u, !1) : u();
          }
        }
      }), this.anchor = t, Pt(this, Rl, r);
    }
    ensure(t, r) {
      var a = _n;
      !r || Se(this, Da).has(t) || Se(this, Ta).has(t) || Se(this, Da).set(t, kr(() => r(this.anchor))), Se(this, $a).set(a, t), _t && (this.anchor = Mt), Se(this, Ws).call(this);
    }
  }
  function ds(n, t, ...r) {
    var a = new yl(n);
    ya(() => {
      var s;
      const o = (s = t()) != null ? s : null;
      a.ensure(o, o && ((c) => o(c, ...r)));
    }, Bi);
  }
  function ja(n) {
    var t, r, a;
    vn === null && ao(), Ii && vn.l !== null ? (t = vn, a = t.l, (r = a.u) != null ? r : a.u = { a: [], b: [], m: [] }).m.push(n) : et(() => {
      const s = tn(n);
      if (typeof s == "function") return s;
    });
  }
  function O(n, t, r = !1) {
    _t && Ir();
    var a = new yl(n);
    function s(o, c) {
      if (_t && o === (Mc(n) === Jl)) {
        var l = es();
        return Vn(l), a.anchor = l, tr(!1), a.ensure(o, c), void tr(!0);
      }
      a.ensure(o, c);
    }
    ya(() => {
      var o = !1;
      t((c, l = !0) => {
        o = !0, s(l, c);
      }), o || s(!1, null);
    }, r ? Bi : 0);
  }
  function lt(n, t, r) {
    _t && Ir();
    var a = new yl(n), s = !zi();
    ya(() => {
      var o = t();
      s && o !== null && typeof o == "object" && (o = {}), a.ensure(o, r);
    });
  }
  function Qr(n, t) {
    return t;
  }
  function Gt(n, t, r, a, s, o = null) {
    var c = n, l = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
    if (4 & t) {
      var i = n;
      c = _t ? Vn(Qn(i)) : i.appendChild(Mr());
    }
    _t && Ir();
    var u, g, k = null, f = !1, h = /* @__PURE__ */ new Map(), p = as(() => {
      var m = r();
      return dl(m) ? m : m == null ? [] : Ks(m);
    });
    function x() {
      (function(m, I, P, A, j, D, Q, Z, T) {
        var J, z, G, ne, X, B, S, C, F, U, H = !!(8 & Q), se = !!(3 & Q), E = I.length, q = P.items, ie = P.first, ue = ie, W = null, ae = [], he = [];
        if (H) for (U = 0; U < E; U += 1) C = Z(S = I[U], U), (F = q.get(C)) !== void 0 && ((J = F.a) == null || J.measure(), (B != null ? B : B = /* @__PURE__ */ new Set()).add(F));
        for (U = 0; U < E; U += 1) if (C = Z(S = I[U], U), (F = q.get(C)) !== void 0) {
          if (se && zh(F, S, U, Q), (F.e.f & ta) !== 0 && (po(F.e), H && ((z = F.a) == null || z.unfix(), (B != null ? B : B = /* @__PURE__ */ new Set()).delete(F))), F !== ue) {
            if (X !== void 0 && X.has(F)) {
              if (ae.length < he.length) {
                var V, N = he[0];
                W = N.prev;
                var de = ae[0], pe = ae[ae.length - 1];
                for (V = 0; V < ae.length; V += 1) mo(ae[V], N, j);
                for (V = 0; V < he.length; V += 1) X.delete(he[V]);
                ia(P, de.prev, pe.next), ia(P, W, de), ia(P, pe, N), ue = N, W = pe, U -= 1, ae = [], he = [];
              } else X.delete(F), mo(F, ue, j), ia(P, F.prev, F.next), ia(P, F, W === null ? P.first : W.next), ia(P, W, F), W = F;
              continue;
            }
            for (ae = [], he = []; ue !== null && ue.k !== C; ) (ue.e.f & ta) === 0 && (X != null ? X : X = /* @__PURE__ */ new Set()).add(ue), he.push(ue), ue = ue.next;
            if (ue === null) continue;
            F = ue;
          }
          ae.push(F), W = F, ue = F.next;
        } else {
          var re = A.get(C);
          if (re !== void 0) {
            A.delete(C), q.set(C, re);
            var R = W ? W.next : ue;
            ia(P, W, re), ia(P, re, R), mo(re, R, j), W = re;
          } else
            W = yu(ue ? ue.e.nodes_start : j, P, W, W === null ? P.first : W.next, S, C, U, D, Q, T);
          q.set(C, W), ae = [], he = [], ue = W.next;
        }
        if (ue !== null || X !== void 0) {
          for (var ee = X === void 0 ? [] : Ks(X); ue !== null; ) (ue.e.f & ta) === 0 && ee.push(ue), ue = ue.next;
          var ce = ee.length;
          if (ce > 0) {
            var ve = 4 & Q && E === 0 ? j : null;
            if (H) {
              for (U = 0; U < ce; U += 1) (G = ee[U].a) == null || G.measure();
              for (U = 0; U < ce; U += 1) (ne = ee[U].a) == null || ne.fix();
            }
            (function(Be, be, K) {
              for (var Y = Be.items, ge = [], we = be.length, me = 0; me < we; me++) ho(be[me].e, ge, !0);
              var Pe = we > 0 && ge.length === 0 && K !== null;
              if (Pe) {
                var Ge = K.parentNode;
                Jc(Ge), Ge.append(K), Y.clear(), ia(Be, be[0].prev, be[we - 1].next);
              }
              iu(ge, () => {
                for (var Ze = 0; Ze < we; Ze++) {
                  var Ve = be[Ze];
                  Pe || (Y.delete(Ve.k), ia(Be, Ve.prev, Ve.next)), En(Ve.e, !Pe);
                }
              });
            })(P, ee, ve);
          }
        }
        H && Fa(() => {
          var Be;
          if (B !== void 0) for (F of B) (Be = F.a) == null || Be.apply();
        });
        for (var oe of (m.first = P.first && P.first.e, m.last = W && W.e, A.values())) En(oe.e);
        A.clear();
      })(g, u, l, h, c, s, t, a, r), o !== null && (u.length === 0 ? k ? po(k) : k = kr(() => o(c)) : k !== null && Ti(k, () => {
        k = null;
      }));
    }
    ya(() => {
      g != null || (g = jt);
      var m = (u = e(p)).length;
      if (f && m === 0) return;
      f = m === 0;
      let I = !1;
      if (_t && Mc(c) === Jl != (m === 0) && (Vn(c = es()), tr(!1), I = !0), _t) {
        for (var P, A = null, j = 0; j < m; j++) {
          if (Mt.nodeType === 8 && Mt.data === "]") {
            c = Mt, I = !0, tr(!1);
            break;
          }
          var D = u[j], Q = a(D, j);
          P = yu(Mt, l, A, null, D, Q, j, s, t, r), l.items.set(Q, P), A = P;
        }
        m > 0 && Vn(es());
      }
      _t ? m === 0 && o && (k = kr(() => o(c))) : x(), I && tr(!0), e(p);
    }), _t && (c = Mt);
  }
  function zh(n, t, r, a) {
    1 & a && Di(n.v, t), 2 & a ? Di(n.i, r) : n.i = r;
  }
  function yu(n, t, r, a, s, o, c, l, i, u, g) {
    var k = 1 & i ? 16 & i ? xa(s) : uo(s, !1, !1) : s, f = 2 & i ? xa(c) : c, h = { i: f, v: k, k: o, a: null, e: null, prev: r, next: a };
    try {
      return n === null && document.createDocumentFragment().append(n = Mr()), h.e = kr(() => l(n, k, f, u), _t), h.e.prev = r && r.e, h.e.next = a && a.e, r === null ? g || (t.first = h) : (r.next = h, r.e.next = h.e), a !== null && (a.prev = h, a.e.prev = h.e), h;
    } finally {
    }
  }
  function mo(n, t, r) {
    for (var a = n.next ? n.next.e.nodes_start : r, s = t ? t.e.nodes_start : r, o = n.e.nodes_start; o !== null && o !== a; ) {
      var c = Er(o);
      s.before(o), o = c;
    }
  }
  function ia(n, t, r) {
    t === null ? n.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
  }
  function je(n, t, r = !1, a = !1, s = !1) {
    var o = n, c = "";
    ke(() => {
      var l, i = jt;
      if (c !== (c = (l = t()) != null ? l : "")) {
        if (i.nodes_start !== null && (ru(i.nodes_start, i.nodes_end), i.nodes_start = i.nodes_end = null), c !== "") {
          if (_t) {
            Mt.data;
            for (var u = Ir(), g = u; u !== null && (u.nodeType !== 8 || u.data !== ""); ) g = u, u = Er(u);
            if (u === null) throw hl(), ri;
            return dr(Mt, g), void (o = Vn(u));
          }
          var k = c + "";
          r ? k = `<svg>${k}</svg>` : a && (k = `<math>${k}</math>`);
          var f = _o(k);
          if ((r || a) && (f = Qn(f)), dr(Qn(f), f.lastChild), r || a) for (; Qn(f); ) o.before(Qn(f));
          else o.before(f);
        }
      } else _t && Ir();
    });
  }
  function wu(n, t, r, a, s) {
    var o;
    _t && Ir();
    var c = (o = t.$$slots) == null ? void 0 : o[r], l = !1;
    c === !0 && (c = t.children, l = !0), c === void 0 || c(n, l ? () => a : a);
  }
  function Pu(n, t, r) {
    _t && Ir();
    var a = new yl(n);
    ya(() => {
      var s, o = (s = t()) != null ? s : null;
      a.ensure(o, o && ((c) => r(c, o)));
    }, Bi);
  }
  function Su(n, t, r, a, s, o) {
    let c = _t;
    _t && Ir();
    var l = null;
    _t && Mt.nodeType === 1 && (l = Mt, Ir());
    var i = _t ? Mt : n, u = new yl(i, !1);
    ya(() => {
      const g = t() || null;
      var k = g === "svg" ? "http://www.w3.org/2000/svg" : null;
      if (g !== null) return u.ensure(g, (f) => {
        if (g) {
          if (dr(l = _t ? l : k ? document.createElementNS(k, g) : document.createElement(g), l), a) {
            _t && (p = g, Ih.includes(p)) && l.append(document.createComment(""));
            var h = _t ? Qn(l) : l.appendChild(Mr());
            _t && (h === null ? tr(!1) : Vn(h)), a(l, h);
          }
          jt.nodes_end = l, f.before(l);
        }
        var p;
        _t && Vn(f);
      }), () => {
      };
      u.ensure(null, null);
    }, Bi), vl(() => {
    }), c && (tr(!0), Vn(i));
  }
  function xo(n, t, r) {
    _l(() => {
      var a = tn(() => t(n, r == null ? void 0 : r()) || {});
      if (r && (a != null && a.update)) {
        var s = !1, o = {};
        kl(() => {
          var c = r();
          vu(c), s && io(o, c) && (o = c, a.update(c));
        }), s = !0;
      }
      if (a != null && a.destroy) return () => a.destroy();
    });
  }
  function $h(n, t) {
    var r, a = void 0;
    ya(() => {
      a !== (a = t()) && (r && (En(r), r = null), a && (r = kr(() => {
        _l(() => a(n));
      })));
    });
  }
  function Bu(n) {
    var t, r, a = "";
    if (typeof n == "string" || typeof n == "number") a += n;
    else if (typeof n == "object") if (Array.isArray(n)) {
      var s = n.length;
      for (t = 0; t < s; t++) n[t] && (r = Bu(n[t])) && (a && (a += " "), a += r);
    } else for (r in n) n[r] && (a && (a += " "), a += r);
    return a;
  }
  function qi(n) {
    return typeof n == "object" ? (function() {
      for (var t, r, a = 0, s = "", o = arguments.length; a < o; a++) (t = arguments[a]) && (r = Bu(t)) && (s && (s += " "), s += r);
      return s;
    })(n) : n != null ? n : "";
  }
  $a = /* @__PURE__ */ new WeakMap(), Da = /* @__PURE__ */ new WeakMap(), Ta = /* @__PURE__ */ new WeakMap(), Rl = /* @__PURE__ */ new WeakMap(), Ws = /* @__PURE__ */ new WeakMap();
  const Cu = [...` 	
\r\f \v\uFEFF`];
  function Iu(n, t = !1) {
    var r = t ? " !important;" : ";", a = "";
    for (var s in n) {
      var o = n[s];
      o != null && o !== "" && (a += " " + s + ": " + o + r);
    }
    return a;
  }
  function yo(n) {
    return n[0] !== "-" || n[1] !== "-" ? n.toLowerCase() : n;
  }
  function Rt(n, t, r, a, s, o) {
    var c = n.__className;
    if (_t || c !== r || c === void 0) {
      var l = (function(g, k, f) {
        var h = g == null ? "" : "" + g;
        if (k && (h = h ? h + " " + k : k), f) {
          for (var p in f) if (f[p]) h = h ? h + " " + p : p;
          else if (h.length) for (var x = p.length, m = 0; (m = h.indexOf(p, m)) >= 0; ) {
            var I = m + x;
            m !== 0 && !Cu.includes(h[m - 1]) || I !== h.length && !Cu.includes(h[I]) ? m = I : h = (m === 0 ? "" : h.substring(0, m)) + h.substring(I + 1);
          }
        }
        return h === "" ? null : h;
      })(r, a, o);
      _t && l === n.getAttribute("class") || (l == null ? n.removeAttribute("class") : t ? n.className = l : n.setAttribute("class", l)), n.__className = r;
    } else if (o && s !== o) for (var i in o) {
      var u = !!o[i];
      s != null && u === !!s[i] || n.classList.toggle(i, u);
    }
    return o;
  }
  function wo(n, t = {}, r, a) {
    for (var s in r) {
      var o = r[s];
      t[s] !== o && (r[s] == null ? n.style.removeProperty(s) : n.style.setProperty(s, o, a));
    }
  }
  function Et(n, t, r, a) {
    var s = n.__style;
    if (_t || s !== t) {
      var o = (function(c, l) {
        if (l) {
          var i, u, g = "";
          if (Array.isArray(l) ? (i = l[0], u = l[1]) : i = l, c) {
            c = String(c).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
            var k = !1, f = 0, h = !1, p = [];
            i && p.push(...Object.keys(i).map(yo)), u && p.push(...Object.keys(u).map(yo));
            var x = 0, m = -1;
            const j = c.length;
            for (var I = 0; I < j; I++) {
              var P = c[I];
              if (h ? P === "/" && c[I - 1] === "*" && (h = !1) : k ? k === P && (k = !1) : P === "/" && c[I + 1] === "*" ? h = !0 : P === '"' || P === "'" ? k = P : P === "(" ? f++ : P === ")" && f--, !h && k === !1 && f === 0) {
                if (P === ":" && m === -1) m = I;
                else if (P === ";" || I === j - 1) {
                  if (m !== -1) {
                    var A = yo(c.substring(x, m).trim());
                    p.includes(A) || (P !== ";" && I++, g += " " + c.substring(x, I).trim() + ";");
                  }
                  x = I + 1, m = -1;
                }
              }
            }
          }
          return i && (g += Iu(i)), u && (g += Iu(u, !0)), (g = g.trim()) === "" ? null : g;
        }
        return c == null ? null : String(c);
      })(t, a);
      _t && o === n.getAttribute("style") || (o == null ? n.removeAttribute("style") : n.style.cssText = o), n.__style = t;
    } else a && (Array.isArray(a) ? (wo(n, r == null ? void 0 : r[0], a[0]), wo(n, r == null ? void 0 : r[1], a[1], "important")) : wo(n, r, a));
    return a;
  }
  function wl(n, t, r = !1) {
    if (n.multiple) {
      if (t == null) return;
      if (!dl(t)) return void console.warn("https://svelte.dev/e/select_multiple_invalid_value");
      for (var a of n.options) a.selected = t.includes(Mu(a));
    } else {
      for (a of n.options)
        if (fh(Mu(a), t)) return void (a.selected = !0);
      r && t === void 0 || (n.selectedIndex = -1);
    }
  }
  function Po(n) {
    var t = new MutationObserver(() => {
      wl(n, n.__value);
    });
    t.observe(n, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["value"] }), vl(() => {
      t.disconnect();
    });
  }
  function Mu(n) {
    return "__value" in n ? n.__value : n.value;
  }
  const Gi = Symbol("class"), Oi = Symbol("style"), zu = Symbol("is custom element"), $u = Symbol("is html");
  function wa(n) {
    if (_t) {
      var t = !1, r = () => {
        if (!t) {
          if (t = !0, n.hasAttribute("value")) {
            var a = n.value;
            Ie(n, "value", null), n.value = a;
          }
          if (n.hasAttribute("checked")) {
            var s = n.checked;
            Ie(n, "checked", null), n.checked = s;
          }
        }
      };
      n.__on_r = r, Fa(r), Kc();
    }
  }
  function gi(n, t) {
    var r = gs(n);
    r.value !== (r.value = t != null ? t : void 0) && (n.value !== t || t === 0 && n.nodeName === "PROGRESS") && (n.value = t != null ? t : "");
  }
  function Pl(n, t) {
    var r = gs(n);
    r.checked !== (r.checked = t != null ? t : void 0) && (n.checked = t);
  }
  function Du(n, t) {
    t ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
  }
  function Ie(n, t, r, a) {
    var s = gs(n);
    _t && (s[t] = n.getAttribute(t), t === "src" || t === "srcset" || t === "href" && n.nodeName === "LINK") || s[t] !== (s[t] = r) && (t === "loading" && (n[ch] = r), r == null ? n.removeAttribute(t) : typeof r != "string" && Au(n).includes(t) ? n[t] = r : n.setAttribute(t, r));
  }
  function Tu(n, t, r = [], a = [], s, o = !1, c = !1) {
    Ec(r, a, (l) => {
      var i = void 0, u = {}, g = n.nodeName === "SELECT", k = !1;
      if (ya(() => {
        var h = t(...l.map(e)), p = (function(m, I, P, A, j = !1) {
          if (_t && j && m.tagName === "INPUT") {
            var D = m;
            (D.type === "checkbox" ? "defaultChecked" : "defaultValue") in P || wa(D);
          }
          var Q = gs(m), Z = Q[zu], T = !Q[$u];
          let J = _t && Z;
          J && tr(!1);
          var z = I || {}, G = m.tagName === "OPTION";
          for (var ne in I) ne in P || (P[ne] = null);
          P.class ? P.class = qi(P.class) : P[Gi] && (P.class = null), P[Oi] && (P.style != null || (P.style = null));
          var X = Au(m);
          for (const H in P) {
            let se = P[H];
            if (G && H === "value" && se == null) m.value = m.__value = "", z[H] = se;
            else if (H !== "class") if (H !== "style") {
              var B = z[H];
              if (se !== B || se === void 0 && m.hasAttribute(H)) {
                z[H] = se;
                var S = H[0] + H[1];
                if (S !== "$$") if (S === "on") {
                  const E = {}, q = "$$" + H;
                  let ie = H.slice(2);
                  var C = wh(ie);
                  if (xh(ie) && (ie = ie.slice(0, -7), E.capture = !0), !C && B) {
                    if (se != null) continue;
                    m.removeEventListener(ie, z[q], E), z[q] = null;
                  }
                  if (se != null) if (C) m[`__${ie}`] = se, jn([ie]);
                  else {
                    let ue = function(W) {
                      z[H].call(this, W);
                    };
                    z[q] = vo(ie, m, ue, E);
                  }
                  else C && (m[`__${ie}`] = void 0);
                } else if (H === "style") Ie(m, H, se);
                else if (H === "autofocus") vh(m, !!se);
                else if (Z || H !== "__value" && (H !== "value" || se == null)) if (H === "selected" && G) Du(m, se);
                else {
                  var F = H;
                  T || (F = Sh(F));
                  var U = F === "defaultValue" || F === "defaultChecked";
                  if (se != null || Z || U) U || X.includes(F) && (Z || typeof se != "string") ? (m[F] = se, F in Q && (Q[F] = Nn)) : typeof se != "function" && Ie(m, F, se);
                  else if (Q[H] = null, F === "value" || F === "checked") {
                    let E = m;
                    const q = I === void 0;
                    if (F === "value") {
                      let ie = E.defaultValue;
                      E.removeAttribute(F), E.defaultValue = ie, E.value = E.__value = q ? ie : null;
                    } else {
                      let ie = E.defaultChecked;
                      E.removeAttribute(F), E.defaultChecked = ie, E.checked = !!q && ie;
                    }
                  } else m.removeAttribute(H);
                }
                else m.value = m.__value = se;
              }
            } else Et(m, se, I == null ? void 0 : I[Oi], P[Oi]), z[H] = se, z[Oi] = P[Oi];
            else Rt(m, m.namespaceURI === "http://www.w3.org/1999/xhtml", se, A, I == null ? void 0 : I[Gi], P[Gi]), z[H] = se, z[Gi] = P[Gi];
          }
          return J && tr(!0), z;
        })(n, i, h, s, o, c);
        k && g && "value" in h && wl(n, h.value);
        for (let m of Object.getOwnPropertySymbols(u)) h[m] || En(u[m]);
        for (let m of Object.getOwnPropertySymbols(h)) {
          var x = h[m];
          m.description !== "@attach" || i && x === i[m] || (u[m] && En(u[m]), u[m] = kr(() => $h(n, () => x))), p[m] = x;
        }
        i = p;
      }), g) {
        var f = n;
        _l(() => {
          wl(f, i.value, !0), Po(f);
        });
      }
      k = !0;
    });
  }
  function gs(n) {
    var t;
    return (t = n.__attributes) != null ? t : n.__attributes = { [zu]: n.nodeName.includes("-"), [$u]: n.namespaceURI === "http://www.w3.org/1999/xhtml" };
  }
  var Vu = /* @__PURE__ */ new Map();
  function Au(n) {
    var t, r = n.getAttribute("is") || n.nodeName, a = Vu.get(r);
    if (a) return a;
    Vu.set(r, a = []);
    for (var s = n, o = Element.prototype; o !== s; ) {
      for (var c in t = yc(s)) t[c].set && a.push(c);
      s = Kl(s);
    }
    return a;
  }
  function Dh(n, t, r = t) {
    var a = /* @__PURE__ */ new WeakSet();
    (function(s, o, c, l = c) {
      s.addEventListener(o, () => is(c));
      const i = s.__on_r;
      s.__on_r = i ? () => {
        i(), l(!0);
      } : () => l(!0), Kc();
    })(n, "input", async (s) => {
      var o = s ? n.defaultValue : n.value;
      if (o = So(n) ? Bo(o) : o, r(o), _n !== null && a.add(_n), await cs(), o !== (o = t())) {
        var c = n.selectionStart, l = n.selectionEnd, i = n.value.length;
        if (n.value = o != null ? o : "", l !== null) {
          var u = n.value.length;
          c === l && l === i && u > i ? (n.selectionStart = u, n.selectionEnd = u) : (n.selectionStart = c, n.selectionEnd = Math.min(l, u));
        }
      }
    }), (_t && n.defaultValue !== n.value || tn(t) == null && n.value) && (r(So(n) ? Bo(n.value) : n.value), _n !== null && a.add(_n)), kl(() => {
      var s = t();
      if (n === document.activeElement) {
        var o = pl != null ? pl : _n;
        if (a.has(o)) return;
      }
      So(n) && s === Bo(n.value) || (n.type !== "date" || s || n.value) && s !== n.value && (n.value = s != null ? s : "");
    });
  }
  function So(n) {
    var t = n.type;
    return t === "number" || t === "range";
  }
  function Bo(n) {
    return n === "" ? null : +n;
  }
  const Co = class {
    constructor(n) {
      xt(this, Hs), xt(this, ti, /* @__PURE__ */ new WeakMap()), xt(this, sl), xt(this, Nl), Pt(this, Nl, n);
    }
    observe(n, t) {
      var r = Se(this, ti).get(n) || /* @__PURE__ */ new Set();
      return r.add(t), Se(this, ti).set(n, r), cn(this, Hs, _c).call(this).observe(n, Se(this, Nl)), () => {
        var a = Se(this, ti).get(n);
        a.delete(t), a.size === 0 && (Se(this, ti).delete(n), Se(this, sl).unobserve(n));
      };
    }
  };
  ti = /* @__PURE__ */ new WeakMap(), sl = /* @__PURE__ */ new WeakMap(), Nl = /* @__PURE__ */ new WeakMap(), Hs = /* @__PURE__ */ new WeakSet(), _c = function() {
    var n;
    return (n = Se(this, sl)) != null ? n : Pt(this, sl, new ResizeObserver((t) => {
      for (var r of t) for (var a of (Co.entries.set(r.target, r), Se(this, ti).get(r.target) || [])) a(r);
    }));
  }, Pn(Co, "entries", /* @__PURE__ */ new WeakMap());
  var Th = new Co({ box: "border-box" });
  function hs(n, t, r) {
    var a = Th.observe(n, () => r(n[t]));
    _l(() => (tn(() => r(n[t])), a));
  }
  function qu(n, t) {
    return n === t || (n == null ? void 0 : n[ka]) === t;
  }
  function Fi(n = {}, t, r, a) {
    return _l(() => {
      var s, o;
      return kl(() => {
        s = o, o = [], tn(() => {
          n !== r(...o) && (t(n, ...o), s && qu(r(...s), n) && t(null, ...s));
        });
      }), () => {
        Fa(() => {
          o && qu(r(...o), n) && t(null, ...o);
        });
      };
    }), n;
  }
  function Gu(n, t) {
    if (n.l.s) for (const r of n.l.s) e(r);
    t();
  }
  function Ou(n, t, r) {
    if (n == null) return t(void 0), Xr;
    const a = tn(() => n.subscribe(t, r));
    return a.unsubscribe ? () => a.unsubscribe() : a;
  }
  const Li = [];
  function Wr(n, t = Xr) {
    let r = null;
    const a = /* @__PURE__ */ new Set();
    function s(c) {
      if (io(n, c) && (n = c, r)) {
        const l = !Li.length;
        for (const i of a) i[1](), Li.push(i, n);
        if (l) {
          for (let i = 0; i < Li.length; i += 2) Li[i][0](Li[i + 1]);
          Li.length = 0;
        }
      }
    }
    function o(c) {
      s(c(n));
    }
    return { set: s, update: o, subscribe: function(c, l = Xr) {
      const i = [c, l];
      return a.add(i), a.size === 1 && (r = t(s, o) || Xr), c(n), () => {
        a.delete(i), a.size === 0 && r && (r(), r = null);
      };
    } };
  }
  let Fu, ps = !1, Io = Symbol();
  function Te(n, t, r) {
    var a;
    const s = (a = r[t]) != null ? a : r[t] = { store: null, source: uo(void 0), unsubscribe: Xr };
    if (s.store !== n && !(Io in r)) if (s.unsubscribe(), s.store = n != null ? n : null, n == null) s.source.v = void 0, s.unsubscribe = Xr;
    else {
      var o = !0;
      s.unsubscribe = Ou(n, (c) => {
        o ? s.source.v = c : te(s.source, c);
      }), o = !1;
    }
    return n && Io in r ? (function(c) {
      let l;
      return Ou(c, (i) => l = i)(), l;
    })(n) : e(s.source);
  }
  function kt() {
    const n = {};
    return [n, function() {
      vl(() => {
        for (var t in n)
          n[t].unsubscribe();
        ai(n, Io, { enumerable: !1, value: !0 });
      });
    }];
  }
  function _(n, t, r, a) {
    var s, o, c, l, i = !Ii || !!(2 & r), u = !!(8 & r), g = !!(16 & r), k = a, f = !0, h = () => (f && (f = !1, k = g ? tn(a) : a), k);
    if (u) {
      var p = ka in n || Ic in n;
      c = (o = (s = ii(n, t)) == null ? void 0 : s.set) != null ? o : p && t in n ? (D) => n[t] = D : void 0;
    }
    var x, m = !1;
    if (u ? [l, m] = (function(D) {
      var Q = ps;
      try {
        return ps = !1, [D(), ps];
      } finally {
        ps = Q;
      }
    })(() => n[t]) : l = n[t], l === void 0 && a !== void 0 && (l = h(), c && (i && (function() {
      throw new Error("https://svelte.dev/e/props_invalid_value");
    })(), c(l))), x = i ? () => {
      var D = n[t];
      return D === void 0 ? h() : (f = !0, D);
    } : () => {
      var D = n[t];
      return D !== void 0 && (k = void 0), D === void 0 ? k : D;
    }, i && !(4 & r)) return x;
    if (c) {
      var I = n.$$legacy;
      return function(D, Q) {
        return arguments.length > 0 ? (i && Q && !I && !m || c(Q ? x() : D), D) : x();
      };
    }
    var P = !1, A = (1 & r ? fl : as)(() => (P = !1, x()));
    u && e(A);
    var j = jt;
    return function(D, Q) {
      if (arguments.length > 0) {
        const Z = Q ? e(A) : i && u ? ut(D) : D;
        return te(A, Z), P = !0, k !== void 0 && (k = Z), D;
      }
      return di && P || (j.f & Si) !== 0 ? A.v : e(A);
    };
  }
  class Vh {
    constructor(t) {
      var r, a;
      xt(this, Va), xt(this, Fr);
      var s = /* @__PURE__ */ new Map(), o = (l, i) => {
        var u = uo(i, !1, !1);
        return s.set(l, u), u;
      };
      const c = new Proxy({ ...t.props || {}, $$events: {} }, { get(l, i) {
        var u;
        return e((u = s.get(i)) != null ? u : o(i, Reflect.get(l, i)));
      }, has(l, i) {
        var u;
        return i === Ic || (e((u = s.get(i)) != null ? u : o(i, Reflect.get(l, i))), Reflect.has(l, i));
      }, set(l, i, u) {
        var g;
        return te((g = s.get(i)) != null ? g : o(i, u), u), Reflect.set(l, i, u);
      } });
      Pt(this, Fr, (t.hydrate ? Mh : mu)(t.component, { target: t.target, anchor: t.anchor, props: c, context: t.context, intro: (r = t.intro) != null && r, recover: t.recover })), (a = t == null ? void 0 : t.props) != null && a.$$host && t.sync !== !1 || v(), Pt(this, Va, c.$$events);
      for (const l of Object.keys(Se(this, Fr))) l !== "$set" && l !== "$destroy" && l !== "$on" && ai(this, l, { get() {
        return Se(this, Fr)[l];
      }, set(i) {
        Se(this, Fr)[l] = i;
      }, enumerable: !0 });
      Se(this, Fr).$set = (l) => {
        Object.assign(c, l);
      }, Se(this, Fr).$destroy = () => {
        (function(l, i) {
          const u = ko.get(l);
          u ? (ko.delete(l), u(i)) : Promise.resolve();
        })(Se(this, Fr));
      };
    }
    $set(t) {
      Se(this, Fr).$set(t);
    }
    $on(t, r) {
      Se(this, Va)[t] = Se(this, Va)[t] || [];
      const a = (...s) => r.call(this, ...s);
      return Se(this, Va)[t].push(a), () => {
        Se(this, Va)[t] = Se(this, Va)[t].filter((s) => s !== a);
      };
    }
    $destroy() {
      Se(this, Fr).$destroy();
    }
  }
  function bs(n, t, r, a) {
    var s;
    const o = (s = r[n]) == null ? void 0 : s.type;
    if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !a || !r[n]) return t;
    if (a === "toAttribute") switch (o) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t == null ? null : t;
      default:
        return t;
    }
    else switch (o) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
      default:
        return t;
      case "Number":
        return t != null ? +t : t;
    }
  }
  function Ke(n, t, r, a, s, o) {
    let c = class extends Fu {
      constructor() {
        super(n, r, s), this.$$p_d = t;
      }
      static get observedAttributes() {
        return Yl(t).map((l) => (t[l].attribute || l).toLowerCase());
      }
    };
    return Yl(t).forEach((l) => {
      ai(c.prototype, l, { get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      }, set(i) {
        var u;
        i = bs(l, i, t), this.$$d[l] = i;
        var g = this.$$c;
        g && ((u = ii(g, l)) != null && u.get ? g[l] = i : g.$set({ [l]: i }));
      } });
    }), a.forEach((l) => {
      ai(c.prototype, l, { get() {
        var i;
        return (i = this.$$c) == null ? void 0 : i[l];
      } });
    }), o && (c = o(c)), n.element = c, c;
  }
  Va = /* @__PURE__ */ new WeakMap(), Fr = /* @__PURE__ */ new WeakMap(), typeof HTMLElement == "function" && (Fu = class extends HTMLElement {
    constructor(n, t, r) {
      super(), Pn(this, "$$ctor"), Pn(this, "$$s"), Pn(this, "$$c"), Pn(this, "$$cn", !1), Pn(this, "$$d", {}), Pn(this, "$$r", !1), Pn(this, "$$p_d", {}), Pn(this, "$$l", {}), Pn(this, "$$l_u", /* @__PURE__ */ new Map()), Pn(this, "$$me"), this.$$ctor = n, this.$$s = t, r && this.attachShadow({ mode: "open" });
    }
    addEventListener(n, t, r) {
      if (this.$$l[n] = this.$$l[n] || [], this.$$l[n].push(t), this.$$c) {
        const a = this.$$c.$on(n, t);
        this.$$l_u.set(t, a);
      }
      super.addEventListener(n, t, r);
    }
    removeEventListener(n, t, r) {
      if (super.removeEventListener(n, t, r), this.$$c) {
        const a = this.$$l_u.get(t);
        a && (a(), this.$$l_u.delete(t));
      }
    }
    async connectedCallback() {
      if (this.$$cn = !0, !this.$$c) {
        let t = function(s) {
          return (o) => {
            const c = document.createElement("slot");
            s !== "default" && (c.name = s), b(o, c);
          };
        };
        if (await Promise.resolve(), !this.$$cn || this.$$c) return;
        const r = {}, a = (function(s) {
          const o = {};
          return s.childNodes.forEach((c) => {
            o[c.slot || "default"] = !0;
          }), o;
        })(this);
        for (const s of this.$$s) s in a && (s !== "default" || this.$$d.children ? r[s] = t(s) : (this.$$d.children = t(s), r.default = !0));
        for (const s of this.attributes) {
          const o = this.$$g_p(s.name);
          o in this.$$d || (this.$$d[o] = bs(o, s.value, this.$$p_d, "toProp"));
        }
        for (const s in this.$$p_d) s in this.$$d || this[s] === void 0 || (this.$$d[s] = this[s], delete this[s]);
        this.$$c = (n = { component: this.$$ctor, target: this.shadowRoot || this, props: { ...this.$$d, $$slots: r, $$host: this } }, new Vh(n)), this.$$me = (function(s) {
          ci.ensure();
          const o = jr(524352, s, !0);
          return () => {
            En(o);
          };
        })(() => {
          kl(() => {
            var s;
            this.$$r = !0;
            for (const o of Yl(this.$$c)) {
              if (!((s = this.$$p_d[o]) != null && s.reflect)) continue;
              this.$$d[o] = this.$$c[o];
              const c = bs(o, this.$$d[o], this.$$p_d, "toAttribute");
              c == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, c);
            }
            this.$$r = !1;
          });
        });
        for (const s in this.$$l) for (const o of this.$$l[s]) {
          const c = this.$$c.$on(s, o);
          this.$$l_u.set(o, c);
        }
        this.$$l = {};
      }
      var n;
    }
    attributeChangedCallback(n, t, r) {
      var a;
      this.$$r || (n = this.$$g_p(n), this.$$d[n] = bs(n, r, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [n]: this.$$d[n] }));
    }
    disconnectedCallback() {
      this.$$cn = !1, Promise.resolve().then(() => {
        !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
      });
    }
    $$g_p(n) {
      return Yl(this.$$p_d).find((t) => this.$$p_d[t].attribute === n || !this.$$p_d[t].attribute && t.toLowerCase() === n) || n;
    }
  });
  const Ah = ["primaryBackground", "secondaryBackground", "primaryText", "secondaryText", "border", "overlay", "primaryAccent", "primaryAccentText", "badgeBackground", "badgeText", "error"].map((n) => `brand_${n}`), qh = { primaryBackground: "#EDEDED", secondaryBackground: "#FFFFFF", primaryText: "#000000", secondaryText: "#555555", border: "#0000004D", overlay: "#000000", primaryAccent: "#000000", primaryAccentText: "#FFFFFF", badgeBackground: "#000000", badgeText: "#FFFFFF", error: "#D72C2C" };
  function Lu(n) {
    return typeof n == "string" && Ah.includes(n);
  }
  function Gh(n, t) {
    return Lu(n) ? (function(r) {
      const a = r.slice(1).match(/../g).map((s) => parseInt(s, 16));
      return { red: a[0], green: a[1], blue: a[2], alpha: a.length > 3 ? a[3] / 255 : 1 };
    })((function(r, a) {
      var s;
      const o = (function(c) {
        return c.slice(6);
      })(r);
      return (s = a == null ? void 0 : a[o]) != null ? s : qh[o];
    })(n, t)) : n;
  }
  var Zt = ((n) => (n.QuantityBreak = "quantity-break", n.Bxgy = "bxgy", n.Bundle = "bundle", n.MixAndMatch = "mix-and-match", n.Sku = "sku", n))(Zt || {});
  function xr(n, t) {
    return Lu(n) ? Gh(n, t) : Array.isArray(n) ? n.map((r) => xr(r, t)) : n && typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([r, a]) => [r, xr(a, t)])) : n;
  }
  const Eu = "config", hi = (n) => {
    const t = Wr(n);
    return Oa(Eu, t), { config: t, setConfig: (r) => {
      t.set(r);
    } };
  }, Sn = () => {
    const n = Ga(Eu);
    if (!n) throw new Error("getConfig must be called within a component tree that has setupConfig initialized");
    return n;
  };
  async function yr(n, t, r = {}, a = !0) {
    a && await cs();
    const s = new CustomEvent(t, { detail: r, bubbles: !0, cancelable: !0, composed: !0 });
    n.dispatchEvent(s);
  }
  const Dr = (n) => {
    typeof document != "undefined" && document.dispatchEvent(new CustomEvent("kaching-bundles-amount-discount-exceeds-price", { detail: n }));
  };
  function en(n) {
    return typeof n == "number" ? n : Number(n.split("/").pop());
  }
  function ju(n, t) {
    return n.find((r) => r.options.every((a, s) => a === t[s]));
  }
  function Tr(n) {
    const t = n.variants.filter((r) => r.availableForSale);
    return t.length > 0 ? { ...n, variants: t } : n;
  }
  function Ru(n) {
    const t = n.options.join(" / ");
    if (t && t !== "Default Title") return t;
  }
  var Oh = $("<span> </span>"), Fh = $("<div></div>");
  function Sl(n, t) {
    rt(t, !0);
    const [r, a] = kt(), s = _(t, "product", 7), o = _(t, "class", 7, ""), c = Sn(), l = d(() => Te(c, "$config", r).featureFlags.show_single_variant_name ? (function(h) {
      if (h.variants.length !== 1) return;
      const p = h.variants[0];
      return Ru(p) ? h.options.map((x, m) => ({ name: x.name, value: p.options[m] })) : void 0;
    })(s()) : void 0);
    var i = { get product() {
      return s();
    }, set product(h) {
      s(h), v();
    }, get class() {
      return o();
    }, set class(h = "") {
      o(h), v();
    } }, u = ze(), g = _e(u), k = (h) => {
      var p = Fh();
      Gt(p, 21, () => e(l), (x) => x.name, (x, m) => {
        var I = Oh(), P = w(I);
        y(I), ke(() => {
          var A, j;
          return pt(P, `${(A = e(m).name) != null ? A : ""}: ${(j = e(m).value) != null ? j : ""}`);
        }), b(x, I);
      }), y(p), ke(() => Rt(p, 1, qi(["kaching-bundles__single-variant-name", o()]))), b(h, p);
    };
    O(g, (h) => {
      var p;
      (p = e(l)) != null && p.length && h(k);
    }), b(n, u);
    var f = at(i);
    return a(), f;
  }
  Ke(Sl, { product: {}, class: {} }, [], [], !0);
  const Nu = "swatchSettings", Bl = (n) => {
    const t = Wr(n);
    return Oa(Nu, t), { swatchSettings: t, setSwatchSettings: (r) => {
      t.set(r);
    } };
  }, Qu = () => {
    const n = Ga(Nu);
    if (!n) throw new Error("getSwatchSettings must be called within a component tree that has setupSwatchSettings initialized");
    return n;
  };
  var Lh = $("<span> </span>"), Eh = $("<div></div>");
  function Pa(n, t) {
    rt(t, !0);
    const [r, a] = kt(), s = _(t, "product", 7), o = _(t, "class", 7, ""), c = Qu(), l = d(() => Te(c, "$swatchSettings", r).showSelectedSwatchName ? [] : s().options.map((h) => h.name));
    var i = { get product() {
      return s();
    }, set product(h) {
      s(h), v();
    }, get class() {
      return o();
    }, set class(h = "") {
      o(h), v();
    } }, u = ze(), g = _e(u), k = (h) => {
      var p = Eh();
      Gt(p, 21, () => e(l), Qr, (x, m) => {
        var I = Lh(), P = w(I, !0);
        y(I), ke(() => pt(P, e(m))), b(x, I);
      }), y(p), ke(() => Rt(p, 1, qi(["kaching-bundles__bar-variant-names", o()]))), b(h, p);
    };
    O(g, (h) => {
      e(l).length && h(k);
    }), b(n, u);
    var f = at(i);
    return a(), f;
  }
  Ke(Pa, { product: {}, class: {} }, [], [], !0);
  const fs = Math.min, pi = Math.max, vs = Math.round, _s = Math.floor, la = (n) => ({ x: n, y: n }), jh = { left: "right", right: "left", bottom: "top", top: "bottom" }, Rh = { start: "end", end: "start" };
  function Wu(n, t, r) {
    return pi(n, fs(t, r));
  }
  function ks(n, t) {
    return typeof n == "function" ? n(t) : n;
  }
  function bi(n) {
    return n.split("-")[0];
  }
  function ms(n) {
    return n.split("-")[1];
  }
  function Hu(n) {
    return n === "x" ? "y" : "x";
  }
  function Uu(n) {
    return n === "y" ? "height" : "width";
  }
  const Nh = /* @__PURE__ */ new Set(["top", "bottom"]);
  function Ra(n) {
    return Nh.has(bi(n)) ? "y" : "x";
  }
  function Zu(n) {
    return Hu(Ra(n));
  }
  function Mo(n) {
    return n.replace(/start|end/g, (t) => Rh[t]);
  }
  const Ju = ["left", "right"], Yu = ["right", "left"], Qh = ["top", "bottom"], Wh = ["bottom", "top"];
  function Hh(n, t, r, a) {
    const s = ms(n);
    let o = (function(c, l, i) {
      switch (c) {
        case "top":
        case "bottom":
          return i ? l ? Yu : Ju : l ? Ju : Yu;
        case "left":
        case "right":
          return l ? Qh : Wh;
        default:
          return [];
      }
    })(bi(n), r === "start", a);
    return s && (o = o.map((c) => c + "-" + s), t && (o = o.concat(o.map(Mo)))), o;
  }
  function xs(n) {
    return n.replace(/left|right|bottom|top/g, (t) => jh[t]);
  }
  function ys(n) {
    const { x: t, y: r, width: a, height: s } = n;
    return { width: a, height: s, top: r, left: t, right: t + a, bottom: r + s, x: t, y: r };
  }
  function Ku(n, t, r) {
    let { reference: a, floating: s } = n;
    const o = Ra(t), c = Zu(t), l = Uu(c), i = bi(t), u = o === "y", g = a.x + a.width / 2 - s.width / 2, k = a.y + a.height / 2 - s.height / 2, f = a[l] / 2 - s[l] / 2;
    let h;
    switch (i) {
      case "top":
        h = { x: g, y: a.y - s.height };
        break;
      case "bottom":
        h = { x: g, y: a.y + a.height };
        break;
      case "right":
        h = { x: a.x + a.width, y: k };
        break;
      case "left":
        h = { x: a.x - s.width, y: k };
        break;
      default:
        h = { x: a.x, y: a.y };
    }
    switch (ms(t)) {
      case "start":
        h[c] -= f * (r && u ? -1 : 1);
        break;
      case "end":
        h[c] += f * (r && u ? -1 : 1);
    }
    return h;
  }
  async function Xu(n, t) {
    var r;
    t === void 0 && (t = {});
    const { x: a, y: s, platform: o, rects: c, elements: l, strategy: i } = n, { boundary: u = "clippingAncestors", rootBoundary: g = "viewport", elementContext: k = "floating", altBoundary: f = !1, padding: h = 0 } = ks(t, n), p = (function(D) {
      return typeof D != "number" ? (function(Q) {
        return { top: 0, right: 0, bottom: 0, left: 0, ...Q };
      })(D) : { top: D, right: D, bottom: D, left: D };
    })(h), x = l[f ? k === "floating" ? "reference" : "floating" : k], m = ys(await o.getClippingRect({ element: (r = await (o.isElement == null ? void 0 : o.isElement(x))) == null || r ? x : x.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)), boundary: u, rootBoundary: g, strategy: i })), I = k === "floating" ? { x: a, y: s, width: c.floating.width, height: c.floating.height } : c.reference, P = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), A = await (o.isElement == null ? void 0 : o.isElement(P)) && await (o.getScale == null ? void 0 : o.getScale(P)) || { x: 1, y: 1 }, j = ys(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: l, rect: I, offsetParent: P, strategy: i }) : I);
    return { top: (m.top - j.top + p.top) / A.y, bottom: (j.bottom - m.bottom + p.bottom) / A.y, left: (m.left - j.left + p.left) / A.x, right: (j.right - m.right + p.right) / A.x };
  }
  const Uh = /* @__PURE__ */ new Set(["left", "top"]);
  function ws() {
    return typeof window != "undefined";
  }
  function Ei(n) {
    return ed(n) ? (n.nodeName || "").toLowerCase() : "#document";
  }
  function wr(n) {
    var t;
    return (n == null || (t = n.ownerDocument) == null ? void 0 : t.defaultView) || window;
  }
  function sa(n) {
    var t;
    return (t = (ed(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : t.documentElement;
  }
  function ed(n) {
    return !!ws() && (n instanceof Node || n instanceof wr(n).Node);
  }
  function Hr(n) {
    return !!ws() && (n instanceof Element || n instanceof wr(n).Element);
  }
  function oa(n) {
    return !!ws() && (n instanceof HTMLElement || n instanceof wr(n).HTMLElement);
  }
  function td(n) {
    return !(!ws() || typeof ShadowRoot == "undefined") && (n instanceof ShadowRoot || n instanceof wr(n).ShadowRoot);
  }
  const Zh = /* @__PURE__ */ new Set(["inline", "contents"]);
  function Cl(n) {
    const { overflow: t, overflowX: r, overflowY: a, display: s } = Ur(n);
    return /auto|scroll|overlay|hidden|clip/.test(t + a + r) && !Zh.has(s);
  }
  const Jh = /* @__PURE__ */ new Set(["table", "td", "th"]);
  function Yh(n) {
    return Jh.has(Ei(n));
  }
  const Kh = [":popover-open", ":modal"];
  function Ps(n) {
    return Kh.some((t) => {
      try {
        return n.matches(t);
      } catch {
        return !1;
      }
    });
  }
  const Xh = ["transform", "translate", "scale", "rotate", "perspective"], ep = ["transform", "translate", "scale", "rotate", "perspective", "filter"], tp = ["paint", "layout", "strict", "content"];
  function zo(n) {
    const t = $o(), r = Hr(n) ? Ur(n) : n;
    return Xh.some((a) => !!r[a] && r[a] !== "none") || !!r.containerType && r.containerType !== "normal" || !t && !!r.backdropFilter && r.backdropFilter !== "none" || !t && !!r.filter && r.filter !== "none" || ep.some((a) => (r.willChange || "").includes(a)) || tp.some((a) => (r.contain || "").includes(a));
  }
  function $o() {
    return !(typeof CSS == "undefined" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
  }
  const np = /* @__PURE__ */ new Set(["html", "body", "#document"]);
  function ji(n) {
    return np.has(Ei(n));
  }
  function Ur(n) {
    return wr(n).getComputedStyle(n);
  }
  function Ss(n) {
    return Hr(n) ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop } : { scrollLeft: n.scrollX, scrollTop: n.scrollY };
  }
  function Na(n) {
    if (Ei(n) === "html") return n;
    const t = n.assignedSlot || n.parentNode || td(n) && n.host || sa(n);
    return td(t) ? t.host : t;
  }
  function nd(n) {
    const t = Na(n);
    return ji(t) ? n.ownerDocument ? n.ownerDocument.body : n.body : oa(t) && Cl(t) ? t : nd(t);
  }
  function Il(n, t, r) {
    var a;
    t === void 0 && (t = []), r === void 0 && (r = !0);
    const s = nd(n), o = s === ((a = n.ownerDocument) == null ? void 0 : a.body), c = wr(s);
    if (o) {
      const l = Do(c);
      return t.concat(c, c.visualViewport || [], Cl(s) ? s : [], l && r ? Il(l) : []);
    }
    return t.concat(s, Il(s, [], r));
  }
  function Do(n) {
    return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
  }
  function rd(n) {
    const t = Ur(n);
    let r = parseFloat(t.width) || 0, a = parseFloat(t.height) || 0;
    const s = oa(n), o = s ? n.offsetWidth : r, c = s ? n.offsetHeight : a, l = vs(r) !== o || vs(a) !== c;
    return l && (r = o, a = c), { width: r, height: a, $: l };
  }
  function To(n) {
    return Hr(n) ? n : n.contextElement;
  }
  function Ri(n) {
    const t = To(n);
    if (!oa(t)) return la(1);
    const r = t.getBoundingClientRect(), { width: a, height: s, $: o } = rd(t);
    let c = (o ? vs(r.width) : r.width) / a, l = (o ? vs(r.height) : r.height) / s;
    return c && Number.isFinite(c) || (c = 1), l && Number.isFinite(l) || (l = 1), { x: c, y: l };
  }
  const rp = la(0);
  function ad(n) {
    const t = wr(n);
    return $o() && t.visualViewport ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop } : rp;
  }
  function fi(n, t, r, a) {
    t === void 0 && (t = !1), r === void 0 && (r = !1);
    const s = n.getBoundingClientRect(), o = To(n);
    let c = la(1);
    t && (a ? Hr(a) && (c = Ri(a)) : c = Ri(n));
    const l = (function(f, h, p) {
      return h === void 0 && (h = !1), !(!p || h && p !== wr(f)) && h;
    })(o, r, a) ? ad(o) : la(0);
    let i = (s.left + l.x) / c.x, u = (s.top + l.y) / c.y, g = s.width / c.x, k = s.height / c.y;
    if (o) {
      const f = wr(o), h = a && Hr(a) ? wr(a) : a;
      let p = f, x = Do(p);
      for (; x && a && h !== p; ) {
        const m = Ri(x), I = x.getBoundingClientRect(), P = Ur(x), A = I.left + (x.clientLeft + parseFloat(P.paddingLeft)) * m.x, j = I.top + (x.clientTop + parseFloat(P.paddingTop)) * m.y;
        i *= m.x, u *= m.y, g *= m.x, k *= m.y, i += A, u += j, p = wr(x), x = Do(p);
      }
    }
    return ys({ width: g, height: k, x: i, y: u });
  }
  function Bs(n, t) {
    const r = Ss(n).scrollLeft;
    return t ? t.left + r : fi(sa(n)).left + r;
  }
  function id(n, t) {
    const r = n.getBoundingClientRect();
    return { x: r.left + t.scrollLeft - Bs(n, r), y: r.top + t.scrollTop };
  }
  const ap = /* @__PURE__ */ new Set(["absolute", "fixed"]);
  function ld(n, t, r) {
    let a;
    if (t === "viewport") a = (function(s, o) {
      const c = wr(s), l = sa(s), i = c.visualViewport;
      let u = l.clientWidth, g = l.clientHeight, k = 0, f = 0;
      if (i) {
        u = i.width, g = i.height;
        const p = $o();
        (!p || p && o === "fixed") && (k = i.offsetLeft, f = i.offsetTop);
      }
      const h = Bs(l);
      if (h <= 0) {
        const p = l.ownerDocument, x = p.body, m = getComputedStyle(x), I = p.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, P = Math.abs(l.clientWidth - x.clientWidth - I);
        P <= 25 && (u -= P);
      } else h <= 25 && (u += h);
      return { width: u, height: g, x: k, y: f };
    })(n, r);
    else if (t === "document") a = (function(s) {
      const o = sa(s), c = Ss(s), l = s.ownerDocument.body, i = pi(o.scrollWidth, o.clientWidth, l.scrollWidth, l.clientWidth), u = pi(o.scrollHeight, o.clientHeight, l.scrollHeight, l.clientHeight);
      let g = -c.scrollLeft + Bs(s);
      const k = -c.scrollTop;
      return Ur(l).direction === "rtl" && (g += pi(o.clientWidth, l.clientWidth) - i), { width: i, height: u, x: g, y: k };
    })(sa(n));
    else if (Hr(t)) a = (function(s, o) {
      const c = fi(s, !0, o === "fixed"), l = c.top + s.clientTop, i = c.left + s.clientLeft, u = oa(s) ? Ri(s) : la(1);
      return { width: s.clientWidth * u.x, height: s.clientHeight * u.y, x: i * u.x, y: l * u.y };
    })(t, r);
    else {
      const s = ad(n);
      a = { x: t.x - s.x, y: t.y - s.y, width: t.width, height: t.height };
    }
    return ys(a);
  }
  function sd(n, t) {
    const r = Na(n);
    return !(r === t || !Hr(r) || ji(r)) && (Ur(r).position === "fixed" || sd(r, t));
  }
  function ip(n, t, r) {
    const a = oa(t), s = sa(t), o = r === "fixed", c = fi(n, !0, o, t);
    let l = { scrollLeft: 0, scrollTop: 0 };
    const i = la(0);
    function u() {
      i.x = Bs(s);
    }
    if (a || !a && !o) if ((Ei(t) !== "body" || Cl(s)) && (l = Ss(t)), a) {
      const k = fi(t, !0, o, t);
      i.x = k.x + t.clientLeft, i.y = k.y + t.clientTop;
    } else s && u();
    o && !a && s && u();
    const g = !s || a || o ? la(0) : id(s, l);
    return { x: c.left + l.scrollLeft - i.x - g.x, y: c.top + l.scrollTop - i.y - g.y, width: c.width, height: c.height };
  }
  function Vo(n) {
    return Ur(n).position === "static";
  }
  function od(n, t) {
    if (!oa(n) || Ur(n).position === "fixed") return null;
    if (t) return t(n);
    let r = n.offsetParent;
    return sa(n) === r && (r = r.ownerDocument.body), r;
  }
  function cd(n, t) {
    const r = wr(n);
    if (Ps(n)) return r;
    if (!oa(n)) {
      let s = Na(n);
      for (; s && !ji(s); ) {
        if (Hr(s) && !Vo(s)) return s;
        s = Na(s);
      }
      return r;
    }
    let a = od(n, t);
    for (; a && Yh(a) && Vo(a); ) a = od(a, t);
    return a && ji(a) && Vo(a) && !zo(a) ? r : a || (function(s) {
      let o = Na(s);
      for (; oa(o) && !ji(o); ) {
        if (zo(o)) return o;
        if (Ps(o)) return null;
        o = Na(o);
      }
      return null;
    })(n) || r;
  }
  const lp = { convertOffsetParentRelativeRectToViewportRelativeRect: function(n) {
    let { elements: t, rect: r, offsetParent: a, strategy: s } = n;
    const o = s === "fixed", c = sa(a), l = !!t && Ps(t.floating);
    if (a === c || l && o) return r;
    let i = { scrollLeft: 0, scrollTop: 0 }, u = la(1);
    const g = la(0), k = oa(a);
    if ((k || !k && !o) && ((Ei(a) !== "body" || Cl(c)) && (i = Ss(a)), oa(a))) {
      const h = fi(a);
      u = Ri(a), g.x = h.x + a.clientLeft, g.y = h.y + a.clientTop;
    }
    const f = !c || k || o ? la(0) : id(c, i);
    return { width: r.width * u.x, height: r.height * u.y, x: r.x * u.x - i.scrollLeft * u.x + g.x + f.x, y: r.y * u.y - i.scrollTop * u.y + g.y + f.y };
  }, getDocumentElement: sa, getClippingRect: function(n) {
    let { element: t, boundary: r, rootBoundary: a, strategy: s } = n;
    const o = [...r === "clippingAncestors" ? Ps(t) ? [] : (function(i, u) {
      const g = u.get(i);
      if (g) return g;
      let k = Il(i, [], !1).filter((x) => Hr(x) && Ei(x) !== "body"), f = null;
      const h = Ur(i).position === "fixed";
      let p = h ? Na(i) : i;
      for (; Hr(p) && !ji(p); ) {
        const x = Ur(p), m = zo(p);
        m || x.position !== "fixed" || (f = null), (h ? !m && !f : !m && x.position === "static" && f && ap.has(f.position) || Cl(p) && !m && sd(i, p)) ? k = k.filter((I) => I !== p) : f = x, p = Na(p);
      }
      return u.set(i, k), k;
    })(t, this._c) : [].concat(r), a], c = o[0], l = o.reduce((i, u) => {
      const g = ld(t, u, s);
      return i.top = pi(g.top, i.top), i.right = fs(g.right, i.right), i.bottom = fs(g.bottom, i.bottom), i.left = pi(g.left, i.left), i;
    }, ld(t, c, s));
    return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
  }, getOffsetParent: cd, getElementRects: async function(n) {
    const t = this.getOffsetParent || cd, r = this.getDimensions, a = await r(n.floating);
    return { reference: ip(n.reference, await t(n.floating), n.strategy), floating: { x: 0, y: 0, width: a.width, height: a.height } };
  }, getClientRects: function(n) {
    return Array.from(n.getClientRects());
  }, getDimensions: function(n) {
    const { width: t, height: r } = rd(n);
    return { width: t, height: r };
  }, getScale: Ri, isElement: Hr, isRTL: function(n) {
    return Ur(n).direction === "rtl";
  } };
  function ud(n, t) {
    return n.x === t.x && n.y === t.y && n.width === t.width && n.height === t.height;
  }
  function sp(n, t, r, a) {
    a === void 0 && (a = {});
    const { ancestorScroll: s = !0, ancestorResize: o = !0, elementResize: c = typeof ResizeObserver == "function", layoutShift: l = typeof IntersectionObserver == "function", animationFrame: i = !1 } = a, u = To(n), g = s || o ? [...u ? Il(u) : [], ...Il(t)] : [];
    g.forEach((m) => {
      s && m.addEventListener("scroll", r, { passive: !0 }), o && m.addEventListener("resize", r);
    });
    const k = u && l ? (function(m, I) {
      let P, A = null;
      const j = sa(m);
      function D() {
        var Q;
        clearTimeout(P), (Q = A) == null || Q.disconnect(), A = null;
      }
      return (function Q(Z, T) {
        Z === void 0 && (Z = !1), T === void 0 && (T = 1), D();
        const J = m.getBoundingClientRect(), { left: z, top: G, width: ne, height: X } = J;
        if (Z || I(), !ne || !X) return;
        const B = { rootMargin: -_s(G) + "px " + -_s(j.clientWidth - (z + ne)) + "px " + -_s(j.clientHeight - (G + X)) + "px " + -_s(z) + "px", threshold: pi(0, fs(1, T)) || 1 };
        let S = !0;
        function C(F) {
          const U = F[0].intersectionRatio;
          if (U !== T) {
            if (!S) return Q();
            U ? Q(!1, U) : P = setTimeout(() => {
              Q(!1, 1e-7);
            }, 1e3);
          }
          U !== 1 || ud(J, m.getBoundingClientRect()) || Q(), S = !1;
        }
        try {
          A = new IntersectionObserver(C, { ...B, root: j.ownerDocument });
        } catch {
          A = new IntersectionObserver(C, B);
        }
        A.observe(m);
      })(!0), D;
    })(u, r) : null;
    let f, h = -1, p = null;
    c && (p = new ResizeObserver((m) => {
      let [I] = m;
      I && I.target === u && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
        var P;
        (P = p) == null || P.observe(t);
      })), r();
    }), u && !i && p.observe(u), p.observe(t));
    let x = i ? fi(n) : null;
    return i && (function m() {
      const I = fi(n);
      x && !ud(x, I) && r(), x = I, f = requestAnimationFrame(m);
    })(), r(), () => {
      var m;
      g.forEach((I) => {
        s && I.removeEventListener("scroll", r), o && I.removeEventListener("resize", r);
      }), k == null || k(), (m = p) == null || m.disconnect(), p = null, i && cancelAnimationFrame(f);
    };
  }
  const op = function(n) {
    return { name: "offset", options: n, async fn(t) {
      var r, a;
      const { x: s, y: o, placement: c, middlewareData: l } = t, i = await (async function(u, g) {
        const { placement: k, platform: f, elements: h } = u, p = await (f.isRTL == null ? void 0 : f.isRTL(h.floating)), x = bi(k), m = ms(k), I = Ra(k) === "y", P = Uh.has(x) ? -1 : 1, A = p && I ? -1 : 1, j = ks(g, u);
        let { mainAxis: D, crossAxis: Q, alignmentAxis: Z } = typeof j == "number" ? { mainAxis: j, crossAxis: 0, alignmentAxis: null } : { mainAxis: j.mainAxis || 0, crossAxis: j.crossAxis || 0, alignmentAxis: j.alignmentAxis };
        return m && typeof Z == "number" && (Q = m === "end" ? -1 * Z : Z), I ? { x: Q * A, y: D * P } : { x: D * P, y: Q * A };
      })(t, n);
      return c === ((r = l.offset) == null ? void 0 : r.placement) && (a = l.arrow) != null && a.alignmentOffset ? {} : { x: s + i.x, y: o + i.y, data: { ...i, placement: c } };
    } };
  }, cp = function(n) {
    return n === void 0 && (n = {}), { name: "shift", options: n, async fn(t) {
      const { x: r, y: a, placement: s } = t, { mainAxis: o = !0, crossAxis: c = !1, limiter: l = { fn: (m) => {
        let { x: I, y: P } = m;
        return { x: I, y: P };
      } }, ...i } = ks(n, t), u = { x: r, y: a }, g = await Xu(t, i), k = Ra(bi(s)), f = Hu(k);
      let h = u[f], p = u[k];
      if (o) {
        const m = f === "y" ? "bottom" : "right";
        h = Wu(h + g[f === "y" ? "top" : "left"], h, h - g[m]);
      }
      if (c) {
        const m = k === "y" ? "bottom" : "right";
        p = Wu(p + g[k === "y" ? "top" : "left"], p, p - g[m]);
      }
      const x = l.fn({ ...t, [f]: h, [k]: p });
      return { ...x, data: { x: x.x - r, y: x.y - a, enabled: { [f]: o, [k]: c } } };
    } };
  }, up = function(n) {
    return n === void 0 && (n = {}), { name: "flip", options: n, async fn(t) {
      var r, a;
      const { placement: s, middlewareData: o, rects: c, initialPlacement: l, platform: i, elements: u } = t, { mainAxis: g = !0, crossAxis: k = !0, fallbackPlacements: f, fallbackStrategy: h = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: x = !0, ...m } = ks(n, t);
      if ((r = o.arrow) != null && r.alignmentOffset) return {};
      const I = bi(s), P = Ra(l), A = bi(l) === l, j = await (i.isRTL == null ? void 0 : i.isRTL(u.floating)), D = f || (A || !x ? [xs(l)] : (function(B) {
        const S = xs(B);
        return [Mo(B), S, Mo(S)];
      })(l)), Q = p !== "none";
      !f && Q && D.push(...Hh(l, x, p, j));
      const Z = [l, ...D], T = await Xu(t, m), J = [];
      let z = ((a = o.flip) == null ? void 0 : a.overflows) || [];
      if (g && J.push(T[I]), k) {
        const B = (function(S, C, F) {
          F === void 0 && (F = !1);
          const U = ms(S), H = Zu(S), se = Uu(H);
          let E = H === "x" ? U === (F ? "end" : "start") ? "right" : "left" : U === "start" ? "bottom" : "top";
          return C.reference[se] > C.floating[se] && (E = xs(E)), [E, xs(E)];
        })(s, c, j);
        J.push(T[B[0]], T[B[1]]);
      }
      if (z = [...z, { placement: s, overflows: J }], !J.every((B) => B <= 0)) {
        var G, ne;
        const B = (((G = o.flip) == null ? void 0 : G.index) || 0) + 1, S = Z[B];
        if (S && (!(k === "alignment" && P !== Ra(S)) || z.every((F) => Ra(F.placement) !== P || F.overflows[0] > 0)))
          return { data: { index: B, overflows: z }, reset: { placement: S } };
        let C = (ne = z.filter((F) => F.overflows[0] <= 0).sort((F, U) => F.overflows[1] - U.overflows[1])[0]) == null ? void 0 : ne.placement;
        if (!C) switch (h) {
          case "bestFit": {
            var X;
            const F = (X = z.filter((U) => {
              if (Q) {
                const H = Ra(U.placement);
                return H === P || H === "y";
              }
              return !0;
            }).map((U) => [U.placement, U.overflows.filter((H) => H > 0).reduce((H, se) => H + se, 0)]).sort((U, H) => U[1] - H[1])[0]) == null ? void 0 : X[0];
            F && (C = F);
            break;
          }
          case "initialPlacement":
            C = l;
        }
        if (s !== C) return { reset: { placement: C } };
      }
      return {};
    } };
  }, dp = (n, t, r) => {
    const a = /* @__PURE__ */ new Map(), s = { platform: lp, ...r }, o = { ...s.platform, _c: a };
    return (async (c, l, i) => {
      const { placement: u = "bottom", strategy: g = "absolute", middleware: k = [], platform: f } = i, h = k.filter(Boolean), p = await (f.isRTL == null ? void 0 : f.isRTL(l));
      let x = await f.getElementRects({ reference: c, floating: l, strategy: g }), { x: m, y: I } = Ku(x, u, p), P = u, A = {}, j = 0;
      for (let D = 0; D < h.length; D++) {
        const { name: Q, fn: Z } = h[D], { x: T, y: J, data: z, reset: G } = await Z({ x: m, y: I, initialPlacement: u, placement: P, strategy: g, middlewareData: A, rects: x, platform: f, elements: { reference: c, floating: l } });
        m = T != null ? T : m, I = J != null ? J : I, A = { ...A, [Q]: { ...A[Q], ...z } }, G && j <= 50 && (j++, typeof G == "object" && (G.placement && (P = G.placement), G.rects && (x = G.rects === !0 ? await f.getElementRects({ reference: c, floating: l, strategy: g }) : G.rects), { x: m, y: I } = Ku(x, P, p)), D = -1);
      }
      return { x: m, y: I, placement: P, strategy: g, middlewareData: A };
    })(n, t, { ...s, platform: o });
  };
  function gr(n) {
    const t = { bold: "bold", light: "300", medium: "500", regular: "normal" };
    for (const r in t) if (n.includes(r)) return t[r];
    return "normal";
  }
  function hr(n) {
    return n.includes("italic") ? "italic" : "normal";
  }
  function Qe(n) {
    return n ? `rgba(${n.red}, ${n.green}, ${n.blue}, ${n.alpha})` : "";
  }
  function dd(n) {
    return n && n.text && n.background ? `--bar-most-popular-background-color: ${Qe(n.background)}; --bar-most-popular-color: ${Qe(n.text)};` : "";
  }
  const gp = { "SF Mono": '"SF Mono", ui-monospace, Menlo, monospace', Helvetica: '"Helvetica Neue", Helvetica, -apple-system, sans-serif', "New York": '"New York", ui-serif, Georgia, serif', "System UI": "system-ui, -apple-system, BlinkMacSystemFont, sans-serif" };
  function hp(n) {
    var t;
    return (t = gp[n]) != null ? t : `"${n}"`;
  }
  function mn(n) {
    return Object.entries(n).reduce((t, [r, a]) => (a && t.push(`--${r}:${a}`), t), []).join(";");
  }
  function gd(n) {
    var t, r;
    const { colors: a, fonts: s, cornerRadius: o, spacing: c, imageSize: l, imageCornerRadius: i, bundleBarsPerRow: u, dealBars: g } = n, k = a.border || a.primary, f = Math.min(g.length, u ? parseInt(u) : 3).toString();
    return mn({ "block-font-family": s.fontFamily ? hp(s.fontFamily) : null, "block-title-color": Qe(a.title), "block-title-font-size": s.blockTitle.size + "px", "block-title-font-weight": gr(s.blockTitle.style), "block-title-font-style": hr(s.blockTitle.style), "block-spacing": c == null ? void 0 : c.toString(), "bar-border-radius": (o || 0) + "px", "badge-concave-depth": Math.min(o || 0, 12) + "px", "bar-background-color": Qe(a.background), "bar-selected-background-color": Qe(a.selectedBackground || a.background), "bar-border-color": Qe({ ...k, alpha: 0.3 * k.alpha }), "bar-selected-border-color": Qe(k), "block-block-title-color": Qe(a.blockTitle || a.title), "bar-title-color": Qe(a.title), "bar-title-font-size": s.title.size + "px", "bar-title-font-weight": gr(s.title.style), "bar-title-font-style": hr(s.title.style), "bar-subtitle-color": Qe(a.subtitle), "bar-subtitle-font-size": s.subtitle.size + "px", "bar-subtitle-font-weight": gr(s.subtitle.style), "bar-subtitle-font-style": hr(s.subtitle.style), "bar-price-color": Qe(a.price || a.title), "bar-full-price-color": Qe(a.fullPrice || a.subtitle), "bar-label-border-top-radius": (o ? o - 1 : 0) + "px", "bar-label-background-color": Qe(a.labelBackground), "bar-label-color": Qe(a.label), "bar-label-font-size": s.label.size + "px", "bar-label-font-weight": gr(s.label.style), "bar-label-font-style": hr(s.label.style), "bar-most-popular-background-color": Qe(a.badgeBackground), "bar-most-popular-color": Qe(a.badgeText), "bar-variant-select-border-radius": (o || 0) / 2 + "px", "bar-image-size": (l || 48) + "px", "bar-image-border-radius": (i || 0) + "px", "kaching-bundle-products-image-border-radius": (o || 0) / 2 + "px", "kaching-bundles-unit-label-font-size": s.unitLabel ? s.unitLabel.size + "px" : null, "kaching-bundles-unit-label-font-weight": s.unitLabel ? gr(s.unitLabel.style) : null, "kaching-bundles-unit-label-font-style": s.unitLabel ? hr(s.unitLabel.style) : null, "bundle-bars-per-row": f, "kaching-collection-breaks-require-selection-background-color": ((t = n.collectionBreaks) == null ? void 0 : t.requireItemSelectionAlert) && Qe(n.collectionBreaks.requireItemSelectionAlert.backgroundColor), "kaching-collection-breaks-require-selection-text-color": ((r = n.collectionBreaks) == null ? void 0 : r.requireItemSelectionAlert) && Qe(n.collectionBreaks.requireItemSelectionAlert.textColor) });
  }
  const hd = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, pp = (n) => {
    const t = n.replace(/[^a-zA-Z]+/g, "").toLowerCase();
    if (!(t in hd)) return;
    const r = hd[t];
    return { red: r[0], green: r[1], blue: r[2], alpha: 1 };
  }, bp = (n, t) => ({ red: Math.max(0, n.red - Math.round(n.red * t)), green: Math.max(0, n.green - Math.round(n.green * t)), blue: Math.max(0, n.blue - Math.round(n.blue * t)), alpha: n.alpha });
  var fp = $("<div></div>");
  function Cs(n, t) {
    rt(t, !0);
    let r = _(t, "color", 7), a = _(t, "image", 7), s = _(t, "size", 7), o = _(t, "shape", 7), c = _(t, "unavailable", 7, !1);
    const l = d(() => r() ? (function(f) {
      f = f.replace(/^#/, "");
      let h = parseInt(f, 16);
      return { red: h >> 16 & 255, green: h >> 8 & 255, blue: 255 & h, alpha: 1 };
    })(r()) : null), i = d(() => {
      let f = { "kaching-swatch-size": `${s() - 2}px` };
      const h = { rounded: 20, circle: 50 }[o()];
      return h && (f = { ...f, "kaching-swatch-border-radius": `${h}%` }), a() ? f = { ...f, "kaching-swatch-image-url": `url(${a()})` } : e(l) && (f = { ...f, "kaching-swatch-color": Qe(e(l)), "kaching-swatch-border-color": Qe(bp(e(l), 0.1)) }), mn(f);
    });
    var u = { get color() {
      return r();
    }, set color(f) {
      r(f), v();
    }, get image() {
      return a();
    }, set image(f) {
      a(f), v();
    }, get size() {
      return s();
    }, set size(f) {
      s(f), v();
    }, get shape() {
      return o();
    }, set shape(f) {
      o(f), v();
    }, get unavailable() {
      return c();
    }, set unavailable(f = !1) {
      c(f), v();
    } }, g = fp();
    let k;
    return ke((f) => {
      k = Rt(g, 1, "kaching-bundles__swatch", null, k, f), Et(g, e(i));
    }, [() => ({ "kaching-bundles__swatch--unavailable": c() })]), b(n, g), at(u);
  }
  function Xt(n, t) {
    rt(t, !0);
    let r = _(t, "element", 7, "button"), a = _(t, "class", 7), s = _(t, "onclick", 7), o = _(t, "onkeydown", 7), c = _(t, "data-value", 7), l = _(t, "title", 7), i = _(t, "id", 7), u = _(t, "role", 7), g = _(t, "aria-label", 7), k = _(t, "aria-expanded", 7), f = _(t, "aria-haspopup", 7), h = _(t, "aria-selected", 7), p = _(t, "aria-checked", 7), x = _(t, "aria-activedescendant", 7), m = _(t, "aria-controls", 7), I = _(t, "tabindex", 7), P = _(t, "disabled", 7, !1), A = _(t, "ref", 15);
    function j(T) {
      o() && (o()(T), T.defaultPrevented) || P() || T.key !== "Enter" && T.key !== " " || (T.preventDefault(), T.currentTarget.click());
    }
    function D(T) {
      var J;
      if (P()) return T.preventDefault(), void T.stopPropagation();
      (J = s()) == null || J(T);
    }
    var Q = { get element() {
      return r();
    }, set element(T = "button") {
      r(T), v();
    }, get class() {
      return a();
    }, set class(T) {
      a(T), v();
    }, get onclick() {
      return s();
    }, set onclick(T) {
      s(T), v();
    }, get onkeydown() {
      return o();
    }, set onkeydown(T) {
      o(T), v();
    }, get "data-value"() {
      return c();
    }, set "data-value"(T) {
      c(T), v();
    }, get title() {
      return l();
    }, set title(T) {
      l(T), v();
    }, get id() {
      return i();
    }, set id(T) {
      i(T), v();
    }, get role() {
      return u();
    }, set role(T) {
      u(T), v();
    }, get "aria-label"() {
      return g();
    }, set "aria-label"(T) {
      g(T), v();
    }, get "aria-expanded"() {
      return k();
    }, set "aria-expanded"(T) {
      k(T), v();
    }, get "aria-haspopup"() {
      return f();
    }, set "aria-haspopup"(T) {
      f(T), v();
    }, get "aria-selected"() {
      return h();
    }, set "aria-selected"(T) {
      h(T), v();
    }, get "aria-checked"() {
      return p();
    }, set "aria-checked"(T) {
      p(T), v();
    }, get "aria-activedescendant"() {
      return x();
    }, set "aria-activedescendant"(T) {
      x(T), v();
    }, get "aria-controls"() {
      return m();
    }, set "aria-controls"(T) {
      m(T), v();
    }, get tabindex() {
      return I();
    }, set tabindex(T) {
      I(T), v();
    }, get disabled() {
      return P();
    }, set disabled(T = !1) {
      P(T), v();
    }, get ref() {
      return A();
    }, set ref(T) {
      A(T), v();
    } }, Z = ze();
    return Su(_e(Z), r, 0, (T, J) => {
      Fi(T, (G) => A(G), () => A()), Tu(T, () => {
        var G, ne;
        return { role: (G = u()) != null ? G : "button", tabindex: (ne = I()) != null ? ne : P() ? -1 : 0, class: a(), onclick: D, "data-value": c(), title: l(), id: i(), "aria-label": g(), "aria-expanded": k(), "aria-haspopup": f(), "aria-selected": h(), "aria-checked": p(), "aria-activedescendant": x(), "aria-controls": m(), "aria-disabled": P() ? "true" : void 0, onkeydown: j };
      });
      var z = ze();
      wu(_e(z), t, "default", {}), b(J, z);
    }), b(n, Z), at(Q);
  }
  Ke(Cs, { color: {}, image: {}, size: {}, shape: {}, unavailable: {} }, [], [], !0), Ke(Xt, { element: {}, class: {}, onclick: {}, onkeydown: {}, "data-value": {}, title: {}, id: {}, role: {}, "aria-label": {}, "aria-expanded": {}, "aria-haspopup": {}, "aria-selected": {}, "aria-checked": {}, "aria-activedescendant": {}, "aria-controls": {}, tabindex: {}, disabled: {}, ref: {} }, ["default"], [], !0);
  const pd = "translations", vi = (n = {}, t) => {
    const r = Wr(bd(n, t));
    return Oa(pd, r), { translate: r, setTranslations: (a, s) => {
      r.set(bd(a, s));
    } };
  }, $t = () => {
    const n = Ga(pd);
    if (!n) throw new Error("getTranslations must be called within a component tree that has setupTranslations initialized");
    return n;
  }, bd = (n, t) => (r, a) => {
    if (a === void 0) return n[r] || r;
    const s = `${r}_other`;
    return n[`${r}_${((o, c) => {
      try {
        return new Intl.PluralRules(o).select(c);
      } catch {
        return "other";
      }
    })(t, a)}`] || n[s] || s;
  };
  var vp = $("<span> <!></span>"), _p = $("<span> </span>"), kp = $("<!> <!>", 1), mp = $("<span> </span>"), xp = $("<span> <!></span>"), yp = $("<span> </span>"), wp = $("<!> <!>", 1), Pp = $('<div class="kaching-bundles__swatch-dropdown__options" role="listbox"></div>'), Sp = $('<div class="kaching-bundles__swatch-dropdown kaching-bundles-option"><!> <!></div>');
  function fd(n, t) {
    rt(t, !0);
    const r = () => Te(P, "$translate", a), [a, s] = kt();
    let o = _(t, "option", 7), c = _(t, "swatchSize", 7), l = _(t, "swatchShape", 7), i = _(t, "value", 7), u = _(t, "placeholderText", 7, void 0), g = _(t, "onChange", 7), k = Fe(!1), f = Fe(-1), h = Fe(void 0), p = Fe(void 0), x = d(() => o().optionValues.find((B) => B.name === i()) || (u() != null ? null : o().optionValues[0]));
    const m = `swatch-dropdown-${Math.random().toString(16).slice(2)}`;
    function I(B) {
      return `${m}-option-${B}`;
    }
    const P = $t();
    function A() {
      te(k, !0), te(f, o().optionValues.findIndex((B) => B.name === i()), !0), e(f) === -1 && te(f, 0);
    }
    function j() {
      te(k, !1), te(f, -1);
    }
    function D() {
      var B;
      j(), (B = e(h)) == null || B.focus();
    }
    function Q(B) {
      i(B), D();
      try {
        const S = o().optionValues.find((C) => C.name === B);
        S != null && S.unavailable && yr(document.body, "kaching-unavailable-option-value-selected", { swatch: "dropdown" });
      } catch (S) {
        console.error(S);
      }
      g()(i());
    }
    function Z(B, S) {
      const C = (F) => {
        B.contains(F.target) || S();
      };
      return document.addEventListener("click", C, !0), { destroy() {
        document.removeEventListener("click", C, !0);
      } };
    }
    et(() => {
      if (e(k) && e(h) && e(p)) return sp(e(h), e(p), async () => {
        if (!e(h) || !e(p)) return;
        const B = e(p), { x: S, y: C } = await dp(e(h), B, { placement: "bottom-start", strategy: "fixed", middleware: [op(2), up(), cp({ padding: 8 })] });
        B.style.left = `${S}px`, B.style.top = `${C}px`;
      });
    });
    var T = { get option() {
      return o();
    }, set option(B) {
      o(B), v();
    }, get swatchSize() {
      return c();
    }, set swatchSize(B) {
      c(B), v();
    }, get swatchShape() {
      return l();
    }, set swatchShape(B) {
      l(B), v();
    }, get value() {
      return i();
    }, set value(B) {
      i(B), v();
    }, get placeholderText() {
      return u();
    }, set placeholderText(B = void 0) {
      u(B), v();
    }, get onChange() {
      return g();
    }, set onChange(B) {
      g(B), v();
    } }, J = Sp(), z = w(J);
    {
      let B = d(() => e(k) && e(f) >= 0 ? I(e(f)) : void 0);
      Xt(z, { element: "span", class: "kaching-bundles__bar-variant-select", role: "combobox", get "aria-label"() {
        return o().name;
      }, onclick: function(S) {
        e(k) ? (te(k, !1), te(f, -1)) : A(), S.preventDefault();
      }, onkeydown: function(S) {
        if (!e(k)) return void (S.key !== "ArrowDown" && S.key !== "ArrowUp" && S.key !== "Enter" && S.key !== " " || (S.preventDefault(), A()));
        const C = o().optionValues.length;
        switch (S.key) {
          case "Escape":
            S.preventDefault(), D();
            break;
          case "ArrowDown":
            S.preventDefault(), te(f, e(f) < C - 1 ? e(f) + 1 : 0, !0);
            break;
          case "ArrowUp":
            S.preventDefault(), te(f, e(f) > 0 ? e(f) - 1 : C - 1, !0);
            break;
          case "Home":
            S.preventDefault(), te(f, 0);
            break;
          case "End":
            S.preventDefault(), te(f, C - 1);
            break;
          case "Enter":
          case " ":
            S.preventDefault(), e(f) >= 0 && Q(o().optionValues[e(f)].name);
        }
      }, get "aria-expanded"() {
        return e(k);
      }, "aria-haspopup": "listbox", get "aria-controls"() {
        return m;
      }, get "aria-activedescendant"() {
        return e(B);
      }, get ref() {
        return e(h);
      }, set ref(S) {
        te(h, S, !0);
      }, children: (S, C) => {
        var F = ze(), U = _e(F), H = (E) => {
          var q = kp(), ie = _e(q);
          Cs(ie, { get color() {
            return e(x).swatch.color;
          }, get image() {
            return e(x).swatch.image;
          }, get size() {
            return c();
          }, get shape() {
            return l();
          }, get unavailable() {
            return e(x).unavailable;
          } }), lt(L(ie, 2), () => e(x).name, (ue) => {
            var W = ze(), ae = _e(W), he = (N) => {
              var de = vp(), pe = w(de);
              je(L(pe), () => r()("system.unavailable_option_value")), y(de), ke(() => {
                var re;
                return pt(pe, `${(re = e(x).name) != null ? re : ""} - `);
              }), b(N, de);
            }, V = (N) => {
              var de = _p(), pe = w(de, !0);
              y(de), ke(() => pt(pe, e(x).name)), b(N, de);
            };
            O(ae, (N) => {
              e(x).unavailable ? N(he) : N(V, !1);
            }), b(ue, W);
          }), b(E, q);
        }, se = (E) => {
          var q = mp(), ie = w(q, !0);
          y(q), ke(() => pt(ie, u())), b(E, q);
        };
        O(U, (E) => {
          e(x) ? E(H) : E(se, !1);
        }), b(S, F);
      }, $$slots: { default: !0 } });
    }
    var G = L(z, 2), ne = (B) => {
      var S = Pp();
      Gt(S, 23, () => o().optionValues, (C) => C.name, (C, F, U) => {
        {
          let H = d(() => ["kaching-bundles__swatch-dropdown__option", "kaching-bundles-option-value", e(U) === e(f) && "kaching-bundles__swatch-dropdown__option--focused"]), se = d(() => I(e(U))), E = d(() => e(F).name === i());
          Xt(C, { element: "span", get class() {
            return e(H);
          }, get id() {
            return e(se);
          }, role: "option", tabindex: -1, get "aria-selected"() {
            return e(E);
          }, get "data-value"() {
            return e(F).name;
          }, onclick: () => Q(e(F).name), children: (q, ie) => {
            var ue = wp(), W = _e(ue);
            {
              let N = d(() => 1.333 * c());
              Cs(W, { get color() {
                return e(F).swatch.color;
              }, get image() {
                return e(F).swatch.image;
              }, get size() {
                return e(N);
              }, get shape() {
                return l();
              }, get unavailable() {
                return e(F).unavailable;
              } });
            }
            var ae = L(W, 2), he = (N) => {
              var de = xp(), pe = w(de);
              je(L(pe), () => r()("system.unavailable_option_value")), y(de), ke(() => {
                var re;
                return pt(pe, `${(re = e(F).name) != null ? re : ""} - `);
              }), b(N, de);
            }, V = (N) => {
              var de = yp(), pe = w(de, !0);
              y(de), ke(() => pt(pe, e(F).name)), b(N, de);
            };
            O(ae, (N) => {
              e(F).unavailable ? N(he) : N(V, !1);
            }), b(q, ue);
          }, $$slots: { default: !0 } });
        }
      }), y(S), Fi(S, (C) => te(p, C), () => e(p)), ke(() => Ie(S, "id", m)), b(B, S);
    };
    O(G, (B) => {
      e(k) && B(ne);
    }), y(J), xo(J, (B, S) => Z == null ? void 0 : Z(B, S), () => j), ke(() => {
      var B;
      Ie(J, "data-name", o().name), Ie(J, "data-value", (B = i()) != null ? B : "");
    }), b(n, J);
    var X = at(T);
    return s(), X;
  }
  function Bp(n, t, r) {
    try {
      const a = t().optionValues.find((s) => s.name === n.target.value);
      a != null && a.unavailable && yr(document.body, "kaching-unavailable-option-value-selected", { swatch: "default" });
    } catch (a) {
      console.error(a);
    }
    r()(n.target.value);
  }
  Ke(fd, { option: {}, swatchSize: {}, swatchShape: {}, value: {}, placeholderText: {}, onChange: {} }, [], [], !0);
  var Cp = $('<option class="kaching-bundles-option-value" disabled> </option>'), Ip = $(" <!>", 1), Mp = $('<option class="kaching-bundles-option-value"><!></option>'), zp = $('<select class="kaching-bundles__bar-variant-select kaching-bundles-option"><!><!></select>');
  function vd(n, t) {
    rt(t, !0);
    const [r, a] = kt();
    let s = _(t, "option", 7), o = _(t, "value", 7), c = _(t, "placeholderText", 7, void 0), l = _(t, "onChange", 7);
    const i = $t();
    var u = { get option() {
      return s();
    }, set option(x) {
      s(x), v();
    }, get value() {
      return o();
    }, set value(x) {
      o(x), v();
    }, get placeholderText() {
      return c();
    }, set placeholderText(x = void 0) {
      c(x), v();
    }, get onChange() {
      return l();
    }, set onChange(x) {
      l(x), v();
    } }, g = zp();
    g.__change = [Bp, s, l];
    var k, f = w(g), h = (x) => {
      var m = Cp(), I = w(m, !0);
      y(m), m.value = m.__value = "", ke(() => {
        Du(m, o() == null), Ie(m, "hidden", o() != null), pt(I, c());
      }), b(x, m);
    };
    O(f, (x) => {
      c() != null && x(h);
    }), Gt(L(f), 17, () => s().optionValues, (x) => x.name, (x, m) => {
      var I = Mp(), P = w(I), A = (Q) => {
        var Z = Ip(), T = _e(Z);
        je(L(T), () => Te(i, "$translate", r)("system.unavailable_option_value")), ke(() => {
          var J;
          return pt(T, `${(J = e(m).name) != null ? J : ""} - `);
        }), b(Q, Z);
      }, j = (Q) => {
        var Z = Jn();
        ke(() => pt(Z, e(m).name)), b(Q, Z);
      };
      O(P, (Q) => {
        e(m).unavailable ? Q(A) : Q(j, !1);
      }), y(I);
      var D = {};
      ke(() => {
        var Q;
        Ie(I, "data-value", e(m).name), D !== (D = e(m).name) && (I.value = (Q = I.__value = e(m).name) != null ? Q : "");
      }), b(x, I);
    }), y(g), Po(g), ke(() => {
      var x, m, I, P, A;
      Ie(g, "aria-label", s().name), Ie(g, "data-name", s().name), Ie(g, "data-value", (x = o()) != null ? x : ""), k !== (k = (m = o()) != null ? m : "") && (g.value = (P = g.__value = (I = o()) != null ? I : "") != null ? P : "", wl(g, (A = o()) != null ? A : ""));
    }), b(n, g);
    var p = at(u);
    return a(), p;
  }
  jn(["change"]), Ke(vd, { option: {}, value: {}, placeholderText: {}, onChange: {} }, [], [], !0);
  var $p = $('<div class="kaching-bundles__swatch-buttons kaching-bundles-option"></div>');
  function _d(n, t) {
    rt(t, !0);
    const [r, a] = kt();
    let s = _(t, "option", 7), o = _(t, "swatchSize", 7), c = _(t, "swatchShape", 7), l = _(t, "value", 7), i = _(t, "onChange", 7);
    const u = $t();
    var g = { get option() {
      return s();
    }, set option(h) {
      s(h), v();
    }, get swatchSize() {
      return o();
    }, set swatchSize(h) {
      o(h), v();
    }, get swatchShape() {
      return c();
    }, set swatchShape(h) {
      c(h), v();
    }, get value() {
      return l();
    }, set value(h) {
      l(h), v();
    }, get onChange() {
      return i();
    }, set onChange(h) {
      i(h), v();
    } }, k = $p();
    Gt(k, 21, () => s().optionValues, (h) => h.name, (h, p) => {
      {
        let x = d(() => ["kaching-bundles__swatch-buttons__button", "kaching-bundles-option-value", e(p).name === l() && "kaching-bundles__swatch-buttons__button--selected"]), m = d(() => e(p).unavailable ? `${e(p).name} - ${Te(u, "$translate", r)("system.unavailable_option_value")}` : e(p).name);
        Xt(h, { element: "span", get class() {
          return e(x);
        }, get title() {
          return e(p).name;
        }, get "aria-label"() {
          return e(m);
        }, get "data-value"() {
          return e(p).name;
        }, onclick: () => (function(I) {
          l(I);
          try {
            const P = s().optionValues.find((A) => A.name === I);
            P != null && P.unavailable && yr(document.body, "kaching-unavailable-option-value-selected", { swatch: "buttons" });
          } catch (P) {
            console.error(P);
          }
          i()(l());
        })(e(p).name), children: (I, P) => {
          Cs(I, { get color() {
            return e(p).swatch.color;
          }, get image() {
            return e(p).swatch.image;
          }, get size() {
            return o();
          }, get shape() {
            return c();
          }, get unavailable() {
            return e(p).unavailable;
          } });
        }, $$slots: { default: !0 } });
      }
    }), y(k), ke(() => {
      Ie(k, "data-name", s().name), Ie(k, "data-value", l());
    }), b(n, k);
    var f = at(g);
    return a(), f;
  }
  Ke(_d, { option: {}, swatchSize: {}, swatchShape: {}, value: {}, onChange: {} }, [], [], !0);
  const ca = (n) => {
    if (!n) return;
    const { colors: t, fonts: r, cornerRadius: a, pillCornerRadius: s } = n;
    return { cornerRadius: s != null ? s : a, font: r == null ? void 0 : r.pill, background: t == null ? void 0 : t.pillBackground, text: t == null ? void 0 : t.pillText, border: t == null ? void 0 : t.pillBorder, selectedBackground: t == null ? void 0 : t.pillSelectedBackground, selectedText: t == null ? void 0 : t.pillSelectedText, selectedBorder: t == null ? void 0 : t.pillSelectedBorder };
  };
  var Dp = $('<div class="kaching-bundles__pill-buttons kaching-bundles-option"></div>');
  function kd(n, t) {
    rt(t, !0);
    const [r, a] = kt();
    let s = _(t, "option", 7), o = _(t, "pillStyle", 7), c = _(t, "value", 7), l = _(t, "onChange", 7);
    const i = $t(), u = d(() => ((h) => {
      if (!h) return "";
      const { cornerRadius: p, font: x } = h;
      return mn({ "kaching-pill-corner-radius": p == null ? null : `${p}px`, "kaching-pill-font-size": x && `${x.size}px`, "kaching-pill-font-weight": x && gr(x.style), "kaching-pill-font-style": x && hr(x.style), "kaching-pill-background-color": Qe(h.background), "kaching-pill-text-color": Qe(h.text), "kaching-pill-border-color": Qe(h.border), "kaching-pill-selected-background-color": Qe(h.selectedBackground), "kaching-pill-selected-text-color": Qe(h.selectedText), "kaching-pill-selected-border-color": Qe(h.selectedBorder) });
    })(o()));
    var g = { get option() {
      return s();
    }, set option(h) {
      s(h), v();
    }, get pillStyle() {
      return o();
    }, set pillStyle(h) {
      o(h), v();
    }, get value() {
      return c();
    }, set value(h) {
      c(h), v();
    }, get onChange() {
      return l();
    }, set onChange(h) {
      l(h), v();
    } }, k = Dp();
    Gt(k, 21, () => s().optionValues, (h) => h.name, (h, p) => {
      {
        let x = d(() => ["kaching-bundles__pill-buttons__button", "kaching-bundles-option-value", e(p).name === c() && "kaching-bundles__pill-buttons__button--selected", e(p).unavailable && "kaching-bundles__pill-buttons__button--unavailable"]), m = d(() => e(p).unavailable ? `${e(p).name} - ${Te(i, "$translate", r)("system.unavailable_option_value")}` : e(p).name);
        Xt(h, { element: "span", get class() {
          return e(x);
        }, get title() {
          return e(p).name;
        }, get "aria-label"() {
          return e(m);
        }, get "data-value"() {
          return e(p).name;
        }, onclick: () => (function(I) {
          c(I);
          try {
            const P = s().optionValues.find((A) => A.name === I);
            P != null && P.unavailable && yr(document.body, "kaching-unavailable-option-value-selected", { swatch: "pills" });
          } catch (P) {
            console.error(P);
          }
          l()(c());
        })(e(p).name), children: (I, P) => {
          ma();
          var A = Jn();
          ke(() => pt(A, e(p).name)), b(I, A);
        }, $$slots: { default: !0 } });
      }
    }), y(k), ke(() => {
      Ie(k, "data-name", s().name), Ie(k, "data-value", c()), Et(k, e(u));
    }), b(n, k);
    var f = at(g);
    return a(), f;
  }
  function md(n, t) {
    rt(t, !0);
    let r = _(t, "value", 7), a = _(t, "option", 7), s = _(t, "swatchSize", 7, 18), o = _(t, "swatchShape", 7, "circle"), c = _(t, "swatchType", 7), l = _(t, "pillStyle", 7, void 0), i = _(t, "placeholderText", 7, void 0), u = _(t, "onChange", 7);
    function g(m) {
      u()({ position: a().position, value: m });
    }
    var k = { get value() {
      return r();
    }, set value(m) {
      r(m), v();
    }, get option() {
      return a();
    }, set option(m) {
      a(m), v();
    }, get swatchSize() {
      return s();
    }, set swatchSize(m = 18) {
      s(m), v();
    }, get swatchShape() {
      return o();
    }, set swatchShape(m = "circle") {
      o(m), v();
    }, get swatchType() {
      return c();
    }, set swatchType(m) {
      c(m), v();
    }, get pillStyle() {
      return l();
    }, set pillStyle(m = void 0) {
      l(m), v();
    }, get placeholderText() {
      return i();
    }, set placeholderText(m = void 0) {
      i(m), v();
    }, get onChange() {
      return u();
    }, set onChange(m) {
      u(m), v();
    } }, f = ze(), h = _e(f), p = (m) => {
      fd(m, { get option() {
        return a();
      }, get swatchSize() {
        return s();
      }, get swatchShape() {
        return o();
      }, get value() {
        return r();
      }, get placeholderText() {
        return i();
      }, onChange: g });
    }, x = (m) => {
      var I = ze(), P = _e(I), A = (D) => {
        kd(D, { get option() {
          return a();
        }, get pillStyle() {
          return l();
        }, get value() {
          return r();
        }, onChange: g });
      }, j = (D) => {
        var Q = ze(), Z = _e(Q), T = (z) => {
          _d(z, { get option() {
            return a();
          }, get swatchSize() {
            return s();
          }, get swatchShape() {
            return o();
          }, get value() {
            return r();
          }, onChange: g });
        }, J = (z) => {
          vd(z, { get option() {
            return a();
          }, get value() {
            return r();
          }, get placeholderText() {
            return i();
          }, onChange: g });
        };
        O(Z, (z) => {
          c() === "colorButtons" || c() === "imageButtons" || c() === "productImageButtons" ? z(T) : z(J, !1);
        }, !0), b(D, Q);
      };
      O(P, (D) => {
        c() === "pillButtons" ? D(A) : D(j, !1);
      }, !0), b(m, I);
    };
    return O(h, (m) => {
      c() === "colorDropdown" || c() === "imageDropdown" || c() === "productImageDropdown" || c() === "mixedDropdown" ? m(p) : m(x, !1);
    }), b(n, f), at(k);
  }
  Ke(kd, { option: {}, pillStyle: {}, value: {}, onChange: {} }, [], [], !0), Ke(md, { value: {}, option: {}, swatchSize: {}, swatchShape: {}, swatchType: {}, pillStyle: {}, placeholderText: {}, onChange: {} }, [], [], !0);
  const xd = "mediaImages", Ml = (n = []) => {
    const t = Wr(yd(n));
    return Oa(xd, t), { getMediaImageUrl: t, setMediaImages: (r) => {
      t.set(yd(r));
    } };
  }, On = () => {
    const n = Ga(xd);
    if (!n) throw new Error("getMediaImages must be called within a component tree that has setupMediaImages initialized");
    return n;
  }, yd = (n) => (t) => {
    if (!t) return;
    const r = n.find((a) => a.gid === t);
    return r == null ? void 0 : r.url;
  };
  var Tp = $('<img alt="" class="kaching-bundles__bar-variant-image"/>'), Vp = $("<div><span>#</span> <span> </span></div>"), Ap = $('<span class="kaching-bundles__bar-variant-option__name-value"> </span>'), qp = $('<span class="kaching-bundles__bar-variant-option__name"><span class="kaching-bundles__bar-variant-option__name-label"> </span> <!></span>'), Gp = $('<div class="kaching-bundles__bar-variant-option"><!> <!></div>'), Op = $('<div class="kaching-bundles__invalid-variant-error"><!></div>'), Fp = $('<div><div><!> <div class="kaching-bundles__bar-variant-main"><div class="kaching-bundles__bar-variant-selects"></div> <!></div></div></div>');
  function Yn(n, t) {
    rt(t, !0);
    const r = () => Te(P, "$config", s), a = () => Te(A, "$swatchSettings", s), [s, o] = kt(), c = (R, ee = Xr) => {
      {
        let ce = d(() => {
          var ve;
          return (ve = e(D)[ee().position - 1]) != null ? ve : null;
        });
        md(R, { get option() {
          return ee();
        }, get swatchSize() {
          return a().swatchSize;
        }, get swatchShape() {
          return a().swatchShape;
        }, get swatchType() {
          return ee().swatchType;
        }, get pillStyle() {
          return a().pillStyle;
        }, get value() {
          return e(ce);
        }, get placeholderText() {
          return u();
        }, onChange: B });
      }
    };
    let l = _(t, "product", 7), i = _(t, "selectedVariantId", 7), u = _(t, "placeholderText", 7, void 0), g = _(t, "number", 7, void 0), k = _(t, "numberHidden", 7, !1), f = _(t, "showImage", 7, !1), h = _(t, "forceDropdown", 7, !1), p = _(t, "onChange", 7), x = _(t, "onOptionChange", 7);
    const m = $t(), I = On(), P = Sn(), A = Qu();
    let j = d(() => l().variants.find((R) => R.id === i())), D = Fe(ut([])), Q = [], Z = null;
    et(() => {
      if (e(j)) return Z = i(), void te(D, [...e(j).options], !0);
      if (i() && r().featureFlags.hide_missing_variants && l().variants.length > 0) {
        const R = H(l().variants, 0, e(D));
        if (R) return te(D, [...R.options], !0), void tn(() => p()(R.id));
      }
      if (u() != null) {
        const R = l().options.map((ve) => ve.name), ee = Q.length === R.length && Q.every((ve, oe) => ve === R[oe]), ce = Z != null;
        return Z = null, void (ee && !ce || (Q = R, te(D, R.map(() => null), !0)));
      }
      te(D, [], !0);
    });
    let T = d(() => e(D).length > 0 && e(D).every((R) => R != null)), J = d(() => u() != null ? e(T) && (!e(j) || !e(j).availableForSale) : !e(j) || !e(j).availableForSale), z = d(() => {
      return R = l(), ee = e(D), ce = a().swatchOptions, ve = Te(I, "$getMediaImageUrl", s), oe = h(), R.options.map((Be) => ({ name: Be.name, position: Be.position, swatchType: S(Be, ce, oe), optionValues: Be.optionValues.map((be) => {
        const K = U(Be.position, be.name, ee, R);
        if (r().featureFlags.hide_missing_variants && K.length === 0) return null;
        const Y = !K.some((ge) => ge.availableForSale);
        return { name: be.name, unavailable: Y, swatch: C(Be, be, ce, ve, ee, R) };
      }).filter((be) => be !== null) }));
      var R, ee, ce, ve, oe;
    }), G = d(() => a().showSelectedSwatchName && !h());
    const ne = ["colorButtons", "imageButtons", "productImageButtons", "pillButtons"];
    let X = d(() => {
      var R;
      return f() ? ((R = e(j)) == null ? void 0 : R.image) || l().image : null;
    });
    function B({ position: R, value: ee }) {
      const ce = e(D)[R - 1];
      if (e(D)[R - 1] = ee, u() != null && e(D).some((oe) => oe == null)) return;
      let ve = l().variants.find((oe) => e(D).every((Be, be) => oe.options[be] === Be));
      if (!ve && r().featureFlags.hide_missing_variants) {
        const oe = H(U(R, ee, e(D), l()), R, e(D));
        oe && (ve = oe, te(D, [...ve.options], !0));
      }
      ve && (p()(ve.id), x() && x()(R, ee, ce));
    }
    function S(R, ee, ce) {
      var ve;
      const oe = (ve = ee.find((Be) => Be.name === R.defaultName)) == null ? void 0 : ve.swatchType;
      if (oe && oe !== "default") return ce ? (function(Be) {
        switch (Be) {
          case "colorButtons":
            return "colorDropdown";
          case "imageButtons":
            return "imageDropdown";
          case "productImageButtons":
            return "productImageDropdown";
          case "pillButtons":
            return "default";
          default:
            return Be;
        }
      })(oe) : oe;
      if (!r().featureFlags.native_swatches_disabled) {
        for (const Be of R.optionValues) if (Be.swatch.image || Be.swatch.color) return "mixedDropdown";
      }
      return "default";
    }
    function C(R, ee, ce, ve, oe, Be) {
      var be, K;
      const Y = r().featureFlags.native_swatches_disabled ? null : ee.swatch, ge = ce.find((we) => we.name === R.defaultName);
      if (!ge || ge.swatchType === "default") return Y || { color: null, image: null };
      if (ge.swatchType === "pillButtons") return { color: null, image: null };
      if (ge.swatchType === "colorButtons" || ge.swatchType === "colorDropdown")
        return { color: F((be = ge.colors.find((we) => we.name === ee.defaultName)) == null ? void 0 : be.color) || (Y == null ? void 0 : Y.color) || F(pp(ee.defaultName)) || null, image: null };
      if (ge.swatchType === "imageButtons" || ge.swatchType === "imageDropdown") {
        const we = ve(((K = ge.images.find((me) => me.name === ee.defaultName)) == null ? void 0 : K.mediaImageGID) || null);
        return { color: (Y == null ? void 0 : Y.color) || null, image: we || (Y == null ? void 0 : Y.image) || null };
      }
      if (ge.swatchType === "productImageDropdown" || ge.swatchType === "productImageButtons") {
        const we = R.position - 1, me = Be.variants.filter((Ze) => Ze.image && Ze.options[we] === ee.name);
        let Pe = me[0], Ge = 0;
        for (const Ze of me) {
          let Ve = 0;
          for (let fe = 0; fe < we; fe++) Ze.options[fe] === oe[fe] && Ve++;
          Ve > Ge && (Ge = Ve, Pe = Ze);
        }
        return { color: null, image: (Pe == null ? void 0 : Pe.image) || null };
      }
      return { color: null, image: null };
    }
    function F(R) {
      if (!R) return;
      const { red: ee, green: ce, blue: ve } = R;
      return `#${ee.toString(16).padStart(2, "0")}${ce.toString(16).padStart(2, "0")}${ve.toString(16).padStart(2, "0")}`;
    }
    function U(R, ee, ce, ve) {
      const oe = R - 1, Be = ce.slice(0, oe);
      return ve.variants.filter((be) => be.options[oe] === ee && Be.every((K, Y) => K == null || be.options[Y] === K));
    }
    function H(R, ee, ce) {
      if (R.length === 0) return null;
      let ve = R[0], oe = -1;
      const Be = ce.slice(ee);
      for (const be of R) {
        let K = 0;
        for (let Y = 0; Y < Be.length; Y++) be.options[ee + Y] === Be[Y] && (K += Be.length - Y);
        K > oe && (oe = K, ve = be);
      }
      return ve;
    }
    var se = { get product() {
      return l();
    }, set product(R) {
      l(R), v();
    }, get selectedVariantId() {
      return i();
    }, set selectedVariantId(R) {
      i(R), v();
    }, get placeholderText() {
      return u();
    }, set placeholderText(R = void 0) {
      u(R), v();
    }, get number() {
      return g();
    }, set number(R = void 0) {
      g(R), v();
    }, get numberHidden() {
      return k();
    }, set numberHidden(R = !1) {
      k(R), v();
    }, get showImage() {
      return f();
    }, set showImage(R = !1) {
      f(R), v();
    }, get forceDropdown() {
      return h();
    }, set forceDropdown(R = !1) {
      h(R), v();
    }, get onChange() {
      return p();
    }, set onChange(R) {
      p(R), v();
    }, get onOptionChange() {
      return x();
    }, set onOptionChange(R) {
      x(R), v();
    } }, E = Fp();
    let q;
    var ie = w(E);
    let ue;
    var W = w(ie), ae = (R) => {
      var ee = Tp();
      ke(() => Ie(ee, "src", e(X))), b(R, ee);
    }, he = (R) => {
      var ee = ze(), ce = _e(ee), ve = (oe) => {
        var Be = Vp();
        let be;
        var K = L(w(Be), 2), Y = w(K, !0);
        y(K), y(Be), ke((ge) => {
          be = Rt(Be, 1, "kaching-bundles__bar-variant-number", null, be, ge), pt(Y, g());
        }, [() => ({ "kaching-bundles__bar-variant-number--hidden": k() })]), b(oe, Be);
      };
      O(ce, (oe) => {
        g() && oe(ve);
      }, !0), b(R, ee);
    };
    O(W, (R) => {
      e(X) ? R(ae) : R(he, !1);
    });
    var V = L(W, 2), N = w(V);
    Gt(N, 21, () => e(z), (R) => R.name, (R, ee) => {
      var ce = ze(), ve = _e(ce), oe = (be) => {
        var K = Gp(), Y = w(K), ge = (me) => {
          var Pe = qp(), Ge = w(Pe), Ze = w(Ge);
          y(Ge);
          var Ve = L(Ge, 2), fe = (We) => {
            var $e = Ap(), M = w($e, !0);
            y($e), ke(() => {
              var xe, Me;
              return pt(M, (Me = (xe = e(D)[e(ee).position - 1]) != null ? xe : u()) != null ? Me : "");
            }), b(We, $e);
          };
          O(Ve, (We) => {
            ne.includes(e(ee).swatchType) && We(fe);
          }), y(Pe), ke(() => {
            var We;
            return pt(Ze, `${(We = e(ee).name) != null ? We : ""}:`);
          }), b(me, Pe);
        };
        O(Y, (me) => {
          e(ee).swatchType !== "pillButtons" && me(ge);
        });
        var we = L(Y, 2);
        c(we, () => e(ee)), y(K), b(be, K);
      }, Be = (be) => {
        c(be, () => e(ee));
      };
      O(ve, (be) => {
        e(G) ? be(oe) : be(Be, !1);
      }), b(R, ce);
    }), y(N);
    var de = L(N, 2), pe = (R) => {
      var ee = Op();
      je(w(ee), () => Te(m, "$translate", s)("system.invalid_variant")), y(ee), b(R, ee);
    };
    O(de, (R) => {
      e(J) && R(pe);
    }), y(V), y(ie), y(E), ke((R, ee) => {
      q = Rt(E, 1, "kaching-bundles__bar-variant", null, q, R), ue = Rt(ie, 1, "kaching-bundles__bar-variant__content", null, ue, ee);
    }, [() => ({ "kaching-bundles__bar-variant--invalid": e(J) }), () => ({ "kaching-bundles__bar-variant__content--with-option-names": e(G) })]), b(n, E);
    var re = at(se);
    return o(), re;
  }
  Ke(Yn, { product: {}, selectedVariantId: {}, placeholderText: {}, number: {}, numberHidden: {}, showImage: {}, forceDropdown: {}, onChange: {}, onOptionChange: {} }, [], [], !0);
  var Lp = $('<a target="_blank"><!></a>'), Ep = $("<div><!></div>");
  function ar(n, t) {
    rt(t, !0);
    const r = _(t, "url", 7), a = _(t, "children", 7), s = _(t, "class", 7);
    var o = { get url() {
      return r();
    }, set url(g) {
      r(g), v();
    }, get children() {
      return a();
    }, set children(g) {
      a(g), v();
    }, get class() {
      return s();
    }, set class(g) {
      s(g), v();
    } }, c = ze(), l = _e(c), i = (g) => {
      var k = Lp();
      ds(w(k), a), y(k), ke(() => {
        Ie(k, "href", r()), Rt(k, 1, qi(s()));
      }), b(g, k);
    }, u = (g) => {
      var k = Ep();
      ds(w(k), a), y(k), ke(() => Rt(k, 1, qi(s()))), b(g, k);
    };
    return O(l, (g) => {
      r() ? g(i) : g(u, !1);
    }), b(n, c), at(o);
  }
  Ke(ar, { url: {}, children: {}, class: {} }, [], [], !0);
  const wd = "priceFormatter", Ni = (n = "{{amount}}", t) => {
    const r = Wr(Pd(n, t));
    return Oa(wd, r), { formatPrice: r, setMoneyFormat: (a, s) => {
      r.set(Pd(a, s));
    } };
  }, xn = () => {
    const n = Ga(wd);
    if (!n) throw new Error("getPriceFormatter must be called within a component tree that has setupPriceFormatter initialized");
    return n;
  }, Pd = (n, t) => (r, a) => jp(r, n, (!(a != null && a.preserveDecimals) || Math.round(r) % 100 == 0) && t), jp = (n, t, r) => {
    const a = ((i, u) => u ? i.includes("amount_no_decimals") ? i : i.replace(/\{\{.+\}\}/g, "{{ amount_no_decimals }}") : i)(t, r), s = { amount: (i) => i.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), amount_no_decimal: (i) => i.toLocaleString("en-US", { maximumFractionDigits: 0 }), amount_no_decimals: (i) => i.toLocaleString("en-US", { maximumFractionDigits: 0 }), amount_with_comma_separator: (i) => i.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), amount_no_decimals_with_comma_separator: (i) => i.toLocaleString("de-DE", { maximumFractionDigits: 0 }), amount_with_apostrophe_separator: (i) => i.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/,/g, "'"), amount_no_decimals_with_space_separator: (i) => i.toLocaleString("fr-FR", { maximumFractionDigits: 0 }).replace(/\s/g, " "), amount_with_space_separator: (i) => i.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\s/g, " "), amount_with_period_and_space_separator: (i) => i.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\s/g, " ").replace(",", ".") }, o = /{{\s*(\w+)\s*}}/, c = a.match(o), l = (s[c ? c[1] : "amount"] || s.amount)(n / 100);
    return a.replace(o, l);
  }, Sd = "data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.08398%205H7.91732'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Bd = "data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.00065%202.08337V7.91671M2.08398%205.00004H7.91732'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Rp = { new_price: ({ totalDiscountedPrice: n, quantity: t }) => ({ value: n / t, type: "price" }), new_total: ({ totalDiscountedPrice: n }) => ({ value: n, type: "price" }), original_price: ({ totalFullPrice: n, quantity: t }) => ({ value: n / t, type: "price" }), original_total: ({ totalFullPrice: n }) => ({ value: n, type: "price" }), saved_total: ({ totalCompareAtPrice: n, totalDiscountedPrice: t }) => ({ value: n - t, type: "price" }), saved_amount: ({ totalCompareAtPrice: n, totalDiscountedPrice: t, quantity: r }) => ({ value: (n - t) / r, type: "price" }), quantity: ({ quantity: n }) => ({ value: n, type: "number" }), gifts_count: ({ freeGiftsCount: n }) => {
    if (n !== void 0) return { value: n, type: "number" };
  }, buy_quantity: ({ dealBar: n, quantity: t }) => {
    if ((n == null ? void 0 : n.dealBarType) !== Zt.Bxgy) return;
    const r = n.buyQuantity + n.getQuantity;
    return { value: t - Math.floor(t / r) * n.getQuantity, type: "number" };
  }, get_quantity: ({ dealBar: n, quantity: t }) => {
    if ((n == null ? void 0 : n.dealBarType) !== Zt.Bxgy) return;
    const r = n.buyQuantity + n.getQuantity;
    return { value: Math.floor(t / r) * n.getQuantity, type: "number" };
  }, saved_percentage: ({ totalCompareAtPrice: n, totalDiscountedPrice: t, dealBar: r, legacySavedPercentage: a }) => {
    if (a && r && (r.dealBarType === Zt.QuantityBreak || !r.dealBarType) && r.discountType === "percentage") return { value: Math.round(Number(r.discountValue)), type: "percentage" };
    if (n <= 0) return { value: 0, type: "percentage" };
    let s = (n - t) / n * 100;
    return s = Math.round(100 * s) / 100, { value: Math.round(s), type: "percentage" };
  }, new_unit_price: ({ totalDiscountedPrice: n, unitQuantity: t }) => {
    if (t) return { value: n / t, type: "price", preserveDecimals: !0 };
  }, saved_per_unit: ({ totalCompareAtPrice: n, totalDiscountedPrice: t, unitQuantity: r }) => {
    if (r) return { value: (n - t) / r, type: "price", preserveDecimals: !0 };
  }, original_unit_price: ({ totalFullPrice: n, unitQuantity: t }) => {
    if (t) return { value: n / t, type: "price", preserveDecimals: !0 };
  }, unit_quantity: ({ unitQuantity: n }) => {
    if (n) return { value: n, type: "number" };
  }, selling_plan_discount: ({ sellingPlan: n, totalFullPrice: t, quantity: r }) => {
    const a = n == null ? void 0 : n.priceAdjustment;
    if (a) switch (a.type) {
      case "percentage":
        return a.value <= 0 ? void 0 : { value: a.value, type: "percentage" };
      case "fixed_amount":
        return a.value <= 0 ? void 0 : { value: a.value, type: "price" };
      case "price": {
        const s = t / r - a.value;
        return s <= 0 ? void 0 : { value: s, type: "price" };
      }
    }
  } }, Np = ({ variable: n, product: t, products: r, selectedProductTitles: a, selectedVariants: s, sellingPlan: o }) => {
    var c, l;
    const i = n.match(/^product_(\d+)$/);
    if (i) {
      const u = Number(i[1]);
      return (c = r == null ? void 0 : r.get(u)) == null ? void 0 : c.title;
    }
    switch (n) {
      case "product":
        return (l = t == null ? void 0 : t.title) != null ? l : a && a.length > 0 ? a.join(", ") : void 0;
      case "variant_title":
        return ((u) => {
          if (!u) return;
          const g = [];
          for (const { variant: k, quantity: f } of u) {
            const h = Ru(k);
            if (!h) continue;
            const p = g.find((x) => x.title === h);
            p ? p.count += f : g.push({ title: h, count: f });
          }
          return g.length !== 0 ? g.length === 1 && g[0].count === 1 ? g[0].title : g.map(({ title: k, count: f }) => `${f}× ${k}`).join(", ") : void 0;
        })(s);
      case "metafield":
        return (t == null ? void 0 : t.metafields.text) || void 0;
      case "metafield2":
        return (t == null ? void 0 : t.metafields.text2) || void 0;
      case "metafield3":
        return (t == null ? void 0 : t.metafields.text3) || void 0;
      case "metafield4":
        return (t == null ? void 0 : t.metafields.text4) || void 0;
      case "selling_plan":
        return (o == null ? void 0 : o.name) || void 0;
    }
  }, Cd = /{{\s*([a-zA-Z0-9_.]+)\s*(?:([+\-*/])\s*(\d+(?:\.\d+)?)?)?\s*}}/g, Id = /\{\{[^}]*\}\}/g, Qp = (n) => n.replace(Id, ""), Wp = ({ priceFormatter: n, product: t, products: r, selectedProductTitles: a, selectedVariants: s, totalFullPrice: o, totalCompareAtPrice: c, totalDiscountedPrice: l, quantity: i, dealBar: u, legacySavedPercentage: g, unitQuantity: k, sellingPlan: f, freeGiftsCount: h }) => (p, x, m) => {
    const I = Rp[p];
    if (I) {
      const P = I({ totalFullPrice: o, totalCompareAtPrice: c != null ? c : o, totalDiscountedPrice: l, quantity: i, dealBar: u, legacySavedPercentage: g, unitQuantity: k, sellingPlan: f, freeGiftsCount: h });
      if (!P) return;
      let A = P.value;
      if (x !== void 0 && m !== void 0) {
        const D = ((Q, Z, T) => {
          switch (Z) {
            case "+":
              return Q + T;
            case "-":
              return Q - T;
            case "*":
              return Q * T;
            case "/":
              return T === 0 ? void 0 : Q / T;
          }
        })(A, x, P.type !== "price" || x !== "+" && x !== "-" ? m : 100 * m);
        if (D === void 0) return;
        A = D;
      }
      const j = x === "/" || P.preserveDecimals === !0;
      return ((D, Q, Z, T) => {
        switch (Q) {
          case "price":
            return Z(D, { preserveDecimals: T });
          case "number":
            return String(Math.round(100 * D) / 100);
          case "percentage":
            return `${Math.round(D)}%`;
        }
      })(A, P.type, n, j);
    }
    if (x === void 0) return Np({ variable: p, product: t, products: r, selectedProductTitles: a, selectedVariants: s, sellingPlan: f });
  }, yn = ({ priceFormatter: n, product: t, products: r, selectedProductTitles: a, selectedVariants: s, totalFullPrice: o, totalCompareAtPrice: c, totalDiscountedPrice: l, quantity: i, dealBar: u, legacySavedPercentage: g = !1, unitQuantity: k, sellingPlan: f, freeGiftsCount: h }) => (p) => {
    if (!p) return p;
    const x = Wp({ priceFormatter: n, product: t, products: r, selectedProductTitles: a, selectedVariants: s, totalFullPrice: o, totalCompareAtPrice: c, totalDiscountedPrice: l, quantity: i, dealBar: u, legacySavedPercentage: g, unitQuantity: k, sellingPlan: f, freeGiftsCount: h });
    return p.replace(Cd, (m, I, P, A) => {
      var j;
      if (P && A) {
        const D = parseFloat(A);
        return (j = x(I, P, D)) != null ? j : "";
      }
      return x(I) || "";
    }).replace(Id, "");
  };
  function Ao(n) {
    const { unitPriceMeasurement: t } = n;
    return t ? t.referenceValue == 1 ? t.referenceUnit : `${t.referenceValue}${t.referenceUnit}` : null;
  }
  function Vr(n) {
    return n.reduce((t, { variant: r, quantity: a }) => {
      const { unitPriceMeasurement: s } = r;
      if (!s) return t;
      const o = (function(c, l, i) {
        if (l === i) return c;
        if (l === "g" && i === "kg" || l === "ml" && i === "l") return c / 1e3;
      })(s.quantityValue, s.quantityUnit, s.referenceUnit);
      return o ? t + o / s.referenceValue * a : t;
    }, 0) || null;
  }
  var Hp = $('<img class="kaching-bundles__choose-multiple-gifts__product-image" alt=""/>'), Up = $('<span class="kaching-bundles__choose-multiple-gifts__product-title"> </span>'), Zp = $('<span class="kaching-bundles__choose-multiple-gifts__subtitle"><!></span>'), Jp = $('<div class="kaching-bundles__choose-multiple-gifts__product-compare-at-price"><!></div>'), Yp = $('<span class="kaching-bundles__choose-multiple-gifts__variant-counter"></span>'), Kp = $('<div class="kaching-bundles__choose-multiple-gifts__variant-selector-row"><div class="kaching-bundles__choose-multiple-gifts__variant-selector-content"><!> <div class="kaching-bundles__choose-multiple-gifts__variant-selector-with-counter"><!> <div class="kaching-bundles__choose-multiple-gifts__variant-selector-wrapper"><!></div></div></div></div>'), Xp = $('<div class="kaching-bundles__choose-multiple-gifts__variant-selectors"></div>'), eb = $('<img alt="Decrease"/>'), tb = $('<img alt="Increase"/>'), nb = $('<div class="kaching-bundles__choose-multiple-gifts__gift-quantity"><!> <span class="kaching-bundles__choose-multiple-gifts__gift-quantity-value"> </span> <!></div>'), rb = $("<img/>"), ab = $("<!> <!>", 1), ib = $('<div class="kaching-bundles__choose-multiple-gifts__product"><div class="kaching-bundles__choose-multiple-gifts__product-container"><!> <div class="kaching-bundles__choose-multiple-gifts__product-content"><!> <!> <div class="kaching-bundles__choose-multiple-gifts__product-price-container"><div class="kaching-bundles__choose-multiple-gifts__product-price"><!></div> <!></div> <!></div></div> <div class="kaching-bundles__choose-multiple-gifts__product-actions"><!> <!></div></div>');
  function Md(n, t) {
    rt(t, !0);
    const r = () => Te(m, "$formatPrice", s), a = () => Te(x, "$translate", s), [s, o] = kt(), c = _(t, "product", 7), l = _(t, "dealBlock", 7), i = _(t, "multipleGiftsSelector", 7), u = _(t, "selectedVariantIds", 7), g = _(t, "availableQuantity", 7), k = _(t, "onSelect", 7), f = _(t, "onRemove", 7), h = _(t, "onVariantChange", 7), p = _(t, "onQuantityChange", 7), x = $t(), m = xn();
    let I = Fe(!1);
    const P = d(() => u().length > 0), A = d(() => u().length || 1), j = d(() => !e(P) && g() === 0), D = d(() => c().variants.find((oe) => oe.id === u()[0]) || c().variants[0]), Q = d(() => e(I) && e(D).image || c().image), Z = d(() => u().map((oe) => c().variants.find((Be) => Be.id === oe) || c().variants[0])), T = d(() => e(Z).length > 0 ? e(Z).reduce((oe, Be) => oe + B(l(), Be), 0) : B(l(), e(D))), J = d(() => c().url ? `${c().url}?variant=${u()[0] || c().variants[0].id}` : void 0), z = d(() => l().chooseMultipleGiftsModal), G = d(() => yn({ priceFormatter: r(), product: c(), totalFullPrice: e(T), totalDiscountedPrice: 0, quantity: e(A), unitQuantity: Vr(e(Z).map((oe) => ({ variant: oe, quantity: 1 }))) })), ne = d(() => {
      var oe;
      return e(G)(a()(((oe = e(z)) == null ? void 0 : oe.subtitle) || ""));
    }), X = d(() => {
      var oe, Be;
      return e(P) ? (oe = e(z)) == null ? void 0 : oe.buttonTextAfterSelection : (Be = e(z)) == null ? void 0 : Be.buttonTextBeforeSelection;
    });
    function B(oe, Be) {
      return oe.useProductCompareAtPrice && Be.compareAtPrice ? Math.max(Be.price, Be.compareAtPrice) : Be.price;
    }
    function S() {
      e(A) <= 1 || p()(e(A) - 1);
    }
    function C() {
      e(A) >= g() || p()(e(A) + 1);
    }
    var F = { get product() {
      return c();
    }, set product(oe) {
      c(oe), v();
    }, get dealBlock() {
      return l();
    }, set dealBlock(oe) {
      l(oe), v();
    }, get multipleGiftsSelector() {
      return i();
    }, set multipleGiftsSelector(oe) {
      i(oe), v();
    }, get selectedVariantIds() {
      return u();
    }, set selectedVariantIds(oe) {
      u(oe), v();
    }, get availableQuantity() {
      return g();
    }, set availableQuantity(oe) {
      g(oe), v();
    }, get onSelect() {
      return k();
    }, set onSelect(oe) {
      k(oe), v();
    }, get onRemove() {
      return f();
    }, set onRemove(oe) {
      f(oe), v();
    }, get onVariantChange() {
      return h();
    }, set onVariantChange(oe) {
      h(oe), v();
    }, get onQuantityChange() {
      return p();
    }, set onQuantityChange(oe) {
      p(oe), v();
    } }, U = ib(), H = w(U), se = w(H), E = (oe) => {
      ar(oe, { get url() {
        return e(J);
      }, class: "kaching-bundles__choose-multiple-gifts__product-image-link", children: (Be, be) => {
        var K = Hp();
        Ie(K, "width", 100), Ie(K, "height", 100), ke(() => Ie(K, "src", e(Q))), b(Be, K);
      }, $$slots: { default: !0 } });
    };
    O(se, (oe) => {
      e(Q) && oe(E);
    });
    var q = L(se, 2), ie = w(q);
    ar(ie, { get url() {
      return e(J);
    }, class: "kaching-bundles__choose-multiple-gifts__product-link", children: (oe, Be) => {
      var be = Up(), K = w(be, !0);
      y(be), ke(() => pt(K, c().title)), b(oe, be);
    }, $$slots: { default: !0 } });
    var ue = L(ie, 2), W = (oe) => {
      var Be = Zp();
      je(w(Be), () => e(ne)), y(Be), b(oe, Be);
    };
    O(ue, (oe) => {
      e(ne) && oe(W);
    });
    var ae = L(ue, 2), he = w(ae);
    je(w(he), () => a()("system.free")), y(he);
    var V = L(he, 2), N = (oe) => {
      var Be = ze();
      lt(_e(Be), () => e(T), (be) => {
        var K = Jp();
        je(w(K), () => r()(e(T))), y(K), b(be, K);
      }), b(oe, Be);
    };
    O(V, (oe) => {
      i().showPrice && e(T) > 0 && oe(N);
    }), y(ae);
    var de = L(ae, 2), pe = (oe) => {
      var Be = Xp();
      Gt(Be, 21, u, Qr, (be, K, Y) => {
        var ge = Kp(), we = w(ge), me = w(we), Pe = (We) => {
          Pa(We, { get product() {
            return c();
          }, class: "kaching-bundles__choose-multiple-gifts__product-option-names" });
        };
        O(me, (We) => {
          Y === 0 && We(Pe);
        });
        var Ge = L(me, 2), Ze = w(Ge), Ve = (We) => {
          var $e = Yp();
          $e.textContent = `#${Y + 1}`, b(We, $e);
        };
        O(Ze, (We) => {
          u().length > 1 && We(Ve);
        });
        var fe = L(Ze, 2);
        Yn(w(fe), { get product() {
          return c();
        }, get selectedVariantId() {
          return e(K);
        }, onChange: (We) => {
          te(I, !0), h()(Y, We);
        } }), y(fe), y(Ge), y(we), y(ge), b(be, ge);
      }), y(Be), b(oe, Be);
    };
    O(de, (oe) => {
      c().variants.length > 1 && oe(pe);
    }), y(q), y(H);
    var re = L(H, 2), R = w(re), ee = (oe) => {
      var Be = nb(), be = w(Be);
      {
        let we = d(() => e(A) <= 1);
        Xt(be, { element: "span", class: "kaching-bundles__choose-multiple-gifts__gift-quantity-button", onclick: S, get disabled() {
          return e(we);
        }, children: (me, Pe) => {
          var Ge = eb();
          ke(() => Ie(Ge, "src", Sd)), b(me, Ge);
        }, $$slots: { default: !0 } });
      }
      var K = L(be, 2), Y = w(K, !0);
      y(K);
      var ge = L(K, 2);
      {
        let we = d(() => e(A) >= g());
        Xt(ge, { element: "span", class: "kaching-bundles__choose-multiple-gifts__gift-quantity-button", onclick: C, get disabled() {
          return e(we);
        }, children: (me, Pe) => {
          var Ge = tb();
          ke(() => Ie(Ge, "src", Bd)), b(me, Ge);
        }, $$slots: { default: !0 } });
      }
      y(Be), ke(() => pt(Y, e(A))), b(oe, Be);
    };
    O(R, (oe) => {
      e(P) && i().maxQuantity > 1 && oe(ee);
    });
    var ce = L(R, 2);
    {
      let oe = d(() => ["kaching-bundles__choose-multiple-gifts__product-button", e(j) && "kaching-bundles__choose-multiple-gifts__product-button--disabled", e(P) && "kaching-bundles__choose-multiple-gifts__product-button--selected"]);
      Xt(ce, { element: "span", get class() {
        return e(oe);
      }, onclick: function() {
        e(P) ? (te(I, !1), f()()) : k()();
      }, get disabled() {
        return e(j);
      }, children: (Be, be) => {
        var K = ab(), Y = _e(K), ge = (Ge) => {
          var Ze = rb();
          ke((Ve) => {
            Ie(Ze, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.3333%205.00008V4.33341C13.3333%203.39999%2013.3333%202.93328%2013.1517%202.57676C12.9919%202.26316%2012.7369%202.00819%2012.4233%201.8484C12.0668%201.66675%2011.6001%201.66675%2010.6667%201.66675H9.33333C8.39991%201.66675%207.9332%201.66675%207.57668%201.8484C7.26308%202.00819%207.00811%202.26316%206.84832%202.57676C6.66667%202.93328%206.66667%203.39999%206.66667%204.33341V5.00008M2.5%205.00008H17.5M15.8333%205.00008V14.3334C15.8333%2015.7335%2015.8333%2016.4336%2015.5608%2016.9684C15.3212%2017.4388%2014.9387%2017.8212%2014.4683%2018.0609C13.9335%2018.3334%2013.2335%2018.3334%2011.8333%2018.3334H8.16667C6.76654%2018.3334%206.06647%2018.3334%205.53169%2018.0609C5.06129%2017.8212%204.67883%2017.4388%204.43915%2016.9684C4.16667%2016.4336%204.16667%2015.7335%204.16667%2014.3334V5.00008'%20stroke='%23F04438'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), Ie(Ze, "alt", Ve);
          }, [() => a()("system.remove")]), b(Ge, Ze);
        };
        O(Y, (Ge) => {
          e(P) && Ge(ge);
        });
        var we = L(Y, 2), me = (Ge) => {
          var Ze = Jn();
          ke((Ve) => pt(Ze, Ve), [() => a()(e(X))]), b(Ge, Ze);
        }, Pe = (Ge) => {
          b(Ge, Jn("Choose"));
        };
        O(we, (Ge) => {
          e(X) ? Ge(me) : Ge(Pe, !1);
        }), b(Be, K);
      }, $$slots: { default: !0 } });
    }
    y(re), y(U), b(n, U);
    var ve = at(F);
    return o(), ve;
  }
  Ke(Md, { product: {}, dealBlock: {}, multipleGiftsSelector: {}, selectedVariantIds: {}, availableQuantity: {}, onSelect: {}, onRemove: {}, onVariantChange: {}, onQuantityChange: {} }, [], [], !0);
  const lb = { red: 0, green: 0, blue: 0, alpha: 0.5 };
  function sb(n, t) {
    var r;
    (r = t()) == null || r();
  }
  function ob(n, t, r, a, s) {
    var o;
    const c = t();
    r()(a().id, c), (o = s()) == null || o();
  }
  var cb = $('<img alt="Close"/>'), ub = $('<div class="kaching-bundles__choose-multiple-gifts"><div class="kaching-bundles__choose-multiple-gifts__header"><h2 class="kaching-bundles__choose-multiple-gifts__heading"><!></h2> <!></div> <div class="kaching-bundles__choose-multiple-gifts__products"></div> <div class="kaching-bundles__choose-multiple-gifts__footer"><span class="kaching-bundles__choose-multiple-gifts__footer-text"> </span> <div class="kaching-bundles__choose-multiple-gifts__footer-buttons"><button class="kaching-bundles__choose-multiple-gifts__footer-button kaching-bundles__choose-multiple-gifts__footer-button--cancel"> </button> <button class="kaching-bundles__choose-multiple-gifts__footer-button kaching-bundles__choose-multiple-gifts__footer-button--confirm"> </button></div></div></div>');
  function qo(n, t) {
    rt(t, !0);
    const r = () => Te(k, "$translate", a), [a, s] = kt(), o = _(t, "dealBlock", 7), c = _(t, "multipleGiftsSelector", 7), l = _(t, "products", 23, () => []), i = _(t, "initialSelectedGifts", 23, () => []), u = _(t, "onConfirm", 7, () => {
    }), g = _(t, "onClose", 7), k = $t();
    let f = Fe(ut((function(q) {
      const ie = {};
      for (const ue of q) {
        const W = ue.product.id;
        ie[W] || (ie[W] = []), ie[W].push(ue.variant.id);
      }
      return ie;
    })(i())));
    const h = d(() => o().chooseMultipleGiftsModal), p = d(() => ((q) => q ? mn({ "kaching-choose-multiple-gifts-button-size": q.buttonSize + "px", "kaching-choose-multiple-gifts-text-size": q.textSize + "px", "kaching-choose-multiple-gifts-price-color": Qe(q.priceColor), "kaching-choose-multiple-gifts-compare-at-price-color": Qe(q.compareAtPriceColor), "kaching-choose-multiple-gifts-text-color": Qe(q.textColor), "kaching-choose-multiple-gifts-button-color": Qe(q.buttonColor), "kaching-choose-multiple-gifts-button-text-color": Qe(q.buttonTextColor), "kaching-choose-multiple-gifts-photo-size": q.productPhotoSize + "px" }) : "")(e(h) || null)), x = d(() => c().maxQuantity), m = d(() => Object.values(e(f)).reduce((q, ie) => q + ie.length, 0));
    function I(q) {
      return e(f)[q] || [];
    }
    function P(q) {
      const ie = q.variants.find((ue) => ue.availableForSale);
      return (ie == null ? void 0 : ie.id) || q.variants[0].id;
    }
    const A = d(() => {
      var q;
      return ((q = e(h)) == null ? void 0 : q.footerText) || "FREE gifts selected";
    });
    var j = { get dealBlock() {
      return o();
    }, set dealBlock(q) {
      o(q), v();
    }, get multipleGiftsSelector() {
      return c();
    }, set multipleGiftsSelector(q) {
      c(q), v();
    }, get products() {
      return l();
    }, set products(q = []) {
      l(q), v();
    }, get initialSelectedGifts() {
      return i();
    }, set initialSelectedGifts(q = []) {
      i(q), v();
    }, get onConfirm() {
      return u();
    }, set onConfirm(q = () => {
    }) {
      u(q), v();
    }, get onClose() {
      return g();
    }, set onClose(q) {
      g(q), v();
    } }, D = ub(), Q = w(D), Z = w(Q), T = w(Z), J = (q) => {
      var ie = Jn();
      ke((ue) => pt(ie, ue), [() => r()(e(h).heading)]), b(q, ie);
    };
    O(T, (q) => {
      var ie;
      (ie = e(h)) != null && ie.heading && q(J);
    }), y(Z);
    var z = L(Z, 2), G = (q) => {
      Xt(q, { element: "span", class: "kaching-bundles__choose-multiple-gifts__close", get onclick() {
        return g();
      }, children: (ie, ue) => {
        var W = cb();
        ke(() => Ie(W, "src", "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), b(ie, W);
      }, $$slots: { default: !0 } });
    };
    O(z, (q) => {
      g() && q(G);
    }), y(Q);
    var ne = L(Q, 2);
    Gt(ne, 21, l, (q) => q.id, (q, ie) => {
      {
        let ue = d(() => I(e(ie).id)), W = d(() => (function(ae) {
          const he = I(ae).length;
          return e(x) - e(m) + he;
        })(e(ie).id));
        Md(q, { get dealBlock() {
          return o();
        }, get multipleGiftsSelector() {
          return c();
        }, get product() {
          return e(ie);
        }, get selectedVariantIds() {
          return e(ue);
        }, get availableQuantity() {
          return e(W);
        }, onSelect: () => (function(ae) {
          if (e(m) >= e(x)) return;
          const he = P(ae), V = l().length === 1 ? e(x) : 1;
          te(f, { ...e(f), [ae.id]: Array(V).fill(he) }, !0);
        })(e(ie)), onRemove: () => (function(ae) {
          const { [ae]: he, ...V } = e(f);
          te(f, V, !0);
        })(e(ie).id), onVariantChange: (ae, he) => (function(V, N, de) {
          const pe = I(V);
          if (N >= pe.length) return;
          const re = [...pe];
          re[N] = de, te(f, { ...e(f), [V]: re }, !0);
        })(e(ie).id, ae, he), onQuantityChange: (ae) => (function(he, V) {
          const N = I(he.id), de = N.length;
          if (V === de) return;
          let pe;
          if (V > de) {
            const re = P(he), R = V - de;
            pe = [...N, ...Array(R).fill(re)];
          } else pe = N.slice(0, V);
          te(f, { ...e(f), [he.id]: pe }, !0);
        })(e(ie), ae) });
      }
    }), y(ne);
    var X = L(ne, 2), B = w(X), S = w(B);
    y(B);
    var C = L(B, 2), F = w(C);
    F.__click = [sb, g];
    var U = w(F, !0);
    y(F);
    var H = L(F, 2);
    H.__click = [ob, function() {
      const q = [];
      for (const ie of l()) {
        const ue = I(ie.id);
        for (const W of ue) {
          const ae = ie.variants.find((V) => V.id === W);
          if (!ae) continue;
          const he = o().useProductCompareAtPrice && ae.compareAtPrice ? Math.max(ae.price, ae.compareAtPrice) : ae.price;
          q.push({ id: `${W}`, variant: ae, product: ie, quantity: 1, fullPrice: he });
        }
      }
      return q;
    }, u, c, g];
    var se = w(H, !0);
    y(H), y(C), y(X), y(D), ke((q, ie, ue) => {
      var W, ae;
      Et(D, e(p)), pt(S, `${(W = e(m)) != null ? W : ""}/${(ae = e(x)) != null ? ae : ""}
      ${q != null ? q : ""}`), pt(U, ie), pt(se, ue);
    }, [() => r()(e(A)), () => r()("system.cancel"), () => r()("system.confirm")]), b(n, D);
    var E = at(j);
    return s(), E;
  }
  jn(["click"]), Ke(qo, { dealBlock: {}, multipleGiftsSelector: {}, products: {}, initialSelectedGifts: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var db = $('<div class="kaching-bundles"><!></div>');
  function zd(n, t) {
    var r;
    rt(t, !0);
    const a = _(t, "config", 7), s = _(t, "dealBlock", 7), o = _(t, "products", 23, () => []), c = _(t, "mediaImages", 7), l = _(t, "translations", 7), i = _(t, "multipleGiftsSelector", 7), u = d(() => xr(s(), a().brandColors)), g = d(() => xr(i(), a().brandColors)), { setConfig: k } = hi(a()), { setMoneyFormat: f } = Ni(a().moneyFormat), { setTranslations: h } = vi(l()), { setMediaImages: p } = Ml(c()), { setSwatchSettings: x } = Bl({ swatchOptions: e(u).swatchOptions || [], swatchSize: e(u).swatchSize, swatchShape: e(u).swatchShape, showSelectedSwatchName: (r = e(u).showSelectedSwatchName) != null && r, pillStyle: ca(e(u)) });
    et(() => {
      k(a());
    }), et(() => {
      f(a().moneyFormat, !!e(u).showPricesWithoutDecimals);
    }), et(() => {
      h(l());
    }), et(() => {
      p(c());
    }), et(() => {
      var j;
      x({ swatchOptions: e(u).swatchOptions || [], swatchSize: e(u).swatchSize, swatchShape: e(u).swatchShape, showSelectedSwatchName: (j = e(u).showSelectedSwatchName) != null && j, pillStyle: ca(e(u)) });
    });
    var m = { get config() {
      return a();
    }, set config(j) {
      a(j), v();
    }, get dealBlock() {
      return s();
    }, set dealBlock(j) {
      s(j), v();
    }, get products() {
      return o();
    }, set products(j = []) {
      o(j), v();
    }, get mediaImages() {
      return c();
    }, set mediaImages(j) {
      c(j), v();
    }, get translations() {
      return l();
    }, set translations(j) {
      l(j), v();
    }, get multipleGiftsSelector() {
      return i();
    }, set multipleGiftsSelector(j) {
      i(j), v();
    } }, I = ze(), P = _e(I), A = (j) => {
      var D = db();
      qo(w(D), { get dealBlock() {
        return e(u);
      }, get products() {
        return o();
      }, get multipleGiftsSelector() {
        return e(g);
      } }), y(D), b(j, D);
    };
    return O(P, (j) => {
      e(g) && j(A);
    }), b(n, I), at(m);
  }
  function Qi(n, t) {
    var r, a;
    return t && (a = (r = n.sellingPlans.find((s) => s.id === t.id)) == null ? void 0 : r.price) != null ? a : n.price;
  }
  function Go(n, t) {
    const r = t.priceAdjustment;
    if (!r) return n;
    switch (r.type) {
      case "percentage":
        return n * (1 - r.value / 100);
      case "fixed_amount":
        return n - r.value;
      case "price":
        return r.value;
    }
  }
  function zl(n, t) {
    return n.sellingPlans.filter((r) => t.some((a) => a.sellingPlans.some((s) => s.id === r.id)));
  }
  function Oo(n, t, r) {
    let a;
    if (n.sellingPlanGid) {
      const s = Number(n.sellingPlanGid.split("/").pop());
      a = t.find((o) => o.id === s);
    } else a = r || t[0];
    return a && t.some((s) => s.id === a.id) ? a : t[0];
  }
  function Fo(n, t, r, a) {
    return n || (t ? r.some((s) => s.id === t.id) ? t : r[0] : a && r.length > 0 ? r[0] : void 0);
  }
  customElements.define("kaching-bundles-choose-multiple-gifts", Ke(zd, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, multipleGiftsSelector: { attribute: "multiple-gifts-selector", type: "Object" }, translations: { attribute: "translations", type: "Object" }, products: { attribute: "products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), Pn(this, "component"), this.component = this;
    }
  }));
  const ir = (n, t, r) => gb(n, t, r) || hb(n, t), gb = (n, t, r) => {
    if (!r || t.sellingPlans.length === 0) return;
    const a = new Set(t.sellingPlans.map((s) => s.id));
    return a.has(r.id) ? n.sellingPlans.find((s) => s.id === r.id) : n.sellingPlans.find((s) => a.has(s.id) && s.name === r.name) || n.sellingPlans.find((s) => s.id === t.sellingPlans[0].id);
  }, hb = (n, t) => {
    if (!n.requiresSellingPlan || t.sellingPlans.length === 0) return;
    const r = t.sellingPlans[0].id;
    return n.sellingPlans.find((a) => a.id === r);
  };
  function Sa({ discountType: n, discountValue: t, discountQuantity: r, variantQuantities: a, currencyRate: s, priceRounding: o, sellingPlan: c, percentageCentsRoundingWorkaround: l, onAmountDiscountExceedsPrice: i }) {
    const u = (function({ discountType: h, discountValue: p, discountQuantity: x, variantQuantities: m, currencyRate: I, sellingPlan: P, percentageCentsRoundingWorkaround: A, onAmountDiscountExceedsPrice: j }) {
      const D = m.map(({ variant: Z, quantity: T }) => Qi(Z, P) * T).reduce((Z, T) => Z + T, 0), Q = m.map(({ quantity: Z }) => Z).reduce((Z, T) => Z + T, 0);
      if (h === "specific") {
        const Z = (function({ discountValue: J, discountQuantity: z, quantity: G, currencyRate: ne }) {
          const X = 100 * Number(J) * ne;
          return G > Number(z) ? Math.ceil(X / Number(z) * G) : X;
        })({ discountValue: p, discountQuantity: x, quantity: Q, currencyRate: I }) / Q;
        let T = 0;
        for (const { variant: J, quantity: z } of m) P && J.sellingPlans.some((G) => G.id === P.id) && P.priceAdjustment ? T += Go(Z, P) * z : T += Z * z;
        return Math.max(0, Math.min(T, D));
      }
      if (h === "percentage") {
        if (A) {
          const T = D * (100 - Number(p)) / 100;
          return Math.max(0, Math.min(Math.ceil(T), D));
        }
        let Z = 0;
        for (const { variant: T, quantity: J } of m) {
          const z = Qi(T, P);
          Z += Math.ceil(z * (100 - Number(p)) / 100) * J;
        }
        return Math.max(0, Math.min(Z, D));
      }
      if (h === "amount") {
        const Z = Math.round(100 * Number(p)) * I, T = Z * Q;
        return D > 0 && T > D && (j == null || j({ totalDiscount: T, fullOrderPrice: D })), Math.max(0, Math.min(D - Z * Q, D));
      }
      return D;
    })({ discountType: n, discountValue: t, discountQuantity: r, variantQuantities: a, currencyRate: s, sellingPlan: c, percentageCentsRoundingWorkaround: l, onAmountDiscountExceedsPrice: i }), g = a.map(({ variant: h, quantity: p }) => o != null && o.v2 ? Qi(h, c) * p : h.price * p).reduce((h, p) => h + p, 0), k = a.reduce((h, { variant: p, quantity: x }) => h + Qi(p, c) * x, 0), f = a.map(({ quantity: h }) => h).reduce((h, p) => h + p, 0);
    if (o && (n !== "default" || o.v2)) {
      if (o.perItem) {
        const h = $d(u, f, o);
        return o.v2 && Math.round(h) > Math.round(g) && u / f > 100 ? Wi(u / f - 100, o.precision) * f : Math.min(h <= g ? h : u, k);
      }
      {
        const h = $d(u, f, o);
        return o.v2 && Math.round(h) > Math.round(g) && u > 100 ? Wi(u - 100, o.precision) : Math.min(h <= g ? h : u, k);
      }
    }
    return u;
  }
  function $d(n, t, r) {
    return r.perItem ? Wi(n / t, r.precision) * t : Wi(n, r.precision);
  }
  function Dd(n, t, r, a, s, o, c) {
    return Sa({ discountType: n.discountType, discountValue: n.discountValue, discountQuantity: n.quantity, variantQuantities: t, currencyRate: r, priceRounding: a, sellingPlan: s, percentageCentsRoundingWorkaround: o, onAmountDiscountExceedsPrice: c });
  }
  function Td(n, t, r, a, s, o) {
    var c, l, i, u;
    const g = [...t].sort((I, P) => I.variant.price - P.variant.price), k = g.reduce((I, P) => I + P.quantity, 0) >= n.buyQuantity + n.getQuantity ? n.getQuantity : 0, f = [], h = [];
    let p = k;
    for (const { variant: I, quantity: P } of g) {
      const A = Math.min(P, p), j = P - A;
      p -= A, A > 0 && f.push({ variant: I, quantity: A }), j > 0 && h.push({ variant: I, quantity: j });
    }
    const x = f.length > 0 ? Sa({ discountType: (c = n.getDiscountType) != null ? c : "percentage", discountValue: (l = n.getDiscountValue) != null ? l : 100, discountQuantity: k, variantQuantities: f, currencyRate: r, priceRounding: a, sellingPlan: s, onAmountDiscountExceedsPrice: o }) : 0, m = h.reduce((I, P) => I + P.quantity, 0);
    return x + Sa({ discountType: (i = n.buyDiscountType) != null ? i : "default", discountValue: (u = n.buyDiscountValue) != null ? u : 0, discountQuantity: m, variantQuantities: h, currencyRate: r, priceRounding: a, sellingPlan: s, onAmountDiscountExceedsPrice: o });
  }
  function Lo(n, t, r, a, s, o) {
    return n.bundleProducts.filter(({ productGID: c }) => c).map((c) => {
      const l = t[c.id];
      if (!l) return 0;
      const i = ir(l.product, l.variant, s);
      return Sa({ discountType: c.discountType, discountValue: c.discountValue, discountQuantity: c.quantity, variantQuantities: [l], currencyRate: r, priceRounding: a, sellingPlan: i, onAmountDiscountExceedsPrice: o });
    }).reduce((c, l) => c + l, 0);
  }
  function Is(n, t, r, a, s) {
    const o = n.bundleProducts.filter(({ productGID: i }) => i).reduce((i, u) => {
      const g = t[u.id];
      if (!g) return i;
      const k = ir(g.product, g.variant, s);
      return i + (k ? Go(g.variant.price, k) : g.variant.price);
    }, 0), c = Number(n.discountValue) || 0;
    let l;
    switch (n.discountType) {
      case "percentage":
        l = o * (1 - Math.min(Math.max(c, 0), 100) / 100);
        break;
      case "amount":
        l = o - Math.round(100 * c) * r;
        break;
      case "specific":
        l = Math.round(100 * c) * r;
        break;
      default:
        l = o;
    }
    if (l = Math.max(0, Math.min(l, o)), a && (n.discountType !== "default" || a.v2)) {
      const i = l;
      let u = Wi(i, a.precision);
      a.v2 && Math.round(u) > Math.round(o) && i > 100 && (u = Wi(i - 100, a.precision)), l = u <= o ? u : i;
    }
    return Math.max(0, Math.round(l));
  }
  function Wi(n, t = ".00") {
    switch (t) {
      case ".99":
        return n > 99 ? 100 * Math.ceil(n / 100) - 1 : n;
      case ".95":
        return n > 95 ? 100 * Math.ceil(n / 100) - 5 : n;
      case ".90":
        return n > 90 ? 100 * Math.ceil(n / 100) - 10 : n;
      case ".x9":
        return n > 9 ? 10 * Math.ceil(n / 10) - 1 : n;
      case ".x0":
        return 10 * Math.ceil(n / 10);
      default:
        return 100 * Math.ceil(n / 100);
    }
  }
  var pb = $('<img class="kaching-bundles__choose-product__product-image" alt=""/>'), bb = $('<span class="kaching-bundles__choose-product__product-title"> </span>'), fb = $('<span class="kaching-bundles__choose-product__subtitle"><!></span>'), vb = $('<div class="kaching-bundles__choose-product__product-price"><!></div>'), _b = $('<div class="kaching-bundles__choose-product__product-compare-at-price"><!></div>'), kb = $("<div><!> <!></div>"), mb = $('<div class="kaching-bundles__choose-product__product"><div class="kaching-bundles__choose-product__product-container"><!> <div class="kaching-bundles__choose-product__product-content"><!> <!> <div class="kaching-bundles__choose-product__product-price-container"><!> <!></div> <!> <!></div></div> <!></div>');
  function Vd(n, t) {
    var r;
    rt(t, !0);
    const a = () => Te(p, "$config", c), s = () => Te(h, "$formatPrice", c), o = () => Te(f, "$translate", c), [c, l] = kt(), i = _(t, "product", 7), u = _(t, "dealBlock", 7), g = _(t, "dealBar", 7), k = _(t, "onChoose", 7), f = $t(), h = xn(), p = Sn();
    let x = Fe(!1), m = Fe(ut(((r = i().variants.find((N) => N.availableForSale)) == null ? void 0 : r.id) || i().variants[0].id));
    const I = d(() => i().variants.find((N) => N.id === e(m)) || i().variants[0]), P = d(() => {
      var N;
      return e(x) || ((N = u().chooseProductModal) == null ? void 0 : N.showVariantImageByDefault);
    }), A = d(() => e(P) && e(I).image || i().image), j = d(() => u().priceRounding ? { perItem: !0, precision: u().priceRoundingPrecision, v2: a().featureFlags.price_rounding_v2 || !1 } : void 0), D = d(() => g().dealBarType === Zt.Bxgy ? e(I).price : Sa({ discountType: g().discountType, discountValue: g().discountValue, discountQuantity: 1, variantQuantities: [{ variant: e(I), quantity: 1 }], currencyRate: a().currencyRate, priceRounding: e(j), onAmountDiscountExceedsPrice: Dr })), Q = d(() => (function(N, de) {
      return N.useProductCompareAtPrice && de.compareAtPrice ? Math.max(de.price, de.compareAtPrice) : de.price;
    })(u(), e(I))), Z = d(() => i().url ? `${i().url}?variant=${e(m)}` : void 0), T = d(() => yn({ priceFormatter: s(), product: i(), totalFullPrice: e(Q), totalDiscountedPrice: e(D), quantity: 1, unitQuantity: Vr([{ variant: e(I), quantity: 1 }]) })), J = d(() => e(T)(o()(u().chooseProductModal.subtitle || ""))), z = d(() => u().chooseProductModal.buttonText);
    function G(N) {
      te(x, !0), te(m, N, !0);
    }
    var ne = { get product() {
      return i();
    }, set product(N) {
      i(N), v();
    }, get dealBlock() {
      return u();
    }, set dealBlock(N) {
      u(N), v();
    }, get dealBar() {
      return g();
    }, set dealBar(N) {
      g(N), v();
    }, get onChoose() {
      return k();
    }, set onChoose(N) {
      k(N), v();
    } }, X = mb(), B = w(X), S = w(B), C = (N) => {
      ar(N, { get url() {
        return e(Z);
      }, class: "kaching-bundles__choose-product__product-image-link", children: (de, pe) => {
        var re = pb();
        Ie(re, "width", 100), Ie(re, "height", 100), ke(() => Ie(re, "src", e(A))), b(de, re);
      }, $$slots: { default: !0 } });
    };
    O(S, (N) => {
      e(A) && N(C);
    });
    var F = L(S, 2), U = w(F);
    ar(U, { get url() {
      return e(Z);
    }, class: "kaching-bundles__choose-product__product-link", children: (N, de) => {
      var pe = bb(), re = w(pe, !0);
      y(pe), ke(() => pt(re, i().title)), b(N, pe);
    }, $$slots: { default: !0 } });
    var H = L(U, 2), se = (N) => {
      var de = fb();
      je(w(de), () => e(J)), y(de), b(N, de);
    };
    O(H, (N) => {
      e(J) && N(se);
    });
    var E = L(H, 2), q = w(E);
    lt(q, () => e(D), (N) => {
      var de = vb();
      je(w(de), () => s()(e(D))), y(de), b(N, de);
    });
    var ie = L(q, 2), ue = (N) => {
      var de = ze();
      lt(_e(de), () => e(Q), (pe) => {
        var re = _b();
        je(w(re), () => s()(e(Q))), y(re), b(pe, re);
      }), b(N, de);
    };
    O(ie, (N) => {
      e(Q) && e(Q) > e(D) && N(ue);
    }), y(E);
    var W = L(E, 2);
    Sl(W, { get product() {
      return i();
    }, class: "kaching-bundles__choose-product__product-variant-name" });
    var ae = L(W, 2), he = (N) => {
      var de = kb(), pe = w(de);
      Pa(pe, { get product() {
        return i();
      }, class: "kaching-bundles__choose-product__product-option-names" }), Yn(L(pe, 2), { get product() {
        return i();
      }, get selectedVariantId() {
        return e(m);
      }, onChange: G }), y(de), b(N, de);
    };
    O(ae, (N) => {
      i().variants.length > 1 && N(he);
    }), y(F), y(B), Xt(L(B, 2), { element: "span", class: "kaching-bundles__choose-product__product-button", onclick: function() {
      k()({ product: i(), variant: e(I) });
    }, children: (N, de) => {
      var pe = ze(), re = _e(pe), R = (ce) => {
        var ve = Jn();
        ke((oe) => pt(ve, oe), [() => o()(e(z))]), b(ce, ve);
      }, ee = (ce) => {
        b(ce, Jn("Choose"));
      };
      O(re, (ce) => {
        e(z) ? ce(R) : ce(ee, !1);
      }), b(N, pe);
    }, $$slots: { default: !0 } }), y(X), b(n, X);
    var V = at(ne);
    return l(), V;
  }
  Ke(Vd, { product: {}, dealBlock: {}, dealBar: {}, onChoose: {} }, [], [], !0);
  const Eo = "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
  var xb = $('<img alt="Close"/>'), yb = (n, t) => {
    te(t, !e(t));
  }, wb = (n, t, r, a) => {
    te(t, e(r).value, !0), te(a, !1);
  }, Pb = $('<img alt="" aria-hidden="true" class="kaching-bundles__choose-product__sort-option-check"/>'), Sb = $('<button type="button" class="kaching-bundles__choose-product__sort-option"><span> </span> <!></button>'), Bb = $('<div class="kaching-bundles__choose-product__sort-menu"></div>'), Cb = $('<div class="kaching-bundles__choose-product__controls"><div class="kaching-bundles__choose-product__search-field"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__search-icon"/> <input type="search" class="kaching-bundles__choose-product__search-input"/></div> <div class="kaching-bundles__choose-product__sort"><button type="button" class="kaching-bundles__choose-product__sort-button"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__sort-icon"/> </button> <!></div></div>'), Ib = (n, t) => {
    te(t, "");
  }, Mb = $('<div class="kaching-bundles__choose-product__empty-state-icon-wrapper"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__empty-state-icon"/></div> <h3 class="kaching-bundles__choose-product__empty-state-title"> </h3> <p class="kaching-bundles__choose-product__empty-state-description"> </p> <button type="button" class="kaching-bundles__choose-product__empty-state-clear-button"> </button>', 1), zb = $('<div class="kaching-bundles__choose-product__empty-state"><!></div>'), $b = $('<div class="kaching-bundles__choose-product"><div class="kaching-bundles__choose-product__header"><h2 class="kaching-bundles__choose-product__heading"><!></h2> <!></div> <!> <div class="kaching-bundles__choose-product__products"><!></div></div>');
  function jo(n, t) {
    var r;
    rt(t, !0);
    const a = () => Te(k, "$translate", s), [s, o] = kt(), c = _(t, "dealBlock", 7), l = _(t, "dealBar", 7), i = _(t, "products", 23, () => []), u = _(t, "onChoose", 7), g = _(t, "onClose", 7), k = $t(), f = d(() => c().chooseProductModal), h = d(() => ((E) => mn({ "kaching-choose-product-button-size": E.buttonSize + "px", "kaching-choose-product-text-size": E.textSize + "px", "kaching-choose-product-price-color": Qe(E.priceColor), "kaching-choose-product-compare-at-price-color": Qe(E.compareAtPriceColor), "kaching-choose-product-text-color": Qe(E.textColor), "kaching-choose-product-button-color": Qe(E.buttonColor), "kaching-choose-product-button-text-color": Qe(E.buttonTextColor), "kaching-choose-product-photo-size": E.productPhotoSize + "px" }))(e(f)));
    let p = Fe(""), x = Fe(!1);
    const m = { Relevance: "relevance", NewestFirst: "newest-first", PriceLowToHigh: "price-low-to-high", PriceHighToLow: "price-high-to-low" }, I = d(() => [{ value: m.Relevance, label: a()("system.sort_relevance") }, { value: m.NewestFirst, label: a()("system.sort_newest_first") }, { value: m.PriceLowToHigh, label: a()("system.sort_price_low_to_high") }, { value: m.PriceHighToLow, label: a()("system.sort_price_high_to_low") }]);
    let P = Fe(ut(Object.values(m).includes((r = e(f).defaultSortOption) != null ? r : "") ? e(f).defaultSortOption : m.Relevance));
    const A = d(() => e(f).showSearchField ? i().filter((E) => E.title.toLowerCase().includes(e(p).toLowerCase().trim())) : i()), j = d(() => {
      const E = [...e(A)], q = (ue) => {
        const W = ue.variants.find((ae) => ae.availableForSale) || ue.variants[0];
        return (W == null ? void 0 : W.price) || 0;
      }, ie = (ue) => {
        if (!ue.createdAt) return 0;
        const W = Date.parse(ue.createdAt);
        return Number.isNaN(W) ? 0 : W;
      };
      switch (e(P)) {
        case m.Relevance:
          return E;
        case m.NewestFirst:
          return E.sort((ue, W) => {
            const ae = ie(W) - ie(ue);
            return ae !== 0 ? ae : W.id - ue.id;
          });
        case m.PriceLowToHigh:
          return E.sort((ue, W) => q(ue) - q(W));
        case m.PriceHighToLow:
          return E.sort((ue, W) => q(W) - q(ue));
        default:
          return E;
      }
    }), D = d(() => e(f).showSearchField && e(p).trim().length > 0 && e(j).length === 0);
    function Q() {
      te(x, !1);
    }
    function Z(E, q) {
      const ie = (ue) => {
        E.contains(ue.target) || q();
      };
      return document.addEventListener("click", ie, !0), { destroy() {
        document.removeEventListener("click", ie, !0);
      } };
    }
    var T = { get dealBlock() {
      return c();
    }, set dealBlock(E) {
      c(E), v();
    }, get dealBar() {
      return l();
    }, set dealBar(E) {
      l(E), v();
    }, get products() {
      return i();
    }, set products(E = []) {
      i(E), v();
    }, get onChoose() {
      return u();
    }, set onChoose(E) {
      u(E), v();
    }, get onClose() {
      return g();
    }, set onClose(E) {
      g(E), v();
    } }, J = $b(), z = w(J), G = w(z), ne = w(G), X = (E) => {
      var q = Jn();
      ke((ie) => pt(q, ie), [() => a()(e(f).heading)]), b(E, q);
    };
    O(ne, (E) => {
      e(f).heading && E(X);
    }), y(G), Xt(L(G, 2), { element: "span", class: "kaching-bundles__choose-product__close", get onclick() {
      return g();
    }, children: (E, q) => {
      var ie = xb();
      ke(() => Ie(ie, "src", Eo)), b(E, ie);
    }, $$slots: { default: !0 } }), y(z);
    var B = L(z, 2), S = (E) => {
      var q = Cb(), ie = w(q), ue = w(ie), W = L(ue, 2);
      wa(W), y(ie);
      var ae = L(ie, 2), he = w(ae);
      he.__click = [yb, x];
      var V = w(he), N = L(V);
      y(he);
      var de = L(he, 2), pe = (re) => {
        var R = Bb();
        Gt(R, 21, () => e(I), (ee) => ee.value, (ee, ce) => {
          var ve = Sb();
          ve.__click = [wb, P, ce, x];
          var oe = w(ve), Be = w(oe, !0);
          y(oe);
          var be = L(oe, 2), K = (Y) => {
            var ge = Pb();
            ke(() => Ie(ge, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.6663%205L7.49967%2014.1667L3.33301%2010'%20stroke='%23344054'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), b(Y, ge);
          };
          O(be, (Y) => {
            e(P) === e(ce).value && Y(K);
          }), y(ve), ke(() => pt(Be, e(ce).label)), b(ee, ve);
        }), y(R), b(re, R);
      };
      O(de, (re) => {
        e(x) && re(pe);
      }), y(ae), xo(ae, (re, R) => Z == null ? void 0 : Z(re, R), () => Q), y(q), ke((re, R, ee) => {
        Ie(ue, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.5%2017.5L13.875%2013.875M15.8333%209.16667C15.8333%2012.8486%2012.8486%2015.8333%209.16667%2015.8333C5.48477%2015.8333%202.5%2012.8486%202.5%209.16667C2.5%205.48477%205.48477%202.5%209.16667%202.5C12.8486%202.5%2015.8333%205.48477%2015.8333%209.16667Z'%20stroke='%23717680'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), Ie(W, "aria-label", re), Ie(W, "placeholder", R), Ie(V, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.1667%203.33337V16.6667M14.1667%2016.6667L10.8333%2013.3334M14.1667%2016.6667L17.5%2013.3334M5.83333%2016.6667V3.33337M5.83333%203.33337L2.5%206.66671M5.83333%203.33337L9.16667%206.66671'%20stroke='%23414651'%20stroke-width='1.67'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), pt(N, ` ${ee != null ? ee : ""}`);
      }, [() => a()("system.search"), () => a()("system.search"), () => a()("system.sort_by")]), Dh(W, () => e(p), (re) => te(p, re)), b(E, q);
    };
    O(B, (E) => {
      e(f).showSearchField && E(S);
    });
    var C = L(B, 2), F = w(C), U = (E) => {
      var q = zb(), ie = w(q), ue = (ae) => {
        var he = Mb(), V = _e(he), N = w(V);
        y(V);
        var de = L(V, 2), pe = w(de, !0);
        y(de);
        var re = L(de, 2), R = w(re, !0);
        y(re);
        var ee = L(re, 2);
        ee.__click = [Ib, p];
        var ce = w(ee, !0);
        y(ee), ke((ve, oe, Be) => {
          Ie(N, "src", "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='4'%20y='4'%20width='48'%20height='48'%20rx='24'%20fill='%23F2F4F7'/%3e%3crect%20x='4'%20y='4'%20width='48'%20height='48'%20rx='24'%20stroke='%23F9FAFB'%20stroke-width='8'/%3e%3cpath%20d='M37%2037L32.65%2032.65M35%2027C35%2031.4183%2031.4183%2035%2027%2035C22.5817%2035%2019%2031.4183%2019%2027C19%2022.5817%2022.5817%2019%2027%2019C31.4183%2019%2035%2022.5817%2035%2027Z'%20stroke='%23475467'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), pt(pe, ve), pt(R, oe), pt(ce, Be);
        }, [() => a()("system.no_results_found"), () => a()("system.no_results_description"), () => a()("system.clear_search")]), b(ae, he);
      }, W = (ae) => {
        var he = Jn();
        ke((V) => pt(he, V), [() => a()("system.no_products_available")]), b(ae, he);
      };
      O(ie, (ae) => {
        e(D) ? ae(ue) : ae(W, !1);
      }), y(q), b(E, q);
    }, H = (E) => {
      var q = ze();
      Gt(_e(q), 17, () => e(j), (ie) => ie.id, (ie, ue) => {
        Vd(ie, { get dealBlock() {
          return c();
        }, get dealBar() {
          return l();
        }, get product() {
          return e(ue);
        }, get onChoose() {
          return u();
        } });
      }), b(E, q);
    };
    O(F, (E) => {
      e(j).length === 0 ? E(U) : E(H, !1);
    }), y(C), y(J), ke(() => Et(J, e(h))), b(n, J);
    var se = at(T);
    return o(), se;
  }
  jn(["click"]), Ke(jo, { dealBlock: {}, dealBar: {}, products: {}, onChoose: {}, onClose: {} }, [], [], !0);
  const ua = { enabled: !1, satisfied: !0, missingCount: 0, alertText: null };
  function Ro(n, t) {
    return { enabled: n.requiresItemSelection, satisfied: n.allItemsSelected, missingCount: n.missingItemsCount, alertText: t };
  }
  const No = "system.personalisation_required_alert";
  function Ad({ required: n, itemCount: t, filledCount: r }) {
    if (!n) return ua;
    const a = Math.max(t, 1);
    return { enabled: !0, satisfied: r >= a, missingCount: Math.max(0, a - r), alertText: No };
  }
  const qd = "personalisationRule", Ms = () => {
    const n = { reportedRule: Wr(ua), failing: Wr(!1) };
    return Oa(qd, n), n;
  }, Gd = "requireSelectionError", zs = () => {
    const n = Wr(!1);
    return Oa(Gd, n), n;
  }, _i = () => {
    const n = Ga(Gd);
    if (!n) throw new Error("getRequireSelectionError must be called within a component tree that has setupRequireSelectionError initialized");
    return n;
  };
  var Db = $('<div class="kaching-bundles"><!></div>');
  function Od(n, t) {
    var r;
    rt(t, !0);
    const a = _(t, "config", 7), s = _(t, "dealBlock", 7), o = _(t, "dealBar", 7), c = _(t, "products", 23, () => []), l = _(t, "mediaImages", 7), i = _(t, "translations", 7), u = d(() => xr(s(), a().brandColors)), g = d(() => xr(o(), a().brandColors)), { setConfig: k } = hi(a());
    Ms(), zs();
    const { setMoneyFormat: f } = Ni(a().moneyFormat), { setTranslations: h } = vi(i()), { setMediaImages: p } = Ml(l()), { setSwatchSettings: x } = Bl({ swatchOptions: e(u).swatchOptions || [], swatchSize: e(u).swatchSize, swatchShape: e(u).swatchShape, showSelectedSwatchName: (r = e(u).showSelectedSwatchName) != null && r, pillStyle: ca(e(u)) });
    et(() => {
      k(a());
    }), et(() => {
      f(a().moneyFormat, !!e(u).showPricesWithoutDecimals);
    }), et(() => {
      h(i());
    }), et(() => {
      p(l());
    }), et(() => {
      var P;
      x({ swatchOptions: e(u).swatchOptions || [], swatchSize: e(u).swatchSize, swatchShape: e(u).swatchShape, showSelectedSwatchName: (P = e(u).showSelectedSwatchName) != null && P, pillStyle: ca(e(u)) });
    });
    var m = { get config() {
      return a();
    }, set config(P) {
      a(P), v();
    }, get dealBlock() {
      return s();
    }, set dealBlock(P) {
      s(P), v();
    }, get dealBar() {
      return o();
    }, set dealBar(P) {
      o(P), v();
    }, get products() {
      return c();
    }, set products(P = []) {
      c(P), v();
    }, get mediaImages() {
      return l();
    }, set mediaImages(P) {
      l(P), v();
    }, get translations() {
      return i();
    }, set translations(P) {
      i(P), v();
    } }, I = Db();
    return jo(w(I), { get dealBlock() {
      return e(u);
    }, get dealBar() {
      return e(g);
    }, get products() {
      return c();
    }, onChoose: () => {
    }, onClose: () => {
    } }), y(I), b(n, I), at(m);
  }
  customElements.define("kaching-bundles-choose-product", Ke(Od, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, dealBar: { attribute: "deal-bar", type: "Object" }, translations: { attribute: "translations", type: "Object" }, products: { attribute: "products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), Pn(this, "component"), this.component = this;
    }
  })), Ii = !0;
  var Tb = Gn('<svg width="102" height="60" viewBox="0 0 102 60" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 2)" fill="currentColor"></ellipse><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 2)" fill="#000" fill-opacity=".3"></ellipse><mask id="a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="5" width="96" height="48"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 0)" fill="currentColor"></ellipse></mask><g mask="url(#a)"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 0)" fill="currentColor"></ellipse></g><path class="most-popular-text" d="M28 15.4 25.4 24a.3.3 0 0 1 0 .1.2.2 0 0 1-.2.1c-.4.1-.7 0-.8-.4a1007.3 1007.3 0 0 1-3.9-9.2l-.8 7.6a.5.5 0 0 0 0 .2l.6.8a.7.7 0 0 1 0 .1.2.2 0 0 1 0 .1c0 .5-1.7.1-2 0-1 0 .1-1 .2-1.4l1.1-9c0-.4-.1-.7-.5-1a.4.4 0 0 1-.1-.2v-.2a.2.2 0 0 1 .1 0 15.2 15.2 0 0 1 3.1.2h.1c.1 0 0 0 0 .1.3.5-.5.7-.3 1.2a1361.6 1361.6 0 0 1 3.2 8.1l2.3-7.3a.7.7 0 0 0-.1-.6c-.3-.4-1-1 .1-1l2.7.4c.2 0 .3.2.2.4a.4.4 0 0 1-.1.2c-.3.3-.5.5-.4 1a771.7 771.7 0 0 0 2.5 10c.5.5.7 1-.3.8l-2.2-.3c-.5 0-.5-.4-.1-1a.7.7 0 0 0 .1-.6l-1.6-7.6c0-.2-.1-.2-.1 0zm24 4.7.1 4.5c0 1 .6 1.5 1.6 1.5.3 0 .5-.2.6-.5.1-.4.3-.5.5-.3h.1v.1c.1 1.1-.4 2-1.5 2-2.3.4-3.2-1.2-3.3-3.3l-.2-4.1c0-.4-.2-.5-.6-.5-.5 0-.8-.1-.7-.7a.2.2 0 0 1 .2-.1c1.3.2 2-.3 2-1.6a.2.2 0 0 1 .2-.1c1.1-.5.9 1.3.9 1.9a.1.1 0 0 0 .1.1l2.2.3.2.1c.1.3.1.5-.1.7a.2.2 0 0 1-.1 0 .4.4 0 0 1-.1 0l-2-.1a.1.1 0 0 0-.1 0zm-11.6 4.6c-.7.8-1.8 1.2-3 1.1-1.1 0-2.3-.5-3.3-1.4A5.7 5.7 0 0 1 33 23a5 5 0 0 1-.6-1.7 4 4 0 0 1 .1-1.7c.1-.5.4-1 .8-1.4.7-.7 1.7-1.2 2.9-1.1 1.2 0 2.4.6 3.3 1.4.5.4.9 1 1.2 1.5.3.5.5 1.1.5 1.7a4 4 0 0 1 0 1.6c-.2.6-.5 1-.8 1.4zm-2.4.4c.3 0 .5-.3.7-.5l.5-1v-1.4a6.4 6.4 0 0 0-.3-1.4 6.4 6.4 0 0 0-.6-1.4 4.7 4.7 0 0 0-.8-1 2.6 2.6 0 0 0-1-.6 1.5 1.5 0 0 0-.9 0c-.3 0-.5.3-.7.5l-.4 1a4.7 4.7 0 0 0 0 1.4 6.4 6.4 0 0 0 1.7 3.8c.3.3.6.5 1 .6.2 0 .5.1.8 0zm8-6c-1-.8-2.4-.4-2.3 1 0 .4.3.8.7 1l3 1.2c1.1.5 2.2 2.5 1.1 3.6-1.6 1.8-5.6.6-6.8-1.3-.2-.4-.1-.8.4-1 1.2-.5 1.5 1.5 2.3 2 1 .8 3 .6 2.4-1.1-.3-1-3.2-1.8-3.8-2.2-1.9-1.2-1.8-4 .8-4.3 1.6-.1 4.5.6 4.7 2.6a.3.3 0 0 1 0 .3c-1.1 1.3-1.9-1.3-2.5-1.8zM28.3 34.9c0 1.4 0 2 .8 3 .2.2.2.4 0 .6a.3.3 0 0 1-.2 0l-3.8-.3a.4.4 0 0 1-.3 0c-.3-.4-.3-.7 0-1a1 1 0 0 0 .4-.8L25 28c0-.4-.3-.9-.8-1.4a.3.3 0 0 1 0-.1.2.2 0 0 1 0-.1c0-.3.2-.4.6-.3 3.4.2 9.4.1 9.7 4.8.3 3.8-3 4.1-6 3.9zm-.2-6.7c0 1.4 0 3 .2 4.6 0 .3.2.5.5.6 3.4 1 2.5-3.2 1.6-4.6-.3-.5-.8-.9-1.5-1.1-.5-.2-.8 0-.8.5zM59.5 41c-1.7 1.3-4.3.4-5.2-1.4-1-1.8 0-4.1-1.3-5.8a.4.4 0 0 1 0-.2c0-.6.4-.5.8-.5a19.9 19.9 0 0 1 2.5 0 .4.4 0 0 1 .4.3l.2 5.3c0 .8.3 1.8 1.1 1.8 1.7.2 1-4.2 1-5.3a.5.5 0 0 0-.2-.2l-.5-.8c-.3-.3-.2-.5.3-.6h2.9c.3 0 .4 0 .4.4l.3 6c0 1.6 1.4 1.6 1.3-.2l-.3-7c0-.8-.3-1.2-.8-1.8a.3.3 0 0 1 0-.2.3.3 0 0 1 0-.2.3.3 0 0 1 .2 0l2.8-1.2c.5-.2.8 0 .8.6l.5 10.4c0 .5.2.8.6 1.2.3.4.4 1-.4.8-.9 0-3.1 0-3.9-.4a.4.4 0 0 0-.2 0c-.9 0-2.7.1-3.1-1a.1.1 0 0 0-.2 0zm-16.4-3c-.5 1-1.5 1.6-2.7 1.8-1.2.2-2.5 0-3.6-.7a5.7 5.7 0 0 1-1.5-1.2 5 5 0 0 1-.9-1.6 4.2 4.2 0 0 1-.2-1.7 3.5 3.5 0 0 1 .5-1.6c.5-.9 1.5-1.5 2.7-1.7 1.2-.2 2.5 0 3.6.7a5.7 5.7 0 0 1 1.4 1.2c.5.5.8 1 1 1.6.2.5.2 1.1.2 1.7a3.5 3.5 0 0 1-.5 1.5zm-3.3 1c.2 0 .3-.1.4-.4l.3-.8v-1.3a8.8 8.8 0 0 0-.3-1.3 8.8 8.8 0 0 0-.5-1.3 5.9 5.9 0 0 0-.6-1.1l-.6-.6c-.2-.2-.4-.2-.6-.2-.2 0-.3.2-.4.4l-.3 1v1.1a8.8 8.8 0 0 0 1.4 3.8l.6.6c.2.1.4.2.6.1z" fill="#FEFDFD"></path><path class="most-popular-text" d="M46.9 32.7a3 3 0 0 1 2.8-.3c2.5.8 3.6 2.5 3.5 5-.2 2.9-3.2 4.2-5.5 2.9-.2-.1-.2 0-.2 0 .1 1-.2 2.2.7 3 .3.2.4.5.1.7a.3.3 0 0 1-.2.1 401 401 0 0 0-3.5-.3c-.4 0-.6-.3-.7-.6a.3.3 0 0 1 0-.1.5.5 0 0 1 .1-.1l.5-.7a.4.4 0 0 0 0-.2l-.2-7.3c0-.6-1.1-.9-.9-1.6a.3.3 0 0 1 .2-.2l2.6-1a.2.2 0 0 1 .2 0c.2.1.4.4.4.7zM49 40c2.2 0 .5-5.5-.1-6.4-.7-.8-1.5-.7-1.7.4v3.4c.2.9.6 2.6 1.8 2.6zm24.5 2.7c-2.7 1.4-5.7-1-6.1-3.7-.7-3.5 2.8-5.8 5.8-3.8a.1.1 0 0 0 .1 0c.3-.7 2.3 0 2.9.2.4 0 .6.3.5.7a.3.3 0 0 1 0 .1.3.3 0 0 1-.1 0c-.4.4-.6.8-.6 1.2 0 2.3.2 3.7.2 4.2s1 1.2.7 1.7a.2.2 0 0 1-.1 0 .3.3 0 0 1-.2.1l-2.6-.3a.3.3 0 0 1-.2 0l-.2-.4a.1.1 0 0 0-.1 0zm-.4-5.2c-.2-1.8-2.7-3.4-2.8-.7-.1 1.5.3 4.6 1.9 5.5a.4.4 0 0 0 .2 0c1.4-.3.8-3.5.7-4.8zM80.5 36.5c.3-.3.5-.7 1-.9 3.8-1.6 3.6 4.9.9 2.9-.5-.4-.5-1.7-1.2-1.5a.3.3 0 0 0-.1 0 .3.3 0 0 0 0 .2c-.4.7-.4 4.6.1 5.2.2.3 1.5 1.2.2 1.2a52 52 0 0 1-3.5-.3c-.3 0-.5-.2-.5-.5a.4.4 0 0 1 0-.2c.4-.4.6-.7.6-1.2l-.2-3.5a.4.4 0 0 0 0-.2l-.9-1c-.2-.2 0-.4.3-.6l2.6-1c.3 0 .5 0 .5.4v1h.2z" fill="#FEFDFD"></path><path class="most-popular-text" fill-rule="evenodd" clip-rule="evenodd" d="m82.2 24.2-.7-6.2-.7 6.2-2.7-2.1 2 2.7-6.1.7 6.2.7L78 29l2.8-2.1.7 6.1.7-6.1L85 29l-2.2-2.8 6.2-.7-6.1-.7 2-2.7-2.7 2.1z" fill="#fff"></path><path class="most-popular-text" d="M45 4v1a2 2 0 0 0 2 2h1-1a2 2 0 0 0-2 2v1-1a2 2 0 0 0-2-2h-1 1a2 2 0 0 0 2-2V4zm12 41v1a2 2 0 0 0 2 2h1-1a2 2 0 0 0-2 2v1-1a2 2 0 0 0-2-2h-1 1a2 2 0 0 0 2-2v-1zM13 22v3a4 4 0 0 0 4 4h3-3a4 4 0 0 0-4 4v3-3a4 4 0 0 0-4-4H6h3a4 4 0 0 0 4-4v-3zM67 4v3a4 4 0 0 0 4 4h3-3a4 4 0 0 0-4 4v3-3a4 4 0 0 0-4-4h-3 3a4 4 0 0 0 4-4V4z" fill="#fff"></path></svg>');
  function Fd(n) {
    b(n, Tb());
  }
  Ke(Fd, {}, [], [], !0);
  const Ld = (n) => {
    const t = n.badgeStyle || "simple", r = n.badgeText || "", a = { type: "dealBar", dealBarId: n.id }, s = { id: `legacy-${n.id}`, attachedTo: a, text: r, colors: null };
    return t === "most-popular" ? { ...s, badgeType: "most-popular", size: 102 } : t === "custom" ? n.badgeImageGID ? { ...s, badgeType: "custom", imageGID: n.badgeImageGID, size: 56 } : null : r ? { ...s, badgeType: "simple", textSize: 12 } : null;
  }, $l = (n, t) => {
    if (n.blockLayout !== "vertical") return [];
    const r = $s(n);
    if (r.length > 0) return r.filter((s) => s.attachedTo.type === "dealBar" && s.attachedTo.dealBarId === t.id);
    if (n.badgesEnabled === !1) return [];
    const a = Ld(t);
    return a ? [a] : [];
  }, Vb = (n, t) => n.blockLayout !== "vertical" ? [] : $s(n).filter((r) => r.attachedTo.type === t), $s = (n) => n.badgesEnabled === !1 ? [] : n.badges || [], Qa = (n, t, r) => ({ ...n, text: r(t(n.text)) }), Ab = (n) => {
    const t = n.filter((r) => r.badgeType === "border").map((r) => r.thickness);
    return t.length === 0 ? 22 : Math.max(...t);
  }, qb = (n) => {
    const t = n.filter((r) => r.badgeType === "border").filter((r) => r.position === "all").map((r) => {
      var a;
      return (a = r.gap) != null ? a : 0;
    });
    return t.length === 0 ? 0 : Math.max(...t);
  };
  let Dl = null;
  const Ed = (n, t) => typeof document == "undefined" ? 0 : (Dl || (Dl = document.createElement("canvas").getContext("2d")), Dl ? (Dl.font = `bold ${t}px sans-serif`, Dl.measureText(n).width + 0.5 * n.length) : 0), Gb = (n) => {
    const t = n.flatMap((r) => r.badgeType !== "border" || r.position !== "left" && r.position !== "right" ? [] : [Ed(r.text, r.textSize) + 24]);
    return t.length === 0 ? 0 : Math.max(...t);
  }, Wa = (n) => ({ positions: new Set(n.flatMap((t) => t.badgeType === "border" ? [t.position] : [])), thickness: Ab(n), gap: qb(n), sideLength: Gb(n) });
  var Ob = Gn('<animate attributeName="startOffset" repeatCount="indefinite"></animate>'), Fb = Gn("<textPath><!> </textPath>"), Lb = Gn("<!><!>", 1), Eb = Gn('<svg class="kaching-bundles__badge-border__curve"><path fill="none"></path><text text-anchor="middle"></text></svg>'), jb = $('<span class="kaching-bundles__badge-border__side kaching-bundles__badge-border__side--top"><!></span>'), Rb = $('<div class="kaching-bundles__badge-border kaching-bundles__badge-border--all"><div class="kaching-bundles__badge-border__band"><span></span></div> <!></div>'), Nb = $('<div><span class="kaching-bundles__badge-border__text"><!></span></div>');
  function jd(n, t) {
    const r = (function() {
      var S, C, F;
      if (_t && Mt && Mt.nodeType === 8 && ((S = Mt.textContent) != null && S.startsWith("$"))) {
        const U = Mt.textContent.substring(1);
        return Ir(), U;
      }
      return (F = (C = window.__svelte) != null ? C : window.__svelte = {}).uid != null || (F.uid = 1), "c" + window.__svelte.uid++;
    })();
    rt(t, !0);
    const a = _(t, "badge", 7), s = typeof window != "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, o = d(() => dd(a().colors)), c = d(() => {
      var S;
      return `--badge-border-thickness: ${a().thickness}px; --badge-text-size: ${a().textSize}px; --badge-ring-outer: ${a().thickness + ((S = a().gap) != null ? S : 0)}px;`;
    });
    let l = Fe(0), i = Fe(0);
    const u = d(() => a().position === "left" || a().position === "right"), g = d(() => {
      const S = Math.max(6, a().thickness - 6), C = e(u) ? e(i) : e(l), F = Math.max(1, a().text.trim().length), U = C > 0 ? (C - 16) / (0.62 * F) : 1 / 0;
      return Math.max(6, Math.min(a().textSize, S, U));
    }), k = d(() => `--badge-border-thickness: ${a().thickness}px; --badge-text-size: ${e(g)}px;`);
    let f = Fe(void 0), h = Fe(ut({ count: 0, slot: 0, pathLength: 0 })), p = Fe(void 0), x = Fe(0), m = Fe(0);
    const I = d(() => Math.max(6, Math.min(a().textSize, a().thickness - 6))), P = d(() => 0.32 * e(I)), A = d(() => 0.4 * e(I) + a().spacing), j = d(() => a().delimiter || ""), D = d(() => (Ed(a().text.trim(), e(I)) || a().text.trim().length * e(I) * 0.7) + (e(j) ? e(I) : 0) + 2 * e(A));
    et(() => {
      if (e(Q), e(D), !e(f)) return;
      const S = e(f).getTotalLength() / 2;
      if (S <= 0 || e(D) <= 0) return;
      const C = Math.max(1, Math.floor(S / e(D)));
      te(h, { count: C, slot: S / C, pathLength: S }, !0);
    });
    const Q = d(() => {
      if (!e(p) || !e(x) || !e(m)) return "";
      const S = getComputedStyle(e(p)), C = parseFloat(S.getPropertyValue("--bar-border-radius")) || 8, F = parseFloat(S.getPropertyValue("--badge-border-gap")) || 0, U = a().thickness / 2 + e(P), H = e(x) - U, se = e(m) - U, E = Math.min(C + F + U, Math.max(0, Math.min(H - U, se - U) / 2)), q = ["H " + (H - E), `A ${E} ${E} 0 0 1 ${H} ${U + E}`, "V " + (se - E), `A ${E} ${E} 0 0 1 ${H - E} ${se}`, `H ${U + E}`, `A ${E} ${E} 0 0 1 ${U} ${se - E}`, `V ${U + E}`, `A ${E} ${E} 0 0 1 ${U + E} ${U}`].join(" ");
      return `M ${U + E} ${U} ${q} ${q} Z`;
    }), Z = `kaching-badge-ring-${r}`, T = d(() => a().repeatText && a().animated && a().spinSpeed > 0 && !s && e(h).pathLength > 0), J = d(() => e(T) ? Math.max(2, e(h).pathLength / Math.max(1, a().spinSpeed)) : 0);
    var z = { get badge() {
      return a();
    }, set badge(S) {
      a(S), v();
    } }, G = ze(), ne = _e(G), X = (S) => {
      var C = Rb(), F = L(w(C), 2), U = (se) => {
        var E = ze();
        lt(_e(E), () => e(Q), (q) => {
          var ie = ze(), ue = _e(ie), W = (ae) => {
            var he = Eb();
            {
              const de = (pe, re = Xr, R = Xr) => {
                var ee = Fb(), ce = w(ee), ve = (Be) => {
                  var be = Ob();
                  ke(() => {
                    var K;
                    Ie(be, "from", a().spinDirection === "clockwise" ? re() : re() + e(h).pathLength), Ie(be, "to", a().spinDirection === "clockwise" ? re() + e(h).pathLength : re()), Ie(be, "dur", `${(K = e(J)) != null ? K : ""}s`);
                  }), b(Be, be);
                };
                O(ce, (Be) => {
                  e(T) && Be(ve);
                });
                var oe = L(ce, 1, !0);
                y(ee), ke(() => {
                  Ie(ee, "href", `#${Z}`), Ie(ee, "startOffset", re()), pt(oe, R());
                }), b(pe, ee);
              };
              var V = w(he);
              Fi(V, (pe) => te(f, pe), () => e(f));
              var N = L(V);
              Gt(N, 21, () => ({ length: e(h).count }), Qr, (pe, re, R) => {
                var ee = Lb(), ce = _e(ee);
                de(ce, () => R * e(h).slot + e(h).slot / 2, () => a().text);
                var ve = L(ce), oe = (Be) => {
                  de(Be, () => R * e(h).slot + e(h).slot, () => e(j));
                };
                O(ve, (Be) => {
                  e(j) && Be(oe);
                }), b(pe, ee);
              }), y(N), y(he), ke(() => {
                Ie(V, "id", Z), Ie(V, "d", e(Q));
              });
            }
            ke(() => {
              var de, pe;
              return Ie(he, "viewBox", `0 0 ${(de = e(x)) != null ? de : ""} ${(pe = e(m)) != null ? pe : ""}`);
            }), b(ae, he);
          };
          O(ue, (ae) => {
            e(Q) && ae(W);
          }), b(q, ie);
        }), b(se, E);
      }, H = (se) => {
        var E = jb();
        je(w(E), () => a().text), y(E), b(se, E);
      };
      O(F, (se) => {
        a().repeatText && a().text.trim() ? se(U) : se(H, !1);
      }), y(C), Fi(C, (se) => te(p, se), () => e(p)), ke(() => {
        var se, E;
        return Et(C, `${(se = e(o)) != null ? se : ""} ${(E = e(c)) != null ? E : ""}`);
      }), hs(C, "clientWidth", (se) => te(x, se)), hs(C, "clientHeight", (se) => te(m, se)), b(S, C);
    }, B = (S) => {
      var C = Nb(), F = w(C);
      je(w(F), () => a().text), y(F), y(C), ke(() => {
        var U, H, se;
        Rt(C, 1, `kaching-bundles__badge-border kaching-bundles__badge-border--${(U = a().position) != null ? U : ""}`), Et(C, `${(H = e(o)) != null ? H : ""} ${(se = e(k)) != null ? se : ""}`);
      }), hs(C, "clientWidth", (U) => te(l, U)), hs(C, "clientHeight", (U) => te(i, U)), b(S, C);
    };
    return O(ne, (S) => {
      a().position === "all" ? S(X) : S(B, !1);
    }), b(n, G), at(z);
  }
  Ke(jd, { badge: {} }, [], [], !0);
  var Qb = $('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--custom"><img class="kaching-bundles__bar-most-popular__custom-image"/></div>'), Wb = $('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--fancy"><!></div>'), Hb = $('<div class="kaching-bundles__bar-most-popular__content"><!></div>'), Ub = $('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--simple"><!></div>');
  function Ba(n, t) {
    rt(t, !0);
    const [r, a] = kt(), s = _(t, "badge", 7), o = _(t, "blockLayout", 7), c = On(), l = d(() => s().badgeType === "custom" ? Te(c, "$getMediaImageUrl", r)(s().imageGID) : void 0), i = d(() => o() === "vertical"), u = d(() => {
      switch (s().badgeType) {
        case "most-popular":
        case "border":
          return !0;
        case "simple":
          return !!s().text;
        case "custom":
          return !!e(l);
      }
    }), g = d(() => e(i) && e(u)), k = d(() => dd(s().colors)), f = d(() => s().badgeType === "simple" ? `--badge-text-size: ${s().textSize}px;` : ""), h = d(() => s().badgeType === "most-popular" || s().badgeType === "custom" ? `--badge-size: ${s().size}px;` : "");
    var p = { get badge() {
      return s();
    }, set badge(A) {
      s(A), v();
    }, get blockLayout() {
      return o();
    }, set blockLayout(A) {
      o(A), v();
    } }, x = ze(), m = _e(x), I = (A) => {
      var j = ze(), D = _e(j), Q = (T) => {
        jd(T, { get badge() {
          return s();
        } });
      }, Z = (T) => {
        var J = ze(), z = _e(J), G = (X) => {
          var B = Qb(), S = w(B);
          y(B), ke(() => {
            Et(B, e(h)), Ie(S, "alt", s().text || "Badge"), Ie(S, "src", e(l));
          }), b(X, B);
        }, ne = (X) => {
          var B = ze(), S = _e(B), C = (U) => {
            var H = Wb();
            Fd(w(H)), y(H), ke(() => {
              var se, E;
              return Et(H, `${(se = e(k)) != null ? se : ""} ${(E = e(h)) != null ? E : ""}`);
            }), b(U, H);
          }, F = (U) => {
            var H = Ub();
            lt(w(H), () => s().text, (se) => {
              var E = Hb();
              je(w(E), () => s().text), y(E), b(se, E);
            }), y(H), ke(() => {
              var se, E;
              return Et(H, `${(se = e(k)) != null ? se : ""} ${(E = e(f)) != null ? E : ""}`);
            }), b(U, H);
          };
          O(S, (U) => {
            s().badgeType === "most-popular" ? U(C) : U(F, !1);
          }, !0), b(X, B);
        };
        O(z, (X) => {
          s().badgeType === "custom" && e(l) ? X(G) : X(ne, !1);
        }, !0), b(T, J);
      };
      O(D, (T) => {
        s().badgeType === "border" ? T(Q) : T(Z, !1);
      }), b(A, j);
    };
    O(m, (A) => {
      e(g) && A(I);
    }), b(n, x);
    var P = at(p);
    return a(), P;
  }
  function ki(n, t) {
    rt(t, !0);
    let r = _(t, "element", 7, "label"), a = _(t, "for", 7, void 0), s = _(t, "soldOut", 7, !1), o = _(t, "borderHost", 7), c = _(t, "children", 7);
    var l = { get element() {
      return r();
    }, set element(u = "label") {
      r(u), v();
    }, get for() {
      return a();
    }, set for(u = void 0) {
      a(u), v();
    }, get soldOut() {
      return s();
    }, set soldOut(u = !1) {
      s(u), v();
    }, get borderHost() {
      return o();
    }, set borderHost(u) {
      o(u), v();
    }, get children() {
      return c();
    }, set children(u) {
      c(u), v();
    } }, i = ze();
    return Su(_e(i), r, 0, (u, g) => {
      Tu(u, (f, h) => ({ for: a(), class: "kaching-bundles__bar-container", style: "", [Gi]: f, [Oi]: h }), [() => ({ "kaching-bundles__bar-container--sold-out": s(), "kaching-bundles__bar-container--badge-border-all": o().positions.has("all"), "kaching-bundles__bar-container--badge-border-top": o().positions.has("top"), "kaching-bundles__bar-container--badge-border-bottom": o().positions.has("bottom"), "kaching-bundles__bar-container--badge-border-left": o().positions.has("left"), "kaching-bundles__bar-container--badge-border-right": o().positions.has("right") }), () => {
        var f, h;
        return { "--badge-border-thickness": `${(f = o().thickness) != null ? f : ""}px`, "--badge-border-gap": `${(h = o().gap) != null ? h : ""}px`, "--badge-border-gap-border": o().gap ? "1px solid var(--bar-border-color, rgba(0, 0, 0, 0.3))" : "none", "--badge-border-min-length": o().sideLength ? `${o().sideLength}px` : void 0 };
      }]);
      var k = ze();
      ds(_e(k), c), b(g, k);
    }), b(n, i), at(l);
  }
  function Tl(n, t) {
    return t.reduce((r, a) => a.includeInCompareAt ? r + a.fullPrice : r, n);
  }
  function Vl(n) {
    return n.map((t) => ({ fullPrice: t.fullPrice * t.quantity, includeInCompareAt: t.includeInCompareAt }));
  }
  function Qo(n, t, r) {
    return n ? t : r;
  }
  Ke(Ba, { badge: {}, blockLayout: {} }, [], [], !0), Ke(ki, { element: {}, for: {}, soldOut: {}, borderHost: {}, children: {} }, [], [], !0);
  const mi = (n, t, r) => {
    var a, s;
    const o = (s = (a = t.variantGIDs) == null ? void 0 : a.map(en)) != null ? s : null;
    return n.variants.filter((c) => (r || c.availableForSale) && (!o || o.includes(c.id)));
  }, Ds = (n, t) => n.unlockAtBarOnly ? t === n.unlockAtBar : t >= n.unlockAtBar, Wo = (n, t) => !!n.applyOnlyForSubscriptions && !t;
  function Al(n, t, r, a, s, o) {
    const { progressiveGiftsEnabled: c, progressiveGifts: l, useProductCompareAtPrice: i } = n;
    if (!c || !l) return [];
    const u = l.includeInCompareAt === !0, g = l.layout !== "deal-bar" || o ? s : [];
    return ((k, f, h) => k.filter((p) => Ds(p, f) && !Wo(p, h)))(l.gifts, t, a).flatMap((k) => {
      const f = g.find((x) => x.id === k.id);
      if (f)
        return [{ fullPrice: f.variants.reduce((x, { variant: m, quantity: I }) => x + Rd(m, i) * I, 0), includeInCompareAt: u }];
      const h = (function(x, m) {
        if (x.giftType !== "product" || !x.productGID) return;
        const I = en(x.productGID), P = m.find((A) => A.id === I);
        return P != null && P.availableForSale ? P : void 0;
      })(k, r), p = h ? mi(h, k, !1)[0] : void 0;
      return p ? [{ fullPrice: Rd(p, i) * k.quantity, includeInCompareAt: u }] : [];
    });
  }
  function Rd(n, t) {
    return n.compareAtPrice && t ? Math.max(n.price, n.compareAtPrice) : n.price;
  }
  const ql = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3e%3crect%20width='100'%20height='100'%20fill='transparent'%20/%3e%3c/svg%3e", Ho = ({ dealBlock: n, imageSize: t }) => {
    const { fonts: r, colors: a, cornerRadius: s } = n;
    return mn({ "kaching-free-gift-background-color": a.freeGiftBackground && Qe(a.freeGiftBackground), "kaching-free-gift-text-color": a.freeGiftText && Qe(a.freeGiftText), "kaching-free-gift-selected-background-color": a.freeGiftSelectedBackground && Qe(a.freeGiftSelectedBackground), "kaching-free-gift-selected-text-color": a.freeGiftSelectedText && Qe(a.freeGiftSelectedText), "kaching-free-gift-font-size": r.freeGift && r.freeGift.size + "px", "kaching-free-gift-font-weight": r.freeGift && gr(r.freeGift.style), "kaching-free-gift-font-style": r.freeGift && hr(r.freeGift.style), "kaching-free-gift-image-border-radius": (s || 0) / 2 + "px", "kaching-free-gift-image-height": t + "px" });
  }, Uo = "data:image/webp;base64,UklGRoQYAABXRUJQVlA4WAoAAAAQAAAAVwEANAEAQUxQSPkFAAABBj/OtslttP9f5fcCagm1hVpF7YEJox4UKGYkeAMMGPfwDLTDZ1D2vIMIqAcB7VRSYECAAaEnwXBEmSwGHlrieL+jrjsiJgAn/5/8f/L/yf8n/w9iMzrDs9DBioEmgInM6NV1BfjS38jnJRbyl/z0anTfwYrRQgD4xYxeVQf15f0b+QwssfjtlYg8ExEHawBoId4gM3pV1dOX8AAqAJ+xRAb89pOcARg5wIrRQmAEM3p1XTXeAzefsVzIX/KTvBoBcIA10ELAMDOj366r1vXl/RuRz1gust9eicgzEXGwBtBCGD7m2avrqv19CcADFT4DS2T4TeQMeCbiYMVAC2FQkHn203XVyb563H8Glgv5S34SORsBcLBioAlAXyMz+q3qm+X9G5HPy4X89dsrkdEziIMVo0WE0IfIPHt1XfXc8mGP6jOwzH4TkTMAz0ScFTG9hORZdl31bo/Ko3rwM4DlT7Z30Cj7XA1D1zPot2o42l5BZ9WA/KlX2JshsdB9YlQOieW/woitwFY0TAjGOgRPdPd1x2BQlEurHcIoeSdS3S8gkMc/uW6hYVG9+wJUB/dr3SkYGEfeB1zlI7Y5undMVVwotvFHuk3cfSsGWoTuMxF2hQgArO5nAFIksUho+KOJvvLAZkz89KDfXxBPAfsJV2FvuAoXbLU2XIULzVW4NFyFc7bKHVdBiKvygKtwSVyVB1wF0W3iWCEft8mIFXCpW8TxQj5ukREvAKY9HDPk5y1ywwvILVfhnK1yx1bnxFTIHVfhnLgqD7gKl5qr8oCrcKm5Kp9wFXLDVZiwVW7ZatI8yxTIXeMcW6SNs1yB3HEVzomr8glX4ZK4Kh9zFS51sz4zRj7mKuSGqzBhK5gGGd7IJw2yvIFcmmOYA+dslVuuwuT/DpgRVyFgK6GmLNnDB1yFOTVDM4gPmmEYBHNqhOYQBGw1I67yAVdhRlzlHVdhTlyFoAELJpkRV3nHVmOuwpy4aq3rRnxi/mfOX/+rBa8YShsrIvxkL+ayB1Bxk5N9te+Ocgggc/UwUlade7fveX7vahFUHS37XuNxHPiUaiEddX/fXwC/PwrmfQeQ/gL4fgdIf4FHv+vp7OMPt+Ye+IPN2efwa80+nq0O/t8VHFsFPEN1cBzjJ4qB/EE+GX7araeJjLXioAeL3WqWxlHgrBZSdeWPTRqFzhqCqjt7+Ilq6r/vjP/tyjZGhtaVZClqtTaNodndsCnkkassTaLQWUNKv6vThWquWVflQClkt1pMkyiIEDhrNKlHKa7Rftwg6OSuHBjFbiVZEofOGk1QhwzrZJsEuFlV9r/i3ipDmkShs5rUUeVdbfwFNQsUbe76WyGyw9UUSRQ4azSpWka12Qeq8Ta962HFDqssjSV01mhStZZ3dZnr5oHGm7JH3V5lSKPQWaNJNTOsiR+rVjRJiV5TiOBWFtNEIgerSTWb4nrMqR0AN7vrJ4XsbldZLFHgjBZS7Sjv6rB3qjV1dFf2i1tZZWkSwllNUC0r747nJ6pN7awqu68Abq8W0yQKnDWaFEi1ssTH8hfUKqBgXXbdpyh01mhS7e/eHWemVdvai7su2i7eASh2K0mM6k7t4sWBygozo1o4WHdN7GC1IJHQGa06lmwYv/uhsgJSrVpZkrJTNkZ1vLZh/G57+wRgFajWdvNyQN0nG8bZpqgAwSzSqsUpKrvjk/SB+2TD8QShJdXyJu2MGfWF7qRgXXbDRA1vnZZd4MMBBrh1F9hBBh0dbSu3QCGyQ2M+6WEG2OmBtrKYJnHorAkTiQEri4b4RA12CrZPk8U0iQIHo0n9YNQQuOEGmHh7K1cyjSV01mhSB7bbZmQ05EDWQTRBHTlpxlgxqN02YaM5BHETJopF9aJ+K80jsNu6+UBxaVi3lNgE43ptjGLUoFZOsapd1GesmFXH25pEil9tXItIsaybHq0YK6YltzhKsQkU3+rw6nBFahTr6ujqMMVqTIp7TXT1Y8Uq0oqDTZTtnrLbTENRXCw2SJHdTyfOKGYmLUZInfx/8v/J/yf/n/xfUwBWUDggZBIAABBuAJ0BKlgBNQE+kUSdS6WjoyKjsKo4sBIJY27PfD3SSyKUjHn6I/9g+wnp1XR9XeHo4f/o+c8+z/svWv5h/PG/dj1H/tl6znpI/wG+5eif50XrR/4/0x7lbtfWHf5TxH7Mfb7NRhu8olZENf8uT5T92PZPIW8X7T682rzd4lnfXm1ebvEs7682rzd4lnfXm1ebvEs7682cCffkKj/0t06JEArP+RShHR4v2n15tXgarCFNF1ibE7/5+j/5Eo0NQ71kF8hWki+N0nFn4jermljPNs27mUeI5uTXaZCzZcqM9AZ31VHNeqhmXSx23Z8dlZD8ZLgOnx2CihtqzmhwsRfw/eimox4+fV6eEJSdr6tkyKOTLOnvmStQTaPNLcVmD06I09Zy8EdqnfHY/1ThdMVchaQQV9Czk/i57RyGMsSMid4Y5ZOoPpStMmO8jZqSCSIW4/wUhOsJe0AZ6WDNd9x5zXViysoni6q6+atjpl5A4ZI62UyqCiLbYjoKnTB7xff5zuxt3G0QiDSsrujnM51e8UgSobndmKsG7c87GZH5co4+UWdNOodvlgpKvlr7hqlF1cRHNor9k7pt9pIiAEYeVwoSNvwFplyxFu65+r+nXIwUbLR8xF9LPeZ2oTVkeqIkflO/9CzgZ7RhB6LLduY5ORVBLovgTZu3/QSKkDFShUs2FVKnB9lmICdwUzmUNmRSe0Ga6FsxyfdT/gQrVJY2mpe+QnRjhSbGOZcUpMsoVwsFkw3byx7SAunIxFL1TxePhC6fUfxCcdqHww8KiOjXdEXZJcLI7GUTe0nviV7Z/qFPWXNlIDS/JIszeV7nM8HpdPmdLEDK+MYaGUEL/wZsFblu2q1mU0SC8gaf+iYsqqUR2ld74gez3le4VQSRtOB9B/YLTsZfqcOjzW3/m6EHXNHKBFFsVFTpZmn4qMgVjJwf9P8cnItR6Fq7fOAslEO4e30AHZzsht3FP8GTJU1rAoYDv8k41Bg3f/c3i4TQIPpSjW5RcJV8JNBN1eawaXo9ZbN31YZSVQw8Ops/2bVbq9/s1Q1s9PunHUU+2ut0DDvCY/6iQ+2YthZQQ1GyDGUCpfQ3eJaANqy/p8rAbnON/3LplJEi/afXm1ebqaKUavN3iWd9ebV5u8SzvrzavN3iWd9ebV5u8SzvrzavN3iWd9ebV5u8LgAA/vvbO+3sHnP/IdkpDnbh3TvfXYAB5WzWlLuMAAKgIwAABAsU14K4XnDjt+rrb+D2R0m2FHkZuG6rmV+6YFzI/Ls2EEst1oHCIDkSkVmJwdSN9EIhanLXNhfekK1Iqx1IvcdGU5Q6TPJ89BkFWsH4P6w+AEaw8K0furvg3C+MmCPSi39Pk9u+gxEye7RHQx3e7sJBZSlSVpmGjma6gAJaYWfuB78fJroBwKlaJ0mMNd4azeh/Wa3EotpAl4KB176JCBofnI39MAuoo85WpbZ9xjxDQYsob4zBW0Iz7pbo/HiIkhee6DRpkJIr6wM5Ky5hmYHwSSvj+7kH1iIOCj6tAbabEAQCNQeVRTORaxyDAr7/GtCLaDWcs/7oXWIweUfirzVQ7ThYMPR9h8IVWCJYs5dn/dfu56GMoeSVL3vuDT8eOkQLrvbk7h5UKTxL57kgt6N+KFtV/n39fyoZGVhshZgWcPcsGXFGajPTSTOUlsZ/vewlCzkR+ALaPvm4/+MGM7HT0B28wt+z1iFe68rT2C3wDvd2pkd4kwT1ZXXhgCaP8IHGlcRLWtK0/KEVZ1ugqmbOqoEiTwSRYuEmJ28JT53qpD9rvw4bWSCRVmp6vS1i+OAvuw7ChW+RkrYvU/D24QzjPCHYio+CkhfgXvVO46aZf7HZ/APLJHJJzVT1j4OLgCKZ/+Ak1e0EKDPh4rTJsaT3s8WtTy5XH+4Ar6xg6I3WtxR+uRF26LUw4qh9rDq9Tp7vxD5TzVPNkmLExWNGgR6eVQ2GooMqhjhD639FbbGvPBA3ybzgr7n5Ci9s6Wz++LCWHCwK1Z6DT19WpGRfIsCWCkYCRTKxUtMZSIT8ucXjOXLVCOftRCEKFT4b6uZ65Ag8l6ZwGA9vBgVH4yjz3rhaTMXAVN8ZtMN+Peal4ByXEaarmBZHcjINdGAHfq/Oon/WJPDl1La0sZ/z7NnwnicGzYjOu/+E9PY1uiQDBcmka2MieoJp36IbjfvQLURbGUMf1OX6zyYoVSC8wZfYlktDUkqM9WhYE1c4nOaHYtnrCuOiEPng8J2pRFr5NeR4lIsiH6Z4wQDzOZbpOftV8uUhurbz6TTohG7rdsM3Jkpsl7NlcnTwTwO/wnsAVgCAexRRUegE8kK7ZBn9DYsKHGisummSWwi9LxZqPCQbjrkXNuWFu1L7NvVwRU/SFadxboS/0qrszn85S44QntIQB/YirAkqb9zp8cndyKm1JSLqd+B0ytCADHpsJ5tIRIRlqWiK5Z3mRpnoZ41mgopa3mx70p3vl/4dB9U/HbNxwGMVZwzqOJ1gtobOcYv4N4GE/9/PioYppduKcYUonHSe4/3qQSrq/d8AMj5fRlAEPwNdWGsNJAtAr1IMC662V61JfHP8ENdFsTmbbcZ6QaXRBgGH3IZfWJHt4aQK/pLXOPF01GqrLm+KfuiYRg9SdihgVqnSnWiOz5QJcoQdFYrwvdJTA3IDamLNiUdka/z2iBOCQPtqrUEsiyPhVyMRGkBWUEXUS8aojpuiFrHqEeODgQNvYmA4SrXVoiOOIDOC57cNsP1/N9GN0jE8bIPAwth4nEv26clftxesbpcO5CbbOPhk+4teaVMLwqEMkQ9YcYDhAn1UQm/P3PukbCh6OquvhSA8q9YvD80J2p4qMfqHujubJy+pt0+o+mrxgsrcdHWv4sSkPBRdjMUrDPZLvblU1bnNHivzRvFcaJLGb6GIGfB6O/ZKp1jWBT6xmKAeZWVJ8oOesDrGaYK0ecPFQz1Kuy5kORX5BCtS2qmcP0EA33Ytva164kYbJLPQqbkznx1MLByN1pC1Ik6afVhXF4Md0RY17gT2UjnSVYPmF/zPGsMRWvrtiSQRKgwUoxqgtEcfS49Laz2JMIExQJFfV3WrYgNICYlRLAYmV9ubjRL8xrrPJOxg49X/PpZMbndQYIsESJm+IzeXnBMrbIsdeaxHjknEDGyHgeDWKezmv60AaqcaQzwPQfmnJvj9esFQK1oEZOAhVQaNG82I3acJJ+sM/lNmSPy/iKzYyMHrpWAtqMiD/VbxffYGWdktLKJ6DnzcchVzvgkPeJ/AEYySCs/AJwxoZMCEcYNAyPbSOeIhrSZ7oiwkixKsfLQ+uMIecj3dpwHtZBxKdw3H1agydVHgrcDu2Q1YIvCW0l+YCBgLgVvKCQiJZrmECgugPITyU+7JPijpmGi92sUJDZaFi8AXbjw0XOTvpGBzk6SOQWbZRs0FTUb1nAizq0zZPFxm8JaADC02BSHVQUCf4x6YZrJ5DIRFyxt9Jv0pVBaCRRKAOO3/X/UVpzCGUfhHdRWh93s5eWczTMyYN1GHakkA3lEvMckdz9VSeaYVHWgbgR/SsKqHaFBCMqYnbGNHYulIdrf/P7sy9/cTd8B+MlqRCwfCgJvjATta1MfBNGzKLERRjPb2v9em/Re5JPZCtt6Yyn8Vql2CdRL+7z8oYczxwxTA3/QfjLD78pZ6RpVkzBIHLkMQf93Il10CGh5IawlF+d1dkgebUndWPL12ydwc0PVR3b0c0e8OlgN2vakaDpQEKqKPiIukcoIpAlgclG5W5zjdiPbIbF0uWeULQsvMvI9c5T6P9sRjv+FZz51d19aWCdbLU/fCFJ53MbT0+42wMhRj23n/iD+LlPYOSgdtfo9WiiRfl2Mt//MJzOsz8sFwteelxQEjbCqNE0JmRx+KBefHBDl8C78WHTaIIzN5gmbehbTat1ShJBF5hxBrYRIh2z4mEop3uaCco1qsvq44TnxUsBnbY1n8ApxtHL+I927cLgdz4OLFqdmFjrJQrQi6drim9ZhKNKblZRY6Nm6Xxw8AG31CjKw5Usm7EwX3dSh1ZsqmnI5qEjffuCX44g/SOzQqJVR7Fdb8JeHLF12m738y3FF8Mzs16Oc/2LwNUHONGYkVtr+DKAaGl5Hj/eNrGgDwmZkDKFiMx6NDt1/fJ5DJujHYvfqnc306fF1hqAKGhRaX6mkQAFTvdvjKAE6D2qcOgzuA8OW9wA45u64gX+kFxY0AS6eqgGGChj5Z/p1Hbf5M9a/gKoaZ7B+Tcnn9Qe9zU00N7zH8lyWGJ2TkauTtQK1NiJyMXrdamQmMdapyOTWCQuByf81ArLtC/bleHgTwNM7WM3WcgxuY0K+tM/GlMB3o4c6KXobq+gT4beks4Z0bY30MI8bvJO+Oxwdaw3i25dbrmfZF24MJSjUBqBgpoCPEKbOE1B0kKa0DivLYosxKI+LGXKRTQfmdgrSTks4ug6urIa/bOM7wPLDJGRj0VqBthQyVN68yQX1AJQMB25WapBsPo/4lBu682ATODwomExed5azFmo1uS1oR8yjjVguvGk0aXC8rbqCnjsujXvMr17GDqUjHgKsOJdqUSlNjxu2YRrqyCQqeDKyGUDulKhhtJLO/4E34Re0lA8JnM1OWPAEB4UWa3wXhCn7tYRx/NdlCvHEXRgHuU1x9vbx8wJIw9x9YMaMqgUz6XhCa9CHfb8w6Zw2YtPEVQ9evaBn1Z9D6FOmIHGya7+VzN5NHL4+s6mM/hIagdT2DfDbr34+S/pRYO0OTY2kNLBk7H0A60bCCr+dUfc3D4aiAWmcyJy06sV91x0NyHNPAl1cPP9yMhUpsXuSRb8G+rZqQPmfsDeGv8OazizGLy6WH/kvfkOHUSaX/OhgunoJ9VeEOXibNKy82aKQbeO0Ha7UVsW4XgQgLdDlwVIalDeTNcwE6nmQ9txE1hmG+EiJvFI4qtHDI9DsVu9oD7B+cGL3mjjXVHfSwugESEFWLTK5H6wNsIpftM4OHEYWyaeUeZ7JJE1eDJQ9Zf+5vZtZh3myMRpA2qFbL0Z1XGffNF+rkMit+fjRpAjeYiJtbPXt1caN1R1abhCgztNuwREE8wupCjEm+NE+bKPiOqlykwKJ3P/3sgKhNseT14hUvrpWzccNtRuPDNOunCTAmbmLE7WagpIdGYD1/+3+5jJokGgYMTKPDtGcyL2UcCJbWhsr29Eb7GipPp2p1cQ+vehDwOEv3Zy1JrpGaND/5dRLHQTBHj6cgEpGQusdOTAdDDuz3bIG0bjvrZlGPLGuLFq+K3yADMtsjQQcuZzrWixor2wnfJtn15LHqkqakk4OIH4/MIXBGBWj9Ew3Y10HyG9ozFVfGMMh335PDmgh/DSu4AxehAoAqANVIJksDFYdub1wWo8yYh9Bj1+NUJynOVXk1qJZ8+B0QUVbJwcTOnM/fCsUt191Vky7IpF3Ar+L7eVM3PjlEJmI9gteoSeJw1gQCSMn/vaR0rn0ffVV6ozTkXntDBDGW52GLCy/g/BPvfHCJ+mj59BncgboXK3Fld7/4HRTyIAexwL2dRVvPHlg99XnjymrE4zUzJo+KycEBb83WPH/fOR5kEC3NqBEAmTeVYw8LJ+ocQMM2lE8kDjcyA12K+DfSgIhetLBZ/x7e4hD9A4gQgdFg8Ooa3bg/sPXFSwRjyiDQM/CZXMUaKtADyJ4CAx3/pYYzgOk2cLMZz5FMWFjbA/Q1LtDuQH7DkigDvOhb4Fmu7+H2b5J+4EKM8Yq+n06V/1tcpC4eeFk9xnMQluO1WqGwpuaoJCMP6qbU+yD7yNgJf9w5qrzxpGutPV9IhfsC4fqgGPBE3L7RVEgzeANeYJVlr36U8sZvtXG4PB4Hja+RPLUAO+eRxzRZy42p9LU83OprZBeO7230dieMH5Zoi0kR9fsCoTSMaa2nRhSiCb2tdJ4Z1lzYagv4odW8u2KOdSTmmMx6fuTxSqnpbix/IM1tyQ87iEvmLgKbKxxoq7jMWMGVKnT3/sYDe1Gh7sGkfO8X+SU8A6uPjQ5O60Qodizt/a/N+H663+1H+KNqX9JG3V8a4DIr7ksqFOrG4vcwrmMfGNKzZEqY3YdfhK186TnkB4qAAAAAAAAUL6grl/NBh0xCf2j3r4dOzXRh7I2aCCSe5vWpAob7xObCtSNwZb2vrH2mGahZz5v19m0OpjZMD/eZuwAQT9lzRvhNLg3peoff6JaWOXAZuxTigRvsWkffJzmaqRu1XRn2I5Q8LDKQ102v7qO1JV8AAAAAAAAAAAAAAAAAAAA=", Nd = ({ freeGift: n, product: t, variantImage: r, getMediaImageUrl: a }) => n.mediaImageGID ? a(n.mediaImageGID) : n.giftType === "shipping" ? Uo : r || (t == null ? void 0 : t.image);
  var Zb = $('<img alt="" class="kaching-bundles__free-gift__image"/>'), Jb = $('<div class="kaching-bundles__free-gift__image"></div>'), Yb = $('<span class="kaching-bundles__free-gift__text"><!></span>'), Kb = $('<div class="kaching-bundles__free-gift__full-price"><!></div>'), Xb = $('<div><div class="kaching-bundles__free-gift__main"><!> <div class="kaching-bundles__free-gift__content"><!> <!></div></div> <!></div>');
  function Qd(n, t) {
    rt(t, !0);
    const r = () => Te(p, "$config", s), a = () => Te(m, "$formatPrice", s), [s, o] = kt();
    let c = _(t, "dealBlock", 7), l = _(t, "freeGift", 7), i = _(t, "product", 7), u = _(t, "dealBarSelected", 7, !1), g = _(t, "collapsed", 7, !1), k = _(t, "sets", 7), f = _(t, "mainProductVariantId", 7), h = _(t, "onChange", 7);
    const p = Sn(), x = $t(), m = xn(), I = On(), P = d(() => {
      if (i()) return { ...i(), variants: mi(i(), l(), r().preview) };
    });
    let A = Fe(void 0);
    const j = d(() => (function(E, q) {
      if (E !== void 0) return E;
      if (q != null && q.availableForSale && q.variants.length > 0) return q.variants[0].id;
    })(e(A), e(P))), D = d(() => e(P) && e(j) ? e(P).variants.find((E) => E.id === e(j)) : void 0), Q = d(() => {
      var E;
      return Nd({ freeGift: l(), product: i(), variantImage: (E = e(D)) == null ? void 0 : E.image, getMediaImageUrl: Te(I, "$getMediaImageUrl", s) });
    }), Z = d(() => l().quantity * k()), T = d(() => (function(E, q) {
      if (!q) return 0;
      let ie = q.price;
      return q.compareAtPrice && E.useProductCompareAtPrice && (ie = Math.max(ie, q.compareAtPrice)), ie * e(Z);
    })(c(), e(D))), J = d(() => Ho({ dealBlock: c(), imageSize: l().imageSize })), z = d(() => yn({ priceFormatter: a(), product: i(), totalFullPrice: e(T), totalDiscountedPrice: 0, quantity: e(Z), unitQuantity: e(D) ? Vr([{ variant: e(D), quantity: e(Z) }]) : null })), G = d(() => l() ? e(z)(Te(x, "$translate", s)(l().text)) : ""), ne = d(() => {
      var E;
      if ((E = i()) != null && E.url) return e(j) ? `${i().url}?variant=${e(j)}` : i().url;
    });
    function X(E) {
      te(A, E, !0);
    }
    let B;
    _r(() => {
      l().productGID, te(A, void 0), B = void 0;
    }), _r(() => {
      if (c().disableVariantOptionSync || !f() || !e(P) || f() === B) return;
      const E = B;
      B = f(), e(P).variants.some((q) => q.id === f()) && (e(A) !== void 0 && e(A) !== E || te(A, f(), !0));
    }), et(() => {
      var E;
      e(D) && ((E = i()) != null && E.availableForSale) && e(Z) && tn(() => {
        h()({ variant: e(D), product: i(), fullPrice: e(T) });
      });
    });
    const S = d(() => !(!i() || i().availableForSale && mi(i(), l(), !1).length !== 0));
    var C = { get dealBlock() {
      return c();
    }, set dealBlock(E) {
      c(E), v();
    }, get freeGift() {
      return l();
    }, set freeGift(E) {
      l(E), v();
    }, get product() {
      return i();
    }, set product(E) {
      i(E), v();
    }, get dealBarSelected() {
      return u();
    }, set dealBarSelected(E = !1) {
      u(E), v();
    }, get collapsed() {
      return g();
    }, set collapsed(E = !1) {
      g(E), v();
    }, get sets() {
      return k();
    }, set sets(E) {
      k(E), v();
    }, get mainProductVariantId() {
      return f();
    }, set mainProductVariantId(E) {
      f(E), v();
    }, get onChange() {
      return h();
    }, set onChange(E) {
      h(E), v();
    } }, F = ze(), U = _e(F), H = (E) => {
      var q = Xb();
      let ie;
      var ue = w(q), W = w(ue);
      {
        let R = d(() => u() ? e(ne) : void 0);
        ar(W, { get url() {
          return e(R);
        }, class: "kaching-bundles__free-gift__link", children: (ee, ce) => {
          var ve = ze(), oe = _e(ve), Be = (K) => {
            var Y = Zb();
            ke(() => {
              Ie(Y, "src", e(Q)), Ie(Y, "height", l().imageSize || 0);
            }), b(K, Y);
          }, be = (K) => {
            var Y = Jb();
            let ge;
            ke((we) => ge = Et(Y, "", ge, we), [() => {
              var we, me;
              return { height: `${(we = l().imageSize || 0) != null ? we : ""}px`, width: `${(me = (i() || l().mediaImageGID) && l().imageSize || 0) != null ? me : ""}px` };
            }]), b(K, Y);
          };
          O(oe, (K) => {
            e(Q) ? K(Be) : K(be, !1);
          }), b(ee, ve);
        }, $$slots: { default: !0 } });
      }
      var ae = L(W, 2), he = w(ae), V = (R) => {
        var ee = ze();
        lt(_e(ee), () => e(G), (ce) => {
          var ve = Yb();
          je(w(ve), () => e(G)), y(ve), b(ce, ve);
        }), b(R, ee);
      };
      O(he, (R) => {
        e(G) && R(V);
      });
      var N = L(he, 2), de = (R) => {
        Yn(R, { get product() {
          return e(P);
        }, get selectedVariantId() {
          return e(j);
        }, onChange: X });
      };
      O(N, (R) => {
        u() && e(P) && e(P).variants.length > 1 && e(j) && R(de);
      }), y(ae), y(ue);
      var pe = L(ue, 2), re = (R) => {
        var ee = ze();
        lt(_e(ee), () => e(T), (ce) => {
          var ve = Kb();
          je(w(ve), () => a()(e(T))), y(ve), b(ce, ve);
        }), b(R, ee);
      };
      O(pe, (R) => {
        l().showPrice && e(T) > 0 && R(re);
      }), y(q), ke((R) => {
        ie = Rt(q, 1, "kaching-bundles__free-gift", null, ie, R), Ie(q, "data-free-gift-id", l().id), Et(q, e(J));
      }, [() => ({ "kaching-bundles__free-gift--out-of-stock": r().preview && e(S) })]), b(E, q);
    };
    O(U, (E) => {
      !g() && (!l().productGID || e(D) || r().preview && e(S)) && E(H);
    }), b(n, F);
    var se = at(C);
    return o(), se;
  }
  Ke(Qd, { dealBlock: {}, freeGift: {}, product: {}, dealBarSelected: {}, collapsed: {}, sets: {}, mainProductVariantId: {}, onChange: {} }, [], [], !0);
  var ef = $('<img alt=""/>'), tf = $('<div class="kaching-bundles__free-gift-summary__images"></div>'), nf = $('<span class="kaching-bundles__free-gift__text"><!></span>'), rf = $('<div class="kaching-bundles__free-gift kaching-bundles__free-gift-summary"><!> <!></div>');
  function Wd(n, t) {
    rt(t, !0);
    const [r, a] = kt();
    let s = _(t, "dealBlock", 7), o = _(t, "images", 7), c = _(t, "count", 7), l = _(t, "title", 7), i = _(t, "imageSize", 7);
    const u = $t(), g = xn(), k = d(() => yn({ priceFormatter: Te(g, "$formatPrice", r), product: void 0, totalFullPrice: 0, totalDiscountedPrice: 0, quantity: 1, unitQuantity: null, freeGiftsCount: c() })(Te(u, "$translate", r)(l()))), f = d(() => Ho({ dealBlock: s(), imageSize: i() }));
    var h = { get dealBlock() {
      return s();
    }, set dealBlock(j) {
      s(j), v();
    }, get images() {
      return o();
    }, set images(j) {
      o(j), v();
    }, get count() {
      return c();
    }, set count(j) {
      c(j), v();
    }, get title() {
      return l();
    }, set title(j) {
      l(j), v();
    }, get imageSize() {
      return i();
    }, set imageSize(j) {
      i(j), v();
    } }, p = rf(), x = w(p), m = (j) => {
      var D = tf();
      Gt(D, 21, o, Qr, (Q, Z) => {
        var T = ef();
        let J;
        ke((z) => {
          Ie(T, "src", e(Z).source), Ie(T, "height", i() || 0), J = Rt(T, 1, "kaching-bundles__free-gift-summary__image", null, J, z);
        }, [() => ({ "kaching-bundles__free-gift-summary__image--no-border": !e(Z).bordered })]), b(Q, T);
      }), y(D), b(j, D);
    };
    O(x, (j) => {
      o().length && j(m);
    });
    var I = L(x, 2), P = (j) => {
      var D = ze();
      lt(_e(D), () => e(k), (Q) => {
        var Z = nf();
        je(w(Z), () => e(k)), y(Z), b(Q, Z);
      }), b(j, D);
    };
    O(I, (j) => {
      e(k) && j(P);
    }), y(p), ke(() => Et(p, e(f))), b(n, p);
    var A = at(h);
    return a(), A;
  }
  Ke(Wd, { dealBlock: {}, images: {}, count: {}, title: {}, imageSize: {} }, [], [], !0);
  var af = $('<div class="kaching-bundles__free-gift__divider"></div>'), lf = $("<!> <!>", 1), sf = $("<!> <!>", 1);
  function Hi(n, t) {
    rt(t, !0);
    const r = () => Te(p, "$config", a), [a, s] = kt();
    let o = _(t, "dealBlock", 7), c = _(t, "freeGifts", 7), l = _(t, "otherProducts", 7), i = _(t, "dealBarSelected", 7), u = _(t, "freeGiftsSummary", 7), g = _(t, "sellingPlan", 7), k = _(t, "sets", 7, 1), f = _(t, "mainProductVariantId", 7), h = _(t, "onChange", 7);
    const p = Sn(), x = On();
    let m = Fe(ut({})), I = d(() => c().filter((G) => !G.applyOnlyForSubscriptions || g()));
    const P = d(() => e(I).flatMap((G) => {
      const ne = G.productGID ? l().find((B) => B.id === en(G.productGID)) : void 0;
      if (!r().preview && G.productGID && !(ne != null && ne.availableForSale)) return [];
      const X = ne && !r().preview ? Tr(ne) : ne;
      return { freeGift: G, product: X };
    })), A = d(() => {
      var G, ne;
      return (ne = (G = u()) == null ? void 0 : G.enabled) != null && ne;
    }), j = d(() => !i() && e(A) && e(P).length >= 2), D = d(() => {
      var G, ne;
      return (ne = (G = u()) == null ? void 0 : G.showImages) != null && ne ? e(P).flatMap(({ freeGift: X, product: B }) => {
        const S = ((F, U, { preview: H, mainProductVariantId: se, disableVariantOptionSync: E }) => {
          if (!F) return;
          const q = mi(F, U, H);
          if (q.length !== 0) {
            if (!E && se) {
              const ie = q.find((ue) => ue.id === se);
              if (ie) return ie;
            }
            return q[0];
          }
        })(B, X, { preview: r().preview, mainProductVariantId: f(), disableVariantOptionSync: o().disableVariantOptionSync }), C = Nd({ freeGift: X, product: B, variantImage: S == null ? void 0 : S.image, getMediaImageUrl: Te(x, "$getMediaImageUrl", a) });
        return C ? [{ source: C, bordered: X.giftType !== "shipping" }] : [];
      }) : [];
    });
    et(() => {
      (function(G, ne) {
        if (!c().length) return;
        const X = G.filter((B) => B.id in ne).map((B) => ({ id: B.id, variant: ne[B.id].variant, product: ne[B.id].product, quantity: B.quantity * k(), fullPrice: ne[B.id].fullPrice, showPrice: B.showPrice, includeInCompareAt: B.includeInCompareAt === !0, applyOnlyForSubscriptions: B.applyOnlyForSubscriptions }));
        h()(X);
      })(e(I), e(m));
    });
    var Q = { get dealBlock() {
      return o();
    }, set dealBlock(G) {
      o(G), v();
    }, get freeGifts() {
      return c();
    }, set freeGifts(G) {
      c(G), v();
    }, get otherProducts() {
      return l();
    }, set otherProducts(G) {
      l(G), v();
    }, get dealBarSelected() {
      return i();
    }, set dealBarSelected(G) {
      i(G), v();
    }, get freeGiftsSummary() {
      return u();
    }, set freeGiftsSummary(G) {
      u(G), v();
    }, get sellingPlan() {
      return g();
    }, set sellingPlan(G) {
      g(G), v();
    }, get sets() {
      return k();
    }, set sets(G = 1) {
      k(G), v();
    }, get mainProductVariantId() {
      return f();
    }, set mainProductVariantId(G) {
      f(G), v();
    }, get onChange() {
      return h();
    }, set onChange(G) {
      h(G), v();
    } }, Z = sf(), T = _e(Z), J = (G) => {
      {
        let ne = d(() => {
          var B, S;
          return (S = (B = u()) == null ? void 0 : B.title) != null ? S : "";
        }), X = d(() => {
          var B, S;
          return (S = (B = e(P)[0]) == null ? void 0 : B.freeGift.imageSize) != null ? S : 30;
        });
        Wd(G, { get dealBlock() {
          return o();
        }, get images() {
          return e(D);
        }, get count() {
          return e(P).length;
        }, get title() {
          return e(ne);
        }, get imageSize() {
          return e(X);
        } });
      }
    };
    O(T, (G) => {
      e(j) && G(J);
    }), Gt(L(T, 2), 19, () => e(P), ({ freeGift: G, product: ne }) => G.id, (G, ne, X) => {
      let B = () => e(ne).freeGift;
      var S = lf(), C = _e(S);
      Qd(C, { get dealBlock() {
        return o();
      }, get freeGift() {
        return B();
      }, get product() {
        return e(ne).product;
      }, get dealBarSelected() {
        return i();
      }, get collapsed() {
        return e(j);
      }, get sets() {
        return k();
      }, get mainProductVariantId() {
        return f();
      }, onChange: (H) => (function(se, E) {
        E.variant ? e(m)[se] = E : delete e(m)[se];
      })(B().id, H) });
      var F = L(C, 2), U = (H) => {
        b(H, af());
      };
      O(F, (H) => {
        !e(j) && e(X) < e(P).length - 1 && H(U);
      }), b(G, S);
    }), b(n, Z);
    var z = at(Q);
    return s(), z;
  }
  function Hd(n, t = "body") {
    let r;
    async function a(s) {
      if (typeof (t = s) == "string") {
        if (r = document.querySelector(t), r === null && (await cs(), r = document.querySelector(t)), r === null) throw new Error(`No element found matching css selector: "${t}"`);
      } else {
        if (!(t instanceof HTMLElement)) throw new TypeError(`Unknown portal target type: ${t === null ? "null" : typeof t}. Allowed types: string (CSS selector) or HTMLElement.`);
        r = t;
      }
      r.appendChild(n), n.hidden = !1;
    }
    return a(t), { update: a, destroy: function() {
      n.parentNode && n.parentNode.removeChild(n);
    } };
  }
  Ke(Hi, { dealBlock: {}, freeGifts: {}, otherProducts: {}, dealBarSelected: {}, freeGiftsSummary: {}, sellingPlan: {}, sets: {}, mainProductVariantId: {}, onChange: {} }, [], [], !0);
  var of = $('<div hidden=""><!></div>');
  function Gl(n, t) {
    rt(t, !1);
    let r = _(t, "target", 12, "body");
    var a = { get target() {
      return r();
    }, set target(o) {
      r(o), v();
    } };
    (function(o = !1) {
      const c = vn, l = c.l.u;
      if (!l) return;
      let i = () => vu(c.s);
      if (o) {
        let u = 0, g = {};
        const k = fl(() => {
          let f = !1;
          const h = c.s;
          for (const p in h) h[p] !== g[p] && (g[p] = h[p], f = !0);
          return f && u++, u;
        });
        i = () => e(k);
      }
      l.b.length && _r(() => {
        Gu(c, i), Xs(l.b);
      }), et(() => {
        const u = tn(() => l.m.map(sh));
        return () => {
          for (const g of u) typeof g == "function" && g();
        };
      }), l.a.length && et(() => {
        Gu(c, i), Xs(l.a);
      });
    })();
    var s = of();
    return wu(w(s), t, "default", {}), y(s), xo(s, (o, c) => Hd == null ? void 0 : Hd(o, c), r), b(n, s), at(a);
  }
  Ke(Gl, { target: {} }, ["default"], [], !0);
  var Ud = !1;
  const Zd = class extends Date {
    constructor(...n) {
      super(...n), xt(this, Zs), xt(this, ol, Fe(super.getTime())), xt(this, Ql, /* @__PURE__ */ new Map()), xt(this, Us, Qt), Ud || cn(this, Zs, kc).call(this);
    }
  };
  ol = /* @__PURE__ */ new WeakMap(), Ql = /* @__PURE__ */ new WeakMap(), Us = /* @__PURE__ */ new WeakMap(), Zs = /* @__PURE__ */ new WeakSet(), kc = function() {
    Ud = !0;
    var n = Zd.prototype, t = Date.prototype, r = Object.getOwnPropertyNames(t);
    for (const a of r) (a.startsWith("get") || a.startsWith("to") || a === "valueOf") && (n[a] = function(...s) {
      if (s.length > 0) return e(Se(this, ol)), t[a].apply(this, s);
      var o = Se(this, Ql).get(a);
      if (o === void 0) {
        const c = Qt;
        Zn(Se(this, Us)), o = d(() => (e(Se(this, ol)), t[a].apply(this, s))), Se(this, Ql).set(a, o), Zn(c);
      }
      return e(o);
    }), a.startsWith("set") && (n[a] = function(...s) {
      var o = t[a].apply(this, s);
      return te(Se(this, ol), t.getTime.call(this)), o;
    });
  };
  let Zo = Zd;
  var cf = ["forEach", "isDisjointFrom", "isSubsetOf", "isSupersetOf"], uf = ["difference", "intersection", "symmetricDifference", "union"], Jd = !1;
  const Jo = class extends Set {
    constructor(n) {
      if (super(), xt(this, Wl), xt(this, cl, /* @__PURE__ */ new Map()), xt(this, Kr, Fe(0)), xt(this, ni, Fe(0)), xt(this, Js, Nr || -1), n) {
        for (var t of n) super.add(t);
        Se(this, ni).v = super.size;
      }
      Jd || cn(this, Wl, xc).call(this);
    }
    has(n) {
      var t = super.has(n), r = Se(this, cl), a = r.get(n);
      if (a === void 0) {
        if (!t) return e(Se(this, Kr)), !1;
        a = cn(this, Wl, mc).call(this, !0), r.set(n, a);
      }
      return e(a), t;
    }
    add(n) {
      return super.has(n) || (super.add(n), te(Se(this, ni), super.size), vr(Se(this, Kr))), this;
    }
    delete(n) {
      var t = super.delete(n), r = Se(this, cl), a = r.get(n);
      return a !== void 0 && (r.delete(n), te(a, !1)), t && (te(Se(this, ni), super.size), vr(Se(this, Kr))), t;
    }
    clear() {
      if (super.size !== 0) {
        super.clear();
        var n = Se(this, cl);
        for (var t of n.values()) te(t, !1);
        n.clear(), te(Se(this, ni), 0), vr(Se(this, Kr));
      }
    }
    keys() {
      return this.values();
    }
    values() {
      return e(Se(this, Kr)), super.values();
    }
    entries() {
      return e(Se(this, Kr)), super.entries();
    }
    [Symbol.iterator]() {
      return this.keys();
    }
    get size() {
      return e(Se(this, ni));
    }
  };
  cl = /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ new WeakMap(), ni = /* @__PURE__ */ new WeakMap(), Js = /* @__PURE__ */ new WeakMap(), Wl = /* @__PURE__ */ new WeakSet(), mc = function(n) {
    return Nr === Se(this, Js) ? Fe(n) : xa(n);
  }, xc = function() {
    Jd = !0;
    var n = Jo.prototype, t = Set.prototype;
    for (const r of cf) n[r] = function(...a) {
      return e(Se(this, Kr)), t[r].apply(this, a);
    };
    for (const r of uf) n[r] = function(...a) {
      e(Se(this, Kr));
      var s = t[r].apply(this, a);
      return new Jo(s);
    };
  };
  let Yd = Jo;
  const Kd = class extends Map {
    constructor(n) {
      if (super(), xt(this, _a), xt(this, fa, /* @__PURE__ */ new Map()), xt(this, va, Fe(0)), xt(this, Aa, Fe(0)), xt(this, Ys, Nr || -1), n) {
        for (var [t, r] of n) super.set(t, r);
        Se(this, Aa).v = super.size;
      }
    }
    has(n) {
      var t = Se(this, fa), r = t.get(n);
      if (r === void 0) {
        if (super.get(n) === void 0) return e(Se(this, va)), !1;
        r = cn(this, _a, ul).call(this, 0), t.set(n, r);
      }
      return e(r), !0;
    }
    forEach(n, t) {
      cn(this, _a, Hl).call(this), super.forEach(n, t);
    }
    get(n) {
      var t = Se(this, fa), r = t.get(n);
      if (r === void 0) {
        if (super.get(n) === void 0) return void e(Se(this, va));
        r = cn(this, _a, ul).call(this, 0), t.set(n, r);
      }
      return e(r), super.get(n);
    }
    set(n, t) {
      var r, a = Se(this, fa), s = a.get(n), o = super.get(n), c = super.set(n, t), l = Se(this, va);
      if (s === void 0) s = cn(this, _a, ul).call(this, 0), a.set(n, s), te(Se(this, Aa), super.size), vr(l);
      else if (o !== t) {
        vr(s);
        var i = l.reactions === null ? null : new Set(l.reactions);
        (i === null || !((r = s.reactions) != null && r.every((u) => i.has(u)))) && vr(l);
      }
      return c;
    }
    delete(n) {
      var t = Se(this, fa), r = t.get(n), a = super.delete(n);
      return r !== void 0 && (t.delete(n), te(Se(this, Aa), super.size), te(r, -1), vr(Se(this, va))), a;
    }
    clear() {
      if (super.size !== 0) {
        super.clear();
        var n = Se(this, fa);
        for (var t of (te(Se(this, Aa), 0), n.values())) te(t, -1);
        vr(Se(this, va)), n.clear();
      }
    }
    keys() {
      return e(Se(this, va)), super.keys();
    }
    values() {
      return cn(this, _a, Hl).call(this), super.values();
    }
    entries() {
      return cn(this, _a, Hl).call(this), super.entries();
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    get size() {
      return e(Se(this, Aa)), super.size;
    }
  };
  fa = /* @__PURE__ */ new WeakMap(), va = /* @__PURE__ */ new WeakMap(), Aa = /* @__PURE__ */ new WeakMap(), Ys = /* @__PURE__ */ new WeakMap(), _a = /* @__PURE__ */ new WeakSet(), ul = function(n) {
    return Nr === Se(this, Ys) ? Fe(n) : xa(n);
  }, Hl = function() {
    e(Se(this, va));
    var n = Se(this, fa);
    if (Se(this, Aa).v !== n.size) {
      for (var t of f1(Kd.prototype, this, "keys").call(this)) if (!n.has(t)) {
        var r = cn(this, _a, ul).call(this, 0);
        n.set(t, r);
      }
    }
    for ([, r] of Se(this, fa)) e(r);
  };
  let Yo = Kd;
  class df {
    constructor(t, r) {
      xt(this, Ul), xt(this, Zl), Pt(this, Ul, t), Pt(this, Zl, Lc(r));
    }
    get current() {
      return Se(this, Zl).call(this), Se(this, Ul).call(this);
    }
  }
  Ul = /* @__PURE__ */ new WeakMap(), Zl = /* @__PURE__ */ new WeakMap();
  const gf = /\(.+\)/, hf = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
  class pf extends df {
    constructor(t, r) {
      let a = gf.test(t) || t.split(/[\s,]+/).some((o) => hf.has(o.trim())) ? t : `(${t})`;
      const s = window.matchMedia(a);
      super(() => s.matches, (o) => (function(c, l, i, u = {}) {
        var g = vo(l, c, i, u);
        return () => {
          c.removeEventListener(l, g, u);
        };
      })(s, "change", o));
    }
  }
  const Xd = [{ fonts: [20, 16, 12, 10], gaps: [16, 12, 8], image: 36 }, { fonts: [24, 20, 16, 12], gaps: [20, 16, 12], image: 48 }, { fonts: [28, 24, 20, 16], gaps: [24, 20, 16], image: 60 }, { fonts: [32, 28, 24, 20], gaps: [28, 24, 20], image: 80 }], eg = [0, 12, 16, 20, 24, 28], bf = /\p{L}\p{M}*/gu, ff = /\p{N}/gu, tg = ({ lettersAllowed: n, numbersAllowed: t }) => n !== t, vf = ({ previousValue: n, nextValue: t, caretPosition: r }, a, s) => {
    const o = t.slice(r), c = t.slice(0, r), l = c.slice(0, _f(n, c)), i = c.slice(l.length), u = ((f, h) => tg(h) ? h.lettersAllowed ? f.replace(ff, "") : f.replace(bf, "") : f)(i, a), g = s === void 0 ? u.length : Math.max(0, s - l.length - o.length), k = u.slice(0, g);
    return { value: l + k + o, caretPosition: l.length + k.length, rejected: u.length < i.length };
  }, _f = (n, t) => {
    const r = Math.min(n.length, t.length);
    let a = 0;
    for (; a < r && n[a] === t[a]; ) a += 1;
    return a;
  };
  var kf = (n, t) => {
    n.target === n.currentTarget && t()();
  }, mf = $('<img alt="Close"/>'), xf = $('<span class="kaching-bundles__personalisation-modal__item-variant"> </span>'), yf = (n, t, r) => t(r(), n.currentTarget), wf = $('<img alt="Clear"/>'), Pf = $('<span class="kaching-bundles__personalisation-modal__input-error"> </span>'), Sf = $("<span> </span>"), Bf = $('<div class="kaching-bundles__personalisation-modal__item"><div class="kaching-bundles__personalisation-modal__item-info"><div class="kaching-bundles__personalisation-modal__item-image-wrapper"><img class="kaching-bundles__personalisation-modal__item-image" alt=""/></div> <div class="kaching-bundles__personalisation-modal__item-details"><span class="kaching-bundles__personalisation-modal__item-title"> </span> <!></div></div> <div class="kaching-bundles__personalisation-modal__input-wrapper"><div class="kaching-bundles__personalisation-modal__input-container"><input type="text"/> <!></div> <!> <!></div></div>'), Cf = $('<div role="none"><div class="kaching-bundles__personalisation-modal-overlay__content"><div class="kaching-bundles__personalisation-modal"><div class="kaching-bundles__personalisation-modal__header"><h2 class="kaching-bundles__personalisation-modal__heading"> </h2> <!></div> <div class="kaching-bundles__personalisation-modal__items"></div> <div class="kaching-bundles__personalisation-modal__actions"><!> <!></div></div></div></div>');
  function Ko(n, t) {
    rt(t, !0);
    const r = () => Te(f, "$translate", a), [a, s] = kt(), o = _(t, "selectedVariants", 7), c = _(t, "personalisationValues", 7), l = _(t, "addPersonalisationModal", 7), i = _(t, "required", 7, !1), u = _(t, "inline", 7, !1), g = _(t, "onConfirm", 7), k = _(t, "onClose", 7), f = $t(), h = d(() => ((re) => {
      var R, ee;
      return { lettersAllowed: (R = re == null ? void 0 : re.lettersAllowed) == null || R, numbersAllowed: (ee = re == null ? void 0 : re.numbersAllowed) == null || ee };
    })(l())), p = d(() => !e(h).lettersAllowed && e(h).numbersAllowed), x = d(() => tg(e(h))), m = d(() => e(p) ? "system.numbers_only" : "system.letters_only"), I = d(() => {
      var re, R;
      return (R = (re = l()) == null ? void 0 : re.characterLimitEnabled) != null && R;
    }), P = d(() => {
      var re, R;
      return e(I) ? (R = (re = l()) == null ? void 0 : re.characterLimit) != null ? R : 30 : void 0;
    }), A = d(() => o().map(({ product: re, index: R }) => `${R}:${re.id}`)), j = d(() => o().map(({ product: re }, R) => {
      const ee = o().slice(0, R + 1).filter((ce) => ce.product.id === re.id).length;
      return `${re.title} #${ee}`;
    })), D = new Yo(), Q = d(() => o().map(({ index: re }) => {
      var R, ee;
      return (ee = (R = D.get(e(A)[re])) != null ? R : c()[re]) != null ? ee : "";
    })), Z = d(() => new Set(o().filter(({ index: re }) => (c()[re] || "").trim() !== "").map(({ index: re }) => re))), T = d(() => l() ? (({ size: re, roundness: R, imageSize: ee, textSize: ce, overlayColor: ve, primaryTextColor: oe, secondaryTextColor: Be, buttonColor: be, buttonTextColor: K, errorColor: Y }) => {
      const ge = Math.min(Math.max(0, re), Xd.length - 1), we = Math.min(Math.max(0, R), eg.length - 1), me = Xd[ge], Pe = eg[we];
      return mn({ "kaching-product-personalisation-font-0": me.fonts[0] + "px", "kaching-product-personalisation-font-1": me.fonts[1] + "px", "kaching-product-personalisation-font-2": me.fonts[2] + "px", "kaching-product-personalisation-font-3": me.fonts[3] + "px", "kaching-product-personalisation-gap-0": me.gaps[0] + "px", "kaching-product-personalisation-gap-1": me.gaps[1] + "px", "kaching-product-personalisation-gap-2": me.gaps[2] + "px", "kaching-product-personalisation-image-size": (ee != null ? ee : me.image) + "px", "kaching-product-personalisation-radius": Pe + "px", "kaching-product-personalisation-text-size": ce + "px", "kaching-product-personalisation-overlay-color": Qe(ve), "kaching-product-personalisation-primary-text-color": Qe(oe), "kaching-product-personalisation-secondary-text-color": Qe(Be), "kaching-product-personalisation-button-color": Qe(be), "kaching-product-personalisation-button-text-color": Qe(K), "kaching-product-personalisation-error-color": Qe(Y) });
    })(l()) : "");
    let J = !1, z = Fe(ut([]));
    function G(re, R) {
      var ee;
      if (J) return;
      const ce = vf({ previousValue: e(Q)[re], nextValue: R.value, caretPosition: (ee = R.selectionStart) != null ? ee : R.value.length }, e(h), e(P));
      R.value !== ce.value && (R.value = ce.value, R.setSelectionRange(ce.caretPosition, ce.caretPosition)), ne(re, ce.value), X(re, ce.rejected);
    }
    function ne(re, R) {
      D.set(e(A)[re], R);
    }
    function X(re, R) {
      if (!!e(z)[re] === R) return;
      const ee = [...e(z)];
      ee[re] = R, te(z, ee, !0);
    }
    function B(re) {
      return e(Z).has(re) && e(Q)[re].trim() !== "";
    }
    const S = d(() => e(Q).some((re) => re.trim() !== "")), C = d(() => e(Z).size > 0), F = d(() => e(Q).every((re) => re.trim() !== "")), U = d(() => i() ? !e(F) : !e(S) && !e(C));
    var H = { get selectedVariants() {
      return o();
    }, set selectedVariants(re) {
      o(re), v();
    }, get personalisationValues() {
      return c();
    }, set personalisationValues(re) {
      c(re), v();
    }, get addPersonalisationModal() {
      return l();
    }, set addPersonalisationModal(re) {
      l(re), v();
    }, get required() {
      return i();
    }, set required(re = !1) {
      i(re), v();
    }, get inline() {
      return u();
    }, set inline(re = !1) {
      u(re), v();
    }, get onConfirm() {
      return g();
    }, set onConfirm(re) {
      g(re), v();
    }, get onClose() {
      return k();
    }, set onClose(re) {
      k(re), v();
    } }, se = Cf();
    let E;
    se.__click = [kf, k];
    var q = w(se), ie = w(q), ue = w(ie), W = w(ue), ae = w(W, !0);
    y(W), Xt(L(W, 2), { element: "span", class: "kaching-bundles__personalisation-modal__close", get onclick() {
      return k();
    }, children: (re, R) => {
      var ee = mf();
      ke(() => Ie(ee, "src", Eo)), b(re, ee);
    }, $$slots: { default: !0 } }), y(ue);
    var he = L(ue, 2);
    Gt(he, 21, o, ({ product: re, variant: R, index: ee }) => ee, (re, R) => {
      let ee = () => e(R).product, ce = () => e(R).variant, ve = () => e(R).index;
      var oe = Bf(), Be = w(oe), be = w(Be), K = w(be);
      y(be);
      var Y = L(be, 2), ge = w(Y), we = w(ge, !0);
      y(ge);
      var me = L(ge, 2), Pe = (Oe) => {
        var De = xf(), Ae = w(De, !0);
        y(De), ke((Le) => pt(Ae, Le), [() => ce().options.join(", ")]), b(Oe, De);
      };
      O(me, (Oe) => {
        ee().variants.length > 1 && Oe(Pe);
      }), y(Y), y(Be);
      var Ge = L(Be, 2), Ze = w(Ge), Ve = w(Ze);
      let fe;
      wa(Ve), Ve.__input = [yf, G, ve];
      var We = L(Ve, 2), $e = (Oe) => {
        Xt(Oe, { element: "span", class: "kaching-bundles__personalisation-modal__input-clear", onclick: () => (function(De) {
          ne(De, ""), X(De, !1);
        })(ve()), children: (De, Ae) => {
          var Le = wf();
          ke(() => Ie(Le, "src", "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.6667%203.99992V3.46659C10.6667%202.71985%2010.6667%202.34648%2010.5213%202.06126C10.3935%201.81038%2010.1895%201.60641%209.93865%201.47858C9.65344%201.33325%209.28007%201.33325%208.53333%201.33325H7.46667C6.71993%201.33325%206.34656%201.33325%206.06135%201.47858C5.81046%201.60641%205.60649%201.81038%205.47866%202.06126C5.33333%202.34648%205.33333%202.71985%205.33333%203.46659V3.99992M2%203.99992H14M12.6667%203.99992V11.4666C12.6667%2012.5867%2012.6667%2013.1467%2012.4487%2013.5746C12.2569%2013.9509%2011.951%2014.2569%2011.5746%2014.4486C11.1468%2014.6666%2010.5868%2014.6666%209.46667%2014.6666H6.53333C5.41323%2014.6666%204.85318%2014.6666%204.42535%2014.4486C4.04903%2014.2569%203.74307%2013.9509%203.55132%2013.5746C3.33333%2013.1467%203.33333%2012.5867%203.33333%2011.4666V3.99992'%20stroke='%23F04438'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), b(De, Le);
        }, $$slots: { default: !0 } });
      };
      O(We, (Oe) => {
        B(ve()) && Oe($e);
      }), y(Ze);
      var M = L(Ze, 2), xe = (Oe) => {
        var De = Pf(), Ae = w(De, !0);
        y(De), ke((Le) => pt(Ae, Le), [() => r()(e(m))]), b(Oe, De);
      };
      O(M, (Oe) => {
        e(x) && e(z)[ve()] && Oe(xe);
      });
      var Me = L(M, 2), qe = (Oe) => {
        var De = Sf();
        let Ae;
        var Le = w(De);
        y(De), ke((nt) => {
          var Je, Ne;
          Ae = Rt(De, 1, "kaching-bundles__personalisation-modal__input-counter", null, Ae, nt), pt(Le, `${(Je = e(Q)[ve()].length) != null ? Je : ""}/${(Ne = e(P)) != null ? Ne : ""}`);
        }, [() => ({ "kaching-bundles__personalisation-modal__input-counter--error": e(P) !== void 0 && e(Q)[ve()].length >= e(P) })]), b(Oe, De);
      };
      O(Me, (Oe) => {
        e(I) && Oe(qe);
      }), y(Ge), y(oe), ke((Oe, De) => {
        Ie(K, "src", ce().image || ee().image), pt(we, e(j)[ve()]), fe = Rt(Ve, 1, "kaching-bundles__personalisation-modal__input", null, fe, Oe), Ie(Ve, "placeholder", De), gi(Ve, e(Q)[ve()]), Ie(Ve, "maxlength", e(x) ? void 0 : e(P)), Ie(Ve, "inputmode", e(p) ? "numeric" : void 0);
      }, [() => ({ "kaching-bundles__personalisation-modal__input--with-clear": B(ve()), "kaching-bundles__personalisation-modal__input--error": e(P) !== void 0 && e(Q)[ve()].length >= e(P) }), () => {
        var Oe;
        return (Oe = l()) != null && Oe.placeholderText ? r()(l().placeholderText) : "";
      }]), us("compositionstart", Ve, () => J = !0), us("compositionend", Ve, (Oe) => (function(De, Ae) {
        J = !1, G(De, Ae);
      })(ve(), Oe.currentTarget)), b(re, oe);
    }), y(he);
    var V = L(he, 2), N = w(V);
    Xt(N, { element: "button", class: "kaching-bundles__personalisation-modal__button kaching-bundles__personalisation-modal__button--cancel", get onclick() {
      return k();
    }, children: (re, R) => {
      ma();
      var ee = Jn();
      ke((ce) => pt(ee, ce), [() => r()("system.cancel")]), b(re, ee);
    }, $$slots: { default: !0 } });
    var de = L(N, 2);
    {
      let re = d(() => ["kaching-bundles__personalisation-modal__button", "kaching-bundles__personalisation-modal__button--confirm", e(U) && "kaching-bundles__personalisation-modal__button--disabled"]);
      Xt(de, { element: "button", get class() {
        return e(re);
      }, get disabled() {
        return e(U);
      }, onclick: () => g()(e(Q)), children: (R, ee) => {
        ma();
        var ce = Jn();
        ke((ve) => pt(ce, ve), [() => r()("system.confirm")]), b(R, ce);
      }, $$slots: { default: !0 } });
    }
    y(V), y(ie), y(q), y(se), ke((re, R) => {
      E = Rt(se, 1, "kaching-bundles__personalisation-modal-overlay", null, E, re), Et(se, e(T)), pt(ae, R);
    }, [() => ({ "kaching-bundles__personalisation-modal-overlay--inline": u() }), () => {
      var re;
      return (re = l()) != null && re.heading ? r()(l().heading) : "";
    }]), b(n, se);
    var pe = at(H);
    return s(), pe;
  }
  jn(["click", "input"]), Ke(Ko, { selectedVariants: {}, personalisationValues: {}, addPersonalisationModal: {}, required: {}, inline: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var If = (n, t) => {
    te(t, !0);
  }, Mf = (n, t) => {
    n.key !== "Enter" && n.key !== " " || (n.preventDefault(), te(t, !0));
  }, zf = $('<div class="kaching-bundles__product-personalisation__image-wrapper"><img alt="" class="kaching-bundles__product-personalisation__image"/></div>'), $f = $('<div class="kaching-bundles__product-personalisation__image-wrapper"><img alt="" class="kaching-bundles__product-personalisation__image kaching-bundles__product-personalisation__image--default"/></div>'), Df = $('<span class="kaching-bundles__product-personalisation__title"><!> <span class="kaching-bundles__product-personalisation__subtitle"> </span></span>'), Tf = $('<span class="kaching-bundles__product-personalisation__title"><!></span>'), Vf = $('<span class="kaching-bundles__product-personalisation__subtitle"><!></span>'), Af = $("<!> <!>", 1), qf = $('<span class="kaching-bundles__product-personalisation__unit-label"> </span>'), Gf = $('<span class="kaching-bundles__product-personalisation__price"><!> <!></span>'), Of = $('<span class="kaching-bundles__product-personalisation__compare-at-price"><!></span>'), Ff = $('<div class="kaching-bundles"><!></div>'), Lf = $('<div role="button" tabindex="0"><div class="kaching-bundles__product-personalisation__main"><!> <div class="kaching-bundles__product-personalisation__content"><!></div></div> <div class="kaching-bundles__product-personalisation__pricing"><!> <!></div></div> <!>', 1);
  function xi(n, t) {
    rt(t, !0);
    const r = () => Te(x, "$config", o), a = () => Te(P, "$formatPrice", o), s = () => Te(I, "$translate", o), [o, c] = kt();
    let l = _(t, "productPersonalisation", 7), i = _(t, "product", 7), u = _(t, "selectedVariantIds", 23, () => []), g = _(t, "personalisationItems", 7), k = _(t, "quantity", 7), f = _(t, "addPersonalisationModal", 7), h = _(t, "onPersonalisationsChange", 7), p = _(t, "initialValues", 23, () => []);
    const x = Sn(), m = _i(), I = $t(), P = xn(), A = On(), { reportedRule: j, failing: D } = (() => {
      const M = Ga(qd);
      if (!M) throw new Error("getPersonalisationRule must be called within a component tree that has setupPersonalisationRule initialized");
      return M;
    })();
    let Q = Fe(!1);
    const Z = new Yo();
    let T;
    const J = d(() => {
      if (l().mediaImageGID) return Te(A, "$getMediaImageUrl", o)(l().mediaImageGID);
    }), z = d(() => !e(J) && l().imageSize > 0), G = d(() => Math.round(100 * parseFloat(l().pricePerItem || "0") * r().currencyRate)), ne = d(() => Math.round(100 * parseFloat(l().compareAtPrice || "0") * r().currencyRate)), X = d(() => e(G)), B = d(() => e(ne)), S = d(() => e(B) > 0 && e(B) > e(X)), C = d(() => {
      var M;
      return ((xe, Me) => mn({ "kaching-product-personalisation-image-height": xe.imageSize + "px", ...Me && { "kaching-product-personalisation-error-color": Qe(Me) } }))(l(), (M = f()) == null ? void 0 : M.errorColor);
    }), F = d(() => l().required && Te(D, "$personalisationRuleFailing", o) && (r().preview && r().previewAlerts || Te(m, "$requireSelectionError", o))), U = d(() => yn({ priceFormatter: a(), product: void 0, totalFullPrice: e(B) || e(X), totalDiscountedPrice: e(X), quantity: k(), unitQuantity: null })), H = d(() => e(U)(s()(l().title))), se = d(() => l().subtitle ? e(U)(s()(l().subtitle)) : ""), E = d(() => (function(M) {
      const { personalisationItems: xe, product: Me, selectedVariantIds: qe } = M;
      return xe != null ? xe : qe.map((Oe, De) => ({ key: String(De), product: Me, variant: Me.variants.find((Ae) => Ae.id === Oe) || Me.variants[0] }));
    })({ personalisationItems: g(), product: i(), selectedVariantIds: u() })), q = d(() => e(E).map((M) => `${M.key}:${M.product.id}`)), ie = d(() => e(E).map((M) => `${M.key}:${M.product.id}:${M.variant.id}`).join("|")), ue = d(() => e(q).map((M) => Z.get(M) || "")), W = d(() => e(E).map((M, xe) => ({ product: M.product, variant: M.variant, index: xe })));
    et(() => {
      l().id, p(), tn(() => {
        Z.clear(), p().forEach((M, xe) => {
          M && e(q)[xe] && Z.set(e(q)[xe], M);
        });
      });
    }), et(() => {
      if (!g()) return;
      const M = e(ie);
      tn(() => {
        if (M === T) return;
        const xe = T === void 0;
        T = M, xe && p().length <= e(q).length || pe(e(ue));
      });
    });
    const ae = d(() => e(ue).some((M) => M.trim() !== "")), he = d(() => e(ue).map((M, xe) => ({ value: M, index: xe })).filter(({ value: M }) => M.trim() !== "")), V = d(() => k() === 1);
    var N;
    function de(M) {
      const xe = e(q).map((Me, qe) => {
        const Oe = M[qe] || "";
        return Oe ? Z.set(Me, Oe) : Z.delete(Me), Oe;
      });
      te(Q, !1), pe(xe);
    }
    function pe(M) {
      var xe;
      if (!l().variantGID) return;
      const Me = en(l().variantGID);
      if (!Me) return;
      const qe = s()(l().valueLabel || "Value"), Oe = M.map((De, Ae) => ({ id: l().id, variantId: Me, text: De, valueLabel: qe, productIndex: Ae, parentVariantId: g() ? e(E)[Ae].variant.id : void 0 })).filter((De) => De.text.trim() !== "");
      (xe = h()) == null || xe(Oe);
    }
    et(() => {
      j.set(Ad({ required: l().required, itemCount: e(E).length, filledCount: e(he).length }));
    }), N = () => j.set(ua), vn === null && ao(), ja(() => () => tn(N));
    var re = { get productPersonalisation() {
      return l();
    }, set productPersonalisation(M) {
      l(M), v();
    }, get product() {
      return i();
    }, set product(M) {
      i(M), v();
    }, get selectedVariantIds() {
      return u();
    }, set selectedVariantIds(M = []) {
      u(M), v();
    }, get personalisationItems() {
      return g();
    }, set personalisationItems(M) {
      g(M), v();
    }, get quantity() {
      return k();
    }, set quantity(M) {
      k(M), v();
    }, get addPersonalisationModal() {
      return f();
    }, set addPersonalisationModal(M) {
      f(M), v();
    }, get onPersonalisationsChange() {
      return h();
    }, set onPersonalisationsChange(M) {
      h(M), v();
    }, get initialValues() {
      return p();
    }, set initialValues(M = []) {
      p(M), v();
    } }, R = Lf(), ee = _e(R);
    let ce;
    ee.__click = [If, Q], ee.__keydown = [Mf, Q];
    var ve = w(ee), oe = w(ve), Be = (M) => {
      var xe = zf(), Me = w(xe);
      y(xe), ke(() => {
        Ie(Me, "src", e(J)), Ie(Me, "height", l().imageSize || 0);
      }), b(M, xe);
    }, be = (M) => {
      var xe = ze(), Me = _e(xe), qe = (Oe) => {
        var De = $f(), Ae = w(De);
        y(De), ke(() => {
          Ie(Ae, "src", "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25.0476%206.95032C24.6473%206.55003%2024.1722%206.23251%2023.6492%206.01588C23.1262%205.79924%2022.5657%205.68774%2021.9996%205.68774C21.4335%205.68774%2020.873%205.79924%2020.35%206.01588C19.8271%206.23251%2019.3519%206.55003%2018.9516%206.95032L17.9932%207.90872L17.9788%207.89432L16.2828%209.59032L16.2972%209.60632L6.88921%2019.0143C6.06394%2019.8391%205.60007%2020.9579%205.59961%2022.1247V25.1999C5.59961%2025.5182%205.72604%2025.8234%205.95108%2026.0484C6.17612%2026.2735%206.48135%2026.3999%206.79961%2026.3999H9.87481C11.0416%2026.3995%2012.1604%2025.9356%2012.9852%2025.1103L25.0492%2013.0463C25.4495%2012.6461%2025.767%2012.1709%2025.9837%2011.6479C26.2003%2011.1249%2026.3118%2010.5644%2026.3118%209.99832C26.3118%209.43225%2026.2003%208.87172%2025.9837%208.34874C25.767%207.82576%2025.4495%207.35058%2025.0492%206.95032H25.0476ZM17.9932%2011.3023L8.58521%2020.7103C8.3995%2020.8961%208.25221%2021.1166%208.15173%2021.3593C8.05125%2021.602%207.99956%2021.8621%207.99961%2022.1247V23.9999H9.87481C10.4044%2023.9999%2010.9148%2023.7887%2011.2876%2023.4143L20.6956%2014.0063L17.9932%2011.3023ZM22.3932%2012.3087L23.3516%2011.3503C23.6865%2010.9871%2023.8678%2010.5084%2023.8578%2010.0144C23.8477%209.52049%2023.647%209.04957%2023.2977%208.70023C22.9484%208.35089%2022.4774%208.15019%2021.9835%208.14015C21.4896%208.1301%2021.0109%208.31147%2020.6476%208.64632L19.6908%209.60632L22.3932%2012.3087Z'%20fill='black'/%3e%3c/svg%3e"), Ie(Ae, "height", l().imageSize || 0);
        }), b(Oe, De);
      };
      O(Me, (Oe) => {
        e(z) && Oe(qe);
      }, !0), b(M, xe);
    };
    O(oe, (M) => {
      e(J) ? M(Be) : M(be, !1);
    });
    var K = L(oe, 2), Y = w(K), ge = (M) => {
      var xe = ze();
      Gt(_e(xe), 17, () => e(he), ({ value: Me, index: qe }) => qe, (Me, qe) => {
        var Oe = Df(), De = w(Oe), Ae = (Je) => {
          var Ne = Jn();
          ke(() => pt(Ne, `#${e(qe).index + 1}`)), b(Je, Ne);
        };
        O(De, (Je) => {
          e(V) || Je(Ae);
        });
        var Le = L(De, 2), nt = w(Le, !0);
        y(Le), y(Oe), ke(() => pt(nt, e(qe).value)), b(Me, Oe);
      }), b(M, xe);
    }, we = (M) => {
      var xe = Af(), Me = _e(xe), qe = (Ae) => {
        var Le = Tf();
        je(w(Le), () => e(H)), y(Le), b(Ae, Le);
      };
      O(Me, (Ae) => {
        e(H) && Ae(qe);
      });
      var Oe = L(Me, 2), De = (Ae) => {
        var Le = Vf();
        je(w(Le), () => e(se)), y(Le), b(Ae, Le);
      };
      O(Oe, (Ae) => {
        e(se) && Ae(De);
      }), b(M, xe);
    };
    O(Y, (M) => {
      e(ae) ? M(ge) : M(we, !1);
    }), y(K), y(ve);
    var me = L(ve, 2), Pe = w(me), Ge = (M) => {
      var xe = Gf(), Me = w(xe);
      je(Me, () => a()(e(X)));
      var qe = L(Me, 2), Oe = (De) => {
        var Ae = qf(), Le = w(Ae, !0);
        y(Ae), ke(() => pt(Le, l().pricePerItemUnitLabel)), b(De, Ae);
      };
      O(qe, (De) => {
        l().pricePerItemUnitLabel && De(Oe);
      }), y(xe), b(M, xe);
    };
    O(Pe, (M) => {
      e(X) > 0 && M(Ge);
    });
    var Ze = L(Pe, 2), Ve = (M) => {
      var xe = Of();
      je(w(xe), () => a()(e(B))), y(xe), b(M, xe);
    };
    O(Ze, (M) => {
      e(S) && M(Ve);
    }), y(me), y(ee);
    var fe = L(ee, 2), We = (M) => {
      Gl(M, { target: "body", children: (xe, Me) => {
        var qe = Ff();
        Ko(w(qe), { get selectedVariants() {
          return e(W);
        }, get personalisationValues() {
          return e(ue);
        }, get addPersonalisationModal() {
          return f();
        }, get required() {
          return l().required;
        }, onConfirm: de, onClose: () => {
          te(Q, !1);
        } }), y(qe), b(xe, qe);
      }, $$slots: { default: !0 } });
    };
    O(fe, (M) => {
      e(Q) && M(We);
    }), ke((M) => {
      ce = Rt(ee, 1, "kaching-bundles__product-personalisation", null, ce, M), Ie(ee, "data-product-personalisation-id", l().id), Et(ee, e(C));
    }, [() => ({ "kaching-bundles__product-personalisation--filled": e(ae), "kaching-bundles__product-personalisation--required-error": e(F) })]), b(n, R);
    var $e = at(re);
    return c(), $e;
  }
  function Ef(n, t, r) {
    const a = Number(n.target.value), s = t().find((o) => o.id === a);
    r()(s);
  }
  jn(["click", "keydown"]), Ke(xi, { productPersonalisation: {}, product: {}, selectedVariantIds: {}, personalisationItems: {}, quantity: {}, addPersonalisationModal: {}, onPersonalisationsChange: {}, initialValues: {} }, [], [], !0);
  var jf = (n) => n.stopPropagation(), Rf = $("<option> </option>"), Nf = $('<select class="kaching-bundles__bar-variant-select kaching-bundles__selling-plan-select"></select>');
  function Ha(n, t) {
    rt(t, !0);
    const [r, a] = kt(), s = _(t, "sellingPlans", 7), o = _(t, "selectedSellingPlan", 7), c = _(t, "onChange", 7), l = $t();
    var i, u = { get sellingPlans() {
      return s();
    }, set sellingPlans(f) {
      s(f), v();
    }, get selectedSellingPlan() {
      return o();
    }, set selectedSellingPlan(f) {
      o(f), v();
    }, get onChange() {
      return c();
    }, set onChange(f) {
      c(f), v();
    } }, g = Nf();
    g.__change = [Ef, s, c], g.__click = [jf], Gt(g, 21, s, (f) => f.id, (f, h) => {
      var p = Rf(), x = w(p, !0);
      y(p);
      var m = {};
      ke(() => {
        var I;
        pt(x, e(h).name), m !== (m = e(h).id) && (p.value = (I = p.__value = e(h).id) != null ? I : "");
      }), b(f, p);
    }), y(g), Po(g), ke((f) => {
      var h;
      Ie(g, "aria-label", f), i !== (i = o().id) && (g.value = (h = g.__value = o().id) != null ? h : "", wl(g, o().id));
    }, [() => Te(l, "$translate", r)("system.subscription_plan")]), b(n, g);
    var k = at(u);
    return a(), k;
  }
  jn(["change", "click"]), Ke(Ha, { sellingPlans: {}, selectedSellingPlan: {}, onChange: {} }, [], [], !0);
  var Qf = Gn('<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12.334 1 5 8.333 1.667 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Ts(n) {
    b(n, Qf());
  }
  Ke(Ts, {}, [], [], !0);
  var Wf = $('<img alt="" class="kaching-bundles__upsell__image"/>'), Hf = $('<div class="kaching-bundles__upsell__price"><!></div>'), Uf = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), Zf = $('<div class="kaching-bundles__upsell__price"><!></div>'), Jf = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), Yf = $('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--secondary"><!> <!></div>'), Kf = $('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--main"><!> <!></div> <!>', 1), Xf = $('<div class="kaching-bundles__upsell__price"><!></div>'), ev = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), tv = $('<div class="kaching-bundles__upsell__unit-price"><!> </div>'), nv = $('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--main"><!> <!></div> <div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--secondary"><!></div>', 1), rv = $('<div class="kaching-bundles__upsell__price"><!></div>'), av = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), iv = $("<!> <!>", 1), lv = $('<div><!> <div class="kaching-bundles__upsell__main"><!> <!> <div class="kaching-bundles__upsell__content"><!> <!> <!></div></div> <div class="kaching-bundles__upsell__pricing"><!></div></div>');
  function ng(n, t) {
    rt(t, !0);
    const r = () => Te(P, "$config", o), a = () => Te(m, "$formatPrice", o), s = () => Te(x, "$translate", o), [o, c] = kt();
    let l = _(t, "dealBlock", 7), i = _(t, "dealBarId", 7), u = _(t, "upsell", 7), g = _(t, "product", 7), k = _(t, "dealBarSelected", 7, !1), f = _(t, "dealSellingPlan", 7), h = _(t, "sets", 7), p = _(t, "onChange", 7);
    const x = $t(), m = xn(), I = On(), P = Sn();
    let A = Fe(ut(u().preselected)), j = Fe(void 0), D = Fe(void 0);
    const Q = d(() => u().variantGIDs ? u().variantGIDs.map(en) : g().variants.map((Y) => Y.id)), Z = d(() => ({ ...g(), variants: g().variants.filter((Y) => (r().preview || Y.availableForSale) && e(Q).includes(Y.id)) })), T = d(() => (function(Y, ge, we) {
      if (ge !== void 0) return ge;
      const me = Y.defaultVariantGID ? en(Y.defaultVariantGID) : void 0;
      if (me !== void 0 && (we != null && we.variants.some((Pe) => Pe.id === me))) return me;
      if (we != null && we.availableForSale && we.variants.length > 0) return we.variants[0].id;
    })(u(), e(j), e(Z))), J = d(() => e(Z).variants.find((Y) => Y.id === e(T))), z = d(() => Te(I, "$getMediaImageUrl", o)(u().mediaImageGID)), G = d(() => ((Y, ge) => {
      const { fonts: we, colors: me, cornerRadius: Pe } = Y;
      return mn({ "kaching-upsell-background-color": me.upsellBackground && Qe(me.upsellBackground), "kaching-upsell-text-color": me.upsellText && Qe(me.upsellText), "kaching-upsell-selected-background-color": me.upsellSelectedBackground && Qe(me.upsellSelectedBackground), "kaching-upsell-selected-text-color": me.upsellSelectedText && Qe(me.upsellSelectedText), "kaching-upsell-font-size": we.upsell && we.upsell.size + "px", "kaching-upsell-font-weight": we.upsell && gr(we.upsell.style), "kaching-upsell-font-style": we.upsell && hr(we.upsell.style), "kaching-upsell-image-border-radius": (Pe || 0) / 2 + "px", "kaching-upsell-image-height": ge.imageSize + "px" });
    })(l(), u())), ne = d(() => g().url ? `${g().url}?variant=${e(T)}` : void 0), X = d(() => l().priceRounding ? { perItem: l().showPricesPerItem, precision: l().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), B = d(() => u().quantity * h()), S = d(() => (function(Y) {
      if (!Y) return 0;
      let ge = Y.price;
      return l().useProductCompareAtPrice && Y.compareAtPrice && (ge = Math.max(ge, Y.compareAtPrice)), ge * e(B);
    })(e(J))), C = d(() => Math.ceil(e(S) / e(B))), F = d(() => {
      var Y;
      return (Y = u().subscriptionEnabled) == null || Y;
    }), U = d(() => {
      var Y;
      return (Y = u().subscriptionType) != null ? Y : "deal";
    }), H = d(() => {
      if (!e(F) || e(U) !== "always" || !e(J)) return [];
      const Y = new Set(e(J).sellingPlans.map((ge) => ge.id));
      return g().sellingPlans.filter((ge) => Y.has(ge.id));
    }), se = d(() => e(H).find((Y) => Y.id === e(D)) || e(H)[0]);
    et(() => {
      var Y;
      e(H).some((ge) => {
        var we;
        return ge.id === ((we = f()) == null ? void 0 : we.id);
      }) && te(D, (Y = f()) == null ? void 0 : Y.id, !0);
    });
    const E = d(() => {
      if (e(J) && e(F))
        return e(U) === "deal" ? f() ? ir(g(), e(J), f()) : void 0 : e(se);
    }), q = d(() => Sa({ discountType: u().discountType, discountValue: u().discountValue, discountQuantity: u().quantity, variantQuantities: e(J) ? [{ variant: e(J), quantity: e(B) }] : [], currencyRate: r().currencyRate, priceRounding: e(X), sellingPlan: e(E), onAmountDiscountExceedsPrice: Dr })), ie = d(() => Math.ceil(e(q) / e(B))), ue = d(() => e(S) > e(q)), W = d(() => e(J) && Ao(e(J))), ae = d(() => e(J) ? Vr([{ variant: e(J), quantity: e(B) }]) : null), he = d(() => e(ae) ? e(q) / e(ae) : null), V = d(() => yn({ priceFormatter: a(), product: g(), totalFullPrice: e(S), totalDiscountedPrice: e(q), quantity: e(B), unitQuantity: e(ae), sellingPlan: e(E) })), N = d(() => e(V)(s()(u().text))), de = d(() => ((Y, ge, we) => Y.blockLayout !== "vertical" ? [] : $s(Y).filter((me) => me.attachedTo.type === "barUpsell" && me.attachedTo.dealBarId === ge && me.attachedTo.upsellId === we))(l(), i(), u().id).map((Y) => Qa(Y, s(), e(V)))), pe = d(() => Wa(e(de))), re = d(() => e(pe).positions.size > 0);
    function R(Y) {
      te(j, Y, !0);
    }
    function ee() {
      k() && te(A, !e(A));
    }
    _r(() => {
      u().productGID, te(j, void 0);
    }), et(() => {
      if (e(J) && g().availableForSale && e(B)) {
        const Y = e(A), ge = e(E);
        tn(() => {
          p()({ variant: Y ? e(J) : null, product: Y ? g() : null, discountedPrice: Y ? e(q) : 0, fullPrice: Y ? e(S) : 0, sellingPlan: Y ? ge : void 0 });
        });
      }
    });
    const ce = d(() => !g().availableForSale || g().variants.filter((Y) => Y.availableForSale && e(Q).includes(Y.id)).length === 0);
    var ve = { get dealBlock() {
      return l();
    }, set dealBlock(Y) {
      l(Y), v();
    }, get dealBarId() {
      return i();
    }, set dealBarId(Y) {
      i(Y), v();
    }, get upsell() {
      return u();
    }, set upsell(Y) {
      u(Y), v();
    }, get product() {
      return g();
    }, set product(Y) {
      g(Y), v();
    }, get dealBarSelected() {
      return k();
    }, set dealBarSelected(Y = !1) {
      k(Y), v();
    }, get dealSellingPlan() {
      return f();
    }, set dealSellingPlan(Y) {
      f(Y), v();
    }, get sets() {
      return h();
    }, set sets(Y) {
      h(Y), v();
    }, get onChange() {
      return p();
    }, set onChange(Y) {
      p(Y), v();
    } }, oe = ze(), Be = _e(oe), be = (Y) => {
      var ge = lv();
      let we, me;
      var Pe = w(ge);
      Gt(Pe, 17, () => e(de), (Ne) => Ne.id, (Ne, Vt) => {
        Ba(Ne, { get badge() {
          return e(Vt);
        }, get blockLayout() {
          return l().blockLayout;
        } });
      });
      var Ge = L(Pe, 2), Ze = w(Ge), Ve = (Ne) => {
        {
          let Vt = d(() => ["kaching-bundles__upsell__checkbox", e(A) && "kaching-bundles__upsell__checkbox--selected"]);
          Xt(Ne, { element: "span", get class() {
            return e(Vt);
          }, onclick: ee, children: (Dt, un) => {
            var ln = ze(), sn = _e(ln), Lt = (Ce) => {
              Ts(Ce);
            };
            O(sn, (Ce) => {
              e(A) && Ce(Lt);
            }), b(Dt, ln);
          }, $$slots: { default: !0 } });
        }
      };
      O(Ze, (Ne) => {
        k() && Ne(Ve);
      });
      var fe = L(Ze, 2), We = (Ne) => {
        {
          let Vt = d(() => k() ? e(ne) : void 0);
          ar(Ne, { get url() {
            return e(Vt);
          }, class: "kaching-bundles__upsell__link", children: (Dt, un) => {
            var ln = Wf();
            ke(() => {
              var sn;
              Ie(ln, "src", e(z) || ((sn = e(J)) == null ? void 0 : sn.image) || g().image), Ie(ln, "height", u().imageSize);
            }), b(Dt, ln);
          }, $$slots: { default: !0 } });
        }
      };
      O(fe, (Ne) => {
        u().imageSize > 0 && Ne(We);
      });
      var $e = L(fe, 2), M = w($e), xe = (Ne) => {
        Xt(Ne, { element: "span", class: "kaching-bundles__upsell__text", onclick: ee, children: (Vt, Dt) => {
          var un = ze();
          je(_e(un), () => e(N)), b(Vt, un);
        }, $$slots: { default: !0 } });
      };
      O(M, (Ne) => {
        e(N) && Ne(xe);
      });
      var Me = L(M, 2), qe = (Ne) => {
        Yn(Ne, { get product() {
          return e(Z);
        }, get selectedVariantId() {
          return e(T);
        }, onChange: R });
      };
      O(Me, (Ne) => {
        k() && e(Z) && e(Z).variants.length > 1 && e(T) && Ne(qe);
      });
      var Oe = L(Me, 2), De = (Ne) => {
        Ha(Ne, { get sellingPlans() {
          return e(H);
        }, get selectedSellingPlan() {
          return e(se);
        }, onChange: (Vt) => te(D, Vt.id, !0) });
      };
      O(Oe, (Ne) => {
        k() && e(A) && e(H).length > 1 && e(se) && Ne(De);
      }), y($e), y(Ge);
      var Ae = L(Ge, 2), Le = w(Ae), nt = (Ne) => {
        var Vt = Kf(), Dt = _e(Vt), un = w(Dt);
        lt(un, () => e(ie), (Re) => {
          var tt = Hf();
          je(w(tt), () => a()(e(ie))), y(tt), b(Re, tt);
        });
        var ln = L(un, 2), sn = (Re) => {
          var tt = ze();
          lt(_e(tt), () => e(C), (it) => {
            var st = Uf();
            je(w(st), () => a()(e(C))), y(st), b(it, st);
          }), b(Re, tt);
        };
        O(ln, (Re) => {
          e(ue) && Re(sn);
        }), y(Dt);
        var Lt = L(Dt, 2), Ce = (Re) => {
          var tt = Yf(), it = w(tt);
          lt(it, () => e(q), (bt) => {
            var At = Zf();
            je(w(At), () => a()(e(q))), y(At), b(bt, At);
          });
          var st = L(it, 2), zt = (bt) => {
            var At = ze();
            lt(_e(At), () => e(S), (ye) => {
              var Xe = Jf();
              je(w(Xe), () => a()(e(S))), y(Xe), b(ye, Xe);
            }), b(bt, At);
          };
          O(st, (bt) => {
            e(ue) && bt(zt);
          }), y(tt), b(Re, tt);
        };
        O(Lt, (Re) => {
          e(B) > 1 && Re(Ce);
        }), b(Ne, Vt);
      }, Je = (Ne) => {
        var Vt = ze(), Dt = _e(Vt), un = (sn) => {
          var Lt = nv(), Ce = _e(Lt), Re = w(Ce);
          lt(Re, () => e(q), (zt) => {
            var bt = Xf();
            je(w(bt), () => a()(l().showPricesPerItem ? e(ie) : e(q))), y(bt), b(zt, bt);
          });
          var tt = L(Re, 2), it = (zt) => {
            var bt = ze();
            lt(_e(bt), () => e(S), (At) => {
              var ye = ev();
              je(w(ye), () => a()(l().showPricesPerItem ? e(C) : e(S))), y(ye), b(At, ye);
            }), b(zt, bt);
          };
          O(tt, (zt) => {
            e(ue) && zt(it);
          }), y(Ce);
          var st = L(Ce, 2);
          lt(w(st), () => e(he), (zt) => {
            var bt = tv(), At = w(bt);
            je(At, () => a()(e(he), { preserveDecimals: !0 }));
            var ye = L(At);
            y(bt), ke(() => {
              var Xe;
              return pt(ye, ` / ${(Xe = e(W)) != null ? Xe : ""}`);
            }), b(zt, bt);
          }), y(st), b(sn, Lt);
        }, ln = (sn) => {
          var Lt = iv(), Ce = _e(Lt);
          lt(Ce, () => e(q), (it) => {
            var st = rv();
            je(w(st), () => a()(l().showPricesPerItem ? e(ie) : e(q))), y(st), b(it, st);
          });
          var Re = L(Ce, 2), tt = (it) => {
            var st = ze();
            lt(_e(st), () => e(S), (zt) => {
              var bt = av();
              je(w(bt), () => a()(l().showPricesPerItem ? e(C) : e(S))), y(bt), b(zt, bt);
            }), b(it, st);
          };
          O(Re, (it) => {
            e(ue) && it(tt);
          }), b(sn, Lt);
        };
        O(Dt, (sn) => {
          e(he) && e(W) && !r().ignoreUnitPrice ? sn(un) : sn(ln, !1);
        }, !0), b(Ne, Vt);
      };
      O(Le, (Ne) => {
        l().showBothPrices ? Ne(nt) : Ne(Je, !1);
      }), y(Ae), y(ge), ke((Ne, Vt) => {
        we = Rt(ge, 1, "kaching-bundles__upsell", null, we, Ne), Ie(ge, "data-upsell-id", u().id), me = Et(ge, e(G), me, Vt);
      }, [() => ({ "kaching-bundles__upsell--out-of-stock": r().preview && e(ce), "kaching-bundles__upsell--badge-border-all": e(pe).positions.has("all"), "kaching-bundles__upsell--badge-border-top": e(pe).positions.has("top"), "kaching-bundles__upsell--badge-border-bottom": e(pe).positions.has("bottom"), "kaching-bundles__upsell--badge-border-left": e(pe).positions.has("left"), "kaching-bundles__upsell--badge-border-right": e(pe).positions.has("right") }), () => ({ "--badge-border-thickness": e(re) ? `${e(pe).thickness}px` : void 0, "--badge-border-gap": e(re) ? `${e(pe).gap}px` : void 0, "--badge-border-gap-border": e(pe).gap ? "1px solid var(--bar-border-color, rgba(0, 0, 0, 0.3))" : "none", "--badge-border-min-length": e(pe).sideLength ? `${e(pe).sideLength}px` : void 0 })]), b(Y, ge);
    };
    O(Be, (Y) => {
      !(e(J) || r().preview && e(ce)) || u().visibleOnlyWhenDealBarSelected && !k() || Y(be);
    }), b(n, oe);
    var K = at(ve);
    return c(), K;
  }
  Ke(ng, { dealBlock: {}, dealBarId: {}, upsell: {}, product: {}, dealBarSelected: {}, dealSellingPlan: {}, sets: {}, onChange: {} }, [], [], !0);
  var sv = $('<div class="kaching-bundles__free-gift__divider"></div>'), ov = $("<!> <!>", 1);
  function Ui(n, t) {
    rt(t, !0);
    const r = () => Te(p, "$config", a), [a, s] = kt();
    let o = _(t, "dealBlock", 7), c = _(t, "dealBarId", 7), l = _(t, "upsells", 7), i = _(t, "otherProducts", 7), u = _(t, "complementaryProducts", 7), g = _(t, "dealBarSelected", 7), k = _(t, "dealSellingPlan", 7), f = _(t, "sets", 7, 1), h = _(t, "onChange", 7);
    const p = Sn();
    let x = Fe(ut({}));
    const m = d(() => r().preview ? i() : i().map(Tr)), I = d(() => r().preview ? u() : u().map(Tr)), P = Math.floor(1e3 * Math.random()), A = d(() => l().flatMap((Z, T) => {
      if (Z.productSource === "complementary") {
        const z = e(I)[(T + P) % (e(I).length || 1)];
        return z && (r().preview || z.availableForSale) ? { upsell: Z, product: z } : [];
      }
      if (!Z.productGID) return [];
      const J = e(m).find((z) => z.id === en(Z.productGID));
      if (!J) return [];
      if (!r().preview) {
        if (!J.availableForSale) return [];
        const z = Z.variantGIDs ? Z.variantGIDs.map(en) : J.variants.map((G) => G.id);
        if (!J.variants.some((G) => G.availableForSale && z.includes(G.id))) return [];
      }
      return { upsell: Z, product: J };
    }));
    var j = { get dealBlock() {
      return o();
    }, set dealBlock(Z) {
      o(Z), v();
    }, get dealBarId() {
      return c();
    }, set dealBarId(Z) {
      c(Z), v();
    }, get upsells() {
      return l();
    }, set upsells(Z) {
      l(Z), v();
    }, get otherProducts() {
      return i();
    }, set otherProducts(Z) {
      i(Z), v();
    }, get complementaryProducts() {
      return u();
    }, set complementaryProducts(Z) {
      u(Z), v();
    }, get dealBarSelected() {
      return g();
    }, set dealBarSelected(Z) {
      g(Z), v();
    }, get dealSellingPlan() {
      return k();
    }, set dealSellingPlan(Z) {
      k(Z), v();
    }, get sets() {
      return f();
    }, set sets(Z = 1) {
      f(Z), v();
    }, get onChange() {
      return h();
    }, set onChange(Z) {
      h(Z), v();
    } }, D = ze();
    Gt(_e(D), 19, () => e(A), ({ upsell: Z, product: T }) => Z.id, (Z, T, J) => {
      let z = () => e(T).upsell;
      var G = ov(), ne = _e(G);
      ng(ne, { get dealBarId() {
        return c();
      }, get dealBlock() {
        return o();
      }, get upsell() {
        return z();
      }, get product() {
        return e(T).product;
      }, get dealBarSelected() {
        return g();
      }, get dealSellingPlan() {
        return k();
      }, get sets() {
        return f();
      }, onChange: (S) => (function(C, F) {
        const { variant: U, product: H, discountedPrice: se, fullPrice: E, sellingPlan: q } = F;
        U && H ? e(x)[C] = { variant: U, product: H, discountedPrice: se, fullPrice: E, sellingPlan: q } : delete e(x)[C];
        const ie = l().filter((ue) => ue.id in e(x)).map((ue) => ({ id: ue.id, variant: e(x)[ue.id].variant, product: e(x)[ue.id].product, quantity: ue.quantity * f(), discountedPrice: e(x)[ue.id].discountedPrice, fullPrice: e(x)[ue.id].fullPrice, sellingPlan: e(x)[ue.id].sellingPlan }));
        h()(ie);
      })(z().id, S) });
      var X = L(ne, 2), B = (S) => {
        b(S, sv());
      };
      O(X, (S) => {
        e(J) < e(A).length - 1 && S(B);
      }), b(Z, G);
    }), b(n, D);
    var Q = at(j);
    return s(), Q;
  }
  Ke(Ui, { dealBlock: {}, dealBarId: {}, upsells: {}, otherProducts: {}, complementaryProducts: {}, dealBarSelected: {}, dealSellingPlan: {}, sets: {}, onChange: {} }, [], [], !0);
  var cv = $('<span class="kaching-bundles__bar-price__unit-label"><!></span>'), uv = $('<div class="kaching-bundles__bar-price"><!> <!></div>');
  function da(n, t) {
    rt(t, !0);
    const r = () => Te(i, "$translate", a), [a, s] = kt(), o = _(t, "amount", 7), c = _(t, "showPricesPerItem", 7), l = _(t, "unitLabel", 7, ""), i = $t(), u = xn();
    var g = { get amount() {
      return o();
    }, set amount(m) {
      o(m), v();
    }, get showPricesPerItem() {
      return c();
    }, set showPricesPerItem(m) {
      c(m), v();
    }, get unitLabel() {
      return l();
    }, set unitLabel(m = "") {
      l(m), v();
    } }, k = uv(), f = w(k);
    je(f, () => Te(u, "$formatPrice", a)(o()));
    var h = L(f, 2), p = (m) => {
      var I = cv();
      je(w(I), () => r()(l())), y(I), b(m, I);
    };
    O(h, (m) => {
      c() && l() && m(p);
    }), y(k), ke((m) => Ie(k, "data-a11y-label", m), [() => r()("system.price")]), b(n, k);
    var x = at(g);
    return s(), x;
  }
  Ke(da, { amount: {}, showPricesPerItem: {}, unitLabel: {} }, [], [], !0);
  const rg = "variantBadges";
  function ag(n = []) {
    const t = Wr(ig(n));
    return Oa(rg, t), { setVariantBadges: (r) => {
      t.set(ig(r));
    } };
  }
  function ig(n) {
    const t = new Map(n.map((r) => [r.variantId, r.badgeHtml]));
    return (r) => r === void 0 ? void 0 : t.get(r);
  }
  var dv = $('<div class="kaching-bundles__low-stock-alert"><!></div>');
  function lg(n, t) {
    rt(t, !0);
    const [r, a] = kt(), s = _(t, "lowStockAlert", 7), o = _(t, "inventoryQuantity", 7), c = $t(), l = d(() => {
      return p = Te(c, "$translate", r)(s().message), x = o() ? { stock: o() } : {}, p.replace(/\{\{\s*(\w+)\s*\}\}/g, (m, I) => I in x ? String(x[I]) : "");
      var p, x;
    }), i = d(() => ((p) => {
      const { textColor: x } = p;
      return mn({ "kaching-bundles-low-stock-alert-text-color": Qe(x) });
    })(s()));
    var u = { get lowStockAlert() {
      return s();
    }, set lowStockAlert(p) {
      s(p), v();
    }, get inventoryQuantity() {
      return o();
    }, set inventoryQuantity(p) {
      o(p), v();
    } }, g = ze(), k = _e(g), f = (p) => {
      var x = dv();
      je(w(x), () => e(l)), y(x), ke(() => Et(x, e(i))), b(p, x);
    };
    O(k, (p) => {
      o() && o() > 0 && o() < s().threshold && p(f);
    }), b(n, g);
    var h = at(u);
    return a(), h;
  }
  Ke(lg, { lowStockAlert: {}, inventoryQuantity: {} }, [], [], !0);
  var gv = $("<div><!></div>");
  function Ca(n, t) {
    rt(t, !0);
    const [r, a] = kt(), s = _(t, "dealBlock", 7), o = _(t, "variant", 7), c = (function() {
      const p = Ga(rg);
      if (!p) throw new Error("getVariantBadges must be called within a component tree that has setupVariantBadges initialized");
      return p;
    })(), l = d(() => {
      var p;
      return Te(c, "$variantBadgeLookup", r)((p = o()) == null ? void 0 : p.id);
    });
    var i = { get dealBlock() {
      return s();
    }, set dealBlock(p) {
      s(p), v();
    }, get variant() {
      return o();
    }, set variant(p) {
      o(p), v();
    } }, u = ze(), g = _e(u), k = (p) => {
      var x = gv();
      je(w(x), () => e(l)), y(x), b(p, x);
    }, f = (p) => {
      var x = ze(), m = _e(x), I = (P) => {
        {
          let A = d(() => {
            var j, D;
            return (D = (j = o()) == null ? void 0 : j.inventoryQuantity) != null ? D : null;
          });
          lg(P, { get lowStockAlert() {
            return s().lowStockAlert;
          }, get inventoryQuantity() {
            return e(A);
          } });
        }
      };
      O(m, (P) => {
        s().lowStockAlertEnabled && s().lowStockAlert && P(I);
      }, !0), b(p, x);
    };
    O(g, (p) => {
      e(l) ? p(k) : p(f, !1);
    }), b(n, u);
    var h = at(i);
    return a(), h;
  }
  Ke(Ca, { dealBlock: {}, variant: {} }, [], [], !0);
  var hv = $('<div class="kaching-bundles__bar-sold-out-badge"><!></div>');
  function Zi(n, t) {
    rt(t, !0);
    const [r, a] = kt(), s = _(t, "showAsSoldOut", 7), o = _(t, "replaceLiquid", 7), c = $t(), l = d(() => o()(Te(c, "$translate", r)(s().label)));
    var i = { get showAsSoldOut() {
      return s();
    }, set showAsSoldOut(k) {
      s(k), v();
    }, get replaceLiquid() {
      return o();
    }, set replaceLiquid(k) {
      o(k), v();
    } }, u = hv();
    je(w(u), () => e(l)), y(u), b(n, u);
    var g = at(i);
    return a(), g;
  }
  Ke(Zi, { showAsSoldOut: {}, replaceLiquid: {} }, [], [], !0);
  const Ol = (n) => {
    const { opacity: t, backgroundColor: r, textColor: a, textSize: s } = n;
    return mn({ "kaching-bundles-show-as-sold-out-opacity": t.toString(), "kaching-bundles-show-as-sold-out-background-color": Qe(r), "kaching-bundles-show-as-sold-out-text-color": Qe(a), "kaching-bundles-show-as-sold-out-text-size": s + "px" });
  };
  var pv = $('<img alt="Decrease"/>'), bv = $('<img alt="Increase"/>'), fv = $('<div class="kaching-bundles__quantity-selector"><!> <input type="number" class="kaching-bundles__quantity-selector__input" step="1"/> <!></div>');
  function Fl(n, t) {
    rt(t, !0);
    const [r, a] = kt();
    let s = _(t, "value", 7), o = _(t, "onChange", 7), c = _(t, "min", 7, 1);
    const l = $t(), i = d(() => s() <= c());
    var u = { get value() {
      return s();
    }, set value(p) {
      s(p), v();
    }, get onChange() {
      return o();
    }, set onChange(p) {
      o(p), v();
    }, get min() {
      return c();
    }, set min(p = 1) {
      c(p), v();
    } }, g = fv(), k = w(g);
    {
      let p = d(() => ["kaching-bundles__quantity-selector__button", e(i) && "kaching-bundles__quantity-selector__button--disabled"]);
      Xt(k, { element: "div", get class() {
        return e(p);
      }, onclick: function(x) {
        x.stopPropagation(), o()(Math.max(s() - 1, c()));
      }, get disabled() {
        return e(i);
      }, children: (x, m) => {
        var I = pv();
        ke(() => Ie(I, "src", Sd)), b(x, I);
      }, $$slots: { default: !0 } });
    }
    var f = L(k, 2);
    wa(f), Xt(L(f, 2), { element: "div", class: "kaching-bundles__quantity-selector__button", onclick: function(p) {
      p.stopPropagation(), o()(s() + 1);
    }, children: (p, x) => {
      var m = bv();
      ke(() => Ie(m, "src", Bd)), b(p, m);
    }, $$slots: { default: !0 } }), y(g), ke((p) => {
      Ie(f, "aria-label", p), gi(f, s()), Ie(f, "min", c());
    }, [() => Te(l, "$translate", r)("system.quantity")]), us("blur", f, function(p) {
      const x = p.target, m = parseInt(x.value);
      o()(isNaN(m) ? c() : Math.max(m, c()));
    }), b(n, g);
    var h = at(u);
    return a(), h;
  }
  function vv(n, t) {
    n.target === n.currentTarget && t()();
  }
  Ke(Fl, { value: {}, onChange: {}, min: {} }, [], [], !0);
  var _v = $('<div class="kaching-bundles"><div class="kaching-bundles__choose-multiple-gifts-modal" role="none"><div class="kaching-bundles__choose-multiple-gifts-modal__content"><!></div></div></div>');
  function sg(n, t) {
    rt(t, !0);
    const r = _(t, "dealBlock", 7), a = _(t, "multipleGiftsSelector", 7), s = _(t, "products", 23, () => []), o = _(t, "initialSelectedGifts", 7), c = _(t, "isOpen", 7), l = _(t, "onConfirm", 7), i = _(t, "onClose", 7);
    var u = { get dealBlock() {
      return r();
    }, set dealBlock(h) {
      r(h), v();
    }, get multipleGiftsSelector() {
      return a();
    }, set multipleGiftsSelector(h) {
      a(h), v();
    }, get products() {
      return s();
    }, set products(h = []) {
      s(h), v();
    }, get initialSelectedGifts() {
      return o();
    }, set initialSelectedGifts(h) {
      o(h), v();
    }, get isOpen() {
      return c();
    }, set isOpen(h) {
      c(h), v();
    }, get onConfirm() {
      return l();
    }, set onConfirm(h) {
      l(h), v();
    }, get onClose() {
      return i();
    }, set onClose(h) {
      i(h), v();
    } }, g = ze(), k = _e(g), f = (h) => {
      Gl(h, { target: "body", children: (p, x) => {
        var m = _v(), I = w(m);
        I.__click = [vv, i];
        var P = w(I);
        qo(w(P), { get dealBlock() {
          return r();
        }, get multipleGiftsSelector() {
          return a();
        }, get products() {
          return s();
        }, get initialSelectedGifts() {
          return o();
        }, get onConfirm() {
          return l();
        }, get onClose() {
          return i();
        } }), y(P), y(I), y(m), ke((A) => Et(I, A), [() => (function(A) {
          var j;
          return mn({ "kaching-choose-multiple-gifts-overlay-color": Qe(((j = A.chooseMultipleGiftsModal) == null ? void 0 : j.overlayColor) || lb) });
        })(r())]), b(p, m);
      }, $$slots: { default: !0 } });
    };
    return O(k, (h) => {
      c() && h(f);
    }), b(n, g), at(u);
  }
  jn(["click"]), Ke(sg, { dealBlock: {}, multipleGiftsSelector: {}, products: {}, initialSelectedGifts: {}, isOpen: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var kv = Gn('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00065 5.33337V10.6667M5.33398 8.00004H10.6673M14.6673 8.00004C14.6673 11.6819 11.6825 14.6667 8.00065 14.6667C4.31875 14.6667 1.33398 11.6819 1.33398 8.00004C1.33398 4.31814 4.31875 1.33337 8.00065 1.33337C11.6825 1.33337 14.6673 4.31814 14.6673 8.00004Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function og(n) {
    b(n, kv());
  }
  Ke(og, {}, [], [], !0);
  var mv = $('<img alt="" class="kaching-bundles__multiple-gifts-selector__photo"/>'), xv = $('<span class="kaching-bundles__multiple-gifts-selector__photo-count"> </span>'), yv = $('<div class="kaching-bundles__multiple-gifts-selector__photos"><!> <!></div>'), wv = $('<img alt="" class="kaching-bundles__free-gift__image"/>'), Pv = $('<div class="kaching-bundles__free-gift__image"></div>'), Sv = $('<span class="kaching-bundles__free-gift__text"><!></span>'), Bv = $('<span class="kaching-bundles__free-gift__add-button"><!></span>'), Cv = $('<div class="kaching-bundles__free-gift__full-price"><!></div>'), Iv = $('<div class="kaching-bundles__multiple-gifts-selector kaching-bundles__free-gift"><!> <div class="kaching-bundles__free-gift__main"><!> <span class="kaching-bundles__free-gift__content"><!> <!></span></div> <!> <!></div>');
  function cg(n, t) {
    rt(t, !0);
    const r = () => Te(h, "$formatPrice", s), a = () => Te(p, "$translate", s), [s, o] = kt();
    let c = _(t, "dealBlock", 7), l = _(t, "multipleGiftsSelector", 7), i = _(t, "selectedVariants", 7), u = _(t, "otherProducts", 7), g = _(t, "onConfirm", 7), k = Fe(!1);
    const f = d(() => (l().products || []).flatMap((V) => {
      const N = en(V.id), de = u().find((re) => re.id === N);
      if (!de || !de.availableForSale) return [];
      const pe = Tr(de);
      if (V.variantGIDs && V.variantGIDs.length > 0) {
        const re = V.variantGIDs.map(en), R = pe.variants.filter((ee) => re.includes(ee.id));
        return R.length > 0 ? { ...pe, variants: R } : [];
      }
      return pe;
    })), h = xn(), p = $t(), x = On(), m = d(() => Ho({ dealBlock: c(), imageSize: l().imageSize })), I = d(() => {
      if (l().mediaImageGID) return Te(x, "$getMediaImageUrl", s)(l().mediaImageGID);
    }), P = d(() => l().showProductPhotos === !0), A = d(() => i().flatMap((V) => Array.from({ length: V.quantity }, () => V.variant.image || V.product.image)).filter((V) => !!V)), j = d(() => e(A).slice(0, 3)), D = d(() => e(A).length - e(j).length), Q = d(() => i().reduce((V, N) => V + N.quantity, 0)), Z = d(() => e(Q) >= l().maxQuantity), T = d(() => (function(V, N) {
      if (!N.length) return 0;
      let de = N.reduce((pe, re) => pe + re.fullPrice * re.quantity, 0);
      return N.some((pe) => pe.variant.compareAtPrice) && V.useProductCompareAtPrice && (de = Math.max(de, N.reduce((pe, re) => pe + (re.variant.compareAtPrice || 0), 0))), de;
    })(c(), i())), J = d(() => new Map((l().products || []).flatMap((V) => {
      const N = u().find((de) => de.id === en(V.id));
      return N ? [[N.id, N]] : [];
    }))), z = d(() => i().flatMap((V) => Array.from({ length: V.quantity }, () => V.product.title))), G = d(() => yn({ priceFormatter: r(), product: void 0, products: e(J), selectedProductTitles: e(z), totalFullPrice: e(T), totalDiscountedPrice: 0, quantity: e(Q), unitQuantity: null })), ne = d(() => e(Z) ? e(G)(a()(l().textAfterSelection)) : e(G)(a()(l().textBeforeSelection)));
    var X = { get dealBlock() {
      return c();
    }, set dealBlock(V) {
      c(V), v();
    }, get multipleGiftsSelector() {
      return l();
    }, set multipleGiftsSelector(V) {
      l(V), v();
    }, get selectedVariants() {
      return i();
    }, set selectedVariants(V) {
      i(V), v();
    }, get otherProducts() {
      return u();
    }, set otherProducts(V) {
      u(V), v();
    }, get onConfirm() {
      return g();
    }, set onConfirm(V) {
      g(V), v();
    } }, B = Iv(), S = w(B);
    {
      let V = d(() => {
        var N;
        return (N = e(ne)) == null ? void 0 : N.replace(/<[^>]*>/g, "");
      });
      Xt(S, { element: "span", class: "kaching-bundles__multiple-gifts-selector__clickable-overlay", get "aria-label"() {
        return e(V);
      }, onclick: () => te(k, !0) });
    }
    var C = L(S, 2), F = w(C), U = (V) => {
      var N = yv(), de = w(N);
      Gt(de, 17, () => e(j), Qr, (R, ee) => {
        var ce = mv();
        ke(() => Ie(ce, "src", e(ee))), b(R, ce);
      });
      var pe = L(de, 2), re = (R) => {
        var ee = xv(), ce = w(ee);
        y(ee), ke(() => {
          var ve;
          return pt(ce, `+${(ve = e(D)) != null ? ve : ""}`);
        }), b(R, ee);
      };
      O(pe, (R) => {
        e(D) > 0 && R(re);
      }), y(N), b(V, N);
    }, H = (V) => {
      var N = ze(), de = _e(N), pe = (R) => {
        var ee = wv();
        ke(() => {
          Ie(ee, "src", e(I)), Ie(ee, "height", l().imageSize || 0);
        }), b(R, ee);
      }, re = (R) => {
        var ee = ze(), ce = _e(ee), ve = (oe) => {
          var Be = Pv();
          let be;
          ke((K) => be = Et(Be, "", be, K), [() => {
            var K;
            return { height: `${(K = l().imageSize) != null ? K : ""}px` };
          }]), b(oe, Be);
        };
        O(ce, (oe) => {
          l().imageSize && oe(ve);
        }, !0), b(R, ee);
      };
      O(de, (R) => {
        e(I) ? R(pe) : R(re, !1);
      }, !0), b(V, N);
    };
    O(F, (V) => {
      e(P) && e(j).length > 0 ? V(U) : V(H, !1);
    });
    var se = L(F, 2), E = w(se), q = (V) => {
      var N = ze();
      lt(_e(N), () => e(ne), (de) => {
        var pe = Sv();
        je(w(pe), () => e(ne)), y(pe), b(de, pe);
      }), b(V, N);
    };
    O(E, (V) => {
      e(ne) && V(q);
    });
    var ie = L(E, 2), ue = (V) => {
      var N = Bv();
      og(w(N)), y(N), b(V, N);
    };
    O(ie, (V) => {
      e(Z) || V(ue);
    }), y(se), y(C);
    var W = L(C, 2), ae = (V) => {
      var N = ze();
      lt(_e(N), () => e(T), (de) => {
        var pe = Cv();
        je(w(pe), () => r()(e(T))), y(pe), b(de, pe);
      }), b(V, N);
    };
    O(W, (V) => {
      l().showPrice && e(T) > 0 && V(ae);
    }), sg(L(W, 2), { get dealBlock() {
      return c();
    }, get multipleGiftsSelector() {
      return l();
    }, get isOpen() {
      return e(k);
    }, get products() {
      return e(f);
    }, get initialSelectedGifts() {
      return i();
    }, get onConfirm() {
      return g();
    }, onClose: () => te(k, !1) }), y(B), ke(() => {
      Ie(B, "data-multiple-gifts-selector-id", l().id), Et(B, e(m));
    }), b(n, B);
    var he = at(X);
    return o(), he;
  }
  Ke(cg, { dealBlock: {}, multipleGiftsSelector: {}, selectedVariants: {}, otherProducts: {}, onConfirm: {} }, [], [], !0);
  var Mv = $('<div class="kaching-bundles__free-gift__divider"></div>'), zv = $("<!> <!>", 1);
  function Ji(n, t) {
    rt(t, !0);
    let r = _(t, "dealBlock", 7), a = _(t, "multipleGiftsSelectors", 7), s = _(t, "sellingPlan", 7), o = _(t, "otherProducts", 7), c = _(t, "sets", 7, 1), l = _(t, "onChange", 7), i = Fe(ut({})), u = d(() => a().filter((p) => !p.applyOnlyForSubscriptions || s()).map((p) => ({ ...p, maxQuantity: p.maxQuantity * c() })));
    const g = d(() => Object.fromEntries(e(u).map((p) => [p.id, (e(i)[p.id] || []).slice(0, p.maxQuantity)])));
    function k(p, x) {
      const m = e(u).find((I) => I.id === p);
      m && (x.reduce((I, P) => I + P.quantity, 0) > m.maxQuantity || (e(i)[p] = x));
    }
    et(() => {
      const p = e(u).flatMap((x) => {
        const m = x.includeInCompareAt === !0;
        return e(g)[x.id].map((I) => ({ id: I.id, quantity: I.quantity, variant: I.variant, product: I.product, fullPrice: I.fullPrice, includeInCompareAt: m }));
      });
      l()(p);
    });
    var f = { get dealBlock() {
      return r();
    }, set dealBlock(p) {
      r(p), v();
    }, get multipleGiftsSelectors() {
      return a();
    }, set multipleGiftsSelectors(p) {
      a(p), v();
    }, get sellingPlan() {
      return s();
    }, set sellingPlan(p) {
      s(p), v();
    }, get otherProducts() {
      return o();
    }, set otherProducts(p) {
      o(p), v();
    }, get sets() {
      return c();
    }, set sets(p = 1) {
      c(p), v();
    }, get onChange() {
      return l();
    }, set onChange(p) {
      l(p), v();
    } }, h = ze();
    return Gt(_e(h), 19, () => e(u), (p) => p.id, (p, x, m) => {
      var I = zv(), P = _e(I);
      cg(P, { get dealBlock() {
        return r();
      }, get multipleGiftsSelector() {
        return e(x);
      }, get selectedVariants() {
        return e(g)[e(x).id];
      }, onConfirm: k, get otherProducts() {
        return o();
      } });
      var A = L(P, 2), j = (D) => {
        b(D, Mv());
      };
      O(A, (D) => {
        e(m) < e(u).length - 1 && D(j);
      }), b(p, I);
    }), b(n, h), at(f);
  }
  Ke(Ji, { dealBlock: {}, multipleGiftsSelectors: {}, sellingPlan: {}, otherProducts: {}, sets: {}, onChange: {} }, [], [], !0);
  var $v = Gn('<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.584 21H42.834V14C42.834 6.279 36.555 0 28.834 0C21.113 0 14.834 6.279 14.834 14V21H13.084C10.1907 21 7.83398 23.3543 7.83398 26.25V50.75C7.83398 53.6457 10.1907 56 13.084 56H44.584C47.4773 56 49.834 53.6457 49.834 50.75V26.25C49.834 23.3543 47.4773 21 44.584 21ZM19.5007 14C19.5007 8.85267 23.6867 4.66667 28.834 4.66667C33.9813 4.66667 38.1673 8.85267 38.1673 14V21H19.5007V14ZM31.1673 39.018V44.3333C31.1673 45.6213 30.1243 46.6667 28.834 46.6667C27.5436 46.6667 26.5007 45.6213 26.5007 44.3333V39.018C25.1123 38.2083 24.1673 36.7197 24.1673 35C24.1673 32.4263 26.2603 30.3333 28.834 30.3333C31.4076 30.3333 33.5007 32.4263 33.5007 35C33.5007 36.7197 32.5557 38.2083 31.1673 39.018Z" fill="currentColor" transform="translate(21.5, 22)"></path></svg>');
  function ug(n) {
    b(n, $v());
  }
  Ke(ug, {}, [], [], !0);
  var Dv = $('<img alt="" class="kaching-bundles__deal-bar-progressive-gift__image"/>'), Tv = $('<img class="kaching-bundles__deal-bar-progressive-gift__image kaching-bundles__deal-bar-progressive-gift__image--locked-product"/>'), Vv = $('<span class="kaching-bundles__deal-bar-progressive-gift__lock-icon kaching-bundles__deal-bar-progressive-gift__image"><!></span>'), Av = $('<img class="kaching-bundles__deal-bar-progressive-gift__image"/>'), qv = $('<span class="kaching-bundles__deal-bar-progressive-gift__text"><!></span>'), Gv = $('<span class="kaching-bundles__deal-bar-progressive-gift__text"><!></span>'), Ov = $('<span class="kaching-bundles__deal-bar-progressive-gift__label-crossed-out"><!></span>'), Fv = $('<span class="kaching-bundles__deal-bar-progressive-gift__label"><!> <!></span>'), Lv = $('<div><div class="kaching-bundles__deal-bar-progressive-gift__main"><!> <div class="kaching-bundles__deal-bar-progressive-gift__content"><!> <!></div></div> <!></div>');
  function dg(n, t) {
    rt(t, !0);
    const r = () => Te(I, "$config", o), a = () => Te(p, "$translate", o), s = () => Te(m, "$getMediaImageUrl", o), [o, c] = kt(), l = _(t, "progressiveGifts", 7), i = _(t, "gift", 7), u = _(t, "product", 7), g = _(t, "selectedDealBarIndex", 7), k = _(t, "sellingPlan", 7), f = _(t, "selected", 7), h = _(t, "onChange", 7), p = $t(), x = xn(), m = On(), I = Sn(), P = d(() => i().differentVariantsEnabled), A = d(() => {
      if (u()) return { ...u(), variants: mi(u(), i(), r().preview) };
    });
    let j = Fe(ut([]));
    const D = d(() => (function(W, ae, he) {
      return W.length > 0 ? W : ae != null && ae.availableForSale && ae.variants.length > 0 ? Array.from({ length: he }, () => ae.variants[0].id) : [];
    })(e(j), e(A), i().quantity)), Q = d(() => u() && e(D).length > 0 ? e(D).map((W) => u().variants.find((ae) => ae.id === W)).filter((W) => W !== void 0) : []), Z = d(() => {
      var W;
      return yn({ priceFormatter: Te(x, "$formatPrice", o), product: u(), totalFullPrice: ((W = e(Q)) == null ? void 0 : W.reduce((ae, he) => {
        var V;
        return ae + ((V = he == null ? void 0 : he.price) != null ? V : 0);
      }, 0)) || 0, totalDiscountedPrice: 0, quantity: i().quantity, unitQuantity: Vr(e(Q).map((ae) => ({ variant: ae, quantity: 1 }))) });
    }), T = d(() => e(Z)(a()(i().title))), J = d(() => e(Z)(a()(i().lockedTitle))), z = d(() => e(Z)(a()(i().label))), G = d(() => e(Z)(a()(i().labelCrossedOut))), ne = d(() => g() === null || !Ds(i(), g() + 1)), X = d(() => e(ne) || Wo(i(), k())), B = d(() => {
      var W, ae, he;
      return i().giftType === "shipping" ? Uo : ((ae = (W = e(Q)) == null ? void 0 : W[0]) == null ? void 0 : ae.image) || ((he = u()) == null ? void 0 : he.image);
    }), S = d(() => i().mediaImageGID ? s()(i().mediaImageGID) : e(B)), C = d(() => l().dealBarStyle && s()(l().dealBarStyle.lockedMediaImageGID)), F = d(() => l().showLockedGiftProducts && !e(C)), U = d(() => e(F) && !!e(S));
    et(() => {
      if (f()) if (u() && e(Q) && !e(ne)) {
        const W = Object.values(e(Q).reduce((ae, he) => (ae[he.id] ? ae[he.id].quantity += 1 : ae[he.id] = { variant: he, quantity: 1 }, ae), {}));
        tn(() => h()({ product: u(), variants: W }));
      } else tn(() => h()(void 0));
      else tn(() => h()(void 0));
    }), _r(() => {
      i().productGID, te(j, [], !0);
    }), et(() => {
      e(X) && e(S) && (new Image().src = e(S));
    });
    const H = d(() => {
      var W;
      return i().giftType === "product" && !((W = u()) != null && W.availableForSale);
    });
    var se = { get progressiveGifts() {
      return l();
    }, set progressiveGifts(W) {
      l(W), v();
    }, get gift() {
      return i();
    }, set gift(W) {
      i(W), v();
    }, get product() {
      return u();
    }, set product(W) {
      u(W), v();
    }, get selectedDealBarIndex() {
      return g();
    }, set selectedDealBarIndex(W) {
      g(W), v();
    }, get sellingPlan() {
      return k();
    }, set sellingPlan(W) {
      k(W), v();
    }, get selected() {
      return f();
    }, set selected(W) {
      f(W), v();
    }, get onChange() {
      return h();
    }, set onChange(W) {
      h(W), v();
    } }, E = ze(), q = _e(E), ie = (W) => {
      var ae = ze(), he = _e(ae), V = (N) => {
        var de = Lv();
        let pe;
        var re = w(de), R = w(re), ee = (me) => {
          var Pe = ze(), Ge = _e(Pe), Ze = (fe) => {
            var We = Dv();
            ke(() => Ie(We, "src", e(C))), b(fe, We);
          }, Ve = (fe) => {
            var We = ze(), $e = _e(We), M = (Me) => {
              var qe = Tv();
              ke(() => {
                var Oe, De;
                Ie(qe, "src", e(S)), Ie(qe, "alt", (De = (Oe = u()) == null ? void 0 : Oe.title) != null ? De : "");
              }), b(Me, qe);
            }, xe = (Me) => {
              var qe = ze(), Oe = _e(qe), De = (Ae) => {
                var Le = Vv();
                ug(w(Le)), y(Le), b(Ae, Le);
              };
              O(Oe, (Ae) => {
                e(F) || Ae(De);
              }, !0), b(Me, qe);
            };
            O($e, (Me) => {
              e(U) ? Me(M) : Me(xe, !1);
            }, !0), b(fe, We);
          };
          O(Ge, (fe) => {
            e(C) ? fe(Ze) : fe(Ve, !1);
          }), b(me, Pe);
        }, ce = (me) => {
          var Pe = ze(), Ge = _e(Pe), Ze = (Ve) => {
            var fe = Av();
            ke(() => {
              var We, $e;
              Ie(fe, "src", e(S)), Ie(fe, "alt", ($e = (We = u()) == null ? void 0 : We.title) != null ? $e : "");
            }), b(Ve, fe);
          };
          O(Ge, (Ve) => {
            e(S) && Ve(Ze);
          }, !0), b(me, Pe);
        };
        O(R, (me) => {
          e(X) ? me(ee) : me(ce, !1);
        });
        var ve = L(R, 2), oe = w(ve), Be = (me) => {
          var Pe = qv();
          je(w(Pe), () => e(J)), y(Pe), b(me, Pe);
        }, be = (me) => {
          var Pe = ze(), Ge = _e(Pe), Ze = (Ve) => {
            var fe = Gv();
            je(w(fe), () => e(T)), y(fe), b(Ve, fe);
          };
          O(Ge, (Ve) => {
            e(T) && Ve(Ze);
          }, !0), b(me, Pe);
        };
        O(oe, (me) => {
          e(X) && !e(F) ? me(Be) : me(be, !1);
        });
        var K = L(oe, 2), Y = (me) => {
          var Pe = ze();
          Gt(_e(Pe), 17, () => ({ length: e(P) ? i().quantity : 1 }), Qr, (Ge, Ze, Ve) => {
            var fe = ze(), We = _e(fe), $e = (M) => {
              {
                let xe = d(() => e(P) ? Ve + 1 : void 0);
                Yn(M, { get product() {
                  return e(A);
                }, get selectedVariantId() {
                  return e(D)[Ve];
                }, get number() {
                  return e(xe);
                }, forceDropdown: !0, onChange: (Me) => (function(qe, Oe) {
                  e(P) ? te(j, [...e(D).slice(0, Oe), qe, ...e(D).slice(Oe + 1)], !0) : te(j, Array.from({ length: i().quantity }, () => qe), !0);
                })(Me, Ve) });
              }
            };
            O(We, (M) => {
              e(D)[Ve] !== void 0 && M($e);
            }), b(Ge, fe);
          }), b(me, Pe);
        };
        O(K, (me) => {
          f() && !e(X) && e(A) && e(A).variants.length > 1 && e(D).length > 0 && me(Y);
        }), y(ve), y(re);
        var ge = L(re, 2), we = (me) => {
          var Pe = ze(), Ge = _e(Pe), Ze = (Ve) => {
            var fe = Fv(), We = w(fe), $e = (Me) => {
              var qe = ze();
              je(_e(qe), () => e(z)), b(Me, qe);
            };
            O(We, (Me) => {
              e(z) && Me($e);
            });
            var M = L(We, 2), xe = (Me) => {
              var qe = Ov();
              je(w(qe), () => e(G)), y(qe), b(Me, qe);
            };
            O(M, (Me) => {
              e(G) && Me(xe);
            }), y(fe), b(Ve, fe);
          };
          O(Ge, (Ve) => {
            e(X) && !l().showLockedGiftLabels || Ve(Ze);
          }), b(me, Pe);
        };
        O(ge, (me) => {
          (e(z) || e(G)) && me(we);
        }), y(de), ke((me) => pe = Rt(de, 1, "kaching-bundles__deal-bar-progressive-gift", null, pe, me), [() => ({ "kaching-bundles__deal-bar-progressive-gift--locked": e(X), "kaching-bundles__deal-bar-progressive-gift--out-of-stock": r().preview && e(H) })]), b(N, de);
      };
      O(he, (N) => {
        var de;
        (u() && ((de = e(Q)) != null && de.length) || i().giftType === "shipping") && N(V);
      }), b(W, ae);
    };
    O(q, (W) => {
      e(X) && l().hideLockedGifts || W(ie);
    }), b(n, E);
    var ue = at(se);
    return c(), ue;
  }
  Ke(dg, { progressiveGifts: {}, gift: {}, product: {}, selectedDealBarIndex: {}, sellingPlan: {}, selected: {}, onChange: {} }, [], [], !0);
  var Ev = $('<div class="kaching-bundles__deal-bar-progressive-gifts"></div>');
  function Yi(n, t) {
    rt(t, !0);
    const [r, a] = kt(), s = _(t, "progressiveGifts", 7), o = _(t, "dealBlock", 7), c = _(t, "dealBar", 7), l = _(t, "otherProducts", 7), i = _(t, "selectedDealBarIndex", 7), u = _(t, "sellingPlan", 7), g = _(t, "selected", 7), k = _(t, "onChange", 7), f = d(() => o().dealBars.findIndex((T) => T.id === c().id)), h = Sn();
    let p = Fe(ut({}));
    const x = d(() => {
      var T, J;
      return ((z) => z ? mn({ "kaching-deal-bar-progressive-gift-image-size": z.imageSize + "px", "kaching-deal-bar-progressive-gift-corner-radius": z.cornerRadius + "px", "kaching-deal-bar-progressive-gift-label-background-color": Qe(z.labelBackgroundColor), "kaching-deal-bar-progressive-gift-label-text-color": Qe(z.labelTextColor), "kaching-deal-bar-progressive-gift-label-text-size": z.labelTextSize + "px", "kaching-deal-bar-progressive-gift-background-color": Qe(z.backgroundColor), "kaching-deal-bar-progressive-gift-selected-background-color": Qe(z.selectedBackgroundColor), "kaching-deal-bar-progressive-gift-text-color": Qe(z.textColor), "kaching-deal-bar-progressive-gift-selected-text-color": Qe(z.selectedTextColor), "kaching-deal-bar-progressive-gift-text-size": z.textSize + "px", "kaching-deal-bar-progressive-gift-locked-label-background-color": Qe(z.lockedLabelBackgroundColor), "kaching-deal-bar-progressive-gift-locked-label-text-color": Qe(z.lockedLabelTextColor), "kaching-deal-bar-progressive-gift-locked-label-text-size": z.lockedLabelTextSize + "px", "kaching-deal-bar-progressive-gift-locked-text-color": Qe(z.lockedTextColor), "kaching-deal-bar-progressive-gift-locked-text-size": z.lockedTextSize + "px", "kaching-deal-bar-progressive-gift-locked-icon-color": Qe(z.lockedIconColor) }) : "")((J = (T = o().progressiveGifts) == null ? void 0 : T.dealBarStyle) != null ? J : null);
    });
    function m() {
      const T = Object.entries(e(p)).map(([J, z]) => ({ id: J, variants: z.variants, product: z.product }));
      k()(T);
    }
    const I = d(() => {
      var T, J, z;
      return (z = (J = (T = s()) == null ? void 0 : T.gifts) == null ? void 0 : J.filter((G) => Ds(G, e(f) + 1))) != null ? z : [];
    }), P = d(() => e(I).flatMap((T) => {
      const J = T.giftType === "product" && T.productGID ? l().find((G) => G.id === en(T.productGID)) : void 0;
      if (!Te(h, "$config", r).preview && T.giftType === "product" && !(J != null && J.availableForSale)) return [];
      const z = J && Tr(J);
      return { gift: T, product: z };
    }));
    et(() => {
      const T = new Set(e(I).map((z) => z.id)), J = Object.keys(e(p)).filter((z) => !T.has(z));
      if (J.length) {
        for (const z of J) delete e(p)[z];
        g() && m();
      }
    });
    var A = { get progressiveGifts() {
      return s();
    }, set progressiveGifts(T) {
      s(T), v();
    }, get dealBlock() {
      return o();
    }, set dealBlock(T) {
      o(T), v();
    }, get dealBar() {
      return c();
    }, set dealBar(T) {
      c(T), v();
    }, get otherProducts() {
      return l();
    }, set otherProducts(T) {
      l(T), v();
    }, get selectedDealBarIndex() {
      return i();
    }, set selectedDealBarIndex(T) {
      i(T), v();
    }, get sellingPlan() {
      return u();
    }, set sellingPlan(T) {
      u(T), v();
    }, get selected() {
      return g();
    }, set selected(T) {
      g(T), v();
    }, get onChange() {
      return k();
    }, set onChange(T) {
      k(T), v();
    } }, j = ze(), D = _e(j), Q = (T) => {
      var J = Ev();
      Gt(J, 21, () => e(P), ({ gift: z, product: G }) => z.id, (z, G) => {
        let ne = () => e(G).gift;
        dg(z, { get selectedDealBarIndex() {
          return i();
        }, get selected() {
          return g();
        }, get gift() {
          return ne();
        }, get product() {
          return e(G).product;
        }, get progressiveGifts() {
          return s();
        }, get sellingPlan() {
          return u();
        }, onChange: (X) => (function(B, S) {
          S ? e(p)[B] = S : delete e(p)[B], g() && m();
        })(ne().id, X) });
      }), y(J), ke(() => Et(J, e(x))), b(T, J);
    };
    O(D, (T) => {
      var J;
      o().progressiveGiftsEnabled && ((J = s()) == null ? void 0 : J.layout) === "deal-bar" && e(P).length > 0 && T(Q);
    }), b(n, j);
    var Z = at(A);
    return a(), Z;
  }
  Ke(Yi, { progressiveGifts: {}, dealBlock: {}, dealBar: {}, otherProducts: {}, selectedDealBarIndex: {}, sellingPlan: {}, selected: {}, onChange: {} }, [], [], !0);
  var jv = Gn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function gg(n) {
    b(n, jv());
  }
  Ke(gg, {}, [], [], !0);
  var Rv = Gn('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3307 4L5.9974 11.3333L2.66406 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function hg(n) {
    b(n, Rv());
  }
  Ke(hg, {}, [], [], !0);
  var Nv = Gn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" fill="currentColor"></circle></svg>');
  function pg(n) {
    b(n, Nv());
  }
  Ke(pg, {}, [], [], !0);
  var Qv = Gn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.89982 14.6651 9.84977 19.1041 11.4721 20.5408C11.6536 20.7016 11.7444 20.7819 11.8502 20.8135C11.9426 20.8411 12.0437 20.8411 12.1361 20.8135C12.2419 20.7819 12.3327 20.7016 12.5142 20.5408C14.1365 19.1041 19.0865 14.6651 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function bg(n) {
    b(n, Qv());
  }
  Ke(bg, {}, [], [], !0);
  var Wv = Gn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2787 3.45332C11.5092 2.98638 11.6245 2.75291 11.7809 2.67831C11.917 2.61341 12.0752 2.61341 12.2113 2.67831C12.3677 2.75291 12.483 2.98638 12.7135 3.45332L14.9002 7.88328C14.9682 8.02113 15.0022 8.09006 15.0519 8.14358C15.096 8.19096 15.1488 8.22935 15.2074 8.25662C15.2736 8.28742 15.3497 8.29854 15.5018 8.32077L20.3931 9.03571C20.9082 9.11099 21.1657 9.14863 21.2849 9.27444C21.3886 9.38389 21.4373 9.5343 21.4176 9.68377C21.3949 9.85558 21.2085 10.0372 20.8356 10.4004L17.2975 13.8464C17.1873 13.9538 17.1321 14.0076 17.0965 14.0715C17.065 14.128 17.0448 14.1902 17.037 14.2545C17.0282 14.3271 17.0412 14.403 17.0672 14.5547L17.9021 19.4221C17.9901 19.9355 18.0341 20.1922 17.9514 20.3445C17.8794 20.477 17.7514 20.57 17.6032 20.5975C17.4327 20.6291 17.2022 20.5078 16.7412 20.2654L12.3685 17.9658C12.2322 17.8942 12.1641 17.8584 12.0923 17.8443C12.0288 17.8318 11.9634 17.8318 11.8999 17.8443C11.8281 17.8584 11.76 17.8942 11.6237 17.9658L7.25102 20.2654C6.79001 20.5078 6.55951 20.6291 6.38907 20.5975C6.24078 20.57 6.11282 20.477 6.04083 20.3445C5.95809 20.1922 6.00212 19.9355 6.09017 19.4221L6.92498 14.5547C6.95101 14.403 6.96402 14.3271 6.95521 14.2545C6.94742 14.1902 6.92721 14.128 6.8957 14.0715C6.86012 14.0076 6.80497 13.9538 6.69468 13.8464L3.15665 10.4004C2.78376 10.0372 2.59731 9.85558 2.57462 9.68377C2.55488 9.5343 2.60365 9.38389 2.70734 9.27444C2.82653 9.14863 3.08407 9.11099 3.59914 9.03571L8.4904 8.32077C8.64252 8.29854 8.71857 8.28742 8.78481 8.25662C8.84346 8.22935 8.89626 8.19096 8.94028 8.14358C8.99 8.09006 9.02402 8.02113 9.09207 7.88328L11.2787 3.45332Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function fg(n) {
    b(n, Wv());
  }
  Ke(fg, {}, [], [], !0);
  var Hv = Gn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function vg(n) {
    b(n, Hv());
  }
  Ke(vg, {}, [], [], !0);
  const _g = { checkmark: hg, dot: pg, arrow: gg, star: fg, heart: bg, "thumbs-up": vg };
  var Uv = $('<span class="kaching-bundles__highlights__icon"><img alt=""/></span>'), Zv = $('<span class="kaching-bundles__highlights__icon"><!></span>'), Jv = $('<div class="kaching-bundles__highlights__item"><!> <span class="kaching-bundles__highlights__text"><!></span></div>'), Yv = $("<div></div>");
  function Ua(n, t) {
    rt(t, !0);
    const [r, a] = kt(), s = _(t, "highlights", 7), o = _(t, "isSelected", 7), c = _(t, "replaceLiquid", 7), l = On(), i = $t(), u = d(() => s().items.map((j) => Te(i, "$translate", r)(j)).map((j) => c() ? c()(j) : j).filter((j) => j !== "")), g = d(() => ((j) => mn({ "kaching-highlights-icon-color": Qe(j.iconColor), "kaching-highlights-text-color": Qe(j.textColor), "kaching-highlights-icon-size": j.size + 2 + "px", "kaching-highlights-text-size": j.size + "px" }))(s())), k = d(() => {
      var j;
      return (j = s().layout) != null ? j : "vertical";
    }), f = d(() => {
      var j;
      return (j = s().iconType) != null ? j : "checkmark";
    }), h = d(() => _g[e(f)]), p = d(() => {
      var j;
      return e(f) === "custom" ? Te(l, "$getMediaImageUrl", r)((j = s().customIconGID) != null ? j : null) : void 0;
    });
    var x = { get highlights() {
      return s();
    }, set highlights(j) {
      s(j), v();
    }, get isSelected() {
      return o();
    }, set isSelected(j) {
      o(j), v();
    }, get replaceLiquid() {
      return c();
    }, set replaceLiquid(j) {
      c(j), v();
    } }, m = ze(), I = _e(m), P = (j) => {
      var D = Yv();
      let Q;
      Gt(D, 21, () => e(u), Qr, (Z, T) => {
        var J = Jv(), z = w(J), G = (B) => {
          var S = Uv(), C = w(S);
          y(S), ke(() => Ie(C, "src", e(p))), b(B, S);
        }, ne = (B) => {
          var S = ze(), C = _e(S), F = (U) => {
            var H = Zv();
            Pu(w(H), () => e(h), (se, E) => {
              E(se, {});
            }), y(H), b(U, H);
          };
          O(C, (U) => {
            e(h) && U(F);
          }, !0), b(B, S);
        };
        O(z, (B) => {
          e(f) === "custom" && e(p) ? B(G) : B(ne, !1);
        });
        var X = L(z, 2);
        je(w(X), () => e(T)), y(X), y(J), b(Z, J);
      }), y(D), ke((Z) => {
        Q = Rt(D, 1, "kaching-bundles__highlights", null, Q, Z), Et(D, e(g));
      }, [() => ({ "kaching-bundles__highlights--horizontal": e(k) === "horizontal" })]), b(j, D);
    };
    O(I, (j) => {
      e(u).length > 0 && (!s().showOnlyWhenSelected || o()) && j(P);
    }), b(n, m);
    var A = at(x);
    return a(), A;
  }
  function Kv(n, t, r, a) {
    t()({ dealBarId: r().id, dealBarQuantity: a(r()), preselected: !1 });
  }
  Ke(Ua, { highlights: {}, isSelected: {}, replaceLiquid: {} }, [], [], !0);
  var Xv = $('<img class="kaching-bundles__bar-image" alt=""/>'), e_ = $('<div class="kaching-bundles__bar-radio"></div>'), t_ = $('<span class="kaching-bundles__bar-title"><!></span>'), n_ = $('<span class="kaching-bundles__bar-label"><!></span>'), r_ = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), a_ = $('<div class="kaching-bundles__bar-full-price"><!></div>'), i_ = $('<div class="kaching-bundles__bar-price"><!></div>'), l_ = $('<div class="kaching-bundles__bar-full-price"><!></div>'), s_ = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), o_ = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), c_ = $('<div class="kaching-bundles__bar-full-price"><!></div>'), u_ = $('<div class="kaching-bundles__bar-unit-price"><!> </div>'), d_ = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--primary"><!> <!></div> <div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!></div>', 1), g_ = $('<div class="kaching-bundles__bar-full-price"><!></div>'), h_ = $("<!> <!>", 1), p_ = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <div class="kaching-bundles__bar-second-line"><!> <!></div></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), b_ = $('<div class="kaching-bundles__bar-selling-plan"><!></div>'), f_ = $('<div class="kaching-bundles__bar-variant-selector-wrapper"><!> <!></div>'), v_ = $('<div class="kaching-bundles__bar-variants"><!> <!></div>'), __ = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!> <!></div> <!> <!> <!> <!>', 1), k_ = $('<div><input type="radio"/> <!> <!></div>');
  function Xo(n, t) {
    rt(t, !0);
    const r = () => Te(B, "$config", o), a = () => Te(ne, "$formatPrice", o), s = () => Te(G, "$translate", o), [o, c] = kt();
    let l = _(t, "dealBlock", 7), i = _(t, "dealBar", 7), u = _(t, "product", 7), g = _(t, "otherProducts", 23, () => []), k = _(t, "complementaryProducts", 23, () => []), f = _(t, "customQuantity", 7, void 0), h = _(t, "currentVariantId", 7, void 0), p = _(t, "currentVariantSource", 7, void 0), x = _(t, "componentId", 7), m = _(t, "selected", 7, !1), I = _(t, "globalSellingPlan", 7, void 0), P = _(t, "selectedDealBarIndex", 7), A = _(t, "selectedProgressiveGifts", 23, () => []), j = _(t, "onProgressiveGiftsChange", 7), D = _(t, "onDealBarSelect", 7), Q = _(t, "onDealBarDeselect", 7), Z = _(t, "onVariantSelect", 7), T = _(t, "onVariantsChange", 7), J = _(t, "onPersonalisationsChange", 7), z = _(t, "personalisationInitialValues", 23, () => []);
    const G = $t(), ne = xn(), X = On(), B = Sn(), S = _i();
    let C = Fe(ut([])), F = Fe(ut([])), U = Fe(ut([]));
    const H = d(() => l().priceRounding ? { perItem: l().showPricesPerItem, precision: l().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), se = d(() => {
      var ye, Xe;
      return l() && ((Xe = (ye = l().defaultVariantsV2) == null ? void 0 : ye.find((gt) => en(gt.productGID) === u().id && gt.dealBarId === i().id)) == null ? void 0 : Xe.variantGIDs) || [];
    });
    let E = d(() => ae(i())), q = Fe(ut(ae(i())));
    _r(() => {
      te(q, e(E), !0);
    });
    const ie = d(() => f() || e(q)), ue = d(() => Math.max(1, Math.floor(e(ie) / e(E)))), W = d(() => e(ie) && (function(ye) {
      return !ye.differentVariantsEnabled || u().variants.length === 1 ? !1 : ye.hideVariantPicker ? !0 : !(e(ie) == 1 && !ye.showVariantsForSingleQuantity);
    })(l()));
    function ae(ye) {
      return ye.dealBarType === Zt.Bxgy ? ye.buyQuantity + ye.getQuantity : Number(ye.quantity);
    }
    let he, V = Fe(ut([])), N = Fe(ut([])), de = !1;
    et(() => {
      const ye = un(e(ie), e(se), h());
      if (JSON.stringify(e(V)) !== JSON.stringify(ye)) {
        const Xe = e(V).length === ye.length;
        te(V, ye, !0), e(N).length === 0 ? te(N, ye, !0) : Xe ? r().featureFlags.preserve_variant_selections && l().differentVariantsEnabled && new Set(e(N)).size !== 1 || r().featureFlags.propagate_picker_option_changes && p() === "bar" || te(N, ye, !0) : te(N, (function(gt, dt) {
          const yt = e(pe) ? null : gt[gt.length - 1];
          if (gt.length < dt) {
            const ft = dt - gt.length;
            return [...gt, ...Array(ft).fill(yt)];
          }
          return gt.slice(0, dt);
        })(e(N), e(ie)), !0);
      }
    }), et(() => {
      if (!r().featureFlags.propagate_picker_option_changes) return;
      const ye = h(), Xe = p(), gt = he;
      ye && (he = ye), gt && ye && gt !== ye && Xe !== "bar" && (r().featureFlags.preserve_variant_selections && l().differentVariantsEnabled && de || tn(() => {
        te(N, (function(dt, yt, ft) {
          const St = e(Be).get(yt), Bt = e(Be).get(ft);
          if (!St || !Bt) return dt;
          const wt = Bt.options.flatMap((nn, Ye) => nn === St.options[Ye] ? [] : [Ye]);
          if (wt.length === 0) return dt;
          let Ot = !1;
          const dn = dt.map((nn) => {
            const Ye = nn != null ? e(Be).get(nn) : void 0;
            if (!Ye) return nn;
            const ht = [...Ye.options];
            for (const It of wt) ht[It] = Bt.options[It];
            const ot = ju(u().variants, ht);
            return ot && ot.id !== nn ? (Ot = !0, ot.id) : nn;
          });
          return Ot ? dn : dt;
        })(e(N), gt, ye), !0);
      }));
    });
    const pe = d(() => {
      var ye;
      return (ye = i().requireVariantSelectionEnabled) != null && ye && !!e(W);
    });
    let re = !1;
    _r(() => {
      const ye = !!e(W);
      ye && !re && e(pe) && tn(() => {
        te(N, un(e(ie), e(se), h()), !0);
      }), re = ye;
    });
    const R = d(() => e(pe) ? un(e(ie), e(se), h(), { fillUnselectedSlots: !0 }) : []), ee = d(() => e(N).filter((ye) => ye != null)), ce = d(() => e(pe) ? e(N).map((ye, Xe) => {
      var gt;
      return (gt = ye != null ? ye : e(R)[Xe]) != null ? gt : null;
    }) : e(N)), ve = d(() => e(ce).filter((ye) => ye != null)), oe = d(() => ln(e(ve))), Be = d(() => new Map(u().variants.map((ye) => [ye.id, ye])));
    let be = Fe(void 0);
    const K = d(() => zl(u(), e(oe).map((ye) => ye.variant))), Y = d(() => {
      var ye, Xe;
      return (i().sellingPlanEnabled || l().subscriptionsEnabled && ((ye = l().subscriptions) == null ? void 0 : ye.layout) === "link" && ((Xe = l().subscriptions) == null ? void 0 : Xe.subscribeByDefault)) && (!l().subscriptionsEnabled || !!I());
    }), ge = d(() => e(Y) ? Oo(i(), e(K), e(be)) : void 0), we = d(() => Fo(e(ge), I(), e(K), u().requiresSellingPlan)), me = d(() => (function(ye, Xe, gt, dt) {
      return gt.map(({ variant: ft, quantity: St }) => {
        let Bt = (function(Ot, dn) {
          var nn;
          if (!dn) return Ot.price;
          const Ye = Ot.sellingPlans.find((ht) => ht.id === dn.id);
          return Ye && Ye.perDeliveryPrice !== Ye.price ? Math.max((nn = Ye.compareAtPrice) != null ? nn : Ot.price, Ot.price) : Ot.price;
        })(ft, dt);
        const wt = ye.useProductCompareAtPrice || (Xe.dealBarType === void 0 || Xe.dealBarType === Zt.QuantityBreak) && Xe.discountType === "default";
        return ft.compareAtPrice && wt && (Bt = Math.max(Bt, ft.compareAtPrice)), Bt * St;
      }).reduce((ft, St) => ft + St, 0);
    })(l(), i(), e(oe), e(we))), Pe = d(() => l().dealBars.findIndex((ye) => ye.id === i().id) + 1), Ge = d(() => Tl(e(me), [...e(C), ...Vl(e(F)), ...Al(l(), e(Pe), g(), e(we), A(), m())])), Ze = d(() => Math.ceil(e(me) / e(ie))), Ve = d(() => Qo(e(ie) === 1, e(Ge), e(Ze))), fe = d(() => l() && Le(e(oe), e(we))), We = d(() => e(oe)[0] && Ao(e(oe)[0].variant)), $e = d(() => Vr(e(oe))), M = d(() => e($e) ? e(fe) / e($e) : null), xe = d(() => yn({ priceFormatter: a(), product: u(), selectedVariants: e(oe), totalFullPrice: e(me), totalCompareAtPrice: e(Ge), totalDiscountedPrice: e(fe), quantity: e(ie), dealBar: i(), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: e($e), sellingPlan: e(we) })), Me = d(() => e(xe)(s()(i().title))), qe = d(() => e(xe)(s()(i().subtitle))), Oe = d(() => e(xe)(s()(i().label))), De = d(() => $l(l(), i()).map((ye) => Qa(ye, s(), e(xe)))), Ae = d(() => Wa(e(De)));
    function Le(ye, Xe) {
      switch (i().dealBarType) {
        case void 0:
        case Zt.QuantityBreak:
          return Dd(i(), ye, r().currencyRate, e(H), Xe, r().featureFlags.percentage_cents_rounding_workaround, Dr);
        case Zt.Bxgy:
          return Td(i(), ye, r().currencyRate, e(H), Xe, Dr);
      }
    }
    const nt = d(() => Math.ceil(e(fe) / e(ie))), Je = d(() => e(Ge) > e(fe)), Ne = d(() => r().featureFlags.variant_images && new Set(u().variants.map((ye) => ye.image).filter((ye) => ye)).size > 1), Vt = d(() => `${i().id}_${x()}`);
    function Dt(ye) {
      m() && (ye.preventDefault(), ye.stopPropagation(), Q()());
    }
    function un(ye, Xe, gt, { fillUnselectedSlots: dt = !1 } = {}) {
      let yt = [];
      for (let ft = 0; ft < ye; ft++) {
        let St = Xe[ft];
        if (!St && ye > ae(i()) && Xe.filter((Bt) => Bt).length === ae(i()) && (St = Xe[Xe.length - 1]), St) {
          const Bt = en(St);
          if (u().variants.find((wt) => wt.id == Bt)) {
            yt.push(Bt);
            continue;
          }
        }
        e(pe) ? yt.push(dt && gt != null ? gt : null) : gt && yt.push(gt);
      }
      return yt;
    }
    function ln(ye) {
      return ye.reduce((Xe, gt) => {
        const dt = Xe.find(({ variant: yt }) => yt.id === gt);
        if (dt) dt.quantity += 1;
        else {
          const yt = u().variants.find((ft) => ft.id === gt);
          if (!yt) return Xe;
          Xe.push({ variant: yt, quantity: 1 });
        }
        return Xe;
      }, []);
    }
    ja(() => {
      m() && D()({ dealBarId: i().id, dealBarQuantity: ae(i()), preselected: !0 });
    });
    const sn = d(() => Te(X, "$getMediaImageUrl", o)(i().mediaImageGID) || ql);
    et(() => {
      m() && (e(N), e(ve), e(U), e(C), e(F), e(we), tn(() => {
        (function() {
          if (!e(N).length) return;
          const ye = ln(e(ee)), Xe = e(fe) + e(U).reduce((wt, Ot) => wt + Ot.discountedPrice, 0), gt = e(C).reduce((wt, Ot) => Ot.showPrice ? wt + Ot.fullPrice : wt, 0) + e(F).reduce((wt, Ot) => wt + Ot.fullPrice * Ot.quantity, 0), dt = e(me) + e(U).reduce((wt, Ot) => wt + Ot.fullPrice, 0) + gt, yt = Le(e(oe), void 0), ft = u().sellingPlans.map((wt) => ({ sellingPlanId: wt.id, discountedPrice: Le(e(oe), wt) })), St = { discountedPrice: Xe, fullPrice: dt, giftValue: gt, discountedPricePerItem: e(nt), fullPricePerItem: e(Ze), discountedPriceWithoutSellingPlan: yt, discountedPricesForSellingPlans: ft }, Bt = e(ee).length;
          T()({ variants: ye, freeGifts: [...e(C), ...e(F)], upsells: e(U), dealBarSellingPlan: e(ge), pricing: St, validation: { requiresItemSelection: e(pe), allItemsSelected: !e(pe) || Bt >= e(ie), missingItemsCount: e(pe) ? Math.max(0, e(ie) - Bt) : 0 } });
        })();
      }));
    });
    const Lt = d(() => i().showAsSoldOutEnabled && i().showAsSoldOut ? Ol(i().showAsSoldOut) : "");
    var Ce = { get dealBlock() {
      return l();
    }, set dealBlock(ye) {
      l(ye), v();
    }, get dealBar() {
      return i();
    }, set dealBar(ye) {
      i(ye), v();
    }, get product() {
      return u();
    }, set product(ye) {
      u(ye), v();
    }, get otherProducts() {
      return g();
    }, set otherProducts(ye = []) {
      g(ye), v();
    }, get complementaryProducts() {
      return k();
    }, set complementaryProducts(ye = []) {
      k(ye), v();
    }, get customQuantity() {
      return f();
    }, set customQuantity(ye = void 0) {
      f(ye), v();
    }, get currentVariantId() {
      return h();
    }, set currentVariantId(ye = void 0) {
      h(ye), v();
    }, get currentVariantSource() {
      return p();
    }, set currentVariantSource(ye = void 0) {
      p(ye), v();
    }, get componentId() {
      return x();
    }, set componentId(ye) {
      x(ye), v();
    }, get selected() {
      return m();
    }, set selected(ye = !1) {
      m(ye), v();
    }, get globalSellingPlan() {
      return I();
    }, set globalSellingPlan(ye = void 0) {
      I(ye), v();
    }, get selectedDealBarIndex() {
      return P();
    }, set selectedDealBarIndex(ye) {
      P(ye), v();
    }, get selectedProgressiveGifts() {
      return A();
    }, set selectedProgressiveGifts(ye = []) {
      A(ye), v();
    }, get onProgressiveGiftsChange() {
      return j();
    }, set onProgressiveGiftsChange(ye) {
      j(ye), v();
    }, get onDealBarSelect() {
      return D();
    }, set onDealBarSelect(ye) {
      D(ye), v();
    }, get onDealBarDeselect() {
      return Q();
    }, set onDealBarDeselect(ye) {
      Q(ye), v();
    }, get onVariantSelect() {
      return Z();
    }, set onVariantSelect(ye) {
      Z(ye), v();
    }, get onVariantsChange() {
      return T();
    }, set onVariantsChange(ye) {
      T(ye), v();
    }, get onPersonalisationsChange() {
      return J();
    }, set onPersonalisationsChange(ye) {
      J(ye), v();
    }, get personalisationInitialValues() {
      return z();
    }, set personalisationInitialValues(ye = []) {
      z(ye), v();
    } }, Re = k_();
    let tt;
    var it = w(Re);
    wa(it), it.__change = [Kv, D, i, ae];
    var st = L(it, 2);
    ki(st, { get for() {
      return e(Vt);
    }, get soldOut() {
      return i().showAsSoldOutEnabled;
    }, get borderHost() {
      return e(Ae);
    }, children: (ye, Xe) => {
      var gt = __(), dt = _e(gt);
      Gt(dt, 17, () => e(De), (vt) => vt.id, (vt, Ut) => {
        Ba(vt, { get badge() {
          return e(Ut);
        }, get blockLayout() {
          return l().blockLayout;
        } });
      });
      var yt = L(dt, 2), ft = w(yt);
      Xt(ft, { element: "div", class: "kaching-bundles__bar-main", onclick: Dt, children: (vt, Ut) => {
        var rn = p_(), An = _e(rn), Jt = (Ct) => {
          var on = Xv();
          ke(() => Ie(on, "src", e(sn))), b(Ct, on);
        }, Wn = (Ct) => {
          b(Ct, e_());
        };
        O(An, (Ct) => {
          i().mediaImageGID ? Ct(Jt) : Ct(Wn, !1);
        });
        var lr = L(An, 2), Rn = w(lr), qn = w(Rn), sr = w(qn);
        lt(sr, () => e(Me), (Ct) => {
          var on = t_();
          je(w(on), () => e(Me)), y(on), b(Ct, on);
        });
        var qt = L(sr, 2), Nt = (Ct) => {
          var on = ze();
          lt(_e(on), () => e(Oe), (fn) => {
            var hn = n_();
            je(w(hn), () => e(Oe)), y(hn), b(fn, hn);
          }), b(Ct, on);
        };
        O(qt, (Ct) => {
          e(Oe) && Ct(Nt);
        }), y(qn);
        var pn = L(qn, 2), an = w(pn), Hn = (Ct) => {
          var on = ze();
          lt(_e(on), () => e(qe), (fn) => {
            var hn = r_();
            je(w(hn), () => e(qe)), y(hn), b(fn, hn);
          }), b(Ct, on);
        };
        O(an, (Ct) => {
          e(qe) && Ct(Hn);
        });
        var Bn = L(an, 2), Cn = (Ct) => {
          {
            let on = d(() => {
              var fn, hn;
              return (hn = (fn = e(oe)) == null ? void 0 : fn[0]) == null ? void 0 : hn.variant;
            });
            Ca(Ct, { get dealBlock() {
              return l();
            }, get variant() {
              return e(on);
            } });
          }
        };
        O(Bn, (Ct) => {
          e(W) || Ct(Cn);
        }), y(pn), y(Rn);
        var Dn = L(Rn, 2), bn = w(Dn), Fn = (Ct) => {
          var on = o_(), fn = _e(on), hn = w(fn);
          lt(hn, () => e(nt), (Kn) => {
            da(Kn, { get amount() {
              return e(nt);
            }, get showPricesPerItem() {
              return l().showPricesPerItem;
            }, get unitLabel() {
              return l().unitLabel;
            } });
          });
          var Ar = L(hn, 2), or = (Kn) => {
            var Pr = ze();
            lt(_e(Pr), () => e(Ve), (pr) => {
              var Un = a_();
              je(w(Un), () => a()(e(Ve))), y(Un), ke((cr) => Ie(Un, "data-a11y-label", cr), [() => s()("system.original_price")]), b(pr, Un);
            }), b(Kn, Pr);
          };
          O(Ar, (Kn) => {
            e(Je) && Kn(or);
          }), y(fn);
          var qr = L(fn, 2), ga = (Kn) => {
            var Pr = s_(), pr = w(Pr);
            lt(pr, () => e(fe), (In) => {
              var Xn = i_();
              je(w(Xn), () => a()(e(fe))), y(Xn), ke((Sr) => Ie(Xn, "data-a11y-label", Sr), [() => s()("system.price")]), b(In, Xn);
            });
            var Un = L(pr, 2), cr = (In) => {
              var Xn = ze();
              lt(_e(Xn), () => e(Ge), (Sr) => {
                var Jr = l_();
                je(w(Jr), () => a()(e(Ge))), y(Jr), ke((Gs) => Ie(Jr, "data-a11y-label", Gs), [() => s()("system.original_price")]), b(Sr, Jr);
              }), b(In, Xn);
            };
            O(Un, (In) => {
              e(Je) && In(cr);
            }), y(Pr), b(Kn, Pr);
          };
          O(qr, (Kn) => {
            e(ie) > 1 && Kn(ga);
          }), b(Ct, on);
        }, Zr = (Ct) => {
          var on = ze(), fn = _e(on), hn = (or) => {
            var qr = d_(), ga = _e(qr), Kn = w(ga);
            lt(Kn, () => e(fe), (cr) => {
              {
                let In = d(() => l().showPricesPerItem ? e(nt) : e(fe));
                da(cr, { get amount() {
                  return e(In);
                }, get showPricesPerItem() {
                  return l().showPricesPerItem;
                }, get unitLabel() {
                  return l().unitLabel;
                } });
              }
            });
            var Pr = L(Kn, 2), pr = (cr) => {
              var In = ze();
              lt(_e(In), () => l().showPricesPerItem ? e(Ve) : e(Ge), (Xn) => {
                var Sr = c_();
                je(w(Sr), () => a()(l().showPricesPerItem ? e(Ve) : e(Ge))), y(Sr), ke((Jr) => Ie(Sr, "data-a11y-label", Jr), [() => s()("system.original_price")]), b(Xn, Sr);
              }), b(cr, In);
            };
            O(Pr, (cr) => {
              e(Je) && cr(pr);
            }), y(ga);
            var Un = L(ga, 2);
            lt(w(Un), () => e(M), (cr) => {
              var In = u_(), Xn = w(In);
              je(Xn, () => a()(e(M), { preserveDecimals: !0 }));
              var Sr = L(Xn);
              y(In), ke(() => {
                var Jr;
                return pt(Sr, ` /
                    ${(Jr = e(We)) != null ? Jr : ""}`);
              }), b(cr, In);
            }), y(Un), b(or, qr);
          }, Ar = (or) => {
            var qr = h_(), ga = _e(qr);
            lt(ga, () => e(fe), (pr) => {
              {
                let Un = d(() => l().showPricesPerItem ? e(nt) : e(fe));
                da(pr, { get amount() {
                  return e(Un);
                }, get showPricesPerItem() {
                  return l().showPricesPerItem;
                }, get unitLabel() {
                  return l().unitLabel;
                } });
              }
            });
            var Kn = L(ga, 2), Pr = (pr) => {
              var Un = ze();
              lt(_e(Un), () => l().showPricesPerItem ? e(Ve) : e(Ge), (cr) => {
                var In = g_();
                je(w(In), () => a()(l().showPricesPerItem ? e(Ve) : e(Ge))), y(In), ke((Xn) => Ie(In, "data-a11y-label", Xn), [() => s()("system.original_price")]), b(cr, In);
              }), b(pr, Un);
            };
            O(Kn, (pr) => {
              e(Je) && pr(Pr);
            }), b(or, qr);
          };
          O(fn, (or) => {
            e(M) && !r().ignoreUnitPrice ? or(hn) : or(Ar, !1);
          }, !0), b(Ct, on);
        };
        O(bn, (Ct) => {
          l().showBothPrices ? Ct(Fn) : Ct(Zr, !1);
        }), y(Dn), y(lr), b(vt, rn);
      }, $$slots: { default: !0 } });
      var St = L(ft, 2), Bt = (vt) => {
        Ua(vt, { get highlights() {
          return i().highlights;
        }, get isSelected() {
          return m();
        }, get replaceLiquid() {
          return e(xe);
        } });
      };
      O(St, (vt) => {
        i().highlights && vt(Bt);
      });
      var wt = L(St, 2), Ot = (vt) => {
        var Ut = b_(), rn = w(Ut);
        {
          let An = d(() => e(ge) || e(K)[0]);
          Ha(rn, { get sellingPlans() {
            return e(K);
          }, get selectedSellingPlan() {
            return e(An);
          }, onChange: (Jt) => {
            te(be, Jt, !0);
          } });
        }
        y(Ut), b(vt, Ut);
      };
      O(wt, (vt) => {
        m() && e(Y) && !i().sellingPlanGid && e(K).length > 1 && vt(Ot);
      });
      var dn = L(wt, 2), nn = (vt) => {
        var Ut = v_(), rn = w(Ut);
        Pa(rn, { get product() {
          return u();
        } }), Gt(L(rn, 2), 17, () => ({ length: e(ie) }), Qr, (An, Jt, Wn) => {
          var lr = f_(), Rn = w(lr);
          {
            let sr = d(() => {
              var pn;
              return (pn = e(N)[Wn]) != null ? pn : null;
            }), qt = d(() => e(pe) ? s()("system.select_variant_placeholder") : void 0), Nt = d(() => e(ie) === 1);
            Yn(Rn, { get product() {
              return u();
            }, get selectedVariantId() {
              return e(sr);
            }, get placeholderText() {
              return e(qt);
            }, get showImage() {
              return e(Ne);
            }, number: Wn + 1, get numberHidden() {
              return e(Nt);
            }, onChange: (pn) => (function(an, Hn) {
              const Bn = [...e(N)];
              Bn[an] = Hn, te(N, Bn, !0), de = !0, S.set(!1), m() && (Z()({ variantId: Hn }), he = Hn);
            })(Wn, pn), onOptionChange: (pn, an, Hn) => (function(Bn, Cn, Dn, bn) {
              if (l().disableVariantOptionSync || Bn !== 0) return;
              const Fn = Cn - 1, Zr = e(N).map((Ct) => u().variants.find((on) => on.id === Ct)).filter((Ct) => Ct != null).slice(1);
              Zr.length !== 0 && Zr.every((Ct) => Ct.options[Fn] === bn) && te(N, e(N).map((Ct) => {
                const on = u().variants.find((Ar) => Ar.id === Ct);
                if (!on || on.options[Fn] !== bn) return Ct;
                const fn = [...on.options];
                fn[Fn] = Dn;
                const hn = ju(u().variants, fn);
                return hn ? hn.id : Ct;
              }), !0);
            })(Wn, pn, an, Hn) });
          }
          var qn = L(Rn, 2);
          {
            let sr = d(() => e(N)[Wn] != null ? e(Be).get(e(N)[Wn]) : void 0);
            Ca(qn, { get dealBlock() {
              return l();
            }, get variant() {
              return e(sr);
            } });
          }
          y(lr), b(An, lr);
        }), y(Ut), b(vt, Ut);
      };
      O(dn, (vt) => {
        e(W) && vt(nn);
      });
      var Ye = L(dn, 2), ht = (vt) => {
        {
          let Ut = d(() => ae(i()));
          Fl(vt, { get value() {
            return e(q);
          }, get min() {
            return e(Ut);
          }, onChange: (rn) => te(q, rn, !0) });
        }
      };
      O(Ye, (vt) => {
        m() && i().dealBarType === Zt.QuantityBreak && i().quantitySelector && vt(ht);
      });
      var ot = L(Ye, 2), It = (vt) => {
        xi(vt, { get product() {
          return u();
        }, get selectedVariantIds() {
          return e(ve);
        }, get productPersonalisation() {
          return i().productPersonalisation;
        }, get quantity() {
          return e(E);
        }, get addPersonalisationModal() {
          return l().addPersonalisationModal;
        }, get onPersonalisationsChange() {
          return J();
        }, get initialValues() {
          return z();
        } });
      };
      O(ot, (vt) => {
        m() && i().productPersonalisation && (l().blockLayout === "vertical" || l().blockLayout === "plain") && vt(It);
      }), y(yt);
      var Ft = L(yt, 2);
      {
        let vt = d(() => i().upsells || []);
        Ui(Ft, { get dealBlock() {
          return l();
        }, get dealBarId() {
          return i().id;
        }, get upsells() {
          return e(vt);
        }, get otherProducts() {
          return g();
        }, get complementaryProducts() {
          return k();
        }, get dealBarSelected() {
          return m();
        }, get dealSellingPlan() {
          return e(we);
        }, onChange: (Ut) => {
          te(U, Ut, !0);
        } });
      }
      var mt = L(Ft, 2);
      Yi(mt, { get selectedDealBarIndex() {
        return P();
      }, get onChange() {
        return j();
      }, get dealBlock() {
        return l();
      }, get dealBar() {
        return i();
      }, get selected() {
        return m();
      }, get otherProducts() {
        return g();
      }, get sellingPlan() {
        return e(we);
      }, get progressiveGifts() {
        return l().progressiveGifts;
      } });
      var Ht = L(mt, 2);
      {
        let vt = d(() => i().freeGifts || []), Ut = d(() => {
          var rn;
          return (rn = e(ce)[0]) != null ? rn : void 0;
        });
        Hi(Ht, { get dealBlock() {
          return l();
        }, get freeGifts() {
          return e(vt);
        }, get freeGiftsSummary() {
          return i().freeGiftsSummary;
        }, get otherProducts() {
          return g();
        }, get dealBarSelected() {
          return m();
        }, get sellingPlan() {
          return e(we);
        }, get mainProductVariantId() {
          return e(Ut);
        }, onChange: (rn) => {
          te(C, rn, !0);
        } });
      }
      var $n = L(Ht, 2);
      {
        let vt = d(() => i().multipleGiftsSelectors || []);
        Ji($n, { get dealBlock() {
          return l();
        }, get multipleGiftsSelectors() {
          return e(vt);
        }, get sellingPlan() {
          return e(we);
        }, get otherProducts() {
          return g();
        }, get sets() {
          return e(ue);
        }, onChange: (Ut) => {
          te(F, Ut, !0);
        } });
      }
      b(ye, gt);
    }, $$slots: { default: !0 } });
    var zt = L(st, 2), bt = (ye) => {
      Zi(ye, { get showAsSoldOut() {
        return i().showAsSoldOut;
      }, get replaceLiquid() {
        return e(xe);
      } });
    };
    O(zt, (ye) => {
      i().showAsSoldOutEnabled && i().showAsSoldOut && ye(bt);
    }), y(Re), ke((ye) => {
      var Xe;
      tt = Rt(Re, 1, "kaching-bundles__bar", null, tt, ye), Ie(Re, "data-deal-bar-id", i().id), Et(Re, e(Lt)), Ie(it, "name", `kaching-bundles-deal-${(Xe = x()) != null ? Xe : ""}`), gi(it, i().id), Ie(it, "id", e(Vt)), Pl(it, m()), it.disabled = i().showAsSoldOutEnabled;
    }, [() => ({ "kaching-bundles__bar--selected": m() })]), b(n, Re);
    var At = at(Ce);
    return c(), At;
  }
  jn(["change"]), Ke(Xo, { dealBlock: {}, dealBar: {}, product: {}, otherProducts: {}, complementaryProducts: {}, customQuantity: {}, currentVariantId: {}, currentVariantSource: {}, componentId: {}, selected: {}, globalSellingPlan: {}, selectedDealBarIndex: {}, selectedProgressiveGifts: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var m_ = $('<div class="kaching-bundles"><!></div>');
  function kg(n, t) {
    var r;
    rt(t, !0);
    const a = _(t, "config", 7), s = _(t, "dealBlock", 7), o = _(t, "dealBar", 7), c = _(t, "translations", 7), l = _(t, "product", 7), i = _(t, "mediaImages", 23, () => []), u = _(t, "currentVariantId", 7), g = _(t, "currentVariantSource", 7, void 0), k = _(t, "variantBadges", 23, () => []), f = d(() => xr(s(), a().brandColors)), h = d(() => xr(o(), a().brandColors)), p = Math.random().toString(16).slice(2), { setConfig: x } = hi(a());
    Ms(), zs();
    const { setMoneyFormat: m } = Ni(a().moneyFormat), { setTranslations: I } = vi(c()), { setMediaImages: P } = Ml(i()), { setSwatchSettings: A } = Bl({ swatchOptions: e(f).swatchOptions || [], swatchSize: e(f).swatchSize, swatchShape: e(f).swatchShape, showSelectedSwatchName: (r = e(f).showSelectedSwatchName) != null && r, pillStyle: ca(e(f)) }), { setVariantBadges: j } = ag(k());
    et(() => {
      x(a());
    }), et(() => {
      m(a().moneyFormat, !!e(f).showPricesWithoutDecimals);
    }), et(() => {
      I(c());
    }), et(() => {
      P(i());
    }), et(() => {
      var z;
      A({ swatchOptions: e(f).swatchOptions || [], swatchSize: e(f).swatchSize, swatchShape: e(f).swatchShape, showSelectedSwatchName: (z = e(f).showSelectedSwatchName) != null && z, pillStyle: ca(e(f)) });
    }), et(() => {
      j(k());
    });
    const D = d(() => e(f) && gd(e(f)));
    var Q = { get config() {
      return a();
    }, set config(z) {
      a(z), v();
    }, get dealBlock() {
      return s();
    }, set dealBlock(z) {
      s(z), v();
    }, get dealBar() {
      return o();
    }, set dealBar(z) {
      o(z), v();
    }, get translations() {
      return c();
    }, set translations(z) {
      c(z), v();
    }, get product() {
      return l();
    }, set product(z) {
      l(z), v();
    }, get mediaImages() {
      return i();
    }, set mediaImages(z = []) {
      i(z), v();
    }, get currentVariantId() {
      return u();
    }, set currentVariantId(z) {
      u(z), v();
    }, get currentVariantSource() {
      return g();
    }, set currentVariantSource(z = void 0) {
      g(z), v();
    }, get variantBadges() {
      return k();
    }, set variantBadges(z = []) {
      k(z), v();
    } }, Z = m_(), T = w(Z), J = (z) => {
      Xo(z, { selectedDealBarIndex: null, get dealBlock() {
        return e(f);
      }, get dealBar() {
        return e(h);
      }, get product() {
        return l();
      }, get currentVariantId() {
        return u();
      }, get currentVariantSource() {
        return g();
      }, get componentId() {
        return p;
      }, selected: !0, onProgressiveGiftsChange: () => {
      }, onDealBarSelect: () => {
      }, onDealBarDeselect: () => {
      }, onVariantSelect: () => {
      }, onVariantsChange: () => {
      } });
    };
    return O(T, (z) => {
      e(h).dealBarType && e(h).dealBarType !== Zt.QuantityBreak && e(h).dealBarType !== Zt.Bxgy || z(J);
    }), y(Z), ke(() => Et(Z, e(D))), b(n, Z), at(Q);
  }
  customElements.define("kaching-bundles-bar", Ke(kg, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, dealBar: { attribute: "deal-bar", type: "Object" }, translations: { attribute: "translations", type: "Object" }, product: { attribute: "product", type: "Object" }, mediaImages: { attribute: "media-images", type: "Array" }, currentVariantId: { attribute: "current-variant-id", type: "Number" }, currentVariantSource: { attribute: "current-variant-source", type: "String" }, variantBadges: { attribute: "variant-badges", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), Pn(this, "component"), this.component = this;
    }
  }));
  var x_ = $('<img alt="" class="kaching-bundles__bundle-products__image"/>'), y_ = $('<div class="kaching-bundles__bundle-products__image-placeholder"></div>');
  function ec(n, t) {
    rt(t, !0);
    const r = _(t, "image", 7), a = _(t, "linkUrl", 7);
    var s = { get image() {
      return r();
    }, set image(u) {
      r(u), v();
    }, get linkUrl() {
      return a();
    }, set linkUrl(u) {
      a(u), v();
    } }, o = ze(), c = _e(o), l = (u) => {
      ar(u, { get url() {
        return a();
      }, class: "kaching-bundles__bundle-products__link", children: (g, k) => {
        var f = x_();
        Ie(f, "height", 50), Ie(f, "width", 50), ke(() => Ie(f, "src", r())), b(g, f);
      }, $$slots: { default: !0 } });
    }, i = (u) => {
      b(u, y_());
    };
    return O(c, (u) => {
      r() ? u(l) : u(i, !1);
    }), b(n, o), at(s);
  }
  Ke(ec, { image: {}, linkUrl: {} }, [], [], !0);
  var w_ = $('<span class="kaching-bundles__bundle-products__quantity"> </span>'), P_ = $('<div class="kaching-bundles__bundle-products__title"><!> <span> </span></div>');
  function tc(n, t) {
    rt(t, !0);
    const r = _(t, "title", 7), a = _(t, "quantity", 7), s = _(t, "linkUrl", 7);
    var o = { get title() {
      return r();
    }, set title(c) {
      r(c), v();
    }, get quantity() {
      return a();
    }, set quantity(c) {
      a(c), v();
    }, get linkUrl() {
      return s();
    }, set linkUrl(c) {
      s(c), v();
    } };
    return ar(n, { get url() {
      return s();
    }, class: "kaching-bundles__bundle-products__link", children: (c, l) => {
      var i = P_(), u = w(i), g = (h) => {
        var p = w_(), x = w(p);
        y(p), ke(() => {
          var m;
          return pt(x, `${(m = a()) != null ? m : ""}x`);
        }), b(h, p);
      };
      O(u, (h) => {
        a() > 1 && h(g);
      });
      var k = L(u, 2), f = w(k, !0);
      y(k), y(i), ke(() => pt(f, r())), b(c, i);
    }, $$slots: { default: !0 } }), at(o);
  }
  Ke(tc, { title: {}, quantity: {}, linkUrl: {} }, [], [], !0);
  var S_ = $('<span class="kaching-bundles__bundle-products__price"><!></span>'), B_ = $('<span class="kaching-bundles__bundle-products__full-price"><!></span>'), C_ = $('<span class="kaching-bundles__bundle-products__unit-price"><!> </span>'), I_ = $("<div><!> <!> <!></div>");
  function Vs(n, t) {
    rt(t, !0);
    const r = () => Te(g, "$formatPrice", a), [a, s] = kt();
    let o = _(t, "discountedPrice", 7), c = _(t, "fullPrice", 7), l = _(t, "unitPrice", 7), i = _(t, "unitPriceReference", 7), u = _(t, "ignoreUnitPrice", 7);
    const g = xn(), k = d(() => !!l() && !!i() && !u());
    var f = { get discountedPrice() {
      return o();
    }, set discountedPrice(D) {
      o(D), v();
    }, get fullPrice() {
      return c();
    }, set fullPrice(D) {
      c(D), v();
    }, get unitPrice() {
      return l();
    }, set unitPrice(D) {
      l(D), v();
    }, get unitPriceReference() {
      return i();
    }, set unitPriceReference(D) {
      i(D), v();
    }, get ignoreUnitPrice() {
      return u();
    }, set ignoreUnitPrice(D) {
      u(D), v();
    } }, h = I_();
    let p;
    var x = w(h);
    lt(x, o, (D) => {
      var Q = S_();
      je(w(Q), () => r()(o())), y(Q), b(D, Q);
    });
    var m = L(x, 2), I = (D) => {
      var Q = ze();
      lt(_e(Q), c, (Z) => {
        var T = B_();
        je(w(T), () => r()(c())), y(T), b(Z, T);
      }), b(D, Q);
    };
    O(m, (D) => {
      o() < c() && D(I);
    });
    var P = L(m, 2), A = (D) => {
      var Q = ze();
      lt(_e(Q), l, (Z) => {
        var T = C_(), J = w(T);
        je(J, () => r()(l(), { preserveDecimals: !0 }));
        var z = L(J);
        y(T), ke(() => {
          var G;
          return pt(z, ` / ${(G = i()) != null ? G : ""}`);
        }), b(Z, T);
      }), b(D, Q);
    };
    O(P, (D) => {
      l() && i() && !u() && D(A);
    }), y(h), ke((D) => p = Rt(h, 1, "kaching-bundles__bundle-products__pricing", null, p, D), [() => ({ "kaching-bundles__bundle-products__pricing--with-unit-price": e(k) })]), b(n, h);
    var j = at(f);
    return s(), j;
  }
  Ke(Vs, { discountedPrice: {}, fullPrice: {}, unitPrice: {}, unitPriceReference: {}, ignoreUnitPrice: {} }, [], [], !0);
  var M_ = $("<!> <!> <!> <!> <!>", 1), z_ = $("<!> <!>", 1), $_ = $('<div class="kaching-bundles__bundle-products__wrapper"><!> <div class="kaching-bundles__bundle-products__content"><!> <!> <!></div></div> <!>', 1), D_ = $('<div class="kaching-bundles__bundle-products__product"><!></div>');
  function mg(n, t) {
    rt(t, !0);
    const r = () => Te(P, "$config", s), a = () => Te(j, "$translate", s), [s, o] = kt();
    let c = _(t, "dealBlock", 7), l = _(t, "layout", 7), i = _(t, "bundleProduct", 7), u = _(t, "product", 7), g = _(t, "dealBarSelected", 7), k = _(t, "currentVariantId", 7), f = _(t, "mainVariantId", 7), h = _(t, "priceRounding", 7), p = _(t, "sellingPlan", 7), x = _(t, "dealBar", 7), m = _(t, "sets", 7), I = _(t, "onChange", 7);
    const P = Sn(), A = xn(), j = $t(), D = _i(), Q = On();
    let Z = Fe(void 0);
    const T = d(() => !!i().variantGIDs), J = d(() => {
      var ce, ve;
      return e(T) && u() ? u().variants.filter((oe) => i().variantGIDs.some((Be) => en(Be) === oe.id)) : (ve = (ce = u()) == null ? void 0 : ce.variants) != null ? ve : [];
    }), z = d(() => {
      var ce, ve, oe, Be;
      const be = i().productGID === "default", K = !!((ce = c().defaultVariantsV2) != null && ce.length);
      if (be && K && u()) {
        const Y = u().id, ge = (Be = (oe = (ve = c().defaultVariantsV2) == null ? void 0 : ve.find((we) => en(we.productGID) === Y && we.dealBarId === x().id)) == null ? void 0 : oe.variantGIDs) == null ? void 0 : Be[0];
        if (ge) return en(ge);
      }
      if (i().defaultVariantGID) return en(i().defaultVariantGID);
    }), G = d(() => {
      var ce;
      return (ce = x().requireVariantSelectionEnabled) != null && ce && e(J).length > 1;
    }), ne = d(() => {
      const ce = e(Z) || e(z);
      if (ce !== void 0 && e(J).some(({ id: ve }) => ve === ce))
        return ce;
    }), X = d(() => e(G) && e(ne) === void 0), B = d(() => {
      const ce = e(Z) || e(z);
      return ce !== void 0 && e(J).some(({ id: ve }) => ve === ce) ? ce : i().productGID === "default" && k() ? k() : i().variantGIDs ? i().variantGIDs.length === 0 ? void 0 : en(i().variantGIDs[0]) : e(J).length > 0 ? e(J)[0].id : void 0;
    }), S = d(() => {
      var ce;
      return e(B) ? (ce = u()) == null ? void 0 : ce.variants.find((ve) => ve.id === e(B)) : void 0;
    }), C = d(() => u() && e(S) && ir(u(), e(S), p())), F = d(() => i().quantity * m()), U = d(() => Sa({ discountType: i().discountType, discountValue: i().discountValue, discountQuantity: i().quantity, variantQuantities: e(S) ? [{ variant: e(S), quantity: e(F) }] : [], currencyRate: r().currencyRate, priceRounding: h(), sellingPlan: e(C), onAmountDiscountExceedsPrice: Dr })), H = d(() => (function(ce) {
      if (!ce) return 0;
      let ve = ce.price;
      return c().useProductCompareAtPrice && ce.compareAtPrice && (ve = Math.max(ve, ce.compareAtPrice)), ve * e(F);
    })(e(S))), se = d(() => e(S) ? Ao(e(S)) : null), E = d(() => e(S) ? Vr([{ variant: e(S), quantity: e(F) }]) : null), q = d(() => e(E) ? e(U) / e(E) : null), ie = d(() => {
      var ce;
      return (ce = u()) != null && ce.url && e(S) ? `${u().url}?variant=${e(S).id}` : void 0;
    }), ue = d(() => {
      var ce, ve;
      return Te(Q, "$getMediaImageUrl", s)(i().mediaImageGID) || ((ce = e(S)) == null ? void 0 : ce.image) || ((ve = u()) == null ? void 0 : ve.image);
    }), W = d(() => g() && u() && e(J).length > 1 && (e(B) || e(G))), ae = d(() => g() && i().productGID !== "default" ? e(ie) : void 0), he = d(() => u() ? i().title ? yn({ priceFormatter: Te(A, "$formatPrice", s), product: u(), totalFullPrice: e(H), totalDiscountedPrice: e(U), quantity: e(F), unitQuantity: e(E) })(a()(i().title)) : u().title : "");
    function V(ce) {
      te(Z, ce, !0), D.set(!1);
    }
    let N;
    et(() => {
      e(S) && e(F) && (e(X), tn(() => {
        I()({ variant: e(S), product: u(), quantity: e(F), variantSelectionPending: e(X) });
      }));
    }), _r(() => {
      i().productGID, te(Z, void 0), N = void 0;
    }), _r(() => {
      if (e(G)) return void (N !== void 0 && e(Z) === N && (te(Z, void 0), N = void 0));
      const ce = i().productGID === "default";
      if (!(ce || !c().disableVariantOptionSync)) return;
      const ve = ce ? k() : f();
      if (!ve || !u() || ve === N) return;
      const oe = N;
      if (N = ve, !e(J).some((K) => K.id === ve)) return;
      const Be = e(Z) === void 0 && e(z) === void 0, be = e(Z) === oe && oe !== void 0;
      (Be || be) && te(Z, ve, !0);
    });
    var de = { get dealBlock() {
      return c();
    }, set dealBlock(ce) {
      c(ce), v();
    }, get layout() {
      return l();
    }, set layout(ce) {
      l(ce), v();
    }, get bundleProduct() {
      return i();
    }, set bundleProduct(ce) {
      i(ce), v();
    }, get product() {
      return u();
    }, set product(ce) {
      u(ce), v();
    }, get dealBarSelected() {
      return g();
    }, set dealBarSelected(ce) {
      g(ce), v();
    }, get currentVariantId() {
      return k();
    }, set currentVariantId(ce) {
      k(ce), v();
    }, get mainVariantId() {
      return f();
    }, set mainVariantId(ce) {
      f(ce), v();
    }, get priceRounding() {
      return h();
    }, set priceRounding(ce) {
      h(ce), v();
    }, get sellingPlan() {
      return p();
    }, set sellingPlan(ce) {
      p(ce), v();
    }, get dealBar() {
      return x();
    }, set dealBar(ce) {
      x(ce), v();
    }, get sets() {
      return m();
    }, set sets(ce) {
      m(ce), v();
    }, get onChange() {
      return I();
    }, set onChange(ce) {
      I(ce), v();
    } }, pe = ze(), re = _e(pe), R = (ce) => {
      var ve = D_(), oe = w(ve), Be = (K) => {
        var Y = M_(), ge = _e(Y);
        ec(ge, { get image() {
          return e(ue);
        }, get linkUrl() {
          return e(ae);
        } });
        var we = L(ge, 2);
        tc(we, { get title() {
          return e(he);
        }, get quantity() {
          return e(F);
        }, get linkUrl() {
          return e(ae);
        } });
        var me = L(we, 2), Pe = (fe) => {
          Vs(fe, { get discountedPrice() {
            return e(U);
          }, get fullPrice() {
            return e(H);
          }, get unitPrice() {
            return e(q);
          }, get unitPriceReference() {
            return e(se);
          }, get ignoreUnitPrice() {
            return r().ignoreUnitPrice;
          } });
        };
        O(me, (fe) => {
          i().hidePrice || fe(Pe);
        });
        var Ge = L(me, 2);
        Ca(Ge, { get dealBlock() {
          return c();
        }, get variant() {
          return e(S);
        } });
        var Ze = L(Ge, 2), Ve = (fe) => {
          {
            let We = d(() => ({ ...u(), variants: e(J) })), $e = d(() => {
              var xe;
              return e(G) ? (xe = e(ne)) != null ? xe : null : e(B) || 0;
            }), M = d(() => e(G) ? a()("system.select_variant_placeholder") : void 0);
            Yn(fe, { get product() {
              return e(We);
            }, get selectedVariantId() {
              return e($e);
            }, get placeholderText() {
              return e(M);
            }, onChange: V });
          }
        };
        O(Ze, (fe) => {
          e(W) && fe(Ve);
        }), b(K, Y);
      }, be = (K) => {
        var Y = $_(), ge = _e(Y), we = w(ge);
        ec(we, { get image() {
          return e(ue);
        }, get linkUrl() {
          return e(ae);
        } });
        var me = L(we, 2), Pe = w(me);
        tc(Pe, { get title() {
          return e(he);
        }, get quantity() {
          return e(F);
        }, get linkUrl() {
          return e(ae);
        } });
        var Ge = L(Pe, 2);
        Ca(Ge, { get dealBlock() {
          return c();
        }, get variant() {
          return e(S);
        } });
        var Ze = L(Ge, 2), Ve = ($e) => {
          var M = z_(), xe = _e(M);
          {
            let qe = d(() => ({ ...u(), variants: e(J) }));
            Pa(xe, { get product() {
              return e(qe);
            } });
          }
          var Me = L(xe, 2);
          {
            let qe = d(() => ({ ...u(), variants: e(J) })), Oe = d(() => {
              var Ae;
              return e(G) ? (Ae = e(ne)) != null ? Ae : null : e(B) || 0;
            }), De = d(() => e(G) ? a()("system.select_variant_placeholder") : void 0);
            Yn(Me, { get product() {
              return e(qe);
            }, get selectedVariantId() {
              return e(Oe);
            }, get placeholderText() {
              return e(De);
            }, onChange: V });
          }
          b($e, M);
        };
        O(Ze, ($e) => {
          e(W) && $e(Ve);
        }), y(me), y(ge);
        var fe = L(ge, 2), We = ($e) => {
          Vs($e, { get discountedPrice() {
            return e(U);
          }, get fullPrice() {
            return e(H);
          }, get unitPrice() {
            return e(q);
          }, get unitPriceReference() {
            return e(se);
          }, get ignoreUnitPrice() {
            return r().ignoreUnitPrice;
          } });
        };
        O(fe, ($e) => {
          i().hidePrice || $e(We);
        }), b(K, Y);
      };
      O(oe, (K) => {
        l() === "horizontal" ? K(Be) : K(be, !1);
      }), y(ve), b(ce, ve);
    };
    O(re, (ce) => {
      u() && ce(R);
    }), b(n, pe);
    var ee = at(de);
    return o(), ee;
  }
  Ke(mg, { dealBlock: {}, layout: {}, bundleProduct: {}, product: {}, dealBarSelected: {}, currentVariantId: {}, mainVariantId: {}, priceRounding: {}, sellingPlan: {}, dealBar: {}, sets: {}, onChange: {} }, [], [], !0);
  var T_ = Gn('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="currentColor"></circle><path fill="#fff" d="M5 9h10v2H5z"></path><path fill="#fff" d="M11 5v10H9V5z"></path></svg>');
  function xg(n) {
    b(n, T_());
  }
  function V_(n, t, r) {
    t()({ dealBarId: r().id, preselected: !1 });
  }
  Ke(xg, {}, [], [], !0);
  var A_ = $('<img class="kaching-bundles__bar-image" alt=""/>'), q_ = $('<div class="kaching-bundles__bar-radio"></div>'), G_ = $('<span class="kaching-bundles__bar-title"><!></span>'), O_ = $('<span class="kaching-bundles__bar-label"><!></span>'), F_ = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), L_ = $('<div class="kaching-bundles__bar-full-price"><!></div>'), E_ = $('<div class="kaching-bundles__bar-price"><!></div>'), j_ = $('<div class="kaching-bundles__bar-full-price"><!></div>'), R_ = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), N_ = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), Q_ = $('<div class="kaching-bundles__bar-full-price"><!></div>'), W_ = $("<!> <!>", 1), H_ = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <!></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), U_ = $('<div class="kaching-bundles__bundle-products__product kaching-bundles__bundle-products__product--placeholder"><span>Select product</span></div>'), Z_ = $('<div class="kaching-bundles__bundle-products__divider"><div class="kaching-bundles__bundle-products__divider-line">&ZeroWidthSpace;</div> <div class="kaching-bundles__bundle-products__divider-icon"><!></div> <div class="kaching-bundles__bundle-products__divider-line">&ZeroWidthSpace;</div></div>'), J_ = $("<!> <!>", 1), Y_ = $("<div></div>"), K_ = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!></div> <!> <!> <!> <!>', 1), X_ = $('<div><input type="radio"/> <!> <!></div>');
  function yg(n, t) {
    rt(t, !0);
    const r = () => Te(ne, "$config", o), a = () => Te(z, "$formatPrice", o), s = () => Te(J, "$translate", o), [o, c] = kt(), l = _(t, "dealBlock", 7), i = _(t, "dealBar", 7), u = _(t, "product", 7), g = _(t, "otherProducts", 23, () => []), k = _(t, "complementaryProducts", 23, () => []), f = _(t, "currentVariantId", 7), h = _(t, "componentId", 7), p = _(t, "selectedDealBarIndex", 7), x = _(t, "selected", 7, !1), m = _(t, "sellingPlan", 7), I = _(t, "selectedProgressiveGifts", 23, () => []), P = _(t, "onProgressiveGiftsChange", 7), A = _(t, "onDealBarSelect", 7), j = _(t, "onDealBarDeselect", 7), D = _(t, "onVariantSelect", 7), Q = _(t, "onVariantsChange", 7), Z = _(t, "onPersonalisationsChange", 7), T = _(t, "personalisationInitialValues", 23, () => []), J = $t(), z = xn(), G = On(), ne = Sn();
    let X = Fe(ut({})), B = Fe(ut([])), S = Fe(ut([])), C = Fe(ut([])), F = Fe(1);
    const U = d(() => `${i().id}_${h()}`), H = d(() => i().bundleProducts.filter(({ productGID: M }) => M)), se = d(() => e(H).every((M) => Pe(M, u(), g()))), E = d(() => i().showProductsOnlyWhenSelected && !x()), q = d(() => e(H).every((M) => {
      var xe;
      const Me = Pe(M, u(), g());
      return (xe = Me == null ? void 0 : Me.availableForSale) != null && xe;
    })), ie = d(() => l() ? (function(M, xe) {
      return i().bundleProducts.map((qe) => {
        const Oe = xe[qe.id];
        if (!Oe) return 0;
        const { variant: De, quantity: Ae } = Oe;
        let Le = De.price;
        return De.compareAtPrice && M.useProductCompareAtPrice && (Le = Math.max(Le, De.compareAtPrice)), Le * Ae;
      }).reduce((qe, Oe) => qe + Oe, 0);
    })(l(), e(X)) : 0), ue = d(() => l().dealBars.findIndex((M) => M.id === i().id) + 1), W = d(() => Tl(e(ie), [...e(B), ...Vl(e(S)), ...Al(l(), e(ue), g(), m(), I(), x())])), ae = d(() => l().priceRounding ? { perItem: l().showPricesPerItem, precision: l().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), he = d(() => l() ? Lo(i(), e(X), r().currencyRate, e(ae), m(), Dr) : 0), V = d(() => e(H).reduce((M, xe) => M + xe.quantity, 0) * e(F)), N = d(() => Math.ceil(e(he) / (e(V) || 1))), de = d(() => Math.ceil(e(ie) / (e(V) || 1))), pe = d(() => Qo(e(V) === 1, e(W), e(de))), re = d(() => e(W) > e(he)), R = d(() => Vr(Object.values(e(X)))), ee = d(() => e(H).every((M) => M.productGID === "default" || en(M.productGID) === u().id)), ce = d(() => {
      var M;
      const xe = e(H)[0];
      if (xe) return (M = e(X)[xe.id]) == null ? void 0 : M.variant.id;
    }), ve = d(() => l().showPricesPerItem && e(ee)), oe = d(() => yn({ priceFormatter: a(), product: u(), dealBar: i(), totalFullPrice: e(ie), totalCompareAtPrice: e(W), totalDiscountedPrice: e(he), quantity: 1, unitQuantity: e(R), sellingPlan: m() })), Be = d(() => e(oe)(s()(i().title))), be = d(() => e(oe)(s()(i().subtitle))), K = d(() => e(oe)(s()(i().label))), Y = d(() => $l(l(), i()).map((M) => Qa(M, s(), e(oe)))), ge = d(() => Wa(e(Y))), we = d(() => Te(G, "$getMediaImageUrl", o)(i().mediaImageGID) || ql);
    function me(M) {
      x() && (M.preventDefault(), M.stopPropagation(), j()());
    }
    function Pe(M, xe, Me) {
      if (M.productGID) return M.productGID === "default" ? xe : Me.find((qe) => qe.id === en(M.productGID));
    }
    ja(() => {
      x() && A()({ dealBarId: i().id, preselected: !0 });
    }), et(() => {
      x() && (qa(e(X)), qa(e(C)), qa(e(B)), qa(e(S)), m(), tn(() => {
        (function() {
          var M;
          if (!i().bundleProducts.map(({ id: Je }) => Je).every((Je) => e(X)[Je])) return;
          const xe = [];
          for (const Je of i().bundleProducts) {
            const Ne = e(X)[Je.id];
            Ne && xe.push({ id: Je.id, variant: Ne.variant, product: Ne.product, quantity: Ne.quantity, variantSelectionPending: Ne.variantSelectionPending });
          }
          if (xe.length === 0) return;
          const Me = e(he) + e(C).reduce((Je, Ne) => Je + Ne.discountedPrice, 0), qe = e(B).reduce((Je, Ne) => Ne.showPrice ? Je + Ne.fullPrice : Je, 0) + e(S).reduce((Je, Ne) => Je + Ne.fullPrice * Ne.quantity, 0), Oe = e(ie) + e(C).reduce((Je, Ne) => Je + Ne.fullPrice, 0) + qe, De = Lo(i(), e(X), r().currencyRate, e(ae), void 0, Dr), Ae = u().sellingPlans.map((Je) => ({ sellingPlanId: Je.id, discountedPrice: Lo(i(), e(X), r().currencyRate, e(ae), Je, Dr) })), Le = (M = i().requireVariantSelectionEnabled) != null && M, nt = Le ? i().bundleProducts.filter(({ id: Je }) => {
            var Ne;
            return (Ne = e(X)[Je]) == null ? void 0 : Ne.variantSelectionPending;
          }).length : 0;
          Q()({ bundleProducts: xe, freeGifts: [...e(B), ...e(S)], upsells: e(C), pricing: { discountedPrice: Me, fullPrice: Oe, giftValue: qe, discountedPricePerItem: e(he), fullPricePerItem: e(ie), discountedPriceWithoutSellingPlan: De, discountedPricesForSellingPlans: Ae }, validation: { requiresItemSelection: Le, allItemsSelected: nt === 0, missingItemsCount: nt } });
        })();
      }));
    });
    const Ge = d(() => i().showAsSoldOutEnabled && i().showAsSoldOut ? Ol(i().showAsSoldOut) : "");
    var Ze = { get dealBlock() {
      return l();
    }, set dealBlock(M) {
      l(M), v();
    }, get dealBar() {
      return i();
    }, set dealBar(M) {
      i(M), v();
    }, get product() {
      return u();
    }, set product(M) {
      u(M), v();
    }, get otherProducts() {
      return g();
    }, set otherProducts(M = []) {
      g(M), v();
    }, get complementaryProducts() {
      return k();
    }, set complementaryProducts(M = []) {
      k(M), v();
    }, get currentVariantId() {
      return f();
    }, set currentVariantId(M) {
      f(M), v();
    }, get componentId() {
      return h();
    }, set componentId(M) {
      h(M), v();
    }, get selectedDealBarIndex() {
      return p();
    }, set selectedDealBarIndex(M) {
      p(M), v();
    }, get selected() {
      return x();
    }, set selected(M = !1) {
      x(M), v();
    }, get sellingPlan() {
      return m();
    }, set sellingPlan(M) {
      m(M), v();
    }, get selectedProgressiveGifts() {
      return I();
    }, set selectedProgressiveGifts(M = []) {
      I(M), v();
    }, get onProgressiveGiftsChange() {
      return P();
    }, set onProgressiveGiftsChange(M) {
      P(M), v();
    }, get onDealBarSelect() {
      return A();
    }, set onDealBarSelect(M) {
      A(M), v();
    }, get onDealBarDeselect() {
      return j();
    }, set onDealBarDeselect(M) {
      j(M), v();
    }, get onVariantSelect() {
      return D();
    }, set onVariantSelect(M) {
      D(M), v();
    }, get onVariantsChange() {
      return Q();
    }, set onVariantsChange(M) {
      Q(M), v();
    }, get onPersonalisationsChange() {
      return Z();
    }, set onPersonalisationsChange(M) {
      Z(M), v();
    }, get personalisationInitialValues() {
      return T();
    }, set personalisationInitialValues(M = []) {
      T(M), v();
    } }, Ve = ze(), fe = _e(Ve), We = (M) => {
      var xe = X_();
      let Me;
      var qe = w(xe);
      wa(qe), qe.__change = [V_, A, i];
      var Oe = L(qe, 2);
      ki(Oe, { get for() {
        return e(U);
      }, get soldOut() {
        return i().showAsSoldOutEnabled;
      }, get borderHost() {
        return e(ge);
      }, children: (Le, nt) => {
        var Je = K_(), Ne = _e(Je);
        Gt(Ne, 17, () => e(Y), (ye) => ye.id, (ye, Xe) => {
          Ba(ye, { get badge() {
            return e(Xe);
          }, get blockLayout() {
            return l().blockLayout;
          } });
        });
        var Vt = L(Ne, 2), Dt = w(Vt);
        Xt(Dt, { element: "div", class: "kaching-bundles__bar-main", onclick: me, children: (ye, Xe) => {
          var gt = H_(), dt = _e(gt), yt = (mt) => {
            var Ht = A_();
            ke(() => Ie(Ht, "src", e(we))), b(mt, Ht);
          }, ft = (mt) => {
            b(mt, q_());
          };
          O(dt, (mt) => {
            i().mediaImageGID ? mt(yt) : mt(ft, !1);
          });
          var St = L(dt, 2), Bt = w(St), wt = w(Bt), Ot = w(wt);
          lt(Ot, () => e(Be), (mt) => {
            var Ht = G_();
            je(w(Ht), () => e(Be)), y(Ht), b(mt, Ht);
          });
          var dn = L(Ot, 2), nn = (mt) => {
            var Ht = ze();
            lt(_e(Ht), () => e(K), ($n) => {
              var vt = O_();
              je(w(vt), () => e(K)), y(vt), b($n, vt);
            }), b(mt, Ht);
          };
          O(dn, (mt) => {
            e(K) && mt(nn);
          }), y(wt);
          var Ye = L(wt, 2), ht = (mt) => {
            var Ht = ze();
            lt(_e(Ht), () => e(be), ($n) => {
              var vt = F_();
              je(w(vt), () => e(be)), y(vt), b($n, vt);
            }), b(mt, Ht);
          };
          O(Ye, (mt) => {
            e(be) && mt(ht);
          }), y(Bt);
          var ot = L(Bt, 2), It = w(ot), Ft = (mt) => {
            var Ht = ze(), $n = _e(Ht), vt = (rn) => {
              var An = N_(), Jt = _e(An), Wn = w(Jt);
              lt(Wn, () => e(N), (qt) => {
                da(qt, { get amount() {
                  return e(N);
                }, get showPricesPerItem() {
                  return e(ve);
                }, get unitLabel() {
                  return l().unitLabel;
                } });
              });
              var lr = L(Wn, 2), Rn = (qt) => {
                var Nt = ze();
                lt(_e(Nt), () => e(pe), (pn) => {
                  var an = L_();
                  je(w(an), () => a()(e(pe))), y(an), ke((Hn) => Ie(an, "data-a11y-label", Hn), [() => s()("system.original_price")]), b(pn, an);
                }), b(qt, Nt);
              };
              O(lr, (qt) => {
                e(re) && qt(Rn);
              }), y(Jt);
              var qn = L(Jt, 2), sr = (qt) => {
                var Nt = R_(), pn = w(Nt);
                lt(pn, () => e(he), (Bn) => {
                  var Cn = E_();
                  je(w(Cn), () => a()(e(he))), y(Cn), ke((Dn) => Ie(Cn, "data-a11y-label", Dn), [() => s()("system.price")]), b(Bn, Cn);
                });
                var an = L(pn, 2), Hn = (Bn) => {
                  var Cn = ze();
                  lt(_e(Cn), () => e(W), (Dn) => {
                    var bn = j_();
                    je(w(bn), () => a()(e(W))), y(bn), ke((Fn) => Ie(bn, "data-a11y-label", Fn), [() => s()("system.original_price")]), b(Dn, bn);
                  }), b(Bn, Cn);
                };
                O(an, (Bn) => {
                  e(re) && Bn(Hn);
                }), y(Nt), b(qt, Nt);
              };
              O(qn, (qt) => {
                e(V) > 1 && qt(sr);
              }), b(rn, An);
            }, Ut = (rn) => {
              var An = W_(), Jt = _e(An);
              lt(Jt, () => e(he), (Rn) => {
                {
                  let qn = d(() => e(ve) ? e(N) : e(he));
                  da(Rn, { get amount() {
                    return e(qn);
                  }, get showPricesPerItem() {
                    return e(ve);
                  }, get unitLabel() {
                    return l().unitLabel;
                  } });
                }
              });
              var Wn = L(Jt, 2), lr = (Rn) => {
                var qn = ze();
                lt(_e(qn), () => e(ve) ? e(pe) : e(W), (sr) => {
                  var qt = Q_();
                  je(w(qt), () => a()(e(ve) ? e(pe) : e(W))), y(qt), ke((Nt) => Ie(qt, "data-a11y-label", Nt), [() => s()("system.original_price")]), b(sr, qt);
                }), b(Rn, qn);
              };
              O(Wn, (Rn) => {
                e(re) && Rn(lr);
              }), b(rn, An);
            };
            O($n, (rn) => {
              l().showBothPrices && e(ee) ? rn(vt) : rn(Ut, !1);
            }), b(mt, Ht);
          };
          O(It, (mt) => {
            e(se) && mt(Ft);
          }), y(ot), y(St), b(ye, gt);
        }, $$slots: { default: !0 } });
        var un = L(Dt, 2), ln = (ye) => {
          Ua(ye, { get highlights() {
            return i().highlights;
          }, get isSelected() {
            return x();
          }, get replaceLiquid() {
            return e(oe);
          } });
        };
        O(un, (ye) => {
          i().highlights && ye(ln);
        });
        var sn = L(un, 2), Lt = (ye) => {
          Fl(ye, { get value() {
            return e(F);
          }, onChange: (Xe) => {
            te(F, Xe, !0);
          } });
        };
        O(sn, (ye) => {
          x() && i().quantitySelector && ye(Lt);
        });
        var Ce = L(sn, 2), Re = (ye) => {
          var Xe = Y_();
          let gt;
          Gt(Xe, 23, () => i().bundleProducts, (dt) => dt.id, (dt, yt, ft) => {
            var St = J_(), Bt = _e(St), wt = (Ye) => {
              {
                let ht = d(() => Pe(e(yt), u(), g())), ot = d(() => i().layout || "horizontal");
                mg(Ye, { get dealBar() {
                  return i();
                }, get bundleProduct() {
                  return e(yt);
                }, get product() {
                  return e(ht);
                }, get dealBlock() {
                  return l();
                }, get layout() {
                  return e(ot);
                }, get dealBarSelected() {
                  return x();
                }, get priceRounding() {
                  return e(ae);
                }, get currentVariantId() {
                  return f();
                }, get mainVariantId() {
                  return e(ce);
                }, get sellingPlan() {
                  return m();
                }, get sets() {
                  return e(F);
                }, onChange: (It) => (function(Ft, mt) {
                  const { variant: Ht, product: $n, quantity: vt, variantSelectionPending: Ut } = mt;
                  e(X)[Ft] = { variant: Ht, product: $n, quantity: vt, variantSelectionPending: Ut }, x() && i().bundleProducts.map(({ id: rn }) => rn).every((rn) => e(X)[rn]) && (Ft !== i().bundleProducts[0].id || Ut || D()({ variantId: Ht.id }));
                })(e(yt).id, It) });
              }
            }, Ot = (Ye) => {
              var ht = ze(), ot = _e(ht), It = (Ft) => {
                b(Ft, U_());
              };
              O(ot, (Ft) => {
                r().preview && Ft(It);
              }, !0), b(Ye, ht);
            };
            O(Bt, (Ye) => {
              e(yt).productGID ? Ye(wt) : Ye(Ot, !1);
            });
            var dn = L(Bt, 2), nn = (Ye) => {
              var ht = Z_(), ot = L(w(ht), 2);
              xg(w(ot)), y(ot), ma(2), y(ht), b(Ye, ht);
            };
            O(dn, (Ye) => {
              e(ft) < i().bundleProducts.length - 1 && Ye(nn);
            }), b(dt, St);
          }), y(Xe), ke((dt) => gt = Rt(Xe, 1, "kaching-bundles__bundle-products", null, gt, dt), [() => ({ "kaching-bundles__bundle-products--vertical": i().layout === "vertical", "kaching-bundles__bundle-products--hidden": e(E) })]), b(ye, Xe);
        };
        O(Ce, (ye) => {
          e(se) && ye(Re);
        });
        var tt = L(Ce, 2), it = (ye) => {
          {
            let Xe = d(() => e(ce) ? [e(ce)] : []);
            xi(ye, { get product() {
              return u();
            }, get productPersonalisation() {
              return i().productPersonalisation;
            }, get selectedVariantIds() {
              return e(Xe);
            }, get quantity() {
              return e(F);
            }, get addPersonalisationModal() {
              return l().addPersonalisationModal;
            }, get onPersonalisationsChange() {
              return Z();
            }, get initialValues() {
              return T();
            } });
          }
        };
        O(tt, (ye) => {
          x() && i().productPersonalisation && (l().blockLayout === "vertical" || l().blockLayout === "plain") && ye(it);
        }), y(Vt);
        var st = L(Vt, 2);
        {
          let ye = d(() => i().upsells || []);
          Ui(st, { get dealBlock() {
            return l();
          }, get dealBarId() {
            return i().id;
          }, get upsells() {
            return e(ye);
          }, get otherProducts() {
            return g();
          }, get complementaryProducts() {
            return k();
          }, get dealBarSelected() {
            return x();
          }, get dealSellingPlan() {
            return m();
          }, get sets() {
            return e(F);
          }, onChange: (Xe) => {
            te(C, Xe, !0);
          } });
        }
        var zt = L(st, 2);
        Yi(zt, { get selectedDealBarIndex() {
          return p();
        }, get onChange() {
          return P();
        }, get dealBlock() {
          return l();
        }, get dealBar() {
          return i();
        }, get otherProducts() {
          return g();
        }, get selected() {
          return x();
        }, get sellingPlan() {
          return m();
        }, get progressiveGifts() {
          return l().progressiveGifts;
        } });
        var bt = L(zt, 2);
        {
          let ye = d(() => i().freeGifts || []);
          Hi(bt, { get dealBlock() {
            return l();
          }, get freeGifts() {
            return e(ye);
          }, get freeGiftsSummary() {
            return i().freeGiftsSummary;
          }, get otherProducts() {
            return g();
          }, get dealBarSelected() {
            return x();
          }, get sellingPlan() {
            return m();
          }, get sets() {
            return e(F);
          }, onChange: (Xe) => {
            te(B, Xe, !0);
          } });
        }
        var At = L(bt, 2);
        {
          let ye = d(() => i().multipleGiftsSelectors || []);
          Ji(At, { get dealBlock() {
            return l();
          }, get multipleGiftsSelectors() {
            return e(ye);
          }, get sellingPlan() {
            return m();
          }, get otherProducts() {
            return g();
          }, get sets() {
            return e(F);
          }, onChange: (Xe) => {
            te(S, Xe, !0);
          } });
        }
        b(Le, Je);
      }, $$slots: { default: !0 } });
      var De = L(Oe, 2), Ae = (Le) => {
        Zi(Le, { get showAsSoldOut() {
          return i().showAsSoldOut;
        }, get replaceLiquid() {
          return e(oe);
        } });
      };
      O(De, (Le) => {
        i().showAsSoldOutEnabled && i().showAsSoldOut && Le(Ae);
      }), y(xe), ke((Le) => {
        var nt;
        Me = Rt(xe, 1, "kaching-bundles__bar", null, Me, Le), Ie(xe, "data-deal-bar-id", i().id), Et(xe, e(Ge)), Ie(qe, "name", `kaching-bundles-deal-${(nt = h()) != null ? nt : ""}`), gi(qe, i().id), Ie(qe, "id", e(U)), Pl(qe, x()), qe.disabled = i().showAsSoldOutEnabled;
      }, [() => ({ "kaching-bundles__bar--selected": x(), "kaching-bundles__bar--disabled": !e(q) && r().preview })]), b(M, xe);
    };
    O(fe, (M) => {
      (e(q) || r().preview) && M(We);
    }), b(n, Ve);
    var $e = at(Ze);
    return c(), $e;
  }
  jn(["change"]), Ke(yg, { dealBlock: {}, dealBar: {}, product: {}, otherProducts: {}, complementaryProducts: {}, currentVariantId: {}, componentId: {}, selectedDealBarIndex: {}, selected: {}, sellingPlan: {}, selectedProgressiveGifts: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var e0 = $('<img class="kaching-bundles__mix-and-match-choose-product__product-image" alt=""/>'), t0 = $('<span class="kaching-bundles__mix-and-match-choose-product__product-title"> </span>'), n0 = $('<span class="kaching-bundles__mix-and-match-choose-product__subtitle"><!></span>'), r0 = $('<div class="kaching-bundles__mix-and-match-choose-product__product-price"><!></div>'), a0 = $('<div class="kaching-bundles__mix-and-match-choose-product__product-compare-at-price"><!></div>'), i0 = $('<div class="kaching-bundles__mix-and-match-choose-product__product-price-container"><!> <!></div>'), l0 = $("<div><!> <!></div>"), s0 = $('<div class="kaching-bundles__mix-and-match-choose-product__product"><div class="kaching-bundles__mix-and-match-choose-product__product-container"><!> <div class="kaching-bundles__mix-and-match-choose-product__product-content"><!> <!> <!> <!> <!></div></div> <!></div>');
  function wg(n, t) {
    var r;
    rt(t, !0);
    const a = () => Te(x, "$config", c), s = () => Te(p, "$formatPrice", c), o = () => Te(h, "$translate", c), [c, l] = kt(), i = _(t, "product", 7), u = _(t, "dealBlock", 7), g = _(t, "dealBar", 7), k = _(t, "modal", 7), f = _(t, "onChoose", 7), h = $t(), p = xn(), x = Sn();
    let m = Fe(ut(((r = i().variants.find((W) => W.availableForSale)) == null ? void 0 : r.id) || i().variants[0].id));
    const I = d(() => i().variants.find((W) => W.id === e(m)) || i().variants[0]), P = d(() => u().priceRounding ? { perItem: !1, precision: u().priceRoundingPrecision, v2: a().featureFlags.price_rounding_v2 || !1 } : void 0), A = d(() => g().discountType === "percentage" ? Sa({ discountType: g().discountType, discountValue: g().discountValue, discountQuantity: 1, variantQuantities: [{ variant: e(I), quantity: 1 }], currencyRate: a().currencyRate, priceRounding: e(P), onAmountDiscountExceedsPrice: Dr }) : e(I).price), j = d(() => u().useProductCompareAtPrice && e(I).compareAtPrice ? Math.max(e(I).price, e(I).compareAtPrice) : e(I).price), D = d(() => i().url ? `${i().url}?variant=${e(m)}` : void 0), Q = d(() => yn({ priceFormatter: s(), product: i(), totalFullPrice: e(j), totalDiscountedPrice: e(A), quantity: 1, unitQuantity: null })), Z = d(() => e(Q)(o()(k().subtitle || ""))), T = d(() => k().buttonText);
    function J(W) {
      te(m, W, !0);
    }
    var z = { get product() {
      return i();
    }, set product(W) {
      i(W), v();
    }, get dealBlock() {
      return u();
    }, set dealBlock(W) {
      u(W), v();
    }, get dealBar() {
      return g();
    }, set dealBar(W) {
      g(W), v();
    }, get modal() {
      return k();
    }, set modal(W) {
      k(W), v();
    }, get onChoose() {
      return f();
    }, set onChoose(W) {
      f(W), v();
    } }, G = s0(), ne = w(G), X = w(ne), B = (W) => {
      ar(W, { get url() {
        return e(D);
      }, class: "kaching-bundles__mix-and-match-choose-product__product-image-link", children: (ae, he) => {
        var V = e0();
        Ie(V, "width", 100), Ie(V, "height", 100), ke(() => Ie(V, "src", i().image)), b(ae, V);
      }, $$slots: { default: !0 } });
    };
    O(X, (W) => {
      i().image && W(B);
    });
    var S = L(X, 2), C = w(S);
    ar(C, { get url() {
      return e(D);
    }, class: "kaching-bundles__mix-and-match-choose-product__product-link", children: (W, ae) => {
      var he = t0(), V = w(he, !0);
      y(he), ke(() => pt(V, i().title)), b(W, he);
    }, $$slots: { default: !0 } });
    var F = L(C, 2), U = (W) => {
      var ae = n0();
      je(w(ae), () => e(Z)), y(ae), b(W, ae);
    };
    O(F, (W) => {
      e(Z) && W(U);
    });
    var H = L(F, 2), se = (W) => {
      var ae = i0(), he = w(ae);
      lt(he, () => e(A), (de) => {
        var pe = r0();
        je(w(pe), () => s()(e(A))), y(pe), b(de, pe);
      });
      var V = L(he, 2), N = (de) => {
        var pe = ze();
        lt(_e(pe), () => e(j), (re) => {
          var R = a0();
          je(w(R), () => s()(e(j))), y(R), b(re, R);
        }), b(de, pe);
      };
      O(V, (de) => {
        e(j) && e(j) > e(A) && de(N);
      }), y(ae), b(W, ae);
    };
    O(H, (W) => {
      g().discountType !== "specific" && W(se);
    });
    var E = L(H, 2);
    Sl(E, { get product() {
      return i();
    }, class: "kaching-bundles__mix-and-match-choose-product__product-variant-name" });
    var q = L(E, 2), ie = (W) => {
      var ae = l0(), he = w(ae);
      Pa(he, { get product() {
        return i();
      }, class: "kaching-bundles__mix-and-match-choose-product__product-option-names" }), Yn(L(he, 2), { get product() {
        return i();
      }, get selectedVariantId() {
        return e(m);
      }, onChange: J }), y(ae), b(W, ae);
    };
    O(q, (W) => {
      i().variants.length > 1 && W(ie);
    }), y(S), y(ne), Xt(L(ne, 2), { element: "span", class: "kaching-bundles__mix-and-match-choose-product__product-button", onclick: function() {
      f()({ product: i(), variant: e(I) });
    }, children: (W, ae) => {
      ma();
      var he = Jn();
      ke((V) => pt(he, V), [() => o()(e(T))]), b(W, he);
    }, $$slots: { default: !0 } }), y(G), b(n, G);
    var ue = at(z);
    return l(), ue;
  }
  Ke(wg, { product: {}, dealBlock: {}, dealBar: {}, modal: {}, onChoose: {} }, [], [], !0);
  const o0 = { red: 0, green: 0, blue: 0, alpha: 0.5 }, c0 = { buttonSize: 16, textSize: 14, overlayColor: { red: 0, green: 0, blue: 0, alpha: 0.5 }, priceColor: { red: 0, green: 0, blue: 0, alpha: 1 }, compareAtPriceColor: { red: 128, green: 128, blue: 128, alpha: 1 }, textColor: { red: 0, green: 0, blue: 0, alpha: 1 }, buttonColor: { red: 0, green: 0, blue: 0, alpha: 1 }, buttonTextColor: { red: 255, green: 255, blue: 255, alpha: 1 }, productPhotoSize: 100, heading: "Select product", buttonText: "Choose" };
  var u0 = $('<img alt="Close"/>'), d0 = $('<div class="kaching-bundles__mix-and-match-choose-product__empty-state"> </div>'), g0 = $('<div class="kaching-bundles__mix-and-match-choose-product"><div class="kaching-bundles__mix-and-match-choose-product__header"><h2 class="kaching-bundles__mix-and-match-choose-product__heading"><!></h2> <!></div> <div class="kaching-bundles__mix-and-match-choose-product__products"><!></div></div>');
  function nc(n, t) {
    rt(t, !0);
    const r = () => Te(g, "$translate", a), [a, s] = kt(), o = _(t, "dealBlock", 7), c = _(t, "dealBar", 7), l = _(t, "products", 23, () => []), i = _(t, "onChoose", 7), u = _(t, "onClose", 7), g = $t(), k = d(() => {
      var z;
      return (z = o().mixAndMatchChooseProductModal) != null ? z : c0;
    }), f = d(() => ((z) => mn({ "kaching-mix-and-match-choose-product-button-size": z.buttonSize + "px", "kaching-mix-and-match-choose-product-text-size": z.textSize + "px", "kaching-mix-and-match-choose-product-price-color": Qe(z.priceColor), "kaching-mix-and-match-choose-product-compare-at-price-color": Qe(z.compareAtPriceColor), "kaching-mix-and-match-choose-product-text-color": Qe(z.textColor), "kaching-mix-and-match-choose-product-button-color": Qe(z.buttonColor), "kaching-mix-and-match-choose-product-button-text-color": Qe(z.buttonTextColor), "kaching-mix-and-match-choose-product-photo-size": z.productPhotoSize + "px" }))(e(k)));
    var h = { get dealBlock() {
      return o();
    }, set dealBlock(z) {
      o(z), v();
    }, get dealBar() {
      return c();
    }, set dealBar(z) {
      c(z), v();
    }, get products() {
      return l();
    }, set products(z = []) {
      l(z), v();
    }, get onChoose() {
      return i();
    }, set onChoose(z) {
      i(z), v();
    }, get onClose() {
      return u();
    }, set onClose(z) {
      u(z), v();
    } }, p = g0(), x = w(p), m = w(x), I = w(m), P = (z) => {
      var G = Jn();
      ke((ne) => pt(G, ne), [() => r()(e(k).heading)]), b(z, G);
    };
    O(I, (z) => {
      e(k).heading && z(P);
    }), y(m);
    var A = L(m, 2), j = (z) => {
      Xt(z, { element: "span", class: "kaching-bundles__mix-and-match-choose-product__close", get onclick() {
        return u();
      }, children: (G, ne) => {
        var X = u0();
        ke(() => Ie(X, "src", Eo)), b(G, X);
      }, $$slots: { default: !0 } });
    };
    O(A, (z) => {
      u() && z(j);
    }), y(x);
    var D = L(x, 2), Q = w(D), Z = (z) => {
      var G = d0(), ne = w(G, !0);
      y(G), ke((X) => pt(ne, X), [() => r()("system.no_products_available")]), b(z, G);
    }, T = (z) => {
      var G = ze();
      Gt(_e(G), 17, l, (ne) => ne.id, (ne, X) => {
        wg(ne, { get dealBlock() {
          return o();
        }, get dealBar() {
          return c();
        }, get modal() {
          return e(k);
        }, get product() {
          return e(X);
        }, get onChoose() {
          return i();
        } });
      }), b(z, G);
    };
    O(Q, (z) => {
      l().length === 0 ? z(Z) : z(T, !1);
    }), y(D), y(p), ke(() => Et(p, e(f))), b(n, p);
    var J = at(h);
    return s(), J;
  }
  function h0(n, t) {
    n.target === n.currentTarget && t()();
  }
  Ke(nc, { dealBlock: {}, dealBar: {}, products: {}, onChoose: {}, onClose: {} }, [], [], !0);
  var p0 = $('<div class="kaching-bundles"><div class="kaching-bundles__mix-and-match-choose-product-modal" role="none"><div class="kaching-bundles__mix-and-match-choose-product-modal__content"><!></div></div></div>');
  function Pg(n, t) {
    rt(t, !0);
    const r = _(t, "dealBlock", 7), a = _(t, "dealBar", 7), s = _(t, "products", 23, () => []), o = _(t, "isOpen", 7), c = _(t, "onChoose", 7), l = _(t, "onClose", 7);
    var i = { get dealBlock() {
      return r();
    }, set dealBlock(f) {
      r(f), v();
    }, get dealBar() {
      return a();
    }, set dealBar(f) {
      a(f), v();
    }, get products() {
      return s();
    }, set products(f = []) {
      s(f), v();
    }, get isOpen() {
      return o();
    }, set isOpen(f) {
      o(f), v();
    }, get onChoose() {
      return c();
    }, set onChoose(f) {
      c(f), v();
    }, get onClose() {
      return l();
    }, set onClose(f) {
      l(f), v();
    } }, u = ze(), g = _e(u), k = (f) => {
      Gl(f, { target: "body", children: (h, p) => {
        var x = p0(), m = w(x);
        m.__click = [h0, l];
        var I = w(m);
        nc(w(I), { get dealBlock() {
          return r();
        }, get dealBar() {
          return a();
        }, get products() {
          return s();
        }, get onChoose() {
          return c();
        }, get onClose() {
          return l();
        } }), y(I), y(m), y(x), ke((P) => Et(m, P), [() => (function(P) {
          var A;
          return mn({ "kaching-mix-and-match-choose-product-overlay-color": Qe(((A = P.mixAndMatchChooseProductModal) == null ? void 0 : A.overlayColor) || o0) });
        })(r())]), b(h, x);
      }, $$slots: { default: !0 } });
    };
    return O(g, (f) => {
      o() && f(k);
    }), b(n, u), at(i);
  }
  jn(["click"]), Ke(Pg, { dealBlock: {}, dealBar: {}, products: {}, isOpen: {}, onChoose: {}, onClose: {} }, [], [], !0);
  var b0 = $('<img alt="" class="kaching-bundles__mix-and-match-product__image"/>'), f0 = $('<div class="kaching-bundles__mix-and-match-product__image-placeholder"></div>'), v0 = $('<div class="kaching-bundles__mix-and-match-product__title"> </div>'), _0 = $('<div class="kaching-bundles__mix-and-match-product__pricing"><!></div>'), k0 = $('<div class="kaching-bundles__mix-and-match-product"><!> <div class="kaching-bundles__mix-and-match-product__content"><!> <!> <!> <!></div> <!> <!></div> <!>', 1);
  function Sg(n, t) {
    rt(t, !0);
    const r = () => Te(I, "$translate", a), [a, s] = kt();
    let o = _(t, "dealBlock", 7), c = _(t, "dealBar", 7), l = _(t, "bundleProduct", 7), i = _(t, "product", 7), u = _(t, "swapProducts", 7), g = _(t, "dealBarSelected", 7), k = _(t, "currentVariantId", 7), f = _(t, "mainVariantId", 7), h = _(t, "pricing", 7), p = _(t, "onSwap", 7), x = _(t, "onChange", 7);
    const m = xn(), I = $t(), P = _i();
    let A = Fe(void 0), j = Fe(!1);
    const D = d(() => g() && u().length > 1), Q = d(() => r()(c().buttonText || "Change"));
    function Z() {
      te(j, !0);
    }
    function T(V) {
      te(j, !1), te(A, V.variant.id, !0), P.set(!1), p()(V.product);
    }
    function J() {
      te(j, !1);
    }
    const z = d(() => {
      var V, N;
      return (N = (V = i()) == null ? void 0 : V.variants) != null ? N : [];
    }), G = d(() => {
      var V;
      return (V = c().requireVariantSelectionEnabled) != null && V && e(z).length > 1;
    }), ne = d(() => {
      if (e(A) !== void 0 && e(z).some(({ id: V }) => V === e(A)))
        return e(A);
    }), X = d(() => e(G) && e(ne) === void 0), B = d(() => {
      var V, N;
      return e(A) !== void 0 && e(z).some(({ id: de }) => de === e(A)) ? e(A) : l().productGID === "default" && k() && e(z).some(({ id: de }) => de === k()) ? k() : e(z).length > 0 ? (N = (V = e(z).find((de) => de.availableForSale)) == null ? void 0 : V.id) != null ? N : e(z)[0].id : void 0;
    }), S = d(() => {
      var V;
      return e(B) ? (V = i()) == null ? void 0 : V.variants.find((N) => N.id === e(B)) : void 0;
    }), C = d(() => {
      var V;
      return (V = i()) != null && V.url && e(S) ? `${i().url}?variant=${e(S).id}` : void 0;
    }), F = d(() => {
      var V, N;
      return ((V = e(S)) == null ? void 0 : V.image) || ((N = i()) == null ? void 0 : N.image);
    }), U = d(() => g() && i() && e(z).length > 1 && (e(B) || e(G))), H = d(() => g() && l().productGID !== "default" ? e(C) : void 0), se = d(() => i() ? l().title ? yn({ priceFormatter: Te(m, "$formatPrice", a), product: i(), totalFullPrice: 0, totalDiscountedPrice: 0, quantity: 1, unitQuantity: null })(r()(l().title)) : i().title : "");
    function E(V) {
      te(A, V, !0), P.set(!1);
    }
    let q;
    et(() => {
      e(S) && (e(X), tn(() => {
        x()({ variant: e(S), product: i(), variantSelectionPending: e(X) });
      }));
    }), _r(() => {
      l().productGID, te(A, void 0), q = void 0;
    }), _r(() => {
      if (e(G)) return void (q !== void 0 && e(A) === q && (te(A, void 0), q = void 0));
      const V = l().productGID === "default";
      if (!(V || !o().disableVariantOptionSync)) return;
      const N = V ? k() : f();
      if (!N || !i() || N === q) return;
      const de = q;
      if (q = N, !e(z).some((R) => R.id === N)) return;
      const pe = e(A) === void 0, re = e(A) === de && de !== void 0;
      (pe || re) && te(A, N, !0);
    });
    var ie = { get dealBlock() {
      return o();
    }, set dealBlock(V) {
      o(V), v();
    }, get dealBar() {
      return c();
    }, set dealBar(V) {
      c(V), v();
    }, get bundleProduct() {
      return l();
    }, set bundleProduct(V) {
      l(V), v();
    }, get product() {
      return i();
    }, set product(V) {
      i(V), v();
    }, get swapProducts() {
      return u();
    }, set swapProducts(V) {
      u(V), v();
    }, get dealBarSelected() {
      return g();
    }, set dealBarSelected(V) {
      g(V), v();
    }, get currentVariantId() {
      return k();
    }, set currentVariantId(V) {
      k(V), v();
    }, get mainVariantId() {
      return f();
    }, set mainVariantId(V) {
      f(V), v();
    }, get pricing() {
      return h();
    }, set pricing(V) {
      h(V), v();
    }, get onSwap() {
      return p();
    }, set onSwap(V) {
      p(V), v();
    }, get onChange() {
      return x();
    }, set onChange(V) {
      x(V), v();
    } }, ue = ze(), W = _e(ue), ae = (V) => {
      var N = k0(), de = _e(N), pe = w(de), re = (Pe) => {
        ar(Pe, { get url() {
          return e(H);
        }, class: "kaching-bundles__mix-and-match-product__image-link", children: (Ge, Ze) => {
          var Ve = b0();
          Ie(Ve, "height", 50), Ie(Ve, "width", 50), ke(() => Ie(Ve, "src", e(F))), b(Ge, Ve);
        }, $$slots: { default: !0 } });
      }, R = (Pe) => {
        b(Pe, f0());
      };
      O(pe, (Pe) => {
        e(F) ? Pe(re) : Pe(R, !1);
      });
      var ee = L(pe, 2), ce = w(ee);
      ar(ce, { get url() {
        return e(H);
      }, class: "kaching-bundles__mix-and-match-product__title-link", children: (Pe, Ge) => {
        var Ze = v0(), Ve = w(Ze, !0);
        y(Ze), ke(() => pt(Ve, e(se))), b(Pe, Ze);
      }, $$slots: { default: !0 } });
      var ve = L(ce, 2);
      Ca(ve, { get dealBlock() {
        return o();
      }, get variant() {
        return e(S);
      } });
      var oe = L(ve, 2), Be = (Pe) => {
        Sl(Pe, { get product() {
          return i();
        } });
      };
      O(oe, (Pe) => {
        g() && Pe(Be);
      });
      var be = L(oe, 2), K = (Pe) => {
        {
          let Ge = d(() => {
            var Ve;
            return e(G) ? (Ve = e(ne)) != null ? Ve : null : e(B) || 0;
          }), Ze = d(() => e(G) ? r()("system.select_variant_placeholder") : void 0);
          Yn(Pe, { get product() {
            return i();
          }, get selectedVariantId() {
            return e(Ge);
          }, get placeholderText() {
            return e(Ze);
          }, onChange: E });
        }
      };
      O(be, (Pe) => {
        e(U) && Pe(K);
      }), y(ee);
      var Y = L(ee, 2), ge = (Pe) => {
        var Ge = _0();
        Vs(w(Ge), { get discountedPrice() {
          return h().discountedPrice;
        }, get fullPrice() {
          return h().fullPrice;
        }, unitPrice: null, unitPriceReference: null, ignoreUnitPrice: !0 }), y(Ge), b(Pe, Ge);
      };
      O(Y, (Pe) => {
        h() && Pe(ge);
      });
      var we = L(Y, 2), me = (Pe) => {
        Xt(Pe, { element: "div", class: "kaching-bundles__mix-and-match-product__swap-button", onclick: Z, children: (Ge, Ze) => {
          ma();
          var Ve = Jn();
          ke(() => pt(Ve, e(Q))), b(Ge, Ve);
        }, $$slots: { default: !0 } });
      };
      O(we, (Pe) => {
        e(D) && Pe(me);
      }), y(de), Pg(L(de, 2), { get dealBlock() {
        return o();
      }, get dealBar() {
        return c();
      }, get products() {
        return u();
      }, get isOpen() {
        return e(j);
      }, onChoose: T, onClose: J }), b(V, N);
    };
    O(W, (V) => {
      i() && V(ae);
    }), b(n, ue);
    var he = at(ie);
    return s(), he;
  }
  Ke(Sg, { dealBlock: {}, dealBar: {}, bundleProduct: {}, product: {}, swapProducts: {}, dealBarSelected: {}, currentVariantId: {}, mainVariantId: {}, pricing: {}, onSwap: {}, onChange: {} }, [], [], !0);
  const Bg = (n, t) => {
    if (!t || t.length === 0) return n;
    const r = t.map(en);
    return { ...n, variants: n.variants.filter((a) => r.includes(a.id)) };
  };
  var m0 = Gn('<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 6.5V14.5M6.5 10.5H14.5M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Cg(n) {
    b(n, m0());
  }
  function x0(n, t, r) {
    t()({ dealBarId: r().id, preselected: !1 });
  }
  Ke(Cg, {}, [], [], !0);
  var y0 = $('<img class="kaching-bundles__bar-image" alt=""/>'), w0 = $('<div class="kaching-bundles__bar-radio"></div>'), P0 = $('<span class="kaching-bundles__bar-title"><!></span>'), S0 = $('<span class="kaching-bundles__bar-label"><!></span>'), B0 = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), C0 = $('<div class="kaching-bundles__bar-full-price"><!></div>'), I0 = $("<!> <!>", 1), M0 = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <!></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), z0 = $('<div class="kaching-bundles__mix-and-match-products__placeholder"><span>Select product</span></div>'), $0 = $('<div class="kaching-bundles__mix-and-match-products__divider"><div class="kaching-bundles__mix-and-match-products__divider-line">&ZeroWidthSpace;</div> <div class="kaching-bundles__mix-and-match-products__divider-icon"><!></div> <div class="kaching-bundles__mix-and-match-products__divider-line">&ZeroWidthSpace;</div></div>'), D0 = $("<!> <!>", 1), T0 = $("<div></div>"), V0 = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!></div> <!> <!> <!> <!>', 1), A0 = $('<div><input type="radio"/> <!> <!></div>');
  function Ig(n, t) {
    rt(t, !0);
    const r = () => Te(ne, "$config", o), a = () => Te(z, "$formatPrice", o), s = () => Te(J, "$translate", o), [o, c] = kt(), l = _(t, "dealBlock", 7), i = _(t, "dealBar", 7), u = _(t, "product", 7), g = _(t, "otherProducts", 23, () => []), k = _(t, "complementaryProducts", 23, () => []), f = _(t, "currentVariantId", 7), h = _(t, "componentId", 7), p = _(t, "selectedDealBarIndex", 7), x = _(t, "selected", 7, !1), m = _(t, "sellingPlan", 7), I = _(t, "selectedProgressiveGifts", 23, () => []), P = _(t, "onProgressiveGiftsChange", 7), A = _(t, "onDealBarSelect", 7), j = _(t, "onDealBarDeselect", 7), D = _(t, "onVariantSelect", 7), Q = _(t, "onVariantsChange", 7), Z = _(t, "onPersonalisationsChange", 7), T = _(t, "personalisationInitialValues", 23, () => []), J = $t(), z = xn(), G = On(), ne = Sn();
    let X = Fe(ut({})), B = Fe(ut({}));
    const S = d(() => Object.fromEntries(i().bundleProducts.map((fe) => [fe.id, C(fe).filter(F)])));
    function C(fe) {
      var We;
      const $e = new Map(((We = fe.selectedProducts) != null ? We : []).map((Me) => [en(Me.id), Me.variantGIDs])), M = g().filter((Me) => $e.has(Me.id)).map((Me) => Bg(Me, $e.get(Me.id))), xe = (function(Me) {
        if (!Me) return;
        if (Me === "default") return u();
        const qe = en(Me);
        return g().find((Oe) => Oe.id === qe);
      })(fe.productGID);
      return xe ? [Bg(xe, fe.variantGIDs), ...M.filter((Me) => Me.id !== xe.id)] : M;
    }
    function F(fe) {
      return fe.availableForSale && fe.variants.some((We) => We.availableForSale);
    }
    let U = Fe(ut([])), H = Fe(ut([])), se = Fe(ut([]));
    const E = d(() => `${i().id}_${h()}`), q = d(() => i().bundleProducts.filter(({ productGID: fe }) => fe)), ie = d(() => e(q).every((fe) => ge(fe))), ue = d(() => i().showProductsOnlyWhenSelected && !x()), W = d(() => e(q).every((fe) => {
      var We, $e;
      return (($e = (We = e(S)[fe.id]) == null ? void 0 : We.length) != null ? $e : 0) > 0;
    })), ae = d(() => {
      return l() ? (fe = l(), We = e(X), i().bundleProducts.map(($e) => {
        const M = We[$e.id];
        if (!M) return 0;
        const { variant: xe } = M;
        let Me = xe.price;
        return xe.compareAtPrice && fe.useProductCompareAtPrice && (Me = Math.max(Me, xe.compareAtPrice)), Me;
      }).reduce(($e, M) => $e + M, 0)) : 0;
      var fe, We;
    }), he = d(() => l().dealBars.findIndex((fe) => fe.id === i().id) + 1), V = d(() => Tl(e(ae), [...e(U), ...Vl(e(H)), ...Al(l(), e(he), g(), m(), I(), x())])), N = d(() => l().priceRounding ? { perItem: !1, precision: l().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), de = d(() => l() ? Is(i(), e(X), r().currencyRate, e(N), m()) : 0), pe = d(() => e(V) > e(de)), re = d(() => i().showProductPrices ? (function(fe, We, $e, M, xe, Me) {
      const qe = fe.bundleProducts.filter(({ productGID: nt }) => nt).flatMap((nt) => {
        const Je = We[nt.id];
        if (!Je) return [];
        const Ne = ir(Je.product, Je.variant, xe), Vt = Ne ? Go(Je.variant.price, Ne) : Je.variant.price, { price: Dt, compareAtPrice: un } = Je.variant, ln = Me && un ? Math.max(Dt, un) : Dt;
        return [{ id: nt.id, basisPrice: Vt, fullPrice: ln }];
      }), Oe = qe.reduce((nt, Je) => nt + Je.basisPrice, 0);
      if (Oe === 0) return Object.fromEntries(qe.map((nt) => [nt.id, { discountedPrice: 0, fullPrice: nt.fullPrice }]));
      const De = Is(fe, We, $e, M, xe), Ae = qe.map((nt) => {
        const Je = De * nt.basisPrice / Oe;
        return { ...nt, share: Math.floor(Je), remainder: Je % 1 };
      });
      let Le = De - Ae.reduce((nt, { share: Je }) => nt + Je, 0);
      for (const nt of [...Ae].sort((Je, Ne) => Ne.remainder - Je.remainder)) {
        if (Le <= 0) break;
        nt.share += 1, Le -= 1;
      }
      return Object.fromEntries(Ae.map((nt) => [nt.id, { discountedPrice: nt.share, fullPrice: nt.fullPrice }]));
    })(i(), e(X), r().currencyRate, e(N), m(), l().useProductCompareAtPrice) : void 0), R = d(() => {
      var fe;
      const We = e(q)[0];
      if (We) return (fe = e(X)[We.id]) == null ? void 0 : fe.variant.id;
    }), ee = d(() => yn({ priceFormatter: a(), product: u(), dealBar: i(), totalFullPrice: e(ae), totalCompareAtPrice: e(V), totalDiscountedPrice: e(de), quantity: 1, unitQuantity: null, sellingPlan: m() })), ce = d(() => e(ee)(s()(i().title))), ve = d(() => e(ee)(s()(i().subtitle))), oe = d(() => e(ee)(s()(i().label))), Be = d(() => $l(l(), i()).map((fe) => Qa(fe, s(), e(ee)))), be = d(() => Wa(e(Be))), K = d(() => Te(G, "$getMediaImageUrl", o)(i().mediaImageGID) || ql);
    function Y(fe) {
      x() && (fe.preventDefault(), fe.stopPropagation(), j()());
    }
    function ge(fe) {
      var We, $e;
      return ($e = e(B)[fe.id]) != null ? $e : (We = e(S)[fe.id]) == null ? void 0 : We[0];
    }
    ja(() => {
      x() && A()({ dealBarId: i().id, preselected: !0 });
    }), et(() => {
      x() && (qa(e(X)), qa(e(se)), qa(e(U)), qa(e(H)), m(), tn(() => {
        (function() {
          var fe;
          if (!i().bundleProducts.map(({ id: Ae }) => Ae).every((Ae) => e(X)[Ae])) return;
          const We = [];
          for (const Ae of i().bundleProducts) {
            const Le = e(X)[Ae.id];
            Le && We.push({ id: Ae.id, variant: Le.variant, product: Le.product, quantity: 1, variantSelectionPending: Le.variantSelectionPending });
          }
          if (We.length === 0) return;
          const $e = e(de) + e(se).reduce((Ae, Le) => Ae + Le.discountedPrice, 0), M = e(U).reduce((Ae, Le) => Le.showPrice ? Ae + Le.fullPrice : Ae, 0) + e(H).reduce((Ae, Le) => Ae + Le.fullPrice * Le.quantity, 0), xe = e(ae) + e(se).reduce((Ae, Le) => Ae + Le.fullPrice, 0) + M, Me = Is(i(), e(X), r().currencyRate, e(N), void 0), qe = u().sellingPlans.map((Ae) => ({ sellingPlanId: Ae.id, discountedPrice: Is(i(), e(X), r().currencyRate, e(N), Ae) })), Oe = (fe = i().requireVariantSelectionEnabled) != null && fe, De = Oe ? i().bundleProducts.filter(({ id: Ae }) => {
            var Le;
            return (Le = e(X)[Ae]) == null ? void 0 : Le.variantSelectionPending;
          }).length : 0;
          Q()({ bundleProducts: We, freeGifts: [...e(U), ...e(H)], upsells: e(se), pricing: { discountedPrice: $e, fullPrice: xe, giftValue: M, discountedPricePerItem: e(de), fullPricePerItem: e(ae), discountedPriceWithoutSellingPlan: Me, discountedPricesForSellingPlans: qe }, validation: { requiresItemSelection: Oe, allItemsSelected: De === 0, missingItemsCount: De } });
        })();
      }));
    });
    const we = d(() => i().showAsSoldOutEnabled && i().showAsSoldOut ? Ol(i().showAsSoldOut) : "");
    var me = { get dealBlock() {
      return l();
    }, set dealBlock(fe) {
      l(fe), v();
    }, get dealBar() {
      return i();
    }, set dealBar(fe) {
      i(fe), v();
    }, get product() {
      return u();
    }, set product(fe) {
      u(fe), v();
    }, get otherProducts() {
      return g();
    }, set otherProducts(fe = []) {
      g(fe), v();
    }, get complementaryProducts() {
      return k();
    }, set complementaryProducts(fe = []) {
      k(fe), v();
    }, get currentVariantId() {
      return f();
    }, set currentVariantId(fe) {
      f(fe), v();
    }, get componentId() {
      return h();
    }, set componentId(fe) {
      h(fe), v();
    }, get selectedDealBarIndex() {
      return p();
    }, set selectedDealBarIndex(fe) {
      p(fe), v();
    }, get selected() {
      return x();
    }, set selected(fe = !1) {
      x(fe), v();
    }, get sellingPlan() {
      return m();
    }, set sellingPlan(fe) {
      m(fe), v();
    }, get selectedProgressiveGifts() {
      return I();
    }, set selectedProgressiveGifts(fe = []) {
      I(fe), v();
    }, get onProgressiveGiftsChange() {
      return P();
    }, set onProgressiveGiftsChange(fe) {
      P(fe), v();
    }, get onDealBarSelect() {
      return A();
    }, set onDealBarSelect(fe) {
      A(fe), v();
    }, get onDealBarDeselect() {
      return j();
    }, set onDealBarDeselect(fe) {
      j(fe), v();
    }, get onVariantSelect() {
      return D();
    }, set onVariantSelect(fe) {
      D(fe), v();
    }, get onVariantsChange() {
      return Q();
    }, set onVariantsChange(fe) {
      Q(fe), v();
    }, get onPersonalisationsChange() {
      return Z();
    }, set onPersonalisationsChange(fe) {
      Z(fe), v();
    }, get personalisationInitialValues() {
      return T();
    }, set personalisationInitialValues(fe = []) {
      T(fe), v();
    } }, Pe = ze(), Ge = _e(Pe), Ze = (fe) => {
      var We = A0();
      let $e;
      var M = w(We);
      wa(M), M.__change = [x0, A, i];
      var xe = L(M, 2);
      ki(xe, { get for() {
        return e(E);
      }, get soldOut() {
        return i().showAsSoldOutEnabled;
      }, get borderHost() {
        return e(be);
      }, children: (Oe, De) => {
        var Ae = V0(), Le = _e(Ae);
        Gt(Le, 17, () => e(Be), (it) => it.id, (it, st) => {
          Ba(it, { get badge() {
            return e(st);
          }, get blockLayout() {
            return l().blockLayout;
          } });
        });
        var nt = L(Le, 2), Je = w(nt);
        Xt(Je, { element: "div", class: "kaching-bundles__bar-main", onclick: Y, children: (it, st) => {
          var zt = M0(), bt = _e(zt), At = (Ye) => {
            var ht = y0();
            ke(() => Ie(ht, "src", e(K))), b(Ye, ht);
          }, ye = (Ye) => {
            b(Ye, w0());
          };
          O(bt, (Ye) => {
            i().mediaImageGID ? Ye(At) : Ye(ye, !1);
          });
          var Xe = L(bt, 2), gt = w(Xe), dt = w(gt), yt = w(dt);
          lt(yt, () => e(ce), (Ye) => {
            var ht = P0();
            je(w(ht), () => e(ce)), y(ht), b(Ye, ht);
          });
          var ft = L(yt, 2), St = (Ye) => {
            var ht = ze();
            lt(_e(ht), () => e(oe), (ot) => {
              var It = S0();
              je(w(It), () => e(oe)), y(It), b(ot, It);
            }), b(Ye, ht);
          };
          O(ft, (Ye) => {
            e(oe) && Ye(St);
          }), y(dt);
          var Bt = L(dt, 2), wt = (Ye) => {
            var ht = ze();
            lt(_e(ht), () => e(ve), (ot) => {
              var It = B0();
              je(w(It), () => e(ve)), y(It), b(ot, It);
            }), b(Ye, ht);
          };
          O(Bt, (Ye) => {
            e(ve) && Ye(wt);
          }), y(gt);
          var Ot = L(gt, 2), dn = w(Ot), nn = (Ye) => {
            var ht = I0(), ot = _e(ht);
            lt(ot, () => e(de), (mt) => {
              da(mt, { get amount() {
                return e(de);
              }, showPricesPerItem: !1, get unitLabel() {
                return l().unitLabel;
              } });
            });
            var It = L(ot, 2), Ft = (mt) => {
              var Ht = ze();
              lt(_e(Ht), () => e(V), ($n) => {
                var vt = C0();
                je(w(vt), () => a()(e(V))), y(vt), ke((Ut) => Ie(vt, "data-a11y-label", Ut), [() => s()("system.original_price")]), b($n, vt);
              }), b(mt, Ht);
            };
            O(It, (mt) => {
              e(pe) && mt(Ft);
            }), b(Ye, ht);
          };
          O(dn, (Ye) => {
            e(ie) && Ye(nn);
          }), y(Ot), y(Xe), b(it, zt);
        }, $$slots: { default: !0 } });
        var Ne = L(Je, 2), Vt = (it) => {
          Ua(it, { get highlights() {
            return i().highlights;
          }, get isSelected() {
            return x();
          }, get replaceLiquid() {
            return e(ee);
          } });
        };
        O(Ne, (it) => {
          i().highlights && it(Vt);
        });
        var Dt = L(Ne, 2), un = (it) => {
          var st = T0();
          let zt;
          Gt(st, 23, () => i().bundleProducts, (bt) => bt.id, (bt, At, ye) => {
            var Xe = D0(), gt = _e(Xe), dt = (Bt) => {
              {
                let wt = d(() => ge(e(At))), Ot = d(() => {
                  var dn;
                  return (dn = e(re)) == null ? void 0 : dn[e(At).id];
                });
                Sg(Bt, { get bundleProduct() {
                  return e(At);
                }, get product() {
                  return e(wt);
                }, get swapProducts() {
                  return e(S)[e(At).id];
                }, get dealBlock() {
                  return l();
                }, get dealBar() {
                  return i();
                }, get dealBarSelected() {
                  return x();
                }, get currentVariantId() {
                  return f();
                }, get mainVariantId() {
                  return e(R);
                }, get pricing() {
                  return e(Ot);
                }, onSwap: (dn) => (function(nn, Ye) {
                  e(B)[nn] = Ye;
                })(e(At).id, dn), onChange: (dn) => (function(nn, Ye) {
                  const { variant: ht, product: ot, variantSelectionPending: It } = Ye;
                  e(X)[nn] = { variant: ht, product: ot, variantSelectionPending: It }, x() && i().bundleProducts.map(({ id: Ft }) => Ft).every((Ft) => e(X)[Ft]) && (nn !== i().bundleProducts[0].id || It || D()({ variantId: ht.id }));
                })(e(At).id, dn) });
              }
            }, yt = (Bt) => {
              var wt = ze(), Ot = _e(wt), dn = (nn) => {
                b(nn, z0());
              };
              O(Ot, (nn) => {
                r().preview && nn(dn);
              }, !0), b(Bt, wt);
            };
            O(gt, (Bt) => {
              e(At).productGID ? Bt(dt) : Bt(yt, !1);
            });
            var ft = L(gt, 2), St = (Bt) => {
              var wt = $0(), Ot = L(w(wt), 2);
              Cg(w(Ot)), y(Ot), ma(2), y(wt), b(Bt, wt);
            };
            O(ft, (Bt) => {
              e(ye) < i().bundleProducts.length - 1 && Bt(St);
            }), b(bt, Xe);
          }), y(st), ke((bt) => zt = Rt(st, 1, "kaching-bundles__mix-and-match-products", null, zt, bt), [() => ({ "kaching-bundles__mix-and-match-products--hidden": e(ue) })]), b(it, st);
        };
        O(Dt, (it) => {
          e(ie) && it(un);
        });
        var ln = L(Dt, 2), sn = (it) => {
          {
            let st = d(() => e(R) ? [e(R)] : []);
            xi(it, { get product() {
              return u();
            }, get productPersonalisation() {
              return i().productPersonalisation;
            }, get selectedVariantIds() {
              return e(st);
            }, quantity: 1, get addPersonalisationModal() {
              return l().addPersonalisationModal;
            }, get onPersonalisationsChange() {
              return Z();
            }, get initialValues() {
              return T();
            } });
          }
        };
        O(ln, (it) => {
          x() && i().productPersonalisation && (l().blockLayout === "vertical" || l().blockLayout === "plain") && it(sn);
        }), y(nt);
        var Lt = L(nt, 2);
        {
          let it = d(() => i().upsells || []);
          Ui(Lt, { get dealBlock() {
            return l();
          }, get dealBarId() {
            return i().id;
          }, get upsells() {
            return e(it);
          }, get otherProducts() {
            return g();
          }, get complementaryProducts() {
            return k();
          }, get dealBarSelected() {
            return x();
          }, get dealSellingPlan() {
            return m();
          }, sets: 1, onChange: (st) => {
            te(se, st, !0);
          } });
        }
        var Ce = L(Lt, 2);
        {
          let it = d(() => ({ ...i(), dealBarType: Zt.Bundle, quantitySelector: !1, bundleProducts: i().bundleProducts.map((st) => ({ ...st, quantity: 1, variantGIDs: null, defaultVariantGID: null, mediaImageGID: null, discountType: "default", discountValue: 0 })) }));
          Yi(Ce, { get selectedDealBarIndex() {
            return p();
          }, get onChange() {
            return P();
          }, get dealBlock() {
            return l();
          }, get sellingPlan() {
            return m();
          }, get dealBar() {
            return e(it);
          }, get otherProducts() {
            return g();
          }, get selected() {
            return x();
          }, get progressiveGifts() {
            return l().progressiveGifts;
          } });
        }
        var Re = L(Ce, 2);
        {
          let it = d(() => i().freeGifts || []);
          Hi(Re, { get dealBlock() {
            return l();
          }, get freeGifts() {
            return e(it);
          }, get freeGiftsSummary() {
            return i().freeGiftsSummary;
          }, get otherProducts() {
            return g();
          }, get dealBarSelected() {
            return x();
          }, get sellingPlan() {
            return m();
          }, sets: 1, onChange: (st) => {
            te(U, st, !0);
          } });
        }
        var tt = L(Re, 2);
        {
          let it = d(() => i().multipleGiftsSelectors || []);
          Ji(tt, { get dealBlock() {
            return l();
          }, get multipleGiftsSelectors() {
            return e(it);
          }, get sellingPlan() {
            return m();
          }, get otherProducts() {
            return g();
          }, onChange: (st) => {
            te(H, st, !0);
          } });
        }
        b(Oe, Ae);
      }, $$slots: { default: !0 } });
      var Me = L(xe, 2), qe = (Oe) => {
        Zi(Oe, { get showAsSoldOut() {
          return i().showAsSoldOut;
        }, get replaceLiquid() {
          return e(ee);
        } });
      };
      O(Me, (Oe) => {
        i().showAsSoldOutEnabled && i().showAsSoldOut && Oe(qe);
      }), y(We), ke((Oe) => {
        var De;
        $e = Rt(We, 1, "kaching-bundles__bar", null, $e, Oe), Ie(We, "data-deal-bar-id", i().id), Et(We, e(we)), Ie(M, "name", `kaching-bundles-deal-${(De = h()) != null ? De : ""}`), gi(M, i().id), Ie(M, "id", e(E)), Pl(M, x()), M.disabled = i().showAsSoldOutEnabled;
      }, [() => ({ "kaching-bundles__bar--selected": x(), "kaching-bundles__bar--disabled": !e(W) && r().preview })]), b(fe, We);
    };
    O(Ge, (fe) => {
      (e(W) || r().preview) && fe(Ze);
    }), b(n, Pe);
    var Ve = at(me);
    return c(), Ve;
  }
  jn(["change"]), Ke(Ig, { dealBlock: {}, dealBar: {}, product: {}, otherProducts: {}, complementaryProducts: {}, currentVariantId: {}, componentId: {}, selectedDealBarIndex: {}, selected: {}, sellingPlan: {}, selectedProgressiveGifts: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var q0 = Gn('<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.2008 16C27.2008 18.9705 26.0208 21.8192 23.9204 23.9196C21.82 26.0201 18.9712 27.2 16.0008 27.2C13.0304 27.2 10.1816 26.0201 8.08119 23.9196C5.98078 21.8192 4.80078 18.9705 4.80078 16C4.80078 13.0296 5.98078 10.1809 8.08119 8.08045C10.1816 5.98005 13.0304 4.80005 16.0008 4.80005C18.9712 4.80005 21.82 5.98005 23.9204 8.08045C26.0208 10.1809 27.2008 13.0296 27.2008 16ZM10.0008 16C10.0008 15.6818 10.1272 15.3766 10.3523 15.1515C10.5773 14.9265 10.8825 14.8 11.2008 14.8H14.8008V11.2C14.8008 10.8818 14.9272 10.5766 15.1523 10.3515C15.3773 10.1265 15.6825 10 16.0008 10C16.319 10 16.6243 10.1265 16.8493 10.3515C17.0744 10.5766 17.2008 10.8818 17.2008 11.2V14.8H20.8008C21.119 14.8 21.4243 14.9265 21.6493 15.1515C21.8744 15.3766 22.0008 15.6818 22.0008 16C22.0008 16.3183 21.8744 16.6235 21.6493 16.8486C21.4243 17.0736 21.119 17.2 20.8008 17.2H17.2008V20.8C17.2008 21.1183 17.0744 21.4235 16.8493 21.6486C16.6243 21.8736 16.319 22 16.0008 22C15.6825 22 15.3773 21.8736 15.1523 21.6486C14.9272 21.4235 14.8008 21.1183 14.8008 20.8V17.2H11.2008C10.8825 17.2 10.5773 17.0736 10.3523 16.8486C10.1272 16.6235 10.0008 16.3183 10.0008 16Z" fill="currentColor"></path></svg>');
  function Mg(n, t) {
    rt(t, !0);
    let r = _(t, "class", 7);
    var a = { get class() {
      return r();
    }, set class(o) {
      r(o), v();
    } }, s = q0();
    return ke(() => Rt(s, 0, qi(r()))), b(n, s), at(a);
  }
  Ke(Mg, { class: {} }, [], [], !0);
  const G0 = (n) => {
    const { collectionBreaks: t, colors: r, cornerRadius: a } = n;
    return t ? mn({ "kaching-collection-breaks-product-photo-size": t.productPhotoSize + "px", "kaching-collection-breaks-button-color": t.buttonColor && Qe(t.buttonColor), "kaching-collection-breaks-product-title-color": Qe(r.title), "kaching-collection-breaks-image-border-radius": (a || 0) / 2 + "px" }) : "";
  };
  function O0(n, t) {
    n.target === n.currentTarget && te(t, !1);
  }
  var F0 = $('<img class="kaching-bundles__collection-product__image" alt=""/>'), L0 = $('<span class="kaching-bundles__collection-product__title"> </span>'), E0 = $("<!> <!>", 1), j0 = $('<img alt=""/>'), R0 = $('<div class="kaching-bundles__collection-product"><div class="kaching-bundles__collection-product__main"><!> <div class="kaching-bundles__collection-product__content"><!> <!> <!> <!></div></div> <!></div>'), N0 = $('<img class="kaching-bundles__collection-product__image" alt="" height="40" width="40"/>'), Q0 = $('<div class="kaching-bundles"><div class="kaching-bundles__choose-product-modal" role="none"><div class="kaching-bundles__choose-product-modal__content"><!></div></div></div>'), W0 = $('<div><div class="kaching-bundles__collection-product__main"><!> <!></div> <!></div>');
  function rc(n, t) {
    rt(t, !0);
    const r = () => Te(p, "$config", a), [a, s] = kt(), o = _(t, "dealBlock", 7), c = _(t, "dealBar", 7), l = _(t, "mainProduct", 7, null), i = _(t, "products", 7), u = _(t, "selectedProductVariant", 7, null), g = _(t, "onChange", 7), k = _(t, "onRemove", 7), f = $t(), h = On(), p = Sn(), x = _i();
    let m = Fe(!1);
    const I = d(() => o().collectionBreaks), P = d(() => {
      var H;
      return ((H = u()) == null ? void 0 : H.product) || l();
    }), A = d(() => {
      var H, se;
      return ((H = u()) == null ? void 0 : H.variant) || ((se = e(P)) == null ? void 0 : se.variants[0]) || null;
    }), j = d(() => Te(h, "$getMediaImageUrl", a)(e(I).mediaImageGID)), D = d(() => Te(f, "$translate", a)(e(I).buttonText)), Q = d(() => e(I).requireItemSelectionAlert), Z = d(() => e(I).requireItemSelectionEnabled), T = d(() => r().preview && r().previewAlerts || Te(x, "$requireSelectionError", a)), J = d(() => {
      var H, se;
      return (H = e(P)) != null && H.url ? `${e(P).url}?variant=${(se = e(A)) == null ? void 0 : se.id}` : void 0;
    });
    function z(H) {
      te(m, !1), g()(H);
    }
    function G() {
      var H;
      (H = k()) == null || H();
    }
    function ne(H) {
      const se = e(P).variants.find((E) => E.id === H);
      se && g()({ product: e(P), variant: se });
    }
    var X = { get dealBlock() {
      return o();
    }, set dealBlock(H) {
      o(H), v();
    }, get dealBar() {
      return c();
    }, set dealBar(H) {
      c(H), v();
    }, get mainProduct() {
      return l();
    }, set mainProduct(H = null) {
      l(H), v();
    }, get products() {
      return i();
    }, set products(H) {
      i(H), v();
    }, get selectedProductVariant() {
      return u();
    }, set selectedProductVariant(H = null) {
      u(H), v();
    }, get onChange() {
      return g();
    }, set onChange(H) {
      g(H), v();
    }, get onRemove() {
      return k();
    }, set onRemove(H) {
      k(H), v();
    } }, B = ze(), S = _e(B), C = (H) => {
      var se = R0(), E = w(se), q = w(E);
      {
        let pe = d(() => l() ? void 0 : e(J));
        ar(q, { get url() {
          return e(pe);
        }, class: "kaching-bundles__collection-product__link", children: (re, R) => {
          var ee = F0();
          ke(() => Ie(ee, "src", e(A).image || e(P).image)), b(re, ee);
        }, $$slots: { default: !0 } });
      }
      var ie = L(q, 2), ue = w(ie), W = (pe) => {
        {
          let re = d(() => l() ? void 0 : e(J));
          ar(pe, { get url() {
            return e(re);
          }, class: "kaching-bundles__collection-product__link", children: (R, ee) => {
            var ce = L0(), ve = w(ce, !0);
            y(ce), ke(() => pt(ve, e(P).title)), b(R, ce);
          }, $$slots: { default: !0 } });
        }
      };
      O(ue, (pe) => {
        e(I).showProductName && pe(W);
      });
      var ae = L(ue, 2);
      Sl(ae, { get product() {
        return e(P);
      } });
      var he = L(ae, 2), V = (pe) => {
        var re = E0(), R = _e(re);
        Pa(R, { get product() {
          return e(P);
        } });
        var ee = L(R, 2);
        {
          let ce = d(() => {
            var ve;
            return (ve = e(A)) == null ? void 0 : ve.id;
          });
          Yn(ee, { get product() {
            return e(P);
          }, get selectedVariantId() {
            return e(ce);
          }, onChange: ne });
        }
        b(pe, re);
      };
      O(he, (pe) => {
        e(P).variants.length > 1 && pe(V);
      }), Ca(L(he, 2), { get dealBlock() {
        return o();
      }, get variant() {
        return e(A);
      } }), y(ie), y(E);
      var N = L(E, 2), de = (pe) => {
        Xt(pe, { element: "div", class: "kaching-bundles__collection-product__remove-button", "aria-label": "Remove product", onclick: G, children: (re, R) => {
          var ee = j0();
          ke(() => Ie(ee, "src", "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), b(re, ee);
        }, $$slots: { default: !0 } });
      };
      O(N, (pe) => {
        l() || pe(de);
      }), y(se), b(H, se);
    }, F = (H) => {
      var se = W0();
      let E;
      var q = w(se), ie = w(q);
      Xt(ie, { element: "div", class: "kaching-bundles__collection-product__choose-product-image", onclick: () => {
        te(m, !0);
      }, children: (V, N) => {
        var de = ze(), pe = _e(de), re = (ee) => {
          var ce = ze(), ve = _e(ce), oe = (Be) => {
            var be = N0();
            ke(() => Ie(be, "src", e(j))), b(Be, be);
          };
          O(ve, (Be) => {
            e(j) && Be(oe);
          }), b(ee, ce);
        }, R = (ee) => {
          Mg(ee, { class: "kaching-bundles__collection-product__image kaching-bundles__collection-product__image--default" });
        };
        O(pe, (ee) => {
          e(I).mediaImageGID ? ee(re) : ee(R, !1);
        }), b(V, de);
      }, $$slots: { default: !0 } });
      var ue = L(ie, 2), W = (V) => {
        Xt(V, { element: "div", class: "kaching-bundles__collection-product__choose-product-button", onclick: () => {
          te(m, !0);
        }, children: (N, de) => {
          ma();
          var pe = Jn();
          ke(() => pt(pe, e(D))), b(N, pe);
        }, $$slots: { default: !0 } });
      };
      O(ue, (V) => {
        e(D) && V(W);
      }), y(q);
      var ae = L(q, 2), he = (V) => {
        Gl(V, { target: "body", children: (N, de) => {
          var pe = Q0(), re = w(pe);
          re.__click = [O0, m];
          var R = w(re);
          jo(w(R), { get dealBlock() {
            return o();
          }, get dealBar() {
            return c();
          }, get products() {
            return i();
          }, onChoose: z, onClose: () => {
            te(m, !1);
          } }), y(R), y(re), y(pe), ke((ee) => Et(re, ee), [() => (function(ee) {
            return mn({ "kaching-choose-product-overlay-color": Qe(ee.chooseProductModal.overlayColor) });
          })(o())]), b(N, pe);
        }, $$slots: { default: !0 } });
      };
      O(ae, (V) => {
        e(m) && V(he);
      }), y(se), ke((V) => E = Rt(se, 1, "kaching-bundles__collection-product", null, E, V), [() => ({ "kaching-bundles__collection-product--require-selection": e(T) && e(Z) && e(Q) })]), b(H, se);
    };
    O(S, (H) => {
      e(P) && e(A) ? H(C) : H(F, !1);
    }), b(n, B);
    var U = at(X);
    return s(), U;
  }
  jn(["click"]), Ke(rc, { dealBlock: {}, dealBar: {}, mainProduct: {}, products: {}, selectedProductVariant: {}, onChange: {}, onRemove: {} }, [], [], !0);
  const ac = Wr({});
  function As(n, t) {
    ac.update((r) => ({ ...r, [n]: t }));
  }
  function H0(n, t, r, a) {
    t()({ dealBarId: r().id, dealBarQuantity: a(r()), preselected: !1 });
  }
  var U0 = $('<img class="kaching-bundles__bar-image" alt=""/>'), Z0 = $('<div class="kaching-bundles__bar-radio"></div>'), J0 = $('<span class="kaching-bundles__bar-title"><!></span>'), Y0 = $('<span class="kaching-bundles__bar-label"><!></span>'), K0 = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), X0 = $('<div class="kaching-bundles__bar-full-price"><!></div>'), ek = $('<div class="kaching-bundles__bar-price"><!></div>'), tk = $('<div class="kaching-bundles__bar-full-price"><!></div>'), nk = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), rk = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), ak = $('<div class="kaching-bundles__bar-full-price"><!></div>'), ik = $("<!> <!>", 1), lk = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <!></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), sk = $('<div class="kaching-bundles__bar-selling-plan"><!></div>'), ok = $('<div class="kaching-bundles__bar-collection-products"></div>'), ck = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!> <!></div> <!> <!> <!> <!>', 1), uk = $('<div><input type="radio"/> <!> <!></div>');
  function zg(n, t) {
    rt(t, !0);
    const r = () => Te(C, "$config", c), a = () => Te(ac, "$chosenCollectionBreaksProducts", c), s = () => Te(B, "$formatPrice", c), o = () => Te(ne, "$translate", c), [c, l] = kt();
    let i = _(t, "dealBlock", 7), u = _(t, "dealBar", 7), g = _(t, "product", 7), k = _(t, "collectionBreaksProducts", 23, () => []), f = _(t, "otherProducts", 23, () => []), h = _(t, "selectedDealBarIndex", 7, null), p = _(t, "complementaryProducts", 23, () => []), x = _(t, "customQuantity", 7, void 0), m = _(t, "currentVariantId", 7, void 0), I = _(t, "componentId", 7), P = _(t, "selected", 7, !1), A = _(t, "globalSellingPlan", 7, void 0), j = _(t, "selectedProgressiveGifts", 23, () => []), D = _(t, "onDealBarSelect", 7), Q = _(t, "onDealBarDeselect", 7), Z = _(t, "onVariantSelect", 7), T = _(t, "onVariantsChange", 7), J = _(t, "onPersonalisationsChange", 7), z = _(t, "personalisationInitialValues", 23, () => []), G = _(t, "onProgressiveGiftsChange", 7);
    const ne = $t(), X = _i(), B = xn(), S = On(), C = Sn();
    let F = Fe(ut([])), U = Fe(ut([])), H = Fe(ut([]));
    const se = new Yd(), E = d(() => {
      var Ce, Re;
      return (Re = (Ce = i().collectionBreaks) == null ? void 0 : Ce.autoFillNotChosenItems) != null && Re;
    }), q = d(() => i().priceRounding ? { perItem: i().showPricesPerItem, precision: i().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), ie = d(() => {
      var Ce, Re;
      return i() && ((Re = (Ce = i().defaultVariantsV2) == null ? void 0 : Ce.find((tt) => en(tt.productGID) === g().id && tt.dealBarId === u().id)) == null ? void 0 : Re.variantGIDs) || [];
    });
    let ue = d(() => V(u())), W = Fe(ut(V(u())));
    _r(() => {
      te(W, e(ue), !0);
    });
    const ae = d(() => x() || e(W)), he = d(() => Math.max(1, Math.floor(e(ae) / e(ue))));
    function V(Ce) {
      return Ce.dealBarType === Zt.Bxgy ? Ce.buyQuantity + Ce.getQuantity : Number(Ce.quantity);
    }
    et(() => {
      m() && tn(() => {
        (function(Ce, Re) {
          if (Object.keys(a()).length === 0 && Ce[0]) {
            const it = en(Ce[0]), st = g().variants.find((zt) => zt.id == it);
            if (st) return void As(0, { product: g(), variant: st });
          }
          const tt = g().variants.find((it) => it.id == Re);
          if (tt) return void As(0, { product: g(), variant: tt });
          Object.keys(a()).length === 0 && g().variants[0] && As(0, { product: g(), variant: g().variants[0] });
        })(e(ie), m());
      });
    }), et(() => {
      P() || se.clear();
    });
    const N = d(() => k().length === 0 || k().some((Ce) => Ce.id === g().id)), de = d(() => {
      const Ce = Object.fromEntries(Object.entries(a()).filter(([tt]) => Number(tt) < e(ae)));
      if (!P() || !e(E)) return Ce;
      const Re = { ...Ce };
      for (let tt = 1; tt < e(ae); tt++) Re[tt] || se.has(tt) || (e(N) && Ce[0] ? Re[tt] = { product: g(), variant: Ce[0].variant } : Ce[1] && (Re[tt] = { product: Ce[1].product, variant: Ce[1].variant }));
      return Re;
    }), pe = d(() => P() ? Object.values(e(de)).map((Ce) => ({ variant: Ce.variant, quantity: 1 })) : []), re = d(() => (function({ selectedProductVariants: Ce, mainProductIsInCollection: Re, collectionBreaksProducts: tt, dealBlock: it, quantity: st }) {
      var zt;
      const bt = Ce.map((dt) => ({ quantity: 1, variant: dt.variant }));
      if (bt.length === 0 || bt.length >= st || (zt = it.collectionBreaks) != null && zt.showChosenProductsPriceOnly) return bt;
      const At = st - bt.length;
      if (Re) {
        const dt = Array.from({ length: At }, () => bt[0]);
        return [...bt, ...dt];
      }
      const ye = tt.flatMap((dt) => dt.variants).filter((dt) => dt.availableForSale);
      if (ye.length === 0) return bt;
      const Xe = ye.reduce((dt, yt) => yt.price < dt.price ? yt : dt, ye[0]), gt = Array.from({ length: At }, () => ({ quantity: 1, variant: Xe }));
      return [...bt, ...gt];
    })({ selectedProductVariants: Object.values(e(de)), mainProductIsInCollection: e(N), collectionBreaksProducts: k(), dealBlock: i(), quantity: e(ae) }));
    let R = Fe(void 0);
    const ee = d(() => zl(g(), e(re).map((Ce) => Ce.variant))), ce = d(() => {
      var Ce, Re;
      return (u().sellingPlanEnabled || i().subscriptionsEnabled && ((Ce = i().subscriptions) == null ? void 0 : Ce.layout) === "link" && ((Re = i().subscriptions) == null ? void 0 : Re.subscribeByDefault)) && (!i().subscriptionsEnabled || !!A());
    }), ve = d(() => e(ce) ? Oo(u(), e(ee), e(R)) : void 0), oe = d(() => Fo(e(ve), A(), e(ee), g().requiresSellingPlan)), Be = d(() => Object.entries(e(de)).sort(([Ce], [Re]) => Number(Ce) - Number(Re)).map(([Ce, Re]) => ({ key: Ce, product: Re.product, variant: Re.variant }))), be = d(() => (function(Ce, Re, tt) {
      return tt.map(({ variant: st, quantity: zt }) => {
        let bt = st.price;
        const At = Ce.useProductCompareAtPrice || (Re.dealBarType === void 0 || Re.dealBarType === Zt.QuantityBreak) && Re.discountType === "default";
        return st.compareAtPrice && At && (bt = Math.max(bt, st.compareAtPrice)), bt * zt;
      }).reduce((st, zt) => st + zt, 0);
    })(i(), u(), e(re))), K = d(() => i().dealBars.findIndex((Ce) => Ce.id === u().id) + 1), Y = d(() => Tl(e(be), [...e(F), ...Vl(e(U)), ...Al(i(), e(K), f(), e(oe), j(), P())])), ge = d(() => Math.ceil(e(be) / e(re).length)), we = d(() => Qo(e(ae) === 1, e(Y), e(ge))), me = d(() => i() && $e(e(re), e(oe))), Pe = d(() => yn({ priceFormatter: s(), product: g(), selectedVariants: e(pe), dealBar: u(), totalFullPrice: e(be), totalCompareAtPrice: e(Y), totalDiscountedPrice: e(me), quantity: e(ae), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: Vr(e(re)), sellingPlan: e(oe) })), Ge = d(() => e(Pe)(o()(u().title))), Ze = d(() => e(Pe)(o()(u().subtitle))), Ve = d(() => e(Pe)(o()(u().label))), fe = d(() => $l(i(), u()).map((Ce) => Qa(Ce, o(), e(Pe)))), We = d(() => Wa(e(fe)));
    function $e(Ce, Re) {
      switch (u().dealBarType) {
        case void 0:
        case Zt.QuantityBreak:
          return Dd(u(), Ce, r().currencyRate, e(q), Re, r().featureFlags.percentage_cents_rounding_workaround, Dr);
        case Zt.Bxgy:
          return Td(u(), Ce, r().currencyRate, e(q), Re, Dr);
      }
    }
    const M = d(() => Math.ceil(e(me) / e(re).length)), xe = d(() => e(Y) > e(me)), Me = d(() => `${u().id}_${I()}`);
    function qe(Ce) {
      P() && (Ce.preventDefault(), Ce.stopPropagation(), Q()());
    }
    ja(() => {
      P() && D()({ dealBarId: u().id, dealBarQuantity: V(u()), preselected: !0 });
    });
    const Oe = d(() => Te(S, "$getMediaImageUrl", c)(u().mediaImageGID) || ql);
    et(() => {
      var Ce;
      P() && Object.keys(e(de)).length > 0 && (e(H), e(F), e(U), e(oe), (Ce = i().collectionBreaks) == null || Ce.requireItemSelectionEnabled, tn(() => {
        (function() {
          var Re, tt;
          const it = Object.values(e(de)).map((ft) => ({ variant: ft.variant, product: ft.product, quantity: 1 })), st = e(me) + e(H).reduce((ft, St) => ft + St.discountedPrice, 0), zt = e(F).reduce((ft, St) => St.showPrice ? ft + St.fullPrice : ft, 0) + e(U).reduce((ft, St) => ft + St.fullPrice * St.quantity, 0), bt = e(be) + e(H).reduce((ft, St) => ft + St.fullPrice, 0) + zt, At = $e(e(re), void 0), ye = g().sellingPlans.map((ft) => ({ sellingPlanId: ft.id, discountedPrice: $e(e(re), ft) })), Xe = (tt = (Re = i().collectionBreaks) == null ? void 0 : Re.requireItemSelectionEnabled) != null && tt, gt = it.length, dt = !Xe || gt >= e(ae), yt = Xe ? Math.max(0, e(ae) - gt) : 0;
          T()({ variants: it, personalisationItems: e(Be), freeGifts: [...e(F), ...e(U)], upsells: e(H), dealBarSellingPlan: e(ve), pricing: { discountedPrice: st, fullPrice: bt, giftValue: zt, discountedPricePerItem: e(M), fullPricePerItem: e(ge), discountedPriceWithoutSellingPlan: At, discountedPricesForSellingPlans: ye }, validation: { requiresItemSelection: Xe, allItemsSelected: dt, missingItemsCount: yt } });
        })();
      }));
    });
    const De = d(() => u().showAsSoldOutEnabled && u().showAsSoldOut ? Ol(u().showAsSoldOut) : ""), Ae = d(() => [G0(i()), e(De)].filter(Boolean).join(";"));
    function Le(Ce, Re) {
      Ce === 0 && Z()({ variantId: Re.variant.id }), As(Ce, Re), X.set(!1), e(E) && se.delete(Ce);
    }
    function nt(Ce) {
      (function(Re) {
        ac.update((tt) => {
          const { [Re]: it, ...st } = tt;
          return st;
        });
      })(Ce), e(E) && se.add(Ce);
    }
    var Je = { get dealBlock() {
      return i();
    }, set dealBlock(Ce) {
      i(Ce), v();
    }, get dealBar() {
      return u();
    }, set dealBar(Ce) {
      u(Ce), v();
    }, get product() {
      return g();
    }, set product(Ce) {
      g(Ce), v();
    }, get collectionBreaksProducts() {
      return k();
    }, set collectionBreaksProducts(Ce = []) {
      k(Ce), v();
    }, get otherProducts() {
      return f();
    }, set otherProducts(Ce = []) {
      f(Ce), v();
    }, get selectedDealBarIndex() {
      return h();
    }, set selectedDealBarIndex(Ce = null) {
      h(Ce), v();
    }, get complementaryProducts() {
      return p();
    }, set complementaryProducts(Ce = []) {
      p(Ce), v();
    }, get customQuantity() {
      return x();
    }, set customQuantity(Ce = void 0) {
      x(Ce), v();
    }, get currentVariantId() {
      return m();
    }, set currentVariantId(Ce = void 0) {
      m(Ce), v();
    }, get componentId() {
      return I();
    }, set componentId(Ce) {
      I(Ce), v();
    }, get selected() {
      return P();
    }, set selected(Ce = !1) {
      P(Ce), v();
    }, get globalSellingPlan() {
      return A();
    }, set globalSellingPlan(Ce = void 0) {
      A(Ce), v();
    }, get selectedProgressiveGifts() {
      return j();
    }, set selectedProgressiveGifts(Ce = []) {
      j(Ce), v();
    }, get onDealBarSelect() {
      return D();
    }, set onDealBarSelect(Ce) {
      D(Ce), v();
    }, get onDealBarDeselect() {
      return Q();
    }, set onDealBarDeselect(Ce) {
      Q(Ce), v();
    }, get onVariantSelect() {
      return Z();
    }, set onVariantSelect(Ce) {
      Z(Ce), v();
    }, get onVariantsChange() {
      return T();
    }, set onVariantsChange(Ce) {
      T(Ce), v();
    }, get onPersonalisationsChange() {
      return J();
    }, set onPersonalisationsChange(Ce) {
      J(Ce), v();
    }, get personalisationInitialValues() {
      return z();
    }, set personalisationInitialValues(Ce = []) {
      z(Ce), v();
    }, get onProgressiveGiftsChange() {
      return G();
    }, set onProgressiveGiftsChange(Ce) {
      G(Ce), v();
    } }, Ne = uk();
    let Vt;
    var Dt = w(Ne);
    wa(Dt), Dt.__change = [H0, D, u, V];
    var un = L(Dt, 2);
    ki(un, { get for() {
      return e(Me);
    }, get soldOut() {
      return u().showAsSoldOutEnabled;
    }, get borderHost() {
      return e(We);
    }, children: (Ce, Re) => {
      var tt = ck(), it = _e(tt);
      Gt(it, 17, () => e(fe), (Ye) => Ye.id, (Ye, ht) => {
        Ba(Ye, { get badge() {
          return e(ht);
        }, get blockLayout() {
          return i().blockLayout;
        } });
      });
      var st = L(it, 2), zt = w(st);
      Xt(zt, { element: "div", class: "kaching-bundles__bar-main", onclick: qe, children: (Ye, ht) => {
        var ot = lk(), It = _e(ot), Ft = (qt) => {
          var Nt = U0();
          ke(() => Ie(Nt, "src", e(Oe))), b(qt, Nt);
        }, mt = (qt) => {
          b(qt, Z0());
        };
        O(It, (qt) => {
          u().mediaImageGID ? qt(Ft) : qt(mt, !1);
        });
        var Ht = L(It, 2), $n = w(Ht), vt = w($n), Ut = w(vt);
        lt(Ut, () => e(Ge), (qt) => {
          var Nt = J0();
          je(w(Nt), () => e(Ge)), y(Nt), b(qt, Nt);
        });
        var rn = L(Ut, 2), An = (qt) => {
          var Nt = ze();
          lt(_e(Nt), () => e(Ve), (pn) => {
            var an = Y0();
            je(w(an), () => e(Ve)), y(an), b(pn, an);
          }), b(qt, Nt);
        };
        O(rn, (qt) => {
          e(Ve) && qt(An);
        }), y(vt);
        var Jt = L(vt, 2), Wn = (qt) => {
          var Nt = ze();
          lt(_e(Nt), () => e(Ze), (pn) => {
            var an = K0();
            je(w(an), () => e(Ze)), y(an), b(pn, an);
          }), b(qt, Nt);
        };
        O(Jt, (qt) => {
          e(Ze) && qt(Wn);
        }), y($n);
        var lr = L($n, 2), Rn = w(lr), qn = (qt) => {
          var Nt = rk(), pn = _e(Nt), an = w(pn);
          lt(an, () => e(M), (bn) => {
            da(bn, { get amount() {
              return e(M);
            }, get showPricesPerItem() {
              return i().showPricesPerItem;
            }, get unitLabel() {
              return i().unitLabel;
            } });
          });
          var Hn = L(an, 2), Bn = (bn) => {
            var Fn = ze();
            lt(_e(Fn), () => e(we), (Zr) => {
              var Ct = X0();
              je(w(Ct), () => s()(e(we))), y(Ct), ke((on) => Ie(Ct, "data-a11y-label", on), [() => o()("system.original_price")]), b(Zr, Ct);
            }), b(bn, Fn);
          };
          O(Hn, (bn) => {
            e(xe) && bn(Bn);
          }), y(pn);
          var Cn = L(pn, 2), Dn = (bn) => {
            var Fn = nk(), Zr = w(Fn);
            lt(Zr, () => e(me), (fn) => {
              var hn = ek();
              je(w(hn), () => s()(e(me))), y(hn), ke((Ar) => Ie(hn, "data-a11y-label", Ar), [() => o()("system.price")]), b(fn, hn);
            });
            var Ct = L(Zr, 2), on = (fn) => {
              var hn = ze();
              lt(_e(hn), () => e(Y), (Ar) => {
                var or = tk();
                je(w(or), () => s()(e(Y))), y(or), ke((qr) => Ie(or, "data-a11y-label", qr), [() => o()("system.original_price")]), b(Ar, or);
              }), b(fn, hn);
            };
            O(Ct, (fn) => {
              e(xe) && fn(on);
            }), y(Fn), b(bn, Fn);
          };
          O(Cn, (bn) => {
            e(ae) > 1 && bn(Dn);
          }), b(qt, Nt);
        }, sr = (qt) => {
          var Nt = ik(), pn = _e(Nt);
          lt(pn, () => e(me), (Bn) => {
            {
              let Cn = d(() => i().showPricesPerItem ? e(M) : e(me));
              da(Bn, { get amount() {
                return e(Cn);
              }, get showPricesPerItem() {
                return i().showPricesPerItem;
              }, get unitLabel() {
                return i().unitLabel;
              } });
            }
          });
          var an = L(pn, 2), Hn = (Bn) => {
            var Cn = ze();
            lt(_e(Cn), () => i().showPricesPerItem ? e(we) : e(Y), (Dn) => {
              var bn = ak();
              je(w(bn), () => s()(i().showPricesPerItem ? e(we) : e(Y))), y(bn), ke((Fn) => Ie(bn, "data-a11y-label", Fn), [() => o()("system.original_price")]), b(Dn, bn);
            }), b(Bn, Cn);
          };
          O(an, (Bn) => {
            e(xe) && Bn(Hn);
          }), b(qt, Nt);
        };
        O(Rn, (qt) => {
          i().showBothPrices ? qt(qn) : qt(sr, !1);
        }), y(lr), y(Ht), b(Ye, ot);
      }, $$slots: { default: !0 } });
      var bt = L(zt, 2), At = (Ye) => {
        Ua(Ye, { get highlights() {
          return u().highlights;
        }, get isSelected() {
          return P();
        }, get replaceLiquid() {
          return e(Pe);
        } });
      };
      O(bt, (Ye) => {
        u().highlights && Ye(At);
      });
      var ye = L(bt, 2), Xe = (Ye) => {
        var ht = sk(), ot = w(ht);
        {
          let It = d(() => e(ve) || e(ee)[0]);
          Ha(ot, { get sellingPlans() {
            return e(ee);
          }, get selectedSellingPlan() {
            return e(It);
          }, onChange: (Ft) => {
            te(R, Ft, !0);
          } });
        }
        y(ht), b(Ye, ht);
      };
      O(ye, (Ye) => {
        P() && e(ce) && !u().sellingPlanGid && e(ee).length > 1 && Ye(Xe);
      });
      var gt = L(ye, 2), dt = (Ye) => {
        var ht = ok();
        Gt(ht, 21, () => ({ length: e(ae) }), Qr, (ot, It, Ft) => {
          var mt = ze(), Ht = _e(mt), $n = (Ut) => {
            {
              let rn = d(() => e(de)[Ft] || null);
              rc(Ut, { get dealBlock() {
                return i();
              }, get dealBar() {
                return u();
              }, get mainProduct() {
                return g();
              }, products: [], get selectedProductVariant() {
                return e(rn);
              }, onChange: (An) => Le(Ft, An) });
            }
          }, vt = (Ut) => {
            {
              let rn = d(() => e(de)[Ft] || null);
              rc(Ut, { get dealBlock() {
                return i();
              }, get dealBar() {
                return u();
              }, get products() {
                return k();
              }, get selectedProductVariant() {
                return e(rn);
              }, onChange: (An) => Le(Ft, An), onRemove: () => nt(Ft) });
            }
          };
          O(Ht, (Ut) => {
            Ft === 0 ? Ut($n) : Ut(vt, !1);
          }), b(ot, mt);
        }), y(ht), b(Ye, ht);
      };
      O(gt, (Ye) => {
        P() && Ye(dt);
      });
      var yt = L(gt, 2), ft = (Ye) => {
        {
          let ht = d(() => V(u()));
          Fl(Ye, { get value() {
            return e(W);
          }, get min() {
            return e(ht);
          }, onChange: (ot) => te(W, ot, !0) });
        }
      };
      O(yt, (Ye) => {
        P() && u().dealBarType === Zt.QuantityBreak && u().quantitySelector && Ye(ft);
      });
      var St = L(yt, 2), Bt = (Ye) => {
        xi(Ye, { get product() {
          return g();
        }, get productPersonalisation() {
          return u().productPersonalisation;
        }, get personalisationItems() {
          return e(Be);
        }, get quantity() {
          return e(Be).length;
        }, get addPersonalisationModal() {
          return i().addPersonalisationModal;
        }, get onPersonalisationsChange() {
          return J();
        }, get initialValues() {
          return z();
        } });
      };
      O(St, (Ye) => {
        P() && u().productPersonalisation && (i().blockLayout === "vertical" || i().blockLayout === "plain") && Ye(Bt);
      }), y(st);
      var wt = L(st, 2);
      {
        let Ye = d(() => u().upsells || []);
        Ui(wt, { get dealBlock() {
          return i();
        }, get dealBarId() {
          return u().id;
        }, get upsells() {
          return e(Ye);
        }, get otherProducts() {
          return f();
        }, get complementaryProducts() {
          return p();
        }, get dealBarSelected() {
          return P();
        }, get dealSellingPlan() {
          return e(oe);
        }, onChange: (ht) => {
          te(H, ht, !0);
        } });
      }
      var Ot = L(wt, 2);
      Yi(Ot, { get selectedDealBarIndex() {
        return h();
      }, get onChange() {
        return G();
      }, get dealBlock() {
        return i();
      }, get dealBar() {
        return u();
      }, get otherProducts() {
        return f();
      }, get selected() {
        return P();
      }, get sellingPlan() {
        return e(oe);
      }, get progressiveGifts() {
        return i().progressiveGifts;
      } });
      var dn = L(Ot, 2);
      {
        let Ye = d(() => u().freeGifts || []);
        Hi(dn, { get dealBlock() {
          return i();
        }, get freeGifts() {
          return e(Ye);
        }, get freeGiftsSummary() {
          return u().freeGiftsSummary;
        }, get otherProducts() {
          return f();
        }, get dealBarSelected() {
          return P();
        }, get sellingPlan() {
          return e(oe);
        }, onChange: (ht) => {
          te(F, ht, !0);
        } });
      }
      var nn = L(dn, 2);
      {
        let Ye = d(() => u().multipleGiftsSelectors || []);
        Ji(nn, { get dealBlock() {
          return i();
        }, get multipleGiftsSelectors() {
          return e(Ye);
        }, get sellingPlan() {
          return e(oe);
        }, get otherProducts() {
          return f();
        }, get sets() {
          return e(he);
        }, onChange: (ht) => {
          te(U, ht, !0);
        } });
      }
      b(Ce, tt);
    }, $$slots: { default: !0 } });
    var ln = L(un, 2), sn = (Ce) => {
      Zi(Ce, { get showAsSoldOut() {
        return u().showAsSoldOut;
      }, get replaceLiquid() {
        return e(Pe);
      } });
    };
    O(ln, (Ce) => {
      u().showAsSoldOutEnabled && u().showAsSoldOut && Ce(sn);
    }), y(Ne), ke((Ce) => {
      var Re;
      Vt = Rt(Ne, 1, "kaching-bundles__bar", null, Vt, Ce), Ie(Ne, "data-deal-bar-id", u().id), Et(Ne, e(Ae)), Ie(Dt, "name", `kaching-bundles-deal-${(Re = I()) != null ? Re : ""}`), gi(Dt, u().id), Ie(Dt, "id", e(Me)), Pl(Dt, P()), Dt.disabled = u().showAsSoldOutEnabled;
    }, [() => ({ "kaching-bundles__bar--selected": P() })]), b(n, Ne);
    var Lt = at(Je);
    return l(), Lt;
  }
  jn(["change"]), Ke(zg, { dealBlock: {}, dealBar: {}, product: {}, collectionBreaksProducts: {}, otherProducts: {}, selectedDealBarIndex: {}, complementaryProducts: {}, customQuantity: {}, currentVariantId: {}, componentId: {}, selected: {}, globalSellingPlan: {}, selectedProgressiveGifts: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {}, onProgressiveGiftsChange: {} }, [], [], !0);
  var ic = {};
  (function n(t, r, a, s) {
    var o = !!(t.Worker && t.Blob && t.Promise && t.OffscreenCanvas && t.OffscreenCanvasRenderingContext2D && t.HTMLCanvasElement && t.HTMLCanvasElement.prototype.transferControlToOffscreen && t.URL && t.URL.createObjectURL), c = typeof Path2D == "function" && typeof DOMMatrix == "function";
    function l() {
    }
    function i(S) {
      var C = r.exports.Promise, F = C !== void 0 ? C : t.Promise;
      return typeof F == "function" ? new F(S) : (S(l, l), null);
    }
    var u, g, k, f, h, p, x = /* @__PURE__ */ (function(S, C) {
      return { transform: function(F) {
        if (S) return F;
        if (C.has(F)) return C.get(F);
        var U = new OffscreenCanvas(F.width, F.height);
        return U.getContext("2d").drawImage(F, 0, 0), C.set(F, U), U;
      }, clear: function() {
        C.clear();
      } };
    })((function() {
      if (!t.OffscreenCanvas) return !1;
      try {
        var S = new OffscreenCanvas(1, 1), C = S.getContext("2d");
        C.fillRect(0, 0, 1, 1);
        var F = S.transferToImageBitmap();
        C.createPattern(F, "no-repeat");
      } catch {
        return !1;
      }
      return !0;
    })(), /* @__PURE__ */ new Map()), m = (k = Math.floor(1e3 / 60), f = {}, h = 0, typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (u = function(S) {
      var C = Math.random();
      return f[C] = requestAnimationFrame(function F(U) {
        h === U || h + k - 1 < U ? (h = U, delete f[C], S()) : f[C] = requestAnimationFrame(F);
      }), C;
    }, g = function(S) {
      f[S] && cancelAnimationFrame(f[S]);
    }) : (u = function(S) {
      return setTimeout(S, k);
    }, g = function(S) {
      return clearTimeout(S);
    }), { frame: u, cancel: g }), I = /* @__PURE__ */ (function() {
      var S, C, F = {};
      return function() {
        if (S) return S;
        if (!a && o) {
          var U = ["var CONFETTI, SIZE = {}, module = {};", "(" + n.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI && CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join(`
`);
          try {
            S = new Worker(URL.createObjectURL(new Blob([U])));
          } catch (H) {
            return typeof console != "undefined" && typeof console.warn == "function" && console.warn("🎊 Could not load worker", H), null;
          }
          (function(H) {
            function se(E, q) {
              H.postMessage({ options: E || {}, callback: q });
            }
            H.init = function(E) {
              var q = E.transferControlToOffscreen();
              H.postMessage({ canvas: q }, [q]);
            }, H.fire = function(E, q, ie) {
              if (C) return se(E, null), C;
              var ue = Math.random().toString(36).slice(2);
              return C = i(function(W) {
                function ae(he) {
                  he.data.callback === ue && (delete F[ue], H.removeEventListener("message", ae), C = null, x.clear(), ie(), W());
                }
                H.addEventListener("message", ae), se(E, ue), F[ue] = ae.bind(null, { data: { callback: ue } });
              });
            }, H.reset = function() {
              for (var E in H.postMessage({ reset: !0 }), F) F[E](), delete F[E];
            };
          })(S);
        }
        return S;
      };
    })(), P = { particleCount: 50, angle: 90, spread: 45, startVelocity: 45, decay: 0.9, gravity: 1, drift: 0, ticks: 200, x: 0.5, y: 0.5, shapes: ["square", "circle"], zIndex: 100, colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"], disableForReducedMotion: !1, scalar: 1 };
    function A(S, C, F) {
      return (function(U, H) {
        return H ? H(U) : U;
      })(S && S[C] != null ? S[C] : P[C], F);
    }
    function j(S) {
      return S < 0 ? 0 : Math.floor(S);
    }
    function D(S, C) {
      return Math.floor(Math.random() * (C - S)) + S;
    }
    function Q(S) {
      return parseInt(S, 16);
    }
    function Z(S) {
      return S.map(T);
    }
    function T(S) {
      var C = String(S).replace(/[^0-9a-f]/gi, "");
      return C.length < 6 && (C = C[0] + C[0] + C[1] + C[1] + C[2] + C[2]), { r: Q(C.substring(0, 2)), g: Q(C.substring(2, 4)), b: Q(C.substring(4, 6)) };
    }
    function J(S) {
      S.width = document.documentElement.clientWidth, S.height = document.documentElement.clientHeight;
    }
    function z(S) {
      var C = S.getBoundingClientRect();
      S.width = C.width, S.height = C.height;
    }
    function G(S) {
      var C = S.angle * (Math.PI / 180), F = S.spread * (Math.PI / 180);
      return { x: S.x, y: S.y, wobble: 10 * Math.random(), wobbleSpeed: Math.min(0.11, 0.1 * Math.random() + 0.05), velocity: 0.5 * S.startVelocity + Math.random() * S.startVelocity, angle2D: -C + (0.5 * F - Math.random() * F), tiltAngle: (0.5 * Math.random() + 0.25) * Math.PI, color: S.color, shape: S.shape, tick: 0, totalTicks: S.ticks, decay: S.decay, drift: S.drift, random: Math.random() + 2, tiltSin: 0, tiltCos: 0, wobbleX: 0, wobbleY: 0, gravity: 3 * S.gravity, ovalScalar: 0.6, scalar: S.scalar, flat: S.flat };
    }
    function ne(S, C) {
      C.x += Math.cos(C.angle2D) * C.velocity + C.drift, C.y += Math.sin(C.angle2D) * C.velocity + C.gravity, C.velocity *= C.decay, C.flat ? (C.wobble = 0, C.wobbleX = C.x + 10 * C.scalar, C.wobbleY = C.y + 10 * C.scalar, C.tiltSin = 0, C.tiltCos = 0, C.random = 1) : (C.wobble += C.wobbleSpeed, C.wobbleX = C.x + 10 * C.scalar * Math.cos(C.wobble), C.wobbleY = C.y + 10 * C.scalar * Math.sin(C.wobble), C.tiltAngle += 0.1, C.tiltSin = Math.sin(C.tiltAngle), C.tiltCos = Math.cos(C.tiltAngle), C.random = Math.random() + 2);
      var F = C.tick++ / C.totalTicks, U = C.x + C.random * C.tiltCos, H = C.y + C.random * C.tiltSin, se = C.wobbleX + C.random * C.tiltCos, E = C.wobbleY + C.random * C.tiltSin;
      if (S.fillStyle = "rgba(" + C.color.r + ", " + C.color.g + ", " + C.color.b + ", " + (1 - F) + ")", S.beginPath(), c && C.shape.type === "path" && typeof C.shape.path == "string" && Array.isArray(C.shape.matrix)) S.fill((function(ve, oe, Be, be, K, Y, ge) {
        var we = new Path2D(ve), me = new Path2D();
        me.addPath(we, new DOMMatrix(oe));
        var Pe = new Path2D();
        return Pe.addPath(me, new DOMMatrix([Math.cos(ge) * K, Math.sin(ge) * K, -Math.sin(ge) * Y, Math.cos(ge) * Y, Be, be])), Pe;
      })(C.shape.path, C.shape.matrix, C.x, C.y, 0.1 * Math.abs(se - U), 0.1 * Math.abs(E - H), Math.PI / 10 * C.wobble));
      else if (C.shape.type === "bitmap") {
        var q = Math.PI / 10 * C.wobble, ie = 0.1 * Math.abs(se - U), ue = 0.1 * Math.abs(E - H), W = C.shape.bitmap.width * C.scalar, ae = C.shape.bitmap.height * C.scalar, he = new DOMMatrix([Math.cos(q) * ie, Math.sin(q) * ie, -Math.sin(q) * ue, Math.cos(q) * ue, C.x, C.y]);
        he.multiplySelf(new DOMMatrix(C.shape.matrix));
        var V = S.createPattern(x.transform(C.shape.bitmap), "no-repeat");
        V.setTransform(he), S.globalAlpha = 1 - F, S.fillStyle = V, S.fillRect(C.x - W / 2, C.y - ae / 2, W, ae), S.globalAlpha = 1;
      } else if (C.shape === "circle") S.ellipse ? S.ellipse(C.x, C.y, Math.abs(se - U) * C.ovalScalar, Math.abs(E - H) * C.ovalScalar, Math.PI / 10 * C.wobble, 0, 2 * Math.PI) : (function(ve, oe, Be, be, K, Y, ge, we, me) {
        ve.save(), ve.translate(oe, Be), ve.rotate(Y), ve.scale(be, K), ve.arc(0, 0, 1, ge, we, me), ve.restore();
      })(S, C.x, C.y, Math.abs(se - U) * C.ovalScalar, Math.abs(E - H) * C.ovalScalar, Math.PI / 10 * C.wobble, 0, 2 * Math.PI);
      else if (C.shape === "star") for (var N = Math.PI / 2 * 3, de = 4 * C.scalar, pe = 8 * C.scalar, re = C.x, R = C.y, ee = 5, ce = Math.PI / ee; ee--; ) re = C.x + Math.cos(N) * pe, R = C.y + Math.sin(N) * pe, S.lineTo(re, R), N += ce, re = C.x + Math.cos(N) * de, R = C.y + Math.sin(N) * de, S.lineTo(re, R), N += ce;
      else S.moveTo(Math.floor(C.x), Math.floor(C.y)), S.lineTo(Math.floor(C.wobbleX), Math.floor(H)), S.lineTo(Math.floor(se), Math.floor(E)), S.lineTo(Math.floor(U), Math.floor(C.wobbleY));
      return S.closePath(), S.fill(), C.tick < C.totalTicks;
    }
    function X(S, C) {
      var F, U = !S, H = !!A(C || {}, "resize"), se = !1, E = A(C, "disableForReducedMotion", Boolean), q = o && A(C || {}, "useWorker") ? I() : null, ie = U ? J : z, ue = !(!S || !q) && !!S.__confetti_initialized, W = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches;
      function ae(V, N, de) {
        for (var pe = A(V, "particleCount", j), re = A(V, "angle", Number), R = A(V, "spread", Number), ee = A(V, "startVelocity", Number), ce = A(V, "decay", Number), ve = A(V, "gravity", Number), oe = A(V, "drift", Number), Be = A(V, "colors", Z), be = A(V, "ticks", Number), K = A(V, "shapes"), Y = A(V, "scalar"), ge = !!A(V, "flat"), we = (function(Ve) {
          var fe = A(Ve, "origin", Object);
          return fe.x = A(fe, "x", Number), fe.y = A(fe, "y", Number), fe;
        })(V), me = pe, Pe = [], Ge = S.width * we.x, Ze = S.height * we.y; me--; ) Pe.push(G({ x: Ge, y: Ze, angle: re, spread: R, startVelocity: ee, color: Be[me % Be.length], shape: K[D(0, K.length)], ticks: be, decay: ce, gravity: ve, drift: oe, scalar: Y, flat: ge }));
        return F ? F.addFettis(Pe) : (F = (function(Ve, fe, We, $e, M) {
          var xe, Me, qe = fe.slice(), Oe = Ve.getContext("2d"), De = i(function(Ae) {
            function Le() {
              xe = Me = null, Oe.clearRect(0, 0, $e.width, $e.height), x.clear(), M(), Ae();
            }
            xe = m.frame(function nt() {
              !a || $e.width === s.width && $e.height === s.height || ($e.width = Ve.width = s.width, $e.height = Ve.height = s.height), $e.width || $e.height || (We(Ve), $e.width = Ve.width, $e.height = Ve.height), Oe.clearRect(0, 0, $e.width, $e.height), (qe = qe.filter(function(Je) {
                return ne(Oe, Je);
              })).length ? xe = m.frame(nt) : Le();
            }), Me = Le;
          });
          return { addFettis: function(Ae) {
            return qe = qe.concat(Ae), De;
          }, canvas: Ve, promise: De, reset: function() {
            xe && m.cancel(xe), Me && Me();
          } };
        })(S, Pe, ie, N, de), F.promise);
      }
      function he(V) {
        var N = E || A(V, "disableForReducedMotion", Boolean), de = A(V, "zIndex", Number);
        if (N && W) return i(function(ee) {
          ee();
        });
        U && F ? S = F.canvas : U && !S && (S = (function(ee) {
          var ce = document.createElement("canvas");
          return ce.style.position = "fixed", ce.style.top = "0px", ce.style.left = "0px", ce.style.pointerEvents = "none", ce.style.zIndex = ee, ce;
        })(de), document.body.appendChild(S)), H && !ue && ie(S);
        var pe = { width: S.width, height: S.height };
        function re() {
          if (q) {
            var ee = { getBoundingClientRect: function() {
              if (!U) return S.getBoundingClientRect();
            } };
            return ie(ee), void q.postMessage({ resize: { width: ee.width, height: ee.height } });
          }
          pe.width = pe.height = null;
        }
        function R() {
          F = null, H && (se = !1, t.removeEventListener("resize", re)), U && S && (document.body.contains(S) && document.body.removeChild(S), S = null, ue = !1);
        }
        return q && !ue && q.init(S), ue = !0, q && (S.__confetti_initialized = !0), H && !se && (se = !0, t.addEventListener("resize", re, !1)), q ? q.fire(V, pe, R) : ae(V, pe, R);
      }
      return he.reset = function() {
        q && q.reset(), F && F.reset();
      }, he;
    }
    function B() {
      return p || (p = X(null, { useWorker: !0, resize: !0 })), p;
    }
    r.exports = function() {
      return B().apply(this, arguments);
    }, r.exports.reset = function() {
      B().reset();
    }, r.exports.create = X, r.exports.shapeFromPath = function(S) {
      if (!c) throw new Error("path confetti are not supported in this browser");
      var C, F;
      typeof S == "string" ? C = S : (C = S.path, F = S.matrix);
      var U = new Path2D(C), H = document.createElement("canvas").getContext("2d");
      if (!F) {
        for (var se, E, q = 1e3, ie = q, ue = q, W = 0, ae = 0, he = 0; he < q; he += 2) for (var V = 0; V < q; V += 2) H.isPointInPath(U, he, V, "nonzero") && (ie = Math.min(ie, he), ue = Math.min(ue, V), W = Math.max(W, he), ae = Math.max(ae, V));
        se = W - ie, E = ae - ue;
        var N = Math.min(10 / se, 10 / E);
        F = [N, 0, 0, N, -Math.round(se / 2 + ie) * N, -Math.round(E / 2 + ue) * N];
      }
      return { type: "path", path: C, matrix: F };
    }, r.exports.shapeFromText = function(S) {
      var C, F = 1, U = "#000000", H = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
      typeof S == "string" ? C = S : (C = S.text, F = "scalar" in S ? S.scalar : F, H = "fontFamily" in S ? S.fontFamily : H, U = "color" in S ? S.color : U);
      var se = 10 * F, E = se + "px " + H, q = new OffscreenCanvas(se, se), ie = q.getContext("2d");
      ie.font = E;
      var ue = ie.measureText(C), W = Math.ceil(ue.actualBoundingBoxRight + ue.actualBoundingBoxLeft), ae = Math.ceil(ue.actualBoundingBoxAscent + ue.actualBoundingBoxDescent), he = ue.actualBoundingBoxLeft + 2, V = ue.actualBoundingBoxAscent + 2;
      W += 4, ae += 4, (ie = (q = new OffscreenCanvas(W, ae)).getContext("2d")).font = E, ie.fillStyle = U, ie.fillText(C, he, V);
      var N = 1 / F;
      return { type: "bitmap", bitmap: q.transferToImageBitmap(), matrix: [N, 0, 0, N, -W * N / 2, -ae * N / 2] };
    };
  })(/* @__PURE__ */ (function() {
    return typeof window != "undefined" ? window : typeof self != "undefined" ? self : this || {};
  })(), ic, !1);
  const dk = ic.exports;
  ic.exports.create;
  var gk = Gn('<svg viewBox="0 0 361 163" fill="none" aria-hidden="true"><path class="kaching-bundles__scratch-off-hint-path" d="M22 113.859C23.9107 84.035 22.7293 20.8901 54.8299 45.9835C94.9555 77.3502 81.1193 164.847 101.209 103.575C108.48 64.2518 127.202 -4.91471 143.923 33.0046C164.824 80.4037 155.535 144.223 184.564 113.859C213.593 83.495 160.179 15.685 201.982 45.9835C243.784 76.2821 263.524 183.445 278.619 122.651C293.714 61.8562 268.168 7.24414 303.004 33.0046C337.839 58.765 330.872 64.2534 339 92.7687" stroke="white" stroke-opacity="0.7" stroke-width="44" stroke-linecap="round"></path></svg>');
  function $g(n, t) {
    rt(t, !0);
    let r = _(t, "hidden", 7);
    var a = { get hidden() {
      return r();
    }, set hidden(c) {
      r(c), v();
    } }, s = gk();
    let o;
    return ke((c) => o = Rt(s, 0, "kaching-bundles__scratch-off-hint", null, o, c), [() => ({ "kaching-bundles__scratch-off-hint--hidden": r() })]), b(n, s), at(a);
  }
  function hk(n, t) {
    n.key !== "Enter" && n.key !== " " || (n.preventDefault(), t());
  }
  Ke($g, { hidden: {} }, [], [], !0);
  var pk = $('<canvas role="button" tabindex="0"></canvas> <!> <div aria-hidden="true"> </div>', 1), bk = $("<div><!> <!></div>");
  function Dg(n, t) {
    rt(t, !0);
    const r = () => Te(u, "$config", a), [a, s] = kt(), o = 317 / 361;
    let c = _(t, "settings", 7), l = _(t, "onReveal", 7), i = _(t, "children", 7);
    const u = Sn(), g = $t();
    let k = d(() => Te(g, "$translate", a)(c().title)), f = Fe(ut(r().preview && !r().previewScratchOff)), h = Fe(!1), p = Fe(void 0), x = Fe(!1), m = d(() => mn({ "scratch-off-title-color": Qe(c().titleColor), "scratch-off-title-size": `${c().titleSize}px` })), I = !1, P = null, A = null, j = 22, D = null, Q = Fe(!1), Z = Fe(!1);
    const T = new Image();
    T.src = "https://bundles-assets.kachingappz.app/widget/scratch-off-background-v2.webp", D = T, T.complete ? te(Q, !0) : (T.addEventListener("load", () => {
      te(Q, !0);
    }, { once: !0 }), T.addEventListener("error", () => {
      te(Z, !0);
    }, { once: !0 }));
    let J = d(() => e(Q) || e(Z));
    function z() {
      if (!e(p)) return;
      const W = e(p).getBoundingClientRect();
      if (W.width === 0 || W.height === 0) return;
      const ae = window.devicePixelRatio || 1;
      e(p).width = Math.floor(W.width * ae), e(p).height = Math.floor(W.height * ae);
      const he = e(p).getContext("2d");
      if (!he) return;
      he.scale(ae, ae), j = 44 * Math.min((W.width - 10) / 361, (W.height - 10) / 163, o) / 2, he.fillStyle = Qe(c().backgroundColor), he.fillRect(0, 0, W.width, W.height), e(Q) && D && (he.globalAlpha = 0.6, he.drawImage(D, 0, 0, W.width, W.height), he.globalAlpha = 1), he.globalCompositeOperation = "destination-out";
    }
    function G(W) {
      if (!e(p)) return null;
      const ae = e(p).getBoundingClientRect();
      return { x: W.clientX - ae.left, y: W.clientY - ae.top };
    }
    function ne(W) {
      var ae;
      e(f) || e(h) || (I = !0, te(x, !0), A === null && (A = setTimeout(C, 1500)), (ae = e(p)) == null || ae.setPointerCapture(W.pointerId), P = G(W), (function(he) {
        if (!e(p) || !he) return;
        const V = e(p).getContext("2d");
        V && (V.beginPath(), V.arc(he.x, he.y, j, 0, 2 * Math.PI), V.fill());
      })(P));
    }
    function X(W) {
      if (!I || e(f) || e(h)) return;
      const ae = G(W);
      ae && P && ((function(he, V) {
        if (!e(p)) return;
        const N = e(p).getContext("2d");
        if (!N) return;
        const de = V.x - he.x, pe = V.y - he.y, re = Math.hypot(de, pe), R = Math.max(1, Math.ceil(re / 4));
        for (let ee = 0; ee <= R; ee++) {
          const ce = ee / R;
          N.beginPath(), N.arc(he.x + de * ce, he.y + pe * ce, j, 0, 2 * Math.PI), N.fill();
        }
      })(P, ae), P = ae);
    }
    function B(W) {
      var ae;
      I = !1, (ae = e(p)) == null || ae.releasePointerCapture(W.pointerId), P = null, C();
    }
    function S() {
      A !== null && (clearTimeout(A), A = null);
    }
    function C() {
      var W;
      e(f) || e(h) || (S(), te(h, !0), (function() {
        if (!e(p)) return;
        const ae = e(p).getBoundingClientRect();
        dk({ particleCount: 120, spread: 70, startVelocity: 45, origin: { x: (ae.left + ae.width / 2) / window.innerWidth, y: (ae.top + ae.height / 2) / window.innerHeight } });
      })(), (W = l()) == null || W(), setTimeout(() => {
        te(f, !0), te(h, !1);
      }, 300));
    }
    et(() => {
      if (e(J)) return;
      const W = setTimeout(() => {
        te(Z, !0);
      }, 5e3);
      return () => clearTimeout(W);
    }), et(() => () => S()), et(() => {
      if (e(f) || e(h) || !e(p)) return;
      z();
      const W = new ResizeObserver(() => {
        e(f) || e(h) || z();
      });
      return W.observe(e(p)), () => W.disconnect();
    });
    let F = JSON.stringify(c());
    et(() => {
      const W = JSON.stringify(c());
      W !== F && (F = W, r().preview && r().previewScratchOff && (te(f, !1), te(h, !1), te(x, !1), S()));
    });
    var U = { get settings() {
      return c();
    }, set settings(W) {
      c(W), v();
    }, get onReveal() {
      return l();
    }, set onReveal(W) {
      l(W), v();
    }, get children() {
      return i();
    }, set children(W) {
      i(W), v();
    } }, H = bk();
    let se;
    var E = w(H);
    ds(E, i);
    var q = L(E, 2), ie = (W) => {
      var ae = pk(), he = _e(ae);
      let V;
      he.__pointerdown = ne, he.__pointermove = X, he.__pointerup = B, he.__keydown = [hk, C], Fi(he, (R) => te(p, R), () => e(p));
      var N = L(he, 2);
      {
        let R = d(() => e(x) || e(h));
        $g(N, { get hidden() {
          return e(R);
        } });
      }
      var de = L(N, 2);
      let pe;
      var re = w(de, !0);
      y(de), ke((R, ee) => {
        V = Rt(he, 1, "kaching-bundles__scratch-off-canvas", null, V, R), Ie(he, "aria-label", e(k)), pe = Rt(de, 1, "kaching-bundles__scratch-off-title", null, pe, ee), pt(re, e(k));
      }, [() => ({ "kaching-bundles__scratch-off-canvas--revealing": e(h) }), () => ({ "kaching-bundles__scratch-off-title--hidden": e(x) || e(h) })]), us("pointercancel", he, B), b(W, ae);
    };
    O(q, (W) => {
      e(f) || W(ie);
    }), y(H), ke((W) => {
      se = Rt(H, 1, "kaching-bundles__scratch-off", null, se, W), Et(H, e(m));
    }, [() => ({ "kaching-bundles__scratch-off--unscratched": !e(f), "kaching-bundles__scratch-off--revealing": e(h), "kaching-bundles__scratch-off--loading": !e(f) && !e(J) })]), b(n, H);
    var ue = at(U);
    return s(), ue;
  }
  jn(["pointerdown", "pointermove", "pointerup", "keydown"]), Ke(Dg, { settings: {}, onReveal: {}, children: {} }, [], [], !0);
  var fk = $('<div class="kaching-bundles__bar-price"><!></div>'), vk = $('<div class="kaching-bundles__bar-full-price"><!></div>'), _k = $('<div class="kaching-bundles__bar-pricing"><!> <!></div>');
  function qs(n, t) {
    rt(t, !0);
    const r = () => Te(i, "$translate", s), a = () => Te(u, "$formatPrice", s), [s, o] = kt(), c = _(t, "discountedPrice", 7), l = _(t, "fullPrice", 7), i = $t(), u = xn();
    var g = { get discountedPrice() {
      return c();
    }, set discountedPrice(m) {
      c(m), v();
    }, get fullPrice() {
      return l();
    }, set fullPrice(m) {
      l(m), v();
    } }, k = _k(), f = w(k);
    lt(f, c, (m) => {
      var I = fk();
      je(w(I), () => a()(c())), y(I), ke((P) => Ie(I, "data-a11y-label", P), [() => r()("system.price")]), b(m, I);
    });
    var h = L(f, 2), p = (m) => {
      var I = ze();
      lt(_e(I), l, (P) => {
        var A = vk();
        je(w(A), () => a()(l())), y(A), ke((j) => Ie(A, "data-a11y-label", j), [() => r()("system.original_price")]), b(P, A);
      }), b(m, I);
    };
    O(h, (m) => {
      l() > c() && m(p);
    }), y(k), b(n, k);
    var x = at(g);
    return o(), x;
  }
  Ke(qs, { discountedPrice: {}, fullPrice: {} }, [], [], !0);
  const yi = Wr(null), lc = (n) => mn({ "kaching-subscriptions-title-color": Qe(n.titleColor), "kaching-subscriptions-subtitle-color": Qe(n.subtitleColor), "kaching-subscriptions-title-font-size": n.titleSize + "px", "kaching-subscriptions-subtitle-font-size": n.subtitleSize + "px" });
  var kk = $('<div class="kaching-bundles__bar-radio"></div>'), mk = $('<div class="kaching-bundles__subscriptions__title"><!></div>'), xk = $('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), yk = $('<div class="kaching-bundles__bar-variants"><!></div>'), wk = $('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div> <!></div></div> <!> <!></div></div>'), Pk = $('<div class="kaching-bundles__bar-radio"></div>'), Sk = $('<div class="kaching-bundles__subscriptions__title"><!></div>'), Bk = $('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), Ck = $('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div> <!></div></div></div></div>'), Ik = $("<div></div>");
  function Tg(n, t) {
    rt(t, !0);
    const r = () => Te(yi, "$selectedDealBarStore", o), a = () => Te(h, "$formatPrice", o), s = () => Te(f, "$translate", o), [o, c] = kt(), l = _(t, "subscriptions", 7), i = _(t, "sellingPlans", 7), u = _(t, "selectedSellingPlan", 7), g = _(t, "hideSellingPlanSelector", 7, !1), k = _(t, "onChange", 7), f = $t(), h = xn();
    let p = Fe(ut(l().subscribeByDefault || u() ? "subscribe" : "one-time")), x = Fe(ut(u() || i()[0])), m = Fe(!1), I = d(() => l().subscribeByDefault), P = d(() => e(I) ? ["subscribe", "one-time"] : ["one-time", "subscribe"]);
    const A = d(() => lc(l())), j = d(() => {
      var F, U;
      const H = (U = (F = r()) == null ? void 0 : F.dealBar) == null ? void 0 : U.sellingPlanGid;
      if (H) return i().find((se) => se.id === en(H));
    }), D = d(() => {
      var F;
      return (F = e(j)) != null ? F : e(x);
    }), Q = d(() => {
      var F, U, H, se, E;
      return (E = (se = (U = (F = r()) == null ? void 0 : F.pricing.discountedPricesForSellingPlans.find((q) => {
        var ie;
        return q.sellingPlanId === ((ie = e(D)) == null ? void 0 : ie.id);
      })) == null ? void 0 : U.discountedPrice) != null ? se : (H = r()) == null ? void 0 : H.pricing.discountedPrice) != null ? E : 0;
    }), Z = d(() => {
      var F, U;
      return (U = (F = r()) == null ? void 0 : F.pricing.discountedPriceWithoutSellingPlan) != null ? U : 0;
    }), T = d(() => {
      var F, U;
      return (U = (F = r()) == null ? void 0 : F.pricing.fullPrice) != null ? U : 0;
    }), J = d(() => {
      var F, U, H;
      return yn({ priceFormatter: a(), product: (F = r()) == null ? void 0 : F.product, totalFullPrice: e(T), totalDiscountedPrice: e(Q), quantity: (H = (U = r()) == null ? void 0 : U.quantity) != null ? H : 1, sellingPlan: e(D), unitQuantity: null });
    }), z = d(() => {
      var F, U, H;
      return yn({ priceFormatter: a(), product: (F = r()) == null ? void 0 : F.product, totalFullPrice: e(T), totalDiscountedPrice: e(Z), quantity: (H = (U = r()) == null ? void 0 : U.quantity) != null ? H : 1, unitQuantity: null });
    });
    function G(F) {
      te(m, !0), te(p, F, !0), k()(F === "subscribe" ? e(x) : void 0);
    }
    function ne(F) {
      te(x, F, !0), e(p) === "subscribe" && k()(F);
    }
    ja(() => {
      e(p) === "subscribe" && k()(e(x));
    }), et(() => {
      if (u()) return te(x, u(), !0), void te(p, "subscribe");
      if (i().length === 0) return void te(p, "one-time");
      i().some((F) => {
        var U;
        return F.id === ((U = e(x)) == null ? void 0 : U.id);
      }) || te(x, i()[0], !0), e(m) || te(p, e(I) ? "subscribe" : "one-time", !0), k()(e(p) === "subscribe" ? e(x) : void 0);
    });
    var X = { get subscriptions() {
      return l();
    }, set subscriptions(F) {
      l(F), v();
    }, get sellingPlans() {
      return i();
    }, set sellingPlans(F) {
      i(F), v();
    }, get selectedSellingPlan() {
      return u();
    }, set selectedSellingPlan(F) {
      u(F), v();
    }, get hideSellingPlanSelector() {
      return g();
    }, set hideSellingPlanSelector(F = !1) {
      g(F), v();
    }, get onChange() {
      return k();
    }, set onChange(F) {
      k(F), v();
    } }, B = Ik();
    let S;
    Gt(B, 20, () => e(P), (F) => F, (F, U) => {
      var H = ze(), se = _e(H), E = (ie) => {
        {
          let ue = d(() => ["kaching-bundles__bar", i().length === 0 && "kaching-bundles__bar--disabled", e(p) === "subscribe" && "kaching-bundles__bar--selected"]);
          Xt(ie, { element: "div", get class() {
            return e(ue);
          }, onclick: () => G("subscribe"), children: (W, ae) => {
            var he = wk(), V = w(he), N = w(V), de = w(N), pe = (Pe) => {
              b(Pe, kk());
            };
            O(de, (Pe) => {
              l().layout === "vertical" && Pe(pe);
            });
            var re = L(de, 2), R = w(re), ee = w(R), ce = w(ee), ve = (Pe) => {
              var Ge = mk();
              je(w(Ge), () => e(J)(s()(l().subscribeTitle))), y(Ge), b(Pe, Ge);
            };
            O(ce, (Pe) => {
              l().subscribeTitle && Pe(ve);
            }), y(ee);
            var oe = L(ee, 2), Be = (Pe) => {
              var Ge = xk();
              je(w(Ge), () => e(J)(s()(l().subscribeSubtitle))), y(Ge), b(Pe, Ge);
            };
            O(oe, (Pe) => {
              l().subscribeSubtitle && Pe(Be);
            }), y(R);
            var be = L(R, 2), K = (Pe) => {
              qs(Pe, { get discountedPrice() {
                return e(Q);
              }, get fullPrice() {
                return e(T);
              } });
            };
            O(be, (Pe) => {
              l().showPrices && r() && Pe(K);
            }), y(re), y(N);
            var Y = L(N, 2), ge = (Pe) => {
              {
                let Ge = d(() => e(p) === "subscribe");
                Ua(Pe, { get highlights() {
                  return l().highlights;
                }, get isSelected() {
                  return e(Ge);
                }, get replaceLiquid() {
                  return e(J);
                } });
              }
            };
            O(Y, (Pe) => {
              l().highlights && Pe(ge);
            });
            var we = L(Y, 2), me = (Pe) => {
              var Ge = yk();
              Ha(w(Ge), { get sellingPlans() {
                return i();
              }, get selectedSellingPlan() {
                return e(x);
              }, onChange: ne }), y(Ge), b(Pe, Ge);
            };
            O(we, (Pe) => {
              e(p) === "subscribe" && i().length > 1 && e(x) && !g() && Pe(me);
            }), y(V), y(he), b(W, he);
          }, $$slots: { default: !0 } });
        }
      }, q = (ie) => {
        {
          let ue = d(() => ["kaching-bundles__bar", i().length === 0 && "kaching-bundles__bar--disabled", e(p) === "one-time" && "kaching-bundles__bar--selected"]);
          Xt(ie, { element: "div", get class() {
            return e(ue);
          }, onclick: () => G("one-time"), children: (W, ae) => {
            var he = Ck(), V = w(he), N = w(V), de = w(N), pe = (Y) => {
              b(Y, Pk());
            };
            O(de, (Y) => {
              l().layout === "vertical" && Y(pe);
            });
            var re = L(de, 2), R = w(re), ee = w(R), ce = w(ee), ve = (Y) => {
              var ge = Sk();
              je(w(ge), () => e(z)(s()(l().oneTimeTitle))), y(ge), b(Y, ge);
            };
            O(ce, (Y) => {
              l().oneTimeTitle && Y(ve);
            }), y(ee);
            var oe = L(ee, 2), Be = (Y) => {
              var ge = Bk();
              je(w(ge), () => e(z)(s()(l().oneTimeSubtitle))), y(ge), b(Y, ge);
            };
            O(oe, (Y) => {
              l().oneTimeSubtitle && Y(Be);
            }), y(R);
            var be = L(R, 2), K = (Y) => {
              qs(Y, { get discountedPrice() {
                return e(Z);
              }, get fullPrice() {
                return e(T);
              } });
            };
            O(be, (Y) => {
              l().showPrices && r() && Y(K);
            }), y(re), y(N), y(V), y(he), b(W, he);
          }, $$slots: { default: !0 } });
        }
      };
      O(se, (ie) => {
        U === "subscribe" ? ie(E) : ie(q, !1);
      }), b(F, H);
    }), y(B), ke((F) => {
      S = Rt(B, 1, "kaching-bundles__subscriptions kaching-bundles__bars", null, S, F), Et(B, e(A));
    }, [() => ({ "kaching-bundles__bars--horizontal": l().layout === "horizontal" })]), b(n, B);
    var C = at(X);
    return c(), C;
  }
  Ke(Tg, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, onChange: {} }, [], [], !0);
  var Mk = $('<div class="kaching-bundles__subscriptions__title"><!></div>'), zk = $('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), $k = $('<div class="kaching-bundles__bar-variants"><!></div>'), Dk = $('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><span class="kaching-bundles__subscriptions__checkbox"><!></span> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div> <!></div></div> <!> <!></div></div>'), Tk = $('<div class="kaching-bundles__subscriptions kaching-bundles__bars kaching-bundles__subscriptions--checkbox"><!></div>');
  function Vg(n, t) {
    rt(t, !0);
    const r = () => Te(yi, "$selectedDealBarStore", s), a = () => Te(k, "$translate", s), [s, o] = kt(), c = _(t, "subscriptions", 7), l = _(t, "sellingPlans", 7), i = _(t, "selectedSellingPlan", 7), u = _(t, "hideSellingPlanSelector", 7, !1), g = _(t, "onChange", 7), k = $t(), f = xn();
    let h = Fe(ut(c().subscribeByDefault || !!i())), p = Fe(ut(i() || l()[0])), x = Fe(!1);
    const m = d(() => lc(c())), I = d(() => {
      var G, ne;
      const X = (ne = (G = r()) == null ? void 0 : G.dealBar) == null ? void 0 : ne.sellingPlanGid;
      if (X) return l().find((B) => B.id === en(X));
    }), P = d(() => {
      var G;
      return (G = e(I)) != null ? G : e(p);
    }), A = d(() => {
      var G, ne, X, B, S;
      return (S = (B = (ne = (G = r()) == null ? void 0 : G.pricing.discountedPricesForSellingPlans.find((C) => {
        var F;
        return C.sellingPlanId === ((F = e(P)) == null ? void 0 : F.id);
      })) == null ? void 0 : ne.discountedPrice) != null ? B : (X = r()) == null ? void 0 : X.pricing.discountedPrice) != null ? S : 0;
    }), j = d(() => {
      var G, ne;
      return (ne = (G = r()) == null ? void 0 : G.pricing.fullPrice) != null ? ne : 0;
    }), D = d(() => {
      var G, ne, X;
      return yn({ priceFormatter: Te(f, "$formatPrice", s), product: (G = r()) == null ? void 0 : G.product, totalFullPrice: e(j), totalDiscountedPrice: e(A), quantity: (X = (ne = r()) == null ? void 0 : ne.quantity) != null ? X : 1, sellingPlan: e(P), unitQuantity: null });
    });
    function Q(G) {
      te(p, G, !0), g()(G);
    }
    et(() => {
      if (i()) return te(p, i(), !0), void te(h, !0);
      if (l().length === 0) return void te(h, !1);
      e(p) && l().some((G) => G.id === e(p).id) || te(p, l()[0], !0), e(x) || te(h, c().subscribeByDefault, !0), g()(e(h) ? e(p) : void 0);
    }), ja(() => {
      e(h) && g()(e(p));
    });
    var Z = { get subscriptions() {
      return c();
    }, set subscriptions(G) {
      c(G), v();
    }, get sellingPlans() {
      return l();
    }, set sellingPlans(G) {
      l(G), v();
    }, get selectedSellingPlan() {
      return i();
    }, set selectedSellingPlan(G) {
      i(G), v();
    }, get hideSellingPlanSelector() {
      return u();
    }, set hideSellingPlanSelector(G = !1) {
      u(G), v();
    }, get onChange() {
      return g();
    }, set onChange(G) {
      g(G), v();
    } }, T = Tk(), J = w(T);
    {
      let G = d(() => ["kaching-bundles__bar", l().length === 0 && "kaching-bundles__bar--disabled"]);
      Xt(J, { element: "div", get class() {
        return e(G);
      }, role: "checkbox", get "aria-checked"() {
        return e(h);
      }, onclick: function() {
        te(x, !0), te(h, !e(h)), g()(e(h) ? e(p) : void 0);
      }, children: (ne, X) => {
        var B = Dk(), S = w(B), C = w(S), F = w(C), U = w(F), H = (R) => {
          Ts(R);
        };
        O(U, (R) => {
          e(h) && R(H);
        }), y(F);
        var se = L(F, 2), E = w(se), q = w(E), ie = w(q), ue = (R) => {
          var ee = Mk();
          je(w(ee), () => e(D)(a()(c().subscribeTitle))), y(ee), b(R, ee);
        };
        O(ie, (R) => {
          c().subscribeTitle && R(ue);
        }), y(q);
        var W = L(q, 2), ae = (R) => {
          var ee = zk();
          je(w(ee), () => e(D)(a()(c().subscribeSubtitle))), y(ee), b(R, ee);
        };
        O(W, (R) => {
          c().subscribeSubtitle && R(ae);
        }), y(E);
        var he = L(E, 2), V = (R) => {
          qs(R, { get discountedPrice() {
            return e(A);
          }, get fullPrice() {
            return e(j);
          } });
        };
        O(he, (R) => {
          c().showPrices && r() && R(V);
        }), y(se), y(C);
        var N = L(C, 2), de = (R) => {
          Ua(R, { get highlights() {
            return c().highlights;
          }, get isSelected() {
            return e(h);
          }, get replaceLiquid() {
            return e(D);
          } });
        };
        O(N, (R) => {
          c().highlights && R(de);
        });
        var pe = L(N, 2), re = (R) => {
          var ee = $k();
          Ha(w(ee), { get sellingPlans() {
            return l();
          }, get selectedSellingPlan() {
            return e(p);
          }, onChange: Q }), y(ee), b(R, ee);
        };
        O(pe, (R) => {
          e(h) && l().length > 1 && e(p) && !u() && R(re);
        }), y(S), y(B), b(ne, B);
      }, $$slots: { default: !0 } });
    }
    y(T), ke(() => Et(T, e(m))), b(n, T);
    var z = at(Z);
    return o(), z;
  }
  function Vk(n, t, r, a) {
    t()(r().subscribeByDefault ? void 0 : e(a));
  }
  Ke(Vg, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, onChange: {} }, [], [], !0);
  var Ak = $('<div class="kaching-bundles__subscriptions kaching-bundles__subscriptions--link"><button type="button" class="kaching-bundles__subscriptions__link"><!><!></button></div>');
  function Ag(n, t) {
    rt(t, !0);
    const r = () => Te(yi, "$selectedDealBarStore", s), a = () => Te(f, "$formatPrice", s), [s, o] = kt(), c = _(t, "subscriptions", 7), l = _(t, "sellingPlans", 7), i = _(t, "selectedSellingPlan", 7), u = _(t, "onChange", 7), g = _(t, "onRequestAddToCart", 7), k = $t(), f = xn(), h = d(() => lc(c())), p = d(() => {
      var X, B;
      const S = (B = (X = r()) == null ? void 0 : X.dealBar) == null ? void 0 : B.sellingPlanGid;
      if (S) return l().find((C) => C.id === en(S));
    }), x = d(() => {
      var X, B;
      return (B = (X = e(p)) != null ? X : i()) != null ? B : l()[0];
    }), m = d(() => {
      var X, B, S, C, F;
      return (F = (C = (B = (X = r()) == null ? void 0 : X.pricing.discountedPricesForSellingPlans.find((U) => {
        var H;
        return U.sellingPlanId === ((H = e(x)) == null ? void 0 : H.id);
      })) == null ? void 0 : B.discountedPrice) != null ? C : (S = r()) == null ? void 0 : S.pricing.discountedPrice) != null ? F : 0;
    }), I = d(() => {
      var X, B;
      return (B = (X = r()) == null ? void 0 : X.pricing.discountedPriceWithoutSellingPlan) != null ? B : 0;
    }), P = d(() => {
      var X, B;
      return (B = (X = r()) == null ? void 0 : X.pricing.fullPrice) != null ? B : 0;
    }), A = d(() => {
      var X, B, S;
      return yn({ priceFormatter: a(), product: (X = r()) == null ? void 0 : X.product, totalFullPrice: e(P), totalDiscountedPrice: c().subscribeByDefault ? e(I) : e(m), quantity: (S = (B = r()) == null ? void 0 : B.quantity) != null ? S : 1, sellingPlan: c().subscribeByDefault ? void 0 : e(x), unitQuantity: null });
    }), j = d(() => c().subscribeByDefault ? e(I) : e(m)), D = d(() => {
      const X = c().subscribeByDefault ? c().oneTimeTitle : c().subscribeTitle;
      return X ? e(A)(Te(k, "$translate", s)(X)) : "";
    });
    let Q, Z = !1;
    et(() => {
      const X = l().length !== 0 && c().subscribeByDefault ? e(x) : void 0;
      Z && (X == null ? void 0 : X.id) === Q || (Q = X == null ? void 0 : X.id, Z = !0, u()(X));
    });
    var T = { get subscriptions() {
      return c();
    }, set subscriptions(X) {
      c(X), v();
    }, get sellingPlans() {
      return l();
    }, set sellingPlans(X) {
      l(X), v();
    }, get selectedSellingPlan() {
      return i();
    }, set selectedSellingPlan(X) {
      i(X), v();
    }, get onChange() {
      return u();
    }, set onChange(X) {
      u(X), v();
    }, get onRequestAddToCart() {
      return g();
    }, set onRequestAddToCart(X) {
      g(X), v();
    } }, J = ze(), z = _e(J), G = (X) => {
      var B = Ak(), S = w(B);
      S.__click = [Vk, g, c, x];
      var C = w(S);
      je(C, () => e(D));
      var F = L(C), U = (H) => {
        var se = ze();
        je(_e(se), () => " • " + a()(e(j))), b(H, se);
      };
      O(F, (H) => {
        c().showPrices && r() && H(U);
      }), y(S), y(B), ke(() => Et(B, e(h))), b(X, B);
    };
    O(z, (X) => {
      l().length > 0 && e(D) && X(G);
    }), b(n, J);
    var ne = at(T);
    return o(), ne;
  }
  jn(["click"]), Ke(Ag, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, onChange: {}, onRequestAddToCart: {} }, [], [], !0);
  var qk = $('<div class="kaching-bundles__block-title"><!></div>'), Gk = $('<!> <div class="kaching-bundles__subscriptions-wrapper"><!></div>', 1);
  function qg(n, t) {
    rt(t, !0);
    const [r, a] = kt(), s = _(t, "subscriptions", 7), o = _(t, "sellingPlans", 7), c = _(t, "selectedSellingPlan", 7), l = _(t, "hideSellingPlanSelector", 7, !1), i = _(t, "hideTitle", 7, !1), u = _(t, "onChange", 7), g = _(t, "onRequestAddToCart", 7), k = $t(), f = d(() => s().title ? Te(k, "$translate", r)(s().title) : "");
    var h = { get subscriptions() {
      return s();
    }, set subscriptions(Q) {
      s(Q), v();
    }, get sellingPlans() {
      return o();
    }, set sellingPlans(Q) {
      o(Q), v();
    }, get selectedSellingPlan() {
      return c();
    }, set selectedSellingPlan(Q) {
      c(Q), v();
    }, get hideSellingPlanSelector() {
      return l();
    }, set hideSellingPlanSelector(Q = !1) {
      l(Q), v();
    }, get hideTitle() {
      return i();
    }, set hideTitle(Q = !1) {
      i(Q), v();
    }, get onChange() {
      return u();
    }, set onChange(Q) {
      u(Q), v();
    }, get onRequestAddToCart() {
      return g();
    }, set onRequestAddToCart(Q) {
      g(Q), v();
    } }, p = Gk(), x = _e(p), m = (Q) => {
      var Z = qk();
      je(w(Z), () => e(f)), y(Z), b(Q, Z);
    };
    O(x, (Q) => {
      e(f) && !i() && Q(m);
    });
    var I = L(x, 2), P = w(I), A = (Q) => {
      Vg(Q, { get subscriptions() {
        return s();
      }, get sellingPlans() {
        return o();
      }, get selectedSellingPlan() {
        return c();
      }, get hideSellingPlanSelector() {
        return l();
      }, get onChange() {
        return u();
      } });
    }, j = (Q) => {
      var Z = ze(), T = _e(Z), J = (G) => {
        Ag(G, { get subscriptions() {
          return s();
        }, get sellingPlans() {
          return o();
        }, get selectedSellingPlan() {
          return c();
        }, get onChange() {
          return u();
        }, get onRequestAddToCart() {
          return g();
        } });
      }, z = (G) => {
        Tg(G, { get subscriptions() {
          return s();
        }, get sellingPlans() {
          return o();
        }, get selectedSellingPlan() {
          return c();
        }, get hideSellingPlanSelector() {
          return l();
        }, get onChange() {
          return u();
        } });
      };
      O(T, (G) => {
        s().layout === "link" ? G(J) : G(z, !1);
      }, !0), b(Q, Z);
    };
    O(P, (Q) => {
      s().layout === "checkbox" ? Q(A) : Q(j, !1);
    }), y(I), b(n, p);
    var D = at(h);
    return a(), D;
  }
  Ke(qg, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, hideTitle: {}, onChange: {}, onRequestAddToCart: {} }, [], [], !0);
  var Ok = Gn('<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.584 21H42.834V14C42.834 6.279 36.555 0 28.834 0C21.113 0 14.834 6.279 14.834 14V21H13.084C10.1907 21 7.83398 23.3543 7.83398 26.25V50.75C7.83398 53.6457 10.1907 56 13.084 56H44.584C47.4773 56 49.834 53.6457 49.834 50.75V26.25C49.834 23.3543 47.4773 21 44.584 21ZM19.5007 14C19.5007 8.85267 23.6867 4.66667 28.834 4.66667C33.9813 4.66667 38.1673 8.85267 38.1673 14V21H19.5007V14ZM31.1673 39.018V44.3333C31.1673 45.6213 30.1243 46.6667 28.834 46.6667C27.5436 46.6667 26.5007 45.6213 26.5007 44.3333V39.018C25.1123 38.2083 24.1673 36.7197 24.1673 35C24.1673 32.4263 26.2603 30.3333 28.834 30.3333C31.4076 30.3333 33.5007 32.4263 33.5007 35C33.5007 36.7197 32.5557 38.2083 31.1673 39.018Z" fill="currentColor" transform="translate(21.5, 22)"></path></svg>');
  function Gg(n) {
    b(n, Ok());
  }
  Ke(Gg, {}, [], [], !0);
  var Fk = $('<img alt="Locked" class="kaching-bundles__progressive-gifts__gift__image"/>'), Lk = $('<img class="kaching-bundles__progressive-gifts__gift__image kaching-bundles__progressive-gifts__gift__image--locked-product"/>'), Ek = $('<div class="kaching-bundles__progressive-gifts__gift__image-wrapper"><!></div>'), jk = $('<div class="kaching-bundles__progressive-gifts__gift__title kaching-bundles__progressive-gifts__gift__title--locked"><!></div>'), Rk = $('<div class="kaching-bundles__progressive-gifts__gift__title kaching-bundles__progressive-gifts__gift__title--locked"><!></div>'), Nk = $('<span class="kaching-bundles__progressive-gifts__gift__label__text"><!></span>'), Qk = $('<span class="kaching-bundles__progressive-gifts__gift__label__text kaching-bundles__progressive-gifts__gift__label__text--crossed-out"><!></span>'), Wk = $('<div class="kaching-bundles__progressive-gifts__gift__label"><!> <!></div>'), Hk = $('<div class="kaching-bundles__progressive-gifts__gift__content"><!> <!> <!></div>'), Uk = $('<div class="kaching-bundles__progressive-gifts__gift__image-wrapper"><img class="kaching-bundles__progressive-gifts__gift__image"/></div>'), Zk = $('<span class="kaching-bundles__progressive-gifts__gift__title"><!></span>'), Jk = $('<span class="kaching-bundles__progressive-gifts__gift__label__text"><!></span>'), Yk = $('<span class="kaching-bundles__progressive-gifts__gift__label__text kaching-bundles__progressive-gifts__gift__label__text--crossed-out"><!></span>'), Kk = $('<div class="kaching-bundles__progressive-gifts__gift__label"><!> <!></div>'), Xk = $('<div><div class="kaching-bundles__progressive-gifts__gift__content"><!> <div class="kaching-bundles__progressive-gifts__gift__details"><div class="kaching-bundles__progressive-gifts__gift__details__content"><!> <!></div> <!></div></div></div>');
  function Og(n, t) {
    rt(t, !0);
    const r = () => Te(P, "$config", o), a = () => Te(x, "$translate", o), s = () => Te(I, "$getMediaImageUrl", o), [o, c] = kt(), l = _(t, "progressiveGifts", 7), i = _(t, "gift", 7), u = _(t, "product", 7), g = _(t, "selectedDealBarIndex", 7), k = _(t, "sellingPlan", 7), f = _(t, "onChange", 7), h = _(t, "onUnlock", 7), p = _(t, "onSubscribe", 7), x = $t(), m = xn(), I = On(), P = Sn(), A = d(() => i().differentVariantsEnabled), j = d(() => {
      if (u()) return { ...u(), variants: mi(u(), i(), r().preview) };
    });
    let D = Fe(ut([]));
    const Q = d(() => (function(V, N, de) {
      return V.length > 0 ? V : N != null && N.availableForSale && N.variants.length > 0 ? Array.from({ length: de }, () => N.variants[0].id) : [];
    })(e(D), e(j), i().quantity)), Z = d(() => u() && e(Q).length > 0 ? e(Q).map((V) => u().variants.find((N) => N.id === V)).filter((V) => V !== void 0) : []), T = d(() => {
      var V;
      return yn({ priceFormatter: Te(m, "$formatPrice", o), product: u(), totalFullPrice: ((V = e(Z)) == null ? void 0 : V.reduce((N, de) => {
        var pe;
        return N + ((pe = de == null ? void 0 : de.price) != null ? pe : 0);
      }, 0)) || 0, totalDiscountedPrice: 0, quantity: i().quantity, unitQuantity: Vr(e(Z).map((N) => ({ variant: N, quantity: 1 }))) });
    }), J = d(() => e(T)(a()(i().title))), z = d(() => e(T)(a()(i().lockedTitle))), G = d(() => e(T)(a()(i().label))), ne = d(() => e(T)(a()(i().labelCrossedOut))), X = d(() => g() === null || !Ds(i(), g() + 1)), B = d(() => Wo(i(), k())), S = d(() => e(X) || e(B));
    function C() {
      e(X) && h()(), e(B) && p()();
    }
    const F = d(() => {
      var V, N, de;
      return i().giftType === "shipping" ? Uo : ((N = (V = e(Z)) == null ? void 0 : V[0]) == null ? void 0 : N.image) || ((de = u()) == null ? void 0 : de.image);
    }), U = d(() => i().mediaImageGID ? s()(i().mediaImageGID) : e(F)), H = d(() => !l().inheritStyle && l().style && s()(l().style.lockedMediaImageGID)), se = d(() => l().showLockedGiftProducts && !e(H)), E = d(() => e(se) && !!e(U));
    et(() => {
      if (u() && e(Z) && !e(X)) {
        const V = Object.values(e(Z).reduce((N, de) => (N[de.id] ? N[de.id].quantity += 1 : N[de.id] = { variant: de, quantity: 1 }, N), {}));
        tn(() => f()({ product: u(), variants: V }));
      } else tn(() => f()(void 0));
    }), _r(() => {
      i().productGID;
    }), et(() => {
      e(S) && e(U) && (new Image().src = e(U));
    });
    const q = d(() => !(i().giftType !== "product" || !u() || u().availableForSale && mi(u(), i(), !1).length !== 0));
    var ie = { get progressiveGifts() {
      return l();
    }, set progressiveGifts(V) {
      l(V), v();
    }, get gift() {
      return i();
    }, set gift(V) {
      i(V), v();
    }, get product() {
      return u();
    }, set product(V) {
      u(V), v();
    }, get selectedDealBarIndex() {
      return g();
    }, set selectedDealBarIndex(V) {
      g(V), v();
    }, get sellingPlan() {
      return k();
    }, set sellingPlan(V) {
      k(V), v();
    }, get onChange() {
      return f();
    }, set onChange(V) {
      f(V), v();
    }, get onUnlock() {
      return h();
    }, set onUnlock(V) {
      h(V), v();
    }, get onSubscribe() {
      return p();
    }, set onSubscribe(V) {
      p(V), v();
    } }, ue = ze(), W = _e(ue), ae = (V) => {
      var N = ze(), de = _e(N), pe = (re) => {
        var R = ze(), ee = _e(R), ce = (oe) => {
          Xt(oe, { element: "div", class: "kaching-bundles__progressive-gifts__gift kaching-bundles__progressive-gifts__gift--locked", onclick: C, children: (Be, be) => {
            var K = Hk(), Y = w(K), ge = (Ve) => {
              var fe = Ek(), We = w(fe), $e = (xe) => {
                var Me = Fk();
                ke(() => Ie(Me, "src", e(H))), b(xe, Me);
              }, M = (xe) => {
                var Me = ze(), qe = _e(Me), Oe = (Ae) => {
                  var Le = Lk();
                  ke(() => {
                    var nt, Je;
                    Ie(Le, "src", e(U)), Ie(Le, "alt", (Je = (nt = u()) == null ? void 0 : nt.title) != null ? Je : "");
                  }), b(Ae, Le);
                }, De = (Ae) => {
                  Gg(Ae);
                };
                O(qe, (Ae) => {
                  e(E) ? Ae(Oe) : Ae(De, !1);
                }, !0), b(xe, Me);
              };
              O(We, (xe) => {
                e(H) ? xe($e) : xe(M, !1);
              }), y(fe), b(Ve, fe);
            };
            O(Y, (Ve) => {
              !e(E) && e(se) || Ve(ge);
            });
            var we = L(Y, 2), me = (Ve) => {
              var fe = jk();
              je(w(fe), () => e(z)), y(fe), b(Ve, fe);
            }, Pe = (Ve) => {
              var fe = ze(), We = _e(fe), $e = (M) => {
                var xe = Rk();
                je(w(xe), () => e(J)), y(xe), b(M, xe);
              };
              O(We, (M) => {
                e(J) && M($e);
              }, !0), b(Ve, fe);
            };
            O(we, (Ve) => {
              e(se) ? Ve(Pe, !1) : Ve(me);
            });
            var Ge = L(we, 2), Ze = (Ve) => {
              var fe = Wk(), We = w(fe), $e = (Me) => {
                var qe = Nk();
                je(w(qe), () => e(G)), y(qe), b(Me, qe);
              };
              O(We, (Me) => {
                e(G) && Me($e);
              });
              var M = L(We, 2), xe = (Me) => {
                var qe = Qk();
                je(w(qe), () => e(ne)), y(qe), b(Me, qe);
              };
              O(M, (Me) => {
                e(ne) && Me(xe);
              }), y(fe), b(Ve, fe);
            };
            O(Ge, (Ve) => {
              (e(G) || e(ne)) && l().showLockedGiftLabels && Ve(Ze);
            }), y(K), b(Be, K);
          }, $$slots: { default: !0 } });
        }, ve = (oe) => {
          var Be = Xk();
          let be;
          var K = w(Be), Y = w(K), ge = ($e) => {
            var M = Uk(), xe = w(M);
            y(M), ke(() => {
              var Me, qe;
              Ie(xe, "src", e(U)), Ie(xe, "alt", (qe = (Me = u()) == null ? void 0 : Me.title) != null ? qe : "");
            }), b($e, M);
          };
          O(Y, ($e) => {
            e(U) && $e(ge);
          });
          var we = L(Y, 2), me = w(we), Pe = w(me), Ge = ($e) => {
            var M = Zk();
            je(w(M), () => e(J)), y(M), b($e, M);
          };
          O(Pe, ($e) => {
            e(J) && $e(Ge);
          });
          var Ze = L(Pe, 2), Ve = ($e) => {
            var M = Kk(), xe = w(M), Me = (De) => {
              var Ae = Jk();
              je(w(Ae), () => e(G)), y(Ae), b(De, Ae);
            };
            O(xe, (De) => {
              e(G) && De(Me);
            });
            var qe = L(xe, 2), Oe = (De) => {
              var Ae = Yk();
              je(w(Ae), () => e(ne)), y(Ae), b(De, Ae);
            };
            O(qe, (De) => {
              e(ne) && De(Oe);
            }), y(M), b($e, M);
          };
          O(Ze, ($e) => {
            (e(G) || e(ne)) && $e(Ve);
          }), y(me);
          var fe = L(me, 2), We = ($e) => {
            var M = ze();
            Gt(_e(M), 17, () => ({ length: e(A) ? i().quantity : 1 }), Qr, (xe, Me, qe) => {
              var Oe = ze(), De = _e(Oe), Ae = (Le) => {
                {
                  let nt = d(() => e(A) ? qe + 1 : void 0);
                  Yn(Le, { get product() {
                    return e(j);
                  }, get selectedVariantId() {
                    return e(Q)[qe];
                  }, get number() {
                    return e(nt);
                  }, forceDropdown: !0, onChange: (Je) => (function(Ne, Vt) {
                    e(A) ? te(D, [...e(Q).slice(0, Vt), Ne, ...e(Q).slice(Vt + 1)], !0) : te(D, Array.from({ length: i().quantity }, () => Ne), !0);
                  })(Je, qe) });
                }
              };
              O(De, (Le) => {
                e(Q)[qe] !== void 0 && Le(Ae);
              }), b(xe, Oe);
            }), b($e, M);
          };
          O(fe, ($e) => {
            e(j) && e(j).variants.length > 1 && e(Q).length > 0 && $e(We);
          }), y(we), y(K), y(Be), ke(($e) => be = Rt(Be, 1, "kaching-bundles__progressive-gifts__gift", null, be, $e), [() => ({ "kaching-bundles__progressive-gifts__gift--out-of-stock": r().preview && e(q) })]), b(oe, Be);
        };
        O(ee, (oe) => {
          e(S) ? oe(ce) : oe(ve, !1);
        }), b(re, R);
      };
      O(de, (re) => {
        var R;
        (u() && ((R = e(Z)) != null && R.length || r().preview && e(q)) || i().giftType === "shipping") && re(pe);
      }), b(V, N);
    };
    O(W, (V) => {
      e(S) && l().hideLockedGifts || V(ae);
    }), b(n, ue);
    var he = at(ie);
    return c(), he;
  }
  Ke(Og, { progressiveGifts: {}, gift: {}, product: {}, selectedDealBarIndex: {}, sellingPlan: {}, onChange: {}, onUnlock: {}, onSubscribe: {} }, [], [], !0);
  var em = $('<span class="kaching-bundles__progressive-gifts__title"><!></span>'), tm = $('<span class="kaching-bundles__progressive-gifts__subtitle"><!></span>'), nm = $('<div class="kaching-bundles__progressive-gifts"><div class="kaching-bundles__progressive-gifts__header"><!> <!></div> <div></div></div>');
  function Fg(n, t) {
    rt(t, !0);
    const r = () => Te(x, "$config", s), a = () => Te(p, "$translate", s), [s, o] = kt(), c = _(t, "progressiveGifts", 7), l = _(t, "dealBlock", 7), i = _(t, "otherProducts", 7), u = _(t, "selectedDealBarIndex", 7), g = _(t, "sellingPlan", 7), k = _(t, "onChange", 7), f = _(t, "onUnlock", 7), h = _(t, "onSubscribe", 7), p = $t(), x = Sn();
    let m = Fe(ut({}));
    const I = d(() => ((J) => {
      const { progressiveGifts: z, colors: G, fonts: ne } = J, X = (z == null ? void 0 : z.inheritStyle) || !(z != null && z.style);
      return mn({ "kaching-bundles-progressive-gifts-title-color": Qe(z.titleColor), "kaching-bundles-progressive-gifts-title-alignment": z.titleAlignment, "kaching-bundles-progressive-gifts-title-size": z.titleSize + "px", "kaching-bundles-progressive-gifts-title-weight": gr(z.titleStyle), "kaching-bundles-progressive-gifts-title-style": hr(z.titleStyle), "kaching-bundles-progressive-gifts-subtitle-color": Qe(z.subtitleColor), "kaching-bundles-progressive-gifts-subtitle-alignment": z.subtitleAlignment, "kaching-bundles-progressive-gifts-subtitle-size": z.subtitleSize + "px", "kaching-bundles-progressive-gifts-subtitle-weight": gr(z.subtitleStyle), "kaching-bundles-progressive-gifts-subtitle-style": hr(z.subtitleStyle), "kaching-bundles-progressive-gifts-image-size": X ? void 0 : z.style.imageSize + "px", "kaching-bundles-progressive-gifts-border-radius": (X ? J.cornerRadius : z.style.cornerRadius) + "px", "kaching-bundles-progressive-gifts-label-background-color": Qe(X ? G.progressiveGiftsLabelBackground || G.labelBackground : z.style.labelBackgroundColor), "kaching-bundles-progressive-gifts-label-text-color": Qe(X ? G.label : z.style.labelTextColor), "kaching-bundles-progressive-gifts-label-text-size": (X ? ne.label.size : z.style.labelTextSize) + "px", "kaching-bundles-progressive-gifts-background-color": Qe(X ? G.selectedBackground : z.style.backgroundColor), "kaching-bundles-progressive-gifts-border-color": Qe(X ? G.border : z.style.borderColor), "kaching-bundles-progressive-gifts-text-color": Qe(X ? G.title : z.style.textColor), "kaching-bundles-progressive-gifts-text-size": X ? void 0 : z.style.textSize + "px", "kaching-bundles-progressive-gifts-locked-background-color": Qe(X ? G.background : z.style.lockedBackgroundColor), "kaching-bundles-progressive-gifts-locked-border-color": Qe(X ? { ...G.border, alpha: 0.3 * G.border.alpha } : z.style.lockedBorderColor), "kaching-bundles-progressive-gifts-locked-text-color": X ? void 0 : Qe(z.style.lockedTextColor), "kaching-bundles-progressive-gifts-locked-text-size": X ? void 0 : z.style.lockedTextSize + "px", "kaching-bundles-progressive-gifts-locked-icon-color": X ? void 0 : Qe(z.style.lockedIconColor) });
    })(l()));
    function P() {
      const J = Object.entries(e(m)).map(([z, G]) => ({ id: z, variants: G.variants, product: G.product }));
      k()(J);
    }
    const A = d(() => c().gifts.flatMap((J) => {
      const z = J.giftType === "product" && J.productGID ? i().find((ne) => ne.id === en(J.productGID)) : void 0;
      if (!r().preview && J.giftType === "product" && !(z != null && z.availableForSale)) return [];
      const G = z && !r().preview ? Tr(z) : z;
      return { gift: J, product: G };
    }));
    et(() => {
      const J = new Set(c().gifts.map((G) => G.id)), z = Object.keys(e(m)).filter((G) => !J.has(G));
      if (z.length) {
        for (const G of z) delete e(m)[G];
        P();
      }
    });
    var j = { get progressiveGifts() {
      return c();
    }, set progressiveGifts(J) {
      c(J), v();
    }, get dealBlock() {
      return l();
    }, set dealBlock(J) {
      l(J), v();
    }, get otherProducts() {
      return i();
    }, set otherProducts(J) {
      i(J), v();
    }, get selectedDealBarIndex() {
      return u();
    }, set selectedDealBarIndex(J) {
      u(J), v();
    }, get sellingPlan() {
      return g();
    }, set sellingPlan(J) {
      g(J), v();
    }, get onChange() {
      return k();
    }, set onChange(J) {
      k(J), v();
    }, get onUnlock() {
      return f();
    }, set onUnlock(J) {
      f(J), v();
    }, get onSubscribe() {
      return h();
    }, set onSubscribe(J) {
      h(J), v();
    } }, D = ze(), Q = _e(D), Z = (J) => {
      var z = nm(), G = w(z), ne = w(G), X = (U) => {
        var H = em();
        je(w(H), () => a()(c().title)), y(H), b(U, H);
      };
      O(ne, (U) => {
        c().title && U(X);
      });
      var B = L(ne, 2), S = (U) => {
        var H = tm();
        je(w(H), () => a()(c().subtitle)), y(H), b(U, H);
      };
      O(B, (U) => {
        c().subtitle && U(S);
      }), y(G);
      var C = L(G, 2);
      let F;
      Gt(C, 21, () => e(A), ({ gift: U, product: H }) => U.id, (U, H) => {
        let se = () => e(H).gift;
        Og(U, { get progressiveGifts() {
          return c();
        }, get gift() {
          return se();
        }, get product() {
          return e(H).product;
        }, get selectedDealBarIndex() {
          return u();
        }, get sellingPlan() {
          return g();
        }, onChange: (E) => (function(q, ie) {
          ie ? e(m)[q] = ie : delete e(m)[q], P();
        })(se().id, E), onUnlock: () => f()(se().unlockAtBar - 1), get onSubscribe() {
          return h();
        } });
      }), y(C), y(z), ke((U) => {
        Et(z, e(I)), F = Rt(C, 1, "kaching-bundles__progressive-gifts__gifts", null, F, U);
      }, [() => ({ "kaching-bundles__progressive-gifts__gifts--vertical": c().layout === "vertical" })]), b(J, z);
    };
    O(Q, (J) => {
      c().gifts.length > 0 && J(Z);
    }), b(n, D);
    var T = at(j);
    return o(), T;
  }
  Ke(Fg, { progressiveGifts: {}, dealBlock: {}, otherProducts: {}, selectedDealBarIndex: {}, sellingPlan: {}, onChange: {}, onUnlock: {}, onSubscribe: {} }, [], [], !0);
  var rm = $('<span class="kaching-bundles__bar-title"><!></span>'), am = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), im = $('<div class="kaching-bundles__bar-price"><!></div>'), lm = $('<div class="kaching-bundles__bar-full-price"><!></div>'), sm = $('<span><!></span> <img class="kaching-bundles__checkbox-upsells__image"/> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div></div> <div class="kaching-bundles__bar-pricing"><!> <!></div>', 1), om = $('<div class="kaching-bundles__bar-variants kaching-bundles__bar-variants--visible"><!> <!></div>'), cm = $('<div class="kaching-bundles__bar-variants kaching-bundles__bar-variants--visible"><!></div>'), um = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!></div>', 1), dm = $("<div><!></div>");
  function Lg(n, t) {
    rt(t, !0);
    const r = () => Te(x, "$config", o), a = () => Te(h, "$formatPrice", o), s = () => Te(ae, "$translate", o), [o, c] = kt(), l = _(t, "checkboxUpsell", 7), i = _(t, "product", 7), u = _(t, "dealBlock", 7), g = _(t, "dealSellingPlan", 7), k = _(t, "dealBarQuantity", 7), f = _(t, "onChange", 7), h = xn(), p = On(), x = Sn();
    let m = Fe(!1), I = Fe(1), P = Fe(ut({})), A = Fe(void 0);
    const j = d(() => {
      var be;
      return (be = l().preselected) != null && be;
    }), D = d(() => {
      var be;
      return e(m) || !((be = l().showProductOptionsOnlyWhenSelected) == null || be);
    });
    et(() => {
      te(m, e(j), !0);
    }), et(() => {
      l().matchQuantityWithDealBar && te(I, k(), !0);
    });
    const Q = d(() => !!l().variantGIDs), Z = d(() => {
      var be, K;
      return e(Q) && i() ? i().variants.filter((Y) => l().variantGIDs.some((ge) => en(ge) === Y.id)) : (K = (be = i()) == null ? void 0 : be.variants) != null ? K : [];
    }), T = d(() => e(I) > 1 && e(Z).length > 1), J = d(() => (function(be, K) {
      var Y, ge;
      const we = [be.defaultVariantGID, ...(Y = be.variantGIDs) != null ? Y : []];
      for (const me of we) {
        if (!me) continue;
        const Pe = en(me);
        if (K.some((Ge) => Ge.id === Pe && Ge.availableForSale)) return Pe;
      }
      return (ge = K.find((me) => me.availableForSale)) == null ? void 0 : ge.id;
    })(l(), e(Z))), z = d(() => {
      if (e(J) === void 0) return [];
      const be = [];
      for (let K = 0; K < e(I); K++) {
        const Y = e(P)[K];
        Y !== void 0 ? be.push(Y) : be.push(e(J));
      }
      return be;
    }), G = d(() => (function(be, K) {
      if (!K) return [];
      const Y = {};
      for (const ge of be) {
        const we = Y[ge];
        if (we) {
          we.quantity += 1;
          continue;
        }
        const me = K.variants.find((Pe) => Pe.id === ge);
        me && (Y[ge] = { variant: me, quantity: 1 });
      }
      return Object.values(Y);
    })(e(z), i())), ne = d(() => {
      var be;
      return (be = e(G)[0]) == null ? void 0 : be.variant;
    }), X = d(() => {
      var be;
      return (be = l().subscriptionEnabled) == null || be;
    }), B = d(() => {
      var be;
      return (be = l().subscriptionType) != null ? be : "deal";
    }), S = d(() => e(X) && e(B) === "always" && i() && e(ne) ? zl(i(), [e(ne)]) : []), C = d(() => e(S).find((be) => be.id === e(A)) || e(S)[0]);
    et(() => {
      var be;
      e(S).some((K) => {
        var Y;
        return K.id === ((Y = g()) == null ? void 0 : Y.id);
      }) && te(A, (be = g()) == null ? void 0 : be.id, !0);
    });
    const F = d(() => {
      if (i() && e(ne) && e(X))
        return e(B) === "deal" ? g() ? ir(i(), e(ne), g()) : void 0 : e(C);
    }), U = d(() => u().priceRounding ? { perItem: u().showPricesPerItem, precision: u().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0);
    function H(be) {
      return Sa({ discountType: l().discountType, discountValue: l().discountValue, discountQuantity: 1, variantQuantities: e(G), currencyRate: r().currencyRate, priceRounding: e(U), sellingPlan: be, onAmountDiscountExceedsPrice: Dr });
    }
    let se = d(() => H(e(F))), E = d(() => e(G).reduce((be, { variant: K, quantity: Y }) => be + Math.max(K.price, K.compareAtPrice || 0) * Y, 0));
    const q = d(() => i() && e(ne) ? ir(i(), e(ne), void 0) : void 0), ie = d(() => e(X) && e(B) === "always" ? e(se) : H(e(q))), ue = d(() => !i() || !e(ne) ? [] : zl(i(), [e(ne)]).map((be) => {
      let K;
      return K = e(X) ? e(B) === "always" ? e(C) : be : e(q), { sellingPlanId: be.id, discountedPrice: H(K) };
    })), W = d(() => yn({ priceFormatter: a(), product: i(), totalFullPrice: e(E), totalDiscountedPrice: e(se), quantity: e(I), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: Vr(e(G)), sellingPlan: e(F) })), ae = $t();
    let he = d(() => e(W)(s()(l().title))), V = d(() => e(W)(s()(l().subtitle))), N = d(() => e(E) && e(E) > e(se));
    const de = d(() => Te(p, "$getMediaImageUrl", o)(l().mediaImageGID)), pe = d(() => ((be, K) => {
      const Y = $s(be);
      if (Y.length > 0) return Y.filter((we) => we.attachedTo.type === "checkboxUpsell" && we.attachedTo.upsellId === K.id);
      if (be.badgesEnabled === !1) return [];
      const ge = Ld(K);
      return ge ? [ge] : [];
    })(u(), { id: l().id, badgeStyle: l().badgeStyle, badgeText: l().badgeText, badgeImageGID: l().badgeImageGID }).map((be) => Qa(be, s(), e(W)))), re = d(() => Wa(e(pe)));
    function R() {
      te(m, !e(m));
    }
    function ee(be, K) {
      te(P, { ...e(P), [be]: K }, !0);
    }
    et(() => {
      if (i() && e(G).length > 0 && e(m)) {
        const be = e(F);
        tn(() => f()({ product: i(), variants: e(G), sellingPlan: be, pricing: { discountedPrice: e(se), fullPrice: e(E), discountedPriceWithoutSellingPlan: e(ie), discountedPricesForSellingPlans: e(ue) } }));
      } else tn(() => f()(void 0));
    });
    var ce = { get checkboxUpsell() {
      return l();
    }, set checkboxUpsell(be) {
      l(be), v();
    }, get product() {
      return i();
    }, set product(be) {
      i(be), v();
    }, get dealBlock() {
      return u();
    }, set dealBlock(be) {
      u(be), v();
    }, get dealSellingPlan() {
      return g();
    }, set dealSellingPlan(be) {
      g(be), v();
    }, get dealBarQuantity() {
      return k();
    }, set dealBarQuantity(be) {
      k(be), v();
    }, get onChange() {
      return f();
    }, set onChange(be) {
      f(be), v();
    } }, ve = dm();
    let oe;
    ki(w(ve), { element: "div", get borderHost() {
      return e(re);
    }, children: (be, K) => {
      var Y = um(), ge = _e(Y);
      Gt(ge, 17, () => e(pe), ($e) => $e.id, ($e, M) => {
        Ba($e, { get badge() {
          return e(M);
        }, blockLayout: "vertical" });
      });
      var we = L(ge, 2), me = w(we);
      Xt(me, { element: "div", class: "kaching-bundles__bar-main", role: "checkbox", get "aria-checked"() {
        return e(m);
      }, onclick: R, children: ($e, M) => {
        var xe = sm(), Me = _e(xe);
        let qe;
        var Oe = w(Me), De = (Lt) => {
          Ts(Lt);
        };
        O(Oe, (Lt) => {
          e(m) && Lt(De);
        }), y(Me);
        var Ae = L(Me, 2), Le = L(Ae, 2), nt = w(Le), Je = w(nt);
        lt(w(Je), () => e(he), (Lt) => {
          var Ce = rm();
          je(w(Ce), () => e(he)), y(Ce), b(Lt, Ce);
        }), y(Je);
        var Ne = L(Je, 2), Vt = (Lt) => {
          var Ce = ze();
          lt(_e(Ce), () => e(V), (Re) => {
            var tt = am();
            je(w(tt), () => e(V)), y(tt), b(Re, tt);
          }), b(Lt, Ce);
        };
        O(Ne, (Lt) => {
          e(V) && Lt(Vt);
        }), y(nt), y(Le);
        var Dt = L(Le, 2), un = w(Dt);
        lt(un, () => e(se), (Lt) => {
          var Ce = im();
          je(w(Ce), () => a()(e(se))), y(Ce), ke((Re) => Ie(Ce, "data-a11y-label", Re), [() => s()("system.price")]), b(Lt, Ce);
        });
        var ln = L(un, 2), sn = (Lt) => {
          var Ce = ze();
          lt(_e(Ce), () => e(E), (Re) => {
            var tt = lm();
            je(w(tt), () => a()(e(E))), y(tt), ke((it) => Ie(tt, "data-a11y-label", it), [() => s()("system.original_price")]), b(Re, tt);
          }), b(Lt, Ce);
        };
        O(ln, (Lt) => {
          e(N) && Lt(sn);
        }), y(Dt), ke((Lt) => {
          var Ce, Re, tt;
          qe = Rt(Me, 1, "kaching-bundles__checkbox-upsells__checkbox", null, qe, Lt), Ie(Ae, "src", e(de) || ((Ce = e(ne)) == null ? void 0 : Ce.image) || ((Re = i()) == null ? void 0 : Re.image)), Ie(Ae, "alt", (tt = i()) == null ? void 0 : tt.title);
        }, [() => ({ "kaching-bundles__checkbox-upsells__checkbox--selected": e(m) })]), b($e, xe);
      }, $$slots: { default: !0 } });
      var Pe = L(me, 2), Ge = ($e) => {
        var M = om(), xe = w(M);
        {
          let De = d(() => ({ ...i(), variants: e(Z) }));
          Pa(xe, { get product() {
            return e(De);
          } });
        }
        var Me = L(xe, 2), qe = (De) => {
          var Ae = ze();
          Gt(_e(Ae), 17, () => ({ length: e(I) }), Qr, (Le, nt, Je) => {
            {
              let Ne = d(() => ({ ...i(), variants: e(Z) })), Vt = d(() => e(I) > 1 ? Je + 1 : void 0);
              Yn(Le, { get product() {
                return e(Ne);
              }, get selectedVariantId() {
                return e(z)[Je];
              }, get number() {
                return e(Vt);
              }, onChange: (Dt) => ee(Je, Dt) });
            }
          }), b(De, Ae);
        }, Oe = (De) => {
          {
            let Ae = d(() => ({ ...i(), variants: e(Z) }));
            Yn(De, { get product() {
              return e(Ae);
            }, get selectedVariantId() {
              return e(z)[0];
            }, onChange: (Le) => ee(0, Le) });
          }
        };
        O(Me, (De) => {
          e(T) ? De(qe) : De(Oe, !1);
        }), y(M), b($e, M);
      };
      O(Pe, ($e) => {
        e(D) && e(Z).length > 1 && e(z).length > 0 && $e(Ge);
      });
      var Ze = L(Pe, 2), Ve = ($e) => {
        var M = cm();
        Ha(w(M), { get sellingPlans() {
          return e(S);
        }, get selectedSellingPlan() {
          return e(C);
        }, onChange: (xe) => te(A, xe.id, !0) }), y(M), b($e, M);
      };
      O(Ze, ($e) => {
        e(D) && e(S).length > 1 && e(C) && $e(Ve);
      });
      var fe = L(Ze, 2), We = ($e) => {
        Fl($e, { get value() {
          return e(I);
        }, min: 1, onChange: (M) => te(I, M, !0) });
      };
      O(fe, ($e) => {
        e(D) && l().quantitySelector && $e(We);
      }), y(we), b(be, Y);
    }, $$slots: { default: !0 } }), y(ve), ke((be) => oe = Rt(ve, 1, "kaching-bundles__checkbox-upsells__upsell kaching-bundles__bar", null, oe, be), [() => {
      var be;
      return { "kaching-bundles__bar--selected": e(m), "kaching-bundles__bar--disabled": r().preview && !((be = i()) != null && be.availableForSale) };
    }]), b(n, ve);
    var Be = at(ce);
    return c(), Be;
  }
  Ke(Lg, { checkboxUpsell: {}, product: {}, dealBlock: {}, dealSellingPlan: {}, dealBarQuantity: {}, onChange: {} }, [], [], !0);
  var gm = $('<div class="kaching-bundles__block-title"><!></div>'), hm = $('<div class="kaching-bundles__checkbox-upsells"><!> <div class="kaching-bundles__checkbox-upsells__upsells"></div></div>');
  function Eg(n, t) {
    rt(t, !0);
    const [r, a] = kt(), s = _(t, "checkboxUpsells", 7), o = _(t, "dealBlock", 7), c = _(t, "otherProducts", 7), l = _(t, "complementaryProducts", 7), i = _(t, "dealSellingPlan", 7), u = _(t, "dealBarQuantity", 7), g = _(t, "onChange", 7), k = Sn(), f = $t(), h = d(() => s().title ? Te(f, "$translate", r)(s().title) : "");
    let p = Fe(ut({}));
    const x = d(() => l().map(Tr)), m = Math.floor(1e3 * Math.random()), I = d(() => s().upsells.flatMap((T, J) => {
      if (T.productSource === "complementary") {
        const ne = e(x)[(J + m) % (e(x).length || 1)];
        return ne ? { upsell: T, product: ne } : [];
      }
      const z = T.productGID ? c().find((ne) => ne.id === en(T.productGID)) : void 0;
      if (!Te(k, "$config", r).preview && !(z != null && z.availableForSale)) return [];
      const G = z && Tr(z);
      return { upsell: T, product: G };
    }));
    var P = { get checkboxUpsells() {
      return s();
    }, set checkboxUpsells(T) {
      s(T), v();
    }, get dealBlock() {
      return o();
    }, set dealBlock(T) {
      o(T), v();
    }, get otherProducts() {
      return c();
    }, set otherProducts(T) {
      c(T), v();
    }, get complementaryProducts() {
      return l();
    }, set complementaryProducts(T) {
      l(T), v();
    }, get dealSellingPlan() {
      return i();
    }, set dealSellingPlan(T) {
      i(T), v();
    }, get dealBarQuantity() {
      return u();
    }, set dealBarQuantity(T) {
      u(T), v();
    }, get onChange() {
      return g();
    }, set onChange(T) {
      g(T), v();
    } }, A = hm(), j = w(A), D = (T) => {
      var J = gm();
      je(w(J), () => e(h)), y(J), b(T, J);
    };
    O(j, (T) => {
      e(h) && T(D);
    });
    var Q = L(j, 2);
    Gt(Q, 21, () => e(I), ({ upsell: T, product: J }) => T.id, (T, J) => {
      let z = () => e(J).upsell;
      Lg(T, { get checkboxUpsell() {
        return z();
      }, get product() {
        return e(J).product;
      }, get dealBlock() {
        return o();
      }, get dealSellingPlan() {
        return i();
      }, get dealBarQuantity() {
        return u();
      }, onChange: (G) => (function(ne, X) {
        var B;
        X ? e(p)[ne] = X : delete e(p)[ne];
        const S = Object.entries(e(p)).flatMap(([E, q]) => q.variants.map(({ variant: ie, quantity: ue }) => ({ id: E, variant: ie, product: q.product, quantity: ue, sellingPlan: q.sellingPlan })));
        let C = 0, F = 0, U = 0;
        const H = /* @__PURE__ */ new Map();
        for (const E of Object.values(e(p))) {
          C += E.pricing.discountedPrice, F += E.pricing.fullPrice, U += E.pricing.discountedPriceWithoutSellingPlan;
          for (const q of E.pricing.discountedPricesForSellingPlans) H.set(q.sellingPlanId, ((B = H.get(q.sellingPlanId)) != null ? B : 0) + q.discountedPrice);
        }
        const se = Array.from(H, ([E, q]) => ({ sellingPlanId: E, discountedPrice: q }));
        g()(S, { discountedPrice: C, fullPrice: F, discountedPriceWithoutSellingPlan: U, discountedPricesForSellingPlans: se });
      })(z().id, G) });
    }), y(Q), y(A), b(n, A);
    var Z = at(P);
    return a(), Z;
  }
  Ke(Eg, { checkboxUpsells: {}, dealBlock: {}, otherProducts: {}, complementaryProducts: {}, dealSellingPlan: {}, dealBarQuantity: {}, onChange: {} }, [], [], !0);
  var pm = $('<div class="kaching-bundles__timer" role="timer"><div class="kaching-bundles__timer-title"><!></div></div>');
  function jg(n, t) {
    rt(t, !0);
    const [r, a] = kt(), s = _(t, "timer", 7), o = $t(), c = d(() => ((D) => {
      const { textColor: Q, backgroundColor: Z, titleAlignment: T, titleStyle: J, titleSize: z } = D;
      return mn({ "kaching-bundles-timer-background-color": Qe(Z), "kaching-bundles-timer-text-color": Qe(Q), "kaching-bundles-timer-title-alignment": T, "kaching-bundles-timer-title-font-weight": J ? gr(J) : null, "kaching-bundles-timer-title-font-style": J ? hr(J) : null, "kaching-bundles-timer-title-size": z ? z + "px" : null });
    })(s()));
    function l() {
      const D = new Zo(), Q = new Zo(D);
      return Q.setHours(24, 0, 0, 0), Math.floor((Q.getTime() - D.getTime()) / 1e3);
    }
    function i() {
      if (!s().endTimestamp) return 0;
      const D = new Zo();
      return Math.max(0, Math.floor((s().endTimestamp - D.getTime()) / 1e3));
    }
    function u() {
      return s().type === "midnight" ? l() : s().type === "custom" ? i() : 60 * s().minutes;
    }
    let g = Fe(ut(u())), k = d(() => s().type !== "custom" || e(g) > 0);
    et(() => {
      te(g, u(), !0);
    }), et(() => {
      const D = window.setInterval(() => {
        s().type === "midnight" ? te(g, l(), !0) : s().type === "custom" ? te(g, i(), !0) : te(g, e(g) <= 1 ? u() : e(g) - 1, !0);
      }, 1e3);
      return () => window.clearInterval(D);
    });
    const f = d(() => Te(o, "$translate", r)(s().title)), h = d(() => (function(D) {
      const Q = Math.floor(D / 86400), Z = Math.floor(D % 86400 / 3600), T = Math.floor(D % 3600 / 60), J = D % 60, z = (G) => G.toString().padStart(2, "0");
      return s().type === "custom" && Q > 0 ? `${Intl.NumberFormat(navigator.language, { style: "unit", unit: "day", unitDisplay: "narrow" }).format(Q)} ${z(Z)}:${z(T)}:${z(J)}` : Z > 0 ? `${z(Z)}:${z(T)}:${z(J)}` : `${z(T)}:${z(J)}`;
    })(e(g))), p = d(() => e(f).replace(/\{\{\s*\w+\s*\}\}/g, '<span class="kaching-bundles__timer-value" translate="no"></span>'));
    let x = Fe(void 0);
    et(() => {
      !e(x) || !e(p) || e(x).querySelectorAll(".kaching-bundles__timer-value").forEach((D) => {
        D.textContent = ` ${e(h)} `;
      });
    });
    var m = { get timer() {
      return s();
    }, set timer(D) {
      s(D), v();
    } }, I = ze(), P = _e(I), A = (D) => {
      var Q = pm(), Z = w(Q);
      je(w(Z), () => e(p)), y(Z), Fi(Z, (T) => te(x, T), () => e(x)), y(Q), ke(() => Et(Q, e(c))), b(D, Q);
    };
    O(P, (D) => {
      e(k) && D(A);
    }), b(n, I);
    var j = at(m);
    return a(), j;
  }
  function Rg(n, t) {
    rt(t, !0);
    const r = _(t, "dealBlockId", 7), a = _(t, "shopCustomStyles", 7), s = _(t, "customStyles", 7), o = d(() => {
      const g = [a(), s()].filter((k) => k == null ? void 0 : k.trim()).join(`
`);
      return g ? `
      <style id="kaching-bundles-custom-styles-${r()}">
        kaching-bundles-block[deal-block-id="${r()}"] {
          ${g}
        }
      </style>
    ` : "";
    });
    var c = { get dealBlockId() {
      return r();
    }, set dealBlockId(g) {
      r(g), v();
    }, get shopCustomStyles() {
      return a();
    }, set shopCustomStyles(g) {
      a(g), v();
    }, get customStyles() {
      return s();
    }, set customStyles(g) {
      s(g), v();
    } }, l = ze(), i = _e(l), u = (g) => {
      var k = ze();
      je(_e(k), () => e(o)), b(g, k);
    };
    return O(i, (g) => {
      e(o) && g(u);
    }), b(n, l), at(c);
  }
  Ke(jg, { timer: {} }, [], [], !0), Ke(Rg, { dealBlockId: {}, shopCustomStyles: {}, customStyles: {} }, [], [], !0);
  var kn = ((n) => (n.QuantityBreak = "quantity-break", n.Bxgy = "bxgy", n.Bundle = "bundle", n.MixAndMatch = "mix-and-match", n.Sku = "sku", n))(kn || {});
  function bm({ dealBars: n, dealBar: t, hasSellingPlansAvailable: r, splitBxgy: a }) {
    return t.dealBarType === kn.Sku || t.dealBarType === kn.Bundle || t.dealBarType === kn.MixAndMatch || (function(s, o) {
      return (!o.dealBarType || o.dealBarType === kn.QuantityBreak || o.dealBarType === kn.Bxgy) && s.filter((c) => !c.dealBarType || c.dealBarType === kn.QuantityBreak || c.dealBarType === kn.Bxgy).filter((c) => Qg(c) === Qg(o) && c.id !== o.id).length > 0;
    })(n, t) || Ng({ dealBar: t, hasSellingPlansAvailable: r, splitBxgy: a });
  }
  function Ng({ dealBar: n, hasSellingPlansAvailable: t, splitBxgy: r }) {
    return n.dealBarType === kn.Bxgy && (t || r);
  }
  function Qg(n) {
    switch (n.dealBarType) {
      case void 0:
      case kn.QuantityBreak:
        return Number(n.quantity);
      case kn.Bxgy:
        return Number(n.buyQuantity) + Number(n.getQuantity);
      case kn.Bundle:
        return n.bundleProducts[0].quantity;
      case kn.MixAndMatch:
      case kn.Sku:
        return 1;
    }
  }
  function fm(n, t = 4) {
    const r = (function(a) {
      let s = 2166136261;
      for (let o = 0; o < a.length; o++) s ^= a.charCodeAt(o), s = Math.imul(s, 16777619) >>> 0;
      return s >>> 0;
    })(n);
    return (function(a, s) {
      let o = "";
      for (let c = 0; c < s; c++) o = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[a % 62] + o, a = Math.floor(a / 62);
      return o;
    })(r, t);
  }
  function Wg(n) {
    var t, r, a, s, o, c, l, i;
    const { dealBlock: u, product: g, pageProductId: k = g.id, selectedDealBarId: f, selectedVariantQuantities: h, selectedBundleProducts: p, selectedCollectionBreaksProducts: x, selectedFreeGifts: m, selectedProgressiveGifts: I, selectedCheckboxUpsells: P, selectedUpsells: A, selectedPersonalisations: j, selectedSellingPlan: D, dealBarSellingPlan: Q, nativeBundleProductIds: Z } = n, T = Q != null ? Q : D, J = m.filter((K) => !K.applyOnlyForSubscriptions || T), z = I.filter((K) => !K.applyOnlyForSubscriptions || T), G = (function(K) {
      var Y;
      const { product: ge, selectedVariantQuantities: we, selectedBundleProducts: me, selectedCollectionBreaksProducts: Pe, selectedFreeGifts: Ge, selectedProgressiveGifts: Ze, selectedCheckboxUpsells: Ve, selectedUpsells: fe, selectedSellingPlan: We, dealBarSellingPlan: $e, selectedDealBarId: M, dealBlock: xe, bundleNonce: Me } = K, qe = me.length > 0 || Pe.length > 0 || Ge.length > 0 || Ze.length > 0 || fe.length > 0, Oe = Ge.length > 0 || Ze.length > 0 || fe.length > 0, De = ((Y = xe.dealBars.find((nt) => nt.id === M)) == null ? void 0 : Y.dealBarType) === "mix-and-match", Ae = Oe || De, Le = JSON.stringify([qe ? we.map(({ variant: nt, quantity: Je }) => ({ variantId: nt.id, quantity: Je })) : ge.id, me.map(({ id: nt, variant: Je, quantity: Ne }) => ({ id: nt, variantId: Je.id, quantity: Ne })), Pe.map(({ variant: nt, quantity: Je }) => ({ variantId: nt.id, quantity: Je })), Ge.map(({ id: nt, variant: Je, quantity: Ne }) => ({ id: nt, variantId: Je.id, quantity: Ne })), Ze.map(({ id: nt, variants: Je }) => Je.map((Ne) => ({ id: nt, variantId: Ne.variant.id, quantity: Ne.quantity })).flat()).flat(), Ve.map(({ id: nt, variant: Je }) => ({ id: nt, variantId: Je.id })), fe.map(({ id: nt, variant: Je, quantity: Ne }) => ({ id: nt, variantId: Je.id, quantity: Ne })), We == null ? void 0 : We.id, $e == null ? void 0 : $e.id, M, ...Ae ? [Me] : []]);
      return fm(Le);
    })({ ...n, selectedFreeGifts: J, selectedProgressiveGifts: z }), ne = u.dealBars.find((K) => K.id === f), X = (ne == null ? void 0 : ne.dealBarType) === kn.Bxgy, B = h.some(({ variant: K }) => K.sellingPlans.length > 0), S = (t = n.splitBxgy) != null && t, C = X && Ng({ dealBar: ne, hasSellingPlansAvailable: B, splitBxgy: S }), F = u.dealBars.some((K) => (K.freeGifts || []).filter((Y) => Y.productGID).length > 0), U = !(!u.progressiveGiftsEnabled || !u.progressiveGifts) && u.progressiveGifts.gifts.some((K) => K.giftType === "product"), H = u.dealBars.some((K) => (K.upsells || []).length > 0), se = u.nanoId || u.id, E = u.abTestVariantId, q = (r = u.abTestVariantLetter) != null ? r : u.abTestVariantNumber ? String.fromCharCode(64 + u.abTestVariantNumber) : void 0, ie = !!ne && bm({ dealBars: u.dealBars, dealBar: ne, hasSellingPlansAvailable: B, splitBxgy: S }), ue = { deal: se, pp: k, main: !0 };
    u.marketId && (ue.market = u.marketId), u.versionId && (ue.v = u.versionId), ie ? (ue.id = G, ue.bar = f) : (X || J.length > 0 || z.length > 0 || P.length > 0 || A.length > 0 || x.length > 0 || j.length > 0 || F || U || H) && (ue.id = G), !ue.bar && f && (ue.bid = f), E && (ue.abid = E), q && (ue.ab = q);
    const W = !f && ue.id === void 0, ae = { id: G, deal: se, bar: f };
    u.versionId && (ae.v = u.versionId), E && (ae.abid = E), q && (ae.ab = q);
    const he = (ne == null ? void 0 : ne.dealBarType) === kn.MixAndMatch ? ne.bundleProducts.length : void 0, V = n.reverNonReturnable ? { rever_non_returnable: "true" } : {}, N = [];
    let de = h, pe = [];
    if (C && x.length === 0) {
      const { buy: K, get: Y } = Ug(h, ne.getQuantity);
      de = K, pe = Y;
    }
    for (const { variant: K, quantity: Y } of de) {
      const ge = { ...ue };
      he && (ge.mixAndMatchItems = he);
      const we = ir(g, K, T);
      we != null && we.priceAdjustment && (!ne || Hg(ne)) && (ge.sellingPlan = { id: we.id, priceAdjustment: we.priceAdjustment });
      const me = { id: K.id, quantity: Y, properties: W ? {} : { __kaching_bundles: JSON.stringify(ge) } };
      we && (me.selling_plan = we.id), N.push(me);
    }
    const re = !n.disableNestedCartLines && de.length > 0 && !sc(g, Z) && (ne == null ? void 0 : ne.dealBarType) !== kn.MixAndMatch ? de[0].variant.id : void 0;
    for (const { variant: K, quantity: Y } of pe) {
      const ge = { ...ae, main: !0, bxgy: !0 }, we = ir(g, K, T);
      we != null && we.priceAdjustment && (ne == null ? void 0 : ne.dealBarType) === kn.Bxgy && ne.getDiscountType === "specific" && (ge.sellingPlan = { id: we.id, priceAdjustment: we.priceAdjustment });
      const me = { id: K.id, quantity: Y, properties: { __kaching_bundles: JSON.stringify(ge), ...V } };
      Ki(me, re, g, Z), we && (me.selling_plan = we.id), N.push(me);
    }
    for (const K of p) {
      const Y = { ...ae, bundleProduct: K.id };
      he && (Y.mixAndMatchItems = he);
      const ge = ir(K.product, K.variant, T);
      ge != null && ge.priceAdjustment && (ne == null ? void 0 : ne.dealBarType) === kn.Bundle && ((a = ne == null ? void 0 : ne.bundleProducts.find((me) => me.id === K.id)) == null ? void 0 : a.discountType) === "specific" && (Y.sellingPlan = { id: ge.id, priceAdjustment: ge.priceAdjustment });
      const we = { id: K.variant.id, quantity: K.quantity, properties: { __kaching_bundles: JSON.stringify(Y) } };
      Ki(we, re, K.product, Z), ge && (we.selling_plan = ge.id), N.push(we);
    }
    let R = x, ee = [];
    if (C && x.length > 0) {
      const { buy: K, get: Y } = Ug(x, ne.getQuantity);
      R = K, ee = Y;
    }
    const ce = ((s = u.collectionBreaks) == null ? void 0 : s.visibility) === "deal-products";
    for (const K of R) {
      if (ce) {
        const me = N.find((Pe) => Pe.id === K.variant.id);
        if (me) {
          me.quantity += K.quantity;
          continue;
        }
      }
      const Y = { ...ae, collectionBreaksProduct: !0 };
      ie || delete Y.bar;
      const ge = ir(K.product, K.variant, T);
      ge != null && ge.priceAdjustment && ne && Hg(ne) && (Y.sellingPlan = { id: ge.id, priceAdjustment: ge.priceAdjustment });
      const we = { id: K.variant.id, quantity: K.quantity, properties: { __kaching_bundles: JSON.stringify(Y) } };
      ge && (we.selling_plan = ge.id), N.push(we);
    }
    for (const K of ee) {
      const Y = { ...ae, collectionBreaksProduct: !0 };
      ie || delete Y.bar, Y.bxgy = !0;
      const ge = ir(K.product, K.variant, T);
      ge != null && ge.priceAdjustment && (ne == null ? void 0 : ne.dealBarType) === kn.Bxgy && ne.getDiscountType === "specific" && (Y.sellingPlan = { id: ge.id, priceAdjustment: ge.priceAdjustment });
      const we = { id: K.variant.id, quantity: K.quantity, properties: { __kaching_bundles: JSON.stringify(Y), ...V } };
      ge && (we.selling_plan = ge.id), N.push(we);
    }
    for (const K of J) {
      const Y = { ...ae, gift: K.id };
      delete Y.bar;
      const ge = { id: K.variant.id, quantity: K.quantity, properties: { __kaching_bundles: JSON.stringify(Y), ...V } };
      Ki(ge, re, K.product, Z);
      const we = ir(K.product, K.variant, T);
      we && (ge.selling_plan = we.id), N.push(ge);
    }
    for (const K of z) {
      const Y = { ...ae, gift: K.id };
      delete Y.bar;
      for (const ge of K.variants) {
        const we = { id: ge.variant.id, quantity: ge.quantity, properties: { __kaching_bundles: JSON.stringify(Y), ...V } };
        Ki(we, re, K.product, Z);
        const me = ir(K.product, ge.variant, T);
        me && (we.selling_plan = me.id), N.push(we);
      }
    }
    for (const K of P) {
      const Y = { ...ae, checkboxUpsell: K.id };
      delete Y.bar;
      const ge = K.sellingPlan, we = (o = u.checkboxUpsells) == null ? void 0 : o.upsells.find((Pe) => Pe.id === K.id);
      ge != null && ge.priceAdjustment && (we == null ? void 0 : we.discountType) === "specific" && (Y.sellingPlan = { id: ge.id, priceAdjustment: ge.priceAdjustment });
      const me = { id: K.variant.id, quantity: K.quantity, properties: { __kaching_bundles: JSON.stringify(Y) } };
      Ki(me, re, K.product, Z), ge && (me.selling_plan = ge.id), N.push(me);
    }
    for (const K of A) {
      const Y = { ...ae, upsell: K.id };
      delete Y.bar;
      const ge = K.sellingPlan;
      ge != null && ge.priceAdjustment && ((l = (c = ne == null ? void 0 : ne.upsells) == null ? void 0 : c.find((me) => me.id === K.id)) == null ? void 0 : l.discountType) === "specific" && (Y.sellingPlan = { id: ge.id, priceAdjustment: ge.priceAdjustment });
      const we = { id: K.variant.id, quantity: K.quantity, properties: { __kaching_bundles: JSON.stringify(Y) } };
      Ki(we, re, K.product, Z), ge && (we.selling_plan = ge.id), N.push(we);
    }
    const ve = [];
    for (const { variant: K, quantity: Y } of de) for (let ge = 0; ge < Y; ge++) ve.push(K.id);
    for (const K of j) {
      const Y = { ...ae, personalisation: K.id };
      delete Y.bar;
      const ge = { id: K.variantId, quantity: 1, properties: { __kaching_bundles: JSON.stringify(Y), [K.valueLabel]: K.text } }, we = (i = K.parentVariantId) != null ? i : ve[K.productIndex];
      we && !n.disableNestedCartLines && (ge.parent_id = we), N.push(ge);
    }
    const oe = N.filter((K) => !K.parent_id), Be = N.filter((K) => K.parent_id), be = [...oe.reverse(), ...Be];
    return !n.splitQuantityBreakItems || !ne || ne.dealBarType !== void 0 && ne.dealBarType !== kn.QuantityBreak || Be.length > 0 || [g, ...p.map((K) => K.product), ...x.map((K) => K.product), ...J.map((K) => K.product), ...z.map((K) => K.product), ...P.map((K) => K.product), ...A.map((K) => K.product)].some((K) => sc(K, Z)) ? be : be.flatMap((K, Y) => {
      if (!K.properties.__kaching_bundles) return [K];
      const ge = JSON.parse(K.properties.__kaching_bundles);
      return Array.from({ length: K.quantity }, (we, me) => ({ ...K, quantity: 1, properties: { ...K.properties, __kaching_bundles: JSON.stringify({ ...ge, line: `${n.bundleNonce}:${Y}:${me}` }) } }));
    });
  }
  function sc(n, t) {
    return t.includes(n.id) || n.isNativeBundle === !0;
  }
  function Ki(n, t, r, a) {
    t && t !== n.id && (sc(r, a) || (n.parent_id = t));
  }
  function Hg(n) {
    switch (n.dealBarType) {
      case void 0:
      case kn.QuantityBreak:
        return n.discountType === "specific";
      case kn.Bundle:
        return n.bundleProducts[0].discountType === "specific";
      case kn.Bxgy:
        return n.buyDiscountType === "specific";
      case kn.MixAndMatch:
        return n.discountType === "specific";
      case kn.Sku:
        return !1;
    }
  }
  function Ug(n, t) {
    const r = [...n].sort((c, l) => c.variant.price - l.variant.price), a = [], s = [];
    let o = t;
    for (const c of r) {
      const l = Math.min(o, c.quantity), i = c.quantity - l;
      l > 0 && s.push({ ...c, quantity: l }), i > 0 && a.push({ ...c, quantity: i }), o -= l;
    }
    return { buy: a, get: s };
  }
  function vm(n, t, r) {
    t()({ dealBarId: r().id, preselected: !1 });
  }
  var _m = $('<img class="kaching-bundles__bar-image" alt=""/>'), km = $('<div class="kaching-bundles__bar-radio"></div>'), mm = $('<span class="kaching-bundles__bar-title"><!></span>'), xm = $('<span class="kaching-bundles__bar-label"><!></span>'), ym = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), wm = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Pm = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <div class="kaching-bundles__bar-second-line"><!> <!></div></div> <div class="kaching-bundles__bar-pricing"><!> <!></div></div>', 1), Sm = $('<div class="kaching-bundles__bar-selling-plan"><!></div>'), Bm = $('<div class="kaching-bundles__bar-variants"><!> <div class="kaching-bundles__bar-variant-selector-wrapper"><!> <!></div></div>'), Cm = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!></div> <!> <!> <!> <!>', 1), Im = $('<div><input type="radio"/> <!> <!></div>');
  function Zg(n, t) {
    rt(t, !0);
    const r = () => Te(Q, "$formatPrice", s), a = () => Te(D, "$translate", s), [s, o] = kt();
    let c = _(t, "dealBlock", 7), l = _(t, "dealBar", 7), i = _(t, "otherProducts", 23, () => []), u = _(t, "complementaryProducts", 23, () => []), g = _(t, "selectedDealBarIndex", 7, null), k = _(t, "componentId", 7), f = _(t, "selected", 7, !1), h = _(t, "globalSellingPlan", 7, void 0), p = _(t, "selectedProgressiveGifts", 23, () => []), x = _(t, "onProgressiveGiftsChange", 7), m = _(t, "onDealBarSelect", 7), I = _(t, "onDealBarDeselect", 7), P = _(t, "onVariantsChange", 7), A = _(t, "onPersonalisationsChange", 7), j = _(t, "personalisationInitialValues", 23, () => []);
    const D = $t(), Q = xn(), Z = On();
    let T = Fe(ut([])), J = Fe(ut([])), z = Fe(ut([])), G = !1;
    const ne = d(() => l().productGID ? i().find((M) => M.id === en(l().productGID)) : void 0), X = d(() => {
      var M;
      return (M = l().variantGIDs) != null && M.length ? l().variantGIDs.map(en) : null;
    }), B = d(() => e(ne) ? e(X) ? e(ne).variants.filter((M) => e(X).includes(M.id)) : e(ne).variants : []), S = d(() => {
      return e(ne) ? { ...e(ne), variants: e(B), options: e(X) ? (M = e(ne).options, xe = e(B), M.map((Me) => ({ ...Me, optionValues: Me.optionValues.filter((qe) => xe.some((Oe) => Oe.options[Me.position - 1] === qe.name)) }))) : e(ne).options } : void 0;
      var M, xe;
    });
    let C = Fe(void 0);
    const F = d(() => (function(M, xe) {
      var Me;
      return (Me = xe.find((Oe) => Oe.id === M) || xe[0]) == null ? void 0 : Me.id;
    })(e(C), e(B))), U = d(() => e(F) && e(ne) ? e(ne).variants.find((M) => M.id === e(F)) : void 0), H = d(() => e(U) ? [{ variant: e(U), quantity: 1 }] : []);
    let se = Fe(void 0);
    const E = d(() => e(ne) && e(U) ? zl(e(ne), [e(U)]) : []), q = d(() => {
      var M, xe;
      return (l().sellingPlanEnabled || c().subscriptionsEnabled && ((M = c().subscriptions) == null ? void 0 : M.layout) === "link" && ((xe = c().subscriptions) == null ? void 0 : xe.subscribeByDefault)) && (!c().subscriptionsEnabled || !!h());
    }), ie = d(() => e(q) ? Oo(l(), e(E), e(se)) : void 0), ue = d(() => {
      var M;
      return (M = e(ie)) != null ? M : e(ne) && e(U) ? ir(e(ne), e(U), h()) : void 0;
    }), W = d(() => e(U) ? Qi(e(U), e(ue)) : 0), ae = d(() => e(U) ? (function(M, xe) {
      return M.useProductCompareAtPrice && xe.compareAtPrice ? Math.max(xe.price, xe.compareAtPrice) : xe.price;
    })(c(), e(U)) : 0), he = d(() => c().dealBars.findIndex((M) => M.id === l().id) + 1), V = d(() => Tl(e(ae), [...e(T), ...Vl(e(J)), ...Al(c(), e(he), i(), e(ue), p(), f())])), N = d(() => e(V) > e(W)), de = d(() => yn({ priceFormatter: r(), product: e(ne), dealBar: l(), totalFullPrice: e(ae), totalCompareAtPrice: e(V), totalDiscountedPrice: e(W), quantity: 1, unitQuantity: Vr(e(H)), sellingPlan: e(ue) })), pe = d(() => e(de)(a()(l().title))), re = d(() => e(de)(a()(l().subtitle))), R = d(() => e(de)(a()(l().label))), ee = d(() => $l(c(), l()).map((M) => Qa(M, a(), e(de)))), ce = d(() => Wa(e(ee))), ve = d(() => `${l().id}_${k()}`), oe = d(() => Te(Z, "$getMediaImageUrl", s)(l().mediaImageGID) || ql), Be = Sn(), be = d(() => e(B).length > 1 && f()), K = d(() => Te(Be, "$config", s).featureFlags.variant_images && new Set(e(B).map((M) => M.image).filter((M) => M)).size > 1), Y = d(() => l().showAsSoldOutEnabled && l().showAsSoldOut ? Ol(l().showAsSoldOut) : "");
    function ge(M) {
      f() && (M.preventDefault(), M.stopPropagation(), I()());
    }
    function we(M) {
      te(C, M, !0);
    }
    et(() => {
      !f() || !e(U) && e(ne) || (e(T), e(z), e(J), e(F), e(ue), tn(() => {
        G || (G = !0, m()({ dealBarId: l().id, preselected: !0 })), (function() {
          const M = e(W) + e(z).reduce((Ae, Le) => Ae + Le.discountedPrice, 0), xe = e(T).reduce((Ae, Le) => Le.showPrice ? Ae + Le.fullPrice : Ae, 0) + e(J).reduce((Ae, Le) => Ae + Le.fullPrice * Le.quantity, 0), Me = e(ae) + e(z).reduce((Ae, Le) => Ae + Le.fullPrice, 0) + xe, qe = e(U) ? e(U).price : 0, Oe = e(U) ? e(U).sellingPlans.map((Ae) => ({ sellingPlanId: Ae.id, discountedPrice: Ae.price })) : [], De = { discountedPrice: M, fullPrice: Me, giftValue: xe, discountedPricePerItem: e(W), fullPricePerItem: e(ae), discountedPriceWithoutSellingPlan: qe, discountedPricesForSellingPlans: Oe };
          P()({ variants: e(H), freeGifts: [...e(T), ...e(J)], upsells: e(z), dealBarSellingPlan: e(ie), pricing: De, product: e(ne) });
        })();
      }));
    });
    var me = { get dealBlock() {
      return c();
    }, set dealBlock(M) {
      c(M), v();
    }, get dealBar() {
      return l();
    }, set dealBar(M) {
      l(M), v();
    }, get otherProducts() {
      return i();
    }, set otherProducts(M = []) {
      i(M), v();
    }, get complementaryProducts() {
      return u();
    }, set complementaryProducts(M = []) {
      u(M), v();
    }, get selectedDealBarIndex() {
      return g();
    }, set selectedDealBarIndex(M = null) {
      g(M), v();
    }, get componentId() {
      return k();
    }, set componentId(M) {
      k(M), v();
    }, get selected() {
      return f();
    }, set selected(M = !1) {
      f(M), v();
    }, get globalSellingPlan() {
      return h();
    }, set globalSellingPlan(M = void 0) {
      h(M), v();
    }, get selectedProgressiveGifts() {
      return p();
    }, set selectedProgressiveGifts(M = []) {
      p(M), v();
    }, get onProgressiveGiftsChange() {
      return x();
    }, set onProgressiveGiftsChange(M) {
      x(M), v();
    }, get onDealBarSelect() {
      return m();
    }, set onDealBarSelect(M) {
      m(M), v();
    }, get onDealBarDeselect() {
      return I();
    }, set onDealBarDeselect(M) {
      I(M), v();
    }, get onVariantsChange() {
      return P();
    }, set onVariantsChange(M) {
      P(M), v();
    }, get onPersonalisationsChange() {
      return A();
    }, set onPersonalisationsChange(M) {
      A(M), v();
    }, get personalisationInitialValues() {
      return j();
    }, set personalisationInitialValues(M = []) {
      j(M), v();
    } }, Pe = Im();
    let Ge;
    var Ze = w(Pe);
    wa(Ze), Ze.__change = [vm, m, l];
    var Ve = L(Ze, 2);
    ki(Ve, { get for() {
      return e(ve);
    }, get soldOut() {
      return l().showAsSoldOutEnabled;
    }, get borderHost() {
      return e(ce);
    }, children: (M, xe) => {
      var Me = Cm(), qe = _e(Me);
      Gt(qe, 17, () => e(ee), (Re) => Re.id, (Re, tt) => {
        Ba(Re, { get badge() {
          return e(tt);
        }, get blockLayout() {
          return c().blockLayout;
        } });
      });
      var Oe = L(qe, 2), De = w(Oe);
      Xt(De, { element: "div", class: "kaching-bundles__bar-main", onclick: ge, children: (Re, tt) => {
        var it = Pm(), st = _e(it), zt = (ot) => {
          var It = _m();
          ke(() => Ie(It, "src", e(oe))), b(ot, It);
        }, bt = (ot) => {
          b(ot, km());
        };
        O(st, (ot) => {
          l().mediaImageGID ? ot(zt) : ot(bt, !1);
        });
        var At = L(st, 2), ye = w(At), Xe = w(ye), gt = w(Xe);
        lt(gt, () => e(pe), (ot) => {
          var It = mm();
          je(w(It), () => e(pe)), y(It), b(ot, It);
        });
        var dt = L(gt, 2), yt = (ot) => {
          var It = ze();
          lt(_e(It), () => e(R), (Ft) => {
            var mt = xm();
            je(w(mt), () => e(R)), y(mt), b(Ft, mt);
          }), b(ot, It);
        };
        O(dt, (ot) => {
          e(R) && ot(yt);
        }), y(Xe);
        var ft = L(Xe, 2), St = w(ft), Bt = (ot) => {
          var It = ze();
          lt(_e(It), () => e(re), (Ft) => {
            var mt = ym();
            je(w(mt), () => e(re)), y(mt), b(Ft, mt);
          }), b(ot, It);
        };
        O(St, (ot) => {
          e(re) && ot(Bt);
        });
        var wt = L(St, 2), Ot = (ot) => {
          Ca(ot, { get dealBlock() {
            return c();
          }, get variant() {
            return e(U);
          } });
        };
        O(wt, (ot) => {
          e(be) || ot(Ot);
        }), y(ft), y(ye);
        var dn = L(ye, 2), nn = w(dn);
        lt(nn, () => e(W), (ot) => {
          da(ot, { get amount() {
            return e(W);
          }, get showPricesPerItem() {
            return c().showPricesPerItem;
          }, get unitLabel() {
            return c().unitLabel;
          } });
        });
        var Ye = L(nn, 2), ht = (ot) => {
          var It = ze();
          lt(_e(It), () => e(V), (Ft) => {
            var mt = wm();
            je(w(mt), () => r()(e(V))), y(mt), ke((Ht) => Ie(mt, "data-a11y-label", Ht), [() => a()("system.original_price")]), b(Ft, mt);
          }), b(ot, It);
        };
        O(Ye, (ot) => {
          e(N) && ot(ht);
        }), y(dn), y(At), b(Re, it);
      }, $$slots: { default: !0 } });
      var Ae = L(De, 2), Le = (Re) => {
        Ua(Re, { get highlights() {
          return l().highlights;
        }, get isSelected() {
          return f();
        }, get replaceLiquid() {
          return e(de);
        } });
      };
      O(Ae, (Re) => {
        l().highlights && Re(Le);
      });
      var nt = L(Ae, 2), Je = (Re) => {
        var tt = Sm(), it = w(tt);
        {
          let st = d(() => e(ie) || e(E)[0]);
          Ha(it, { get sellingPlans() {
            return e(E);
          }, get selectedSellingPlan() {
            return e(st);
          }, onChange: (zt) => {
            te(se, zt, !0);
          } });
        }
        y(tt), b(Re, tt);
      };
      O(nt, (Re) => {
        f() && e(q) && !l().sellingPlanGid && e(E).length > 1 && Re(Je);
      });
      var Ne = L(nt, 2), Vt = (Re) => {
        var tt = Bm(), it = w(tt);
        Pa(it, { get product() {
          return e(S);
        } });
        var st = L(it, 2), zt = w(st);
        {
          let bt = d(() => e(F) || 0);
          Yn(zt, { get product() {
            return e(S);
          }, get selectedVariantId() {
            return e(bt);
          }, get showImage() {
            return e(K);
          }, onChange: we });
        }
        Ca(L(zt, 2), { get dealBlock() {
          return c();
        }, get variant() {
          return e(U);
        } }), y(st), y(tt), b(Re, tt);
      };
      O(Ne, (Re) => {
        e(be) && e(S) && Re(Vt);
      });
      var Dt = L(Ne, 2), un = (Re) => {
        {
          let tt = d(() => [e(F)]);
          xi(Re, { get productPersonalisation() {
            return l().productPersonalisation;
          }, get product() {
            return e(ne);
          }, get selectedVariantIds() {
            return e(tt);
          }, quantity: 1, get addPersonalisationModal() {
            return c().addPersonalisationModal;
          }, get onPersonalisationsChange() {
            return A();
          }, get initialValues() {
            return j();
          } });
        }
      };
      O(Dt, (Re) => {
        f() && l().productPersonalisation && e(ne) && e(F) && (c().blockLayout === "vertical" || c().blockLayout === "plain") && Re(un);
      }), y(Oe);
      var ln = L(Oe, 2);
      {
        let Re = d(() => l().upsells || []);
        Ui(ln, { get dealBlock() {
          return c();
        }, get dealBarId() {
          return l().id;
        }, get upsells() {
          return e(Re);
        }, get otherProducts() {
          return i();
        }, get complementaryProducts() {
          return u();
        }, get dealBarSelected() {
          return f();
        }, get dealSellingPlan() {
          return e(ue);
        }, onChange: (tt) => {
          te(z, tt, !0);
        } });
      }
      var sn = L(ln, 2);
      Yi(sn, { get selectedDealBarIndex() {
        return g();
      }, get onChange() {
        return x();
      }, get dealBlock() {
        return c();
      }, get dealBar() {
        return l();
      }, get selected() {
        return f();
      }, get otherProducts() {
        return i();
      }, get sellingPlan() {
        return e(ue);
      }, get progressiveGifts() {
        return c().progressiveGifts;
      } });
      var Lt = L(sn, 2);
      {
        let Re = d(() => l().freeGifts || []);
        Hi(Lt, { get dealBlock() {
          return c();
        }, get freeGifts() {
          return e(Re);
        }, get freeGiftsSummary() {
          return l().freeGiftsSummary;
        }, get otherProducts() {
          return i();
        }, get dealBarSelected() {
          return f();
        }, get sellingPlan() {
          return e(ue);
        }, onChange: (tt) => {
          te(T, tt, !0);
        } });
      }
      var Ce = L(Lt, 2);
      {
        let Re = d(() => l().multipleGiftsSelectors || []);
        Ji(Ce, { get dealBlock() {
          return c();
        }, get multipleGiftsSelectors() {
          return e(Re);
        }, get sellingPlan() {
          return e(ue);
        }, get otherProducts() {
          return i();
        }, onChange: (tt) => {
          te(J, tt, !0);
        } });
      }
      b(M, Me);
    }, $$slots: { default: !0 } });
    var fe = L(Ve, 2), We = (M) => {
      Zi(M, { get showAsSoldOut() {
        return l().showAsSoldOut;
      }, get replaceLiquid() {
        return e(de);
      } });
    };
    O(fe, (M) => {
      l().showAsSoldOutEnabled && l().showAsSoldOut && M(We);
    }), y(Pe), ke((M) => {
      var xe;
      Ge = Rt(Pe, 1, "kaching-bundles__bar", null, Ge, M), Ie(Pe, "data-deal-bar-id", l().id), Et(Pe, e(Y)), Ie(Ze, "name", `kaching-bundles-deal-${(xe = k()) != null ? xe : ""}`), gi(Ze, l().id), Ie(Ze, "id", e(ve)), Pl(Ze, f()), Ze.disabled = l().showAsSoldOutEnabled;
    }, [() => ({ "kaching-bundles__bar--selected": f() })]), b(n, Pe);
    var $e = at(me);
    return o(), $e;
  }
  jn(["change"]), Ke(Zg, { dealBlock: {}, dealBar: {}, otherProducts: {}, complementaryProducts: {}, selectedDealBarIndex: {}, componentId: {}, selected: {}, globalSellingPlan: {}, selectedProgressiveGifts: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var Mm = $('<div class="kaching-bundles__collection-breaks-alert"><svg class="kaching-bundles__collection-breaks-alert__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00065 5.33325V7.99992M8.00065 10.6666H8.00732M14.6673 7.99992C14.6673 11.6818 11.6825 14.6666 8.00065 14.6666C4.31875 14.6666 1.33398 11.6818 1.33398 7.99992C1.33398 4.31802 4.31875 1.33325 8.00065 1.33325C11.6825 1.33325 14.6673 4.31802 14.6673 7.99992Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> </div>');
  function Jg(n, t) {
    rt(t, !0);
    const r = () => Te(u, "$config", a), [a, s] = kt();
    let o = _(t, "alertText", 7), c = _(t, "enabled", 7), l = _(t, "hasItemsToSelect", 7);
    const i = $t(), u = Sn(), g = _i(), k = d(() => r().preview && r().previewAlerts || Te(g, "$requireSelectionError", a)), f = d(() => e(k) && c() && o() && l());
    var h = { get alertText() {
      return o();
    }, set alertText(P) {
      o(P), v();
    }, get enabled() {
      return c();
    }, set enabled(P) {
      c(P), v();
    }, get hasItemsToSelect() {
      return l();
    }, set hasItemsToSelect(P) {
      l(P), v();
    } }, p = ze(), x = _e(p), m = (P) => {
      var A = Mm(), j = L(w(A));
      y(A), ke((D) => pt(j, ` ${D != null ? D : ""}`), [() => Te(i, "$translate", a)(o())]), b(P, A);
    };
    O(x, (P) => {
      e(f) && o() && P(m);
    }), b(n, p);
    var I = at(h);
    return s(), I;
  }
  Ke(Jg, { alertText: {}, enabled: {}, hasItemsToSelect: {} }, [], [], !0);
  var zm = $('<span class="kaching-bundles-savings-summary__icon"><img alt=""/></span>'), $m = $('<span class="kaching-bundles-savings-summary__icon"><!></span>'), Dm = $('<div class="kaching-bundles-savings-summary"><!> <span class="kaching-bundles-savings-summary__title"><!></span></div>');
  function Yg(n, t) {
    rt(t, !0);
    const [r, a] = kt(), s = _(t, "savingsSummary", 7), o = _(t, "totalFullPrice", 7), c = _(t, "totalDiscountedPrice", 7), l = _(t, "quantity", 7), i = _(t, "product", 7), u = _(t, "sellingPlan", 7), g = xn(), k = $t(), f = On(), h = d(() => ((G) => mn({ "kaching-bundles-savings-summary-background-color": Qe(G.backgroundColor), "kaching-bundles-savings-summary-text-color": Qe(G.textColor), "kaching-bundles-savings-summary-value-color": Qe(G.valueColor), "kaching-bundles-savings-summary-icon-color": Qe(G.iconColor), "kaching-bundles-savings-summary-border-color": Qe(G.borderColor), "kaching-bundles-savings-summary-alignment": { start: "flex-start", center: "center", end: "flex-end" }[G.titleAlignment], "kaching-bundles-savings-summary-border-width": G.borderWidth + "px", "kaching-bundles-savings-summary-border-radius": G.borderRadius + "px", "kaching-bundles-savings-summary-title-font-size": G.titleFont.size + "px", "kaching-bundles-savings-summary-title-font-style": hr(G.titleFont.style), "kaching-bundles-savings-summary-title-font-weight": gr(G.titleFont.style) }))(s())), p = d(() => s().iconType), x = d(() => _g[e(p)]), m = d(() => e(p) === "custom" ? Te(f, "$getMediaImageUrl", r)(s().customIconGID) : void 0), I = d(() => yn({ priceFormatter: Te(g, "$formatPrice", r), product: i(), totalFullPrice: o(), totalDiscountedPrice: c(), quantity: l(), unitQuantity: null, sellingPlan: u() })), P = d(() => ((G) => G.replace(Cd, '<span class="kaching-bundles-savings-summary__value">$&</span>'))(Te(k, "$translate", r)(s().title))), A = d(() => e(I)(e(P)));
    var j = { get savingsSummary() {
      return s();
    }, set savingsSummary(G) {
      s(G), v();
    }, get totalFullPrice() {
      return o();
    }, set totalFullPrice(G) {
      o(G), v();
    }, get totalDiscountedPrice() {
      return c();
    }, set totalDiscountedPrice(G) {
      c(G), v();
    }, get quantity() {
      return l();
    }, set quantity(G) {
      l(G), v();
    }, get product() {
      return i();
    }, set product(G) {
      i(G), v();
    }, get sellingPlan() {
      return u();
    }, set sellingPlan(G) {
      u(G), v();
    } }, D = Dm(), Q = w(D), Z = (G) => {
      var ne = zm(), X = w(ne);
      y(ne), ke(() => Ie(X, "src", e(m))), b(G, ne);
    }, T = (G) => {
      var ne = ze(), X = _e(ne), B = (S) => {
        var C = $m();
        Pu(w(C), () => e(x), (F, U) => {
          U(F, {});
        }), y(C), b(S, C);
      };
      O(X, (S) => {
        e(x) && S(B);
      }, !0), b(G, ne);
    };
    O(Q, (G) => {
      e(p) === "custom" && e(m) ? G(Z) : G(T, !1);
    });
    var J = L(Q, 2);
    je(w(J), () => e(A)), y(J), y(D), ke(() => Et(D, e(h))), b(n, D);
    var z = at(j);
    return a(), z;
  }
  Ke(Yg, { savingsSummary: {}, totalFullPrice: {}, totalDiscountedPrice: {}, quantity: {}, product: {}, sellingPlan: {} }, [], [], !0);
  var Tm = $('<div class="kaching-bundles__block-title"><!></div>'), Vm = $("<!> <!>", 1), Am = $('<div class="kaching-bundles__out-of-stock"><!></div>'), qm = $('<div class="kaching-bundles"><div><!> <!> <div><!> <!> <!> <!></div> <!> <!> <!> <!> <!> <!> <!></div></div> <!>', 1);
  function Kg(n, t) {
    var r, a, s, o, c, l;
    rt(t, !0);
    const i = () => Te(se, "$formatPrice", k), u = () => Te(q, "$translate", k), g = () => Te(ae, "$reportedPersonalisationRule", k), [k, f] = kt();
    let h = _(t, "component", 7), p = _(t, "config", 7), x = _(t, "translations", 23, () => ({})), m = _(t, "dealBlock", 7), I = _(t, "product", 7), P = _(t, "currentVariantId", 7), A = _(t, "currentVariantSource", 7, void 0), j = _(t, "sellingPlanId", 15), D = _(t, "selectedDealBarId", 15), Q = _(t, "quantity", 15), Z = _(t, "mediaImages", 23, () => []), T = _(t, "otherProducts", 23, () => []), J = _(t, "collectionBreaksProducts", 23, () => []), z = _(t, "complementaryProducts", 23, () => []), G = _(t, "nativeBundleProductIds", 23, () => []), ne = _(t, "compact", 7, !1), X = _(t, "variantBadges", 23, () => []);
    const B = d(() => xr(m(), p().brandColors)), S = d(() => e(B).hideUnavailableOptions ? Tr(I()) : I()), C = d(() => e(B).hideUnavailableOptions ? T().map(Tr) : T()), F = d(() => e(B).hideUnavailableOptions ? z().map(Tr) : z()), U = d(() => e(B).hideUnavailableOptions ? J().map(Tr) : J()), { setConfig: H } = hi(p()), { formatPrice: se, setMoneyFormat: E } = Ni(p().moneyFormat, (r = e(B)) == null ? void 0 : r.showPricesWithoutDecimals), { translate: q, setTranslations: ie } = vi(x()), { setMediaImages: ue } = Ml(Z()), W = zs(), { reportedRule: ae, failing: he } = Ms(), { setVariantBadges: V } = ag(X()), { setSwatchSettings: N } = Bl({ swatchOptions: ((a = e(B)) == null ? void 0 : a.swatchOptions) || [], swatchSize: (s = e(B)) == null ? void 0 : s.swatchSize, swatchShape: (o = e(B)) == null ? void 0 : o.swatchShape, showSelectedSwatchName: (l = (c = e(B)) == null ? void 0 : c.showSelectedSwatchName) != null && l, pillStyle: ca(e(B)) });
    let de = Fe(ut(Math.random()));
    function pe() {
      te(de, Math.random(), !0);
    }
    function re() {
      const le = e($e).enabled && !e($e).satisfied;
      return { dealBlock: e(B), product: e(yt), pageProductId: I().id, selectedDealBarId: D(), selectedVariantQuantities: e(oe), selectedBundleProducts: e(Be), selectedCollectionBreaksProducts: e(be), selectedFreeGifts: e(K), selectedProgressiveGifts: le ? [] : e(Ot), selectedCheckboxUpsells: le ? [] : e(ge), selectedUpsells: e(we), selectedPersonalisations: le ? [] : e(Pe), selectedSellingPlan: e(St), dealBarSellingPlan: e(Ze), nativeBundleProductIds: G(), bundleNonce: e(de), splitBxgy: p().featureFlags.split_bxgy_items, disableNestedCartLines: p().featureFlags.disable_nested_cart_lines, reverNonReturnable: p().featureFlags.rever_non_returnable, splitQuantityBreakItems: p().featureFlags.split_quantity_break_items };
    }
    function R() {
      return Wg(re());
    }
    function ee() {
      const { requiresItemSelection: le, allItemsSelected: Ee, alertText: ct } = e(Nt);
      return le && !Ee ? (W.set(!0), { valid: !1, message: ct ? u()(ct) : null, rule: ct === No ? "personalisation" : "selection" }) : (W.set(!1), { valid: !0, message: null });
    }
    ja(() => {
      yr(h(), "kaching-bundles-block-loaded", { component: h() }, !1);
    }), et(() => {
      H(p());
    }), et(() => {
      E(p().moneyFormat, !!e(B).showPricesWithoutDecimals);
    }), et(() => {
      ie(x());
    }), et(() => {
      ue(Z());
    }), et(() => {
      V(X());
    }), et(() => {
      var le;
      N({ swatchOptions: e(B).swatchOptions || [], swatchSize: e(B).swatchSize, swatchShape: e(B).swatchShape, showSelectedSwatchName: (le = e(B).showSelectedSwatchName) != null && le, pillStyle: ca(e(B)) });
    });
    let ce = 0;
    et(() => {
      ce === 0 && G().length > 0 && dt({ pricing: e(M) }), ce = G().length;
    });
    let ve = Math.random().toString(16).slice(2), oe = Fe(ut([])), Be = Fe(ut([])), be = Fe(ut([])), K = Fe(ut([])), Y = Fe(ut([])), ge = Fe(ut([])), we = Fe(ut([])), me = Fe(ut([])), Pe = Fe(ut([])), Ge = new Yo(), Ze = Fe(void 0), Ve = Fe(ut({ discountedPrice: 0, fullPrice: 0, discountedPriceWithoutSellingPlan: 0, discountedPricesForSellingPlans: [] })), fe = Fe(void 0), We = Fe(!1), $e = Fe(ut(ua)), M = Fe(ut({ discountedPrice: 0, fullPrice: 0, giftValue: 0, discountedPricePerItem: 0, fullPricePerItem: 0, discountedPriceWithoutSellingPlan: 0, discountedPricesForSellingPlans: [] }));
    et(() => {
      P() && !D() && (e(St), tn(() => {
        (function() {
          te($e, ua, !0);
          const le = I().variants.find((He) => He.id === P());
          if (!le) return;
          te(oe, [{ variant: le, quantity: 1 }], !0);
          let Ee = le.price;
          if (e(St)) {
            const He = le.sellingPlans.find((Ue) => Ue.id === e(St).id);
            He && (Ee = He.price);
          }
          const ct = le.compareAtPrice && le.compareAtPrice > le.price ? le.compareAtPrice : le.price, Tt = I().sellingPlans.map((He) => ({ sellingPlanId: He.id, discountedPrice: Qi(le, He) }));
          te(M, { discountedPrice: Ee, fullPrice: ct, giftValue: 0, discountedPricePerItem: Ee, fullPricePerItem: ct, discountedPriceWithoutSellingPlan: le.price, discountedPricesForSellingPlans: Tt }, !0), dt({ pricing: e(M) });
        })();
      }));
    });
    let xe = d(() => gd(e(B))), Me = d(() => u()(e(B).blockTitle));
    const qe = d(() => e(Jt) ? yn({ priceFormatter: i(), product: e(S), selectedVariants: e(oe), totalFullPrice: e(M).fullPrice, totalDiscountedPrice: e(M).discountedPrice, quantity: Q() || Ne(e(Jt)), dealBar: e(Jt), legacySavedPercentage: p().featureFlags.legacy_saved_percentage || !1, unitQuantity: null, sellingPlan: e(St) }) : Qp), Oe = d(() => ((le) => Vb(le, "block"))(e(B)).map((le) => Qa(le, u(), e(qe)))), De = d(() => Wa(e(Oe))), Ae = d(() => {
      var le;
      const Ee = e(Oe).find((ct) => ct.badgeType === "border" && (ct.position === "left" || ct.position === "right"));
      if ((le = Ee == null ? void 0 : Ee.colors) != null && le.background) return Qe({ ...Ee.colors.background, alpha: 0.15 });
    }), Le = e(B).preselectedDealBarId ? e(B).dealBars.find((le) => le.id === e(B).preselectedDealBarId) : void 0;
    Le != null && Le.hideBehindScratchOff && e(B).scratchOffEnabled && (p().preview ? p().previewScratchOff : I().availableForSale) || D(D() || e(B).preselectedDealBarId || void 0);
    const nt = new Yd();
    function Je(le) {
      return !le.dealBarType || le.dealBarType === Zt.QuantityBreak || le.dealBarType === Zt.Bxgy;
    }
    function Ne(le) {
      switch (le.dealBarType) {
        case void 0:
        case Zt.QuantityBreak:
          return Number(le.quantity);
        case Zt.Bxgy:
          return Number(le.buyQuantity) + Number(le.getQuantity);
        case Zt.Bundle:
          return le.bundleProducts[0].quantity;
        case Zt.MixAndMatch:
        case Zt.Sku:
          return 1;
      }
    }
    function Vt(le) {
      var Ee, ct;
      D() !== le && (D() && Ge.set(D(), e(Pe)), te(Pe, (Ee = Ge.get(le)) != null ? Ee : [], !0), ((ct = e(B).progressiveGifts) == null ? void 0 : ct.layout) === "deal-bar" && te(Y, [], !0)), D(le);
    }
    function Dt(le) {
      const { dealBarId: Ee, dealBarQuantity: ct, preselected: Tt } = le;
      Vt(Ee), W.set(!1), te($e, ua, !0), ae.set(ua), p().keepQuantityInput && ct && Q(ct), yr(h(), "deal-bar-selected", { dealBarId: Ee, preselected: Tt });
    }
    function un(le) {
      const Ee = e(B).dealBars[le];
      Ee && Vt(Ee.id);
    }
    function ln() {
      if (p().ignoreDeselect) return;
      const le = e(B).dealBars.find((Ee) => !(Ee.dealBarType && Ee.dealBarType !== Zt.QuantityBreak || Ne(Ee) !== 1 || (function(ct) {
        return Ut(ct) && (!p().preview || !!p().previewScratchOff) && !nt.has(ct.id);
      })(Ee)));
      (le == null ? void 0 : le.id) !== D() && (D(void 0), te(K, [], !0), te(Y, [], !0), te(we, [], !0), te(Be, [], !0), te(be, [], !0), te(me, [], !0), te(Pe, [], !0), Ge.clear(), te(Ze, void 0), W.set(!1), te($e, ua, !0), ae.set(ua), le ? Dt({ dealBarId: le.id, dealBarQuantity: Ne(le), preselected: !1 }) : yr(h(), "deal-bar-selected", { dealBarId: null, preselected: !1 }));
    }
    function sn(le) {
      const { variantId: Ee } = le;
      yr(h(), "variant-selected", { variantId: Ee });
    }
    function Lt(le) {
      const { bundleProducts: Ee, freeGifts: ct, upsells: Tt, pricing: He, validation: Ue } = le;
      te($e, Ro(Ue, "system.select_variant_alert"), !0);
      const Yt = Ue.requiresItemSelection && !Ue.allItemsSelected, Ln = Ee[0].variantSelectionPending ? [] : [{ variant: Ee[0].variant, quantity: Ee[0].quantity }];
      te(oe, Ln, !0), te(Be, Ee.slice(1).filter((wn) => !wn.variantSelectionPending), !0), te(K, Yt ? [] : ct, !0), te(we, Yt ? [] : Tt, !0), te(be, [], !0), te(me, [], !0), te(Ze, void 0), te(fe, void 0), te(M, He, !0), te(We, gt(e(oe)), !0), dt({ pricing: He });
    }
    function Ce(le) {
      var Ee, ct;
      const { variants: Tt, freeGifts: He, upsells: Ue, pricing: Yt, validation: Ln } = le;
      te($e, Ro(Ln, ((ct = (Ee = e(B).collectionBreaks) == null ? void 0 : Ee.requireItemSelectionAlert) == null ? void 0 : ct.text) || null), !0), te(me, le.personalisationItems, !0);
      const wn = [{ variant: Tt[0].variant, quantity: Tt[0].quantity }], Mn = Tt.slice(1);
      te(oe, wn, !0), te(K, He, !0), te(we, Ue, !0), te(Be, [], !0), te(be, Mn, !0), te(Ze, le.dealBarSellingPlan, !0), te(fe, void 0), te(M, Yt, !0), te(We, gt(e(oe)), !0), dt({ pricing: Yt });
    }
    function Re(le) {
      const { variants: Ee, freeGifts: ct, upsells: Tt, pricing: He, validation: Ue } = le;
      te($e, Ro(Ue, "system.select_variant_alert"), !0);
      const Yt = Ue.requiresItemSelection && !Ue.allItemsSelected;
      te(oe, Ee, !0), te(K, Yt ? [] : ct, !0), te(we, Yt ? [] : Tt, !0), te(Be, [], !0), te(be, [], !0), te(me, [], !0), te(Ze, le.dealBarSellingPlan, !0), te(fe, void 0), te(M, He, !0), te(We, gt(e(oe)), !0), dt({ pricing: He });
    }
    function tt(le) {
      var Ee;
      const { variants: ct, freeGifts: Tt, upsells: He, pricing: Ue, product: Yt } = le;
      te($e, ua, !0), te(oe, ct, !0), te(K, Tt, !0), te(we, He, !0), te(Be, [], !0), te(be, [], !0), te(me, [], !0), te(Ze, le.dealBarSellingPlan, !0), ((Ee = e(fe)) == null ? void 0 : Ee.id) !== (Yt == null ? void 0 : Yt.id) && te(fe, Yt, !0), te(M, Ue, !0), te(We, gt(e(oe)), !0), dt({ pricing: Ue });
    }
    function it(le) {
      j(le == null ? void 0 : le.id);
    }
    et(() => {
      Q() && e(B) && tn(() => {
        if (!D()) return;
        const le = e(B).dealBars.find((Ee) => Ee.id === D());
        le && Je(le) && Ne(le) !== Q() && (function(Ee, ct) {
          if (!D()) return;
          const Tt = Ee.dealBars.slice().sort((Ue, Yt) => Ne(Ue) - Ne(Yt));
          let He = Tt[0];
          for (const Ue of Tt) if (Je(Ue)) {
            if (Ne(Ue) > ct) break;
            He = Ue;
          }
          He.id !== D() && (Vt(He.id), yr(h(), "deal-bar-selected", { dealBarId: He.id, preselected: !1 }));
        })(e(B), Q());
      });
    });
    let st = Fe(void 0);
    function zt() {
      if (!e(ot) || e(ft).length === 0) return;
      const le = e(ft).find((Ee) => Ee.id === e(st));
      it(le != null ? le : e(ft)[0]);
    }
    function bt(le) {
      ee().valid && (p().featureFlags.split_quantity_break_items && pe(), yr(h(), "add-to-cart-requested", { items: Wg({ ...re(), selectedSellingPlan: le, dealBarSellingPlan: void 0 }) }));
    }
    function At(le) {
      te(Y, le, !0), dt({ pricing: e(M) });
    }
    function ye(le, Ee) {
      te(ge, le, !0), te(Ve, Ee, !0), dt({ pricing: e(M) });
    }
    function Xe(le) {
      te(Pe, le, !0), dt({ pricing: e(M) });
    }
    function gt(le) {
      return le.some(({ variant: Ee, quantity: ct }) => !!Ee && !!Ee.inventoryManagement && Ee.inventoryPolicy === "deny" && Ee.inventoryQuantity !== null && ct > Ee.inventoryQuantity);
    }
    async function dt({ pricing: le }) {
      await cs();
      const Ee = e(oe).map(({ variant: wn, quantity: Mn }) => ({ variantId: wn.id, quantity: Mn })), ct = e(K).map(({ id: wn, variant: Mn, quantity: Kt }) => ({ id: wn, variantId: Mn.id, quantity: Kt })), Tt = e(we).map(({ id: wn, variant: Mn, quantity: Kt }) => ({ id: wn, variantId: Mn.id, quantity: Kt })), He = e(Be).map(({ id: wn, variant: Mn, quantity: Kt }) => ({ id: wn, variantId: Mn.id, quantity: Kt })), Ue = le.discountedPrice + e(Ve).discountedPrice, Yt = le.fullPrice + e(Ve).fullPrice, Ln = { discountedPrice: Ue, fullPrice: Yt, discountedPriceWithoutSellingPlan: le.discountedPriceWithoutSellingPlan + e(Ve).discountedPriceWithoutSellingPlan, discountedPricesForSellingPlans: le.discountedPricesForSellingPlans.map((wn) => {
        var Mn, Kt;
        const Tn = (Kt = (Mn = e(Ve).discountedPricesForSellingPlans.find((Gr) => Gr.sellingPlanId === wn.sellingPlanId)) == null ? void 0 : Mn.discountedPrice) != null ? Kt : e(Ve).discountedPriceWithoutSellingPlan;
        return { sellingPlanId: wn.sellingPlanId, discountedPrice: wn.discountedPrice + Tn };
      }) };
      D() && e(Jt) ? yi.set({ id: D(), dealBar: e(Jt), product: e(yt), quantity: e(oe).reduce((wn, { quantity: Mn }) => wn + Mn, 0), pricing: Ln }) : yi.set({ id: null, dealBar: null, product: e(yt), quantity: 1, pricing: Ln }), yr(h(), "variants-changed", { variantIdQuantities: Ee, freeGifts: ct, upsells: Tt, bundleProducts: He, pricing: { discountedPrice: { amount: Ue, formatted: i()(Ue) }, fullPrice: { amount: Yt, formatted: i()(Yt) }, discountedPricePerItem: { amount: le.discountedPricePerItem, formatted: i()(le.discountedPricePerItem) }, fullPricePerItem: { amount: le.fullPricePerItem, formatted: i()(le.fullPricePerItem) } }, formattedPrice: i()(le.discountedPrice), validation: e(Nt) }), yr(h(), "items-changed", {});
    }
    et(() => {
      j() && te(st, j(), !0);
    });
    const yt = d(() => e(fe) || I()), ft = d(() => {
      const le = e(oe).map(({ variant: Ee }) => Ee);
      return e(yt).sellingPlans.filter((Ee) => le.some((ct) => ct.sellingPlans.some((Tt) => Tt.id === Ee.id)));
    }), St = d(() => e(ft).find((le) => le.id === j())), Bt = d(() => j() ? e(yt).sellingPlans.find((le) => le.id === j()) : void 0), wt = d(() => Fo(e(Ze), e(Bt), e(ft), e(yt).requiresSellingPlan)), Ot = d(() => e(Y).map((le) => {
      var Ee, ct;
      return { ...le, applyOnlyForSubscriptions: (ct = (Ee = e(B).progressiveGifts) == null ? void 0 : Ee.gifts.find((Tt) => Tt.id === le.id)) == null ? void 0 : ct.applyOnlyForSubscriptions };
    })), dn = d(() => e(M).giftValue + e(Ot).filter((le) => !le.applyOnlyForSubscriptions || !!e(wt)).reduce((le, Ee) => le + Ee.variants.reduce((ct, { variant: Tt, quantity: He }) => ct + Tt.price * He, 0), 0)), nn = d(() => {
      var le, Ee;
      return (Ee = (le = e(B).savingsSummary) == null ? void 0 : le.includeGiftValue) != null && Ee;
    }), Ye = d(() => ((le, Ee, ct, Tt) => {
      const He = le.fullPrice - le.giftValue + Ee.fullPrice + (Tt ? ct : 0), Ue = le.discountedPrice + Ee.discountedPrice;
      return { fullPrice: He, discountedPrice: Ue, saved: He - Ue };
    })(e(M), e(Ve), e(dn), e(nn))), ht = d(() => {
      var le;
      return ((Ee, ct) => Ee + ct.reduce((Tt, { quantity: He }) => Tt + He, 0))(((le = Te(yi, "$selectedDealBarStore", k)) == null ? void 0 : le.quantity) || 1, e(ge));
    });
    let ot = d(() => e(B).subscriptionsEnabled && e(B).subscriptions && (e(ft).length > 0 || p().preview));
    const It = d(() => e(ft).length > 0), Ft = d(() => {
      if (!e(B).progressiveGifts || e(It)) return e(B);
      const le = e(B).progressiveGifts.gifts.filter((Ee) => !Ee.applyOnlyForSubscriptions);
      return le.length === e(B).progressiveGifts.gifts.length ? e(B) : { ...e(B), progressiveGifts: { ...e(B).progressiveGifts, gifts: le } };
    });
    let mt = d(() => {
      var le, Ee;
      return e(ot) && ((le = e(B).subscriptions) == null ? void 0 : le.showPrices) && ((Ee = e(B).subscriptions) == null ? void 0 : Ee.hideDealBarPrices);
    }), Ht = d(() => D() ? e(B).dealBars.findIndex((le) => le.id === D()) : null);
    const $n = d(() => e(B).scratchOffEnabled ? e(B).scratchOff : null), vt = d(() => (e(B).blockLayout === "vertical" || e(B).blockLayout === "plain") && (p().preview || I().availableForSale));
    function Ut(le) {
      return !!(e($n) && e(vt) && le.hideBehindScratchOff);
    }
    const rn = d(() => e(B).dealBars.reduce((le, Ee) => {
      const ct = Ut(Ee), Tt = le[le.length - 1];
      return ct && (Tt == null ? void 0 : Tt.type) === "scratch" ? Tt.bars.push(Ee) : ct ? le.push({ type: "scratch", key: Ee.id, bars: [Ee] }) : le.push({ type: "visible", key: Ee.id, bar: Ee }), le;
    }, [])), An = d(() => [...e(oe), ...e(be)].reduce((le, { quantity: Ee }) => le + Ee, 0) || 1), Jt = d(() => D() ? e(B).dealBars.find((le) => le.id === D()) : void 0), Wn = d(() => {
      var le, Ee;
      return !!((le = e(Jt)) != null && le.sellingPlanEnabled) && !!((Ee = e(Jt)) != null && Ee.sellingPlanGid);
    }), lr = d(() => {
      var le;
      return ((le = e(Jt)) == null ? void 0 : le.productPersonalisation) && (e(B).blockLayout === "horizontal" || e(B).blockLayout === "grid");
    }), Rn = d(() => !(!e(B).collectionBreaksEnabled || !e(B).collectionBreaks || !e(Jt) || e(Jt).dealBarType && e(Jt).dealBarType !== Zt.QuantityBreak && e(Jt).dealBarType !== Zt.Bxgy)), qn = d(() => e(Rn) ? e(me) : void 0), sr = d(() => e(qn) ? e(qn).length : e(Jt) ? e(Jt).dealBarType === void 0 || e(Jt).dealBarType === Zt.QuantityBreak ? Q() || Number(e(Jt).quantity) || 1 : e(Jt).dealBarType === Zt.Bxgy ? Q() || e(Jt).buyQuantity + e(Jt).getQuantity : e(Jt).dealBarType === Zt.Bundle ? 1 : Q() || 1 : Q() || 1), qt = d(() => {
      var le, Ee, ct;
      return g().enabled ? g() : Ad({ required: (ct = (Ee = (le = e(Jt)) == null ? void 0 : le.productPersonalisation) == null ? void 0 : Ee.required) != null && ct, itemCount: e(sr), filledCount: 0 });
    }), Nt = d(() => (function(le) {
      const Ee = le.find((ct) => ct.enabled && !ct.satisfied);
      return Ee ? { requiresItemSelection: !0, allItemsSelected: !1, missingItemsCount: Ee.missingCount, alertText: Ee.alertText } : { requiresItemSelection: le.some((ct) => ct.enabled), allItemsSelected: !0, missingItemsCount: 0, alertText: null };
    })([e($e), e(qt)]));
    et(() => {
      he.set(!e(Nt).allItemsSelected && e(Nt).alertText === No);
    });
    const pn = d(() => e(oe).flatMap(({ variant: le, quantity: Ee }) => Array(Ee).fill(le.id))), an = d(() => {
      if (e(Pe).length === 0) return [];
      const le = e(Pe).reduce((Tt, He) => Math.max(Tt, He.productIndex), -1), Ee = e(qn) ? Math.min(le + 1, e(qn).length) : le + 1, ct = Array.from({ length: Ee }, () => "");
      for (const Tt of e(Pe)) Tt.productIndex < Ee && (ct[Tt.productIndex] = Tt.text);
      return ct;
    });
    var Hn = { rotateBundleNonce: pe, selectedVariants: function() {
      return R().map((le) => ({ variantId: le.id, quantity: le.quantity, properties: le.properties }));
    }, items: R, pricing: function() {
      const le = e(M).discountedPrice + e(Ve).discountedPrice, Ee = e(M).fullPrice + e(Ve).fullPrice;
      return { discountedPrice: { amount: le / 100, formatted: i()(le) }, fullPrice: { amount: Ee / 100, formatted: i()(Ee) }, discountedPricePerItem: { amount: e(M).discountedPricePerItem / 100, formatted: i()(e(M).discountedPricePerItem) }, fullPricePerItem: { amount: e(M).fullPricePerItem / 100, formatted: i()(e(M).fullPricePerItem) }, discountedPriceWithoutSellingPlan: { amount: (e(M).discountedPriceWithoutSellingPlan + e(Ve).discountedPriceWithoutSellingPlan) / 100, formatted: i()(e(M).discountedPriceWithoutSellingPlan + e(Ve).discountedPriceWithoutSellingPlan) }, discountedPricesForSellingPlans: e(M).discountedPricesForSellingPlans.map((ct) => {
        var Tt, He;
        const Ue = (He = (Tt = e(Ve).discountedPricesForSellingPlans.find((Ln) => Ln.sellingPlanId === ct.sellingPlanId)) == null ? void 0 : Tt.discountedPrice) != null ? He : e(Ve).discountedPriceWithoutSellingPlan, Yt = ct.discountedPrice + Ue;
        return { sellingPlanId: ct.sellingPlanId, amount: Yt / 100, formatted: i()(Yt) };
      }) };
    }, deal: function() {
      return { subscriptionsEnabled: e(B).subscriptionsEnabled || e(B).dealBars.some((le) => le.sellingPlanEnabled) };
    }, isItemSelectionValid: function() {
      const { requiresItemSelection: le, allItemsSelected: Ee } = e(Nt);
      return !le || Ee;
    }, validateItemSelection: ee, get component() {
      return h();
    }, set component(le) {
      h(le), v();
    }, get config() {
      return p();
    }, set config(le) {
      p(le), v();
    }, get translations() {
      return x();
    }, set translations(le = {}) {
      x(le), v();
    }, get dealBlock() {
      return m();
    }, set dealBlock(le) {
      m(le), v();
    }, get product() {
      return I();
    }, set product(le) {
      I(le), v();
    }, get currentVariantId() {
      return P();
    }, set currentVariantId(le) {
      P(le), v();
    }, get currentVariantSource() {
      return A();
    }, set currentVariantSource(le = void 0) {
      A(le), v();
    }, get sellingPlanId() {
      return j();
    }, set sellingPlanId(le) {
      j(le), v();
    }, get selectedDealBarId() {
      return D();
    }, set selectedDealBarId(le) {
      D(le), v();
    }, get quantity() {
      return Q();
    }, set quantity(le) {
      Q(le), v();
    }, get mediaImages() {
      return Z();
    }, set mediaImages(le = []) {
      Z(le), v();
    }, get otherProducts() {
      return T();
    }, set otherProducts(le = []) {
      T(le), v();
    }, get collectionBreaksProducts() {
      return J();
    }, set collectionBreaksProducts(le = []) {
      J(le), v();
    }, get complementaryProducts() {
      return z();
    }, set complementaryProducts(le = []) {
      z(le), v();
    }, get nativeBundleProductIds() {
      return G();
    }, set nativeBundleProductIds(le = []) {
      G(le), v();
    }, get compact() {
      return ne();
    }, set compact(le = !1) {
      ne(le), v();
    }, get variantBadges() {
      return X();
    }, set variantBadges(le = []) {
      X(le), v();
    } }, Bn = qm(), Cn = _e(Bn), Dn = w(Cn);
    let bn;
    {
      const le = (He, Ue) => {
        let Yt = as(() => (function(Kt, Tn, Gr = !1) {
          return Kt === void 0 ? Gr ? Tn() : Tn : Kt;
        })(Ue == null ? void 0 : Ue(), !1));
        var Ln = ze(), wn = _e(Ln), Mn = (Kt) => {
          qg(Kt, { get subscriptions() {
            return e(B).subscriptions;
          }, get sellingPlans() {
            return e(ft);
          }, get selectedSellingPlan() {
            return e(St);
          }, get hideSellingPlanSelector() {
            return e(Wn);
          }, get hideTitle() {
            return e(Yt);
          }, onChange: it, onRequestAddToCart: bt });
        };
        O(wn, (Kt) => {
          e(B).subscriptions && Kt(Mn);
        }), b(He, Ln);
      }, Ee = (He, Ue = Xr) => {
        var Yt = ze(), Ln = _e(Yt), wn = (Kt) => {
          {
            let Tn = d(() => Ue().id === D()), Gr = d(() => Ue().id === D() ? e(an) : []);
            Ig(Kt, { get selectedDealBarIndex() {
              return e(Ht);
            }, get dealBlock() {
              return e(Ft);
            }, get dealBar() {
              return Ue();
            }, get product() {
              return e(S);
            }, get otherProducts() {
              return e(C);
            }, get complementaryProducts() {
              return e(F);
            }, get selected() {
              return e(Tn);
            }, get currentVariantId() {
              return P();
            }, get componentId() {
              return ve;
            }, get sellingPlan() {
              return e(Bt);
            }, get selectedProgressiveGifts() {
              return e(Y);
            }, onProgressiveGiftsChange: At, onDealBarSelect: Dt, onDealBarDeselect: ln, onVariantSelect: sn, onVariantsChange: Lt, onPersonalisationsChange: Xe, get personalisationInitialValues() {
              return e(Gr);
            } });
          }
        }, Mn = (Kt) => {
          var Tn = ze(), Gr = _e(Tn), Xi = (Za) => {
            {
              let Os = d(() => Ue().id === D()), oc = d(() => Ue().id === D() ? e(an) : []);
              yg(Za, { get selectedDealBarIndex() {
                return e(Ht);
              }, get dealBlock() {
                return e(Ft);
              }, get dealBar() {
                return Ue();
              }, get product() {
                return e(S);
              }, get otherProducts() {
                return e(C);
              }, get complementaryProducts() {
                return e(F);
              }, get selected() {
                return e(Os);
              }, get currentVariantId() {
                return P();
              }, get componentId() {
                return ve;
              }, get sellingPlan() {
                return e(Bt);
              }, get selectedProgressiveGifts() {
                return e(Y);
              }, onProgressiveGiftsChange: At, onDealBarSelect: Dt, onDealBarDeselect: ln, onVariantSelect: sn, onVariantsChange: Lt, onPersonalisationsChange: Xe, get personalisationInitialValues() {
                return e(oc);
              } });
            }
          }, Ia = (Za) => {
            var Os = ze(), oc = _e(Os), o1 = (el) => {
              {
                let Fs = d(() => Ue().id === D()), cc = d(() => Ue().id === D() ? e(an) : []);
                Zg(el, { get dealBlock() {
                  return e(Ft);
                }, get dealBar() {
                  return Ue();
                }, get selectedDealBarIndex() {
                  return e(Ht);
                }, get otherProducts() {
                  return e(C);
                }, get complementaryProducts() {
                  return e(F);
                }, get componentId() {
                  return ve;
                }, get selected() {
                  return e(Fs);
                }, get globalSellingPlan() {
                  return e(Bt);
                }, get selectedProgressiveGifts() {
                  return e(Y);
                }, onProgressiveGiftsChange: At, onDealBarSelect: Dt, onDealBarDeselect: ln, onVariantsChange: tt, onPersonalisationsChange: Xe, get personalisationInitialValues() {
                  return e(cc);
                } });
              }
            }, c1 = (el) => {
              var Fs = ze(), cc = _e(Fs), u1 = (tl) => {
                {
                  let uc = d(() => Ue().id === D() ? Q() && Number(Q()) : void 0), dc = d(() => Ue().id === D()), gc = d(() => Ue().id === D() ? e(an) : []);
                  zg(tl, { get dealBlock() {
                    return e(Ft);
                  }, get dealBar() {
                    return Ue();
                  }, get selectedDealBarIndex() {
                    return e(Ht);
                  }, get product() {
                    return e(S);
                  }, get collectionBreaksProducts() {
                    return e(U);
                  }, get otherProducts() {
                    return e(C);
                  }, get complementaryProducts() {
                    return e(F);
                  }, get customQuantity() {
                    return e(uc);
                  }, get selected() {
                    return e(dc);
                  }, get selectedProgressiveGifts() {
                    return e(Y);
                  }, onProgressiveGiftsChange: At, get currentVariantId() {
                    return P();
                  }, get componentId() {
                    return ve;
                  }, get globalSellingPlan() {
                    return e(Bt);
                  }, onDealBarSelect: Dt, onDealBarDeselect: ln, onVariantSelect: sn, onVariantsChange: Ce, onPersonalisationsChange: Xe, get personalisationInitialValues() {
                    return e(gc);
                  } });
                }
              }, d1 = (tl) => {
                {
                  let uc = d(() => Ue().id === D() ? Q() && Number(Q()) : void 0), dc = d(() => Ue().id === D()), gc = d(() => Ue().id === D() ? e(an) : []);
                  Xo(tl, { get selectedDealBarIndex() {
                    return e(Ht);
                  }, get dealBlock() {
                    return e(Ft);
                  }, get dealBar() {
                    return Ue();
                  }, get product() {
                    return e(S);
                  }, get otherProducts() {
                    return e(C);
                  }, get complementaryProducts() {
                    return e(F);
                  }, get customQuantity() {
                    return e(uc);
                  }, get selected() {
                    return e(dc);
                  }, get currentVariantId() {
                    return P();
                  }, get currentVariantSource() {
                    return A();
                  }, get componentId() {
                    return ve;
                  }, get globalSellingPlan() {
                    return e(Bt);
                  }, get selectedProgressiveGifts() {
                    return e(Y);
                  }, onProgressiveGiftsChange: At, onDealBarSelect: Dt, onDealBarDeselect: ln, onVariantSelect: sn, onVariantsChange: Re, onPersonalisationsChange: Xe, get personalisationInitialValues() {
                    return e(gc);
                  } });
                }
              };
              O(cc, (tl) => {
                !e(B).collectionBreaksEnabled || !e(B).collectionBreaks || Ue().dealBarType && Ue().dealBarType !== Zt.QuantityBreak && Ue().dealBarType !== Zt.Bxgy ? tl(d1, !1) : tl(u1);
              }, !0), b(el, Fs);
            };
            O(oc, (el) => {
              Ue().dealBarType === Zt.Sku ? el(o1) : el(c1, !1);
            }, !0), b(Za, Os);
          };
          O(Gr, (Za) => {
            Ue().dealBarType === Zt.Bundle ? Za(Xi) : Za(Ia, !1);
          }, !0), b(Kt, Tn);
        };
        O(Ln, (Kt) => {
          Ue().dealBarType === Zt.MixAndMatch ? Kt(wn) : Kt(Mn, !1);
        }), b(He, Yt);
      };
      var Fn = w(Dn), Zr = (He) => {
        var Ue = Vm(), Yt = _e(Ue), Ln = (Kt) => {
          var Tn = Tm();
          je(w(Tn), () => e(Me)), y(Tn), b(Kt, Tn);
        };
        O(Yt, (Kt) => {
          e(Me) && Kt(Ln);
        });
        var wn = L(Yt, 2), Mn = (Kt) => {
          jg(Kt, { get timer() {
            return e(B).timer;
          } });
        };
        O(wn, (Kt) => {
          e(B).timerEnabled && e(B).timer && Kt(Mn);
        }), b(He, Ue);
      };
      O(Fn, (He) => {
        ne() || He(Zr);
      });
      var Ct = L(Fn, 2), on = (He) => {
        le(He);
      };
      O(Ct, (He) => {
        var Ue;
        e(ot) && ((Ue = e(B).subscriptions) == null ? void 0 : Ue.position) === "above" && e(De).positions.size === 0 && He(on);
      });
      var fn = L(Ct, 2);
      let ct, Tt;
      var hn = w(fn);
      Gt(hn, 17, () => e(Oe), (He) => He.id, (He, Ue) => {
        Ba(He, { get badge() {
          return e(Ue);
        }, get blockLayout() {
          return e(B).blockLayout;
        } });
      });
      var Ar = L(hn, 2), or = (He) => {
        {
          let Ue = d(() => e(De).positions.has("all"));
          le(He, () => e(Ue));
        }
      };
      O(Ar, (He) => {
        var Ue;
        e(ot) && ((Ue = e(B).subscriptions) == null ? void 0 : Ue.position) === "above" && e(De).positions.size > 0 && He(or);
      });
      var qr = L(Ar, 2);
      Gt(qr, 17, () => e(rn), (He) => He.key, (He, Ue) => {
        var Yt = ze(), Ln = _e(Yt), wn = (Kt) => {
          Dg(Kt, { get settings() {
            return e($n);
          }, onReveal: () => (function(Tn) {
            for (const Gr of Tn) nt.add(Gr.id);
            !D() && Le && Tn.includes(Le) && Dt({ dealBarId: Le.id, dealBarQuantity: Ne(Le), preselected: !0 });
          })(e(Ue).bars), children: (Tn, Gr) => {
            var Xi = ze();
            Gt(_e(Xi), 17, () => e(Ue).bars, (Ia) => Ia.id, (Ia, Za) => {
              Ee(Ia, () => e(Za));
            }), b(Tn, Xi);
          }, $$slots: { default: !0 } });
        }, Mn = (Kt) => {
          var Tn = ze(), Gr = _e(Tn), Xi = (Ia) => {
            Ee(Ia, () => e(Ue).bar);
          };
          O(Gr, (Ia) => {
            e(Ue).type === "visible" && Ia(Xi);
          }, !0), b(Kt, Tn);
        };
        O(Ln, (Kt) => {
          e(Ue).type === "scratch" && e($n) ? Kt(wn) : Kt(Mn, !1);
        }), b(He, Yt);
      });
      var ga = L(qr, 2), Kn = (He) => {
        {
          let Ue = d(() => e(De).positions.has("all"));
          le(He, () => e(Ue));
        }
      };
      O(ga, (He) => {
        var Ue;
        e(ot) && ((Ue = e(B).subscriptions) == null ? void 0 : Ue.position) === "below" && e(De).positions.size > 0 && He(Kn);
      }), y(fn);
      var Pr = L(fn, 2), pr = (He) => {
        xi(He, { get product() {
          return e(yt);
        }, get productPersonalisation() {
          return e(Jt).productPersonalisation;
        }, get selectedVariantIds() {
          return e(pn);
        }, get personalisationItems() {
          return e(qn);
        }, get quantity() {
          return e(sr);
        }, get addPersonalisationModal() {
          return e(B).addPersonalisationModal;
        }, onPersonalisationsChange: Xe, get initialValues() {
          return e(an);
        } });
      };
      O(Pr, (He) => {
        var Ue;
        e(lr) && ((Ue = e(Jt)) != null && Ue.productPersonalisation) && He(pr);
      });
      var Un = L(Pr, 2), cr = (He) => {
        le(He);
      };
      O(Un, (He) => {
        var Ue;
        e(ot) && ((Ue = e(B).subscriptions) == null ? void 0 : Ue.position) === "below" && e(De).positions.size === 0 && He(cr);
      });
      var In = L(Un, 2), Xn = (He) => {
        var Ue = Am();
        je(w(Ue), () => u()("system.out_of_stock")), y(Ue), b(He, Ue);
      };
      O(In, (He) => {
        e(We) && (e(oe).length > 1 || e(oe)[0].quantity > 1) && He(Xn);
      });
      var Sr = L(In, 2), Jr = (He) => {
        Eg(He, { get checkboxUpsells() {
          return e(B).checkboxUpsells;
        }, get dealBlock() {
          return e(B);
        }, get otherProducts() {
          return e(C);
        }, get complementaryProducts() {
          return e(F);
        }, get dealSellingPlan() {
          return e(wt);
        }, get dealBarQuantity() {
          return e(An);
        }, onChange: ye });
      };
      O(Sr, (He) => {
        !ne() && e(B).checkboxUpsellsEnabled && e(B).checkboxUpsells && He(Jr);
      });
      var Gs = L(Sr, 2), n1 = (He) => {
        Fg(He, { get progressiveGifts() {
          return e(Ft).progressiveGifts;
        }, get dealBlock() {
          return e(B);
        }, get otherProducts() {
          return e(C);
        }, get selectedDealBarIndex() {
          return e(Ht);
        }, get sellingPlan() {
          return e(wt);
        }, onChange: At, onUnlock: un, onSubscribe: zt });
      };
      O(Gs, (He) => {
        e(B).progressiveGiftsEnabled && e(Ft).progressiveGifts && e(Ft).progressiveGifts.layout !== "deal-bar" && He(n1);
      });
      var nh = L(Gs, 2);
      {
        let He = d(() => e(Nt).missingItemsCount > 0);
        Jg(nh, { get alertText() {
          return e(Nt).alertText;
        }, get enabled() {
          return e(Nt).requiresItemSelection;
        }, get hasItemsToSelect() {
          return e(He);
        } });
      }
      var r1 = L(nh, 2), a1 = (He) => {
        Yg(He, { get savingsSummary() {
          return e(B).savingsSummary;
        }, get totalFullPrice() {
          return e(Ye).fullPrice;
        }, get totalDiscountedPrice() {
          return e(Ye).discountedPrice;
        }, get quantity() {
          return e(ht);
        }, get product() {
          return e(yt);
        }, get sellingPlan() {
          return e(wt);
        } });
      };
      O(r1, (He) => {
        var Ue, Yt;
        !ne() && e(B).savingsSummaryEnabled && e(B).savingsSummary && (Ue = e(Ye).saved, Yt = e(B).savingsSummary.hideWhenZeroSavings, Ue > 0 || !Yt) && He(a1);
      }), y(Dn), ke((He, Ue, Yt, Ln) => {
        ct = Rt(fn, 1, "kaching-bundles__bars", null, ct, Yt), Tt = Et(fn, "", Tt, Ln);
      }, [() => ({ "kaching-bundles__block--horizontal": e(B).blockLayout === "horizontal", "kaching-bundles__block--grid": e(B).blockLayout === "grid", "kaching-bundles__block--plain": e(B).blockLayout === "plain" }), () => {
        var He;
        return (He = e(B).abTestVariantLetter) != null ? He : e(B).abTestVariantNumber ? String.fromCharCode(64 + e(B).abTestVariantNumber) : void 0;
      }, () => ({ "kaching-bundles__bars--horizontal": e(B).blockLayout === "horizontal", "kaching-bundles__bars--grid": e(B).blockLayout === "grid", "kaching-bundles__bars--plain": e(B).blockLayout === "plain", "kaching-bundles__bars--hide-prices": e(mt), "kaching-bundles__bars--badge-border-all": e(De).positions.has("all"), "kaching-bundles__bars--badge-border-top": e(De).positions.has("top"), "kaching-bundles__bars--badge-border-bottom": e(De).positions.has("bottom"), "kaching-bundles__bars--badge-border-left": e(De).positions.has("left"), "kaching-bundles__bars--badge-border-right": e(De).positions.has("right") }), () => {
        var He, Ue;
        return { "--badge-border-thickness": `${(He = e(De).thickness) != null ? He : ""}px`, "--badge-border-gap": `${(Ue = e(De).gap) != null ? Ue : ""}px`, "--badge-border-gap-border": e(De).gap ? "1px solid var(--bar-border-color, rgba(0, 0, 0, 0.3))" : "none", "--badge-border-min-length": e(De).sideLength ? `${e(De).sideLength}px` : void 0, "--badge-border-wrap-color": e(Ae) };
      }]);
    }
    y(Cn);
    var i1 = L(Cn, 2), l1 = (le) => {
      Rg(le, { get shopCustomStyles() {
        return p().shopCustomStyles;
      }, get customStyles() {
        return e(B).customStyles;
      }, get dealBlockId() {
        return e(B).id;
      } });
    };
    O(i1, (le) => {
      e(B).customStylesEnabled && le(l1);
    }), ke((le, Ee, ct, Tt) => {
      var He;
      bn = Rt(Dn, 1, "kaching-bundles__block kaching-bundles__block--loaded", null, bn, le), Ie(Dn, "data-deal-block-id", e(B).id), Ie(Dn, "data-ab-test-variant-id", e(B).abTestVariantId), Ie(Dn, "data-ab-test-variant", Ee), Ie(Dn, "data-selling-plan-id", (He = e(wt)) == null ? void 0 : He.id), Et(Dn, e(xe));
    }, [() => ({ "kaching-bundles__block--horizontal": e(B).blockLayout === "horizontal", "kaching-bundles__block--grid": e(B).blockLayout === "grid", "kaching-bundles__block--plain": e(B).blockLayout === "plain" }), () => {
      var le;
      return (le = e(B).abTestVariantLetter) != null ? le : e(B).abTestVariantNumber ? String.fromCharCode(64 + e(B).abTestVariantNumber) : void 0;
    }, () => ({ "kaching-bundles__bars--horizontal": e(B).blockLayout === "horizontal", "kaching-bundles__bars--grid": e(B).blockLayout === "grid", "kaching-bundles__bars--plain": e(B).blockLayout === "plain", "kaching-bundles__bars--hide-prices": e(mt), "kaching-bundles__bars--badge-border-all": e(De).positions.has("all"), "kaching-bundles__bars--badge-border-top": e(De).positions.has("top"), "kaching-bundles__bars--badge-border-bottom": e(De).positions.has("bottom"), "kaching-bundles__bars--badge-border-left": e(De).positions.has("left"), "kaching-bundles__bars--badge-border-right": e(De).positions.has("right") }), () => {
      var le, Ee;
      return { "--badge-border-thickness": `${(le = e(De).thickness) != null ? le : ""}px`, "--badge-border-gap": `${(Ee = e(De).gap) != null ? Ee : ""}px`, "--badge-border-gap-border": e(De).gap ? "1px solid var(--bar-border-color, rgba(0, 0, 0, 0.3))" : "none", "--badge-border-min-length": e(De).sideLength ? `${e(De).sideLength}px` : void 0, "--badge-border-wrap-color": e(Ae) };
    }]), b(n, Bn);
    var s1 = at(Hn);
    return f(), s1;
  }
  customElements.define("kaching-bundles-block", Ke(Kg, { config: { attribute: "config", type: "Object" }, translations: { attribute: "translations", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, product: { attribute: "product", type: "Object" }, otherProducts: { attribute: "other-products", type: "Array" }, collectionBreaksProducts: { attribute: "collection-breaks-products", type: "Array" }, complementaryProducts: { attribute: "complementary-products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" }, currentVariantId: { attribute: "current-variant-id", type: "Number" }, currentVariantSource: { attribute: "current-variant-source", type: "String" }, sellingPlanId: { attribute: "selling-plan-id", type: "Number" }, selectedDealBarId: { attribute: "selected-deal-bar-id", type: "String" }, quantity: { attribute: "quantity", type: "Number" }, nativeBundleProductIds: { attribute: "native-bundle-product-ids", type: "Array" }, compact: { attribute: "compact", type: "Boolean" }, variantBadges: { attribute: "variant-badges", type: "Array" }, component: {} }, [], ["rotateBundleNonce", "selectedVariants", "items", "pricing", "deal", "isItemSelectionValid", "validateItemSelection"], !1, (n) => {
    const t = class extends n {
      constructor() {
        super(), Pn(this, "component"), this.component = this, this.innerHTML && (yr(this, "kaching-bundles-block-hydrated"), this.innerHTML = "");
      }
    };
    for (const [r, { get: a, set: s }] of Object.entries(Object.getOwnPropertyDescriptors(n.prototype))) s && Object.defineProperty(t.prototype, r, { get: a, set(o) {
      const { type: c } = this.$$p_d[r], l = typeof o == "string" && (c === "Object" || c === "Array");
      s.call(this, l ? JSON.parse(o) : o);
    } });
    return t;
  }));
  var Gm = $('<div class="kaching-bundles"><!></div>');
  function Xg(n, t) {
    var r;
    rt(t, !0);
    const a = _(t, "config", 7), s = _(t, "dealBlock", 7), o = _(t, "products", 23, () => []), c = _(t, "mediaImages", 7), l = _(t, "translations", 7), i = d(() => xr(s(), a().brandColors)), { setConfig: u } = hi(a());
    Ms(), zs();
    const { setMoneyFormat: g } = Ni(a().moneyFormat), { setTranslations: k } = vi(l()), { setMediaImages: f } = Ml(c()), { setSwatchSettings: h } = Bl({ swatchOptions: e(i).swatchOptions || [], swatchSize: e(i).swatchSize, swatchShape: e(i).swatchShape, showSelectedSwatchName: (r = e(i).showSelectedSwatchName) != null && r, pillStyle: ca(e(i)) });
    et(() => {
      u(a());
    }), et(() => {
      g(a().moneyFormat, !!e(i).showPricesWithoutDecimals);
    }), et(() => {
      k(l());
    }), et(() => {
      f(c());
    }), et(() => {
      var A;
      h({ swatchOptions: e(i).swatchOptions || [], swatchSize: e(i).swatchSize, swatchShape: e(i).swatchShape, showSelectedSwatchName: (A = e(i).showSelectedSwatchName) != null && A, pillStyle: ca(e(i)) });
    });
    const p = d(() => e(i).dealBars.find((A) => A.dealBarType === Zt.MixAndMatch));
    var x = { get config() {
      return a();
    }, set config(A) {
      a(A), v();
    }, get dealBlock() {
      return s();
    }, set dealBlock(A) {
      s(A), v();
    }, get products() {
      return o();
    }, set products(A = []) {
      o(A), v();
    }, get mediaImages() {
      return c();
    }, set mediaImages(A) {
      c(A), v();
    }, get translations() {
      return l();
    }, set translations(A) {
      l(A), v();
    } }, m = Gm(), I = w(m), P = (A) => {
      nc(A, { get dealBlock() {
        return e(i);
      }, get dealBar() {
        return e(p);
      }, get products() {
        return o();
      }, onChoose: () => {
      } });
    };
    return O(I, (A) => {
      e(p) && A(P);
    }), y(m), b(n, m), at(x);
  }
  customElements.define("kaching-bundles-mix-and-match-choose-product", Ke(Xg, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, translations: { attribute: "translations", type: "Object" }, products: { attribute: "products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), Pn(this, "component"), this.component = this;
    }
  }));
  var Om = $('<div class="kaching-bundles"><!></div>');
  function eh(n, t) {
    rt(t, !0);
    const r = _(t, "config", 7), a = _(t, "product", 7), s = _(t, "translations", 7), o = _(t, "addPersonalisationModal", 7), c = d(() => xr(o(), r().brandColors)), { setConfig: l } = hi(r()), { setTranslations: i } = vi(s());
    et(() => {
      l(r()), i(s());
    });
    const u = d(() => {
      var f, h;
      return (h = (f = a()) == null ? void 0 : f.variants) != null && h[0] ? [{ product: a(), variant: a().variants[0], index: 0 }, { product: a(), variant: a().variants[0], index: 1 }] : [];
    });
    var g = { get config() {
      return r();
    }, set config(f) {
      r(f), v();
    }, get product() {
      return a();
    }, set product(f) {
      a(f), v();
    }, get translations() {
      return s();
    }, set translations(f) {
      s(f), v();
    }, get addPersonalisationModal() {
      return o();
    }, set addPersonalisationModal(f) {
      o(f), v();
    } }, k = Om();
    return Ko(w(k), { get selectedVariants() {
      return e(u);
    }, get addPersonalisationModal() {
      return e(c);
    }, inline: !0, personalisationValues: [], onConfirm: () => {
    }, onClose: () => {
    } }), y(k), b(n, k), at(g);
  }
  customElements.define("kaching-bundles-personalisation-modal", Ke(eh, { config: { attribute: "config", type: "Object" }, product: { attribute: "product", type: "Object" }, translations: { attribute: "translations", type: "Object" }, addPersonalisationModal: { attribute: "add-personalisation-modal", type: "Object" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), Pn(this, "component"), this.component = this;
    }
  }));
  function Fm(n, t) {
    t().dispatchEvent(new CustomEvent("kaching-bundles-sticky-atc-clicked", { bubbles: !0, composed: !0 }));
  }
  var Lm = $('<img class="kaching-bundles-sticky-atc__image"/>'), Em = $('<button class="kaching-bundles-sticky-atc__button"><!></button>'), jm = $('<div class="kaching-bundles"><div class="kaching-bundles-sticky-atc"><div class="kaching-bundles-sticky-atc__content"><!> <div class="kaching-bundles-sticky-atc__title"><!></div></div> <!></div></div>');
  function th(n, t) {
    var r;
    rt(t, !0);
    const a = () => Te(yi, "$selectedDealBarStore", o), s = () => Te(m, "$translate", o), [o, c] = kt(), l = _(t, "component", 7), i = _(t, "config", 7), u = _(t, "stickyAtc", 7), g = _(t, "translations", 7), k = _(t, "product", 7), f = _(t, "dealBlock", 7), h = d(() => xr(u(), i().brandColors)), p = d(() => xr(f(), i().brandColors)), { setConfig: x } = hi(i()), { translate: m, setTranslations: I } = vi(g()), { formatPrice: P, setMoneyFormat: A } = Ni(i().moneyFormat, (r = e(p)) == null ? void 0 : r.showPricesWithoutDecimals);
    et(() => {
      x(i());
    }), et(() => {
      var q;
      A(i().moneyFormat, !!((q = e(p)) != null && q.showPricesWithoutDecimals));
    }), et(() => {
      I(g());
    });
    const j = d(() => ((q) => {
      const ie = { "kaching-bundles-sticky-atc-background-color": Qe(q.backgroundColor), "kaching-bundles-sticky-atc-title-color": Qe(q.titleColor), "kaching-bundles-sticky-atc-button-color": Qe(q.buttonColor), "kaching-bundles-sticky-atc-button-text-color": Qe(q.buttonTextColor), "kaching-bundles-sticky-atc-title-font-size": q.titleFont.size + "px", "kaching-bundles-sticky-atc-button-font-size": q.buttonFont.size + "px", "kaching-bundles-sticky-atc-title-font-style": hr(q.titleFont.style), "kaching-bundles-sticky-atc-title-font-weight": gr(q.titleFont.style), "kaching-bundles-sticky-atc-button-font-style": hr(q.buttonFont.style), "kaching-bundles-sticky-atc-button-font-weight": gr(q.buttonFont.style), "kaching-bundles-sticky-atc-product-photo-size": q.productPhotoSize + "px", "kaching-bundles-sticky-atc-button-padding": q.buttonPadding + "px", "kaching-bundles-sticky-atc-product-photo-corner-radius": q.productPhotoCornerRadius + "px", "kaching-bundles-sticky-atc-button-corner-radius": q.buttonCornerRadius + "px" };
      if (q.sameSizeOnMobile || !q.mobile) return mn(ie);
      const ue = q.mobile;
      return mn({ ...ie, "kaching-bundles-sticky-atc-image-display": q.productPhotoSize > 0 ? "block" : "none", "kaching-bundles-sticky-atc-image-display-mobile": ue.productPhotoSize > 0 ? "block" : "none", "kaching-bundles-sticky-atc-title-font-size-mobile": ue.titleFontSize + "px", "kaching-bundles-sticky-atc-button-font-size-mobile": ue.buttonFontSize + "px", "kaching-bundles-sticky-atc-product-photo-size-mobile": ue.productPhotoSize + "px", "kaching-bundles-sticky-atc-button-padding-mobile": ue.buttonPadding + "px", "kaching-bundles-sticky-atc-product-photo-corner-radius-mobile": ue.productPhotoCornerRadius + "px", "kaching-bundles-sticky-atc-button-corner-radius-mobile": ue.buttonCornerRadius + "px" });
    })(e(h))), D = d(() => {
      var q;
      return ((q = a()) == null ? void 0 : q.pricing.fullPrice) || k().variants[0].compareAtPrice || k().variants[0].price;
    }), Q = d(() => {
      var q;
      return ((q = a()) == null ? void 0 : q.pricing.discountedPrice) || k().variants[0].price;
    }), Z = d(() => {
      var q;
      return ((q = a()) == null ? void 0 : q.quantity) || 1;
    }), T = d(() => yn({ priceFormatter: Te(P, "$formatPrice", o), product: k(), totalFullPrice: e(D), totalDiscountedPrice: e(Q), quantity: e(Z), unitQuantity: null })), J = d(() => e(T)(s()(e(h).title))), z = new pf("(width < 750px)"), G = d(() => (z.current && !e(h).sameSizeOnMobile && e(h).mobile ? e(h).mobile.productPhotoSize : e(h).productPhotoSize) > 0);
    var ne = { get component() {
      return l();
    }, set component(q) {
      l(q), v();
    }, get config() {
      return i();
    }, set config(q) {
      i(q), v();
    }, get stickyAtc() {
      return u();
    }, set stickyAtc(q) {
      u(q), v();
    }, get translations() {
      return g();
    }, set translations(q) {
      g(q), v();
    }, get product() {
      return k();
    }, set product(q) {
      k(q), v();
    }, get dealBlock() {
      return f();
    }, set dealBlock(q) {
      f(q), v();
    } }, X = jm(), B = w(X), S = w(B), C = w(S), F = (q) => {
      var ie = Lm();
      ke(() => {
        Ie(ie, "src", k().image), Ie(ie, "alt", k().title);
      }), b(q, ie);
    };
    O(C, (q) => {
      e(G) && q(F);
    });
    var U = L(C, 2);
    je(w(U), () => e(J)), y(U), y(S);
    var H = L(S, 2), se = (q) => {
      var ie = Em();
      ie.__click = [Fm, l], je(w(ie), () => s()(e(h).buttonText)), y(ie), b(q, ie);
    };
    O(H, (q) => {
      e(h).buttonText && q(se);
    }), y(B), y(X), ke(() => Et(B, e(j))), b(n, X);
    var E = at(ne);
    return c(), E;
  }
  jn(["click"]), customElements.define("kaching-bundles-sticky-atc", Ke(th, { config: { attribute: "config", type: "Object" }, stickyAtc: { attribute: "sticky-atc", type: "Object" }, translations: { attribute: "translations", type: "Object" }, product: { attribute: "product", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, component: {} }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), Pn(this, "component"), this.component = this;
    }
  }));
  const Rm = Od, Nm = zd, Qm = Kg, Wm = Xg, Hm = eh, Um = th, Zm = kg.element, Jm = Rm.element, Ym = Nm.element, Km = Qm.element, Xm = Wm.element, e1 = Hm.element, t1 = Um.element;
  return Wt.ChooseMultipleGifts = Ym, Wt.ChooseProduct = Jm, Wt.DealBar = Zm, Wt.DealBlock = Km, Wt.MixAndMatchChooseProduct = Xm, Wt.PersonalisationModal = e1, Wt.StickyAtc = t1, Object.defineProperty(Wt, Symbol.toStringTag, { value: "Module" }), Wt;
})({});
