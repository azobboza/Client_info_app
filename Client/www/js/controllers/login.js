var app = angular.module('Client_info.controllers.login', []);

app.controller('LoginCtrl',['$scope', 'LoginServices', function($scope, LoginServices){
    
//    //zasto ovo mora da stoji ovde?!?!?!?
    $scope.formData = {};   
    
    $scope.login = function(){
        console.log($scope.formData);
        
        LoginServices.login($scope.formData);
    };
}]);
