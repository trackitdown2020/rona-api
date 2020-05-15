const express = require("express");
const router = express.Router();
const {
  getEndpoint,
  getTotalByCountryAndStatus,
} = require("../controllers/covid");

router.get("/totalByCountryStatus", getTotalByCountryAndStatus);

module.exports = router;
