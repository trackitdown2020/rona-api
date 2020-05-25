const express = require("express");
const router = express.Router();
const {
  getEndpoint,
  getTotalByCountryAndStatus,
} = require("../controllers/covid");
const { SEIRModel } = require('../data_models/modelHelper');

router.get("/totalByCountryStatus", getTotalByCountryAndStatus);
router.get("/dataModel/seir", SEIRModel);

module.exports = router;
