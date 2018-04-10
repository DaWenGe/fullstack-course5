(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');

	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'src/template/home.template.html'
	})
	.state('categories', {
		url: '/categories',
		templateUrl: 'src/categoriesList.html',
		controller: 'CategoryController as categoryCtrl',
		resolve: {
			resolvedList: ['MenuDataService', function (MenuDataService) {
				return MenuDataService.getAllCategories()
					.then(function (response){
						return response.data;
					});
			}]
		}
	})
	.state('items', {
		url: '/items/{shortName}',
		templateUrl: 'src/itemDetail.html',
		controller: 'ItemListController as itemList',
		resolve: {
			resolvedItemList: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
				return MenuDataService.getItemsForCategory($stateParams.shortName)
					.then(function (response) {
						return response.data.menu_items;
					});
			}]
		}
	});
}

})();