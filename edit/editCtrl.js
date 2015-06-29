var app = angular.module('kcpp');

app.controller('editCtrl', function($scope, authService, $q, $location, userInfo){
	// console.log(userInfo);
	if(userInfo.bio){
		console.log('redirecting');
		$location.path('/home');
	}

	$scope.personInfo = function(newInfo){
		authService.addInfo(newInfo)
	}


});