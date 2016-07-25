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
          link: function postLink(scope, element) {

              var modalDialog = element.find('.lightbox_container');

              scope.positionModal = function positionModal() {

                  modalDialog.css('margin-top', scope.getMargin($window.innerHeight, modalDialog.height()));

              };

              scope.getMargin = function getMargin(windowHeight, height) {

                  return Math.max(0, (windowHeight - height) / 2);

              };

              angular.element($window).bind('resize', function () {
                  scope.positionModal();
              });

              $timeout(scope.positionModal, 0);

          }
      };
  });
