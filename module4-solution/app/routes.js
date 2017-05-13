(function() {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
      .otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'views/categories.html',
        controller: 'CategoriesController as ctrl',
        resolve: {
          categoriesList: ['MenuDataService', function(MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
      .state('items', {
        url: '/items/:short_name',
        templateUrl: 'views/items.html',
        controller: 'ItemsController as ctrl',
        resolve: {
          itemsList: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
            return MenuDataService.getItemsForCategory($stateParams.short_name);
          }]
        }
      });

  };

})();
