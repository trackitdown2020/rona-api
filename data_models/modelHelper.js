const { PythonShell } = require('python-shell');
const express = require('express');


const app = express();

let shell = new PythonShell('./SIR.py');

const foo = (req, res) => {
    let data = {
        'susceptible': 1000000,
        'exposed': 1,
        'infected': 0,
        'resistant': 0
    }

    shell.send(JSON.stringify(data), { mode: 'json' });

    shell.on('message', (message) => {
        console.log({ message });
    });

    shell.end(err => {
        if (err) console.log({ err })
    })
}

app.get('/SIR', foo);

app.listen(8081, () => {
    console.log(`Listening on port 8081`);
});


const SEIRModel = (susceptible, exposed, infected, resistant) => {
    data = {
        'susceptible': susceptible,
        'exposed': exposed,
        'infected': infected,
        'resistant': resistant
    }

    let shell = new PythonShell('./SIR.py', { mode: 'json' });
    shell.send(data);
    shell.on('message', (message) => {
        console.log(message);
        return message;
    })

    pyshell.end(function (err, code, signal) {
        if (err) throw err;
        console.log('The exit code was: ' + code);
        console.log('The exit signal was: ' + signal);
        console.log('finished');
    });

    return data
    // const options = {
    //     args: [
    //         susceptible,
    //         exposed,
    //         infected,
    //         resistant
    //     ]
    // }
    // PythonShell.run('./SIR.py', options, (err, data) => {
    //     if (err) throw new Error(err);
    //     console.log(data)
    //     return data; //JSON
    // })


}