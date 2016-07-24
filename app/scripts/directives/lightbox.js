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
      templateUrl: 'views/directives/lightBox.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {


      }
    };
  });
