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
  console.log(location)
  let weatherData = await getOpenWeather(location.coordinates)
  res.render('index', { title: 'Weather App', weather: weatherData });
});

module.exports = router;
