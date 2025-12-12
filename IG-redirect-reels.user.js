// ==UserScript==
// @name         Instagram Reels Redirect
// @match        https://www.instagram.com/reels*
// @run-at       document-start
// @noframes
// ==/UserScript==
(function () {
  'use strict';
  function redirectIfRoot() {
    if (location.pathname === '/reels' || location.pathname === '/reels/') {
      location.replace('/'); // replace so Back won’t return to /reels
    }
  }
  redirectIfRoot();
  new MutationObserver(redirectIfRoot).observe(document, { childList: true, subtree: true });
})();
