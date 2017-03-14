angular.module('ngPixelBoard', [])

	// inject the Todo service factory into our controller
	.controller('pixelBoardController', function($scope) {
		$scope.pixelBoard = [0, 0, 0, 0];

		$scope.togglePixel = function(pixelIndex){
			if($scope.pixelBoard[pixelIndex] === 0){
				$scope.pixelBoard[pixelIndex] = 1;
			} else {
				$scope.pixelBoard[pixelIndex] = 0;
			}
		}

	});
