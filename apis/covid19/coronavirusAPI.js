// const fetch = require('node-fetch');
const axios = require('axios');

const queryByCountry = async (country, from, to) => {
    try {
        const response = await axios.get('https://api.covid19api.com/country/' + country + `?from=${from}&to=${to}`);
        const { data } = response;
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

const queryCountries = async () => {
    try {
        const response = await axios.get("https://api.covid19api.com/countries");
        const { data } = response;
        return data;
    } catch(error) {
        throw new Error(error);
    }
}

const querySummary = async () => {
    try {
        const response = await axios.get("https://api.covid19api.com/summary");
        const { data } = response;
        return data;
    } catch(error) {
        throw new Error(error);
    }
}

const querySummaryAndCountryInfo = async () => {
    try {
        const response = await axios.get("https://corona-api.com/countries");
        const { data } = response;
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    queryByCountry,
    queryCountries,
    querySummary,
    querySummaryAndCountryInfo
}
