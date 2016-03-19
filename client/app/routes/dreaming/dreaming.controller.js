'use strict';

angular.module('realizeChangeApp')
  .controller('DreamingCtrl', function ($scope, $http, socket, Dreams) {
    $scope.message = 'Hello';

    $scope.dreaming = {};
    // console.log(Dreams)

    $scope.addDreams = function() {
      if($scope.dreaming === {}) {
        return;
      }
      var newDream = { 
      	future: $scope.dreaming.future, 
      	world : $scope.dreaming.world,  
      	votes: 0
      };
      // $http.post('/api/dreams', newDream);
      Dreams.add(newDream);
      $scope.dreaming = {};
    };

  });
