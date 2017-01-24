'use strict';

/**
 * @ngdoc function
 * @name spikeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the spikeApp
 */
angular.module('spikeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
