/** @format */
/**
 *
 * @param {*} words
 * @returns count of each letter
 */
const countLetters = function(words) {
  const results = {};
  for (const letter of words) {
    //each letter in the allItems array
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
