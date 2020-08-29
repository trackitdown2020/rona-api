const axios = require('axios');
const URL = require('url');
const moment = require('moment');

const queryCountryProvinceData = async (qs) => {
    const { iso, date } = qs;

    let newDate;
    if(!date) {
        let date = new Date();
        newDate = new Date(date.getTime());
        newDate.setDate(date.getDate() - 1);
    } else {
        newDate = new Date(date);
    }

    let dateString  = moment(newDate).format('YYYY-MM-DD');
    const params = {
        iso,
        date: dateString
    };

    try {
        const response = await axios.get(`https://covid-api.com/api/reports`, {
            params
        });
        const { data } = response;
        return data;
    } catch (error) {
        throw new Error(error);
        return;
    }
}

const querySummaryByCountry = async (iso) => {
    try {
        const response = await axios.get(`https://covid19.mathdro.id/api/countries/${iso}`);
        const { data } = response;
        return data;
    } catch(error) {
        throw new Error(error);
    }
}

module.exports = {
    querySummaryByCountry,
    queryCountryProvinceData
}