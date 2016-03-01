	var app = angular.module('cannabisApp', ['ngRoute']);


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
		  .when('/watering', {
				templateUrl : 'pages/watering.html',
				controller  : 'wateringCtrl'
			})
			.otherwise('/');
	});

	app.controller('mainCtrl', function($scope, $rootScope, $location) {

	  $scope.menu = [
	    {label:'Home', route:'/'},
	    {label:'Kasper', route:'/kasper'},
	    {label:'Watering', route:'/watering'}
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

	app.controller('wateringCtrl', function($scope, $http) {
		// https://docs.google.com/spreadsheets/d/1xlOorpivOmFpEcWvCKn_rF9yRMGUNEB9JaIE4-ZUtAU/edit#gid=0
		var url = 'https://spreadsheets.google.com/feeds/list/1xlOorpivOmFpEcWvCKn_rF9yRMGUNEB9JaIE4-ZUtAU/od6/public/values?alt=json'
		var parse = function(entry) {
		  console.log(entry);
		  var category = entry['gsx$box']['$t'];
		  var description = entry['gsx$calmg']['$t'];
		  var title = entry['gsx$nutepercent']['$t'];
		  veep = {
		    category: category,
		    description: description,
		    title: title,
		    url: url
		  };
		  console.log(veep)
		  return veep
		}
		$http.get(url)
		.success(function(response) {
		  var entries = response['feed']['entry'];
		  $scope.parsedEntries = [];
		  for (var key in entries) {
		    var content = entries[key];
		    $scope.parsedEntries.push(parse(content));
		  }
		});




		$scope.message = 'This will contain a watering schedule.';
	});
