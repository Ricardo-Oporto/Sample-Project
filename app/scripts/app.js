'use strict';

/**
 * @ngdoc overview
 * @name frontEndTestApp
 * @description
 * # frontEndTestApp
 *
 * Main module of the application.
 */
angular
  .module('frontEndTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl as ctrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
