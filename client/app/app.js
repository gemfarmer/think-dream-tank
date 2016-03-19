'use strict';

angular.module('realizeChangeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'angular-google-analytics',
  'leaflet-directive'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, AnalyticsProvider) {

    // Set analytics account
        AnalyticsProvider.setAccount('UA-66043134-1');
        // Track all routes (or not)
        AnalyticsProvider.trackPages(true);

        // Track all URL query params (default is false)
        AnalyticsProvider.trackUrlParams(true);

        // Optional set domain (Use 'none' for testing on localhost)
        AnalyticsProvider.setDomainName('https://frozen-basin-2150.herokuapp.com');

        // Use display features plugin
        AnalyticsProvider.useDisplayFeatures(true);

        // URL prefix (default is empty)
        // - for example: when an app doesn't run in the root directory
        AnalyticsProvider.trackPrefix('think-dream-tank');

        // Use analytics.js instead of ga.js
        AnalyticsProvider.useAnalytics(true);

        // Ignore first page view... helpful when using hashes and whenever your bounce rate looks obscenely low.
        AnalyticsProvider.ignoreFirstPageLoad(true);

        // Enabled eCommerce module for analytics.js (uses legacy ecommerce plugin)
        AnalyticsProvider.useECommerce(true, false);

        // Enabled enhanced eCommerce module for analytics.js (uses ec plugin instead of ecommerce plugin)
        // When enabled, legacy ecommerce plugin calls are not supported
        AnalyticsProvider.useECommerce(true, true);

        // Enable enhanced link attribution
        AnalyticsProvider.useEnhancedLinkAttribution(true);

 
        // Set custom cookie parameters for analytics.js
        AnalyticsProvider.setCookieConfig({
          cookieDomain: 'https://frozen-basin-2150.herokuapp.com',
          cookieName: 'Brian',
          cookieExpires: 20000
        });

        // Change page event name
        AnalyticsProvider.setPageEvent('$stateChangeSuccess');

        // Delay script tag creation
        // must manually call Analytics.createScriptTag(cookieConfig) or Analytics.createAnalyticsScriptTag(cookieConfig)
        AnalyticsProvider.delayScriptTag(true);

    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
    // $AnalyticsProvider.firstPageview(true);  Records pages that don't use $state or $route 
    // $AnalyticsProvider.withAutoBase(true);  /* Records full path */
  })
  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })
  .run(function($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      // console.log('$stateChangeStart', event);
      // console.log('Event', event);
      // console.log('next', next);
      // console.log('next.authenticate', next.authenticate);
      $rootScope.isCollapsed = false;
      Auth.isLoggedInAsync(function(loggedIn) {
        // console.log('loggedIn',loggedIn);
        
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });