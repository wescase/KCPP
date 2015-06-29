var app = angular.module('kcpp');

app.service('authService', function($firebaseAuth, $firebaseArray, $firebaseObject, $q, $location){
  var firebaseUrl = 'https://kcpp.firebaseio.com/'

  var fbRef = new Firebase(firebaseUrl);
  var userRef = new Firebase(firebaseUrl + 'users')
  var authObj = $firebaseAuth(fbRef);

  var User = function(object){
      this.id = object.facebook.id
      this.name = object.facebook.displayName
      this.picture = object.facebook.cachedUserProfile.picture.data.url
  };

  this.login = function(cb){
    fbRef.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        // console.log("Authenticated successfully with payload:", authData)
        var newUser = new User(authData)
        var userObj = $firebaseObject(userRef.child(newUser.id))
        userObj.$loaded(function(){
          userObj.id = newUser.id;
          userObj.name = newUser.name;
          userObj.picture = newUser.picture;
          userObj.$save();
        });
        localStorage.uid = JSON.stringify(newUser.id)
        cb(authData)
      }
    }, {
      remember: "sessionOnly",
      scope: "email,user_likes"
    });
  };


  this.addInfo = function(newInfo){

    var obj = $firebaseObject(userRef.child(JSON.parse(localStorage.uid)));
    obj.$loaded()
      .then(function(data) {
        obj.bio = newInfo;
        obj.$save().then(function(userRef) {
          userRef.key() === obj.$id; // true
        }, function(error) {
          console.log("Error:", error);
        });
          // console.log(data === obj); // true
        }).catch(function(error) {
        console.error("Error:", error);
      }).then(function(){
        $location.path('/home');
      });
    }


  this.getAuth = function(){
    return fbRef.getAuth();
  }

  this.getUserInfo = function(userId){
    return $firebaseObject(new Firebase(firebaseUrl + 'users/' + userId)).$loaded();
  }

  this.getUsers = function(){
    return $firebaseArray(new Firebase(firebaseUrl + 'users/'));
  }

});



