const axios = require("axios");

const getCountryPopulation = async (country, year) => {
    if (!country) return;

    try {
        const url = `https://api.census.gov/data/${year}/pep/population?get=${country}`
    }
}