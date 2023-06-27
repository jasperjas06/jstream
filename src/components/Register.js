import React,{useState} from "react";
import Navbar from "./Navbar/Navbar";
import { Formik, useFormik } from "formik";
import { useNavigate ,useLocation} from "react-router-dom";
import * as Yup from 'yup'
import axios from 'axios'
function Register() {
    const navigate=useNavigate()
    // const [name,setName]=useState();
    // const [phone_no,setPhone_no]=useState()
    // const [password,setPassword]=useState();
    // const [confirmpassword,setConfirmpassword]=useState()
    // const [email, setEmail]=useState();
    const validationSchema= Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().required("Invalid Email").email("E-mail is invalid"),
        phone_no: Yup.number().required("Phone number is required"),
        password: Yup.string().required("Password is required").min(6,"Password must be atleast 6 characters").max(10,"Password must not exits 10 characters"),
        confirmpassword: Yup.string().required("confirmPassword is required").oneOf([Yup.ref("password"),null],"confirmpassword does not match"),
    })
    const formik= useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
            phone_no:"",
            confirmpassword:""
        },
        validationSchema,
        onSubmit:(async(data)=>{
            alert("working")
            try {
                await axios.post("http://localhost:2022/api/reg",{name:data.name,phone_no:data.phone_no,password:data.password,email:data.email})
                .then(response=>{
                    console.log(response.data);
                    alert("Login Successfull")
                    localStorage.setItem('Token',JSON.stringify(response.data))
                    navigate('/home')
                })
        
            } catch (error) {
                console.log(error.message);
            }

        })
    })

    return (
      <>
      <Navbar/>
      
      <div className="MainHome" >
        <div className="login_container">
        <form className="form">
            <label>Name</label><br/>  <input type={'name'} id="name" onChange={formik.handleChange} /><br/>
            {formik.errors.name && <p style={{color:"red"}}>{formik.errors.name}</p>}
            <label>Email</label><br/> <input type={'email'}  id="email"  onChange={formik.handleChange}/><br/>
            {formik.errors.name && <p style={{color:"red"}}>{formik.errors.email}</p>}
            <label>Phone Nomber </label><br/> <input type={'number'}  id="phone_no"  onChange={formik.handleChange}/><br/>
            {formik.errors.name && <p style={{color:"red"}}>{formik.errors.phone_no}</p>}
            <label>Password </label><br/> <input type={'password'} id="password" onChange={formik.handleChange}/><br/>
            {formik.errors.name && <p style={{color:"red"}}>{formik.errors.password}</p>}
            <label>Confirm Password </label><br/> <input type={'password'} id="confirmpassword" onChange={formik.handleChange}/><br/>
            {formik.errors.name && <p style={{color:"red"}}>{formik.errors.confirmpassword}</p>}
            <button type="submit" onClick={formik.handleSubmit}>Submit</button>
        </form>
        </div>
        </div>
      </>
    );
  }
  
  export default Register;