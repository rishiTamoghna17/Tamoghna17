const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController");
const auth= require('../middleware/auth');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

router.get("/users/:userId", auth.setHeader,userController.getUserData)

router.put("/users/:userId",auth.setHeader,userController.updateUser)
router.put("/users/:userId",auth.setHeader,userController.isDelete)

module.exports = router;