	var app = angular.module('coverApp', ['ngRoute']);


	app.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'homeCtrl'
			})
		  .when('/resume', {
				templateUrl : 'pages/resume.html',
				controller  : 'resumeCtrl'
			})
		    .when('/bland', {
		  		templateUrl : 'pages/home_bland.html',
		  		controller  : 'blandCtrl'
		  	})
			.otherwise('/');
	});

	app.controller('mainCtrl', function($scope, $rootScope, $location, $route) {

	  $scope.menu = [
	    {label:'Home', route:'/'},
	    {label:'Home Bland', route:'/bland'},
	    {label:'Resume', route:'/resume'}
	   ]

	  $scope.menuActive = '/';

	  $rootScope.$on('$routeChangeSuccess', function(e, curr, prev) {
       $scope.menuActive = $location.path();
       console.log($scope.menuActive)
      });

	});

	app.controller('homeCtrl', function($scope) {

	});

	app.controller('blandCtrl', function($scope) {

	});


	app.controller('resumeCtrl', function($scope, $http) {

	});
