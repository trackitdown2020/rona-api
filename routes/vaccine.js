const express = require('express');
const vaccine = express.Router();
const { getVaccineTrialData } = require('../controllers/covid19/vaccine');

vaccine.use((req, res, next) => {
    next();
})

vaccine.get('/trials', getVaccineTrialData);

module.exports = vaccine;