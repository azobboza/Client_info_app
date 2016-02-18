var app = angular.module('Client_info.services.auth', []);

app.service('AuthServices', function($http){
    
    var api = 'http://localhost:3000/users';
    
    var self = {
        
        'login': function(formData){
            
            $http.post(api+ '/login', formData)
                .success(function (data) {
                    console.log(data);
                })
            .error(function(err){
                console.log('greska');
            });
            
        },
        
        signup: function(formData){

            $http.post(api+ '/registration', formData)
                .success(function (data) {
                    console.log(data);
                })
            .error(function(err){
                console.log('greska');
            });
        }
    }
    return self;
});