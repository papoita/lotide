const assertArraysEqual = require('./assertArraysEqual');
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
module.exports = takeUntil;
//linted