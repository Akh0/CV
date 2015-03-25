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
                            top = $div.offset().top - 50,
                            //top = $div.offset().top,
                            bottom = top + $div.outerHeight();

                        if(currentPosition >= top && currentPosition <= bottom) {
                            //console.log("ON EST LA : "+item);
                            //$state.transitionTo('main.'+item, { notify: false });
                            //$state.go("main."+item, {noAnimate:true}, {notify: false, inherit:false});


                        }
                    });
                });
            }
        };
    });