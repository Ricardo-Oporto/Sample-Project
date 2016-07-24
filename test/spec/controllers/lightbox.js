'use strict';

describe('Controller: LightboxCtrl', function () {

  // load the controller's module
  beforeEach(module('frontEndTestApp'));

  var LightboxCtrl,
    scope, 
    options = { 
        data: {
            lightbox: {
                start: 0,
                finish: 100,
                duration: 2000
            }
        }
        };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LightboxCtrl = $controller('LightboxCtrl', {
        $scope: scope,
        options: options,
        $uibModalInstance: {}
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
   // expect(LightboxCtrl.awesomeThings.length).toBe(3);
  });
});
