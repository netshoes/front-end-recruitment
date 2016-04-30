nt.ajax = (function (jQuery, win, doc) {
  'use strict';

  var component = jQuery('.add-product');

  /**
   * Ajax for events
   * @param  {Element}  element Element handler
   * @param  {String}   href    Url for get
   * @param  {Function} success Success function
   * @param  {Function} fail    Fail function
   * @param  {Function} always  Always function
   * @return {Object}   xhr     Object XHR for request
   */
  function get(element, href, success, fail, always) {
    var xhr = $.get(href, function(data, textStatus, jqXHR) {
      if (success && typeof success === 'function') {
        success.call(this, data, textStatus, jqXHR);
      }
    }).fail(function(data, textStatus, jqXHR) {
      if (fail && typeof fail === 'function') {
        fail.call(this, data, textStatus, jqXHR);
      }
    }).always(function(data, textStatus, jqXHR) {
      if (always && typeof always === 'function') {
        always.call(this, data, textStatus, jqXHR);
      }
    });
    return xhr;
  };

  return {
    'get': get
  }

}($, window, window.document));
