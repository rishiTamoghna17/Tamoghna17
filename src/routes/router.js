const express = require("express");
let router = express.Router();
const controller=require("../controller/userController")



router.post("/createUser",controller.createUser)






module.exports = router