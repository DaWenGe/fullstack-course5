(function () {
'use strict';

angular.module('lunchCheckerApp', [])
.controller('lunchCheckerController', lunchCheckerController);

lunchCheckerController.$inject = ['$scope'];
function lunchCheckerController($scope) {
	$scope.checkIfTooMuch = function() {
		if ($scope.food) {
			var foodArray = $scope.food.split(',');
			console.log(foodArray);

			if (foodArray.length <= 3) {
				$scope.message = "Enjoy!";
			} else {
				$scope.message = "Too much!";
			}
		} else {
			$scope.message = "Please enter your food first!";
		}
	}
}


})();