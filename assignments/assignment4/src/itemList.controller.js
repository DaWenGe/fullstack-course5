(function () {
'use strict';

angular.module('data')
.controller('ItemListController', ItemListController);

ItemListController.$inject = ['resolvedItemList'];
function ItemListController(resolvedItemList) {
	var itemList = this;
	itemList.itemsArray = resolvedItemList;
}

})();