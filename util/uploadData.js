const mintNFT = require("./mintNFT");

const { LIGHTHOUSE_API_KEY, LIGHTHOUSE_DOMAIN } = process.env;

const Dataset = require("../model/Dataset");
const crud = require("./mongoCRUD");

const upload = async (image, metadata, feature_vector, hash_code) => {
  base64.decode(image, { fname: "image", ext: "png" }).then(async (val) => {
    console.log("File written successfully\n");
    imageResponse = await lighthouse.upload("./image.png", LIGHTHOUSE_API_KEY);

    nftData = {
      attributes: [
        {
          trait_type: "Tags",
          value: metadata.tags,
        },
      ],
      description: metadata.description,
      image: LIGHTHOUSE_DOMAIN + imageResponse.data.hash,
      name: metadata.name,
    };

    finalData = JSON.stringify(nftData);
    finalDataHash = await lighthouse.uploadText(finalData, LIGHTHOUSE_API_KEY);

    console.log(finalDataHash);

    mintNFT(finalDataHash.data.Hash)
      .then((nftHash) => {
        const doc = crud.create(Dataset, {
          "img": LIGHTHOUSE_DOMAIN + finalDataHash,
          "name": metadata.name,
          "description": metadata.description,
          "tags": metadata.tags,
          "feature_vector": feature_vector,
          "hash_code": hash_code,
        })
        res.status(200).send({ response: "OK", Document: doc });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send({ response: error });
      });
  });
};

module.exports = upload;
