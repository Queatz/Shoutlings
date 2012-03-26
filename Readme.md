Shoutlings
==========

A lightweight shoutbox backend using jQuery, PHP, and SQLite.

Usage
-----

```html
<script type="text/javascript" src="shoutlings.js"></script>
```

```javascript
var shoutlings;

// Setup on document load
function load() {
	// Set up shoutlings on a div and server file.
	shoutlings = new Shoutlings($('#shoutlings'), 'shoutlings.php');
	
	// Start listening for shoutlings.
	shoutlings.start();
}

// Send a shout
function shout() {
	shoutlings.send('name', 'message');
}
```

Styling
-----

Shoutlings appends divs with two spans to your specified output.  After two messages it will look like:

```html
<div id="mydiv">
	<div>
		<span>Name</span>
		<span>Message</span>
	</div>
	<div>
		<span>Name</span>
		<span>Message</span>
	</div>
</div>
```
