nt.cart = (function (jQuery, win, doc) {
  'use strict';

  // UPDATE CART
  function update(element) {
    nt.ajax.get(this, '/cart/refresh/', null, null, function(cart, textStatus, jqXHR) {
      // UPDATE CART HTML
      jQuery('#cart').html(jQuery(cart).contents());

      // DISPLAY PRODUCT ADDED IN CART
      if (jQuery(element).hasClass('open-menu')) {
        jQuery('html').addClass('menu-active');
      }
    });
  };

  return {
    'update': update
  }

}($, window, window.document));
