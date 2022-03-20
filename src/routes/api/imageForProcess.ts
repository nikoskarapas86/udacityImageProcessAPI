import express from "express";
import url from "url";
import sharpProcess from "../../helper/sharpProcess";
import ImageQueryParams from "../../models/imageQueryParams";


const imageForProcess = express.Router();
imageForProcess.get("/", (req, res) => {
  const url_parts = url.parse(req.url, true);
  let query: ImageQueryParams = (url_parts.query as unknown as ImageQueryParams);
  sharpProcess.resizeImage(query).then(response =>{
    if(response){
      let target:string =`/assets/thumb/${query.target}_${query.width}x${query.height}.png`.toString()
      res.sendFile(target, { root: '.' })

    }
  })
;
});

export default imageForProcess;
