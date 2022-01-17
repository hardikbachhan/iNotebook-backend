const express = require('express');
const authRouter = express.Router()

authRouter.get("/", (req, res) => {
    console.log(req.body);
    res.send("Hello");
})

module.exports = authRouter