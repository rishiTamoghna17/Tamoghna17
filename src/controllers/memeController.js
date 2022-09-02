let axios = require("axios");
let meme = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: `https://api.imgflip.com/get_memes`,
    };
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
  let result = await axios
};
