'use strict';

angular.module('cv2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.contact', {
        url: 'contact',
        controller: 'ContactCtrl',
            onEnter: ['scrollTo', function(scrollTo) {
                scrollTo.scrollToAnchor('contact');
            }]
      });
  });