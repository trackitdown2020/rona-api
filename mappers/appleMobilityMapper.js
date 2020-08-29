

const appleMobilityMapper = (mobilityData) => {
    const { country, subregion, data } = mobilityData;

    const driving = [];
    const transit = [];
    const walking = [];
    let geoType = '';

    data.forEach((dataPoint) => {
        if(!geoType) {
            geoType = dataPoint['geo_type'];
        }
        
        const { date } = dataPoint;
        if(dataPoint['driving']) {
            driving.push({
                x: new Date(date).getTime(),
                y: dataPoint['driving']
            });
        }
        if(dataPoint['transit']) {
            transit.push({
                x: new Date(date).getTime(),
                y: dataPoint['transit']
            });
        }
        if(dataPoint['walking']) {
            walking.push({
                x: new Date(date).getTime(),
                y: dataPoint['walking']
            });
        }
    });

    return {
        country,
        subregion,
        geoType,
        driving,
        transit,
        walking
    }
}

module.exports = {
    appleMobilityMapper
}