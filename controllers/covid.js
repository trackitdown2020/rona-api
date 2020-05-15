const {
  getEndpoints,
  queryTotalByCountryAndStatus,
} = require("../apis/covidApi");

const getEndpointsHelper = async (req, res) => {
  const response = await getEndpoints();
  console.log(response);
};

const getTotalByCountryAndStatus = async (req, res) => {
  const qs = req.query;
  const response = await getTotalByCountryAndStatus(qs);
  // const mappedResponse = await response.map(item => covidMapper(item));
  res.status(200).send(response);
  // res.status(200).send(mappedResponse);
};

module.exports = {
  // getEndpoint,
  getTotalByCountryAndStatus,
};
