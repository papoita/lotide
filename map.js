
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

//test functions
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



//ACTUAL MAP FUNCTION
const words = ["ground", "control", "to", "major", "tom"];

const num = [1, 2, 3];
const none = [];

const map = function (array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const result1 = map(words, word => word[0]);

assertArraysEqual(result1, ["g", "c", "t", "m", "t"]);

const result2 = map(num, num => num * 10);

assertArraysEqual(result2, [10, 20, 30, 40, 50]);

const result3 = map(none, none => { none = none.concat("hello") });
assertArraysEqual(result3, ["hello"]);
