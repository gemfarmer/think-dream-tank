'use strict';

angular.module('realizeChangeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dreams', {
        url: '/dreams',
        templateUrl: 'app/routes/dreams/dreams.html',
        controller: 'DreamsCtrl',
        authenticate: true
      });
  });