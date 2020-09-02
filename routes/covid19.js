const express = require('express')
const router = express.Router()
const { 
  getCountry,
  getCountries,
  getSummary,
  getSummaryOfAllCountries,
  getSummaryGlobal,
  getSummaryCountries,
} = require('../controllers/covid19/coronavirus');
const {
  getMobility
} = require('../controllers/covid19/mobility')
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
const vaccine = require('./vaccine');

router.get("/totalByCountryStatus", getTotalByCountryAndStatus);
router.get('/countries', getCountries);
router.get('/country/:country', getCountry);

router.get('/summary', getSummary);
router.get('/globalSummary', getSummaryGlobal);
router.get('/countriesSummary', getSummaryCountries);
router.get('/summaryOfAllCountries', getSummaryOfAllCountries);
router.get('/countryProvinceReport', getCountryProvinceData);
router.get('/countryReport', getCountrySummary);

//Mobility
router.get('/mobility', getMobility);

// Vaccine
router.use('/vaccine', vaccine);

// Time Series 
router.get('/timeSeries/country', getTimeSeriesCountry);

module.exports = router
