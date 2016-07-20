'use strict';

/**
 * @ngdoc directive
 * @name frontEndTestApp.directive:myDirective
 * @description
 * # myDirective
 */
angular.module('frontEndTestApp')
  .directive('myDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the myDirective directive');
      }
    };
  });
