import mongoose from "mongoose";

const User= mongoose.model('User',new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required:true
    },
    phone_no:{ 
        type: Number,
        required:true
    },
    isSubscribed:{
        type:Boolean,
        default:false
    },
    isCustomer:{
        type:Boolean,
        default:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    plan:{
        type:Number
    }
}))

export default User