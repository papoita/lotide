
//testing functions

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  }
  else if (actual !== expected) {
    console.log(`❌ Assertion failed: [${actual}] !== [${expected}]`);
  }
};

//function countLetters
//input a string
//return a count of each of the letters
//countLetters('LHL') should return results indicating that L appears twice, and H once

const countLetters = function (allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {//each name in the allItems array
    if (itemsToCount[item]) {
      console.log([item]);
      if (results[item]) {
        console.log(results[item]);
        results[item] += 1;
      } else {
        console.log(results[item]);
        results[item] = 1;
      }
    }

  } console.log(results);
  return results;
}