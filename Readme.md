Shoutlings
==========

A lightweight shoutbox backend using jQyery, PHP, and SQLite.

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

Shoutlings appends to the output div in the following way:

```html
<div>
	<span>Name</span>
	<span>Message</span>
</div>
```
