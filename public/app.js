var app = angular.module('HwList', []);

app.factory('Homework', function() {
	var data = [
		{
			assignment: 'Test First Javascript',
			url: 'https://github.com/alexyining/FullstackTestFirst',
			status: 'completed'
		},

		{
			assignment: 'Angular Day 1',
			url: 'https://github.com/alexyining/flashcards-day1',
			status: 'completed'
		},

		{
			assignment: 'Angular Day 2',
			url: 'https://github.com/alexyining/flashcards-day2',
			status: 'completed'
		}
	];

	return data;
});

app.controller('MainController', function($scope, Homework) {
	$scope.hwlist = Homework;
});

app.controller('HwController', function($scope) {
	$scope.click = function() {
		$scope.clicked=true;
	}
})