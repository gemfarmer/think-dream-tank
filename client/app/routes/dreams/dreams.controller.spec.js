'use strict';

describe('Controller: DreamsCtrl', function () {

  // load the controller's module
  beforeEach(module('realizeChangeApp'));
  beforeEach(module('socketMock'));

  var DreamsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DreamsCtrl = $controller('DreamsCtrl', {
      $scope: scope
    });
  }));

  // it('should ...', function () {
  //   expect(1).toEqual(1);
  // });
});
