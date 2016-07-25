'use strict';

describe('Controller: LightboxCtrl', function () {

  // load the controller's module
  beforeEach(module('frontEndTestApp'));

  var LightboxCtrl,
    scope,
    modal = {
       close:function(){}
    },
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
        options:  options,
        $uibModalInstance: modal
    });

     spyOn(modal, 'close');


  }));

  it('expect the options be assigned to the controller', function () {
     expect(LightboxCtrl.progressbarConfig).toEqual(options.data.lightbox);
  });

   it('expect the modal instance\'s close function to be called when the close function is called on the controller', function () {
      LightboxCtrl.close();
     expect(modal.close).toHaveBeenCalled();
   });
});
