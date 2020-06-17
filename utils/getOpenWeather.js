const axios = require('axios')


const getOpenWeather = async ([lon,lat]) => {
    const token = process.env.OPEN_WEATHER_KEY
    const url =`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${token}&exclude={daily,minutely}&units=metric`
    const res = await axios.get(url)
    console.log(res.data.current.weather)
    return res.data
}

module.exports = getOpenWeather