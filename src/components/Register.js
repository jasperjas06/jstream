import React from "react";
import Navbar from "./Navbar/Navbar";
import {  useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import { CButton, CFormInput } from "@coreui/react";
import { Toaster, toast } from "react-hot-toast";
function Register() {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Invalid Email").email("E-mail is invalid"),
    phone_no: Yup.number().required("Phone number is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be atleast 6 characters")
      .max(10, "Password must not exits 10 characters"),
    confirmpassword: Yup.string()
      .required("confirmPassword is required")
      .oneOf([Yup.ref("password"), null], "confirmpassword does not match"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone_no: "",
      confirmpassword: "",
    },
    validationSchema,
    onSubmit: async (data) => {
    //   alert("working");
      try {
        await axios
          .post("https://j-stream-server.onrender.com/api/reg", {
            name: data.name,
            phone_no: data.phone_no,
            password: data.password,
            email: data.email,
          })
          .then((response) => {
            // console.log(response.data);
            toast.success(response.data);
            // localStorage.setItem("Token", JSON.stringify(response.data));
            navigate("/login");
          });
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  return (
    <>
      <Navbar />

      <div className="MainHome">
        <div className="login_container">
          <form className="form">
            {/* <label>Name</label><br/>  <input type={'name'} id="name" onChange={formik.handleChange} /><br/> */}
            <CFormInput
              type="name"
              size="lg"
              id="name"
              label="Name"
              placeholder="enter your name"
              onChange={formik.handleChange}
            />
            {formik.errors.name && (
              <p style={{ color: "red" }}>{formik.errors.name}</p>
            )}
            {/* <label>Email</label><br/> <input type={'email'}  id="email"  onChange={formik.handleChange}/><br/> */}
            <CFormInput
              type="email"
              size="lg"
              label="Email"
              placeholder="name@example.com"
              id="email"
              onChange={formik.handleChange}
            />
            {formik.errors.name && (
              <p style={{ color: "red" }}>{formik.errors.email}</p>
            )}
            <CFormInput
              type="number"
              size="lg"
              id="phone_no"
              label="Mobile Number "
              placeholder="enter your mobile number"
              onChange={formik.handleChange}
            />
            {/* <label>Phone Nomber </label><br/> <input type={'number'}  id="phone_no"  onChange={formik.handleChange}/><br/> */}
            {formik.errors.name && (
              <p style={{ color: "red" }}>{formik.errors.phone_no}</p>
            )}
            {/* <label>Password </label><br/> <input type={'password'} id="password" onChange={formik.handleChange}/><br/> */}
            <CFormInput
              type="password"
              id="password"
              size="lg"
              label="Password "
              placeholder="enter your password"
              onChange={formik.handleChange}
            />
            {formik.errors.name && (
              <p style={{ color: "red" }}>{formik.errors.password}</p>
            )}
            {/* <label>Confirm Password </label><br/> <input type={'password'} id="confirmpassword" onChange={formik.handleChange}/><br/> */}
            <CFormInput
              type="password"
              size="lg"
              label="Confirm Password "
              id="confirmpassword"
              placeholder="re-enter your password"
              onChange={formik.handleChange}
            />
            {formik.errors.name && (
              <p style={{ color: "red" }}>{formik.errors.confirmpassword}</p>
            )}
            {/* <button type="submit" onClick={formik.handleSubmit}>Submit</button> */}
            <CButton type="submit" id="cbtn" color="success" onClick={formik.handleSubmit}>
              Register
            </CButton>
          </form>
        </div>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
      </div>
    </>
  );
}

export default Register;
