const express = require('express');
const router = express.Router();
const { 
    getAllCountries
} = require('../controllers/country');

router.get('/all', getAllCountries);

module.exports = router;