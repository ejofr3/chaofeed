// ==UserScript==
// @name         Desktop Facebook: hide selected elements
// @description  Hide Video button, Gaming button, and specified content block on facebook.com
// @match        https://www.facebook.com/*
// @match        https://facebook.com/*
// @match        https://web.facebook.com/*
// @run-at       document-start
// ==/UserScript==

(() => {
  const selectors = [
    '[aria-label="Video"]',
    '[aria-label="Gaming"]'
  ];

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
