const { queryMobility } = require('../../apis/covid19/mobilityAPI');

const processMobilityDataHelper = (data) => {
    console.log(data);
    const timeValueMap = {};
    data.forEach(({date, value}) => {
        if(timeValueMap.hasOwnProperty(date)) {
            timeValueMap.push(value);
        } else {
            timeValueMap[date] = [new Date(date), value];
        }
    });
    const timeValuePoints = Object.values(timeValueMap);
    const sortedTimeValuePoints = timeValuePoints.sort(([dateA], [dateB]) => (dateA - dateB));
    return sortedTimeValuePoints;
}

const getMobility = async (req, res) => {
    let qs = req.query;
    const { country, state, type } = qs;
    const response = await queryMobility(country, state, type);
    if(response && response.points) {
        const dataPoints = await processMobilityDataHelper(response.points);
        res.status(200).send(dataPoints);
    } else {
        res.status(500).send({error: 'Issue getting mobility data.'})
    }
}

module.exports = { getMobility };

