'use strict';

angular.module('cv2App')
  .factory('scrollTo', function () {
    // Service logic
    // ...

    // Public API here
    return {
      scrollToAnchor: function (anchorTag) {
          var $div = $('#'+anchorTag);

          if($div.length > 0) {
              $('html, body').animate({
                  scrollTop: $div.offset().top - 50
              }, 2000);
          }
          else {
              console.error('Invalid selector: '+anchorTag);
          }
      }
    };
  });
