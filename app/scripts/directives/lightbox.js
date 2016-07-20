'use strict';

/**
 * @ngdoc directive
 * @name frontEndTestApp.directive:lightBox
 * @description
 * # lightBox
 */
angular.module('frontEndTestApp')
  .directive('lightBox', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the lightBox directive');
      }
    };
  });
