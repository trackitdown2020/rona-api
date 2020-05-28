const express = require("express");
const router = express.Router();
const { getSeirPredictions, getSeirPredictionsByCountry } = require('../controllers/sirModel');

router.get("/SEIR/", getSeirPredictions);
router.get("/CountrySEIR", getSeirPredictionsByCountry);

module.exports = router;