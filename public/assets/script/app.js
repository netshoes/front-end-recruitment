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
    var $elementItems = $('#items-list');

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
    var $elementWrapCart = $('#items-cart');
    var $elementItemCart = $('<li class="list-cart-item">');
    var quantProduct = $('.list-cart-item').length;

    $('<div class="list-cart-content">').data('data-cart-total', item)
      .appendTo($elementItemCart);
    $('<figure>')
      .append('<img>')
      .appendTo($elementItemCart.find('.list-cart-content'));
    $('<div class="list-cart-info">')
      .append('<h2 class="list-cart-title">')
      .append('<span class="cart-product-style">')
      .append('<span class="cart-product-size">')
      .append('<i class="icon-close">')
      .append('<span class="list-cart-price">')
      .appendTo($elementItemCart.find('.list-cart-content'));

    $elementItemCart.find('img').attr('src', 'http://placehold.it/50x50/');
    $elementItemCart.find('.list-cart-title').text(item.title);
    $elementItemCart.find('.cart-product-style').text(item.style);
    $elementItemCart.find('.cart-product-size').text(item.availableSizes);
    $elementItemCart.find('.list-cart-price').text(item.price);

    $elementWrapCart.append($elementItemCart);

    $('.quant-cart').text(quantProduct);
    $('.cart-price-total').text(item.price);
  }

  Products.prototype.removeItem = function() {
    $('.list-cart-item').remove();
    $('.cart-price-total').text(0);
  }

  $(document).on('click', '.icon-close', function(e) {
    e.preventDefault();
    var productItem = $(this).closest('li.list-cart-item');
    window.Products.removeItem(productItem);
  })

  $(document).on('click', '.list-link',function(e) {
    e.preventDefault();
    var productItem = $(this).closest('li.list-product-item').data('data-product-item');
    window.Products.addItem(productItem);
    $('.cart-wrap').addClass('open');
    setTimeout(function(){
      $('.cart-wrap').removeClass('open');
    }, 3000);
  });

  $(document).ready(function () {
    window.Products = new Products();
  });

}(jQuery);
