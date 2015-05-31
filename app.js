var app = angular.module('kcpp', ['ngRoute', 'firebase']);

app.config(function($routeProvider){

		$routeProvider
			.when('/login', {
				templateUrl: 'login/login.html',
				controller: 'loginCtrl'
			})
			.when('/edit', {
				templateUrl: 'edit/edit.html',
				controller: 'editCtrl'
			})
			.when('/home', {
				templateUrl: 'home/home.html',
				controller: 'homeCtlr'
			})
			.when('/thePlayers', {
				templateUrl: 'thePlayers/thePlayers.html',
				controller: 'thePlayersCtlr'
			})
			.when('/about', {
				templateUrl: '',
				controller: ''
			})
			.when('/contact', {
				templateUrl: '',
				controller: ''
			})
			.otherwise({
				redirectTo: '/login'
			})
})