const assertArraysEqual = require('./assertArraysEqual');
// function without will return a subset of a given array, remving unwanted elements

//input source array and itemsToRemove array
//return newArray that has source array without itemsToRemove

const without = function(sourceArray, itemToRemoveArray) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (!itemToRemoveArray.includes(sourceArray[i])) {
      newArray.push(sourceArray[i]);
    }
  }
  return newArray;

};

//itemToRemoveArray.includes(sourceArray[i] // if it is present it will be true. by using the exponential not present

const words = ["hello", "world", "lighthouse"];
let output = without(words, ["lighthouse"]); // => [2, 3]
console.log(output);
//without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
//const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
module.exports = without;
//linted