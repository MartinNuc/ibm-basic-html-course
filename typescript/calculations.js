"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
exports.add = add;
function sumOfArray(arr) {
    return arr.reduce((a, b) => add(a, b), 0);
}
exports.sumOfArray = sumOfArray;
