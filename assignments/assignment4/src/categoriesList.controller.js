(function () {
'use strict';

angular.module('data')
.controller('CategoryController', CategoryController);

CategoryController.$inject = ['resolvedList'];
function CategoryController (resolvedList) {
	var categoryCtrl = this;
	categoryCtrl.categoryList = resolvedList;
}

})();