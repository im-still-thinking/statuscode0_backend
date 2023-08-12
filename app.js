require("dotenv").config();
require("./config/database").connect();

const uploadData = require("./api/DataUpload/routes");

const express = require("express");

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(cors());

app.get("/", (req, res) => {
    res.send({ response: "OK", message: "Backend Is Up" });
});

app.use("/api", uploadData);