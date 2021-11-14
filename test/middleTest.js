/** @format */
/**
 * use mocha and chai
 */
const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("array [1, 2] returns []", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("array [1, 2, 3] returns [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("array [1, 2, 3, 4] returns [2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});
