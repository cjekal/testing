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
  });
