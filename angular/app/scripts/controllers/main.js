'use strict';

/**
 * @ngdoc function
 * @name spikeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spikeApp
 */
angular.module('spikeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
