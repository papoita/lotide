const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); //returns true if arrays are equal
assertArraysEqual(["hello", 2, 3], [1, 2, "3"]); //returns false if arrays are different
