const {
    queryAppleMobilityData,
    getAllCountries,
    getAllCountrySubregion
} = require('../../apis/covid19/mobility/apple');
const {
    appleMobilityMapper
} = require('../../mappers/appleMobilityMapper');

const getAppleMobilityData = async (req, res) => {
    const qs = req.query;
    const { country, subregion } = qs;
    const response = await queryAppleMobilityData(country, subregion);
    if(response) {
        const mappedData = appleMobilityMapper(response);
        res.status(200).send(mappedData);
    } else {
        res.status(500).status({error: `Issue getting mobility data for ${subregion}, ${country}`});
    }
}

const getAppleMobilitySupportedCountries = async (req, res) => {
    const response = await getAllCountries();
    if(response) {
        res.status(200).send(response);
    } else {
        res.status(500).send({error: 'Issue getting the supported countries.'});
    }
}

const getAppleMobilitySupportedSubregions = async (req, res) => {
    const qs = req.query;
    const { country } = qs;
    const response = await getAllCountrySubregion(country);
    const { subregions } = response;
    if(response) {
        res.status(200).send(subregions);
    } else {
        res.status(500).send({error: `Issue getting subregions for ${country}`})
    }
}


module.exports = { 
    getAppleMobilityData,
    getAppleMobilitySupportedCountries,
    getAppleMobilitySupportedSubregions
};