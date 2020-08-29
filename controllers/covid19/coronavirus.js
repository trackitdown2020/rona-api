const { 
    queryByCountry,
    queryCountries,
    querySummary,
    querySummaryAndCountryInfo
} = require("../../apis/covid19/coronavirusAPI");
const {
    countryInfoMapper
} = require("../../mappers/covid19Mapper");

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

const getSummaryGlobal = async (req, res) => {
    const response = await querySummary();
    const { Global: globalSummary } = response;
    res.status(200).send(globalSummary);
}

const getSummaryCountries = async (req, res) => {
    const response = await querySummary();
    const { Countries: countriesSummary } = response;
    res.status(200).send(countriesSummary);
}

const getSummaryOfAllCountries = async (req, res) => {
    const { data } = await querySummaryAndCountryInfo();
    const mappedData = data.map(countryInfoMapper);
    res.status(200).send(mappedData);
}

module.exports = {
    getCountries,
    getCountry,
    getSummary,
    getSummaryGlobal,
    getSummaryCountries,
    getSummaryOfAllCountries
}