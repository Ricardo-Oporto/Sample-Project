'use strict';

describe('Service: dataService', function () {

  // load the service's module
  beforeEach(module('frontEndTestApp'));


   var httpBackend;
  // instantiate service
  var dataService;
  beforeEach(inject(function (_dataService_, _$httpBackend_) {
    dataService = _dataService_;
     httpBackend =_$httpBackend_
  }));

   it("should return a promise", function () {

      var testData = {};
      httpBackend.whenGET('test.json').respond(testData);

      dataService.getLightBoxData("test.json").then(function(response) {

         expect(testData).toEqual(response.data);

      });

      httpBackend.flush();

   });


});
