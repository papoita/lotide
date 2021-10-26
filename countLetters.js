
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

/*
const countLetters = function (words) {
  const results = {};
  for (const letter of words) {//each letter in the allItems array
    if (letter === " ") {
      continue
    }
    if (results[letter] === undefined) {
      results[letter] = 1;
    } else {
      results[letter] += 1;
    }
  }
  console.log(results);
  return results;
}
countLetters('I am Paola Perez');
*/

const countLetters = function (words) {
  const results = {};
  for (const letter of words) {//each letter in the allItems array
    if (letter !== " ") {
      if (results[letter] === undefined) {
        results[letter] = 1;
      } else {
        results[letter] += 1;
      }
    }

  }
  console.log(results);
  return results;
}

const test1 = countLetters('I am Paola Perez');

assertEqual(test1["a"], [4])
assertEqual(test1["P"], [2])//fix to lower case
