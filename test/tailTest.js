/** @format */

const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
	it("array [1, 2, 3] returns [2, 3]", () => {
		assert.deepEqual(tail([1, 2, 3]), [2, 3]);
	});
	it("array ['Hello', 'Lighthouse', 'Labs'] returns ['Lighthouse', 'Labs']", () => {
		assert.deepEqual(tail([1, 2, 3]), [2, 3]);
	});
	it("array with one element returns empty array", () => {
		assert.deepEqual(tail([1]), []);
	});
	it("array with no argument returns empty array", () => {
		assert.deepEqual(tail([]), []);
	});
});
