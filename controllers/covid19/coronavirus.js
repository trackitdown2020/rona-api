const { 
    queryByCountry,
    queryCountries,
    querySummary,
    querySummaryAndCountryInfo
} = require("../../apis/covid19/coronavirusAPI");

const getCountries = async (req, res) => {
    const response = await queryCountries();
    res.status(200).send(response);
}

const getCountry = async (req, res) => {
    const { country } = req.params;
    const { from, to } = req.query;
    const response = await queryByCountry(country, from, to);
    res.status(200).send(response);
}

const getSummary = async (req, res) => {
    const response = await querySummary();
    res.status(200).send(response);
}

module.exports = {
    getCountries,
    getCountry,
    getSummary
}