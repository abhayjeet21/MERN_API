const mongoose = require('mongoose');

let mongoURI = process.env.mongoURI ;
const connectToMongo = ()=>{
    mongoose.connect(mongoURI);
    console.log("Connected")
}

module.exports = connectToMongo;
