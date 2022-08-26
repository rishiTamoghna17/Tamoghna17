
const headerCheck= function ( req, res, next) {
    let header = req.headers
    // console.log(typeof(header))
    if(!header.hasOwnProperty("isfreeappuser")){
    return res.send("the request is missing a mandatory header")
    }
    else{
    next()
    }
}

module.exports.headerCheck= headerCheck

