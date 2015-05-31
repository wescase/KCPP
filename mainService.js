var app = angular.module('kcpp');

app.service('mainService', function($q, $http){

	this.getUser = function(){
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: 'https://graph.facebook.com/v2.3/' + userId + '/picture'
		})
	}
	
})