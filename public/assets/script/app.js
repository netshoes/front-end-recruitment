+function ($) {
  'use strict';

  var Products = function () {
    this.$elementList;
    this.items = {};
    this.buildList();
    this.getItems();
  }

  Products.prototype.getItems = function () {
    $.getJSON('../data/products.json', function() {
    }).done(function(data) {
      this.items = data.products;
      this.loadItems();
    });
  }

  Products.prototype.loadItems = function() {
    $.each(this.items, function(i, item) {
      var $elementItem = $('<li class="list-product-wrap"/>');
      $elementItem.append('<h2 class="list-product-title"/>').text(item.title);
      $elementItem.append('<span class="list-product-price"/>').text(item.description);
      $elementItem.append('<span class="parcel-price"/>').text(item.price);
      this.$elementList.append($elementItem);
    //   console.log($elementItem);
    });
  }

  Products.prototype.buildList = function() {
    this.$elementList = $('<ul class="products-list"/>');
  }

  $(document).ready(function () {
    window.Products = new Products();
  })

}(jQuery);
