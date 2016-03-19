'use strict';

angular.module('realizeChangeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('vote', {
        url: '/vote',
        templateUrl: 'app/routes/vote/vote.html',
        controller: 'VoteCtrl',
        authenticate: true
      });
  });