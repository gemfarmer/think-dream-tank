'use strict';

angular.module('realizeChangeApp')
  .service('UserInfo', function (User, Auth) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var currentUser = Auth.getCurrentUser();

    var UserInfo = function(){
	    this.name = currentUser.name; //user db
      this.email = currentUser.email; //user db //string
      this.share = currentUser.share; //user db
      this.world = currentUser.world; //dreams db //string
      this.future = currentUser.future; //dreams db //string
      this.flagged = currentUser.flagged; //dreams db
      this.dream_id = currentUser.dream_id; //user db
    };
    return new UserInfo();
  });
