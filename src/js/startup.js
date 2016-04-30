var nt = {
  'elem': {
    'htmlTag': jQuery('html')
  },
  'constants': {
    'prefixes': {
      'ajaxUrl' : '/ajax'
    }
  },
  'utils': {
    'getEventName': function() {
      return nt.elem.htmlTag.hasClass('mobile-true') ? 'touchstart' : 'click';
    }
  }
};
