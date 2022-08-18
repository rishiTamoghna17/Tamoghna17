const authorModel = require("../models/authorModel")
const AuthorModel= require("../models/authorModel")
const BookModel= require("../models/bookModel")

//creating author data
const createAuthorData= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}
//creating book data
const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

//List out the books written by "Chetan Bhagat"
const listBooks = async function (req, res){
    let findAuthor= await AuthorModel.find({author_name :  "Chetan Bhagat"})//it returns arrar of findAuthor

    let findBook= await BookModel.find({author_id :  {$eq: findAuthor[0].author_id}});//it checks is author id presents in bookmodels of not.. findAuthor[0] - we know it presents 0th position in array becouse only one chetan bhagat
    res.send({msg: findBook})
}

//List out the books written by "Chetan Bhagat"
const updatedBook = async function (req, res){
    let bookPrice = await BookModel.findOneAndUpdate({name:"Two states" },{$set : {price : 100}},{new : true})
    let updateprice = bookPrice.price;
    let authorupdate = await AuthorModel.find({author_id:{$eq : bookPrice.author_id}}).select({author_name:1,_id:0})
    
    res.send({authorupdate,updateprice})
}

//Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books..
const bookrange = async function (req, res){
let range = await BookModel.find({price:{$gte:50,$lte:100}})
let x= range.map(x=>x.author_id)[1,2,4,6,]
let newbook = await AuthorModel.find({author_id:x}).select({author_name :1,_id:0})
res.send({newbook})
}




module.exports.createAuthorData= createAuthorData
module.exports.createBook=createBook
module.exports.listBooks=listBooks
module.exports.updatedBook=updatedBook
module.exports.bookrange=bookrange