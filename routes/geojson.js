const express = require('express');
const geojson = express.Router();
const {
    getCountryGeoJSON
} = require('../controllers/geojson');

geojson.get('/:country', getCountryGeoJSON);

module.exports = geojson;