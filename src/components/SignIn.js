import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import Navbar from "./Navbar/Navbar";
import { CFormInput, CButton } from "@coreui/react";
import { toast } from "react-hot-toast";
function SignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("Token")) {
      navigate("/home");
    }
  });

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Invalid Email").email("E-mail is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be atleast 6 characters")
      .max(10, "Password must not exits 10 characters"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (data) => {
      // alert("working")
      try {
        await axios
          .post("https://j-stream-server.onrender.com/api/log", {
            password: data.password,
            email: data.email,
          })
          .then((response) => {
            // console.log(response.data);
            toast.success("Login Successfull");
            // localStorage.setItem('Token',JSON.stringify(response.data))
            localStorage.setItem("Token", JSON.stringify(response.data));
            // setTimeout(function () {
              navigate("/home");
            // }, 3000);
          });
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  return (
    <>
      <Navbar />

      <div className="MainHome" style={{ height: "100vh" }}>
        <div className="login_container">
          <form className="form">
            <CFormInput
              type="email"
              size="lg"
              id="email"
              label="Email "
              placeholder="name@example.com"
              onChange={formik.handleChange}
            />
            {/* <TextField id="text" label="Standard"  /> */}
            {/* <label>Email</label><br/> <input type={'email'}  id="email"  onChange={formik.handleChange}/><br/> */}
            {formik.errors.name && (
              <p style={{ color: "red" }}>{formik.errors.email}</p>
            )}

            {/* <label>Password </label><br/> <input type={'password'} id="password" onChange={formik.handleChange}/><br/> */}
            <CFormInput
              type="password"
              id="password"
              size="lg"
              label="Password "
              placeholder="password"
              onChange={formik.handleChange}
            />
            {formik.errors.name && (
              <p style={{ color: "red" }}>{formik.errors.password}</p>
            )}

            {/* <button type="submit" onClick={formik.handleSubmit}>Submit</button> */}
            <CButton
              id="cbtn"
              type="submit"
              color="success"
              onClick={formik.handleSubmit}
            >
              Login
            </CButton>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
