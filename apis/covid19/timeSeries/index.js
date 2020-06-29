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
        const url = `https://disease.sh/v2/historical/${country}?lastdays=${lastDays}`;
        console.log(url)
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        throw new Error(error);
        return;
    }
}

module.exports = {
    queryTimeSeriesCountry
}




