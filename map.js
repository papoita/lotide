
const assertArraysEqual = require('./assertArraysEqual');
/*
//Debug friednly code that allows to see each step of the map function

const map = function (array, callback) {
  //console.log("array: ", array);
  //console.log("callback: ", cb);
  const results = [];
  for (let item of array) {
    console.log("item BEFORE: ", item);
    console.log("item AFTER: ", callback(item));
    console.log("---");
  }
  return results;
}


const result1 = map(words, word => word[0]);
console.log(result1);
*/




//ACTUAL MAP FUNCTION
const words = ["ground", "control", "to", "major", "tom"];

const num = [1, 2, 3];


const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const result1 = map(words, word => word[0]);

assertArraysEqual(result1, ["g", "c", "t", "m", "t"]);

const result2 = map(num, num => num * 10);

assertArraysEqual(result2, [10, 20, 30, 40, 50]);

const result3 = map(num, num => num + 2
);
assertArraysEqual(result3, [3, 4, 5]);

module.exports = map;