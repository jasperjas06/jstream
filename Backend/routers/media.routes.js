import express from 'express'
import storage from '../config/multer.js'
import  Media from '../model/media.js'
import {v2 as cloudinary} from 'cloudinary'
import { getById,get } from '../controller/media.js'


 cloudinary.config({
    cloud_name: 'dxbes4v75',
    api_key: '995821619138789',
    api_secret:'3P07AQMiuJSXJcQUvrhh1-oX0f4',
})



const uploadVideo = (req, res) => {

    cloudinary.uploader.upload(req.file.path,
        {
            resource_type: "video",
            folder: "video",
          },
        
        (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        var multer = new Media({
            title: req.file.originalname,
            url: result.url,
            cloudinary_id: result.public_id,
            description: req.body.description,
        });
        multer.save((err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            return res.status(200).send(result);
        }
        )
    }
    );
}

const deletevideo = (req,res)=>{
    cloudinary.uploader.destroy(req.file.path,{
        resource_type: "video",
        folder: "video"
    },
    (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        console.log(result);
    }
    )
}

const data=()=>{
}


const router=express.Router()

router.post('/uploadVideo',storage.single('file'), uploadVideo);
router.post('/deleteVideo',storage.single('file'), deletevideo);
router.get("/:id",getById)
router.get("/",get)

export default router