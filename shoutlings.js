function Shoutlings(output, server) {
	this.output = $(output);
	this.server = server;
	this.timer = 4000;
	this.timeout = false;
	this.request = false;
	this.id = 0;
	
	this.start = function() {
		if(this.timeout)
			clearTimeout(this.timeout);
		
		if(this.request)
			this.request.abort();
		
		this.run();
	}
	
	this.run = function() {
		var self = this;
		this.request = $.post(this.server, {id: this.id}, function(data, responseText, jqXHR) {
			self.request = false;
			try {
				self.id = data ? parseInt(data[0]) : 0;
			}
			catch(err) {
				self.id = 0;
			}
		
			try {
				if(data[1].length > 0) {
					var scroll = self.output.scrollTop() > self.output.prop('scrollHeight') - self.output.height() - 48;
					for(d in data[1]) {
						s = document.createElement('div');
						s.innerHTML = '<span>' + data[1][d][0] + '</span>' +
							'<span>' + data[1][d][1] + '</span>';
						self.output.append(s);
					}
					if(scroll)
						self.output.animate({scrollTop: self.output.prop('scrollHeight') - self.output.height()});
					self.timer = 4000;
				}
				else {
					self.timer = Math.min(10000, self.timer + 250)
				}
			}
			catch(err) {}
			
			self.timeout = setTimeout(function(){self.run();}, self.timer);
		}, 'json');
	}
	
	this.send = function(name, message) {
		var self = this;
		$.post(this.server, {write: [name, message]}, function() {
			self.start();
		});
	}
}
