const {
  getEndpoints,
  queryTotalByCountryAndStatus,
} = require("../apis/covidApi");
const Country = require('db-country');

const getEndpointsHelper = async (req, res) => {
  const response = await getEndpoints();
  console.log(response);
};

//rename
const getTotalByCountryAndStatus = async (req, res) => {
  const { country, status = "confirmed" } = await req.query;
  const response = await queryTotalByCountryAndStatus(country, status);
  res.status(200).send(response);
};

module.exports = {
  // getEndpoint,
  getTotalByCountryAndStatus,
};
