// function without will return a subset of a given array, remving unwanted elements

//input source array and itemsToRemove array
//return newArray that has source array without itemsToRemove

function without(sourceArray, itemToRemoveArray) {
  newArray = [];
  for (i = 0; i < sourceArray.length; i++) {
    if (!itemToRemoveArray.includes(sourceArray[i])) {
      newArray.push(sourceArray[i]);
    }
  }
  return newArray;

}

//itemToRemoveArray.includes(sourceArray[i] // if it is present it will be true. by using the exponential not present

function assertArraysEqual(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`[${array1}] is different to [${array2}]`);
      return false;
    }
  }
  console.log(`[${array1}] is the same to [${array2}]`);
  return true;
}

function eqArrays(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true;
}

//
const words = ["hello", "world", "lighthouse"];
let output = without(words, ["lighthouse"]) // => [2, 3]
console.log(output);
//without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
//const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);