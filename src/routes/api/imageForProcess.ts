import express from "express";
import url from "url";
import ImageQueryParams from "../../models/imageQueryParams";
import sharpProcess from "../../utilities/sharpProcess";
import validator from "../../utilities/validator";
const imageForProcess = express.Router();

const validQueryParams = (query: ImageQueryParams, res: any) => {
  sharpProcess.resizeImage(query).then((response) => {
    if (response) {
      let target: string =
        `/assets/thumb/${query.target}_${query.width}x${query.height}.png`.toString();
      res.sendFile(target, { root: "." });
    }
  });
};
const invalidQueryParams = (res: any) => {
  res.send("invalid width or height");
};
const processImage = (query: ImageQueryParams, res: any) => {
  validator.validateNumber(query.height) &&
  validator.validateNumber(query.width)
    ? validQueryParams(query, res)
    : invalidQueryParams(res);
};

imageForProcess.get("/", (req, res) => {
  const url_parts = url.parse(req.url, true);
  let query: ImageQueryParams = url_parts.query as unknown as ImageQueryParams;

  processImage(query, res);
});

export default imageForProcess;
