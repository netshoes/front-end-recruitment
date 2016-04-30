module.exports = function(options) {
  'use strict';

  // TEMPLATE ENGINE
  options.app.set('view engine', 'dust');
  options.app.set('views', options.CONSTANTS.TEMPLATE_FOLDER_NAME);
  options.app.engine('dust', options.consolidate.dust);

  // HELPERS
  require('./helpers')(options);

  // FILTERS
  require('./filters')(options);

};
