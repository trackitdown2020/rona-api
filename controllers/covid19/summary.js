const {
    queryWorldSummaryData,
    queryUSSummaryData,
    queryUSByStateSummaryData,
    queryCountriesSummaryData,
    queryCountriesByCountrySummaryData
} = require('../../apis/disease.sh/worldometer');
const {
    queryCountryProvinceHistorical,
    queryCountryHistorical
} = require('../../apis/disease.sh/jhucsse');

const getWorldSummaryData = async (req, res) => {
    const response = await queryWorldSummaryData();
    if(response) {
        res.status(200).send(response);
    } else {
        res.status(500).send({
            error: 'Could not query world summary data'
        })
    }
}

const getUSSummaryData = async (req, res) => {
    const response = await queryUSSummaryData();
    if(response) {
        res.status(200).send(response);
    } else {
        res.status(500).send({
            error: 'Could not query US summary data'
        });
    }
}


const getUSSummaryByStateData = async (req, res) => {
    const { state } = req.params;
    const response = await queryUSByStateSummaryData(state);
    if(response) {
        res.status(200).send(response);
    } else {
        res.status(500).send({
            error: `Could not query ${data} data`
        })
    }
}

const getCountrySummaryData = async (req, res) => {
    const response = await queryCountriesSummaryData();
    if(response) {
        res.status(200).send(response);
    } else {
        res.status(500).send({
            error: `Could not query country data`
        })
    }
}
 
const getCountrySummaryByCountryData = async (req, res) => {
    const { country } = req.params;
    const response = await queryCountriesByCountrySummaryData(country);
    if(response) {
        res.status(200).send(response);
    } else {
        res.status(500).send({
            error: `Could not query ${country} data`
        })
    }
}

const getProvinceSummaryByProvinceData = async (req, res) => {
    const { country='', provinces='' } = req.params;
    
    if(!country) {
        res.status(500).send({
            error: `Could not query ${provinces} in unspecified country.`
        });
        return;
    }

    if(!provinces) {
        res.status(500).send({
            error: `Could not query unspecified provinces in ${country}.`
        });
        return;
    }

    const response = await queryCountryProvinceHistorical(country, provinces, 1);

    if(response) {
        const mappedProvinceData = response.map(provinceData => {
            const { province, timeline } = provinceData;
            const { cases, deaths, recovered } = timeline;
            return {
                province,
                cases: Object.values(cases)[0],
                deaths: Object.values(deaths)[0],
                recovered: Object.values(recovered)[0]
            }
        });
        res.status(200).send(mappedProvinceData);
    } else {
        res.status(500).send({
            error: 'Could not process the data'
        })
    }  
}

const getCountryProvinces = async (req, res) => {
    const { country } = req.params;

    if(!country) {
        res.status(500).send({
            error: 'Could not query an unspecified country'
        });
    }

    const response = await queryCountryHistorical(country, 1);

    if(response) {
        const { province } = response;
        res.status(200).send(province);
    } else {
        res.status(500).send({
            error: 'Could not process the data'
        });
    }
}

module.exports = {
    getWorldSummaryData,
    getUSSummaryData,
    getUSSummaryByStateData,
    getCountrySummaryData,
    getCountrySummaryByCountryData,
    getProvinceSummaryByProvinceData,
    getCountryProvinces
}