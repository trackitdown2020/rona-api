const express = require('express')
const router = express.Router()
// const { 
//   getCountry,
//   getCountries,
//   getSummary,
//   getSummaryOfAllCountries,
//   getSummaryGlobal,
//   getSummaryCountries,
// } = require('../controllers/covid19/coronavirus');
const {
  getTotalByCountryAndStatus,
} = require("../controllers/covid");
const {
  getCountryProvinceData,
  getCountrySummary
} = require('../controllers/covid19/province');
const { 
  getTimeSeriesCountry
} = require('../controllers/covid19/timeSeries');
const mobility = require('./mobility');

// router.get('/summary', getSummary);
// router.get('/globalSummary', getSummaryGlobal);
// router.get('/countriesSummary', getSummaryCountries);
// router.get('/summaryOfAllCountries', getSummaryOfAllCountries);
// router.get('/countryProvinceReport', getCountryProvinceData);
// router.get('/countryReport', getCountrySummary);

router.use('/summary')

//Mobility
router.use('/mobility', mobility);

// Time Series 
router.use('/timeSeries')
// router.get('/timeSeries/country', getTimeSeriesCountry);

module.exports = router
