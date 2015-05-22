var app = angular.module('demoApp', []);


app.controller("LoginController", function($scope){

});

app.directive("login", function(){
	return {
		restrict : "E",
		templateUrl : "../template/login.html"
	};
});

//Practice Directives
app.controller("HelloController", function($scope){
	$scope.logHello = function() {
		console.log("Controller says Hello!!")
	};
});

// Basic Behavious
app.directive('messagePreview', function(){
	return {
		restrict : "A",
		template :  "<p>Preview {{message}}</p>",
		link: function(scope, element, attributes){
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

//Attribute binding - @
app.directive("cricketer", function() {
	return {
		scope :{
			name : "@",
			team : "=",
			register : "&"
		},
		restrict: "E",
		templateUrl: "../template/cricketer.html"
	};
});


