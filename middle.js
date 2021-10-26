//input an array
//return middle most elements (take out first and last)

function middle(array) {
  let newMiddleArray = [];
  if (array.length <= 2) {
    console.log([]);
    return [];
  }
  else if (array.length % 2 === 0) {
    newMiddleArray.push(array[(array.length / 2) - 1]);
    newMiddleArray.push(array[(array.length / 2)]);
    console.log(newMiddleArray);
    return newMiddleArray;
  } else if (array.length % 2 == 1) {
    newMiddleArray.push(array[Math.floor(array.length / 2)]);
    console.log(newMiddleArray);
    return newMiddleArray;
  }
}
//middle([1, 2, 3]);
//middle([1]);
//middle([1, 2]);
//middle([1, 2, 3, 4, 5, 6]);
middle([1, 2]);

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
      console.log(`[${array1}] is different to [${array2}]`);
      return false;
    }
  }
  console.log(`[${array1}] is the same to [${array2}]`);
  return true;
}

//scenario where you need the middle section taking off fist and last
/*
const shifted = array.shift();
console.log(shifted);
const popped = array.pop();
console.log(popped);
console.log(array);
return array;
*/