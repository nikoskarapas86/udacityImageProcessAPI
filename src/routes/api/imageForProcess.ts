import express from 'express';
import url from 'url';
import ImageQueryParams from '../../models/imageQueryParams';
import sharpProcess from '../../utilities/sharpProcess';
import validator from '../../utilities/validator';


const imageForProcess = express.Router();

const validQueryParams = (query: ImageQueryParams, res: express.Response):void => {

  sharpProcess.resizeImage(query).then((response) => {
    if (response) {
      const target: string = `/assets/thumb/${query.target}_${query.width}x${query.height}.png`.toString();
      res.sendFile(target, { root: '.' });
    }
  });
};
const invalidQueryParams = (res: express.Response):void => {
  res.send('invalid width or height or this target its not included to our database');
};
const processImage = (query: ImageQueryParams, res: express.Response):void => {
  validator.validateTarget(query).then(response =>{
   
    response?  validQueryParams(query, res)
    : invalidQueryParams(res);
  })
   
};

imageForProcess.get('/', (req:express.Request, res: express.Response) => {
  const url_parts = url.parse(req.url, true);
  const query: ImageQueryParams = url_parts.query as unknown as ImageQueryParams;

  processImage(query, res);
});

export default imageForProcess;
