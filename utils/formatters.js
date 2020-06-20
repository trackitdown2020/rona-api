const { upperCaseFirstLetter } = require('./string');

const lineGraphFormatter = (data) => {
    let formattedData = [];
    for (let [key, values] of Object.entries(data)) {
        labels.push(upperCaseFirstLetter(key));
        values.map((value, index) => { return ({value, index}) });
        
        formattedData.push({
            id: key,
            data: values
        });
    }

    return formattedData;
;
}

module.exports = {
    lineGraphFormatter
}