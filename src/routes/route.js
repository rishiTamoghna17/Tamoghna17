const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const AthorBookController= require("../controllers/authorBookController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAthorData", AthorBookController.createAuthorData  )

//router.get("/getAuthorsData", AthorBookController.getAuthorData)

router.post("/createBook", AthorBookController.createBook  )
router.get("/Booklist", AthorBookController.listBooks  )
router.get("/updatedBook", AthorBookController.updatedBook  )
router.get("/bookRange", AthorBookController.bookrange  )



module.exports = router;