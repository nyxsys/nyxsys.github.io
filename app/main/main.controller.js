'use strict';

angular.module('mrbarbera')
  .controller('MainCtrl', function ($scope, $http) {
    $(document).ready(function () {
      $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active')
      });
    });
  });
