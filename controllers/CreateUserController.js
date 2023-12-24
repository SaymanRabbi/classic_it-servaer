const { createToken } = require("../middleware/crete.token");
const UserModel = require("../models/UserModel");

exports.CreateUserController = async (req, res) => {
    try {
         const { name, email, password } = req.body;    
         if(!name || !email || !password){
             return res.status(400).json({
                 success: false,
                 message: "Please enter all fields"
             }) 
         }
            if(password.length < 6){
                return res.status(400).json({
                    success: false,
                    message: "Please enter password with 6 or more characters"
                })
            }
            const userExits = await UserModel.findOne({email});
            if(userExits){
                return res.status(403).json({
                    success: false,
                    message: "User already exits with this email"
                })
            }
            const user = await UserModel.create(req.body);
            res.status(201).json({
                success: true,
                user
            })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        }) 
    }
}
exports.GetUserController = async (req, res) => {
    try {
        const {password,email} = req.body;
        const user = await UserModel.findOne({email});
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            }) 
        }
        const matchPass = user.password === password;
        if(!matchPass){
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            })
        }
     const token =   createToken(user);
     if(!token){
        return res.status(400).json({
            success: false,
            message: "Invalid credentials"
        })
     }
     user.token = token;
        user.save();
        res.status(201).json({
            success: true,
            user,
            token
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        }) 
    }
}