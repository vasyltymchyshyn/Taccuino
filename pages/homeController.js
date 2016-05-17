
angular.module('myApp')
    .controller('homeController', function($scope, $state, dataAccess){

        $scope.clearStorage = function(){
            localStorage.clear();
            location.reload();
        };

        $scope.elimina = function(targetId) {
            dataAccess.delete(targetId);
            $scope.list = dataAccess.getAll();
        }

        $scope.modifica = function(targetId) {
            console.log('modifico #'+targetId);
        }

        $scope.list = dataAccess.getAll();
    });