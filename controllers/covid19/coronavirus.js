const { queryByCountry, queryCountries } = require("../../apis/covid19/coronavirusAPI");

const getCountries = async (req, res) => {
    let qs = req.query;
    const response = await queryCountries();
    res.status(200).send(response);
}

const getCountry= async (req, res) => {
    const response = await queryByCountry(req.params.country, req.query.from, req.query.to);
    res.status(200).send(response);
}

module.exports = {
    getCountries,
    getCountry
}