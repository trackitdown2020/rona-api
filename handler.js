require('dotenv').config();
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const {
  healthCheck,
  google,
  twitter,
  reddit,
  covid19,
  dataModels,
  country,
  geoJSON,
  youtube
} = require('./routes');
const { morganMiddleware } = require("./middleware/logging");
const serverless = require('serverless-http');

if(process.env.DEBUG === 'axios') {
  console.log('you are in axios debugging mode')
}

const app = express();
app.use(cors());

app.use(morganMiddleware);
app.use(bodyParser.json());

app.use("/healthCheck", healthCheck);
app.use("/google", google);
app.use("/twitter", twitter);
app.use("/reddit", reddit);
app.use("/covid19", covid19);
app.use("/dataModels", dataModels);
app.use('/country', country);
app.use("/youtube", youtube);

app.use('/geojson', geoJSON);

module.exports = {
  app,
  api: serverless(app)
}