/** @format */
/**
 *
 * @param {*} array
 * @returns middle element
 */
const middle = (array) => {
  let newMiddleArray = [];
  let length = array.length;
  let div = length / 2;
  if (array.length <= 2) {
    newMiddleArray = [];
    return newMiddleArray;
  } else if (length % 2 === 0) {
    newMiddleArray.push(array[div - 1]);
    newMiddleArray.push(array[div]);
    return newMiddleArray;
  } else if (length % 2 === 1) {
    newMiddleArray.push(array[Math.floor(div)]);
    return newMiddleArray;
  }
};

module.exports = middle;
