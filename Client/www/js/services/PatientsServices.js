var app = angular.module('Client_info.services.patients', []);

app.service('PatientServices', function($http, $q){
    
    var api = 'http://localhost:3000/patient'; 
    
    
    var self = {
        
        'result': [],
        'getAllPatientByUserId': function(user){
            
            var d = $q.defer();
            
            $http.get(api + '/user', user._id)
            .success(function(data){
                console.log(data);
                
                d.resolve();
            })
            .error(function(data){
                d.reject(data);
            });
            
            return d.promise;
        }
    };
    
    
    return self;
});