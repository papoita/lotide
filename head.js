const head = function (array) {
  if (array.length >= 1) {
    //console.log(array[0]);
    return array[0];


  } else {
    //console.log("undefined");
    return undefined;
  }
};

module.exports = head;
