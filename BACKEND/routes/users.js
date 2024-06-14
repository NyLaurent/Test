const router = require("express").Router();
const {User, validate} = require("../models/user");
const bcrypt= require("bcrypt");

router.post("/",async(req,res)=>{
    try{
        //Validate request body
        const {error} = validate(req.body);
        if(error)
            return res.status(400).send({
        message: error.details[0].message});
        //Checking if the user exists
        const user = await User.findOne({
            email: req.body.email
        });
        
        if(user)
            return res.status(409).send({message:"User with given email arleady exist!"});
//generate salt and hash password 
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password,salt);

        //create a new user

        await new User({...req.body, password:hashPassword}).save();
        res.status(201).send({
            message:"User created successfully"
        })
    }catch(error){
        res.status(500).send({
            message:"Internal Server Error"
        })

    }
})
