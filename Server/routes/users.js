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
          res.send('User already existes');
      }else{
          res.send('Successfuly added user!');
      }
  })
});

router.post('/login', function(req, res, next) {
    
  User.findOne({username: req.body.username}, function(err, user){

            if(err){
                res.send({success: false, msg: 'err.'});
            }
        
            if(!user){
                res.send({success: false, msg: 'Authentication failed. User not found.'});
            }
            
            //given username and password matches a database document
            user.comparePassword(req.body.password, function(err, isMatch){
                
                if (isMatch && !err) {
                    var token = jwt.encode(user, config.secret);
                    console.log(token);
                    res.json({success: true, token: 'JWT ' + token});
                } else {
                    res.send({success: false, msg: 'Authentication failed. Wrong password.'});
                }
                
            });
        });
});

module.exports = router;
