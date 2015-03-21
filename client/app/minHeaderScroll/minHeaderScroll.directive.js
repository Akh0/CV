'use strict';

angular.module('cv2App')
  .directive('minHeaderScroll', function ($window) {
    return {
      restrict: 'EA',
      link: function (scope, element, attrs) {
          var $body = $('body');

          if(window.innerWidth < 768) {
              $body.addClass('mobile');
              scope.minifiedHeader = true;
              scope.$apply();
          }
          else {
              angular.element($window).bind('scroll', function () {
                  scope.minifiedHeader = this.pageYOffset >= 150;
                  scope.$apply();
              });
          }
      }
    };
  });