var app = angular.module('Client_info.factory.app', []);

app.factory('LSFactory', [function(){
    
    var LSAPI = {
        
        clear: function(){
            return localStorage.clean();
        },
        
        set:function(key, data){
            return localStorage.setItem(key, JSON.stringify(data));
        },
        
        get: function(key){
            return JSON.parse(localStorage.getItem(key));
        }
        
    };
    
    return LSAPI;
    
}]);


app.factory('AuthFactory', ['LSFactory', function(LSFactory){
    
    var userKey = 'user';
    var tokenKey = 'token';
    
    var AuthAPI = {
        
        setUser: function(user){
            return LSFactory.set(userKey, user);
        },
        
        setToken: function(token){
            return LSFactory.set(tokenKey, token);
        },
        
        getToken: function(){
            return LSFactory.get(tokenKey);
        }
        
    };
    
    return AuthAPI;
    
}]);