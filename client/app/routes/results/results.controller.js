'use strict';

angular.module('realizeChangeApp')
  .controller('ResultsCtrl', function ($scope, $http, socket) {
    $scope.parameter = '-votes';
    $scope.votesShown = 10;
    $http.get('/api/dreams').success(function(dreams) {
      $scope.dreams = dreams;
      socket.syncUpdates('dream', $scope.dreams);
    });

    $scope.deleteDream = function(dream) {
      $http.delete('/api/dreams/' + dream._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('dreams');
    });

    $scope.sortByVotes = function(parameter){
    	if (parameter === 'votes'){
    		$scope.parameter = '-votes';
    	} else {
    		$scope.parameter = 'votes';
    	}
    	
    };
    $scope.showVotes = function(votes){
    	$scope.votesShown = votes;
    };

  });
