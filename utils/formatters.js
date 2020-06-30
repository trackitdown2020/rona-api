const { upperCaseFirstLetter } = require('./string');
const Moment = require('moment');

const lineGraphFormatter = (data) => {
    let formattedData = [];
    for (let [key, values] of Object.entries(data)) {
        const formattedValues = values.map((value, index) => {
            return {
                x: index,
                y: parseFloat(value.toFixed(2))
            }
        });

        formattedData.push({
            id: upperCaseFirstLetter(key),
            data: formattedValues
        });
    }

    return formattedData;
}

const timeSeriesFormatter = (data) => {
    const formattedData = [];
    for(let [date, value] of Object.entries(data)) {
        const dateDisplay = Moment(date, "MM-DD-YYYY").format('YYYY-MM-DD');
        formattedData.push({
            x: dateDisplay,
            y: value
        });
    }
    return formattedData;
}

module.exports = {
    lineGraphFormatter,
    timeSeriesFormatter
}