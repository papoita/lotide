const assertEqual = require('../assertEqual');
const countOnly = require('../countOnly');

//Test cases
const allItems = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(allItems, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
//test countOnly


//test using assertations
assertEqual(result1.Jason, 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
