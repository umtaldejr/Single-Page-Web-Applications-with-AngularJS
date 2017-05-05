(function() {
  'use strict';

  angular.module('MyApp', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {

    $scope.items_str = '';
    $scope.message = '';
    $scope.checkIfTooMuch = checkIfTooMuch;

    function checkIfTooMuch() {
    };

  };

})();
