'use strict';

describe('Directive: lightboxWindow', function () {

  // load the directive's module
  beforeEach(module('frontEndTestApp'));

  var element,
    scope, template;

  beforeEach(module('templates'));

  beforeEach(inject(function ($rootScope, $templateCache, $compile) {
    scope = $rootScope.$new();

    element = $compile('<div lightbox-window><div class="modal-content lightbox_container" style="height:100px"></div></div>')(scope);


  }));

  it('should set the margin to window height - modal height / 2 ', inject(function () {

      expect(scope.getMargin(800,100)).toEqual(350);

  }));

  it('should set the margin to 0 if the modal height is heigher than the window', inject(function () {

      expect(scope.getMargin(100, 800)).toEqual(0);

  }));

  it('should adjust the modal on window resize', inject(function ($window) {
      spyOn(scope, 'positionModal');
    
      $window.innerHeight = 1000;
      angular.element($window).triggerHandler('resize');
      scope.$digest();
      expect(scope.positionModal).toHaveBeenCalled();

  }));

});
