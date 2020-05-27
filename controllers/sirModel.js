const { PythonShell } = require('python-shell');

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

module.exports = { getSeirPredictions };