const express = require('express');
const  bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();



const route = require('./routes/router');


app.use(bodyParser.json())

mongoose.connect("mongodb+srv://tamoghna_test:tamoghna17@test.uvbxgla.mongodb.net/practices", {
    useNewUrlParser: true
})
.then(() => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});