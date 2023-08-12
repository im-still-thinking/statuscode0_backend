const {LIGHTHOUSE_API_KEY, LIGHTHOUSE_DOMAIN} = process.env;

const upload = async (image, metadata) => {
  base64
    .decode(image, { fname: "image", ext: "png" })
    .then(async (val) => {
      console.log("File written successfully\n");
      imageResponse = await lighthouse.upload(
        "./image.png",
        LIGHTHOUSE_API_KEY
      );

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

      return { response: "OK", finalDataHash: finalDataHash.data.Hash };
    });
};

module.exports = upload;