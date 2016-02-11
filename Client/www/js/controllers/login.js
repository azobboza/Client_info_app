var app = angular.module('Client_info.controllers.login', []);

app.controller('LoginCtrl',['$scope', 'LoginServices', function($scope, LoginServices){
    
    
    //OVO RADIIIII
    //zasto ovo mora da stoji ovde?!?!?!?
    $scope.formData = {};   
    
    $scope.login = function(form){
        console.log('LoginCtrl');
        if(form.$valid){
            console.log('valid form');
        }else{
            console.log('invalid form');
        }
        
        
        //LoginServices.login($scope.formData);
    };
}]);
