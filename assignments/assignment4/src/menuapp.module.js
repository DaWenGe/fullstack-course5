(function () {
'use strict';

angular.module('MenuApp', ['data', 'ui.router']);

angular.module('MenuApp')
.config(MenuAppConfig);

MenuAppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function MenuAppConfig($stateProvider, $urlRouterProvider) {
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