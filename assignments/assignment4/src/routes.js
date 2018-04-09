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
		templateUrl: 'src/template/categories.template.html',
		controller: 'CategoryController as categoryCtrl',
		resolve: {
			resolvedList: ['MenuDataService', function (MenuDataService) {
				return MenuDataService.getAllCategories()
					.then(function (response){
						console.log(response);
						return response.data;
					});
			}]
		}
	})
	.state('items', {
		url: '/items',
		templateUrl: 'src/template/items.template.html'
	});
}

})();