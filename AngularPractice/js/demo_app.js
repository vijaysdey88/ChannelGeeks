var app = angular.module('demoApp', ['ngRoute']);

app.config(function($routeProvider) {
	console.log('Inside Config!!!');
	$routeProvider
		.when("/", {
			templateUrl: "template/main_page.html"
		})
		.when("/welcome/:userEmailId", {
			controller: "UserWelcomeController",
			template: "{{userWelcomeMessage}}",
			resolve: {
				"message": function($q, $timeout, WelcomeService) {
					return WelcomeService.getWelcomeMessage();
				}
			}
		});
});

app.controller("WelcomeController", function($scope) {
	$scope.message = "Type in any message...";
	$scope.logHello = function() {
		console.log("Controller says Hello!!")
	};
});

app.controller("UserWelcomeController", function($scope, message) {
	$scope.userWelcomeMessage = "Message" + message + " !!!";
});

app.factory("WelcomeService", function($http, $route, $q) {
	return {
		getWelcomeMessage: function() {
			var promise = $http.get("http://localhost:8080/SpringMVC/rest/user/sayhello/" + $route.current.params.userEmailId)
				.then(function(response) {
					console.log($route.current.params.userEmailId);
					return response.data.message;
				});
			return promise;
		}
	};
});

app.directive("requiredField", function() {
	return {
		restrict: "E",
		scope: {
			name: "@",
			type: "@",
			model: "=",
			placeholder: "@"
		},
		templateUrl: "../template/requiredField.html"
	};
});


// Basic Behavious
app.directive('messagePreview', function() {
	return {
		restrict: "A",
		template: "<p>Preview {{message}}</p>",
		link: function(scope, element, attributes) {
			console.log('attributes', attributes.messagePreview);
			element.css("color", attributes.messagePreview);
		}
	};
});

app.directive('enter', function() {
	return {
		restrict: "A",
		link: function(scope, element, attributes) {
			element.bind("mouseenter", function() {
				console.log("Content - " + element.text());
				scope.$apply(attributes.enter);
			});
		}
	};
});

// Isolated Scope types
app.controller("CricketController", function($scope) {
	$scope.team = "";
	$scope.sayHello = function(cricketerName) {
		alert("Hello!!! - " + cricketerName);
	};
});

//Attribute bindings - @,==,&
app.directive("cricketer", function() {
	return {
		scope: {
			name: "@",
			team: "=",
			register: "&"
		},
		restrict: "E",
		templateUrl: "../template/cricketer.html"
	};
});

//Zippy
app.directive('zippy', function() {
	return {
		restrict: "E",
		transclude: true,
		scope: {
			title: "@"
		},
		templateUrl: "../template/zippy.html",
		link: function(scope) {
			scope.showContent = false;
			scope.toggleShowContent = function() {
				scope.showContent = !scope.showContent;
				console.log('showContent:', scope.showContent);
			};
		}
	};
});