'use strict';

angular.module('cv2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.competences', {
        url: 'competences',
        controller: 'CompetencesCtrl',
            onEnter: ['$stateParams', '$state', 'scrollTo', function($stateParams, $state, scrollTo) {
                console.log($state);
                console.log($stateParams);
                scrollTo.scrollToAnchor('competences');
            }]
      });
  });