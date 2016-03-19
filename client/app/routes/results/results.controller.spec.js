'use strict';

describe('Controller: ResultsCtrl', function () {

  // load the controller's module
  beforeEach(module('realizeChangeApp'));
  beforeEach(module('socketMock'));

  var ResultsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResultsCtrl = $controller('ResultsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
