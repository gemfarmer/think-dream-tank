'use strict';

function utilityService() {

	// AngularJS will instantiate a singleton by calling "new" on this function
}

angular.module('realizeChangeApp')
  .service('utility', ['User', function(User){
    var currentUser = User.get();
    var Utility = function(){

    }
    Utility.prototype={
      filter : function(dreams){
        return _.filter(dreams, function(dream){
          var isCurrentUsersId = currentUser._id === dream.user_id;
          var isSharable = dream.share;
          if (isCurrentUsersId) {
            return true;
          } else if (!isCurrentUsersId && isSharable){
            return true;
          } else {
            return false;
          }
        })
      }
    };
    return new Utility();
  }]);
