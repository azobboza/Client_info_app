var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patientSchema = new Schema({
    name:{ 
        type:String 
    },
    lastName:{ 
        type:String 
    },
    dateOfBirthday:{ 
        type:Date 
    },
    city:{ 
        type:String 
    },
    address:{ 
        type:String 
    },
    telephone:{ 
        type:String 
    },
    email:{ 
        type:String 
    },
    information1:{ 
        type:String 
    },
    information2:{ 
        type:String 
    },
    problems:{ 
        type:String 
    },
    userId:{
        type:String
    }
});

module.exports = mongoose.model('Patient', patientSchema);

