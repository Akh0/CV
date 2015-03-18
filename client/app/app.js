'use strict';

angular.module('cv2App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'nl2br'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });