const  mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  MarioCharShema = new Schema({
   name: String,
   weight: Number
});

const MarioChar = mongoose.model('mariochar', MarioCharShema);

module.exports = MarioChar;
