app.controller("LoginController", function($scope, $location, LoginService){
	var user = {};
	$scope.user = user;
	user.notAuthorized = false;

	$scope.login = function() {
		console.log('Login user : ' + user.email + "/" + user.password);
		if(LoginService.authenticate(user)) {
			user.notAuthorized = false;
			console.log("Login success :) ");
			$location.path("/hello/" + user.email);
		} else {
			user.notAuthorized = true;
			console.log("Login failure :( ");
		}
	};
});

app.service('LoginService', function($http) {

	// $http.defaults.headers.put = {
 	//        'Access-Control-Allow-Origin': '*',
 	//        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
 	//        'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
 	//        };
	// delete $http.defaults.headers.common['X-Requested-With'];
	// $http.defaults.useXDomain = true;

	this.isAuthorized = function(user) {
		if("vd@c" === user.email && "vd" === user.password) {
			return true;
		} else {
			return false;
		}
	};

	this.authenticate = function(user) {
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

		//$http.post("http://localhost:8080/SpringMVC/rest/user/isvalid", authRequest).
		$http(authRequest).
		success(function(data, status, headers, config) {
		    console.log('User authentication result - ' + data);
		}).
		error(function(data, status, headers, config) {
		   	console.log('Failure while authenticating user - ' + data);
		});
	}
});

app.directive("login", function(){
	return {
		restrict : "E",
		templateUrl : "../template/login.html"
	};
});
