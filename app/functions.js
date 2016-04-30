module.exports = function(options) {
  'use strict';

  var
  requireRecursive = function(folder) {
    options.fs.readdirSync(folder).forEach(function(file) {
      var fullName = options.path.join(folder, file);
      if (options.fs.lstatSync(fullName).isDirectory()) {
        requireRecursive(fullName);
      } else if (file.toLowerCase().indexOf('.js')) {
        require(fullName)(options);
      }
    });
  },
  getDevice = function(request) {
    var md = new options.MobileDetect(request.headers['user-agent']),
        device = options.settings.app.devicesEnabled.desktop.slug;
    if (md.mobile()) {
      device = options.settings.app.devicesEnabled.mobile.slug;
    }
    if (md.tablet()) {
      device = options.settings.app.devicesEnabled.tablet.slug;
    }
    return (device && device !== '') ? device : 'desktop';
  },
  templateDevicePath = function(request, templatePath, folderTemplate) {
    return (folderTemplate ? folderTemplate : getDevice(request)) + templatePath;
  },
  propertiesLoader = function (options, filePath) {
    var properties = {};
    if (options.fs.existsSync(filePath)) {
      try {
        properties = JSON.parse(options.fs.readFileSync(filePath, options.CONSTANTS.DEFAULT_ENCODING));
      } catch (error) {
        console.log('Error loading properties file error: ', error);
      }
    }
    return properties;
  },
  renderTemplate = function(request, response, templatePath, data, folderTemplate) {
    if (!data || typeof data !== 'object') {
      data = {'page': data};
    }

    response.render(templateDevicePath(request, templatePath, folderTemplate), options.extend(false, data, {
      'context': {
        'request': request,
        'device': getDevice(request)
      }
    }));
  };

  /**
   * PUBLIC METHODS
   *
   * @public
   */
  return {
    'requireRecursive': requireRecursive,
    'getDevice': getDevice,
    'propertiesLoader': propertiesLoader,
    'renderTemplate': renderTemplate
  }

};
