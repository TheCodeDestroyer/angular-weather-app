'use strict';

/* Controllers */

angular.module('weatherApp.controllers').
  controller('WeatherListCtrl', ['$scope', 'weatherService', function($scope, weatherService) {
        $scope.title = 'Your favorite weather reports';

        var weatherList = weatherService.getWeatherList();
        $scope.weatherDataList = weatherList;
    }]);