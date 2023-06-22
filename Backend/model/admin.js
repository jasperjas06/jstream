import mongoose from "mongoose";

const Plan= mongoose.model('Plan',new mongoose.Schema({
    plan:{
        amount:{
            type:Number,
        }
    }
}))

export default Plan