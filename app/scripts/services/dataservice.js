'use strict';

/**
 * @ngdoc service
 * @name frontEndTestApp.dataService
 * @description
 * # dataService
 * Service in the frontEndTestApp.
 */
angular.module('frontEndTestApp')
  .service('dataService', function ($http) {
      // AngularJS will instantiate a singleton by calling "new" on this function

      var _getLightBoxData = function getLightBoxData(url) {


      };


      return {
          getLightBoxData: _getLightBoxData
      };

     

  });
