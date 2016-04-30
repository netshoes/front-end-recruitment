module.exports = function(options) {
  'use strict';

  var collection = options.db.frontend,
      clone = function(obj) {
          if (null == obj || "object" != typeof obj) return obj;
          var copy = obj.constructor();
          for (var attr in obj) {
              if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
          }
          return copy;
      },
      quantity = function(qtd) {
          var quantityIncrement = 1;
          try {
            quantityIncrement = Number(qtd);
          } catch (e) {
            quantityIncrement = 1;
          }
          return quantityIncrement;
      },
      createNewCart = function(sessionId, callback) {
        collection.save({
          sessionId: sessionId,
          cart: [],
          date: Date.now()
        }, function(err, results) {
          callback(err, results);
        });
      },
      getCartBySessionId = function(sessionId, callback) {
        collection.find({sessionId: sessionId}, function(err, results) {
          callback(err, results);
        });
      },
      selectedVariations = function(availableSizes, selectedVariations, variation) {
        if (selectedVariations && selectedVariations[variation]) {
          var selectedVariation = selectedVariations[variation];
          selectedVariations[variation] = selectedVariation < 10 ? selectedVariation+1 : selectedVariation;
          return selectedVariations;
        } else {
          var newSelectedVariation = {};
          newSelectedVariation[variation] = 1;
          return selectedVariations ? options._.assign(selectedVariations, newSelectedVariation) : newSelectedVariation;
        }
      },
      pushProductInCart = function(sessionId, productAdding, variation, paramQuantity, callback) {
        var productAdd = clone(productAdding),
            quantityIncrement = quantity(paramQuantity);
        getCartBySessionId(sessionId, function(err, results) {
          if (results[0].cart.length > 0) {
            var cart = results[0].cart,
                productFindedInCart = cart.filter(function(product) {
                  var finded = product.sku == productAdd.sku;

                  if (finded) {
                    var variationQuantity = product['selectedVariations'][variation];
                    if (product['selectedVariations'] && variationQuantity) {
                      product['selectedVariations'][variation] = variationQuantity < 10 ? variationQuantity + quantityIncrement : variationQuantity;
                    } else {
                      product['selectedVariations'][variation] = quantityIncrement;
                    }
                  }
                  return finded;
                });

            if (productFindedInCart.length < 1) {
              productAdd['selectedVariations'] = selectedVariations(productAdd.availableSizes, productAdd.selectedVariations, variation);
              cart.push(productAdd);
            }

            for (var i in cart) {
              var item = cart[i];
              if (item.quantity) {
                item.quantity = 0;
                for (var variations in item.selectedVariations) {
                  item.quantity += item.selectedVariations[variations];
                }
              }
            };

            collection.update({sessionId: sessionId}, {$set: {cart: cart}}, function(err, results) {
              callback(err, results);
            });

          } else {
            // ADD PROPERTY selectedVariations WITH SELECTED VALUE
            productAdd['selectedVariations'] = selectedVariations(productAdd.availableSizes, productAdd.selectedVariations, variation);
            collection.update({sessionId: sessionId}, {$set: {cart: [productAdd]}}, function(err, results) {
              callback(err, results);
            });
          }
        });
      },
      removeProductInCart = function(sessionId, sku, callback) {
        getCartBySessionId(sessionId, function(err, results) {
          if (results.length && results[0].cart.length > 0) {
            var basket = results[0].cart;

            for (var idx in basket) {
              if (basket[idx].sku == sku) {
                basket.splice(idx, 1);
              }
            };

            collection.update({sessionId: sessionId}, {$set: {cart: basket}}, function(err, results) {
              callback(err, results);
            });
          } else {
            callback(err, results);
          }
        });
      };


  /**
   * @public
   */
  return {
    'quantity': quantity,
    'createNewCart': createNewCart,
    'getCartBySessionId': getCartBySessionId,
    'pushProductInCart': pushProductInCart,
    'removeProductInCart': removeProductInCart
  }

};
