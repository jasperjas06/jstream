import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import VideoPlayer from "./model/VideoPlayer";
import Popup from 'reactjs-popup';
import "./HomeStyles.css";
import Plan from "./Plan";
import axios from "axios";
const Player = () => {
    const [open,setOpen]=useState(false)
    const [user,setUser]=useState()
    const [data,setData]=useState()

    const navigate=useNavigate()
    let userGet = JSON?.parse(localStorage.getItem("Token")) || null
    let Subscribed = userGet?.isSubscribed;
    let token = userGet?.token;

    useEffect(()=>{
        let fetch=async()=>{
            if(token){

                let res=await axios({
                    method: 'get',
                    url:"http://localhost:2022/api/token",
                    headers: {
                        accept: 'application/json',
                        token:token
                    }
                })
                setUser(res.data)
            }
        }
        fetch()
    },[token])
    useEffect(()=>{
        let fetch=async()=>{
            let res=await axios.get("http://localhost:2022/api-video/")
            setData(res.data)
        }
        fetch()
    },[])


// console.log(data);
    const play =(id)=>{
        navigate('/player/'+id)
    }
    const plan=()=>{
        navigate('/plan')
    }

    // const data=[
    //     {
    //         // url:require("../../public/videos/1564674844-disney.mp4"),
    //         title:"Disney",
    //         url:require("../videos/1564674844-disney.mp4")
    //     },
    //     {
    //         url:require("../videos/1564676115-marvel.mp4"),
    //         title:"Marvel"
    //     },
    //     {
    //         url:require("../videos/1564676296-national-geographic.mp4"),
    //         title:"National-Geographic"
    //     }
    // ]
    return (
       <>
       <div className="videos_00">
                {/* <h1 className="homeTitle">Select the hall</h1> */}
                {<>{data?.map((item,index)=>(
                    <div className='searchItem' key={index}>
                        <video src={item?.url} alt="" width={300} height={151} className="siImg" />
                        <div className="siDesc">
                            <h1 className="siTitle">{item?.title}</h1>
                            {/* <Link to={`/halls/${item._id}`}> */}
                                {/* <button className='siCheckButton'>See Video</button> */}
                            {/* </Link> */}
                            <div >
                                {user?.isSubscribed?<>
                                <button onClick={()=>play(item?._id)}>Watch</button>
                                </>:<>
                                <Popup trigger={<button > Watch this movie  </button>} 
                                position="top center">
                                <div className="popUp">
                                <h3>Please Subscribe</h3>
                                <p>Buy a plan to watch the video</p>
                                <button onClick={plan} >Subscribe</button>
                                </div>
                            </Popup>
                                </>}
                            </div>
                        </div>
                    </div>))}
                </>}
                 {/* <VideoPlayer setOpen={setOpen}  /> */}
            </div>
            {/* <Plan/> */}
       </> 
    );
}

export default Player;