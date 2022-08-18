const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( { 
    bookName: String, 
    authorName: String, 
    tags: [String],
    publishingYear: Number
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users
