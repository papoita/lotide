const eqObjects = require("./eqObjects");

//DESCRIPTION
//Write a function that takes in 2 objects and returns true if they are equal and false otherwise.

const assertObjectsEqual = function(object1, object2) {
  const inspect = require("util").inspect;

  if (eqObjects(object1, object2)) {
    console.log(`✅ Assertion Passed ${inspect(object1)} is the same to [${inspect(object2)}]`);
  } else {
    console.log(`❌ Assertion Failed ${inspect(object1)} is different to ${inspect(object2)}`);
  }
};

//LEARNING AND TIPS
//console.log(`Example label: ${inspect(object1)}`);
module.exports = assertObjectsEqual;



