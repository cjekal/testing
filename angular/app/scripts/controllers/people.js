'use strict';

/**
 * @ngdoc function
 * @name spikeApp.controller:PeopleCtrl
 * @description
 * # PeopleCtrl
 * Controller of the spikeApp
 */
angular.module('spikeApp')
  .controller('PeopleCtrl', function ($scope, peopleService) {
    $scope.awesomeThings = null;
    peopleService.getAll().then(function(people) {
      $scope.awesomeThings = people.data;
    });

    $scope.create = function() {
      peopleService.addPerson({ fullName: $scope.fullName, jobTitle: $scope.jobTitle }).then(function() {
        $scope.fullName = '';
        $scope.jobTitle = '';
      });
    };
  });
