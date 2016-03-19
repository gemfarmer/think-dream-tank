'use strict';

angular.module('realizeChangeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('resources', {
        url: '/resources',
        templateUrl: 'app/routes/resources/resources.html',
        controller: 'ResourcesCtrl'
      });
  });