'use strict';

describe('Controller: VoteCtrl', function () {

  // load the controller's module
  beforeEach(module('realizeChangeApp'));
  beforeEach(module('socketMock'));

  var VoteCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VoteCtrl = $controller('VoteCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
