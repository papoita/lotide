const assertEqual = require('./assertEqual');

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

const countLetters = function(words) {
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
};

const test1 = countLetters('I am Paola Perez');
const test2 = countLetters("hi");

assertEqual(test2["h"], 1);
assertEqual(test1["a"], 4);
assertEqual(test1["a"], 3);
assertEqual(test1["P"], 2);//fix to lower case
assertEqual(test1["p"], 2);//fix to lower case

module.exports = countLetters;
//eslint