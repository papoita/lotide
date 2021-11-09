// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  }
  else if (actual !== expected) {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

module.exports = assertEqual;
//we are passing the variable assertEqual and not calling the function assertEqual()
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2, 5);
assertEqual(true, false);