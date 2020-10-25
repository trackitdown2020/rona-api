const express = require('express');
const historical = express.Router();
const {
    getWorldHistorical,
    getCountryHistorical,
    getCountryProvinceHistorical,
    getUSHistorical,
    getUSStateHistorical
} = require('../controllers/covid19/historical');

historical.use((req, res, next) => {
    next();
})

/**
 * Gets a historical record of the entire world 
 */
historical.get('/all', getWorldHistorical)

/**
 * Gets a historical record of specific country's time series data
 */
historical.get('/country/:country', getCountryHistorical);

/**
 * Gets a historical record of country's specific province time series data.
 */
historical.get('/province/:country/:provinces', getCountryProvinceHistorical);

/**
 * Gets historical record of the US's data
 */
historical.get('/usa', getUSHistorical);

/**
 * Gets a historical record of the US's states data 
 */
historical.get('/usaState/:state', getUSStateHistorical);

module.exports = historical;