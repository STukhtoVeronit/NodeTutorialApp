const mongodb = require('./mongodb');

module.exports = connectionString => {
  const connection = mongodb.connect(connectionString);
  return connection;
};