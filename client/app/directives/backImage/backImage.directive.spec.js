'use strict';

describe('Directive: backImage', function () {

  // load the directive's module
  beforeEach(module('realizeChangeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<back-image></back-image>');
    element = $compile(element)(scope);
  }));
});