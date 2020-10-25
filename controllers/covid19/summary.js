const {
    queryWorldSummaryData,
    queryUSSummaryData,
    queryUSByStateSummaryData,
    queryCountriesSummaryData,
    queryCountriesByCountrySummaryData
} = require('../../apis/disease.sh/worldometer');

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



module.exports = {
    getWorldSummaryData,
    getUSSummaryData,
    getUSSummaryByStateData,
    getCountrySummaryData,
    getCountrySummaryByCountryData

}