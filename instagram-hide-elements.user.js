// ==UserScript==
// @name         Instagram: hide specified elements (1Blocker migration)
// @description  Applies the same CSS-hiding rules you used in 1Blocker on instagram.com
// @match        https://www.instagram.com/*
// @match        https://instagram.com/*
// @run-at       document-start
// ==/UserScript==

(() => {
  const selectors = [
    // lg1 (main feed block)
    '.x9f619.xjbqb8w.x1lllihq.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1n2onr6.x1plvlek.xryxfn-j.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1',
    // Reels link/button
    'a._a6hd[href="/reels/"]',
    // lg1 variant
    '.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1uhb9sk.x1plvlek.xryxfn-j.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x6s0dn4.x1oa3qoh.x1nhvcw1',
    // Stories (first set)
    '.x1qjc9v5.x78zum5.xdt5ytf.x17j7krd.x1a2a7pz.x10wlt62.x1n2onr6',
    // Stories (second set)
    '.x1qjc9v5.x78zum5.x1q0g3np.xl56j7k.xh8yej3',
    // IG status test
    '.x1c4vz4f.x2lah0s.x1e56ztr.xa0zjtf',
    // Explore content (iOS)
    'div.x78zum5.xdt5ytf.x11t119s.x1n2onr6.xph46j.x7x3xai.xsybdxg.x194l6zq'
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
