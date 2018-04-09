(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');

	$stateProvider
	.state('categories', {
		url: '/categories',
		templateUrl: 'src/categories.template.html'
	})
	.state('items', {
		url: '/items',
		templateUrl: 'src/items.template.html'
	});
}

})();