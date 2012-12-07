reltime
=======


# Overview and rationale

There is a solid, feature ful, Node/Browser module called moment.js. It is the swiss army knife of date/time handling in JavaScript. It is excellent. Sometimes it is too much.

reltime does one thing. It parses a simple time string notation relative to an existing JavaScript date object. Examples of the simple notation -

```
	23 hours 4 minutes 2 seconds
	-23h 5m 6s
```

This is particularly helpful with command line utilities where you might have
a parameter to process a relative time to the present. E.g.

```shell
	node mytool.js --update-since="-17m -2s"
```

Using moment.js to parse this one simple phrase just seems like overkill to me
so that is why I've written reltime.js.  It has three methods -

* parse(JS_DATE_OBJECT, SIMPLE_TIME_STRING) - parse a relative time string
* valueOf() - return the equivalent of JavaScript's Date's valueOf()
* toString() - return the equivalent of JavaScript's Date's toString()

# Example

## Task

Compute the relative time of one hour, three minutes and ten seconds
in the future:

## Code

```JavaScript
	var reltime = require("reltime");
	
	console.log("Show one hour, three minutes and ten seconds
in the future", reltime.parse(new Date(), "1h 3m 10s").toString());
```

## Task

Calculate the time 45 days ago.

## Code

```JavaScript
	var reltime = require("reltime");
	
	console.log("45 days ago", reltime.parse(new Date(), "-45d").toString());
```

