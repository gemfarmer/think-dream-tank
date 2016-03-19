'use strict';

describe('Controller: DreamingCtrl', function () {

  // load the controller's module
  beforeEach(module('realizeChangeApp'));
  beforeEach(module('socketMock'));
  
  var DreamingCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DreamingCtrl = $controller('DreamingCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
