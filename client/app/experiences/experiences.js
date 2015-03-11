'use strict';

angular.module('cv2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.experiences', {
        url: 'experiences',
        controller: 'ExperiencesCtrl',
            onEnter: ['scrollTo', function(scrollTo) {
                scrollTo.scrollToAnchor('experiences');
            }]
      });
  });