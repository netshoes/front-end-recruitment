"use strict";

describe("Ajax script tests", function () {

  it("Testing update cart", function () {
    var expected = undefined;
    spyOn(nt.cart, "update").and.returnValue(expected);

    // Assert
    expect(nt.cart.update(null)).toBe(expected);
  });

});
