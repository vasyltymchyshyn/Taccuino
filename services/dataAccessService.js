'use strict';

angular.module('myApp')
    .service('dataAccess',
        function ($rootScope) {
            var temp = [
                {
                    id: 1,
                    name: 'Mario',
                    messaggio: 'Sono Mario, e stavo avendo una bella serata'
                },
                {
                    id: 2,
                    name: 'Paola',
                    messaggio: 'Sono Paola e mi stavo divertendo'
                }
            ];

            var l = localStorage.getItem('people');
            if(l)
                temp = JSON.parse(l);

            var result = new Object();

            result.getAll = function(){
                return temp;
            };

            result.getById = function(id){
                for(var i= 0; i < temp.length; i++){
                    var x = temp[i];
                    if(x.id == id)
                        return x;
                }

                return null;
            };

            result.update = function(obj){
                if(obj != null) {
                    for (var i = 0; i < temp.length; i++) {
                        var x = temp[i];
                        if (x.id == obj.id) {
                            temp[i] = obj;
                            localStorage.setItem('people', angular.toJson(temp));
                            return;
                        }
                    }
                }
            };

            result.insert = function(obj){
                if(obj != null) {
                    if(temp.length == 0)
                        obj.id = 1;
                    else
                        obj.id =  temp[temp.length - 1].id + 1;
                    temp.push(obj);
                    localStorage.setItem('people', angular.toJson(temp));
                }
            };

            result.delete = function(id){
                for(var i= 0; i < temp.length; i++){
                    var x = temp[i];
                    if(x.id == id){
                        temp.splice(i, 1);
                        localStorage.setItem('people', angular.toJson(temp));
                        return;
                    }
                }
            };

            return result;
        });
