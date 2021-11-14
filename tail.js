/** @format */
/**
 *
 * @param {*} array
 * @returns array except first element
 */
const tail = function(array) {
  let newArray = array.slice(1);
  //console.log(newArray.length);
  return newArray;
};

module.exports = tail;
