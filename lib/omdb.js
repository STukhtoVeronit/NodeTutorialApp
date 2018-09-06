const http = require('http');

function get(title, done) {
	const req = http.get(`http://www.omdbapi.com/?apikey=b4f52eb3&t=${title}`, res =>{
		if (res.statusCode !== 200){
			done(new Error(res.statusMessage));
			res.resume();
			return
		}

		res.setEncoding('utf-8');

		let body = '';

		res.on('data', data => body += data);

		res.on('end', () => {
			let result;

			try {
				result = JSON.parse(body);
			} catch (e) {
				return done(e);
			}
			if (result.Response === "False") return done(new Error('Movie has not found'));

			return done(null, result);
		});

		req.on('error', error => done(error));
	});
}

module.exports = {get};