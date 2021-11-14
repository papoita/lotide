/** @format */
/**
 * input string and element
 * compare using function assertEqual
 * return boolean true if equal
 */
const assertEqual = require("../assertEqual");
const countLetters = require("../countLetters");

const test1 = countLetters("I am Paola Perez");
const test2 = countLetters("hi");

assertEqual(test2["h"], 1);
assertEqual(test1["a"], 4);
assertEqual(test1["a"], 3);
assertEqual(test1["P"], 2);
