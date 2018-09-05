const connection = require('./db')('monogodb://....');

console.log(connection.connectionString);

