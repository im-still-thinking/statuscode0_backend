const app = require("express");
const path = require("path");

datasetData = app.Router();

const Dataset = require("../../model/Dataset");
const crud = require(path.relative(process.cwd(), "util/mongoCRUD"));

datasetData.get(
  "/remaining_data",
  async (req, res) => {
    try {
      const remaining_data = [];
      const dataset = await crud.find(Dataset, {})
      console.log(dataset)

    dataset.forEach((i) => {
        remaining_data.push([i.feature_vector, i.hash_code]);
    })

      res.status(200).send(remaining_data);
    } catch (error) {
      console.error(error);
      res.status(500).send({ response: error });
    }
  },
  (err) => {
    console.error(err);
    res.status(500).send({ response: err });
  }
);

datasetData.post("/uploadData", async(req, res) => {
    try{
        const createdDocs = await crud.create(Dataset, req?.body)
        
        res.status(200).send(createdDocs);
    }
    catch(error){
        console.error(error);
        res.status(500).send({ response: error });
    }
},
(err) => {
    console.error(err);
    res.status(500).send({ response: err });
  })

module.exports = datasetData;
