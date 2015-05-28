app.controller("LoginController", function($scope, $location, LoginService){
	var user = {};
	$scope.user = user;
	user.notAuthorized = false;

	$scope.login = function() {
		console.log('Login user : ' + user.email + "/" + user.password);
		if(LoginService.isAuthorized(user)) {
			user.notAuthorized = false;
			console.log("Login success :) ");
			$location.path("/hello/" + user.email);
		} else {
			user.notAuthorized = true;
			console.log("Login failure :( ");
		}
	};
});

app.service('LoginService', function() {
	this.isAuthorized = function(user) {
		if("vd@c" === user.email && "vd" === user.password) {
			return true;
		} else {
			return false;
		}
	};
});

app.directive("login", function(){
	return {
		restrict : "E",
		templateUrl : "../template/login.html"
	};
});
