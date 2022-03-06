// file to connect with basic mongodb server.

const mongoose = require("mongoose");  // cjs used, not es6 modules
const mongoURI = process.env.MONGO_URL;

// mongoose returns promises which can be solved using then or async await.

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Successfully connected to Mongo");
    })
}

module.exports = connectToMongo;
