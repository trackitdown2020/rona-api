const therapeuticsTrialMapper = (therapeuticsData) => {
    const { data } = therapeuticsData;
    const phases = {
        '1': [],
        '2': [],
        '3': [],
        '4': []
    };

    data.forEach((therapeutics) => {
        const { trialPhase } = therapeutics;
        if(trialPhase.contains('1')) {
            phases['1'].push(therapeutics)
        }
        if(trialPhase.contains('2')) {
            phases['2'].push(therapeutics)
        }
        if(trialPhase.contains('3')) {
            phases['3'].push(therapeutics)
        }
        if(trialPhase.contains('4')) {
            phases['4'].push(therapeutics)
        }
    });

    return phases;
}

module.exports = {
    therapeuticsTrialMapper
}