const { count } = require("console")
const orderModel = require("../models/orderModel")
const userModel= require("../models/userModel")
const productModel= require("../models/productModel")


const createOrder= async function (req, res) {
    let data= req.body
    
    let header = req.headers.isfreeappuser
    //console.log(header)
    let userExist = await userModel.findById(data.user)
    if(!userExist) {
        return res.send({status: false, msg: "user id is not valid"})
    }
    // console.log(balance)
    
    let productExist = await productModel.findById(data.product)
    if(!productExist) {
        return res.send({status: false, msg: "product id is not valid"})
    }

    let balance = userExist.balance;//user balance
    let price = productExist.price//product price
    let totalPrice = (price * data.amount);// total price 
    if(header==="true")
    {
        data.amount = 0;
        // console.log(data.amount)
        let savedData = await orderModel.create(data)
        return res.send(savedData)

    }
    if(header==="false" && totalPrice<balance)
    {
        let user = await userModel.findOneAndUpdate({_id:data.user},{balance:balance-price},{ new: true})
        return res.send({data: user})
    }
    if(header==="false" && totalPrice>balance)
    {
        return res.send("the user doesn't have enough balance")
    }
    // else{
    //     // let user = await userModel.findOneAndUpdate({_id:data.user},{balance:balance-price})
    //     // data.amount =price
    //     // let savedData = await orderModel.create(data)
    //     // return res.send(savedData)

    // }


    
}


module.exports.createOrder = createOrder


// const getBooksData = async function (req, res) {
//     let allBooks = await BookModel.find({ authorName: "HO" })
//     console.log(allBooks)
//     if (allBooks.length > 0) res.send({ msg: allBooks, condition: true })
//     else res.send({ msg: "No books found", condition: false })
// }


// const updateBooks = async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks = await BookModel.findOneAndUpdate(
//         { authorName: "ABC" }, //condition
//         { $set: data }, //update in data
//         { new: true, upsert: true } ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT
//     )

//     res.send({ msg: allBooks })
// }

// const deleteBooks = async function (req, res) {
//     // let data = req.body 
//     let allBooks = await BookModel.updateMany(
//         { authorName: "FI" }, //condition
//         { $set: { isDeleted: true } }, //update in data
//         { new: true } ,
//     )

//     res.send({ msg: allBooks })
// }



// const totalSalesPerAuthor = async function (req, res) {
//     // let data = req.body 
//     let allAuthorSales = await BookModel.aggregate(
//         [
//             { $group: { _id: "$authorName", totalNumberOfSales: { $sum: "$sales" } } },
//             { $sort: { totalNumberOfSales: -1 } }
//         ]
//     )

//     res.send({ msg: allAuthorSales })
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE



// module.exports.createBook = createBook
// module.exports.getBooksData = getBooksData
// module.exports.updateBooks = updateBooks
// module.exports.deleteBooks = deleteBooks
// module.exports.totalSalesPerAuthor = totalSalesPerAuthor
