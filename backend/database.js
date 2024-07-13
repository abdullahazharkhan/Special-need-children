const mongoose = require ("mongoose");

const connectToDb = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/data").then(()=>{
        console.log("Successfully connected to database");
    }).catch(()=>{
        console.log("Unable to connecte to database");
    })
}

module.exports = connectToDb;