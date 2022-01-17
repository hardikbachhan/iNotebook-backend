const express = require('express');
const authRouter = express.Router();
const User = require("../models/User")


// Create a User using: POST "/api/auth/". Doesn't require Authentication.
authRouter.post("/", (req, res) => {
    console.log(req.body);
    const user = User(req.body);
    user.save();
    res.send("user saved successfully");
})

module.exports = authRouter