'use strict';

/**
 * @ngdoc function
 * @name frontEndTestApp.controller:LightboxCtrl
 * @description
 * # LightboxCtrl
 * Controller of the frontEndTestApp
 */
angular.module('frontEndTestApp')
  .controller('LightboxCtrl', function ($interval) {
      var lightBox = this;
      lightBox.progress = 0;



      $interval(function () {
          if (lightBox.progress !== 100) {
              lightBox.progress = lightBox.progress + 20;
          }

      }, 2, 20);


  

  });
