const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  }
  else if (actual !== expected) {
    console.log(`❌ Assertion failed: [${actual}] !== [${expected}]`);
  }
};

function head(array) {
  let firstItem = array.slice(1);
  return firstItem;
}
assertEqual(1, 1);
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "hmm");

/*
scenario handling
An array with only one element should still yield that one element as its head
An empty array should yield undefined as its head
*/