const fs = require('fs');
//
// const contents = fs.readdirSync(__dirname);
// console.log(contents);
// console.log('finish reading');

fs.readdir(__dirname, (error, contents) =>{
  if (error) throw error;
  console.log(contents)
});