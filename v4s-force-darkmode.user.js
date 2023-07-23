// ==UserScript==
// @name         4Vision Admin Force Darkmode
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  A simple tampermonkey script that forces darkmode on the admin page of v4s.
// @author       Mind
// @match        https://admin.vision4s.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vision4s.com
// @updateURL    https://github.com/JuztFlow/v4s-force-darkmode/raw/v4s-force-darkmode.user.js
// @downloadURL  https://github.com/JuztFlow/v4s-force-darkmode/raw/v4s-force-darkmode.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Declare function to replace CSS class on page body
    function replaceBodyClass() {
        var body = document.body;
        body.classList.remove('nb-theme-default');
        body.classList.add('nb-theme-dark');
    }

    // Call the function on page load
    replaceBodyClass();

    // Call the function whenever the page changes
    window.addEventListener('load', replaceBodyClass);
    document.addEventListener('DOMContentLoaded', replaceBodyClass);
    document.addEventListener('readystatechange', replaceBodyClass);
})();