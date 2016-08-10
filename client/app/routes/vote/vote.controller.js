'use strict';

angular.module('realizeChangeApp')
  .controller('VoteCtrl', ['$scope', 'Auth', 'User', 'Dreams', 'UserInfo', '$http', '$rootScope', 'socket', '$timeout', '$state', function ($scope, Auth, User, Dreams, UserInfo, $http, $rootScope, socket, $timeout, $state) {
    $scope.voted = false;
    $scope.slider = {
      value: 3
    };

    var currentUser = User.get();

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.userInfo = UserInfo;

    $scope.currentUser = Auth.getCurrentUser();
    $scope.isLoggedIn = Auth.isLoggedIn();

    $scope.sliderOptions = {
      floor: 1,
      ceil: 5
    };

    $scope.loadRandomGoal = function() {
      $http.get('/api/dreams/random').success(function(dream){
        $scope.dream = dream;
        $scope.goal = dream.world;
      })
    };

    $http.get('/api/dreams').success(function(dreams) {
      $scope.dreams = dreams;

      $scope.userDreams = _.filter($scope.dreams, function(dream) {
        return dream.user_id === currentUser._id;
      })]


      socket.syncUpdates('dream', $scope.dreams);
    });

    $scope.voteThisDream = function(dream){
   		dream.votes ++;
    	$http.put('/api/dreams/random' + dream._id, dream);

    	$scope.voted = true;
    	$timeout(function(){
    		$state.go('results');
    	},500);
    };

    $scope.flagDream = function(dream){
   		dream.flagged = true;
    	$http.put('/api/dreams/' + dream._id, dream);
    };

    $scope.newGoals = function() {
      $scope.loadRandomGoal();
    };
    
    $scope.submitGoal = function() {
      $scope.dream.rating.push(+$scope.slider.value);
      $scope.dream.test='test';
      $http.put('/api/dreams/' + $scope.dream._id, $scope.dream);
    }

  }]);
