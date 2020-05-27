const fetch = require('node-fetch');

const queryByCountry = async (country, from, to) => {
    try {
        const response = await fetch('https://api.covid19api.com/country/' + country + `?from=${from}&to=${to}`);
        const json = await response.json();
        if(json && json.error) {
            throw Error(json.error);
        } else {
            return json;
        }
    } catch (error) {
        throw new Error(error);
    }
}

const queryCountries = async () => {
    try {
        const response = await fetch("https://api.covid19api.com/countries");
        const json = await response.json();
        if(json && json.error) {
            throw Error(response.error);
        } else {
            return json;
        }
    } catch(error) {
        throw new Error(error);
    }
}

const querySummary = async () => {
    try {
        const response = await fetch("https://api.covid19api.com/summary");
        const json = await response.json();
        if(json && json.error) {
            throw Error(response.error);
        } else {
            return json;
        }
    } catch(error) {
        throw new Error(error);
    }
}

module.exports = {
    queryByCountry,
    queryCountries,
    querySummary
}
