const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.get('/first-problem',function(req,res){
    const arr= [1,2,3,4,5,7];
    let total = 0;
    for(let i in arr){
        total=total+arr[i]  // total= 22
    }
    let element = arr.pop();  //element = 7
    let logic= element*(element+1)/2;  //logic = 7*8/2=28
    let missingNumber = logic - total;
    res.send({data: missingNumber});
}) ;


router.get('/second-problem',function(req,res){
    const arr= [45,46,47,48,50];
    let total = 0;
    let len = arr.length;// = 5
    for(var i in arr){
        total = total+arr[ i ]
    }
    let firstElement = arr[0];// = 45
    let lastElement = arr.pop();// =50
    let logic = (len + 1) * (firstElement + lastElement)/2;
    let result = logic - total;
    res.send({data: result});
});module.exports = router;
// adding this comment for no reason