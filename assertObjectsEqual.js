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

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  //console.log(object1["keys"]);
  // for of //value in the array, doesn't work for objs because the word is not there vs the index[0]
  for (const item in object1) { //gives the index of array or key object
    //console.log(item);
    //console.log(object1[item]);
    if (Array.isArray(object1[item])) {
      if (!eqArrays(object1[item], object2[item])) {
        return false;
      }
    } else if (object1[item] !== object2[item]) {
      return false;
    }
  } return true;
};



const assertObjectsEqual = function (object1, object2) {
  const inspect = require("util").inspect;

  if (eqObjects(object1, object2)) {
    console.log(`✅ Assertion Passed ${inspect(object1)} is the same to [${inspect(object2)}]`);
  } else {
    console.log(`❌ Assertion Failed ${inspect(object1)} is different to ${inspect(object2)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); // => false

//console.log(`Example label: ${inspect(object1)}`);