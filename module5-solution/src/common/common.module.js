(function() {
  "use strict";

  angular.module('common', [])
    .constant('ApiPath', 'https://github.com/jhu-ep-coursera/restaurant-server/blob/master/db')
    .config(config);

  config.$inject = ['$httpProvider'];

  function config($httpProvider) {
    $httpProvider.interceptors.push('loadingHttpInterceptor');
  }

})();
