// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('Client_info', ['ionic',
                                         'ngMessages',
                                        'Client_info.controllers.login',
                                        'Client_info.controllers.signup',
                                        'Client_info.services.auth',
                                        'Client_info.factory.app',
                                        'Client_info.controllers.patients',
                                        'Client_info.services.patients'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider){
   
    $stateProvider
    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    })
    .state('signup', {
        url: '/signup',
        templateUrl: 'templates/signup.html',
        controller: 'SignUpCtrl'
    })
    .state('patients', {
        url: '/patients',
        templateUrl: 'templates/patients.html',
        controller: 'PatientCtrl'
    })
    
    $urlRouterProvider.otherwise('/login');
    
});

//app.config(['$httpProvider', function($httpProvider) {
//        $httpProvider.defaults.useXDomain = true;
//        $httpProvider.defaults.withCredentials = true;
//        delete $httpProvider.defaults.headers.common["X-Requested-With"];
//        $httpProvider.defaults.headers.common["Accept"] = "application/json";
//        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
//    }
//]);
