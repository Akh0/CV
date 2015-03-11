'use strict';

angular.module('cv2App')
    .directive('changeStateOnScroll', function ($window, $state) {
        return {
            restrict: 'EA',
            link: function (scope, element, attrs) {
                var items = ['presentation', 'competences', 'experiences', 'realisations', 'formation', 'contact'];

                angular.element($window).bind('scroll', function () {
                    var currentPosition = this.pageYOffset;

                    //for(var i=0; i<items.length; i++) {
                    //    var item = items[i];
                    //
                    //    var $div = $('#'+item);

                        //if($div.offset().top > pageYOffset && $('#'+items[i+1]).offset().top < pageYOffset) {
                        //    console.log(item);
                            //console.log('state go');
                            //$state.transitionTo('main.'+item, { notify: false });
                        //}
                    //}
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