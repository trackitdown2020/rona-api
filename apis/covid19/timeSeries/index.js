/**
 * This entire module is focused on retrieving the time series of a country or province. 
 */

const axios = require('axios');

/**
 * Time series for each country 
 * @param {*} country 
 * @param {*} lastDays 
 */
const queryTimeSeriesCountry = async (country, lastDays='all') => {
    try {
        const response = await axios.get(`https://disease.sh/v2/historical/${country}?lastdays=${lastDays}`);
        const { data } = response;
        return data;
    } catch (error) {
        throw new Error(error);
        return;
    }
}

module.exports = {
    queryTimeSeriesCountry
}




