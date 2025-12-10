// ==UserScript==
// @name         Reddit: hide Shreddit home feed
// @description  Hide the Shreddit home feed element on reddit.com
// @match        https://www.reddit.com/*
// @match        https://reddit.com/*
// @run-at       document-start
// ==/UserScript==

(() => {
  const selectors = [
    'shreddit-feed[reload-url*="/svc/shreddit/feeds/home-feed"]'
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
