import express from 'express';
import imageForProcess from './api/imageForProcess';

const routes = express.Router();

routes.use('/imageForProcess', imageForProcess);
export default routes;
