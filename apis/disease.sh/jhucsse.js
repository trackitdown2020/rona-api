const axios = require('axios');
require('axios-debug-log');
const BASE_URL = 'https://disease.sh';
const WORLD_ALL = '/v3/covid-19/historical/all';
const COUNTRY = `/v3/covid-19/historical/`;
const USA_COUNTY = `/v3/covid-19/historical/usacounties`;

const queryWorldHistorical = async (lastdays="all") => {
    console.log(lastdays)
    try {
        const response = await axios.get(`${BASE_URL}${WORLD_ALL}`, {
            params: {
                lastdays
            }
        });
        const { data } = response;
        return data;
    } catch(error) {
        return { error };
    } 
}

const queryCountryHistorical = async (country, lastdays="all") => {
    try {
        const response = await axios.get(`${BASE_URL}${COUNTRY}${country}`, {
            params: {
                lastdays
            }
        });
        const { data } = response;
        return data;
    } catch(error) {
        return { error };
    }
}

const queryCountryProvinceHistorical = async (country, provinces, lastdays="all") => {
    try {
        const response = await axios.get(`${BASE_URL}${COUNTRY}${country}/${provinces}`, {
            params: {
                lastdays
            }
        });
        const { data } = response;
        return data;
    } catch (error) {
        return { error}
    }
}

const queryUSHistorical = async (lastdays='all') => {
    try {
        const response = await axios.get(`${BASE_URL}${COUNTRY}USA`, {
            params: {
                lastdays
            }
        });
        const { data } = response;
        return data;
    } catch(error) {
        return { error };
    }
}

const queryUSStateHistorical = async (state, lastdays="all") => {
    try {
        const response = await axios.get(`${BASE_URL}${USA_COUNTY}/${state}`, {
            params: {
                lastdays
            }
        });
        const { data } = response;
        return data;
    } catch(error) {
        return { error };
    }
}



module.exports = {
    queryWorldHistorical,
    queryUSHistorical,
    queryUSStateHistorical,
    queryCountryHistorical,
    queryCountryProvinceHistorical
}