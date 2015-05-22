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

app.directive('messagePreview', function(){
	return {
		restrict : "A",
		template :  "<span>Preview {{message}}</span>",
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


