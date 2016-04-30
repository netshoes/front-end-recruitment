"use strict";

describe("Startup script tests", function () {

  it("Testing html selector for frontend", function () {
    var expected = true,
        // Act
        result = nt.elem.htmlTag;
    // Assert
    expect(result.is('html')).toBe(expected);
  });

  it("Testing prefix for ajax", function () {
    var expected = '/ajax',
        // Act
        result = nt.constants.prefixes.ajaxUrl;
   // Assert
   expect(result).toBe(expected);
  });

  it("Given event, returns click or touchstart", function () {
    var expected = 'click',
        // Act
        result = nt.utils.getEventName();
    // Assert
    expect(result).toBe(expected);
  });

});
