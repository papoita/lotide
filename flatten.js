//input array with nested arrays
//return flattened version
//is several nests it is called recursion

function flatten(elements) {
  const flatArray = [];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      flatArray.push(elements[i]);
      console.log(flatArray);

    }
  } return flatArray;
}
//typeof returns objects
//Array.isArray
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
//test
flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]