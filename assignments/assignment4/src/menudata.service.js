(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('CategoryPath', "https://davids-restaurant.herokuapp.com/categories.json")
.constant('MenuItemsPath', "https://davids-restaurant.herokuapp.com/menu_items.json?category=");

MenuDataService.$inject = ['$http', 'CategoryPath', 'MenuItemsPath'];
function MenuDataService ($http, CategoryPath, MenuItemsPath) {
	var service = this;

	service.getAllCategories = function () {
		console.log('HERE!');
		return $http({
			method: 'GET',
			url: CategoryPath
		});
	};

	service.getItemsForCategory = function (categoryShortName) {
		return $http({
			method: 'GET',
			url: MenuItemsPath
		});
	};
}

})();