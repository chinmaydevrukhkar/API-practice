require("dotenv").config();
const connectDB = require('./db/connect');
const Plant = require('./models/plants');

const PlantJson = require('./plants.json');


const start = async() =>{
    try{
        await connectDB(process.env.MONGODB_URL);
        await Plant.create(PlantJson);
        console.log("success");
    }catch(error){
        console.log(error);
    }

}

start();