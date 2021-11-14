/** @format */
/**
 * input 2 values
 * @param {*} actual
 * @param {*} expected
 */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

module.exports = assertEqual;
