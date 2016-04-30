nt.showcase = (function (jQuery, win, doc) {
  'use strict';

  var component = jQuery('.add-product'),
      pluginName = 'menuButton';

  function init() {
    component.on(nt.utils.getEventName(), function(event) {
      event.preventDefault();
      var element = this;
      nt.ajax.get(element, element.href, null, null, function() {
        if (nt.cart) {
          nt.cart.update(element);
        };
      });
    });

    jQuery(document).on({
      mouseleave: function(event) {
        $.data(this, 'plugin_' + pluginName).hideMenu();
        $(this).find('ul').hide();
      }
    }, '[data-buttons=dropdown]');
  };

  return {
    'init': init
  }

}($, window, window.document));

nt.showcase.init();
