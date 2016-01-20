+function ($) {
  'use strict';

  var Products = function () {
    this.items = [];
    this.getItems();
  }

  Products.prototype.getItems = function () {
    $.getJSON('../data/products.json', function() {
    }).done(function(data) {
      this.items = data.products;
      this.loadItems(this.items);
      this.addItem(this.items);
    }.bind(this));
  }

  Products.prototype.loadItems = function(items) {
    var $elementItems = $("#items-list");

    $.each(items, function(i, item) {
      var parcel = item.price/item.installments;

      var priceBr = item.price.toString();
      priceBr = priceBr.replace(/[^0-9]+/g, "");

      if(priceBr.length == 4) {
        priceBr = priceBr.substring(0,3) + ',' + priceBr.substring(3, 4);
      }
      if(priceBr.length == 3) {
        priceBr = priceBr.substring(0,2) + ',' + priceBr.substring(2);
      }

      var $elementItem = $('<li class="list-product-item">').data('data-product-item', item);
      $('<a href="javascript:;" class="list-link">')
      			.append('<div class="list-cart-content">')
          	.appendTo($elementItem);
      $('<figure>')
      			.append('<img>')
      			.appendTo($elementItem.find('.list-cart-content'));
      $('<div class="product-info">')
      			.append('<h2 class="list-product-title">')
            .append('<span class="list-product-price">')
            .append('<span class="parcel-price">')
            .appendTo($elementItem.find('.list-cart-content'));

      $elementItem.find('img').attr('src', 'http://placehold.it/180x230/');
  		$elementItem.find('.list-product-title').text(item.title + ' | ' + item.description);
  		$elementItem.find('.list-product-price').text(item.currencyFormat + ' ' + priceBr + '0');
  		$elementItem.find('.parcel-price').text(item.installments + ' x ' + item.currencyFormat + ' ' + parcel.toFixed(2));

      $elementItems.append($elementItem);

    });
  }

  Products.prototype.addItem = function(item) {
  	// console.log(item);
  }

  $(document).on('click', '.list-link',function(e) {
    e.preventDefault();
    var productItem = $(this).closest('li.list-product-item').data('data-product-item');
    window.Products.addItem(productItem)
    $('.cart-wrap').addClass('open');
    setTimeout(function(){
      $('.cart-wrap').removeClass('open');
    }, 3000);
  });

  $(document).ready(function () {
    window.Products = new Products();
  });

}(jQuery);
