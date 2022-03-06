const express = require("express");
const authRouter = express.Router();
const User = require("../models/User");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const bcrpyt = require("bcryptjs");

// JWT secret signature, should be stored in .env.local or config file.
// Used to sign JWT when sending to a new user so that (s)he can access protected routes.
const JWT_SECRET = process.env.JWT_SECRET;

const jwt = require("jsonwebtoken");

// ROUTE 1: Create a User using: POST "/api/auth/createuser". Doesn't require Authentication/ No login required
authRouter.post("/createuser", [
    body('name', 'Enter a valid name').isLength({min: 3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength(({min: 5})),
], async (req, res) => {
    // if there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        res.status(400).json({success: "false", errors: errors.array()})
    }
    try {
        // check if user with this email exists already
        let success = true;
        
        let user = await User.findOne({email: req.body.email});
        if (user){
            success = false;
            return res.status(400).json({success, error: "Sorry, a user with this email already exists."});
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
        res.json({success, authToken})

    } catch (error) {    // catching errors
        console.error(error.message);
        res.status(500).send("Internal Server error.");
    }
});

// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
authRouter.post("/login", [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    // if there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({success: "false", errors: errors.array()})   
    }
    // finding user according to details given
    const {email, password} = req.body;
    try {

        let user = await User.findOne({email});
        let success = true;
        // console.log(user.name);
        if (!user){
            success = false;
            return res.status(400).json({success, error: "Please enter valid credentials."});
        }
        const passwordCompare = await bcrpyt.compare(password, user.password)
        if (!passwordCompare){
            success = false;
            return res.status(400).json({success, error: "Please enter valid credentials."});
        }
        // res.json({message: "User login successfully."})
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({success, authToken})

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error.");
    }
});

// ROUTE 3: Get loggedin User details using: POST "api/auth/getuser". Login required.
// A JWT token will be sent which will be used to identify user and get details.
authRouter.post("/getuser", fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;  //"todo";
        const user = await User.findById(userId).select("-password");
        // console.log(user);
        res.send({success: "true", user})
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error.");
    }
});

module.exports = authRouter;
