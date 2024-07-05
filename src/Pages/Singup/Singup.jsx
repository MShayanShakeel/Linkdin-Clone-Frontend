import React, { useState } from "react";
import "./Singup.css";
import singupimage from "../../Images/SingupPNG.png";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdLockClock } from "react-icons/md";
import { MdPhonePaused } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import notify from "../../Components/toast";

const Singup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");

  const handleSelectRole = (e) => {
    setRole(e.target.value);
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    const data = { name, email, password, role, phone };
    if (!name || !email || !password || !role || !phone) {
      return notify("someThing is missing");
    }
    axios
      .post("http://localhost:4000/api/v1/user/register", data)
      .then((res) => {
        console.log(res, "res");
        // console.log(res?.data?.token, "res");
        notify(res?.data?.message);
        navigate("/");
        console.log(data.message);
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
        notify(err?.response?.data?.message);
      });
  };
  console.log(name, password, email, phone, role);
  return (
    <>
      <div className="Singup-main">
        <div className="row Singup-second">
          <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5">
            <div className="Singup-text">
              <h3>Hello!</h3>
              <h5>Good Morning</h5>
            </div>
            <div className="Right-Side">
              <select value={role} onChange={handleSelectRole}>
                <option value="" disabled selected>
                  Role
                </option>
                <option value="Employer">Employer</option>
                <option value="Job Seeking">Job Seeking</option>
              </select>
              <span className="Input-span">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <MdOutlineDriveFileRenameOutline />
              </span>
              <span className="Input-span">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MdOutlineMarkEmailRead />
              </span>
              <span className="Input-span">
                <input
                  type="text"
                  placeholder="Phone # No"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <MdPermContactCalendar />
              </span>
              <span className="Input-span">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <MdLockClock />
              </span>
              <button className="Singup-Button" onClick={handleRegister}>
                Registration
              </button>
              <button
                className="Singup-Button"
                style={{ marginBottom: "1rem" }}
              >
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Login Now
                </Link>
              </button>
            </div>
          </div>
          <div
            className="col-sm-7 col-md-7 col-lg-7 col-xl-7  Left-Side Left-Side-singup">
            <img src={singupimage} alt="singupimage" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Singup;
