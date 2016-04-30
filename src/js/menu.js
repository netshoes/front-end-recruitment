nt.menu = (function (jQuery, win, doc) {
  'use strict';

  var menuActiveClassName = 'menu-active',
      deleteItemCart = '.remove-product';

  function init() {

    /* OPEN MENU */
    jQuery('.open-menu').on(nt.utils.getEventName(), function(event) {
      nt.elem.htmlTag.toggleClass(menuActiveClassName);
      event.preventDefault();
    });

    /* CLOSE MENU */
    jQuery('.close-menu').on(nt.utils.getEventName(), function(event) {
      nt.elem.htmlTag.toggleClass(menuActiveClassName);
      event.preventDefault();
    });

    jQuery(doc).on(nt.utils.getEventName(), deleteItemCart, function(event) {
      event.preventDefault();
      var element = this;
      nt.ajax.get(element, element.href, null, null, function() {
        if (nt.cart) {
          nt.cart.update(element);
        };
      });
    });

  };

  return {
    'init': init
  }

}($, window, window.document));

nt.menu.init();
