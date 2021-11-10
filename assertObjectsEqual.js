
const eqObjects = require("./eqObjects");


const assertObjectsEqual = function(object1, object2) {
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
//linted
