const { upperCaseFirstLetter } = require('./string');

const lineGraphFormatter = (data) => {
    const data = [];
    for (let [key, values] of Object.entries(data)) {
        labels.push(upperCaseFirstLetter(key));
        values.map((value, index) => { return ({value, index}) });
        
        data.push({
            id: key,
            data: values
        });
    }

    return data;
}

module.exports = {
    lineGraphFormatter
}