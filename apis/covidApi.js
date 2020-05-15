const axios = require("axios");

const getEndpoints = async () => {
  try {
    const response = await axios.get("https://api.covid19api.com/");
    console.log(response);
    return response;
  } catch (error) {
    throw new Error(error);
    return;
  }
};

/**
 *
 * @param country, status
 * @returns all cases by type for a country
 */
const queryTotalByCountryAndStatus = async (qs) => {
  const { country, status } = qs;
  if (!country || !status) return;

  try {
    const url = `https://api.covid19api.com/total/country/${country}/status/${status}`;
    console.log(url);
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw new Error(error);
    return;
  }
};

module.exports = {
  getEndpoints,
  queryTotalByCountryAndStatus,
};
