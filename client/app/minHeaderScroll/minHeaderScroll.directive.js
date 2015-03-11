'use strict';

angular.module('cv2App')
  .directive('minHeaderScroll', function ($window) {
    return {
      restrict: 'EA',
      link: function (scope, element, attrs) {
          angular.element($window).bind('scroll', function() {
              scope.minifiedHeader = this.pageYOffset >= 150;
              scope.$apply();
          });
      }
    };
  });