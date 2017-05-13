(function() {
  'use strict';

  angular.module('MenuApp')
    .component('categories', {
      template: '<ul>' +
        '<li ng-repeat="category in $ctrl.categories">' +
        '<a href="#">' +
        '{{category.id}} <span>{{category.name}}</span>' +
        '</a>' +
        '</li>' +
        '</ul>',
      bindings: {
        categories: '<'
      }
    });

})();
