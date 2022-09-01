const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const createUser = async function (req, res) {
  try {
    let data = req.body;
    let savedData = await userModel.create(data);
    res.status(201).send({ msg: savedData });
  } catch (err) {
    console.log(err.message);
    res.status(403).send(err.message);
  }
};

const loginUser = async function (req, res) {
  try {
    let userName = req.body.userName;
    let password = req.body.password;
    let user = await userModel.findOne({
      emailId: userName,
      password: password,
    });
    if (!user) {
      return res.status(403).send({
        status: false,
        msg: "username or the password is not corerct",
      });
    }
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "plutonium",
        organisation: "FunctionUp",
      },
      "functionup-plutonium-very-very-secret-key"
    );
    res.setHeader("x-auth-token", token);
    res.status(200).send({ status: true, token: token });
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.status(404).send({ status: false, msg: "No such user exists" });

    res.status(200).send({ status: true, data: userDetails });
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send("No such user exists");
    }

    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate(
      { _id: userId },
      userData,
      {
        new: true,
      }
    );
    res.status(200).send({ status: updatedUser, data: updatedUser });
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};
const isDelete = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send("No such user exists");
    }
    let delUser = await userModel.findOneAndUpdate(
      { _id: userId },
      { isDeleted: true },
      {
        new: true,
      }
    );
    res.status(200).send({ status: true, data: delUser });
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.isDelete = isDelete;
