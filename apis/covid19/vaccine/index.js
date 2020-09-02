const axios = require('axios');

const queryVaccineTrialData = async () => {
    try {
        const response = await axios.get('https://disease.sh/v3/covid-19/therapeutics');
        const { data } = response;
        return data;
    } catch(error) {
        return { error };
    }
}

module.exports = {
    queryVaccineTrialData
}