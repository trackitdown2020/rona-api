const axios = require('axios');

const queryUSTestingData = async () => {
    try {
        const response = await axios.get('https://api.covidtracking.com/v1/states/info.json');
        const { data } = response;
        return data;
    } catch(error) {
        return { error };
    }
}

module.exports = {
    queryUSTestingData
}
