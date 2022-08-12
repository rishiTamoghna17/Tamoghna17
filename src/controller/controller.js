const userModel = require("../models/userModel");
const firstModel = require("../models/userModel");

let createUser = async function(req,res){
    let data = req.body;

   
        let createUser = await userModel.create(data)
         res.send({status:true,message:success,data:createUser})
    

}
module.exports.createUser=createUser