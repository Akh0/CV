'use strict';

angular.module('cv2App')
    .controller('NavbarCtrl', function ($scope, $location) {
        $scope.isActive = function (route) {
            console.log(route);
            return route === $location.path();
        };
    });