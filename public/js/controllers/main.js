angular.module('ngPixelBoard', [])

	// inject the Todo service factory into our controller
	.controller('pixelBoardController', function($scope) {
		// $scope.pixelBoard = [0, 0, 0, 0];
		$scope.pixelBoard = [
			[0, 1, 1, 1, 0],
			[0, 1, 0, 1, 0],
			[0, 1, 0, 1, 0],
			[0, 1, 0, 1, 0],
			[0, 1, 1, 1, 0],
		];

		$scope.colorPal = [0, 1]


		$scope.paintBrush = 1;

		$scope.togglePixel = function(rowIndex, pixelIndex){
			// if($scope.pixelBoard[rowIndex][pixelIndex] === 0){
			// 	$scope.pixelBoard[rowIndex][pixelIndex]  = 1;
			// 	// $scope.pixelBoard[rowIndex][pixelIndex]  = $scop.currentColor;
			// } else {
			// 	$scope.pixelBoard[rowIndex][pixelIndex]  = 0;
			// }
			$scope.pixelBoard[rowIndex][pixelIndex]  = $scope.paintBrush
		}

		$scope.choosePixel = function(rowIndex, pixelIndex, pixelColorPropertyPointer){
			$scope.pixelBoard[rowIndex][pixelIndex] = pixelColorPropertyPointer;
		}

		$scope.pixelClassAtIndex = function(rowIndex, pixelIndex){
			if($scope.pixelBoard[rowIndex][pixelIndex] === 0){
				return "white";
			} else {
				return "black";
			}
		}

		$scope.changeMarker = function(index){
			console.log("logging")
			$scope.paintBrush = $scope.colorPal[index];
		}

	});
