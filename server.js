const bcrypt = require('bcryptjs');
const colors = require('colors');

var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("batia", salt);

const match = bcrypt.compareSync("batia", hash); // true

console.log(hash.red);
console.log(match);
