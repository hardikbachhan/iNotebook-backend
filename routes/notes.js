const express = require('express');
const notesRouter = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");

// ROUTE 1: Fetch all notes using: GET "/api/notes/fetchallnotes". Login required
notesRouter.get("/fetchallnotes", fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({user: req.user.id});
        res.json(notes);
    } catch (error) {    // catching errors
        console.error(error.message);
        res.status(500).send("Internal Server error.");
    }
});

module.exports = notesRouter;