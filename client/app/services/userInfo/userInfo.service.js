'use strict';

angular.module('realizeChangeApp')
  .service('UserInfo', function (User, Auth) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var currentUser = Auth.getCurrentUser();

    var UserInfo = function(){
	    this.name = currentUser.name;
    };
    return new UserInfo();
  });
