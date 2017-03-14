angular.module('todoService', [])

	// super simple service
	// each function returns a promise object
	.factory('PixelBoard',function($http) {

	  var getAll = function () {
	    return $http({
	      method: 'GET',
	      url: //'/api/links' //instead needs to request from database
	    })
	    .then(function (resp) {
	      return resp.data;
	    });
	  };

	  var addPixelBoard = function (pixelBoard) {
	    return $http({
	      method: 'POST',
	      url: //'/api/links', //'/api/links' //instead needs to request from database
	      data: pixelBoard //{pixelboard: [0, 0, 1, 1]}
	    });
	  };

	  return {
	    getAll: getAll,
	    addPixelBoard: addPixelBoard
	  };

	});


	// var User = mongoose.model("User", {
	// 	user_id: Number, //primary key here ==> connects to Picture.user_id
	// 	user_name: String,
	// });

	// var Picture = mongoose.model("Picture", {
	// 	picture_id: Number,
	// 	user_id: Number,
	// 	picture_name: String,
	// 	pixels: String
	// })

	// function insertUser(){
	// 	if(user doesnt exist){
	// 		var users = new User({
	// 			user_id: ,//autoincrement
	// 			user_name: //username
	// 		})
	// 	}
	// }

	// function insertPicture(){
	// 		var pictures = new Picture({
	// 			picture_id: ,//autoincrement
	// 			user_id: , //pull from users table based off username
	// 			picture_name: $scope.picture_name,//username
	// 			pixels: $scope.pixelBoard
	// 		})
	// 	}
	// }

























