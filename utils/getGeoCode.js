const axios = require('axios')


const getGeoCode = async (address) => {
    const token = process.env.MAPBOX_KEY
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        address
      )}.json?access_token=${token}`
    const res = await axios.get(url)
    // console.log(res.data.features[0].geometry)
    return res.data.features[0].geometry

}

module.exports = getGeoCode