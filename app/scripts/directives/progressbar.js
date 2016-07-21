'use strict';

/**
 * @ngdoc directive
 * @name frontEndTestApp.directive:progressBar
 * @description
 * # progressBar
 */
angular.module('frontEndTestApp')
  .directive('progressBar', function () {
    return {
      templateUrl: 'views/directives/progressBar.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
