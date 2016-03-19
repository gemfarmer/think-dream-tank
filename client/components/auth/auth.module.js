'use strict';

angular.module('realizeChangeApp.auth', [
  'realizeChangeApp.constants',
  'realizeChangeApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
