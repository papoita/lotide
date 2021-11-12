
//DESCRIPTION
//return a count of each of the letters
//countLetters('LHL') should return results indicating that L appears twice, and H once

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


module.exports = countLetters;


//Other code option
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
