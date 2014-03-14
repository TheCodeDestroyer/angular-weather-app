'use strict';


// Declare app level module which depends on filters, and services
angular.module('weatherApp', [
    'ngRoute',
    'weatherApp.services',
    'weatherApp.controllers',
    'kendo.directives'
]);

angular.module('weatherApp.controllers', []);
angular.module('weatherApp.services', []);

angular.module('weatherApp').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/weatherList.html', controller: 'WeatherListCtrl'});
    $routeProvider.when('/AddNewLocation', {templateUrl: 'partials/weatherDetail.html', controller: 'WeatherDetailCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);
}]);
