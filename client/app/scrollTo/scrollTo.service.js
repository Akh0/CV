'use strict';

angular.module('cv2App')
  .factory('scrollTo', function ($window, $timeout) {
    // Service logic
    // ...

    // Public API here
    return {
      scrollToAnchor: function (anchorTag, attrs) {
          $timeout(function() {
              var $div = $('#'+anchorTag);

              if($div.length > 0) {
                  var offsetTop = $div.offset().top;
                  var duration = Math.abs($window.pageYOffset - offsetTop) * 0.5;

                  $('html, body').animate({
                      scrollTop: offsetTop - 50
                  }, duration);
              }
              else {
                  console.error('Invalid selector: '+anchorTag);
              }
          }, 100);
      }
    };
  });
