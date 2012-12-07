//
// reltime.js - a light weight library for parsing relative time references using
// a simple time notaion (e.g. 1d 2h 3m 5s would be one day, two hours, three minutes 
// and five seconds to some relative date.)
// @author: R. S. Doiel, <rsdoiel@gmail.com>
// copyright (c) 2011 all rights reserved
//
// Released under the Simplified BSD License.
// See: http://opensource.org/licenses/bsd-license.php
//
/*jslint devel: true, node: true, maxerr: 50, indent: 4,  vars: true, sloppy: true */

//
// parse() - parse a simple relative notation and return
// a new date object reflecting the new time.
// Example: var new_time = reltime.parse(new Date(), "1d 2h 3m 4s");
//
// @param date_object - this is a native JavaScript date object
// @param time_notation - A string in the simple relative time notation
// @return a JavaScript Date object of false if something goes wrong.
//
exports.parse = function (date_object, time_notation) {
  throw "parse() not implemented";
};
