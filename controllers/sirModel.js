const { PythonShell } = require('python-shell');
const {
    queryTotalByCountryAndStatus
} = require('../apis/covidApi');
const Country = require('db-country');

let shell = new PythonShell('./data_models/SIR.py');

const getSeirPredictions = (req, res) => {
    const { 
        susceptible=1000,
        exposed=1,
        infected=0,
        resistant=0
    } = req.query;
    
    let data = {
        susceptible,
        exposed,
        infected,
        resistant
    };

    shell.send(JSON.stringify(data));

    shell.on('message', (message) => {
        console.log(message)
        res.status(200).send(message)
    });

    shell.end(err => {
        if (err) console.log({ err })
    })
}

const getSeirPredictionsByCountry = async (req, res) => {
    const {
        country,
    } = await req.query;
    let population_data = await Country.get(country);
    let confirmed_data = await queryTotalByCountryAndStatus(country, "confirmed");

    console.log({population_data, confirmed_data})
    const { population } = population_data;
    const { infected } = confirmed_data;

    console.log({population, infected})

    let data = {
        susceptible: parseInt(population),
        exposed: infected,
        infected: 0,
        resistant: 0
    };

    shell.send(JSON.stringify(data));

    shell.on('message', (message) => {
        console.log(message)
        res.status(200).send(message)
    });

    shell.end(err => {
        if (err) console.log({ err })
    })
}

module.exports = { 
    getSeirPredictions,
    getSeirPredictionsByCountry
};