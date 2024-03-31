const mongoose = require("mongoose");


const connectDB = (uri)=>{
    console.log("connected to database");
    return mongoose.connect(uri);
};

module.exports= connectDB; 