import mongoose from "mongoose";

const Media= mongoose.model('Media', new mongoose.Schema({
  title:{
    type:String,
    // required:[true,"uploading Video must have the Title"]
},
description:{
    type:String,
    // required:true  
},
url:{
    type:String
},
cloudinary_id:{
    type:String
} 
// createdAt:{
//     type:Date,
//     default:Date.now
// }
}))

export default Media