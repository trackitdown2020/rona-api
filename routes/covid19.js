const express = require('express')
const router = express.Router()

const { getCountry, getCountries, getSummary } = require('../controllers/covid19/coronavirus');
const { getMobility } = require('../controllers/covid19/mobility')

router.get('/countries', getCountries);
router.get('/country/:country', getCountry);
router.get('/mobility', getMobility);
router.get('/summary', getSummary);

module.exports = router