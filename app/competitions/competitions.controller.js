'use strict';

angular.module('mrbarbera')
  .controller('CompetitionsCtrl', function ($scope, $http, Competitions) {
  	$scope.competitions = Competitions.getCompetitions();
  });
