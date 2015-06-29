var app = angular.module('kcpp');

app.controller('thePlayersCtlr', function($scope, authService, users){

	// $scope.users = function(){
	// 	authService.getUserInfo();
	// }

	$scope.users = users;
})