// file to connect with basic mongodb server.

const mongoose = require("mongoose");  // cjs used, not es6 modules
const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

// mongoose returns promises which can be solved using then or async await.

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Successfully connected to Mongo");
    })
}

module.exports = connectToMongo;
