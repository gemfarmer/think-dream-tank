'use strict';

angular.module('realizeChangeApp')
  .service('Dreams', function ($http, socket) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var Dreams = function(){};

    Dreams.prototype.add = function(newDream){
    	$http.post('/api/dreams', newDream).then(function(data) {
        console.log(data);
        }, function(err){
          console.warn('err',err);
        });
    };

    Dreams.prototype.delete = function(dream) {
      $http.delete('/api/dreams/' + dream._id);
      socket.unsyncUpdates('dreams');
    };

    return new Dreams();
  });

