/** @format */
/**
 * compare arrays
 */
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["hello", 2, 3], [1, 2, "3"]);
