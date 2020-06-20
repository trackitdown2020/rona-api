const { upperCaseFirstLetter } = require('./string');

const lineGraphFormatter = (data) => {
    console.log(data)
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
;
}

module.exports = {
    lineGraphFormatter
}