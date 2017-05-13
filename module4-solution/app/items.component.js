(function() {
  'use strict';

  angular.module('MenuApp')
    .component('items', {
      template: '<ul>' +
        '<li ng-repeat="item in $ctrl.items.menu_items">' +
        '<span>' +
        '{{item.id}} <span>{{item.name}}</span>' +
        '</span>' +
        '</li>' +
        '</ul>',
      bindings: {
        items: '<'
      }
    });

})();
