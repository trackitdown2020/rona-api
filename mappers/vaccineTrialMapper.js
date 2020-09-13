const vaccineTrialMapper = (vaccineData) => {
    const { data } = vaccineData;
    const phases = {
        '1': [],
        '2': [],
        '3': [],
        '4': []
    };

    data.forEach((vaccine) => {
        const { trialPhase } = vaccine;
        if(trialPhase.contains('1')) {
            phases['1'].push(vaccine)
        }
        if(trialPhase.contains('2')) {
            phases['2'].push(vaccine)
        }
        if(trialPhase.contains('3')) {
            phases['3'].push(vaccine)
        }
        if(trialPhase.contains('4')) {
            phases['4'].push(vaccine)
        }
    });

    return phases;
}

module.exports = {
    vaccineTrialMapper
}