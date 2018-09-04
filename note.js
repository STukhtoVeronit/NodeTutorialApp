const fs = require('fs');

const command = process.argv[2];
const title = process.argv[3];
const content = process.argv[4];

switch (command){
  case 'list':
    list((err, notes) => {
      if(err) return console.error(err.message);
      notes.forEach((note, index) => console.log(`${index}. ${note.title}`));
    });
    break;

  case 'view':
    view(title, (error, note) => {
      if(error) return console.error(error.message);
      console.log(`# ${note.title}\r\n\r\n---\r\n\r\n${note.content}`);
    });
    break;

  case 'create':
    create(title, content, error => {
      if (error) return cosnole.log(error.message);

      console.log('Note has created');
    });
    break;

  case 'remove':
    remove(title, error => {
      if (error) return cosnole.log(error.message);

      console.log('Note has deleted');
    });
    break;

  default:
    console.log('err')
}

function list(done) {
  fs.readFile('notes.json', (err,data) =>{
    if (err) done(err);

    const notes = JSON.parse(data);

    done(null, notes);
  } );
}

function view(title, done) {
  fs.readFile('notes.json', (error, data) => {
    if (error) return done(error);

    const notes =  JSON.parse(data);
    const note = notes.find(note => note.title === title);

    if (!note) return done( new Error ("Note hasn't found"));

    done(null, note);

  });
}
function create(title, content, done) {
  fs.readFile('notes.json', (error, data) => {
    if (error) return done(error);

    const notes =  JSON.parse(data);
    notes.push({ title, content });
    const json = JSON.stringify(notes);

    fs.writeFile('notes.json', json, error => {
      if (error) return done(error);
      done();
    })
  });
}
function remove(title, done) {
  fs.readFile('notes.json', (error, data) => {
    if (error) return done(error);

    let notes =  JSON.parse(data);
    notes = notes.filter(note => note.title !== title);

    const json = JSON.stringify(notes);

    fs.writeFile('notes.json', json, error => {
      if (error) return done(error);
      done();
    })
  });
}