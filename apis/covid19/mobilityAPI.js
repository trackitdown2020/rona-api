const axios = require('axios');


const types = ['parks', 'residential', 'retail-and-recreation', 'transit-stations', 'workplaces', 'grocery-and-pharmacy'];
const typeMap = {
    'retail-and-recreation': 'retailAndRecreation',
    'grocery-and-pharmacy': 'groceryAndPharmacy',
    'parks' : 'parks',
    'transit-stations': 'transitStations',
    'workplaces': 'workplaces',
    'residential': 'residential'
};


const queryMobility = async (country, state='', type='all') => {
    try { 
        console.log(state, country)
        if(state && country === 'US') {
            const response = await axios.get(`https://pastelsky.github.io/covid-19-mobility-tracker/output/US/${state}/mobility.json`);
            const { data } = response;
            const { state:responseData } = data;
            console.log(responseData);
            if(types.includes(type)) {
                const mappedType = typeMap[type];
                return responseData[mappedType];
            } else {
                return responseData;
            }
        } else {
            const response = await axios.get(`https://pastelsky.github.io/covid-19-mobility-tracker/output/${country}/mobility.json`);
            const { data } = response;
            const { country:responseData } = data;
            if(types.includes(type)) {
                const mappedType = typeMap[type];
                return responseData[mappedType];
            } else {
                return responseData;
            }
        }
    } catch(error) {
        throw new Error(error);
        return;
    }
}

module.exports = { queryMobility };

