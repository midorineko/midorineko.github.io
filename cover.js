	var app = angular.module('coverApp', ['ngRoute']);


	app.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'homeCtrl'
			})
		  .when('/resume', {
				templateUrl : 'pages/resume/1.html',
				controller  : 'resumeCtrl'
			})
			.otherwise('/');
	});

	app.controller('mainCtrl', function($scope, $rootScope, $location) {

	  $scope.menu = [
	    {label:'Home', route:'/'},
	    {label:'Resume', route:'/resume'}
	   ]

	  $scope.menuActive = '/';

	  $rootScope.$on('$routeChangeSuccess', function(e, curr, prev) {
       $scope.menuActive = $location.path();
    });

	});

	app.controller('homeCtrl', function($scope) {

		$scope.message = 'Mr. CatNaps loves cannabis!';
	});


	app.controller('resumeCtrl', function($scope, $http) {

	});
