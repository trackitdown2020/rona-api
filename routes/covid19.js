const express = require('express')
const router = express.Router()
const {
    getMobility
} = require('../controllers/covid19/mobility');
const { 
    getCountry,
    getCountries,
    getSummary 
} = require('../controllers/covid19/coronavirus');
const {

} = require('../');

router.get('/mobility', getMobility);

router.get('/csse/countries');
router.get('/csse/countries/provinces');
router.get('/csse/report' );
router.get('/csse/total');


router.get('/countries', getCountries);
router.get('/country/:country', getCountry);
router.get('/summary', getSummary);

module.exports = router