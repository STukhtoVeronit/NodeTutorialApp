const https = require('https');
function getRepos(username, done) {
  if (!username) return done(new Error('You should set user name'));

  const options ={
    hostname: 'api.github.com',
    path: `/users/${username}/repos`,
    headers: { 'User-Agent': 'STukhtoVeronit'}
  };

  const req = https.get(options, res => {
    res.setEncoding('utf-8');
    if (res.statusCode === 200){
      let body = '';
      res.on('data', data => body+=data);

      res.on('end', () => {
        const result = JSON.parse(body);
        return done(null, result);
      })
    } else {
      done(new Error('yo'));
    }
  });

  req.on('error', error => done(error));


}

module.exports = {
  getRepos
};