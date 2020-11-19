
const mobility = require('./mobility');
const summary = require('./covid19Summary');
const historical = require('./covid19Historical');
const therapeutics = require('./therapeutics');
const vaccine = require('./vaccine');
const express = require('express');
const router = express.Router();

// Summary
router.use('/summary', summary);

//Mobility
router.use('/mobility', mobility);

//Historical
router.use('/historical', historical);

// Therapeutics
router.use('/therapeutics', therapeutics);

// Vaccine 
router.use('/vaccine', vaccine);

// Time Series 
// router.use('/timeSeries')
// router.get('/timeSeries/country', getTimeSeriesCountry);

module.exports = router