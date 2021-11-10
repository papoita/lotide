const eqArrays = require("./eqArrays");


//actual function
//takes in 2 objects
//returns true false on perfect match ===

//Object.keys(ab); //returns [a,b]
//Object.values(object1); //returns ["2", "1"]



const eqObjects = function(object1, object2) {
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

//testing arrays as values

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
/*
//testing primitives as value test
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false


*/
//eslint