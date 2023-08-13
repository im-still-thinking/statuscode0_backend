const mongoose = require("mongoose");

const datasetSchema = new mongoose.Schema({
  img: { type: String, required: true},
  name: { type: String, required: true},
  description: { type: String, required: true},
  tags: { type: [String], required: true },
  feature_vector: { type: Buffer, required: true},
  hash_code: { type: String, required: true},
  minted_by: { type: String, required: true},
}, {collection: "Dataset"});

module.exports = mongoose.model("Dataset", datasetSchema);