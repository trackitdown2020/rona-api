const axios = require("axios");

/**
 *
 * @param country, status
 * @returns all cases by type for a country
 */
const queryTotalByCountryAndStatus = async (country, status) => {
  if (!country) return;

  try {
    const url = `https://api.covid19api.com/total/country/${country}/status/${status}`;
    const response = await axios.get(url);
    const { data } = response;

    let infected = 0;
    data.forEach((day) => {
      infected += day.Cases;
    });

    return { infected };
  } catch (error) {
    throw new Error(error);
    return;
  }
};

module.exports = {
  queryTotalByCountryAndStatus,
};
