var reltime = require("../reltime");
	
console.log("45 days ago", reltime.parse(new Date(), "-45d").toString());
