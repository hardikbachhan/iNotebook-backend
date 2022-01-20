const express = require('express');
const notesRouter = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

// ROUTE 1: Fetch all notes using: GET "/api/notes/fetchallnotes". Login required
notesRouter.get("/fetchallnotes", fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({user: req.user.id});
        res.json(notes);
    } catch (error) {    // catching errors
        console.error(error.message);
        res.status(500).send("Internal Server error.");
    }
});

// ROUTE 2: Add a new Note using: POST "/api/notes/addnote". Login required
notesRouter.post("/addnote", fetchuser, [
    body('title', 'Enter a valid name').isLength({min: 3}),
    body('description', 'Password must be atleast 5 characters').isLength(({min: 1}))
], async (req, res) => {
    try {
        // if there are errors, return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            res.status(400).json({errors: errors.array()})
        }
        // destructuring keys from req
        const {title, description, tag} = req.body;

        // creating a new note
        // const note = await Note.create({
        //     user: req.user.id,
        //     title: title,
        //     description: description,
        //     tag: tag
        // })

        const note = new Note({user: req.user.id, title, description, tag})
        const savedNote = await note.save();

        res.json(savedNote);
        
    } catch (error) {    // catching errors
        console.error(error.message);
        res.status(500).send("Internal Server error.");
    }
});

module.exports = notesRouter;