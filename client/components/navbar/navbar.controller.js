'use strict';

angular.module('realizeChangeApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, User, UserInfo, $modal,$rootScope) {
    $scope.currentUser = Auth.getCurrentUser();

    $scope.userInfo = UserInfo;
        // console.log('UserInfo', UserInfo)
    $scope.currentUser.profilePicture = $scope.currentUser.facebook ? 'http://graph.facebook/'+$scope.currentUser.facebook.id+'/picture' 
                                                                    : '';
    
    $scope.menu = [{
      'title': 'Dreams',
      'link': '/dreams',
      'iconName':'globe'
    },{
      'title': 'Vote4Change',
      'link': '/vote',
      'iconName':'thumbs-o-up'
    },{
      'title': 'Results',
      'link': '/results',
      'iconName':'flag-checkered'
    },
    {
      'title': 'Resources',
      'link': '/resources',
      'iconName':'book'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $rootScope.isCollapsed = true;

    $scope.openMenu = function(){
      if (!$rootScope.isCollapsed){
        $location.path('/');
      }
      $rootScope.isCollapsed = !$rootScope.isCollapsed;
    };


  });
