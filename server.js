const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  res.writeHead(200, {'Content-type': 'text/html'});
  res.end('');
});

server.listen(3000, () => console.log('server listening on port 3000'));