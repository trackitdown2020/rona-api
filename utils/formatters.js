const { upperCaseFirstLetter } = require('./string');
const Moment = require('moment');

const lineGraphFormatter = (data) => {
    return Object.entries(data).map(([key, value]) => {
        const mappedValues = value.map((dataPoint, index) => {
            return {
                x: index,
                y: Math.floor(dataPoint)
            }
        })
        return {
            id: key,
            data: mappedValues
        }
    })

}

module.exports = {
    lineGraphFormatter
}