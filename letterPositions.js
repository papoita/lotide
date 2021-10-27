//test functions

//testing functions

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  }
  else if (actual !== expected) {
    console.log(`❌ Assertion failed: [${actual}] !== [${expected}]`);
  }
};


const letterPositions = function (sentence) {
  //let lowerCaseSentence = sentence.toLowerCase;
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const item = sentence[i];
    if (!results[item]) {
      results[item] = [i];
    } else {
      results[item].push(i);
    }
  }
  return results;
};
console.log(letterPositions("lighthouse in the house"));

const letterPositions2 = function (sentence) {
  const results = {};
  const sentenceArray = sentence.split("");
  console.log("+++++", sentenceArray);
  for (const character, i in sentenceArray) { //shows the index vs for that shows the value
    console.log("--", character);
    if (!results[character]) {
      results[character] = [i];
    } else {
      results[character].push(i);
    }
  }
  console.log("for inloop", results);
  return results;
}
letterPositions2("what is you name");


//console.log(letterPositions("hello"));
/*

//for of use when looping over an array vs for in for object looping
//
{
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
letterPositions("hello");



*/