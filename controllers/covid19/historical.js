const {
    queryWorldHistorical,
    queryUSHistorical,
    queryUSStateHistorical,
    queryCountryHistorical,
    queryCountryProvinceHistorical
} = require('../../apis/disease.sh/jhucsse');

const getWorldHistorical = async (req, res) => {
    const { lastdays } = req.query;
    const response = await queryWorldHistorical(lastdays);
    if(response) {
        res.status(200).send(response);
    } else {
        res.status(500).send({
            error: 'Could not query world historical data'
        })
    }
}

const getCountryHistorical = async (req, res) => {
    const { country='' } = req.params;
    const { lastdays } = req.query;

    if(!country) {
        res.status(500).send({
            error: 'Could not query country historical data. Need to specify the country.'
        });
        return;
    }

    const response = await queryCountryHistorical(country, lastdays);
    if(response) {
        res.status(200).send(response);
    } else {
        res.status(500).send({
            error: 'Could not query country historical data'
        })
    }
}
 
const getCountryProvinceHistorical = async (req, res) => {
    const { country='', provinces='' } = req.params;
    console.log(country, provinces)
    const {  lastdays } = req.query;

    if(!country) {
        res.status(500).send({
            error: `Could not query ${provinces} in unspecific country.`
        });
        return;
    }

    if(!provinces) {
        res.status(500).send({
            error: `Could not query unspecified provinces in ${country}.`
        });
        return;
    }

    const response = await queryCountryProvinceHistorical(country, provinces, lastdays);

    if(response) {
        res.status(200).send(response);
    } else {
        res.status(500).send({
            error: 'Could not query any province specific data.'
        })
    }
}

const getUSHistorical = async (req, res) => {
    const { lastdays } = req.query;

    const response = await queryUSHistorical(lastdays);

    if(response) {
        res.status(200).send(response);
    } else {
        res.status(500).send({
            error: 'Could not query US specific data'
        })
    }

}

const getUSStateHistorical = async (req, res) => {
    const { state='' } = req.params;
    const { lastdays } = req.query;

    if(!state) {
        res.status(500).send({
            error: `Could not query unspecified state.`
        });
        return;
    }

    const response = await queryUSStateHistorical(state, lastdays);
    if(response) {
        res.status(200).send(response);
    } else {
        res.status(500).send({
            error: `Could not query ${state} data`
        })
    }
}

module.exports = {
    getWorldHistorical,
    getCountryHistorical,
    getCountryProvinceHistorical,
    getUSHistorical,
    getUSStateHistorical
}