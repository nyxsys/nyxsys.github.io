'use strict';

angular.module('mrbarbera')
  .controller('ProjectsCtrl', function ($scope, $http, Projects) {
        $(document).ready(function () {
      $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active')
      });
    });
    
    //Get projects from projects factory
    $scope.projects = Projects.getProjects();

    $("#jumbo").css('background-image','url(../../assets/img/everest.jpg)');
  });
