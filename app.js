// VARIABLES ===========================================================================================================
var express = require('express'),
    databaseUrl = 'localhost:27017/ns',
    collections = ['frontend'],

// GLOBAL OPTIONS ======================================================================================================
options = {
  'fs': require('fs'),
  'path': require('path'),
  'extend': require('node.extend'),
  'express': require('express'),
  'app': express(),
  'dust': require('dustjs-linkedin'),
  'helpers': require('dustjs-helpers'),
  'consolidate': require('consolidate'),
  'morgan': require('morgan'),
  'db': require('mongojs')(databaseUrl, collections),
  'dbFunctions': null,
  'session': require('express-session'),
  'numeral': require('numeral'),
  '_': require('lodash'),
  'rootDir': __dirname,
  'MobileDetect': require('mobile-detect'),
  'showcase': require('./src/data/products'),
  'settings': {
    'default': require('./app/_conf/default')
  },
  'compiledTemplates': {},
  'CONSTANTS': {
    'ENVIRONMENT': 'dev',
    'DEFAULT_ENCODING': 'utf8',
    'ROUTES_FOLDER': '/routes',
    'TEMPLATE_FOLDER_NAME': 'views'
  }
};

// CONFIGURE APP AND START SERVER ======================================================================================
require('./app/configure')(options).initialize().startServer();
