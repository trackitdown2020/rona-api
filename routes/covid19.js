const express = require('express');
const router = express.Router();

const mobility = require('./mobility');
const summary = require('./covid19Summary');
const historical = require('./covid19Historical');

// Summary
router.use('/summary', summary);

//Mobility
router.use('/mobility', mobility);

//Historical
router.use('/historical', historical);

// Time Series 
// router.use('/timeSeries')
// router.get('/timeSeries/country', getTimeSeriesCountry);

module.exports = router