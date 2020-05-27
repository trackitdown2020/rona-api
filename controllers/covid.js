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

const seirModel = async (req, res) => {
  const { country } = await req.query;
  // Make API call (promise.all)

  let population_data = Country.findBy('code', country);
  let confirmed_data = queryTotalByCountryAndStatus(country, 'confirmed');

  console.log(susceptible, infected);
  // const [s, i, e, r] = await Promise.all([])
  const [s, e] = await Promise.all([population_data, confirmed_data]);
  susceptible = s.population;
  exposed = e[0].Cases;
  // Run SIR Model 
  const modelData = await SEIRModel(susceptible, exposed, 0, 0);

  res.status(200).send(modelData);
}

module.exports = {
  // getEndpoint,
  getTotalByCountryAndStatus,
};
