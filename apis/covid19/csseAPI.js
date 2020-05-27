const axios = require('axios');

/**
 * This entire data set is sourced via CSSE at John's Hopkins. It is intended to act as a supplement for provincial specific data. 
 * Source: https://www.programmableweb.com/api/axisbits-covid-19-statistics-rest-api-v10
 */

const queryRegions = async () => {
    try {
        const response = await axios.get('https://covid-api.com/api/regions');
        return response;
    } catch (error) {
        throw new Error(error);
        return;
    }
}

const queryProvinces = (isoCode) => {
    try {
        const response = await axios.get(`https://covid-api.com/api//provinces/${isoCode}`);
        return response;
    } catch (error) {
        throw new Error(error);
        return;
    }
}

const queryReports = (date, q, query, region_province, city_name) => {
    try {
        const url = new URL('https://covid-api.com/api/reports');
        if(date) {
            url.searchParams.append('date', date);
        }

        const response = await axios.get(`?date=2020-04-16&q=US%20Alabama&iso=USA&region_name=US&region_province=Alabama&city_name=Autauga`);
        return response;
    } catch(error) {
        throw new Error(error);
        return;
    }
}

const queryTotalReports = (date) => {
    try {
        const response = await axios.get(`https://covid-api.com/api/reports/total?date=${date}`);
        return response;
    } catch(error) {
        throw new Error(error);
        return;
    }
}

module.exports = {
    queryProvinces,
    queryRegions,
    queryReports,
    queryTotalReports
}