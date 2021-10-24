// function without will return a subset of a given array, remving unwanted elements

//input source array and itemsToRemove array
//return newArray that has source array without itemsToRemove

function without(sourceArray, itemToRemoveArray) {
  newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] !== itemToRemoveArray) {
      newArray.push(sourceArray);
    }
  }

}

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

console.log(sourceArray);
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);