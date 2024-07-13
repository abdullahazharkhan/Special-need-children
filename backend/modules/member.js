const mongoose = require("mongoose");

const memSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    id : {
        type : String,
        required : false,
        unique : true
    },
    email : {
        type : String,
        required : false,
        unique : true
    },
    image : {
        type : String,
        required : false
    },
    category : {
        type : String,
        required : false
    },
    team : {
        type : String,
        required : true
    }
});

const memModel = mongoose.model('Member',memSchema);
module.exports = memModel;