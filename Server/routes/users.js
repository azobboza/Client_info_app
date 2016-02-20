var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var jwt = require('jwt-simple');
var config = require('../config/database');

/* GET users listing. */
router.get('/registration', function(req, res, next){
    User.find({}, function(err, users){
        if(err){
            res.send(err);
        }else{
            res.json(users);
        }
    });
});

/* POST users listing. */
router.post('/registration', function(req, res, next) {
    
  var newUser = User(req.body);
        
  newUser.save(function(err){
      if(err){
          res.send(err);
      }else{
          res.send('Successfuly added user!');
      }
  })
});

router.post('/login', function(req, res, next) {
    
  User.findOne({email: req.body.email}, function(err, user){

            if(err){
                res.status(401);
                res.json({
                    "status": 401,
                    "message": "err"
                });
                return;
            }
        
            if(!user){
                res.status(401);
                res.json({
                    "status": 401,
                    "message": "Invalid credentials"
                });
                return;
            }
            
            //given username and password matches a database document
            user.comparePassword(req.body.password, function(err, isMatch){
                
                if (isMatch && !err) {
                    res.json(genToken(user));
                } else {
                    //res.json({success: false, msg: 'Authentication failed. Wrong password.'});
                    res.status(401);
                    res.json({
                        "status": 401,
                        "message": "Authentication failed. Wrong password."
                    });
                }
                
            });
        });
});


function genToken(user) {
  var expires = expiresIn(7); // 7 days
  var token = jwt.encode({
    exp: expires
  }, config.secret);
 
  return {
    token: 'JWT ' + token,
    expires: expires,
    user: user
  };
}

//token expires in 7 days
function expiresIn(numDays){
    var dateObj = new Date();
    return dateObj.setDate(dateObj.getDate() + numDays);
}

module.exports = router;
