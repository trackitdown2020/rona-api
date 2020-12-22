const axios = require('axios');

const getCountryGeoJSON = async (req, res) => {
    
    try {
        const { country } = req.params;
        const { data } = await axios.get(`https://react-vector-maps.netlify.app/maps/${country}.json`);
        if(data) {
            res.status(200).send(data);
        } else {
            res.status(500).send({ error: `Could not find geoJSON for ${country}` });
        }
    } catch(error) {
        res.status(500).send({ error })
    }
  
  
}

module.exports = {
    getCountryGeoJSON
}