'use strict';

angular.module('cv2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.realisations', {
        url: 'realisations',
        controller: 'RealisationsCtrl',
            onEnter: ['scrollTo', function(scrollTo) {
                scrollTo.scrollToAnchor('realisations');
            }]
      });
  });