const express = require("express");
const authRouter = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

// Create a User using: POST "/api/auth/createuser". Doesn't require Authentication/ No login required
authRouter.post("/createuser", [
    body('name', 'Enter a valid name').isLength({min: 3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength(({min: 5})),
], async (req, res) => {
    // if there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        res.status(400).json({errors: errors.array()})
    }
    // check if user with this email exists already
    try {
        
    let user = await User.findOne({email: req.body.email});
    if (user){
        return res.status(400).json({error: "Sorry, a user with this email already exists."});
    }
    // creating a new user
    user = await User.create({   // returns a promise
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    // .then((user) => res.json(user))
    // .catch(err => {
    //     console.log(err);
    //     res.json({error: 'Please enter a unique value.', message: err.message});
    // })

    res.json({message: "user created successfully!"}); 

    } catch (error) {    // catching errors
        console.error(error.message);
        res.status(500).send("Some error occured.");
    }
});

module.exports = authRouter;
