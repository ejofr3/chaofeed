// ==UserScript==
// @name         Facebook: fbcontenttest11
// @description  Hide element matching .x1hc1fzr.x1unhpq9.x6o7n8i on facebook.com (1Blocker migration)
// @match        https://www.facebook.com/*
// @match        https://facebook.com/*
// @match        https://web.facebook.com/*
// @run-at       document-start
// ==/UserScript==

(() => {
  const selectors = ['.x1hc1fzr.x1unhpq9.x6o7n8i'];

  const hideMatches = () => {
    document.querySelectorAll(selectors.join(',')).forEach((el) => {
      el.style.setProperty('display', 'none', 'important');
      el.style.setProperty('visibility', 'hidden', 'important');
      el.style.setProperty('pointer-events', 'none', 'important');
      el.setAttribute('aria-hidden', 'true');
    });
  };

  hideMatches();
  const observer = new MutationObserver(hideMatches);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
