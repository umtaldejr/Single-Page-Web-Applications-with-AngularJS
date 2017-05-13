(function() {
  'use strict';

  angular.module('MenuApp')
    .component('categories', {
      template: '<ul>' +
        '<li ng-repeat="category in $ctrl.categories">' +
        '<a ui-sref="items({short_name: \'{{category.short_name}}\'})">' +
        '{{category.id}} <span>{{category.name}}</span>' +
        '</a>' +
        '</li>' +
        '</ul>',
      bindings: {
        categories: '<'
      }
    });

})();
