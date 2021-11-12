const assertArraysEqual = require('../assertArraysEqual');
const findKey = require('../findKey');

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
