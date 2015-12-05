/**
 * App
 *
 * @author Gustavo Alves - contato@gustavocalves.com.br
 *
 */

(function () {
  'use strict';

  angular.module('app.templates', []);
  angular.module('app.routes', []);
  angular.module('app.config', []);
  angular.module('app', [

      'ui.router'
    , 'ngAnimate'

    , 'app.templates'
    , 'app.routes'
    , 'app.config'

    , 'app.components'

  ]);

}());
