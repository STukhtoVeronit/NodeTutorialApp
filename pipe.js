const fs = require('fs');

const input = fs.createReadStream('./lorem.txt', 'utf-8');
const output = fs.createWriteStream('./lorem.md', 'utf-8');

input.pipe(output);