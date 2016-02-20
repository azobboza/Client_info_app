var app = angular.module('Client_info.controllers.patients', []);

app.controller('PatientCtrl',['$scope', 'PatientServices', function($scope, PatientServices){
    
    
    console.log('patientCtrl');
    PatientServices.getAllPatientByUserId('56b1094a715d35d80b7a7c6f');
    
}]);