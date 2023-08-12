const upload = async (image) => {
  base64
    .decode(image, { fname: "image", ext: "png" })
    .then(async (val) => {
      console.log("File written successfully\n");
      response = await lighthouse.upload(
        "./image.png",
        process.env.LIGHTHOUSE_API_KEY
      );
      return { response: "OK", imageHash: response.data.Hash };
    });
};

module.exports = upload;