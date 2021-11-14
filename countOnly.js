/** @format */
/**
 *
 * @param {*} allItems
 * @param {*} itemsToCount
 * @returns subset of items
 */
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    //each name in the allItems array
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
  }
  console.log(results);
  return results;
};

module.exports = countOnly;
