
const head = function(array) {
  if (array.length >= 1) {
    //console.log(array[0]);
    return array[0];


  } else {
    //console.log("undefined");
    return undefined;
  }
};

module.exports = head;
/*
scenario handling
An array with only one element should still yield that one element as its head
An empty array should yield undefined as its head
*/
//linted