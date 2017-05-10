(function() {

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService);

  /*  NarrowItDownController */

  NarrowItDownController.$inject = ['MenuSearchService'];

  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;

    ctrl.searchTerm = '';
    ctrl.foundItems = [];

    ctrl.narrowItDown = narrowItDown;
    ctrl.removeItem = removeItem;

    function narrowItDown() {
      var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
      promise.then(
        function(foundItems) {
          ctrl.foundItems = foundItems;
        },
        function(result) {
          ctrl.foundItems = [];
        }
      );
    };

    function removeItem(index) {
      ctrl.foundItems.splice(index, 1);
    };

  };

  /* MenuSearchService */

  MenuSearchService.$inject = ['$http', '$q'];

  function MenuSearchService($http, $q) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {

      var promise = $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
      });

      var deferred = $q.defer();

      promise.then(
        // success case
        function(response) {
          var foundItems = response.data.menu_items.filter(function(item) {
            return item.description.search(searchTerm) >= 0;
          });
          deferred.resolve(foundItems);
        },
        // error case
        function(response) {
          deferred.reject();
        });

      return deferred.promise;
    };

  };

})();
