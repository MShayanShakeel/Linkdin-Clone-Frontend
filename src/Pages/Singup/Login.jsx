import React, { useEffect, useState } from "react";
import "./Singup.css";
import singupimage from "../../Images/LoginPicture.png";
import { MdLockClock } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import notify from "../../Components/toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = () => {
    const data = {
      email: email,
      password: password,
      role: role,
    };
    axios
      .post("http://localhost:4000/api/v1/user/login", data)
      .then((res) => {
        console.log(res?.data?.message);
        console.log(res?.data?.token);
        localStorage.setItem("token", res?.data?.token);
        console.log(res, "res ");
        notify(res?.data?.message);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err?.response?.data?.message, "err ");
        notify(err?.response?.data?.message);
      });
  };

  const handleSelectRole = (e) => {
    setRole(e.target.value);
  };
  return (
    <>
      <div className="Singup-main">
        <div className="row Singup-second">
          <div
            className="col-sm-7 col-md-7 col-lg-7 col-xl-7  Left-Side"
            style={{
              borderTopLeftRadius: "8px",
              borderBottomLeftRadius: "8px",
            }}
          >
            <img src={singupimage} alt="singupimage" />
          </div>
          <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5">
            <div className="Singup-text">
              <h3>Hello!</h3>
              <h5>Good Morning</h5>
            </div>
            <div className="Right-Side">
              <select onChange={handleSelectRole}>
                <option value="" disabled selected>
                  Role
                </option>
                <option value="Employer">Employer</option>
                <option value="Job Seeking">Job Seeking</option>
              </select>
              <span className="Input-span">
                <input
                  type="text"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MdOutlineMarkEmailRead />
              </span>
              <span className="Input-span">
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <MdLockClock />
              </span>
              <button className="Singup-Button" onClick={handleLogin}>
                Login
              </button>
              <button className="Singup-Button">
                <Link
                  to="/singup"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Registration
                </Link>
              </button>
              <div className="Input-span">
                <a href="#">Forget Password</a>
                <label>{/* Remember Me */}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
