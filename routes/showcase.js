module.exports = function(options) {
  'use strict';

  options.app.get('/showcase', function (request, response) {
    response.json(options.showcase.products);
  });

};
