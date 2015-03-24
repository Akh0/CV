'use strict';

angular.module('cv2App')
    .controller('ContactCtrl', function ($scope, $http) {
        $scope.contact = {};
        $scope.successMessage = '';
        $scope.errorMessage = '';
        $scope.messageSending = false;

        $scope.submit = function () {
            $scope.successMessage = '';
            $scope.errorMessage = '';
            $scope.messageSending = true;

            $http.post('/api/contacts', $scope.contact).success(function (response) {
                console.log($scope.contact);
                console.log("response : ", response);
                $scope.successMessage = response.message;
                $scope.errorMessage = '';
                $scope.contact = {};

                $scope.messageSending = false;

            }).error(function (response) {
                $scope.errorMessage = response.message;
                $scope.successMessage = '';

                $scope.messageSending = false;
            });
        };
    });
