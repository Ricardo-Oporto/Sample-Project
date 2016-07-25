'use strict';

/**
 * @ngdoc directive
 * @name frontEndTestApp.directive:lightboxContent
 * @description
 * # lightboxContent
 */
angular.module('frontEndTestApp')
    .directive('lightboxWindow', function ($timeout, $window) {
       return {
          restrict: 'C',
          link: function postLink(scope, element) {

             var modal = element.find('.modal-content');

             scope.verticalAlignElement = function verticalAlignElement(element) {

                var size = scope.getTopMargin(element);

                element.css('margin-top', size);

             };

             scope.getTopMargin = function getTopMargin(element) {

                return Math.max(0, ($window.innerHeight - element.height()) / 2);

             };

             $timeout(scope.verticalAlignElement(modal), 0);

             angular.element($window).bind('resize', function () {
                scope.verticalAlignElement();
             });
          }
       };
    });
