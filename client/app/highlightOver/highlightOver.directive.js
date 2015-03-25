'use strict';

angular.module('cv2App')
    .directive('highlightOver', function () {
        return {
            restrict: 'EA',
            link: function (scope, element, attrs) {
                element.bind('mouseenter', function () {
                    var classes = 'highlight';

                    classes += element.hasClass('double') ? ' double' : '';
                    classes += element.hasClass('left') ? ' left' : ' right';

                    element.parent().append('<div class="' + classes + '"></div>');
                });

                element.bind('mouseleave', function () {
                    element.parent().find('.highlight').animate({
                        width: 0
                    }, 400, function() {
                        $(this).remove();
                    });
                })
            }
        };
    });