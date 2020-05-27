const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const { healthCheck, google, covid19, dataModels } = require("./routes");
const { morganMiddleware } = require("./middleware/logging");

const app = express();
app.use(cors());
const port = 8080;

app.use(morganMiddleware);
app.use(bodyParser.json());

app.use("/healthCheck", healthCheck);
app.use("/google", google);
app.use("/covid19", covid19);
app.use("/dataModels", dataModels);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
