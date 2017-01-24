'use strict';

/**
 * @ngdoc overview
 * @name spikeApp
 * @description
 * # spikeApp
 *
 * Main module of the application.
 */
angular
  .module('spikeApp', [
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/people', {
        templateUrl: 'views/people.html',
        controller: 'PeopleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
