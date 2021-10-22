const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  }
  else if (actual !== expected) {
    console.log(`❌ Assertion failed: [${actual}] !== [${expected}]`);
  }
};


const tail = function (array) {
  let newArray = array.slice(1);
  console.log(newArray.length);
  return newArray;
};
// Test Case 1: Check the returned array elements

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result.length);


assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
//assertEqual(result.length, 2);

//test case 2 an array with one element
const result1 = tail(["hello"]);
console.log(result1.length);
assertEqual(result1.length, 0);

//test case 3 an empty array
const result2 = tail([]);
console.log(result2.length);
assertEqual(result2.length, 0);
/*

//notes on how to fix error of undefined const, this will show you were the error is and ultimatelly how to fix it.

const foo = undefined;
foo.bar

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
*/