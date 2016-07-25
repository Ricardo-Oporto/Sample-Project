'use strict';

/**
 * @ngdoc function
 * @name frontEndTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontEndTestApp
 */
angular.module('frontEndTestApp')
  .controller('MainCtrl', function ($uibModal, dataService) {

      var ctrl = this;

      dataService.getLightBoxData('data/data.json').then(function (response) {

          ctrl.lightBoxConfig = response.data;
          ctrl.showModal();
      });

      ctrl.showModal = function showModal() {

         $uibModal.open({
              animation: true,
              templateUrl: 'views/directives/lightBox.html',
              controller: 'LightboxCtrl as lightBox',
              windowTemplateUrl: 'views/directives/lightboxWindow.html',
              backdrop:'static',
              resolve: {
                  options: function () {
                    return ctrl.lightBoxConfig;
                  }
              }
          });


      };

  });
