(function() {
  'use strict';

  angular.module('MyApp', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {

    $scope.items_str = '';
    $scope.message = '';
    $scope.checkIfTooMuch = checkIfTooMuch;

    /**
     * @desc Call the necessary functions for displaying the appropriate message.
     */
    function checkIfTooMuch() {
      var items_array = preProcess($scope.items_str);
      var number_items = countItems(items_array);
      var appropriate_message = chooseMessage(number_items);

      $scope.message = appropriate_message;
    };

    /**
     * @desc Process a string with an items list.
     * @param {string} items_str String with the items separated by comma.
     * @return {Object[]} List of all valid items.
     */
    var preProcess = function(items_str) {
      var items_array = items_str.split(',');

      function removeWhitespaces(str) {
        return str.trim();
      };
      items_array = items_array.map(removeWhitespaces);

      function isNotEmpty(str) {
        return !(str === '');
      };
      items_array = items_array.filter(isNotEmpty);
      return items_array;
    };

    /**
     * @desc Count the number of items in an array.
     * @param {Object[]} items_array Array of items.
     * @return {number} Number of items in the array.
     */
    var countItems = function(items_array) {
      var number_items = items_array.length;
      return number_items;
    };
  };

  /**
   * @desc Choose the appropriate message according to the number of items.
   * @param {number} number_items Number of items.
   * @return {string} Appropriate message.
   */
  var chooseMessage = function(number_items) {
    var appropriate_message = '';
    if (number_items == 0) {
      appropriate_message = "Please enter data first";
    } else if (number_items <= 3) {
      appropriate_message = "Enjoy!";
    } else if (number_items > 3) {
      appropriate_message = "Too much!";
    }
    return appropriate_message;
  };

})();
