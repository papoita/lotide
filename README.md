<!-- @format -->

(@papoita)[https://github.com/papoita/lotide] | ver 1.0.1

# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by [Paola Perez Leiva](https://www.linkedin.com/in/perezleivapaola/) as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @papoita/lotide`

**Require it:**

`const _ = require('@papoita/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

### Functions

The following functions are currently implemented:

- `function assertArraysEqual()`: Write a function that takes in 2 arrays and returns true if they are equal and false otherwise.
- `function assertEqual()`: a function that takes in 2 values and returns true if they are equal and false otherwise.
- `function assertObjectsEqual`: Write a function that takes in 2 objects and returns true if they are equal and false otherwise.
- `function countLetters`: a function that takes in a sentence and returns a count of each of the letters in the sentence.
- `function countOnly`: takes in a collection of items and returns a specific subset of those items.
- `function eqArrays`: takes in 2 arrays and returns true if the arrays are equal and false otherwise.
- `function eqObjects`: takes in 2 objects and return true if they are equal and false otherwise.
- `function findKey`: takes in an object and callback and returns the first key that meets the criteria specified in callback.
- `function flatten`: takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
- `function head`: takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
- `function letterPositions`: takes in a string and returns all indices of letter positions in the string.
- `function map`: takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.
- `function middle`: takes in an array and returns middle most element of the array.
- `function tail`: takes in an array and returns middle most element of the array.
- `function takeUntil`: takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.
- `function without`: takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.

### Tests

- `function assertArraysEqualTest()`: testing cases for function assertArraysEqual.
- `function assertEqualTest()`: testing cases for function assertEqual.
- `function assertObjectsEqualTest`: test cases for assertObjectsEqual.
- `function countLettersTest`: test cases for function countLetters.
- `function countOnlyTest`: test cases for function countOnly.
- `function eqArraysTest`: test cases for function eqArrays.
- `function eqObjectsTest`: test cases for function eqObjects.
- `function findKeyTest`: test cases for function findKey.
- `function headTest`: test cases for function head with mocha and chai.
- `function middleTest`: test cases for function middle with mocha and chai.
- `function tailTest`: test cases for function tail with mocha and chai.
