


//middle function

//input an array
//return middle most elements (take out first and last)

const middle = (array) => {
  let newMiddleArray = [];
  if (array.length <= 2) {
    newMiddleArray = [];
    return newMiddleArray;
  } else if (array.length % 2 === 0) {
    newMiddleArray.push(array[(array.length / 2) - 1]);
    newMiddleArray.push(array[(array.length / 2)]);
    return newMiddleArray;
  } else if (array.length % 2 === 1) {
    newMiddleArray.push(array[Math.floor(array.length / 2)]);
    return newMiddleArray;
  }
};

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
module.exports = middle;
//linted