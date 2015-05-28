app.controller("LoginController", function($scope, $location, LoginService){
	var user = {};
	$scope.user = user;
	user.notAuthenticated = false;

	$scope.login = function() {
		console.log('Login user : ' + user.email + "/" + user.password);

		var onAuthSuccess = function(isAuthenticated){
			console.log('Result of authentication - ' + isAuthenticated);
			if(isAuthenticated) {
				user.notAuthenticated = false;								
				$location.path("/welcome");
			} else {
				user.notAuthenticated = true;
			}
		}
		LoginService.authenticate(user, onAuthSuccess);
	};
});

app.service('LoginService', function($http) {
	
	this.authenticate = function(user, onAuthSuccess) {
		var authRequest = {
			method: "POST",
			url: "http://localhost:8080/SpringMVC/rest/user/isvalid",
			headers: {
   				"Content-Type": "application/json",
   				"Access-Control-Allow-Origin": "*"

 			},
 			data: {
 				email: user.email,
				password: user.password 
 			}
		};
		$http(authRequest)
			.success(function(data, status, headers, config) {
			    console.log('User authentication result - ' + data);
			    onAuthSuccess(data);
			})
			.error(function(data, status, headers, config) {
			   	console.log('Failure while authenticating user - ' + data);
			})
	}
});

app.directive("login", function(){
	return {
		restrict : "E",
		templateUrl : "../template/login.html"
	};
});
