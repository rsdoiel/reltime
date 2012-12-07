//
// reltime_test.js - Some tests to confirm reltime works.
// @author: R. S. Doiel, <rsdoiel@gmail.com>
// copyright (c) 2011 all rights reserved
//
// Released under the Simplified BSD License.
// See: http://opensource.org/licenses/bsd-license.php
//
/*jslint devel: true, node: true, maxerr: 50, indent: 4,  vars: true, sloppy: true */
var assert = require("assert"),
	path = require("path"),
	harness = require("harness"),
	reltime = require("../reltime");

harness.push({callback: function (test_label) {
	var s, expected_s, t = new Date("12/07/2012 11:22:00 GMT-0800 (PST)");
	
	expected_s = t.toString();
	s = reltime.parse(t, "0s");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);
	
	
	expected_s = (new Date("12/07/2012 11:21:59 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "-1s");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = (new Date("12/07/2012 11:22:01 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "1s");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);


	expected_s = t.toString();
	s = reltime.parse(t, "0 second");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);
		
	expected_s = (new Date("12/07/2012 11:21:59 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "-1 second");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = (new Date("12/07/2012 11:22:01 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "1 second");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = t.toString();
	s = reltime.parse(t, "0 seconds");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);
		
	expected_s = (new Date("12/07/2012 11:22:01 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "1 seconds");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = (new Date("12/07/2012 11:21:59 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "-1 seconds");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	harness.completed(test_label);
}, label: "test relative seconds" });

harness.push({callback: function (test_label) {
	var s, expected_s, t = new Date("12/07/2012 11:22:00 GMT-0800 (PST)");
	
	expected_s = t.toString();
	s = reltime.parse(t, "0m");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);
	
	
	expected_s = (new Date("12/07/2012 11:21:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "-1m");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = (new Date("12/07/2012 11:23:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "1m");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);


	expected_s = t.toString();
	s = reltime.parse(t, "0 minute");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);
		
	expected_s = (new Date("12/07/2012 11:21:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "-1 minute");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = (new Date("12/07/2012 11:23:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "1 minute");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = t.toString();
	s = reltime.parse(t, "0 minutes");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);
		
	expected_s = (new Date("12/07/2012 11:21:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "-1 minutes");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = (new Date("12/07/2012 11:23:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "1 minutes");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	harness.completed(test_label);
}, label: "test relative minutes" });

harness.push({callback: function (test_label) {
	var s, expected_s, t = new Date("12/07/2012 11:22:00 GMT-0800 (PST)");
	
	expected_s = t.toString();
	s = reltime.parse(t, "0h");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);
	
	
	expected_s = (new Date("12/07/2012 10:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "-1h");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = (new Date("12/07/2012 12:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "1h");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);


	expected_s = t.toString();
	s = reltime.parse(t, "0 hour");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);
		
	expected_s = (new Date("12/07/2012 10:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "-1 hour");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = (new Date("12/07/2012 12:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "1 hour");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = t.toString();
	s = reltime.parse(t, "0 hours");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);
		
	expected_s = (new Date("12/07/2012 10:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "-1 hours");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = (new Date("12/07/2012 12:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "1 hours");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	harness.completed(test_label);
}, label: "test relative hours" });

harness.push({callback: function (test_label) {
	var s, expected_s, t = new Date("12/07/2012 11:22:00 GMT-0800 (PST)");
	
	expected_s = t.toString();
	s = reltime.parse(t, "0d");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);
	
	
	expected_s = (new Date("12/06/2012 11:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "-1d");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = (new Date("12/08/2012 11:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "1d");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);


	expected_s = t.toString();
	s = reltime.parse(t, "0 day");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);
		
	expected_s = (new Date("12/06/2012 11:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "-1 day");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = (new Date("12/08/2012 11:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "1 day");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = t.toString();
	s = reltime.parse(t, "0 days");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);
		
	expected_s = (new Date("12/06/2012 11:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "-1 days");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = (new Date("12/08/2012 11:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "1 days");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	harness.completed(test_label);
}, label: "test relative days" });

harness.push({callback: function (test_label) {
	var s, expected_s, t = new Date("12/07/2012 11:22:00 GMT-0800 (PST)");
	
	expected_s = t.toString();
	s = reltime.parse(t, "0mon");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);


	expected_s = (new Date("11/07/2012 11:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "-1mon");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = (new Date("01/07/2013 11:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "1mon");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);


	expected_s = t.toString();
	s = reltime.parse(t, "0 month");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);
		
	expected_s = (new Date("11/07/2012 11:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "-1 month");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = (new Date("01/07/2013 11:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "1 month");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = t.toString();
	s = reltime.parse(t, "0 months");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);
		
	expected_s = (new Date("11/07/2012 11:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "-1 months");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = (new Date("01/07/2013 11:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "1 months");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	harness.completed(test_label);
}, label: "test relative months" });


  
harness.push({callback: function (test_label) {
	var s, expected_s, t = new Date("12/07/2012 11:22:00 GMT-0800 (PST)");
	
	expected_s = t.toString();
	s = reltime.parse(t, "0y");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);
	
	
	expected_s = (new Date("12/07/2011 11:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "-1y");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = (new Date("12/07/2013 11:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "1y");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);


	expected_s = t.toString();
	s = reltime.parse(t, "0 year");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);
		
	expected_s = (new Date("12/07/2011 11:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "-1 year");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = (new Date("12/07/2013 11:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "1 year");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = t.toString();
	s = reltime.parse(t, "0 years");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);
		
	expected_s = (new Date("12/07/2011 11:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "-1 years");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = (new Date("12/07/2013 11:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "1 years");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	harness.completed(test_label);
}, label: "test relative years" });

harness.push({callback: function (test_label) {
	var s, expected_s, t = new Date("12/07/2012 11:22:00 GMT-0800 (PST)");
	
	expected_s = t.toString();
	s = reltime.parse(t, "0y 0mon 0d 0h 0m 0s");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);
	
	
	expected_s = (new Date("12/07/2012 11:21:59 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "0y 0mon 0d 0h 0m -1s");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = (new Date("12/07/2012 11:21:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "0y 0mon 0d 0h -1m 0s");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = (new Date("12/07/2012 10:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "0y 0mon 0d -1h 0m 0s");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = (new Date("12/06/2012 10:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "0y 0mon -1d 0h 0m 0s");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = (new Date("11/07/2012 10:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "0y -1mon 0d 0h 0m 0s");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);

	expected_s = (new Date("12/07/2011 10:22:00 GMT-0800 (PST)")).toString();
	s = reltime.parse(t, "-1y 0mon 0d 0h 0m 0s");
	assert.equal(s, expected_s, "\n" + s + "\n" + expected_s);
	harness.completed(test_label);
}, label: "test combinations" });

harness.RunIt(path.basename(module.filename), 10);


