'use strict';

angular.module('cv2App')
  .directive('competenceRank', function () {
    return {
      //template: '<div class="rank"></div>',
      restrict: 'EA',
      compile: function (element, attrs) {
          element.append('<div class="rank"></div>');

          var rank = parseInt(attrs.competenceRank) || 1;
          console.log(rank);
          //alert('ogogol');
          for(var i=1; i<5; i++) {
              element.find('.rank').append('<span class="grade-' + i + ' ' + (rank >= i ? 'true' : 'false') + '"></span>')
          }
      }
    };
  });