module.exports = {

  'host': {
    'hostname': 'localhost',
    'port': 3000
  },
  'devicesEnabled': {
    'desktop': {
      'slug': 'desktop',
      'isMobile': false
    },
    'mobile': {
      'slug': 'mobile',
      'isMobile': true
    },
    'tablet': {
      'slug': 'tablet',
      'isMobile': true
    }
  },
  'environment': 'production',
  'environmentProperties': '/Users/mnobreg/frontend.json',
  'staticAssetsFolderName': 'public',
  'staticAssetsFolderOptions': {
    'redirect': false
  },
  'logger': {
    'format': 'dev',
    'options': null
  },
  'session': {
    'secret': 'drubu2Wun8methu2uspec6D44e3ejuta',
    'resave': true,
    'saveUninitialized': true
  }

};
