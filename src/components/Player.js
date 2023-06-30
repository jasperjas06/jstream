import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import VideoPlayer from "./model/VideoPlayer";
import Popup from "reactjs-popup";
import "./HomeStyles.css";
// import Plan from "./Plan";
import axios from "axios";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Modal, Typography } from "@mui/material";
const Player = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState();
  const [data, setData] = useState();

  const navigate = useNavigate();
  let userGet = JSON?.parse(localStorage.getItem("Token")) || null;
  let Subscribed = userGet?.isSubscribed;
  let token = userGet?.token;
  const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  // const handleOpen = () => play(item?._id);
  const handleClose = () => setOpen(false);

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
  useEffect(() => {
    let fetch = async () => {
      let res = await axios.get(
        "https://j-stream-server.onrender.com/api-video/"
      );
      setData(res.data);
    };
    fetch();
  }, []);

  // console.log(user);
  const play = (id) => {
    if(user?.isSubscribed){
      navigate("/player/" + id);
    }else{
      setOpen(true)
    }
  };
  const plan = () => {
    navigate("/plan");
  };

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
    <div>
      <Grid container spacing={4}>
        {data?.map((item,index)=>(
          <Grid item xs={3}>
          <Card sx={{backgroundColor:"#07101d74"}}>
              <CardMedia 
              component='video'
              sx={{ height: 150  }}
              // image="https://www.adorama.com/alc/wp-content/uploads/2021/04/motion-blur-person-subway-feature.jpg"
              image={item.url}
              onClick={() => play(item?._id)}
              title="green iguana" />
              {/* <video
              src={item?.url}
              alt=""
              width={"100%"}
              height={151} /> */}
              <CardContent>
              <Typography color="white">{item.title}</Typography>
              <Typography variant="body2" color="gray">{item.description}</Typography>
            </CardContent>
            <CardActions>
      </CardActions>
          </Card>
          <Modal open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      
      Kindly Subscribe
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Don’t let the fun pass you by! For more entertaining videos, subscribe now.
    </Typography>
    <Button onClick={handleClose}>Cancel</Button>
    <Button onClick={plan}>Subscribe</Button>
  </Box>
          </Modal>
        </Grid>
        ))}
        
      </Grid>
    </div>
    {/* <Card>
          <CardContent>
            <CardMedia 
            sx={{ height: 140 }}
            image="https://www.adorama.com/alc/wp-content/uploads/2021/04/motion-blur-person-subway-feature.jpg"
            title="green iguana" />
            <Typography>Jaspere</Typography>
          </CardContent>
        </Card> */}
    </>
  );
};

export default Player;
