import React,{useEffect,useState}from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar/Navbar";
const Profile = () => {
    const [user,setUser]=useState()
    let userGet = JSON?.parse(localStorage.getItem("Token")) || null
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
  
    return (
        <>
        <Navbar/>
        <div >
        <div className='profile' >
            <center><img alt="img" src="/images/cta-logo-one.png" /></center>
        <center> <div>
  <h5 className='pro-file'> <span className="color">Name</span>:{user?.name}</h5>
  <h5 className='pro-file'>   <span className="color">Email</span>:{user?.email}</h5>
  <h5 className='pro-file'>   <span className="color">PhoneNumber</span>:{user?.phone_no}</h5>
  <h5 className='pro-file'>   <span className="color">Plan</span>:{user?.plan}</h5>

  </div></center>
  </div>
  <img src="/images/slider-badag.jpg" alt="img" style={{width:"100%" ,height:"45vh"}}/>
    </div>
        </>
    );
}

export default Profile;