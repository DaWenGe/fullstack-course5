(function () {
'use strict';

angular.module('data')
.controller('CategoryController', CategoryController);

CategoryController.$inject = ['resolvedList'];
// CategoryController.$inject = ['MenuDataService'];
function CategoryController (resolvedList) {
	var categoryCtrl = this;
	// categoryCtrl.testArray = MenuDataService.getAllCategories();
	categoryCtrl.categoryList = resolvedList;
	console.log(resolvedList)
	// console.log(categoryCtrl.testArray);
}

})();