import express from "express";
import students from "./api/students";


const routes = express.Router();

routes.use('/students',students);
export default routes;