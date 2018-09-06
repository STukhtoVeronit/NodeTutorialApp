const fs = require('fs');
const path = require('path');

function render( template, data) {
	fs.readFile(path.resolve('views', template), 'utf-8', (error, template) => {
		if (error) {
			this.writeHead(500, {'Content-type': 'text/plain'});
			return this.end(error.message);
		}

		let html = template;

		if (data) {
			html = template.replace(/{{([^{}]*)}}/g, (placeholder, property) =>{
				const match = data[property];
				console.log(match + " -- " + placeholder + " -- " + property + " -- " + data[property]);
				return match || placeholder;
			});
		}

		this.writeHead(200, {'Content-type': 'text/html'});
		this.end(html);
	});
}

module.exports = render;