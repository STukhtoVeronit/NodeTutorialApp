//your key: b4f52eb3
//http://www.omdbapi.com/?apikey=b4f52eb3&s=dog
const render = require('./lib/render');
const http = require('http');

const {publicRoute,home,search, notFound} = require('./routes');

http.ServerResponse.prototype.render = render;

http.createServer((req, res) => {
		if (req.url.match(/.(html|css|js|png)$/)){
			publicRoute(req, res);
		} else if (req.url === '/') {
			home(req, res);
		} else if (req.url.startsWith('/search')){
			search(req, res);
		} else {
			notFound(req, res);
		}

	}).listen(3000, () => console.log('server listening on port 3000'));