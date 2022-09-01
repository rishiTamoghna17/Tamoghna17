const jwt = require("jsonwebtoken");
const authenticate = function (req, res, next) {
  try {
    let token = req.headers["x-auth-token"];
    if (!token)
      return res.status(401).send({ status: false, msg: "token must be present" });
    let decodedToken = jwt.verify(
      token,
      "functionup-plutonium-very-very-secret-key"
    );
    if (!decodedToken) {
      return res.status(401).send({ status: false, msg: "token is invalid" });
    }
    next();
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

const authorise = function (req, res, next) {
  try {
    let token = req.headers["x-auth-token"];
    let decodedToken = jwt.verify(
      token,
      "functionup-plutonium-very-very-secret-key"
    );
    let userToBeModified = req.params.userId;
    let userLoggedIn = decodedToken.userId;
    if (userToBeModified != userLoggedIn)
      return res.status(403).send({
        status: false,
        msg: "User logged is not allowed to modify the requested users data",
      });
    next();
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

// module.exports.authenticate = authenticate;
module.exports.authenticate = authenticate;
module.exports.authorise = authorise;
