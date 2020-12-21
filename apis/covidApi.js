const axios = require("axios");

/**
 *
 * @param country, status
 * @returns all cases by type for a country
 */
const queryTotalByCountryAndStatus = async (country, status) => {
  if (!country) return;

  try {
    const response = await axios.get(`https://api.covid19api.com/total/country/${country}/status/${status}`);
    const { data } = response;
    let infected = data.length > 0 ? data[0].Cases : 0;
    return { infected };
  } catch (error) {
    throw new Error(error);
    return { error };
  }
};

module.exports = {
  queryTotalByCountryAndStatus,
};
