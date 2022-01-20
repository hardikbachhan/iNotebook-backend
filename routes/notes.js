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
            return res.status(400).json({errors: errors.array()})
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

// ROUTE 3: Updating an existing Note using: PUT "/api/notes/updatenote/:id". Login required
notesRouter.put("/updatenote/:id", fetchuser, [
    body('title', 'Enter a valid name').isLength({min: 3}),
    body('description', 'Password must be atleast 5 characters').isLength(({min: 1}))
], async (req, res) => {
    try {
        // if there are errors, return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }

        const {title, description, tag} = req.body;

        // Create a new note object
        const newNote = {};
        if (title){newNote.title = title};
        if (description){newNote.description = description};
        if (tag){newNote.tag = tag};

        // Check if update request is valid
        let note = await Note.findById(req.params.id);
        if (!note){
            return res.status(404).send("Not Found");
        }
        const isValidReq = note.user.equals(req.user.id); // note.user.toString() === req.user.id
        if (!isValidReq){
            return res.status(401).send("Not Allowed");
        }

        // Find the note to be updated and update it.
        note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new: true});
        res.json({note});

        // MY APPROACH:
        // const {title, description, tag} = req.body;
        // const noteid = req.params.id;

        // const note = await Note.findOne({_id: noteid});
        // const isReqValid = note.user.equals(req.user.id);
        // console.log(note.user.toString());
        // console.log(req.user.id);

        // return res.json({isReqValid})

        // if (!isReqValid){
        //     return res.status(400).json({error: "You are not authorized to make this change."})
        // } 
        // const updatedNote = await Note.updateOne({_id: noteid}, {
        //     user: req.user.id,
        //     title: title,
        //     description: description,
        //     tag: tag,
        // })
        
        // res.json({updatedNote})
        
    } catch (error) {    // catching errors
        console.error(error.message);
        res.status(500).send("Internal Server error.");
    }
});

module.exports = notesRouter;