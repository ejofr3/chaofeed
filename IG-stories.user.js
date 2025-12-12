// ==UserScript==
// @name         IG stories
// @description  Block specific div on Instagram
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    const style = document.createElement('style');
    style.textContent = `
        div.x78zum5.x1y1aw1k.xrw5ot4.xwib8y2.x7coems.xfk6m8 {
            display: none !important;
        }
    `;
    document.head.appendChild(style);
})();
