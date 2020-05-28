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

    if(data.length > 0) {
      let infected = data[0].Cases;
      return { infected };
    } else {
      throw new Error({ error: 'Country could not be queried.'});
      return;
    }
  } catch (error) {
    throw new Error(error);
    return;
  }
};

module.exports = {
  queryTotalByCountryAndStatus,
};
