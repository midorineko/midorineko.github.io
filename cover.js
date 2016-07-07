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
		    .when('/clean', {
		  		templateUrl : 'pages/clean.html',
		  		controller  : 'cleanCtrl'
		  	})
			.otherwise('/');
	});

	app.controller('mainCtrl', function($scope, $rootScope, $location, $route) {

	  $scope.menu = [
	    {label:'Home', route:'/'},
	    {label:'Clean Website', route:'/clean'},
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

	app.controller('cleanCtrl', function($scope) {
		var url = "http://www.steveninouye.me";
		window.location = url;
	});



	app.controller('resumeCtrl', function($scope, $http) {
		var url = "https://docs.google.com/document/d/1lsEeOKXlhtyV2OkoAM0Z-um6U5dElweBuim3LFREOj0/edit?usp=sharing";
		window.location = url;
	});
