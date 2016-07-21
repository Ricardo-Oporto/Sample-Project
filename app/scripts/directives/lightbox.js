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

          function setModalMaxHeight(element) {
              var element = $(element);
              var $content = element.find('.modal-content');
              var borderWidth = $content.outerHeight() - $content.innerHeight();
              var dialogMargin = $(window).width() < 768 ? 20 : 60;
              var contentHeight = $(window).height() - (dialogMargin + borderWidth);
              var headerHeight = element.find('.modal-header').outerHeight() || 0;
              var footerHeight = element.find('.modal-footer').outerHeight() || 0;
              var maxHeight = contentHeight - (headerHeight + footerHeight);

              $content.css({
                  'overflow': 'hidden'
              });

              element
                .find('.modal-body').css({
                    'max-height': maxHeight,
                    'overflow-y': 'auto'
                });
          }

          $('.modal').on('show.bs.modal', function () {
              $(this).show();
              setModalMaxHeight(this);
          });

          $(window).resize(function () {
              if ($('.modal.in').length != 0) {
                  setModalMaxHeight($('.modal.in'));
              }
          });
      }
    };
  });
