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
        },
        
        getUser: function(){
            return LSFactory.get(userKey);
        }
        
    };
    
    return AuthAPI;
    
}]);

app.factory('TokenInterceptor', ['$q', 'AuthFactory', function($q, AuthFactory){
    
    return{
        
        request: function(config){
            config.headers = config.headers || {};
            var token = AuthFactory.getToken();
            var user = AuthFactory.getUser();
            
            //console.log('Token HEADERS ' + token.token);
            //console.log('Email HEADERS ' + user.email);
            
            if(token && user){
                
                //config.headers['X-Access-Token'] = token.token;
                config.headers['Authorization'] = token.token;
                config.headers['X-Key'] = user.email;
                config.headers['Content-Type'] = "application/json";
                
            }
            
            return config || $q.when(config);
        },
        
        response: function(response){
            return response || $q.when(response);
        }
    };
}]);