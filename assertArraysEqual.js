//function that assserts that two arrays are equal

function assertArrays(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`❌ Assertion failed: [${array1}] !== to [${array2}]`);
    }
  }
  console.log(`✅ Assertion Passed: [${array1}] == to [${array2}]`);
}



/*

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
*/

//test
assertArrays([1, 2, 3], [1, 2, 3]);
assertArrays([1, 2, 3], [1, 2, "3"]);
// => should PASS