nt.polyfill = (function (jQuery, win, doc) {
  'use strict';

  function init() {
    var method,
        noop = function () {},
        methods = [
          'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
        ],
        length = methods.length,
        console = (win.console = win.console || {});

    while (length--) {
      method = methods[length];

      // Only stub undefined methods.
      if (!console[method]) {
        console[method] = noop;
      }
    }
  };

  return {
    'init': init
  }

}($, window, window.document));

nt.polyfill.init();
