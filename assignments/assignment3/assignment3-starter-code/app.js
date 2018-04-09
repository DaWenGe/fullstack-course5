(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.directive('foundItems', FoundItemsDirective)
.service('MenuSearchService', MenuSearchService)
.constant('MenuItemsPath', "https://davids-restaurant.herokuapp.com/menu_items.json");

function FoundItemsDirective() {
	var ddo = {
		restrict: 'E',
		templateUrl: 'foundItemsList.html',
		scope: {
			foundItems: '<',
			onRemove: '&'
		},
		controller: FoundItemsDirectiveController,
		controllerAs: 'ctrl',
		bindToController: true
	};

	return ddo;
}

function FoundItemsDirectiveController() {
	var ctrl = this;

	ctrl.checkEmptyList = function () {
		if (ctrl.foundItems) {
			return ctrl.foundItems.length > 0;			
		}
	}
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
	var ctrl = this;

	ctrl.onSearch = function () {
		console.log("searchTerm: ", ctrl.searchTerm);
		var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
		promise.then(function (response) {
			ctrl.foundItems = response;
		})
		.catch(function(error) {
			console.log("Something went wrong!", error);
		});
	};

	ctrl.removeItem = function (index) {
		console.log("here!");
		ctrl.foundItems.splice(index, 1);
	};
}

MenuSearchService.$inject = ['$http', 'MenuItemsPath'];
function MenuSearchService ($http, MenuItemsPath) {
	var service = this;

	service.getMatchedMenuItems = function (searchTerm) {
		return $http({
			method: 'GET',
			url: MenuItemsPath
		})
		.then(function (response) {
			var foundItems = [];
			var allItems = response.data.menu_items;

			if (searchTerm !== "") {
				for (var i = 0; i < allItems.length ; i++) {
					var item = allItems[i];
					if (item.description.includes(searchTerm)) {
						foundItems.push(item);
					}
				}
				console.log("foundItems: ", foundItems);
			}

			return foundItems;
		})
		.catch(function (error) {
			console.log("Something went wrong!", error);
		});
	};
}

})();