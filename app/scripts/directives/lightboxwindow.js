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
          link: function postLink(scope, element, attrs) {

              var modalDialog = element.find(".modal-content");

              $timeout(positionModal, 10);


              function positionModal() {

                  modalDialog.css("margin-top", Math.max(0, ($window.innerHeight - modalDialog.height()) / 2));

              }


              angular.element($window).bind('resize', function () {
                  positionModal();
              });
          }
      };
  });
