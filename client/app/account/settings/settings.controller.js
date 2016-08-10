'use strict';

angular.module('realizeChangeApp')
  .controller('SettingsCtrl', function ($scope, User, UserInfo, Auth) {
    $scope.errors = {};
    $scope.user = {};
    $scope.userInfo = UserInfo;

    var currentUser = User.get();

    $scope.updateChange = function(shareStatus){
      $scope.submitted = true;
      $scope.UserInfo = !UserInfo;
      currentUser.share = shareStatus;

      $scope.message = "share status changed successfully.";
      User.update(currentUser);
    }

    $scope.changePassword = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
        .then( function() {
          $scope.message = 'Password successfully changed.';
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
          $scope.message = '';
        });
      }
		};
  });
