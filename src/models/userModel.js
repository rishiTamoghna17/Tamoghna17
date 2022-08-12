const mongoose=require("mongoose")
const userModel = new mongoose.Schema({
    name:String,
    mobile:Number,

},{timestamps:true})
module.exports = mongoose.model("User",userModel)