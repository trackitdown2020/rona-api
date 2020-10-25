const axios = require('axios');
require('axios-debug-log');
const BASE_URL = 'https://disease.sh';
const WORLD_ALL = '/v3/covid-19/all';
const US_ALL = '/v3/covid-19/states';
const COUNTRIES = '/v3/covid-19/countries';

const queryWorldSummaryData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}${WORLD_ALL}`);
        const { data } = response;
        return data;
    } catch(error) {
        return { error };
    }
}

const queryUSSummaryData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}${US_ALL}`);
        const { data } = response;
        return data;
    } catch(error) {
        return { error };
    }
}

const queryUSByStateSummaryData = async (state) => {
    try {
        const response = await axios.get(`${BASE_URL}${US_ALL}/${state}`);
        const { data } = response;
        return data;
    } catch(error) {
        return { error };
    }
}

const queryCountriesSummaryData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}${COUNTRIES}`);
        const { data } = response;
        return data;
    } catch(error) {
        return { error };
    }
}

const queryCountriesByCountrySummaryData = async (country) => {
    try {
        const response = await axios.get(`${BASE_URL}${COUNTRIES}/${country}`);
        const { data } = response;
        return data;
    } catch(error) {
        return { error };
    }
}

module.exports = {
    queryWorldSummaryData,
    queryUSSummaryData,
    queryUSByStateSummaryData,
    queryCountriesSummaryData,
    queryCountriesByCountrySummaryData
}