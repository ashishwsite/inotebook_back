const mongoose = require('mongoose');
require('dotenv').config();
// this js file to connect with local mongoosedb mongodb
//the url_string of mongoose connection is put in env file 
const mongoURI = process.env.MONGO_URL;
// call back ek function hota hai jo ki kuch kam karne ke baad return karta hai 
const connectToMongo = async ()=>{
        try{
   await mongoose.connect(mongoURI)
        console.log("mogoose is connect")
} catch(error ){
        console.log("error while connecation with mongodb",error);
}
    
    
} 

module.exports = connectToMongo;