'use strict';

angular.module('realizeChangeApp')
  .service('UserInfo', function (User, Auth) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var currentUser = Auth.getCurrentUser();
    var UserInfo = function(){
    	if (currentUser.provider === 'local'){
	    	this.name = currentUser.name;
	    	this.firstName = currentUser.name;
	    } else if(currentUser.provider === 'facebook'){
	    	/* jshint ignore:start */
	    	this.name = currentUser.facebook.name;
	    	this.firstName = currentUser.facebook.first_name;
	    	this.profileImage = 'https://graph.facebook.com/'+currentUser.facebook.id+'/picture';
	    	/* jshint ignore:end */
	    } else if(currentUser.provider === 'google'){
	    	this.name = currentUser.facebook.name;
	    	this.firstName = currentUser.google.name;
	    	this.profileImage = currentUser.google.image.url;
	    } 
    };
    
    return new UserInfo();

    
  });
