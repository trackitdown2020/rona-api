const {
  getEndpoints,
  queryTotalByCountryAndStatus,
} = require("../apis/covidApi");

const getEndpointsHelper = async (req, res) => {
  const response = await getEndpoints();
  console.log(response);
};

const getTotalByCountryAndStatus = async (req, res) => {
  const qs = await req.query;
  const response = await queryTotalByCountryAndStatus(qs);
  const { data } = response
  res.status(200).send(data);
};

module.exports = {
  // getEndpoint,
  getTotalByCountryAndStatus,
};
