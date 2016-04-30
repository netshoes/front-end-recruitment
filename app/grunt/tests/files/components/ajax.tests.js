"use strict";

describe("Ajax script tests", function () {

  var cartAddUrl = '/cart/add/1/18644119330491310/S';

  it("Given ajax insert in cart, with not function", function () {
    var expected = undefined;
    spyOn(nt.ajax, "get").and.returnValue(expected);

    // Assert
    expect(nt.ajax.get(null, cartAddUrl, null, null, null)).toBe(expected);
  });

});
