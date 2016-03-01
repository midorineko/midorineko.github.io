var app = angular.module('myApp', ['ngRoute']);


app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'homeCtrl'
        })
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutCtrl'
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
        {label:'About', route:'/about'},
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

app.controller('aboutCtrl', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

app.controller('contactCtrl', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});