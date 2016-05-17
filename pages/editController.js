angular.module('myApp')
    .controller('editController', function($scope, $state, $stateParams, dataAccess){
        $scope.id = $stateParams.id;
        var currentObj = dataAccess.getById($stateParams.id);

        $scope.name = currentObj.name;
        $scope.messaggio = currentObj.messaggio;

        $( "#txtBirthday" ).datepicker({
            changeMonth: true,
            changeYear: true,
            yearRange: '1900:-0',
            maxDate: 0
        });
        $( "#txtBirthday" ).datepicker( "option", "dateFormat", "yy-mm-dd" );

        $scope.updateClick = function() {
            var x = new Object();
            x.id = currentObj.id;
            x.name = $scope.name;
            x.messaggio = $scope.messaggio;
            x.image = currentObj.image;

            dataAccess.update(x);
            $state.go('home');
        }

    });