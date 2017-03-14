angular.module('ngPixelBoard', [])

	// inject the Todo service factory into our controller
	.controller('pixelBoardController', function($scope, $http) {
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
		$scope.users = {};
		$scope.pictures = {};

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


		$http.get('/users')
			.success(function(data) {
				$scope.users = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});

		$scope.createUser = function(){
			$http.post('/users') //create picture data
			.success(function(data){
				console.log("Successfully created picture: ", data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
		};



		$scope.getPictures = function(){
			$http.get('/pictures')
				.success(function(data){
					$scope.pictures = data;
				})
				.error(function(data) {
					console.log('Error: ' + data);
			});
		};


		$scope.createPicture = function(){
			var data = {};
			data.picture_id = 3;
			data.user_id = 2;
			data.picture_name = $scope.picture_name;
			data.pixels = JSON.stringify($scope.pixelBoard);
			// data.pixels = json.stringify($scope.pixelBoard);
			console.log("DATA -------------------------: ", data);

			$http.post('/pictures', data) //create picture data
				.success(function(data){
					console.log("Successfully created picture: ", data);
					$scope.pictures = data;
					console.log("data in create pictue function");
				})
				.error(function(data) {
					console.log('Error: ' + data);
				});
		}



	});
