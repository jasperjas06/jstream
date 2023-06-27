import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Select from 'react-select'
import Navbar from "./Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Plan() {
  const navigate=useNavigate()
  const [plan,setPlan]=useState();
  const [isSubscribed,setIsSubscribed]=useState();
  const user=JSON?.parse(localStorage.getItem("Token")) || null
  const token=user?.token
  // const data={plan,check}
 async function payment(){
    try {
      await axios({
        method: 'post',
        url:"http://localhost:2022/api/addplan",
        headers: {
            accept: 'application/json',
            token:token
        },
        data:{
          plan,isSubscribed
        }
    }).then(response=>{
            console.log(response.data);
            alert("Subscribed Successfull")
            // localStorage.setItem('Token',JSON.stringify(response.data))
            // localStorage.setItem('Token',JSON.stringify(response.data))
          setTimeout(function(){
      navigate('/home')
                  }, 2000);
//       axios.post('http://localhost:2022/api/addplan',{plan,isSubscribed})
//     
     
  })
  .catch(error=>{console.log(error);})
    } catch (error) {
      console.log(error.message);
    }
  }
    
  const data=[
    {
      id:"1",
      url:"https://i.ytimg.com/vi/M9D-Rnk0IT0/maxresdefault.jpg",
      title:"Plan 199",
      text:"Rs 199 per month plan lets users watch content at 480p resolution on just one screen at a time",
    },
    {
      id:"2",
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo7nYjOrLnzWGbLatsGjuluzlQt2jFNZo1nQ&usqp=CAU",
      title:"Plan 299",
      text:" Rs 299 a month for a Mobile plan, which allows subscribers to watch its shows and films in high definition (HD) on a single screen at a time.",
    },
    {
      id:"3",
      url:"https://www.crispydeal.in/uploads/2020/03/42251a98-oyo-699-788x469-1.png",
      title:"Plan 699",
      text:"The Rs 699 plan is a kind of family plan wherein the account can be accessed on four screens at a time.",
    }
  ];

  
  return (
    <><div className="plan_main">
      <Navbar/>
    <div className="Card_main">
      {<>{data?.map((item,index)=>(
        <Card  className="Card" key={index}>
             <Card.Img variant="top" src={item.url} style={{width:"90%", height:"20%"}} />
             <Card.Body>
               <Card.Title style={{color:"white"}}>{item.title}</Card.Title>
               <Card.Text style={{color:"white"}}>
                {item.text}
               </Card.Text>
               {/* <button>Buy</button> */}
             </Card.Body>
           </Card>
      )
      )}
      </>}
    </div>
    <div >
      <div className="chose_plan">
        <div className="plan_inside">
         <label>Chose your plan</label>
         <select onChange={(e)=>{setPlan(e.target.value)}} >
          <option value={"199"}>199</option>
          <option value={"399"}>399</option>
          <option value={"699"}>699</option>
         </select>
         <label>Confirm this plan</label>
         <input type="checkbox" value={true} onChange={e=>setIsSubscribed(e.target.value)} required={true}/>
         <button onClick={payment}>Buy</button>
         </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Plan;
