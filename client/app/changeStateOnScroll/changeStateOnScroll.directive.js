'use strict';

angular.module('cv2App')
    .directive('changeStateOnScroll', function ($window, $state) {
        return {
            restrict: 'EA',
            link: function (scope, element, attrs) {
                var items = ['presentation', 'competences', 'experiences', 'realisations', 'formation', 'contact'];

                angular.element($window).bind('scroll', function () {
                    var currentPosition = this.pageYOffset;

                    angular.forEach(items, function(item) {
                        var $div = $('#'+item),
                            top = $div.offset().top - currentPosition,
                            bottom = top + $div.outerHeight();

                        if(currentPosition >= top && currentPosition <= bottom) {
                            console.log("ON EST LA : "+item);
                            //$state.transitionTo('main.'+item, { notify: false });

                        }

                    //
                    //    console.log(item, pageYOffset,  $div.offset().top);
                    });
                });
            }
        };
    });