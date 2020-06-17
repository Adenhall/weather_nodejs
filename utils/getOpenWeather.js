const axios = require('axios')


const getOpenWeather = async ([lon,lat]) => {
    const token = process.env.OPEN_WEATHER_KEY
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${token}`
    const res = await axios.get(url)
    console.log(res)
}

module.exports = getOpenWeather