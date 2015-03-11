'use strict';

angular.module('cv2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.competences', {
        url: 'competences',
        controller: 'CompetencesCtrl',
            onEnter: ['scrollTo', function(scrollTo) {
                scrollTo.scrollToAnchor('competences');
            }]
      });
  });