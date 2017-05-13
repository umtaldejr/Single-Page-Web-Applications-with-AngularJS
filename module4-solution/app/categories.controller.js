(function() {
  'use strict';

  angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['categoriesList'];

  function CategoriesController(categoriesList) {
    var ctrl = this;

    ctrl.categories = categoriesList.data;
  };

})();
