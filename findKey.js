
//DESCRIPTION
//supports callback functions
//support iteratee shorthand
//looping over object
//returns the key of the matching element


const findKey = function(object, callback) {
  for (const key in object) {
    //    console.log(`this is the ${key}`);
    //    console.log(`this is the value
    //${JSON.stringify(object[key])}`);
    //   console.log(`${object[key]["stars"]}`);
    //console.log(callback(star));
    if (callback(object[key])) {
      // console.log(`This is the key ${key} at which there are ${callback}`);
      return key;
    }
  }
  return;
};

module.exports = findKey;

//other option code
/*
const findKey = function (object, value) {
  for (const key in object) {
    console.log(`this is the ${key}`);
    console.log(`this is the value ${object[key]}`)
    if (object[key] === value) {
      for (value in object[key]) {
        if (value === 2) {
          console.log(`This is the key ${key} at which there are ${value}`);
        }
      } return;

    }

  } return;
}
*/
