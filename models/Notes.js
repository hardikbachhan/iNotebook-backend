// first letter is capital, because this is a model
// used to save notes written by a user

const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSchema = new Schema({
  user: {       // foreign key
    type: mongoose.Schema.Types.ObjectId,   // objectid of a document of another model 
    ref: 'user'                             // model in which above id is present
  },
  title: {
    type: String,
    required: true
  },
  description: {
      type: String,
      required: true,  
  },
  tag: {
      type: String,
      default: "General"
  },
  date: {
      type: Date,
      default: Date.now   // don't call the function here, we only need to give a function which will run when document gets inserted into the database.
  }
});

const notes = mongoose.model("notes", NotesSchema);
module.exports = notes;