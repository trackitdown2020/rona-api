const {
    queryAppleMobilityData,
    getAllCountries,
    getAllCountrySubregion
} = require('../../apis/covid19/mobility/apple');
const {
    appleMobilityMapper
} = require('../../mappers/appleMobilityMapper');
const cache = require('../../utils/cache');

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
    const cachedValue = cache.get('apple.mobility.supported.countries');

    let response;
    if(cachedValue) {
        response = cachedValue;
    } else {
        response = await getAllCountries();
        cache.set('apple.mobility.supported.countries', response);
    }

    if(response) {
        res.status(200).send(response);
    } else {
        res.status(500).send({error: 'Issue getting the supported countries.'});
    }
}

const getAppleMobilitySupportedSubregions = async (req, res) => {
    const qs = req.query;
    const { country } = qs;

    const cachedValue = cache.get(`apple.mobility.supportedRegions.${country}`);

    let response;
    if(cachedValue) {
        response = cachedValue;
    } else {
        const queryResponse = await getAllCountrySubregion(country);
        const { subregions } = queryResponse;
        response = subregions;
        cache.set(`apple.mobility.supportedRegions.${country}`, response);
    }
    
    if(response) {
        res.status(200).send(response);
    } else {
        res.status(500).send({error: `Issue getting subregions for ${country}`})
    }
}


module.exports = { 
    getAppleMobilityData,
    getAppleMobilitySupportedCountries,
    getAppleMobilitySupportedSubregions
};