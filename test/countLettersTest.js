const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

const test1 = countLetters('I am Paola Perez');
const test2 = countLetters("hi");

assertEqual(test2["h"], 1);
assertEqual(test1["a"], 4);
assertEqual(test1["a"], 3);
assertEqual(test1["P"], 2);//fix to lower case
assertEqual(test1["p"], 2);//fix to lower case