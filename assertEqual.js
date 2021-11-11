//DESCRIPTION
// a function that takes in 2 values and returns true if they are equal and false otherwise

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`); //using template literals
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

//for exporting we are passing the variable assertEqual and not calling the function assertEqual()
module.exports = assertEqual;

