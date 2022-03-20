"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var url_1 = __importDefault(require("url"));
var sharpProcess_1 = __importDefault(require("../../utilities/sharpProcess"));
var imageForProcess = express_1.default.Router();
imageForProcess.get("/", function (req, res) {
    var url_parts = url_1.default.parse(req.url, true);
    var query = url_parts.query;
    sharpProcess_1.default.resizeImage(query).then(function (response) {
        if (response) {
            var target = "/assets/thumb/".concat(query.target, "_").concat(query.width, "x").concat(query.height, ".png").toString();
            res.sendFile(target, { root: '.' });
        }
    });
});
exports.default = imageForProcess;
