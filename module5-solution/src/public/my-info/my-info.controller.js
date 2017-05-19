(function() {
  "use strict";

  angular.module('public')
    .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['UserInfoService'];

  function MyInfoController(UserInfoService) {
    var $ctrl = this;

    $ctrl.pageClass = 'my-info';

    $ctrl.info = UserInfoService.getInfo();

    $ctrl.notRegistered = function() {
      return JSON.stringify($ctrl.info) === '{}';
    }
  }

})();
