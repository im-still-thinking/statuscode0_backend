require("dotenv").config();
require("./config/database").connect();

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

const cors = require("cors")

const uploadData = require("./api/DataUpload/routes");
const DatasetData = require("./api/DatasetData/routes");

const express = require("express");

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(cors());

app.use("/api/dataUpload", uploadData);
app.use("/api/datasetData", DatasetData);

app.get("/", (req, res) => {
    res.send({ response: "OK", message: "Backend Is Up" });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

  module.exports = app
