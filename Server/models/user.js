var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    }
});


userSchema.pre('save', function(next){
    //check ig this is a new password
    if(!this.isModified('password')){
        return next();     
    }
    
    //initialize encryption
    var user = this;
    bcrypt.genSalt(10, function(err, salt){
        if(err){
            next(err);
        }
        
        console.log(salt);
        
        //we have a successful salt value
        bcrypt.hash(user.password, salt, null, function(err, hash){
            if(err){
                return next(err);
            }
            
            console.log(hash);
            //we have successfuly encrepted password
            user.password = hash;
            next();
        })
    })
});

userSchema.methods.comparePassword = function(candidatePassword, next){
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
       if(err){
           next(err);
       } 
        next(null, isMatch);
    });
};
 


module.exports = mongoose.model('User', userSchema);