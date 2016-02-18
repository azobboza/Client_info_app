var app = angular.module('Client_info.controllers.signup', []);

app.controller('SignUpCtrl',['$scope', 'AuthServices', function($scope, AuthServices){
    
    $scope.registration = {};   
    
    $scope.signUp = function(form){
        console.log('SignUpCtrlboza');
        console.log($scope.registration);
//        if(form.$valid){
//            console.log('valid form');
//        }else{
//            console.log('invalid form');
//        }
        
        
        AuthServices.signup($scope.registration);
    };
}]);