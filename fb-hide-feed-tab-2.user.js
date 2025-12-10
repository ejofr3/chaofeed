// ==UserScript==
// @name         Facebook m: hide feed tab 2
// @description  Hide/disable the Feed tab button on m.facebook.com
// @match        https://m.facebook.com/*
// @run-at       document-idle
// ==/UserScript==

(() => {
  const css = `
    /* Hide the Feed tab in the tab bar (aria-label, action id, or 1st tab position) */
    [role="tab"][aria-label^="feed" i],
    [role="tab"][data-action-id="32733"],
    [role="tab"][data-action-id="32752"],
    [role="tablist"]:has([role="tab"][aria-label^="feed" i]) > [role="tab"]:first-child {
      display: none !important;
      pointer-events: none !important;
      visibility: hidden !important;
    }
  `;
  if (!document.getElementById('fb-hide-feed-tab-2-style')) {
    const style = document.createElement('style');
    style.id = 'fb-hide-feed-tab-2-style';
    style.textContent = css;
    document.documentElement.appendChild(style);
  }
})();
