//It will help us search for a key on an object where its value matches a given value.

//Test functions

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  }
  else if (actual !== expected) {
    console.log(`❌ Assertion failed: [${actual}] !== [${expected}]`);
  }
};

//Actual function findKeyValue
//inpu object and value
//return the first key that cotains that value
//if no key with the value return undefined
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
const findKeyByValue = function (object, value) {
  for (const key in object) {
    if (object[key] === value) {
      console.log(`${key}`)
      return key;
    }
  }
  return undefined;
};

findKeyByValue(bestTVShowsByGenre, "The Wire");
//tests

/*
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
*/