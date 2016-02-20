var app = angular.module('Client_info.controllers.login', []);

//zasto se ovako mapira u kontroloru?!?!?!
app.controller('LoginCtrl',['$scope', 'AuthServices', 'AuthFactory', '$state', function($scope, AuthServices, AuthFactory, $state){
    
    //OVO RADIIIII
    //zasto ovo mora da stoji ovde?!?!?!?
    $scope.authorization = {};   
    
    $scope.signIn = function(form){
        console.log('LoginCtrl');
        if(form.$valid){
            console.log('valid form');
            AuthServices.login($scope.authorization).success(function(data){
                console.log(data);
                AuthFactory.setUser(data.user);
                AuthFactory.setToken({
                    token: data.token,
                    expires: data.expires
                });
                
                $state.go('patients');
                //console.log(AuthFactory.getToken());
                
            })
            .error(function(err, statusCode){
                console.log(err, statusCode);
            });
        }else{
            console.log('invalid form');
        };
    };
}]);
