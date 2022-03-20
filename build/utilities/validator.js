"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validateNumber = function (num) {
    var widthOrHeight = parseInt(num);
    return !isNaN(widthOrHeight) && widthOrHeight > 0;
};
exports.default = { validateNumber: validateNumber };
