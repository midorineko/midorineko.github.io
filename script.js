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

	app.controller('kasperCtrl', function($scope, $http) {

		$scope.message = 'Click and hold to access larger image! Mrow...';
		$scope.getNumber = function(num) {
		    return new Array(num);   
		}
		$scope.image_array = [];
		   $http.get('http://cors.io/?u=http://github.com/midorineko/midorineko.github.io/tree/master/cannabis_pics')
		       .success(function(data, status, headers, config) {
		           if (data && status === 200) {
		               var can_regex = /<a href="(.*?)"/g;
		               var res = data.match(can_regex);
		               for (var i = 0; i < res.length; i++) { 
		                   var href_name = res[i]
		                   href_name = href_name.match(/"([^"]+)"/)[1]; //have to add if statementfor doesn't exist
		                   var last_three = href_name.slice(-4);
		                   var img_tags = ['.jpg', '.JPG', '.png' ,'.PNG' ,'jpeg' ,'JPEG', '.bmp', '.BMP', '.gif', '.GIF']
		                   if (img_tags.indexOf(last_three) >= 0){
		                   	href_name = /[^/]*$/.exec(href_name)[0];
		                   	 $scope.image_array.push(href_name);
		                   }
		               }

		           }
		       })
		       .error(function(data, status) {
		         console.error('Repos error', status, data);
		       });
	});


	app.directive('onErrorSrc', function() {
	    return {
	        link: function(scope, element, attrs) {
	          element.bind('error', function() {
	            if (attrs.src != attrs.onErrorSrc) {
	            	element.addClass("hiddenClass");
	              attrs.$set('src', attrs.onErrorSrc);
	            }
	          });
	        }
	    }
	});


	app.controller('wateringCtrl', function($scope, $http) {
		// https://docs.google.com/spreadsheets/d/1xlOorpivOmFpEcWvCKn_rF9yRMGUNEB9JaIE4-ZUtAU/edit#gid=0
		var url = 'https://spreadsheets.google.com/feeds/list/1xlOorpivOmFpEcWvCKn_rF9yRMGUNEB9JaIE4-ZUtAU/od6/public/values?alt=json'
		var parse = function(entry) {
		  // console.log(entry);
		  var box = entry['gsx$box']['$t'];
		  var calmg = entry['gsx$calmg']['$t'];
		  var nutes = entry['gsx$nutepercent']['$t'];
		  var date = entry['gsx$date']['$t'];
		  var hourWater = entry['gsx$hourwatermilitary']['$t'];
		  var waterGallon = entry['gsx$water12gallon']['$t'];
		  var hoursLightOn = entry['gsx$hourslighton']['$t'];
		  var extra = entry['gsx$extra']['$t'];
		  var issues = entry['gsx$issues']['$t'];
		    if (nutes != 'none'){
		  	nutes = eval(nutes).join(", ")
		  }
		  if (extra != 'none'){
		  	extra = eval(extra).join(", ")
		  }
		  veep = {
		    box: box,
		    calmg: calmg,
		    nutes: nutes,
		    date: date,
		    hourWater: hourWater,
		    waterGallon: waterGallon,
		    hoursLightOn: hoursLightOn,
		    extra: extra,
		    issues: issues,
		    url: url
		  };
		  console.log(veep)
		  return veep
		}
		$http.get(url)
		.success(function(response) {
		  var entries = response['feed']['entry'];
		  $scope.parsedWateringSheet = [];
		  for (var key in entries) {
		    var content = entries[key];
		    $scope.parsedWateringSheet.push(parse(content));
		  }
		});




		$scope.message = 'This will contain a watering schedule.';
	});
