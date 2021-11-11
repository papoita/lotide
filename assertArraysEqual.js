const eqArrays = require('./eqArrays');

//DESCRIPTION
//a function that takes in 2 arrays and returns true if they are equal and false otherwise.

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) { //compares two arrays passed as arguments
    console.log(`✅ Assertion Passed: [${array1}] is the same to [${array2}]`);
    return true;
  } else {
    console.log(`❌ Assertion Failed: [${array1}] is different to [${array2}]`);
    return false;
  }
};
module.exports = assertArraysEqual;


