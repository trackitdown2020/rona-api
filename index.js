const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const {
    healthCheck
} = require('./routes');
const { morganMiddleware } = require("./middleware/logging");

const app = express();
app.use(cors());
const port = 8080;
let _client;

app.use(morganMiddleware);
app.use(bodyParser.json());

app.use("/healthCheck", healthCheck);

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});