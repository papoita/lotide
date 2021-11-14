/** @format */
/**
 *
 * @param {*} object
 * @param {*} callback
 * @returns key
 */
const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return;
};

module.exports = findKey;
