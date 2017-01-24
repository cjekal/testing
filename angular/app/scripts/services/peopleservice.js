'use strict';

/**
 * @ngdoc service
 * @name spikeApp.peopleService
 * @description
 * # peopleService
 * Service in the spikeApp.
 */
angular.module('spikeApp')
  .service('peopleService', function ($http) {
    this.getAll = function() {
      return $http({ method: 'GET', url: 'http://localhost:8080/people' });
    };

    this.addPerson = function(person) {
      return $http({ method: 'POST', url: 'http://localhost:8080/people', data: person });
    };
  });
