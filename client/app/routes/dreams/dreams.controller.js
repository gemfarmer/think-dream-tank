/* jshint ignore:start */
'use strict';

angular.module('realizeChangeApp')
  .controller('DreamsCtrl', [ '$scope', '$http', 'socket', 'Dreams', 'User', '$window', function ($scope, $http, socket, Dreams, User, $window) {

    $scope.searchParam = 'world';
    $scope.dreamFeedIsOpen = true;

    $http.get('/api/dreams').success(function(dreams) {
      $scope.dreams = dreams;
      socket.syncUpdates('dream', $scope.dreams);

      dreams.forEach(function(dream){
        $scope.addMarker(dream);  
      });
    });

    $scope.deleteDream = function(dream) {
      Dreams.delete(dream);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('dreams');
    });
    $scope.selectParam = function(param){
    	$scope.searchParam = param;
    };

    $scope.resizeMap = function () {
      var newHeight = $window.innerHeight - 50;
      $('.map').height(newHeight);
    };

    $scope.dreamFeed = function(status) {
      if (status === 'open') {
        $scope.dreamFeedIsOpen = true;
      } else {
        $scope.dreamFeedIsOpen = false;
      }    
    };

    $scope.markerSettings = {
      default: {
        // 'iconUrl': 'assets/images/Star7.png',
        // 'iconUrl': 'assets/images/star5.png', // good contrast against white
        'iconUrl': 'assets/images/Star8.png',
        'iconSize': [30, 30],
        'iconAnchor': [15, 15],
        'popupAnchor': [0, -55],
        'className': 'dot'
      },
      highlight: {
        'iconUrl': 'assets/images/Star7.png',
        'iconSize': [30, 30],
        'iconAnchor': [15, 15],
        'popupAnchor': [0, -55],
        'className': 'dot'
      }
    };

    $scope.updateMarker = function(dream) {

      $scope.resetMarkers();

      _.forEach($scope.markerList, function (marker) {
        if (marker.id === dream._id) {
          marker.setIcon(L.icon($scope.markerSettings.highlight));
        }
      });
    };

    $scope.resetMarkers = function () {
      _.forEach($scope.markerList, function(marker) {
        marker.setIcon(L.icon($scope.markerSettings.default));
      });
    };

    $scope.markerList = [];

    $scope.addMarker = function(dream) {
      var coords = [+dream.location.latitude, +dream.location.longitude],
        options = {
          title: dream.future,
          clickable: true,
        },
        markerOpacity = 0.5;

      var marker = L.marker(coords, options).addTo($scope.map)
        .bindPopup(dream.future)
        .setIcon(L.icon($scope.markerSettings.default))
        .setOpacity(markerOpacity);

      marker.id = dream._id;
      $scope.markerList.push(marker);
        
      // marker.on('click', function(e) {
      //   // e.target.openPopup();
      // });

      // marker._leaflet_id;

    };

    $scope.showOnMap = function (dream) {
      // console.log(dream);
      $scope.updateMarker(dream);
    };
  
    // Provide your access token
    L.mapbox.accessToken = 'pk.eyJ1IjoiZ2VtZmFybWVyIiwiYSI6ImtNWkpLbHcifQ.jWx398eYRGPYROgOcxXjdQ';

     // initialize map
    $scope.map = L.mapbox.map('map', 'gemfarmer.4df00baa', {
      center: [ 33.7891, 44.9225 ], // starting position
      zoom: 2 // starting zoom
    });

    $scope.resizeMap();


    angular.element($window).bind('resize', function(){
      $scope.resizeMap();
    });


  }]);
/* jshint ignore:end */


