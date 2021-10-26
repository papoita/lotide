//Test Assertion functions
function eqArrays(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true;
}

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

//middle function 

//input an array
//return middle most elements (take out first and last)

const middle = (array) => {
  let newMiddleArray = [];
  if (array.length <= 2) {
    newMiddleArray = [];
    return newMiddleArray;
  }
  else if (array.length % 2 === 0) {
    newMiddleArray.push(array[(array.length / 2) - 1]);
    newMiddleArray.push(array[(array.length / 2)]);
    return newMiddleArray;
  } else if (array.length % 2 == 1) {
    newMiddleArray.push(array[Math.floor(array.length / 2)]);
    return newMiddleArray;
  }
}

//Other tests


//scenario where you need the middle section taking off fist and last
/*
const shifted = array.shift();
console.log(shifted);
const popped = array.pop();
console.log(popped);
console.log(array);
return array;
*/
//Test code for middle

console.log(middle([1, 2]));
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

//assertions
//const result = middle();
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
