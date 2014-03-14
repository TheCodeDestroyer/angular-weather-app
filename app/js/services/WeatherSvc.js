'use strict';

/* Services */

angular.module('weatherApp.services').factory('weatherService', ['$http', function ($http) {
    var LS_WEATHER_LOCATION_LIST = 'weatherLocationList';

    function getWeatherByCountry (country) {
        var weather = { };


        return weather;
    }
    return {
        getWeatherList: function () {
            var weatherLocationListJson = window.localStorage.getItem(LS_WEATHER_LOCATION_LIST);
            var weatherLocationList = JSON.parse(weatherLocationListJson);
            var weatherDataList = [];
            if (weatherLocationList) {
                for (var i = 0; i < weatherLocationList.length; i++) {
                    var country = weatherLocationList[i].country;
                    var cityLink = 'http://api.openweathermap.org/data/2.5/weather?q=' + country;
                    $http.get(cityLink).success(function (data) {
                        if (data) {
                            weather.data = data;
                        }
                    });
                    weatherDataList.push(weatherData);
                }
            }

            return weatherDataList;
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