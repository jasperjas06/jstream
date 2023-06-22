import React, { useEffect, useState } from "react";
import './model.css'
import { useNavigate ,useLocation} from "react-router-dom";
import axios from "axios";
const VideoPlayer = () => {
    const [video,setVideo]=useState()
    const navigate=useNavigate()
    const location=useLocation()
    let split=location.pathname.split("/") 
    let iNo=split.length-1
    const id=split[iNo]
    const back=()=>{
        navigate('/home')
    }

    useEffect(()=>{
        let fetch=async()=>{
            let res=await axios.get(`http://localhost:2022/api-video/${id}`)
            setVideo(res.data)
        }
        fetch()
    },[id])

    return (
        <>
        <div className="Main_model">
        <div className="model">
            <div className="con">
                <video width={"100%"} height={500}  controls src={video?.url} />
            </div>
        </div>
            <button onClick={back}>Back</button>
        </div>
        </>
    );
}

export default VideoPlayer;