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

mobility.use((req, res, next) => {
    next();
})

mobility.get('/:source', (req, res, next) => {
    const source = req.params.source;
    if(source === 'apple') {
        getAppleMobilityData(req, res);
    } else if(source === 'google') {
        getMobility(req, res);
    } else {
        res.status(500).send({error: 'Could not identify mobility source'});
    }
});

mobility.get('/:source/supportedCountries', (req, res, next) => {
    const source = req.params.source;
    if(source === 'apple') {
        getAppleMobilitySupportedCountries(req, res);
    } else {
        res.status(500).send({error: `${source} is not supported`});
    }
});

mobility.get('/:source/supportedSubregions', (req, res, next) => {
    const source = req.params.source;
    if(source === 'apple') {
        getAppleMobilitySupportedSubregions(req, res);
    } else {
        res.status(500).send({error: `${source} is not supported`});
    }
});

module.exports = mobility;