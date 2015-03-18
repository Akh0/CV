'use strict';

angular.module('cv2App')
    .controller('ContactCtrl', function ($scope, $http) {
        $scope.contact = {};
        $scope.successMessage = '';
        $scope.errorMessage = '';

        $scope.submit = function () {
            $http.post('/api/contacts', $scope.contact).success(function(response) {
                console.log($scope.contact);
                console.log("response : ",response);
                $scope.successMessage = response.message;
                $scope.errorMessage = '';

                $scope.contact = {};
            }).error(function(response) {
                $scope.errorMessage = response.message;
                $scope.successMessage = '';
            });

        };
    });
