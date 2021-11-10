

const assertArraysEqual = require('./assertArraysEqual');


//ACTUAL FUNCTION
//supports callback functions
//support iteratee shorthand
//looping over object
//returns the key of the matching element


/*
const findKey = function (object, value) {
  for (const key in object) {
    console.log(`this is the ${key}`);
    console.log(`this is the value ${object[key]}`)
    if (object[key] === value) {
      for (value in object[key]) {
        if (value === 2) {
          console.log(`This is the key ${key} at which there are ${value}`);
        }
      } return;

    }

  } return;
}
*/

const findKey = function(object, callback) {
  for (const key in object) {
    //    console.log(`this is the ${key}`);
    //    console.log(`this is the value
    //${JSON.stringify(object[key])}`);
    //   console.log(`${object[key]["stars"]}`);

    //console.log(callback(star));
    if (callback(object[key])) {



      // console.log(`This is the key ${key} at which there are ${callback}`);

      return key;
    }
  }

  return;

};





let result1 = (findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2)); // => "noma"

//function compareNumbers(x) {
// return x.stars === 2;
//}

assertArraysEqual(result1, "noma");
module.exports = findKey;
//linted