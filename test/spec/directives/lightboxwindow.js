'use strict';

describe('Directive: lightboxWindow', function () {

  // load the directive's module
  beforeEach(module('frontEndTestApp'));

  var element,
    scope, template, timeout;

  beforeEach(module('templates'));



  beforeEach(inject(function ($rootScope, $templateCache, $compile) {
    scope = $rootScope.$new();

     element = $compile('<div class="lightbox-window"></div>')(scope);

  }));

  it('should make hidden element visible', inject(function ($timeout) {

     $timeout.flush();
   // expect(element.text()).toBe('this is the lightboxContent directive');
  }));
});
