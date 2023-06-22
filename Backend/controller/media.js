import path from 'path'
import multer from 'multer'
import Media from '../model/media.js'



const MediaStorage = multer.diskStorage({
    destination: 'videos', // Destination to store video 
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
});

const MediaUpload = multer({
    storage: MediaStorage,
    limits: {
        fileSize: 10000000   // 10000000 Bytes = 10 MB
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(mp4|MPEG-4)$/)) {     // upload only mp4 and mkv format
            return cb(new Error('Please upload a Video'))
        }
        cb(undefined, true)
    }
}).single('video')


const upload_vid = async (req,res) => {
    MediaUpload(req, res, () => {
       const video = new Media();
    //    video.meta_data = req.file;
    video.title=req.body.title;
    video.description=req.body.description;
       video.save().then(()=>{
       res.send({message:"uploaded successfully"})
       })
     
    });
 }
const getFiles= async(req,res)=>{
    try {
        const video= await Media.find();
        res.status(200)
        res.send(video)
    } catch (error) {
        res.send(error)
    }
}

const removeFile= async(req,res)=>{
    try {
        let title = req.body
        const video = await Media.findOne({title:title});
        if(video){
            
        }
    } catch (error) {
        
    }
}

const getById=async(req,res,next)=>{
    try {
        const get=await Media.findById(req.params.id)
        res.status(200).json(get)
    } catch (error) {
        res.status(400).json(error)
    }
}
const get=async(req,res,next)=>{
    try {
        const get=await Media.find()
        res.status(200).json(get)
    } catch (error) {
        res.status(400).json(error)
    }
}

export {upload_vid,get,getFiles,getById}