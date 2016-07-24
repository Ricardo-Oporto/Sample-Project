'use strict';

describe('Directive: lightboxWindow', function () {

  // load the directive's module
  beforeEach(module('frontEndTestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<div class="lightbox-window"></div>');
    element = $compile(element)(scope);
   // expect(element.text()).toBe('this is the lightboxContent directive');
  }));
});
