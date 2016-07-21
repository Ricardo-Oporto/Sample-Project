'use strict';

describe('Controller: LightboxCtrl', function () {

  // load the controller's module
  beforeEach(module('frontEndTestApp'));

  var LightboxCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LightboxCtrl = $controller('LightboxCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LightboxCtrl.awesomeThings.length).toBe(3);
  });
});
