	var app = angular.module('myApp', ['ngRoute']);


	app.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'homeCtrl'
			})
			.when('/kasper', {
				templateUrl : 'pages/kasper.html',
				controller  : 'kasperCtrl'
			})
		  .when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactCtrl'
			})
			.otherwise('/');
	});

	app.controller('mainCtrl', function($scope, $rootScope, $location) {
	  
	  $scope.menu = [
	    {label:'Home', route:'/'},
	    {label:'Kasper', route:'/kasper'},
	    {label:'Contact', route:'/contact'}
	   ]
	  
	  $scope.menuActive = '/';
	  
	  $rootScope.$on('$routeChangeSuccess', function(e, curr, prev) {
       $scope.menuActive = $location.path();
    });
		
	});
	
	app.controller('homeCtrl', function($scope) {
		
		$scope.message = 'Everyone come and see how good I look!';
	});

	app.controller('kasperCtrl', function($scope) {
		$scope.message = 'I love Kasper the Ghostie! Soon he will be able to do all this too!';
	});

	app.controller('contactCtrl', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});