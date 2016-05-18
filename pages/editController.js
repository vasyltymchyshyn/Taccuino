angular.module('myApp')
    .controller('editController', function($scope, $state, $stateParams, dataAccess){
        $scope.id = $stateParams.id;
        var currentObj = dataAccess.getById($stateParams.id);

        $scope.titolo = currentObj.titolo;
        $scope.messaggio = currentObj.messaggio;

        $scope.updateClick = function() {
            var x = new Object();
            x.id = currentObj.id;
            x.titolo = $scope.titolo;
            x.data = currentObj.data;
            x.messaggio = $scope.messaggio;
            x.image = localStorage.img;
            localStorage.img = "";

            dataAccess.update(x);
            $state.go('home');
        }


        var fileInput = document.getElementById('file');
        fileInput.addEventListener('change', function(e) {
            var reader = new FileReader(); //create reader
            reader.onload = function() { //attach onload
                //do something with the result
                console.log(reader.result);
                localStorage.img = reader.result; //saved to localStorage
            };
            var file = e.target.files[0];
            reader.readAsDataURL(file); //trigger onload function
            console.log('trigger1');
        });
    });