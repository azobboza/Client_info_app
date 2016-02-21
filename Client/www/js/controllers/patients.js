var app = angular.module('Client_info.controllers.patients', []);

app.controller('PatientCtrl',['$scope', 'PatientServices', 'AuthFactory', function($scope, PatientServices, AuthFactory){
    
    //console.log('patientCtrl');
    var userId = AuthFactory.getUser()._id;
    //console.log('UserId: ' + userId);
    PatientServices.getAllPatientByUserId(userId).then(function(data){
        $scope.patients = PatientServices.patients;
    });
    
    
    //console.log('pat ' + PatientServices.PatientResult);
    //$scope.patients = PatientServices.PatientResult;
    
    
}]);