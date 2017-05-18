(function() {
  "use strict";

  angular.module('public')
    .controller('MenuItemsController', MenuItemsController);

  MenuItemsController.$inject = ['category', 'menuItems'];

  function MenuItemsController(category, menuItems) {
    var $ctrl = this;
    $ctrl.category = category;
    $ctrl.menuItems = menuItems;
  }

})();
