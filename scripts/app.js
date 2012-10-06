'use strict';

// App module
angular.module('saad', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/query', { templateUrl: 'partials/query.html', controller: SaadQuery })
      .when('/browse', { templateUrl: 'partials/browse.html', controller: SaadBrowser })
      .when('/view/:item', { templateUrl: 'partials/item-detail.html', controller: SaadDetailView })
      .otherwise({redirectTo: '/query'});
  }]);
