const axios = require('axios');

const queryAllCountries = async () => {
    try {
        const { data }  = await axios.get('https://restcountries.eu/rest/v2/all');
        return data;
    } catch(error) {
        throw new Error(error);
        return;
    }
}

module.exports = {
    queryAllCountries
}