const mongoose = require('mongoose');

let mongoURI = process.env.mongoURI || "mongodb+srv://abhay:royabhayjeet@abhay.7je5cm5.mongodb.net/massgyan"

const connectToMongo = ()=>{
    mongoose.connect(process.env.mongoURI);
    console.log("Connected")
}

module.exports = connectToMongo;
