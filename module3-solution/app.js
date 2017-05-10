(function() {

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService);

  /*  NarrowItDownController */

  NarrowItDownController.$inject = ['MenuSearchService'];

  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;

  };

  /* MenuSearchService */

  MenuSearchService.$inject = ['$http'];

  function MenuSearchService($http) {
    var service = this;

  };

})();
