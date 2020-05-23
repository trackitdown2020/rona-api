const { queryMobility, typeMap } = require('../../apis/covid19/mobilityAPI');

const processMobilityDataHelper = (locationData) => {
    const timeValueMap = {};
    locationData.forEach(({ points }) => {
        points.forEach(({date, value}) => {
            if(timeValueMap.hasOwnProperty(date)) {
                timeValueMap[date].push(value);
            } else {
                timeValueMap[date] = [new Date(date), value];
            }
        });
    });
    const timeValuePoints = Object.values(timeValueMap);
    const sortedTimeValuePoints = timeValuePoints.sort(([dateA], [dateB]) => (dateA - dateB));
    return sortedTimeValuePoints;
}

const getMobility = async (req, res) => {
    let qs = req.query;
    const { country, state, type } = qs;
    const locationTypes = type.split(",");
    const response = await Promise.all(locationTypes.map(location => queryMobility(country, state, location)));
    const graphLabels = ['Date'];
    for(let locationData of response) {
        const { location } = locationData;
        graphLabels.push(location);
    }
    if(response) {
        const dataPoints = await processMobilityDataHelper(response);
        res.status(200).send([graphLabels, ...dataPoints]);
    } else {
        res.status(500).send({error: 'Issue getting mobility data.'})
    }
}

module.exports = { getMobility };

