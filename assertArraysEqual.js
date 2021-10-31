//function that assserts that two arrays are equal


function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true;
}

function assertArraysEqual(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ [${array1}] is the same to [${array2}]`);
    return true;
  } else {
    console.log(`❌ [${array1}] is different to [${array2}]`);
    return false;
  }
}

/*

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
*/

//test
assertArrays([1, 2, 3], [1, 2, 3]);
assertArrays(["hello", 2, 3], [1, 2, "3"]);
