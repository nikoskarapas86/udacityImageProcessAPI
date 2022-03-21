"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = __importDefault(require("../../utilities/validator"));
describe('Test request width and height', function () {
    it('test with zero value', function () {
        expect(validator_1.default.validateNumber('0')).toBeFalse();
    });
    it('test with NaN value', function () {
        expect(validator_1.default.validateNumber('test')).toBeFalse();
    });
    it('test with number ', function () {
        expect(validator_1.default.validateNumber('53')).toBeTrue();
    });
});
