// file to connect with basic mongodb server.

// to read data from .env file
const dotenv = require('dotenv');
dotenv.config();

const mongoose = require("mongoose");  // cjs used, not es6 modules
const mongoURI = process.env.MONGO_URL;

// mongoose returns promises which can be solved using then or async await.

const connectToMongo = () => {
    mongoose.connect(mongoURI, 
        { useNewUrlParser: true, useUnifiedTopology: true }, 
        () => {
        console.log("Successfully connected to Mongo");
    });
}

module.exports = connectToMongo;
