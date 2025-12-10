// ==UserScript==
// @name         Facebook m: hide feed content
// @description  Hide feed timeline and composer on the Home/Feed screen only
// @match        https://m.facebook.com/*
// @match        https://www.facebook.com/*
// @match        https://web.facebook.com/*
// @run-at       document-start
// ==/UserScript==

(() => {
  const css = `
    @supports(selector(:has(*))) {
      /* Scope to Home/Feed screen: feed tab is selected in the tablist */
      body:has([role="tablist"] [role="tab"][aria-label^="feed" i][aria-selected="true"]) [role="tablist"] ~ div:not(.fixed-container):not(.above-bottom) {
        display: none !important;
      }
      /* Also hide the composer ("Publica una actualización de estado") just in case */
      body:has([role="tablist"] [role="tab"][aria-label^="feed" i][aria-selected="true"]) [aria-label^="Publica una actualización" i] {
        display: none !important;
      }
    }
  `;

  const inject = () => {
    if (document.getElementById('fb-hide-feed-content-style')) return;
    const style = document.createElement('style');
    style.id = 'fb-hide-feed-content-style';
    style.textContent = css;
    document.documentElement.appendChild(style);
  };

  inject();
})();
