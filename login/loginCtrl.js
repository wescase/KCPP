var app = angular.module('kcpp');

app.controller('loginCtrl', function ($scope, authService, $location, $rootScope) {
  //Step 4 of Registration
  var loginCallback = function(user){
    // user.uid = user.uid.replace('simplelogin:', '');
    $rootScope.$apply(function(){
      $location.path('/edit')
    });
  };

  $scope.login = function () {
    return authService.login(loginCallback);
  };

  //Step 2 of Registration
  $scope.register = function () {
    return authService.register($scope.details, loginCallback);
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