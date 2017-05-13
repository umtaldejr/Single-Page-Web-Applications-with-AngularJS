(function() {
  'use strict';

  angular.module('data')
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];

  function MenuDataService($http) {
    var service = this;

    service.getAllCategories = getAllCategories;

    function getAllCategories() {
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/categories.json"
      });
    };

  };

})();
