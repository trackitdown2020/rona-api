const {
  queryTotalByCountryAndStatus,
} = require("../apis/covidApi");
const Country = require('db-country');

const getTotalByCountryAndStatus = async (req, res) => {
  const { country, status = "confirmed" } = await req.query;
  const response = await queryTotalByCountryAndStatus(country, status);
  res.status(200).send(response);
};

module.exports = {
  getTotalByCountryAndStatus,
};
