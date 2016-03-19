'use strict';

angular.module('realizeChangeApp')
  .controller('MainCtrl', [ '$scope', '$http', 'socket', '$window', 'Auth', 'Dreams', 'User', '$modal', function ($scope, $http, socket, $window, Auth, Dreams, User, $modal) {
    // $scope.awesomeThings = [];
    $scope.dreaming = {};
    $scope.currentUser = Auth.getCurrentUser();
    $scope.isLoggedIn = Auth.isLoggedIn();

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };

    $scope.addDreams = function() {
      if($scope.dreaming === {}) {
        return;
      }
      
      var newDream = { 
        future: $scope.dreaming.future, 
        world : $scope.dreaming.world,  
        votes: 0, 
        location: $scope.currentUser.location,
        /* jshint ignore:start */
        user_id: $scope.currentUser._id
        /* jshint ignore:end */
      };
      
      console.log('------');
      console.log(newDream, $scope.currentUser);
      
      Dreams.add(newDream);
      $scope.dreaming = {};
      $scope.formSubmitted = true;
    };

    $scope.openWarmupModal = function () {
      $modal.open({
        templateUrl: 'app/main/warmupModal.html',
        controller: 'warmupModalCtrl'
      });
  };

  }]).controller('warmupModalCtrl', [ function () { 
    
  }]);
  
