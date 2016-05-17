angular.module('myApp')
    .controller('detailsController', function($scope, $state, $stateParams, dataAccess){
        $scope.nota = dataAccess.getById($stateParams.id);

        var image = "<img style='display:block;' id='base64image' src= '"+$scope.nota.image+"'/>"
        $('#imageHolder').html(image);
    });