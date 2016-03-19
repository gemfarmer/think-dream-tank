'use strict';

describe('Service: Dreams', function () {

  // load the service's module
  beforeEach(module('realizeChangeApp'));
  beforeEach(module('socketMock'));

  // instantiate service
  var Dreams;
  beforeEach(inject(function (_Dreams_) {
    Dreams = _Dreams_;
  }));

  it('should do something', function () {
    expect(!!Dreams).toBe(true);
  });

});
