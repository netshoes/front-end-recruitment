module.exports = function(options) {
  'use strict';

  // SET UP OUR EXPRESS APPLICATION
  options.app.use(function (request, response, next) {
    // REMOVES 'X-Powered-By' HEADER
    response.removeHeader('X-Powered-By');
    next();
  });

  options.app.use(
    options.express.static(options.settings.app.staticAssetsFolderName, options.settings.app.staticAssetsFolderOptions)
  );

  // USING SESSION
  options.app.use(options.session(options.settings.app.session));

  // LOGGER CONFIGS
  if (options.settings.app.logger.options) {
    options.app.use(
      options.morgan(options.settings.app.logger.format, options.settings.app.logger.options)
    );
  } else {
    options.app.use(
      options.morgan(options.settings.app.logger.format)
    );
  }

};
