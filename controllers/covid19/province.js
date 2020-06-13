const {
    queryCountryProvinceData,
    querySummaryByCountry
} = require('../../apis/covid19/provinceAPI');

const getCountryProvinceData = async (req, res) => {
    let qs = await req.query;
    const data = await queryCountryProvinceData(qs);
    res.status(200).send(data);
}

const getCountrySummary = async (req, res) => {
    let qs = await req.query;
    let { iso } = qs;
    const data = await querySummaryByCountry(iso);
    const {
        confirmed: {
            value: confirmedValue
        },
        recovered: {
            value: recoveredValue
        },
        deaths: {
            value: deathsValue
        }
    } = data;
    const response = {
        confirmed: confirmedValue,
        recovered: recoveredValue,
        deaths: deathsValue
    };
    res.status(200).send(response);
}

module.exports = {
    getCountryProvinceData,
    getCountrySummary
}