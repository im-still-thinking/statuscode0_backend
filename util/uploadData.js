const mintNFT = require("./mintNFT");
const base64 = require("node-base64-image");
const lighthouse = require("@lighthouse-web3/sdk");

const { LIGHTHOUSE_API_KEY, LIGHTHOUSE_DOMAIN } = process.env;

const upload = async (image, metadata, feature_vector, hash_code) => {
  await base64.decode(image, { fname: "image", ext: "png" });
  console.log("File written successfully\n");
  imageResponse = await lighthouse.upload("./image.png", LIGHTHOUSE_API_KEY);

  console.log(imageResponse);
  console.log(metadata);
  console.log(hash_code);

  nftData = {
    name: metadata[1],
    image: LIGHTHOUSE_DOMAIN + imageResponse.data.Hash,
    description: metadata[3],
    attributes: [
      {
        trait_type: "Tags",
        value: metadata[5],
      },
    ],
  };

  finalData = JSON.stringify(nftData);
  finalDataHash = await lighthouse.uploadText(finalData, LIGHTHOUSE_API_KEY);

  console.log("HUII", finalDataHash);
  console.log("HajajaI", `${LIGHTHOUSE_DOMAIN}${imageResponse.data.Hash}`);

  return {
    image: `${LIGHTHOUSE_DOMAIN}${imageResponse.data.Hash}`,
    feature_vector: feature_vector,
    hash_code: hash_code,
    metadata: metadata,
    nftMetadata: finalDataHash.data.Hash,
  };
};

module.exports = upload;
