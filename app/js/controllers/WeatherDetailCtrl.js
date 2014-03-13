'use strict';

/* Controllers */

angular.module('weatherApp.controllers').
  controller('WeatherDetailCtrl', ['$scope', '$location', 'weatherService', function($scope, $location, weatherService) {
        $scope.title = 'Add a new location';

        $scope.addWeather = function (weather, form) {
            if (!form.$valid) return;

            weatherService.addWeather(weather);
            $location.url('/');
        };

        $scope.cancelAdd = function () {
            $location.url('/');
        };
  }]);