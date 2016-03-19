'use strict';

angular.module('realizeChangeApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User, socket) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();

    $http.get('/api/dreams').success(function(dreams) {
      $scope.dreams = dreams;
      socket.syncUpdates('dream', $scope.dreams);
    });

    $scope.deleteDream = function(dream) {
      $http.delete('/api/dreams/' + dream._id);
    };

    $scope.unflag = function(dream){
      dream.flagged = false;
      $http.put('/api/dreams/' + dream._id, dream);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('dreams');
    });


    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };
  });
