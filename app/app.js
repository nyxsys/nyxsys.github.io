'use strict';

angular.module('mrbarbera', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'angulartics',
  'angulartics.google.analytics'
  //'angulartics.google.analytics'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');
    //$locationProvider.html5Mode(true);
  });
