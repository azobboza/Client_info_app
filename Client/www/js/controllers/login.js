var app = angular.module('Client_info.controllers.login', []);

app.controller('LoginCtrl',['$scope', 'AuthServices', function($scope, AuthServices){
    
    
    //OVO RADIIIII
    //zasto ovo mora da stoji ovde?!?!?!?
    $scope.authorization = {};   
    
    $scope.signIn = function(form){
        console.log('LoginCtrl');
//        if(form.$valid){
//            console.log('valid form');
//        }else{
//            console.log('invalid form');
//        }
        
        
        AuthServices.login($scope.formData);
    };
}]);
