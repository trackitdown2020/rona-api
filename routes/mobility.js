const express = require('express');
const mobility = express.Router();
const { 
    getAppleMobilityData,
    getAppleMobilitySupportedCountries,
    getAppleMobilitySupportedSubregions
} = require('../controllers/mobility');
const {
    getMobility
} = require('../controllers/covid19/mobility')

mobility.get('/', (req, res, next) => {
    let source = req.source;
    if(source === 'apple') {
        getAppleMobilityData(req, res);
    } else if(source === 'google') {
        getMobility(req, res);
    } else {
        res.status(500).send({error: 'Could not identify mobility source'});
    }
});

mobility.get('/supportedCountries', getAppleMobilitySupportedCountries);
mobility.get('/supportedSubregions', getAppleMobilitySupportedSubregions);


module.exports = mobility;