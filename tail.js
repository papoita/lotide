

const tail = function(array) {
  let newArray = array.slice(1);
  //console.log(newArray.length);
  return newArray;
};

module.exports = tail;
// Test Case 1: Check the returned array elements

/*

//notes on how to fix error of undefined const, this will show you were the error is and ultimatelly how to fix it.

const foo = undefined;
foo.bar

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
*/
//linted