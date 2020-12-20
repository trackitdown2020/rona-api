const express = require('express');
const therapeutics = express.Router();
const { getTherapeuticsTrialData } = require('../controllers/covid19/therapeutics');

therapeutics.use((req, res, next) => {
    next();
})

therapeutics.get('/trials', getTherapeuticsTrialData);

module.exports = therapeutics;