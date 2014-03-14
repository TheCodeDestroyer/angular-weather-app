'use strict';

/* Services */

angular.module('weatherApp.services').factory('weatherService', ['$http', function ($http) {
    var LS_WEATHER_LOCATION_LIST = 'weatherLocationList';

    return {
        getWeatherList: function () {
            var weatherLocationListJson = window.localStorage.getItem(LS_WEATHER_LOCATION_LIST);
            var weatherLocationList = JSON.parse(weatherLocationListJson);
            var weatherDataList = [];
            var promise;
            if (weatherLocationList) {
                for (var i = 0; i < weatherLocationList.length; i++) {
                    var weather = {};
                    var country = weatherLocationList[i].country;
                    var cityLink = 'http://api.openweathermap.org/data/2.5/weather?q=' + country + '&units=metric';
                    promise = $http.get(cityLink).then(function (result) {
                        if (result.data) {
                            weather = result.data;
                            weatherDataList.push(weather);
                            return weatherDataList;
                        }
                    });
                }
                return promise;
            }
        },
        addWeather: function (weather) {
            var weatherLocationListJson = window.localStorage.getItem(LS_WEATHER_LOCATION_LIST);
            var weatherLocationList = JSON.parse(weatherLocationListJson);

            if (!weatherLocationList) {
                weatherLocationList = [];
            }

            weatherLocationList.push(weather);
            var weatherLocationListJson = JSON.stringify(weatherLocationList);
            window.localStorage.setItem(LS_WEATHER_LOCATION_LIST, weatherLocationListJson);
        }
    };
}]);