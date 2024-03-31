require('dotenv').config();
const express = require("express");
const app = express();
const connectDB = require('./db/connect')
const PORT = process.env.PORT || 5000;

const plants_routes = require("./routes/plants")

app.get("/",(req,res) =>{
    res.send("hi i am live");
});

//middleware
app.use("/api/plants",plants_routes);

const start = async()=>{
   try{
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT,()=>{
        console.log("server is running on port ",PORT);
    });
}catch(err){
    console.error(err.message);
    
}
};

start();