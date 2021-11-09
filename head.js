const assertEqual = require('./assertEqual');

function head(array) {
  if (array.length >= 1) {
    return array[0];
    console.log(array[0]);

  } else if (array.length = 0) {
    console.log("undefined");
  }
}

module.exports = head;
/*
scenario handling
An array with only one element should still yield that one element as its head
An empty array should yield undefined as its head
*/