const jwt = require("jsonwebtoken");
const authenticate = function (req, res, next) {
  let token = req.headers["x-auth-token"];
let decodedToken = jwt.verify(
    token,
    "functionup-plutonium-very-very-secret-key"
  );
  if (!token) return res.send({ status: false, msg: "token must be present" });
  
  if (!decodedToken) {
    return res.send({ status: false, msg: "token is invalid" });
  }
  next();
};

const authorise = function (req, res, next) {
  let token = req.headers["x-auth-token"];
  let decodedToken = jwt.verify(
    token,
    "functionup-plutonium-very-very-secret-key"
  );
  let userToBeModified = req.params.userId
  let userLoggedIn = decodedToken.userId
  if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
  next();
};

// module.exports.authenticate = authenticate;
module.exports.authenticate = authenticate;
module.exports.authorise = authorise;
