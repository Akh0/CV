'use strict';

angular.module('cv2App')
    .config(function ($stateProvider) {
        $stateProvider
            .state('main.formation', {
                url: 'formation',
                controller: 'FormationCtrl',
                onEnter: ['scrollTo', function(scrollTo) {
                    scrollTo.scrollToAnchor('formation');
                }]
            });
    });