const express = require('express')
const router = express.Router()
const {
    getMobility
} = require('../controllers/covid19/mobility');
const {

} = require('../');

router.get('/mobility', getMobility);

router.get('/csse/countries');
router.get('/csse/countries/provinces');
router.get('/csse/report' );
router.get('/csse/total');

module.exports = router