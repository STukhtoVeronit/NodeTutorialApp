const fs = require('fs');

function getValue(flag) {
  const index = process.argv.indexOf(flag);
  return (index > 1) ? process.argv[index + 1] : null;
}
sdcsdc
const filename = getValue('-f');

 fs.appendFile('note.txt', '\n How are you?', error => {
   if (error) return console.log('Error boyzzz', error);

   console.log('File created');
 });



//
// const contents = fs.readdirSync(__dirname);
// console.log(contents);
// console.log('finish reading');

// fs.readdir(__dirname, (error, contents) =>{
//   if (error) throw error;
//   console.log(contents)
// });

// function getValue(flag) {
//   const index = process.argv.indexOf(flag);
//   return (index > 1) ? process.argv[index + 1] : null;
// }
//
// const filename = getValue('-f');
//
// fs.readFile(filename, 'utf-8' , (err,data) => {
//   if(err) throw err;
//   console.log(data);
// });


