const app = require("express");

uploadData = app.Router();

const upload = require("../../util/uploadImage");

uploadData.post(
  "uploadImage",
  async (req, res) => {
    try {
      response = await upload(req.body?.image);
      res.status(200).send(response);
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