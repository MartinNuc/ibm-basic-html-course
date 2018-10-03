"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var calculations_1 = require("./calculations");
var pi_1 = __importStar(require("./pi"));
console.log(pi_1.default);
calculations_1.add(5, 9);
calculations_1.sumOfArray([1, 2, 3, 4]);
pi_1.area(123);
