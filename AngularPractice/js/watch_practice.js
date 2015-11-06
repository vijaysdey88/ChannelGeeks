demoApp.controller("WatchPracticeController", function($scope, $rootScope, $interval) {
	var model = {};
	$scope.model = model;


	function updateTime() {
		model.manualUpdateTime = new Date();
	}
	$scope.updateTime = updateTime;

	document.getElementById("simpleUpdateTimeButton").addEventListener("click", function() {
		//Doesnt really update if apply or digest is not called...
		// updateTime();
		// $scope.$digest();
		$scope.$apply(updateTime);
	});

	updateTime();

	model.counter = 0;
	$scope.$watch("model.counter", function(newValue, oldValue) {
		console.log('Counter oldvalue:', oldValue, " newValue:", newValue);
		if (newValue % 10 === 0) {
			$scope.model.milestoneMessage = "Milestone reached : " + newValue;
		}
	});

	$interval(function() {
		model.counter++;
	}, 1000);
});


