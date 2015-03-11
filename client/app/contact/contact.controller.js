'use strict';

angular.module('cv2App')
    .controller('ContactCtrl', function ($scope, $http) {
        $scope.contact = {};

        $scope.submit = function () {
            $http.post('/api/contacts', $scope.contact).success(function() {
                console.log($scope.contact);
                $scope.contact = {};
            }).error(function() {

            });

        };
    });
