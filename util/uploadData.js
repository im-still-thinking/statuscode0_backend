const mintNFT = require("./mintNFT");
const base64 = require("node-base64-image")
const lighthouse = require("@lighthouse-web3/sdk")

const { LIGHTHOUSE_API_KEY, LIGHTHOUSE_DOMAIN } = process.env;

const Dataset = require("../model/Dataset");
const crud = require("./mongoCRUD");

const upload = async (image, metadata, feature_vector, hash_code) => {
  base64.decode(image, { fname: "image", ext: "png" }).then(async (val) => {
    console.log("File written successfully\n");
    imageResponse = await lighthouse.upload("./image.png", LIGHTHOUSE_API_KEY);

    console.log(imageResponse)
    console.log(metadata)
    console.log(hash_code)

    nftData = {
      attributes: [
        {
          trait_type: "Tags",
          value: metadata[5],
        },
      ],
      description: metadata[3],
      image: LIGHTHOUSE_DOMAIN + imageResponse.data.Hash,
      name: metadata[1],
    };

    finalData = JSON.stringify(nftData);
    finalDataHash = await lighthouse.uploadText(finalData, LIGHTHOUSE_API_KEY);

    console.log(finalDataHash);

    return [finalDataHash, `${LIGHTHOUSE_DOMAIN}${imageResponse.data.Hash}`, feature_vector, hash_code, metadata]

    // mintNFT(finalDataHash.data.Hash, "0xbC6b6652F244Ff6B1C584503F558d3a152EB5a0E")
    //   .then((nftHash) => {
    //     const doc = crud.create(Dataset, {
    //       "img": LIGHTHOUSE_DOMAIN + finalDataHash,
    //       "name": metadata.name,
    //       "description": metadata.description,
    //       "tags": metadata.tags,
    //       "feature_vector": feature_vector,
    //       "hash_code": hash_code,
    //     })
    //     return { response: "OK", Document: doc };
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     return { response: error };
    //   });
  });
};

module.exports = upload;
