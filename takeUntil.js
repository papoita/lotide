//test functions
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ [${array1}] is the same to [${array2}]`);
    return true;
  } else {
    console.log(`❌ [${array1}] is different to [${array2}]`);
    return false;
  }
};
//ACTUAL FUNCTION
//support callbacks and iterate shorthand using objects and arrays
//returns a slice of the array with elements taken from the beginning. I keeps going until the callback returns a truthy value.
//callback only be provided one value: the item in the array

const takeUntil = function(array, callback) {

  for (let item of array) {
    if (callback(item)) {

      const indexToStop = (array.indexOf(item));
      //console.log(indexToStop);
      let slicedArray = array.slice(undefined, indexToStop);

      //console.log(slicedArray);
      return (slicedArray);
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);