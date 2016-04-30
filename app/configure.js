module.exports = function(options) {
  'use strict';

  var
  // APP PROPERTIES AND SETTINGS =======================================================================================
  initialize = function() {
    // INITIALIZE FUNCTIONS
    options.functions = require('./functions')(options);

    // INITIALIZE SETTINGS
    options.settings.app = options.extend(
      false,
      options.settings.default,
      options.functions.propertiesLoader(options, options.settings.default.environmentProperties)
    );

    // REQUIRES
    options.dbFunctions = require('./db-functions')(options);
    require('./express')(options);
    require('./engine')(options);
    require('./routes')(options);

    console.log('App initialized');
    return this;
  },
  // START SERVER ======================================================================================================
  startServer = function() {
    var server = options.app.listen(options.settings.app.host.port, options.settings.app.host.hostname, function() {
      console.info('App listening at http://%s:%s', server.address().address, server.address().port);
    });

    return this;
  }

  return {
    'initialize': initialize,
    'startServer': startServer
  }

};
