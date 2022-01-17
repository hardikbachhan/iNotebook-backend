const express = require('express');
const authRouter = express.Router()

authRouter.get("/", (req, res) => {
    const obj = {
        name: "His si s",
        number: 34
    }
    res.json(obj)
})

module.exports = authRouter