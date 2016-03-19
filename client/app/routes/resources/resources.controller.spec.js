'use strict';

describe('Controller: ResourcesCtrl', function () {

  // load the controller's module
  beforeEach(module('realizeChangeApp'));

  var ResourcesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResourcesCtrl = $controller('ResourcesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
