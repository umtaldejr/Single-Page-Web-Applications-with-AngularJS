(function() {
  "use strict";

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['menuCategories'];

  function SignUpController(menuCategories) {
    var $ctrl = this;

    $ctrl.pageClass = 'sign-up';

    $ctrl.menuCategories = menuCategories.map(function(category) {
      return category.short_name;
    });

    $ctrl.isntValid = function(favorite) {
      return $ctrl.menuCategories.indexOf(favorite) === -1;
    };

    // TODO
    $ctrl.submitForm = function() {};
  }

})();
