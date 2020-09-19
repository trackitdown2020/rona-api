const axios = require('axios');
const nodemon = require('nodemon');

const getCountryGeoJSON = async (req, res) => {
    const { country } = req.params;
    const { data } = await axios.get(`https://react-vector-maps.netlify.app/maps/${country}.json`);
    if(data) {
        res.status(200).send(data);
    } else {
        res.status(500).send(`Could not find geoJSON for ${country}`);
    }
}

module.exports = {
    getCountryGeoJSON
}