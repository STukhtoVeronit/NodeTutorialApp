const fs = require('fs');

const input = fs.createReadStream('./lorem.txt', 'utf-8');
const output = fs.createWriteStream('./lorem.md', 'utf-8');


let data = '';
input.on('data', part => output.write(part));
// input.on('end', () => console.log(data.length));
input.on('error', (error) => console.log(error.message));


// const string = "Some default string for big file.\n"
// fs.writeFile('./lorem.txt', string.repeat(100000),
//             (err, data) =>{
//               if(err) return console.log(err);
//               console.log('success');
//             });