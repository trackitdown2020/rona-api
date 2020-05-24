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
const nameMap = {
    'retail-and-recreation': 'Retail and Recreation',
    'grocery-and-pharmacy': 'Grocery and Pharmacy',
    'parks' : 'Parks',
    'transit-stations': 'Transit Stations',
    'workplaces': 'Workplaces',
    'residential': 'Residential'
}


const queryMobility = async (country, state='', type) => {
    try { 
        if(state && country === 'US') {
            const response = await axios.get(`https://pastelsky.github.io/covid-19-mobility-tracker/output/US/${state}/mobility.json`);
            const { data } = response;
            const { state:responseData } = data;
            if(types.includes(type)) {
                const mappedType = typeMap[type];
                return { 
                    location : type,
                    ...responseData[mappedType] 
                };
            } else {
                return { error: 'Location type not included in dataset.' };
            }
        } else {
            const response = await axios.get(`https://pastelsky.github.io/covid-19-mobility-tracker/output/${country}/mobility.json`);
            const { data } = response;
            const { country:responseData } = data;
            if(types.includes(type)) {
                const mappedType = typeMap[type];
                return { 
                    location : type,
                    ...responseData[mappedType] 
                };
            } else {
                return { error: 'Location type not included in dataset.' };
            }
        }
    } catch(error) {
        throw new Error(error);
        return;
    }
}

module.exports = { 
    queryMobility,
    typeMap,
    nameMap,
    types
};

