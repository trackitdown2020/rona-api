const express = require('express');
const testing = express.Router();
const { getUSTestingInfoDData } = require('../controllers/covid19/testing');

testing.use((req, res, next) => {
    next();
})

testing.get('/us', getUSTestingInfoDData);

module.exports = testing;