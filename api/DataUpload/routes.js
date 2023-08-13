const app = require("express");

uploadData = app.Router();

const upload = require("../../util/uploadData");

uploadData.post(
  "/uploadImage",
  async (req, res) => {
    try {
      const nft = await upload(req.body?.image, req.body?.metadata, req.body?.feature_vector, req.body?.hash_code)
      console.log("NFT", nft)
      res.status(200).send(nft);
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

module.exports = uploadData;