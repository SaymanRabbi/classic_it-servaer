const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter user name"],
        trim:true,
        maxLength:[100,"User name cannot exceed 100 characters"]
    },
    email:{
        type:String,
        required:[true,"Please enter user email"],
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please enter user password"],
        trim:true,
    },
    token:{
        type:String,
    },
},{
    timestamps:true
});


module.exports = mongoose.model('User',userSchema);