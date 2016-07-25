'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('frontEndTestApp'));

  var MainCtrl,
    scope,
      modal = {
         open:function(){}
      },
      dataService = {
         getLightBoxData: function(){
            return ''
         }
      };



  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {
    scope = $rootScope.$new();

     spyOn(dataService, 'getLightBoxData').and.callFake(function() {
        var deferred = $q.defer();
        deferred.resolve('Remote call result');
        return deferred.promise;
     });



    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
       $uibModal:modal,
       dataService:dataService
    });

     spyOn(modal, 'open');
     spyOn(MainCtrl, 'showModal');

     describe("initialisation", function() {

        it('should open the modal', function () {
           scope.$digest();
           expect(dataService.getLightBoxData).toHaveBeenCalled();
           expect(MainCtrl.showModal).toHaveBeenCalled();
        });

     });

     describe("controller functions", function() {

        it('should open the modal when showModal is called', function () {

           MainCtrl.showModal();
           expect(modal.open).toHaveBeenCalled();
        });


     });


  }));


});
