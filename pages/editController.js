angular.module('myApp')
    .controller('editController', function($scope, $state, $stateParams, dataAccess){
        $scope.id = $stateParams.id;
        var currentObj = dataAccess.getById($stateParams.id);

        $scope.name = currentObj.name;
        $scope.surname = currentObj.surname;
        $scope.sex = currentObj.sex;
        $scope.email= currentObj.email;
        $scope.tel = currentObj.tel;
        $scope.birthday = currentObj.birthday;
        $scope.cityOfBirth = currentObj.cityOfBirth;
        $scope.fiscalCode = currentObj.fiscalCode;
        $scope.address = currentObj.address;
        $scope.city = currentObj.city;

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
            x.surname = $scope.surname;
            x.sex = $scope.sex;
            x.email = $scope.email;
            x.tel = $scope.tel;
            x.birthday = moment($("#txtBirthday").val());
            x.cityOfBirth = $scope.cityOfBirth;
            x.fiscalCode = $scope.fiscalCode;
            x.address = $scope.address;
            x.city = $scope.city;

            dataAccess.update(x);
            $state.go('home');
        }

    });