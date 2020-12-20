const express = require('express');
const summary = express.Router();
const { 
    getWorldSummaryData,
    getUSSummaryData,
    getUSSummaryByStateData,
    getCountrySummaryData,
    getCountrySummaryByCountryData,
    getProvinceSummaryByProvinceData,
    getCountryProvinces
} = require('../controllers/covid19/summary');

summary.use((req, res, next) => {
    next();
});

/**
 * Gets a summary of all the world's stats as of the current time give or take 10 minutes.
 */
summary.get('/world', getWorldSummaryData);

/**
 * Gets a summary of the US' stats as of the current time give or take 10 minutes. 
 */
summary.get('/us', getUSSummaryData);

/**
 * Gets a summary by a state in the US as of the current time give or take 10 minutes.
 */
summary.get('/us/:state', getUSSummaryByStateData);

/**
 * Gets a summary for all countries in the world as of the current time give or take 10 minutes.
 */
summary.get('/country', getCountrySummaryData);

/**
 * Country is represented by iso2, iso3, or country name
 * Gets a summary for the particular country as of the current time give or take 10 minutes.
 */
summary.get('/country/:country', getCountrySummaryByCountryData);

/**
 * Country is represented by iso2, iso3, or country name
 * Gets a list of query provinces
 */
summary.get('/provinces/:country', getCountryProvinces);

/**
 * Country is represented by iso2, iso3, or country name
 * Province can either by a single or multiple
 * Gets a summary of total number of cases, deaths, and recovered for the entire province
 */
summary.get('/country/:country/:provinces', getProvinceSummaryByProvinceData);

module.exports = summary;