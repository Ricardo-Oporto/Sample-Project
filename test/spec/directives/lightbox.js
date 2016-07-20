'use strict';

describe('Directive: lightBox', function () {

  // load the directive's module
  beforeEach(module('frontEndTestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<light-box></light-box>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the lightBox directive');
  }));
});
