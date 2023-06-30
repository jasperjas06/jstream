import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar/Navbar";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
const Profile = () => {
  const [user, setUser] = useState();
  let userGet = JSON?.parse(localStorage.getItem("Token")) || null;
  let token = userGet?.token;

  useEffect(() => {
    let fetch = async () => {
      if (token) {
        let res = await axios({
          method: "get",
          url: "https://j-stream-server.onrender.com/api/token",
          headers: {
            accept: "application/json",
            token: token,
          },
        });
        setUser(res.data);
      }
    };
    fetch();
  }, [token]);

  return (
    <>
      <Navbar />
      <div>
        <div className="profile">
          <center>
            <img alt="img" src="/images/cta-logo-one.png" />
          </center>
          <Card >
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <img src="https://pbs.twimg.com/media/DeEM4UZWsAE_SuK.png" alt="profile" style={{height:250,width:250}} />
                </Grid>
                <Grid item xs={5}>
              <Box sx={{display:"flex"}}>
              <Typography  sx={{fontSize:40, fontWeight:"bold",color:"#ff0066"}}>Name : </Typography>
              <Typography sx={{marginLeft:2,fontSize:40}}>{user?.name}</Typography>
              </Box>
              <Box sx={{display:"flex"}}>
              <Typography sx={{fontSize:40, fontWeight:"bold",color:"#ff0066"}}>Email : </Typography>
              <Typography sx={{marginLeft:2,fontSize:40}}>{user?.email}</Typography>
              </Box>
              <Box sx={{display:"flex"}}>
              <Typography sx={{fontSize:40, fontWeight:"bold",color:"#ff0066"}}>Mobile  : </Typography>
              <Typography sx={{marginLeft:2,fontSize:40,}}>{user?.phone_no}</Typography>
              </Box>
              <Box sx={{display:"flex"}}>
              <Typography sx={{fontSize:40, fontWeight:"bold",color:"#ff0066"}}>Plan : </Typography>
              <Typography sx={{marginLeft:2,fontSize:40}}>{user?.plan}</Typography>
              </Box>
              </Grid>
              </Grid>
            </CardContent>
          </Card>
          
        </div>
        <img
          src="/images/slider-badag.jpg"
          alt="img"
          style={{ width: "100%", height: "45vh" }}
        />
      </div>
    </>
  );
};

export default Profile;
