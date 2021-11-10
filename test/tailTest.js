const assertEqual = require('../assertEqual');
const tail = require('../tail');


const result = tail(["Hello", "Lighthouse", "Labs"]);
//console.log(result.length);


assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
//assertEqual(result.length, 2);

//test case 2 an array with one element
const result1 = tail(["hello"]);
//console.log(result1.length);
assertEqual(result1.length, 0);

//test case 3 an empty array
const result2 = tail([]);
//console.log(result2.length);
assertEqual(result2.length, 0);

//linted