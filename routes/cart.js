module.exports = function(options) {
  'use strict';

  var pushProductInCartReturnJson = function(request, response, sessionId, product) {
    options.dbFunctions.pushProductInCart(sessionId, product, request.params.variation, request.params.quantity, function(err, results) {
      response.json(results);
    });
  };

  // POST IN CART THE PRODUCT
  options.app.get('/cart/add/:quantity/:sku/:variation', function (request, response) {
    var sessionId = request.sessionID,
        quantityIncrement = options.dbFunctions.quantity(request.params.quantity);

    var product = options.showcase.products.filter(function(product) {
      // typeof product.sku === number
      // typeof request.params.sku === string
      return product.sku == request.params.sku;
    })[0];

    // SETTING VALID QUANTITY
    product.quantity = quantityIncrement;

    options.dbFunctions.getCartBySessionId(sessionId, function(err, results) {
      if (results.length > 0) {
        pushProductInCartReturnJson(request, response, sessionId, product);
      } else {
        options.dbFunctions.createNewCart(sessionId, function(err, results) {
          pushProductInCartReturnJson(request, response, sessionId, product);
        });
      }
    });

  });

  // REMOVE PRODUCT IN CART
  options.app.get('/cart/remove/:sku', function (request, response) {
    var sessionId = request.sessionID;
    // REMOVENDO PRODUTOS
    options.dbFunctions.removeProductInCart(sessionId, request.params.sku, function(err, results){
      response.json(results);
    });
  });

  // GET CART JSON
  options.app.get('/cart', function (request, response) {
    options.dbFunctions.getCartBySessionId(request.sessionID, function(err, results){
      response.json(results);
    });
  });

  // GET CART HTML FORMATTED
  options.app.get('/cart/refresh/', function (request, response) {
    options.dbFunctions.getCartBySessionId(request.sessionID, function(err, results) {
      options.functions.renderTemplate(request, response, '/cart', {
        'showcase': options.showcase.products,
        'session': results && results[0] ? results[0] : {}
      }, 'components');
    });
  });

};
