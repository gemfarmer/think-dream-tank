'use strict';

angular.module('realizeChangeApp')
  .controller('VoteCtrl', function ($scope, $http, socket, $timeout, $state) {
    $scope.voted = false;

    $http.get('/api/dreams/random').success(function(dream) {
        $scope.dream = dream;
        // console.log('random draem', dream)
        // socket.syncUpdates('dream', $scope.dream);
      });
      $scope.loadRandomTwo = function(){
  	    $http.get('/api/dreams/randomTwo').success(function(randomDreams) {
  	      $scope.randomDreams = randomDreams;
  	      // console.log('randomTwo draem', randomDreams)
  	      // socket.syncUpdates('dream', $scope.dream);
  	    });
  	};
  	$scope.loadRandomTwo();
    $scope.voteThisDream = function(dream){
   		dream.votes ++;
    	$http.put('/api/dreams/' + dream._id, dream);

    	$scope.voted = true;
    	$timeout(function(){
    		$state.go('results');
    	},500);
    };

    $scope.flagDream = function(dream){
   		dream.flagged = true;
    	$http.put('/api/dreams/' + dream._id, dream);
    	
    	$timeout(function(){
    		$scope.loadRandomTwo();
    	},500);
    };

    $scope.newGoals = function() {
      $scope.loadRandomTwo();
    };
 
  });
