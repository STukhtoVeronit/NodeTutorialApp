const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
	if (req.url.match(/\.(html|css|js|png)$/)){

	} else if (req.url === '/') {

	} else if (req.url.startsWith('/search')){

	} else {

	}

	res.writeHead(200, {'Content-type': 'text/html'});
	res.end('');
}).listen(3000, () => console.log('server listening on port 3000'));