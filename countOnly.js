
//DESCRIPTION
//countOnly function
//input collection of items
//define which items to count and ignore the others
//return counts for a specific subset of those items object

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
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
};

module.exports = countOnly;
