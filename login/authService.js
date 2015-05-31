var app = angular.module('kcpp');

app.service('authService', function($firebaseAuth){
  var firebaseUrl = 'https://kcpp.firebaseio.com/'

  var fbRef = new Firebase(firebaseUrl);
  var userRef = new Firebase(firebaseUrl + 'users')
  var authObj = $firebaseAuth(fbRef);

  var User = function(object){
      this.id = object.facebook.id
      this.name = object.facebook.name
      this.picture = object.facebook.cachedUserProfile.picture.data.url
  };

  this.login = function(cb){
    fbRef.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData)
          // var obj = $firebaseObject(ref);
            // obj.foo = "bar";
            // obj.$save().then(function(ref) {
            //   ref.key() === obj.$id; // true
            // }, function(error) {
            //   console.log("Error:", error);
            // });
          //angularFire saving user array to database
        cb();
      }
    });
  };

});