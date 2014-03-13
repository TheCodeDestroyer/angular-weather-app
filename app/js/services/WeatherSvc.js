'use strict';

/* Services */

angular.module('weatherApp.services').factory('weatherService', ['$http', function ($http) {
    function getWeatherByCountry (country) {
        var weather = {  };
        var cityLink = 'http://api.openweathermap.org/data/2.5/weather?q=' + country;
        $http.jsonp(cityLink).success(function (data) {
            if (data) {

            }
        });
        return weather;
    }
    return {
        getWeatherList: function () {
            var weatherList = window.localStorage.getItem('weatherList');
            var weatherDataList = [];
            if (weatherList) {
                for (var i = 0; i < weatherList.length; i++) {
                    var weatherData = getWeatherByCountry(weatherList[i]);
                    weatherDataList.push(weatherData);
                }
            }

            return weatherDataList;
        },
        addWeather: function (weather) {
            var weatherList = window.localStorage.getItem('weatherList');
            if (!weatherList) {
                weatherList = [];
            }
            weatherList.push(weather);
            window.localStorage.setItem('weatherList', weatherList);
        }
    };
}]);