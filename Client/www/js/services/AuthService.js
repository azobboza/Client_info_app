var app = angular.module('Client_info.services.auth', []);

app.service('AuthServices', function($http, $q){
    
    var api = 'http://localhost:3000/users';
    
    var self = {
        
        'login': function(user){
              
            return $http.post(api+ '/login', user);
        },
        
        signup: function(user){

            $http.post(api+ '/registration', user)
                .success(function (data) {
                    console.log(data);
                })
            .error(function(err){
                console.log('greska');
            });
        }
    };
    
    return self;
});