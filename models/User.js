// used to save user details who will login

const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
      type: String,
      required: true, 
      unique: true  
  },
  password: {
      type: String,
      required: true
  },
  date: {
      type: Date,
      default: Date.now   // don't call the function here, we only need to give a function which will run when document gets inserted into the database.
  }
});

const User = mongoose.model("user", UserSchema);   // a model means a mongodb collection
// User.createIndexes();   // to make email a unique index
module.exports = User;