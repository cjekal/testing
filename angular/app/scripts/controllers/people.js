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
      var person = { fullName: $scope.fullName, jobTitle: $scope.jobTitle };
      peopleService.addPerson(person).then(function() {
        $scope.awesomeThings.push(person);
        $scope.fullName = '';
        $scope.jobTitle = '';
      });
    };
  });
