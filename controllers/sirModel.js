const { PythonShell } = require('python-shell');
const {
    queryTotalByCountryAndStatus
} = require('../apis/covidApi');
const Country = require('db-country');
const { lineGraphFormatter } = require('../utils/formatters.js');

let shell = new PythonShell('./data_models/SIR.py');

const getSeirPredictions = (req, res) => {
    const {
        susceptible = 1000,
        exposed = 1,
        infected = 0,
        resistant = 0
    } = req.query;

    let data = {
        susceptible,
        exposed,
        infected,
        resistant
    };

    shell.send(JSON.stringify(data));

    shell.on('message', (message) => {
        format = lineGraphFormatter(message);
        console.log(format)
        res.status(200).send(format)
    });

    shell.on('error', () => {
        res.status(500).send({error});
    });

    shell.end(err => {
        if (err) {
            console.log({ err });
            res.status(500).send(err);
        }
    });
}

const getSeirPredictionsByCountry = async (req, res) => {
    let population_data;
    let confirmed_data;
    
    try {
        const {
            country,
        } = await req.query;
        population_data = await Country.get(country);
        confirmed_data = await queryTotalByCountryAndStatus(country, "confirmed");
    } catch(err) {
        res.status(500).send({error: 'Relevant country or covid data could not be found.'});
        return;
    }

    const { population } = population_data;
    const { infected } = confirmed_data;

    let data = {
        susceptible: parseInt(population),
        exposed: infected,
        infected: 0,
        resistant: 0
    };

    shell.send(JSON.stringify(data));

    shell.on('message', (message) => {
        const response = JSON.parse(message);
        const formattedData = lineGraphFormatter(response);
        res.status(200).send(formattedData);
    });

    shell.on('error', () => {
        console.log(error)
        res.status(500).send({error});
    });

    shell.end(err => {
        if (err) {
            console.log({ err });
            res.status(500).send(err);
        }
    });
}

module.exports = {
    getSeirPredictions,
    getSeirPredictionsByCountry
};