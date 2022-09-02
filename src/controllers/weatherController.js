let axios = require("axios");

let getWeather = async function (req, res) {
  try {
    let cities = ["Kolkata", "Bangalore", "Dehli", "Jaipur", "Kashi"];
    let cityObject = [];
    for (let i = 0; i < cities.length; i++) {
      let obj = { city: cities[i] };

      let options = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=20c57b4f71d02c33617fea4f76de023d`,
      };
      let result = await axios(options);
      console.log(result.data.main.temp);
      obj.temp = result.data.main.temp;
      cityObject.push(obj);
    }
    let sort = cityObject.sort(function(a,b) {return (a.temp-b.temp)})
    console.log(sort)
    res.status(200).send({status: true, data: sort});
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};
module.exports.getWeather = getWeather;
