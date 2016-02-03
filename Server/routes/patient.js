var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Patient = require('../models/patient');

var config = require('../config/database');
//var passport = require('passport');
//
//passport.initialize()
//require('../config/passport')(passport);

//all patient ever
router.get('/', function(req, res, next){
    Patient.find({}, function(err, patient){
        if(err){
            res.send(err);
        }else{
            res.json(patient);
        }
    });
});

router.get('/user/:userId', function(req, res, next){
    Patient.find({userId: req.params.userId}, function(err, patient){
        if(err){
            res.send(err);
        }else{
            res.json(patient);
        }
    });
});

router.get('/:patientId', function(req, res, next){
    Patient.find({_id: req.params.patientId}, function(err, patient){
        if(err){
            res.send(err);
        }else{
            res.json(patient);
        }
    });
});

router.post('/add', function(req, res, next) {
  var newPatient = Patient(req.body);
        
  newPatient.save(function(err){
      if(err){
          res.send(err);
      }else{
          res.send('Successfuly added patient!');
      }
  })
});

getToken = function(headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};


module.exports = router;