import multer from "multer";
import path from "path"
import cloudinary from 'cloudinary'
import Media from '../model/media.js'


const MediaStorage= multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
      let ext = path.extname(file.originalname);  
      if (ext !== ".mp4" && ext !== ".mkv" && ext !== ".jpeg" && ext !== ".jpg" && ext !== ".png" ) {
        cb(new Error("File type is not supported"), false);
        return;
      }
      cb(null, true);
    },
})

// const uploadvideo= (req,res)=>{
//     cloudinary.UploadS(req.file.path,
//         {
//             resource+


//         })
// }