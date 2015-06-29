var app = angular.module('kcpp');

	app.directive('bioDirective', function(){
		return {
			restrict: 'E',
			scope: {
				theUser: "="
			},
			templateUrl: "directives/bioDirective.html",
			link: function(scope, elem, attr){
				console.log(scope.theUser)
				scope.toggle = true;
				elem.on('click', function(){
					console.log('clicked');
					scope.toggle = !scope.toggle;
					scope.$apply();
				})
			}
			
		}
	})