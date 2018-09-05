//your key: b4f52eb3
const http = require('http');

const {publicRoute,home,search, notFound} = require('./routes');

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