const { queryMobility } = require('../../apis/covid19/mobilityAPI');

const getMobility = async (req, res) => {
    let qs = req.query;
    const { country, state, type } = qs;
    const response = await queryMobility(country, state, type);
    res.status(200).send(response);
}

module.exports = { getMobility };