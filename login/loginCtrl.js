var app = angular.module('kcpp');

app.controller('loginCtrl', function ($scope, authService, $location, $rootScope) {

  var loginCallback = function(authData){
    $rootScope.$apply(function(){
       // console.log(authData)
      $location.path('/edit')
    });
  };

  $scope.login = function () {
    authService.login(loginCallback);
  };

  $scope.status = 'Register';
  $scope.showReg = function(){
    if($scope.status === 'Register'){
      $scope.status = 'Login';
    } else {
      $scope.status = 'Register';
    }
    $scope.reg = !$scope.reg;
  };
});