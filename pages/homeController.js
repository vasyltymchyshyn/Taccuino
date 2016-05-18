
angular.module('myApp')
    .controller('homeController', function($scope, $state, dataAccess){

        $scope.clearStorage = function(){
            localStorage.clear();
            location.reload();
            $scope.$apply();
        };

        $scope.elimina = function(targetId) {
            dataAccess.delete(targetId);
            $scope.list = dataAccess.getAll();
            $scope.copia = dataAccess.getAll();
            $scope.search = '';
        }

        $scope.list = dataAccess.getAll();
        $scope.copia = dataAccess.getAll();

        console.log("PRIMA DI FILTRARE",  $scope.list);

        $scope.filtraRisultati= function(){

            var filtro = $scope.search;
            filtro = filtro.toUpperCase();

            // TODO: SISTEMARE IL KEY SENSITIVE

            console.log("sono entrato");


            var note = $scope.list;

            console.log(note);
            console.log("QUELLO CHE INSERISCO",$scope.search);

            var noteGiuste = [];
            for(var i = 0; i<note.length; i++) {

                var maiu = note[i].titolo.toUpperCase();

                if(maiu.search(filtro)>-1) {

                    noteGiuste.push(note[i]);
                    console.log("il mio PUSH",noteGiuste[i]);

                }
            }
            $scope.copia = noteGiuste;


        };



       // $scope.list = dataAccess.getAll();
    });