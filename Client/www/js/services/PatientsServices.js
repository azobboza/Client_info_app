var app = angular.module('Client_info.services.patients', []);

app.service('PatientServices', function($http, $q){
    
    var api = 'http://localhost:3000/patient'; 

    var self = {
        
        'patients': [],
        'getAllPatientByUserId': function(userId){
            
            var d = $q.defer();
            
            $http.get(api + '/user/' + userId)
                .success(function(data){
                        
                    angular.forEach(data, function(data){
                        self.patients.push(data);
                    })
                    
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