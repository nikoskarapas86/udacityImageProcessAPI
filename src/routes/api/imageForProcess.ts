import express from 'express';
import { promises as fsPromises } from 'fs';
import path from 'path';
import url from 'url';
import ImageQueryParams from '../../models/imageQueryParams';
import sharpProcess from '../../utilities/sharpProcess';
import validator from '../../utilities/validator';
const imageForProcess = express.Router();
const createThumb = async (): Promise<boolean> => {
  const imagesThumbPath = path.resolve('.', './assets/thumb');
  try {
    await fsPromises.access(imagesThumbPath);
  } catch {
    fsPromises.mkdir(imagesThumbPath);
  }
  return true;
};
const resizeImage = (query: ImageQueryParams, res: express.Response) => {
  sharpProcess.resizeImage(query).then((response) => {
    if (response) {
      const target: string = `/assets/thumb/${query.target}_${query.width}x${query.height}.png`.toString();
      res.sendFile(target, { root: '.' });
    }
  });
};
const validQueryParams = async (query: ImageQueryParams, res: express.Response): Promise<void> => {
  const existsFile: boolean = await createThumb();
  existsFile && resizeImage(query, res);
};

const invalidQueryParams = (res: express.Response): void => {
  res.send('invalid width or height or this target its not included to our database');
};
const processImage = (query: ImageQueryParams, res: express.Response): void => {
  validator.validateTarget(query).then((response) => {
    response ? validQueryParams(query, res) : invalidQueryParams(res);
  });
};

imageForProcess.get('/', (req: express.Request, res: express.Response) => {
  const url_parts = url.parse(req.url, true);
  const query: ImageQueryParams = url_parts.query as unknown as ImageQueryParams;

  processImage(query, res);
});

export default imageForProcess;
