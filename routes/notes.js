const express = require('express');
const notesRouter = express.Router()

notesRouter.get("/", (req, res) => {
    
    res.json([])
})

module.exports = notesRouter