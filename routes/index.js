var express = require('express');
var router = express.Router();
require('dotenv').config()
const getGeoCode = require('../utils/getGeoCode')
const getOpenWeather = require('../utils/getOpenWeather')

/* GET home page. */
router.get('/', async function(req, res, next) {
  console.log(process.env.MAPBOX_KEY)
  let address = req.query
  // console.log(address)
  let location = await getGeoCode(address.city)
  // console.log(location)
  let weatherData = await getOpenWeather(location.coordinates)
  let hourly = weatherData.hourly





  let thisTime = new Date()
  for (let i = 0; i < hourly.length; i++) {
    hourly[i].displayTime = new Date((hourly[i].dt*1000)).toLocaleString("en-US", {dataStyle: "short", timeStyle: "short"})
    // hourly[i].push({displayTime: hourly.displayTime})
  }
  console.log(hourly[0].weather)
  
  console.log(thisTime.toLocaleString())
  res.render('index', { title: 'Weather App', forecast: weatherData, hourly: hourly});
});

module.exports = router;
