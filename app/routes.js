module.exports = function(options) {
  'use strict';

  // REGISTER ROUTES FOLDER
  options.functions.requireRecursive(options.rootDir + options.CONSTANTS.ROUTES_FOLDER);

};
