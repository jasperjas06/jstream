import {  useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Toaster, toast } from "react-hot-toast";
function Plan() {
  const navigate = useNavigate();
  // const [plan, setPlan] = useState();
  const [isSubscribed, setIsSubscribed] = useState(true);
  const user = JSON?.parse(localStorage.getItem("Token")) || null;
  const token = user?.token;
  // const data={plan,check}
  
  async function payment(plan) {
    // console.log("working",plan);
    try {
      await axios({
        method: "post",
        url: "https://j-stream-server.onrender.com/api/addplan",
        headers: {
          accept: "application/json",
          token: token,
        },
        data: {
          plan,
          isSubscribed,
        },
      })
        .then((response) => {
          // console.log(response.data);
          // toast.success("Subscribed Successfull");
          // localStorage.setItem('Token',JSON.stringify(response.data))
          // localStorage.setItem('Token',JSON.stringify(response.data))
          if(response.data){
            setTimeout(function () {
              navigate("/home");
            }, 2000);
            
          }
          //       axios.post('https://j-stream-server.onrender.com/api/addplan',{plan,isSubscribed})
          //
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error.message);
    }
  }

  const data = [
    {
      id: "1",
      url: "https://i.ytimg.com/vi/M9D-Rnk0IT0/maxresdefault.jpg",
      title: " 199",
      text: "Rs 199 per month plan lets users watch content at 480p resolution on just one screen at a time",
    },
    {
      id: "2",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo7nYjOrLnzWGbLatsGjuluzlQt2jFNZo1nQ&usqp=CAU",
      title: " 299",
      text: " Rs 299 a month for a Mobile plan, films in high definition (HD) on a single screen at a time.",
    },
    {
      id: "3",
      url: "https://www.crispydeal.in/uploads/2020/03/42251a98-oyo-699-788x469-1.png",
      title: " 699",
      text: "The Rs 699 plan is a kind of family plan wherein the account can be accessed on four screens at a time.",
    },
  ];

  return (
    <>
      <div className="plan_main">
        {/* <Navbar /> */}
        <div className="Card_main">
          {
            <>
            <Grid container  spacing={3}>
              
              {data?.map((item, index) => (
                <Grid item xs={4}>
                <Card  key={index}>
                  <CardMedia
                  // component='video'
                  sx={{ height: 150  }}
                  // image="https://www.adorama.com/alc/wp-content/uploads/2021/04/motion-blur-person-subway-feature.jpg"
                  image={item.url}
                  // onClick={play}
                  title="green iguana"
                  />
                  <CardContent>
                    <Typography>Plan{item.title}</Typography>
                    <Typography>{item.text}</Typography>
                    <Box>

                    <Button variant="outlined" color="success" onClick={()=>payment(item.title)}>Buy</Button>
                    </Box>
                  </CardContent>
                  {/* <div style={{float:"right"}}> */}
                  {/* </div> */}
                  
                </Card>
              </Grid>
              ))}
            </Grid>
              
            </>
          }
        </div>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
      </div>
    </>
  );
}

export default Plan;
