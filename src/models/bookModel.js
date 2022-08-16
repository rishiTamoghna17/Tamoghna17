const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String ,
    authorName: String, 
    tags: [String],
    isPublished: Boolean,
    publishing_year :{type:Number,required:true},
    pages: Number,
    stocks: Boolean,
    prices: {
        indianPrice: Number,
        europePrice: Number,
    },
    sales: {type: Number, default: 10}
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
