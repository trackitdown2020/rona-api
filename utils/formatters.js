const { upperCaseFirstLetter } = require('./string');

const lineGraphFormatter = (data) => {
    const indexMap = {};
    const labels = ['Time'];
    for(let [key, values] of Object.entries(data)) {
        labels.push(upperCaseFirstLetter(key));
        values.map((value, index) => {
            if(indexMap.hasOwnProperty(index)) {
                indexMap[index].push(value);
            } else {
                indexMap[index] = [index, value];
            }
        })

    }

    return [labels, ...Object.values(indexMap)]
}

module.exports = {
    lineGraphFormatter
}