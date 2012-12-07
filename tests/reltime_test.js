//
// reltime_test.js - Some tests to confirm reltime works.
// @author: R. S. Doiel, <rsdoiel@gmail.com>
// copyright (c) 2011 all rights reserved
//
// Released under the Simplified BSD License.
// See: http://opensource.org/licenses/bsd-license.php
//
/*jslint devel: true, node: true, maxerr: 50, indent: 4,  vars: true, sloppy: true */
var reltime = require("../reltime"),
  harness = require("harness"),
  path = require("path");
  
harness.push({callback: function (test_label) {
  assert.fail(test_label + " not implemented")
  harness.completed(test_label);
}, label: "test relative years" });

harness.push({callback: function (test_label) {
  assert.fail(test_label + " not implemented")
  harness.completed(test_label);
}, label: "test relative months" });

harness.push({callback: function (test_label) {
  assert.fail(test_label + " not implemented")
  harness.completed(test_label);
}, label: "test relative days" });

harness.push({callback: function (test_label) {
  assert.fail(test_label + " not implemented")
  harness.completed(test_label);
}, label: "test relative hours" });

harness.push({callback: function (test_label) {
  assert.fail(test_label + " not implemented")
  harness.completed(test_label);
}, label: "test relative minutes" });

harness.push({callback: function (test_label) {
  assert.fail(test_label + " not implemented")
  harness.completed(test_label);
}, label: "test relative seconds" });

harness.push({callback: function (test_label) {
  assert.fail(test_label + " not implemented")
  harness.completed(test_label);
}, label: "test relative milliseconds" });

harness.push({callback: function (test_label) {
  assert.fail(test_label + " not implemented")
  harness.completed(test_label);
}, label: "test combinations" });

harness.RunIt(path.basename(module.filename), 1);


