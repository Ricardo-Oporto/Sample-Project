'use strict';

/**
 * @ngdoc function
 * @name frontEndTestApp.controller:LightboxCtrl
 * @description
 * # LightboxCtrl
 * Controller of the frontEndTestApp
 */
angular.module('frontEndTestApp')
  .controller('LightboxCtrl', function (options, $uibModalInstance) {

      var lightBox = this;
      lightBox.progressbarConfig = options.data.lightbox

      lightBox.close = function close() {

      $uibModalInstance.close();

      };

  
  });
