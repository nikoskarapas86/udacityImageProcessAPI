"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageForProcess_1 = __importDefault(require("./api/imageForProcess"));
var routes = express_1.default.Router();
routes.use('/imageForProcess', imageForProcess_1.default);
exports.default = routes;
