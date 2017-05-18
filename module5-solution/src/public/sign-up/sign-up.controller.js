(function() {
  "use strict";

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['menuCategories', 'UserInfoService'];

  function SignUpController(menuCategories, UserInfoService) {
    var $ctrl = this;

    $ctrl.pageClass = 'sign-up';

    $ctrl.submitSuccess = false;

    $ctrl.menuCategories = menuCategories.map(function(category) {
      return category.short_name;
    });

    $ctrl.isntValid = function(favorite) {
      return $ctrl.menuCategories.indexOf(favorite) === -1;
    };

    $ctrl.submitForm = function() {

      var info = {
        firstname: $ctrl.firstname,
        lastname: $ctrl.lastname,
        email: $ctrl.email,
        telephone: $ctrl.telephone,
        favorite: menuCategories.find(function(category) {
          return category.short_name === $ctrl.favorite;
        })
      };

      UserInfoService.saveInfo(info);
      $ctrl.submitSuccess = true;
    };
  }

})();
