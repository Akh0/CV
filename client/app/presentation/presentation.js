'use strict';

angular.module('cv2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.presentation', {
        url: 'presentation',
        controller: 'PresentationCtrl',
            onEnter: ['scrollTo', function(scrollTo) {
                scrollTo.scrollToAnchor('presentation');
            }]
      });
  });