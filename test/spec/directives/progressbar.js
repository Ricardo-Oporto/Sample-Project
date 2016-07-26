'use strict';

describe('Directive: progressBar', function () {

  // load the directive's module
    beforeEach(module('frontEndTestApp'));

    beforeEach(module('templates'));

  var element,
    scope, time;

  beforeEach(inject(function ($rootScope, $timeout) {
      time = $timeout;
    scope = $rootScope.$new();
  }));

  it('should bind the directive attributes to the scope', inject(function ($compile) {
      scope.start = 0;
      scope.finish = 100;
      scope.duration = 3000;

    element = angular.element('<progress-bar start="start" finish="finish" duration="duration"></progress-bar>');
    element = $compile(element)(scope);
    scope.$digest();
    var isolatedScope = element.isolateScope();
    expect(isolatedScope.start).toBe(0);
    expect(isolatedScope.finish).toBe(100);
    expect(isolatedScope.duration).toBe(3000);

  }));

  it('should have  intervals of duration / finish value ', inject(function ($compile) {
      scope.start = 0;
      scope.finish = 100;
      scope.duration = 3000;

      element = angular.element('<progress-bar start="start" finish="finish" duration="duration"></progress-bar>');
      element = $compile(element)(scope);
      scope.$digest();
      var isolatedScope = element.isolateScope();
      expect(isolatedScope.intervals).toBe(30);
   

  }));

  it('should increment the progress bar by 1%', inject(function ($compile) {
      scope.start = 0;
      scope.finish = 100;
      scope.duration = 3000;

      element = angular.element('<progress-bar start="start" finish="finish" duration="duration"></progress-bar>');
      element = $compile(element)(scope);
      scope.$digest();
      var isolatedScope = element.isolateScope();
      isolatedScope.updatePorgressBar();
      expect(isolatedScope.progress).toBe(1);


  }));

  it('should set the progress to finish value and complete to true', inject(function ($compile) {
      scope.start = 0;
      scope.finish = 100;
      scope.duration = 3000;

      element = angular.element('<progress-bar start="start" finish="finish" duration="duration"></progress-bar>');
      element = $compile(element)(scope);
      scope.$digest();
      var isolatedScope = element.isolateScope();
      isolatedScope.completeProgressBar();
      expect(isolatedScope.progress).toEqual(isolatedScope.finish);
      expect(isolatedScope.complete).toBe(true);

  }));

  
});
