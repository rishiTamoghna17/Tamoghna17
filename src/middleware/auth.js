const jwt = require("jsonwebtoken");
const setHeader = async function (req, res, next) {
  let token = req.headers["x-auth-token"];

  if (!token) return res.send({ status: false, msg: "token must be present" });
  let decodedToken = jwt.verify(
    token,
    "functionup-plutonium-very-very-secret-key"
  );
  if (!decodedToken){
    return res.send({ status: false, msg: "token is invalid" });
  }
  next()
  
};

// module.exports.authenticate = authenticate;
module.exports.setHeader = setHeader;
