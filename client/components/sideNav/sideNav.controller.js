'use strict';

angular.module('realizeChangeApp')
  .controller('SideNavCtrl', function ($scope, $location, Auth, User, UserInfo, $modal,$rootScope) {
    $scope.currentUser = Auth.getCurrentUser();
    $scope.sideNavOpen = false;

    $scope.userInfo = UserInfo;
        // console.log('UserInfo', UserInfo)
    $scope.currentUser.profilePicture = $scope.currentUser.facebook ? 'http://graph.facebook/'+$scope.currentUser.facebook.id+'/picture' 
                                                                    : '';
    $scope.menu = [{
      'title': 'Dreams',
      'link': '/dreams',
      'iconName':'cloud'
    },{
      'title': 'Shared Goals',
      'link': '/vote',
      'iconName':'thumbs-o-up'
    },{
      'title': 'Results',
      'link': '/results',
      'iconName':'flag'
    },
    {
      'title': 'Resources',
      'link': '/resources',
      'iconName':'file-text'
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

    $scope.toggleMenu = function() {
      $scope.sideNavOpen = !$scope.sideNavOpen;
    };
  });
