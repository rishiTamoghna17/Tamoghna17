
const authorModel= require("../models/authorModel")
const publisherModel = require("../models/publisherModel")
const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let book = req.body
    let Author = await authorModel.find().select({_id: 1})
    let validAuthorId = Author[0]._id.toString()
    let publisher = await publisherModel.find().select({_id: 1})
    let validPublisherId = publisher[0]._id.toString()

    if(!book.author_id){
       return res.send({msg:"author_id detail is required"})
    }
    if(!book.publisher_id){
       return res.send({msg:"publisher_id detail is required"})
    }
    if(validPublisherId === book.publisher_id && validAuthorId === book.author_id ){
        let bookCreated = await bookModel.create(book)
        return res.send({data: bookCreated})
    }
     if(validAuthorId!==book.author_id && validPublisherId!== book.publisher_id){
        return res.send({msg:"both author_id and publisher_id should valid"})
     }
    if(validAuthorId !== book.author_id){
        return res.send({msg:"valid author_id is required"})
    }
    


    if(validPublisherId !== book.publisher_id ){
        return res.send({msg:"valid publisher_id is required"})
        }


}

    

    


const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
