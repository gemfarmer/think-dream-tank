'use strict';

angular.module('realizeChangeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('results', {
        url: '/results',
        templateUrl: 'app/routes/results/results.html',
        controller: 'ResultsCtrl',
        authenticate: true
      });
  });