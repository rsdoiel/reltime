var reltime = require("../reltime");

console.log("Show one hour, three minutes and ten seconds in the future", 
  reltime.parse(new Date(), "1h 3m 10s").toString());
