const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  }
  else if (actual !== expected) {
    console.log(`❌ Assertion failed: [${actual}] !== [${expected}]`);
  }
};

function eqArrays(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true;
}


//actual function
//takes in 2 objects
//returns true false on perfect match ===

//Object.keys(ab); //returns [a,b]
//Object.values(object1); //returns ["2", "1"]



const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  //console.log(object1["keys"]);
  for (const item of object1) {
    //console.log(item);
    //console.log(object1[item]);
    if (object1[item] !== object2[item]) {
      return false;
    }
  } return true;
};

//testing
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc))); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2))); // => false