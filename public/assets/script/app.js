+function ($) {
  'use strict';

  var Products = function () {
    this.items = [];
    this.getItems();
  }

  Products.prototype.getItems = function () {
    var self = this;
    $.getJSON('../data/products.json', function() {
    }).done(function(data) {
      self.items = data.products;
      self.loadItems(self.items);
    });
  }

  Products.prototype.loadItems = function(items) {
    var ul = $("#items-list");

    $.each(items, function(i, item) {

      var elementItem =
        '<li class="list-product-item">' +
        '<a href="" class="list-link"/>' +
        '<div class="list-cart-content"/>' +
        '<figure>' +
        '<img src="http://placehold.it/180x230/"/>' +
        '</figure>' +
        '<div class="product-info">' +
        '<h2 class="list-product-title">' + item.title + '</h2>' +
        '<span class="list-product-price">' + item.price + '</span>' +
        '<span class="parcel-price">' + item.installments + '</span>' +
        '</div>' +
        '</div>' +
        '</a>' +
'</li>';

      ul.append(elementItem);
    });
  }

  $(document).ready(function () {
    window.Products = new Products();
  })

}(jQuery);
