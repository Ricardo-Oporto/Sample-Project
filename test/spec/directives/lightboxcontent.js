'use strict';

describe('Directive: lightboxContent', function () {

  // load the directive's module
  beforeEach(module('frontEndTestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<lightbox-content></lightbox-content>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the lightboxContent directive');
  }));
});
