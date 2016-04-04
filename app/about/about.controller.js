'use strict';

angular.module('mrbarbera')
  .controller('AboutCtrl', function ($scope, $http) {
        $(document).ready(function () {
      $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active')
      });
    });
  });
