var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/clientInfo', function(err, db){
   if(err) return console.log(err);
    console.log('connected to db');
});

module.exports = {
  'secret': 'bozaIsAwesome',
//  'database': 'mongodb://localhost/node-rest-auth'
    //'database': 'mongodb://localhost/clientInfo'
};
