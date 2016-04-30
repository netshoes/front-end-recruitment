module.exports = function(options) {
  'use strict';

  options.app.get('/', function(request, response) {
    // GET SESSION CART
    options.dbFunctions.getCartBySessionId(request.sessionID, function(err, results) {
      options.functions.renderTemplate(request, response, '/index', {
        'showcase': options.showcase.products,
        'session': results && results[0] ? results[0] : {}
      });
    });
  });

};
