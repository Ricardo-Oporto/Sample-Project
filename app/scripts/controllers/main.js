'use strict';

/**
 * @ngdoc function
 * @name frontEndTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontEndTestApp
 */
angular.module('frontEndTestApp')
  .controller('MainCtrl', function ($uibModal) {


      var ctrl = this;

      ctrl.showModal = function showModal() {

          var modalInstance = $uibModal.open({
              animation: true,
              template: '<light-box></light-box>',
              controller: 'LightboxCtrl as modal',

              resolve: {
                  items: function () {
                      return '';
                  }
              }
          });


      };


      ctrl.showModal();



      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
  });
