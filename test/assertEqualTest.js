/** @format */
/**
 * input values
 * return boolean true if equal
 */
const assertEqual = require("../assertEqual");

assertEqual("Lighthouse Labs", "Bootcamp"); //returns false if values are diffent
assertEqual(1, 1); //returns true if values are the same
assertEqual(2, 5); //returns false if values are diffent
assertEqual(true, false); //returns true if values are the same
