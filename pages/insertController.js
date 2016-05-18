angular.module('myApp')
    .controller('insertController', function($scope, $state, dataAccess){

        $scope.titolo = '';
        $scope.messaggio = '';

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

        $scope.insertClick = function(){
            var x = new Object();
            x.id = -1;
            x.titolo = $scope.titolo;
            x.messaggio = $scope.messaggio;
            x.data = new Date()+"";
            x.image = localStorage.img;
            localStorage.img = "";

            var image = "<img style='display:block;' id='base64image' src= '"+x.image+"'/>"
            //$('body').html( $('body').html()+image );


            //var img = document.createElement('img');
            //img.src = dataUri;
            //document.body.appendChild(img);
            //console.log('trigger2');

            dataAccess.insert(x);
            $state.go('home');
            location.reload();
        }



        var img = new Image();
        img.src = localStorage.theImage;




    });