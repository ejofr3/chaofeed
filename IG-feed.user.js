// ==UserScript==
// @name         IG feed
// @description  Block specific div on Instagram
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    const style = document.createElement('style');
    style.textContent = `
        div.xdj266r.x14z9mp.xat24cr.x1lziwak.xexx8yu.xyri2b.x18d9i69.x1c1uobl.x9f619.xf68679.x5lhr3w.xjbqb8w.x78zum5.x15mokao.x1ga7v0g.x16uus16.xbiv7yw.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 {
            display: none !important;
        }
    `;
    document.head.appendChild(style);
})();
