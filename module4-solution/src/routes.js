(function(){

  'use strict';

  angular.module("MenuApp")
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
      url: "/",
      templateUrl: "src/template/home.template.html"
    })
    .state('categories', {
      url: "/categories",
      templateUrl: "src/template/category.template.html",
      controller: 'CategoryListController as categoryList',
      resolve: {
        items: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('itemDetail', {
      url: '/items/{categoryShortName}',
      templateUrl: 'src/template/item.template.html',
      controller: 'ItemController as itemDetail',
      resolve: {
        items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    });
  }
})();
