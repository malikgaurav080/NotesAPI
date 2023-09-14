const userModel = require("../models/user");

const createUser = async (req, res) =>{
    
    const {username, password, email} = req.body;

    const newUser = new userModel({
        username: username,
        password : password,
        email: email
    });

    try {
        
        await newUser.save();
        res.status(201).json(newUser);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
    
}



const getUser = async (req, res) =>{
    try {
        
        const user = await userModel.find({username : req.body.username});
        res.status(200).json(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

module.exports = {
    createUser,
    getUser
}