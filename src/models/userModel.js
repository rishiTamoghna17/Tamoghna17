const mongoose=require("mongoose")
const userSchema = new mongoose.Schema({
    name:String,
    mobile:Number,

},{timestamps:true})
module.exports = mongoose.model("User",userSchema)