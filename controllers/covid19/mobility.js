const { queryMobility, typeMap, nameMap, types } = require('../../apis/covid19/mobilityAPI');
const Moment = require('moment');

const processMobilityDataHelper = (locationData) => {
    const timeValueMap = {};
    locationData.forEach(({ points }) => {
        points.forEach(({date, value}) => {
            if(timeValueMap.hasOwnProperty(date)) {
                timeValueMap[date].push(value*0.01);
            } else {
                const formattedDate = Moment(new Date(date)).format('MMM D');
                timeValueMap[date] = [new Date(date), formattedDate, value*0.01];
            }
        });
    });
    const timeValuePoints = Object.values(timeValueMap);
    const sortedTimeValuePoints = timeValuePoints
        .sort(([dateA], [dateB]) => (dateA - dateB))
        .map((value) => {
            const [date, ...rest] = value;
            return rest;
        });
    return sortedTimeValuePoints;
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
    const graphLabels = ['Date'];
    for(let locationData of response) {
        const { location } = locationData;
        graphLabels.push(nameMap[location]);
    }
    if(response) {
        const dataPoints = await processMobilityDataHelper(response);
        res.status(200).send([graphLabels, ...dataPoints]);
    } else {
        res.status(500).send({error: 'Issue getting mobility data.'})
    }
}

module.exports = { getMobility };

