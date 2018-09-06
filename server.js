const ws = require('ws');

const server = new ws.Server({port: 3000});

server.on('connection', ws => {
	ws.on('message', message =>{
		if(message === "exit") {
			ws.close();
		} else {
			server.clients.forEach(client => {
				if (client.readyState === ws.OPEN){
					client.send(message);
				}
			});
		}
	});
	ws.send('Hello 0o');
});