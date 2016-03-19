'use strict';

angular.module('realizeChangeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dreaming', {
        url: '/dreaming',
        templateUrl: 'app/routes/dreaming/dreaming.html',
        controller: 'DreamingCtrl',
        authenticate: true
      });
  });