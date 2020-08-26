const {
    queryAppleMobilityData,
    getAllCountries,
    getAllCountrySubregion
} = require('../../apis/covid19/mobility/apple');

const getAppleMobilityData = async (req, res) => {
    const qs = req.query;
    const { country, subregion } = qs;
    const response = await queryAppleMobilityData(country, subregion)
}

const getAppleMobilitySupportedCountries = async (req, res) => {
    const response = await getAllCountries();
    if(response) {
        res.status(200).send(response);
    } else {
        res.status(500).send({error: 'Issue getting the supported countries.'});
    }
}

const getAppleMobilitySupportedSubregions = async (res, res) => {
    const qs = req.query;
    const { country } = qs;
    const response = getAllCountrySubregion(country);
    if(response) {
        res.status(200)/send(response);
    } else {
        res.status(500).send({error: `Issue getting subregions for ${country}`})
    }
}


module.exports = { 
    getAppleMobilityData,
    getAppleMobilitySupportedCountries,
    getAppleMobilitySupportedSubregions
};