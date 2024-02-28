import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../assets/css/login.css";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  var validateLoginForm = (userName, password) => {
    let errors = {};
    if (!userName) {
      errors.userName = "*User name is required";
    }
    if (!password) {
      errors.password = "*Password is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handelLoginForm = async (e) => {
    e.preventDefault();
    const isValidate = validateLoginForm(userName, password);

    if (isValidate) {
      const loginData = {
        username: userName,
        password: password,
      };

      try {
        // toast.err("Successfull");
        console.log("Hiii");
        //return false;
        const response = await axios.post(
          "https://dummyjson.com/auth/login",
          loginData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
        const token = response.data.token;
        console.log("token", token);
        console.log("Error msg", response.data.message);
        // Check if the token exists and is not empty
        if (token && token.trim() !== "") {
          toast.success("Login Successfull!");
          localStorage.setItem("token", response.data.token);
          // localStorage.setItem('current_user', JSON.stringify(response.data.current_user))
          navigate("/");
        } else {
          toast.error("Something went wrong, please try again");
        }
      } catch (error) {
        toast.error("Invalid credentials");
        // dispatch(hideLoading());
        // setLoading(false);
        console.log(error);
      }
    }
  };

  return (
    <div className="bodyLogin">
      <div className="container" id="container">
        <div className="form-container log-in-container">
          <form method="post" onSubmit={handelLoginForm}>
            <span style={{ fontSize: "25px", fontWeight: "bold" }}>
              Sign in to your account
            </span>

            <span style={{ fontSize: "18px", marginTop: "9px" }}>
              There are many variation of passages of lorem ipsum available in
              some form
            </span>

            <span className="error-text">
              {errors.userName ? errors.userName : ""}
            </span>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control_"
                name="userName"
                value={userName}
                placeholder="User Name"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <span className="error-text">
              {errors.password ? errors.password : ""}
            </span>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control_"
                name="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <input type="checkbox" />
              <label style={{ marginLeft: "0px" }}>Keep me logged in</label>
            </div>

            <button>LOGIN</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right"></div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
