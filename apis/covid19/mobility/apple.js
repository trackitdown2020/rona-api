const axios = require('axios');

const queryAppleMobilityData = async (country, subregion) => {
    try {
        const response = await axios.get(`https://disease.sh/v3/covid-19/apple/countries/${country}/${subregion}`);
        const { data } = response;
        return data;
    } catch(error) {
        return { error };
    }
}

const getAllCountries = async () => {
    try {
        const response = await axios.get('https://disease.sh/v3/covid-19/apple/countries');
        const { data } = response;
        return data;
    } catch(error) {
        return { error }
    }
}

const getAllCountrySubregion = async (country) => {
    try {
        const response = await axios.get(`https://disease.sh/v3/covid-19/apple/countries/${country}`);
        const { data } = response;
        return data;
    } catch(error) {
        return { error }
    }
}

module.exports = {
    queryAppleMobilityData,
    getAllCountries,
    getAllCountrySubregion
}
