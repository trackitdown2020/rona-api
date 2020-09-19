const { queryMobility, typeMap, nameMap, types } = require('../../apis/covid19/mobility/google');

const processMobilityDataHelper = (locationData) => {
    return locationData.map(({ points, id }) => {
        const data = points.map(({date, value}) => {
            return {
                x: date,
                y: value
            }
        })
        return {
            id: nameMap[id],
            data
        }
    });
}

const getMobility = async (req, res) => {
    let qs = req.query;
    const { country, state, type } = qs;

    let locationTypes;
    if(type === 'all') {
        locationTypes = types;
    } else {
        locationTypes = type.split(",");
    }
    
    const response = await Promise.all(locationTypes.map(location => queryMobility(country, state, location)));

    if(response) {
        const dataPoints = await processMobilityDataHelper(response);
        res.status(200).send(dataPoints);
    } else {
        res.status(500).send({error: 'Issue getting mobility data.'})
    }
}

module.exports = { getMobility };

