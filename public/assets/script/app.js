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
      var $elementItem = $('<li class="product"/>');
      $elementItem.append('<h2/>').text(item.title);
      $elementItem.append('<p/>').text(item.description);
      $elementItem.append('<span/>').text(item.value);
      this.$elementList.append($elementItem);
    }.bind(this))
  }

  Products.prototype.buildList = function() {
    this.$elementList = $('<ul class="products-list"/>');
  }

  $(document).ready(function () {
    window.ns.Products = new Products();
  })

}(jQuery);
