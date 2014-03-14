'use strict';

/* Controllers */

angular.module('weatherApp.controllers').
  controller('WeatherListCtrl', ['$scope', 'weatherService', function($scope, weatherService) {
        $scope.title = 'Your favorite weather reports';
        $scope.weatherDataList = [];

        weatherService.getWeatherList().then(function (data) {
            $scope.weatherDataList = data;
        }, function (error) {

        });
    }]);