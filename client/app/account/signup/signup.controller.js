'use strict';

angular.module('realizeChangeApp')
  .controller('SignupCtrl', function ($scope, Auth, $location, $window) {
    $scope.user = {};
    $scope.errors = {};

    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {

        var createUser = function(location) {
          Auth.createUser({
            name: $scope.user.name,
            email: $scope.user.email,
            password: $scope.user.password,
            location: {
              latitude: location ? +location.coords.latitude : null,
              longitude: location ? +location.coords.longitude : null,
              zip: +$scope.user.zip
            }
          })
          .then( function() {
            // Account created, redirect to home
            $location.path('/');
          })
          .catch( function(err) {
            err = err.data;
            $scope.errors = {};

            // Update validity of form fields that match the mongoose errors
            angular.forEach(err.errors, function(error, field) {
              form[field].$setValidity('mongoose', false);
              $scope.errors[field] = error.message;
            });
          });
        };

        navigator.geolocation.getCurrentPosition(function(location){
          // console.log(location);
          createUser(location);
        }, function(er) {
          console.warn('secon handler', er);
          createUser();
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
