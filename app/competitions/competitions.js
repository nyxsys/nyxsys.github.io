'use strict';

angular.module('mrbarbera')
  .config(function ($stateProvider) {
    $stateProvider
      .state('competitions', {
        url: '/activities/competitions',
        templateUrl: 'app/competitions/competitions.html',
        controller: 'CompetitionsCtrl'
      });
  });