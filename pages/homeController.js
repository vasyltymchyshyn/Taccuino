
angular.module('myApp')
    .controller('homeController', function($scope, $state, dataAccess){

        $scope.clearStorage = function(){
            localStorage.clear();
            location.reload();
        };

        $scope.list = dataAccess.getAll();
    });