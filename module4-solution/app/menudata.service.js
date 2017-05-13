(function() {
  'use strict';

  angular.module('data')
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];

  function MenuDataService($http) {
    var service = this;

    service.getAllCategories = getAllCategories;
    service.getItemsForCategory = getItemsForCategory;

    function getAllCategories() {
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/categories.json"
      });
    };

    function getItemsForCategory(categoryShortName) {
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json",
        params: {
          category: categoryShortName
        }
      });
    };

  };

})();
