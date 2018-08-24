const  mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  BookShema = new Schema({
    title: String,
    pages: Number
});

const  AuthorShema = new Schema({
    name: String,
    age: Number,
    books: [BookShema]
});

const Author = mongoose.model('author', AuthorShema);

module.exports = Author;
