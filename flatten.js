
//input array with nested arrays
//return flattened version
//is several nests it is called recursion

const flatten = function(elements) {
  let flatArray = [];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      flatArray = flatArray.concat(flatten(elements[i]));
    } else {
      flatArray.push(elements[i]);
    }
  }
  console.log(flatArray);
  return flatArray;
};
//test
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
//typeof returns objects
//Array.isArray
//or let flatArray = [].concat.apply([], arr);

module.exports = flatten;
//linted