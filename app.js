var app = angular.module('kcpp', ['ngRoute', 'firebase', 'ngMaterial']);

app.config(function($routeProvider){

		$routeProvider
			.when('/login', {
				templateUrl: 'login/login.html',
				controller: 'loginCtrl'
			})
			.when('/edit', {
				templateUrl: 'edit/edit.html',
				controller: 'editCtrl',
				resolve: {
					userInfo: function(authService) {
						// console.log(authService.getAuth());
						var userId = authService.getAuth().uid.replace('facebook:', '');
						return authService.getUserInfo(userId);
					}
				}
			})
			.when('/home', {
				templateUrl: 'home/home.html',
				controller: 'homeCtlr',
				authRequired: true
			})	
			.when('/thePlayers', {
				templateUrl: 'thePlayers/thePlayers.html',
				controller: 'thePlayersCtlr',
				authRequired: true,
				resolve: {
					users: function(authService){
						return authService.getUsers();
					}
				}
			})
			.when('/about', {
				templateUrl: '',
				controller: '',
				authRequired: true
			})
			.when('/contact', {
				templateUrl: '',
				controller: '',
				authRequired: true
			})
			.otherwise({
				redirectTo: '/login'
			})
});

app.run(function($rootScope, $location, authService) {
	$rootScope.$on("$routeChangeStart", function(event, next, previous, error) {
		var authRequired = null
		if (next && next.$$route && next.$$route.authRequired){
			authRequired = next.$$route.authRequired
		}
		if (authRequired && !authService.getAuth()) {
	    	$location.path("/login");
		}
	});
});