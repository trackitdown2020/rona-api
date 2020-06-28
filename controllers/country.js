const { queryAllCountries } = require('../apis/country');
const { countryInfoMapper } = require('../mappers/countryInfoMapper');

const getAllCountries = async (req, res) => {
    const countries  = await queryAllCountries();
    if(countries) {
        const mappedCountries = countries.map(countryInfoMapper);
        res.status(200).send(mappedCountries);
    } else {
        res.status(500).send(`There was an issue retrieving all the countries.`);
    }
}

module.exports = {
    getAllCountries
}