//
// browser-shim.js - add just enough to allow testing in browser.
//
// @author: R. S. Doiel, <rsdoiel@gmail.com>
// copyright (c) 2012 all rights reserved
//
// Released under the Simplified BSD License.
// See: http://opensource.org/licenses/bsd-license.php
//
// These are defined to stop errors in Chrome.
// They are not used in browser based tests.
/*jslint devel: true, browser: true, maxerr: 50, indent: 4,  vars: true, sloppy: true */
/*global process, windows, exports */
(function (global) {
	global.exports = {};
	global.require = { main: true };
	global.module = true;
}(this));
