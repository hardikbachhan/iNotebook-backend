const express = require("express");
const authRouter = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrpyt = require("bcryptjs");

// JWT secret signature, should be stored in .env.local or config file.
// Used to sign JWT when sending to a new user so that (s)he can access protected routes.
const JWT_SECRET = "#ard!k1$ago@db0y";

const jwt = require("jsonwebtoken");

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
    try {
        // check if user with this email exists already
        
        let user = await User.findOne({email: req.body.email});
        if (user){
            return res.status(400).json({error: "Sorry, a user with this email already exists."});
        }
        // hashing the password before saving it in database
        const salt = await bcrpyt.genSalt(10);
        const secPass = await bcrpyt.hash(req.body.password, salt);

        // creating a new user
        user = await User.create({   // returns a promise
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })
        // .then((user) => res.json(user))
        // .catch(err => {
        //     console.log(err);
        //     res.json({error: 'Please enter a unique value.', message: err.message});
        // })

        // data which will become the payload of jwt
        const data = {
            user: {
                id: user.id
            }
        }
        // signing the payload using out signature
        const authToken = jwt.sign(data, JWT_SECRET);
        // console.log(jwtData);
        // res.json({message: "user created successfully!"}); 
        res.json({authToken})

    } catch (error) {    // catching errors
        console.error(error.message);
        res.status(500).send("Some error occured.");
    }
});

module.exports = authRouter;
