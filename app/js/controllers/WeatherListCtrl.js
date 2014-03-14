'use strict';

/* Controllers */

angular.module('weatherApp.controllers').
    controller('WeatherListCtrl', ['$scope', 'weatherService', function ($scope, weatherService) {
        $scope.title = 'Your favorite weather reports';
        $scope.weatherDataList = [];
        $scope.template = $("#template").html();

        var weatherListPromise = weatherService.getWeatherList();
        if (weatherListPromise) {
            weatherListPromise.then(function (data) {
                $scope.weatherDataList = new kendo.data.DataSource({ data: data });
            });
        }
    }]);