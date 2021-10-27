//test functions

//testing functions

function assertArraysEqual(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`❌ [${array1}] is different to [${array2}]`);
      return false;
    }
  }
  console.log(`✅ [${array1}] is the same to [${array2}]`);
  return true;
}

function eqArrays(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true;
}

//actual function letter positions



const letterPositions = function (sentence) {
  //let lowerCaseSentence = sentence.toLowerCase;
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      const item = sentence[i];

      if (!results[item]) {
        results[item] = [i];
      } else {
        results[item].push(i);
      }
    }
  }

  return results;
};
console.log(letterPositions("lighthouse in the house"));

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);


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