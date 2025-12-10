// ==UserScript==
// @name         Facebook m: hide reels tab (marketplace)
// @description  Hide/disable the Reels tab button on m.facebook.com Marketplace view
// @match        https://m.facebook.com/*
// @match        https://www.facebook.com/*
// @match        https://web.facebook.com/*
// @run-at       document-idle
// ==/UserScript==

(() => {
  const css = `
    /* Hide only the Reels tab (marketplace view) via aria-label/jewel markers */
    [role="tab"][aria-label^="reels" i],
    [role="tab"][aria-label*="reels" i],
    [role="tab"]:has([data-hidden-ref-key="reels.jewel.hidden"]) {
      display: none !important;
      pointer-events: none !important;
      visibility: hidden !important;
    }
  `;
  if (!document.getElementById('fb-hide-reels-tab-market-style')) {
    const style = document.createElement('style');
    style.id = 'fb-hide-reels-tab-market-style';
    style.textContent = css;
    document.documentElement.appendChild(style);
  }
})();
