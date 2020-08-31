

const appleMobilityMapper = (mobilityData) => {
    const { country, subregion, data } = mobilityData;
    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE;

    const updatedData = data.map((dataPoint) => {
        const { date, driving, transit, walking } = dataPoint;

        if(driving) {
            max = Math.max(max, driving);
            min = Math.min(min, driving);
        }

        if(transit) {
            max = Math.max(max, transit);
            min = Math.min(min, transit);
        }

        if(walking) {
            max = Math.max(max, walking);
            min = Math.min(min, walking);
        }

        return {
            date: new Date(date).getTime(),
            driving: driving && parseFloat(driving.toFixed(2)),
            transit: transit && parseFloat(transit.toFixed(2)),
            walking: walking && parseFloat(walking.toFixed(2))
        }
    });

    return {
        country,
        subregion,
        max: Math.floor(Math.ceil((max + 20)/10) * 10),
        min: Math.floor(Math.ceil((min + 20)/10) * 10),
        data: updatedData
    }
}

module.exports = {
    appleMobilityMapper
}