(function () {
	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var toBuyCtrl = this;

		toBuyCtrl.removeItem = function (itemIndex) {
			ShoppingListCheckOffService.removeItemToBuy(itemIndex);
		};

		toBuyCtrl.items = ShoppingListCheckOffService.getItemsToBuy();
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var boughtCtrl = this;

		boughtCtrl.items = ShoppingListCheckOffService.getItemsBought();
	}


	function ShoppingListCheckOffService() {
		var service = this;

		// List of items
		var itemsToBuy = [
			{
				name: "cookies",
				quantity: "10"
			},
			{
				name: "cookies",
				quantity: "10"
			}
		];
		var itemsBought = [
			{
				name: "cookies",
				quantity: "11"
			}
		];

		service.addItem = function (itemName, quantity) {
			var item = {
				name: itemName,
				quantity: quantity
			};

			items.push(item);
		};

		service.removeItemToBuy = function (itemIndex) {
			itemsBought.push(itemsToBuy[itemIndex]);
			itemsToBuy.splice(itemIndex, 1);
		};

		service.getItemsToBuy = function () {
			return itemsToBuy;
		};

		service.getItemsBought = function () {
			return itemsBought;
		};
	}
})()