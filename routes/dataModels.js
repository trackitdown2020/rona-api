const express = require("express");
const router = express.Router();
const { getSeirPredictions } = require('../controllers/sirModel');

router.get("/SEIR", getSeirPredictions);

module.exports = router;