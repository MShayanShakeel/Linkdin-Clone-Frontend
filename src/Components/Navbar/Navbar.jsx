import React, { useContext, useEffect, useState } from "react";
import "./Navbara.css";
import { MdTouchApp } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa6";
import Logo from "../../Images/Logo.png";
import { Link } from "react-router-dom";
import { CounterContext } from "../../Store";
import axios from "axios";
import { UserHeaders } from "../../UserHeader";
import notify from "../toast";
import { useNavigate } from "react-router-dom";
import { RiMenuAddFill } from "react-icons/ri";
import { RiMenuLine } from "react-icons/ri";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useContext(CounterContext);
  const token = localStorage.getItem("token");
  const [hadderShow, setHadderShow] = useState(false);

  const handleLogOut = () => {
    axios
      .get("http://localhost:4000/api/v1/user/logout", {
        headers: UserHeaders(token),
      })
      .then((res) => {
        console.log(res?.data?.message, "res");
        notify(res?.data?.message);
        localStorage.removeItem("token");
        navigate("/");
      })
      .catch((err) => {
        console.log(err, "Err");
        notify(err?.message);
      });
  };
  const toggleMenu = () => {
    setHadderShow(!hadderShow);
  };

  return (
    <>
      <div className="row">
        <div className="col-12 Navbar-First">
          {/* MOBILE RESPONCIVE STYLE */}

          <div className="Navbar-list-mobile">
            <div onClick={toggleMenu}>
              {hadderShow ? <RiMenuLine /> : <RiMenuAddFill />}
            </div>

            {hadderShow ? (
              <>
                {token ? (
                  <ul className="mobile-ul">
                    {/* EMPLOYE  */}
                    {user?.role === "Job Seeking" ? (
                      <>
                        <Link className="link-reset" to="/home">
                          <li onClick={toggleMenu}>
                            <FaHome />
                            Home
                          </li>
                        </Link>
                        <Link className="link-reset" to="/alljobs">
                          <li onClick={toggleMenu}>
                            <FaToolbox />
                            Jobs
                          </li>
                        </Link>
                        <Link
                          className="link-reset"
                          to="/usersappliedapplication"
                        >
                          <li onClick={toggleMenu}>
                            <MdTouchApp />
                            Applied
                          </li>
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link className="link-reset" to="/home">
                          <li onClick={toggleMenu}>
                            <FaHome />
                            Home
                          </li>
                        </Link>

                        <Link className="link-reset" to="/alljobs">
                          <li onClick={toggleMenu}>
                            <FaToolbox />
                            All Jobs
                          </li>
                        </Link>
                        <Link className="link-reset" to="/jobsapplications">
                          <li onClick={toggleMenu}>
                            <MdTouchApp />
                            Jobs Applications
                          </li>
                        </Link>

                        <Link className="link-reset" to="/postnewjobs">
                          <li onClick={toggleMenu}>
                            <FaHome />
                            Post New Job
                          </li>
                        </Link>

                        <Link className="link-reset" to="/viewownjobs">
                          <li onClick={toggleMenu}>
                            <FaToolbox />
                            View Own Jobs
                          </li>
                        </Link>
                      </>
                    )}
                  </ul>
                ) : (
                  navigate("/")
                )}
              </>
            ) : (
              <p></p>
            )}
          </div>

          {/* MOBILE RESPONCIVE STYLE END*/}

          <div className="Logo">
            <img src={Logo} alt="Logo" />
          </div>

          <div className="Navbar-list">
            {token ? (
              <ul>
                {/* EMPLOYE  */}
                {user?.role === "Job Seeking" ? (
                  <>
                    <Link className="link-reset" to="/home">
                      <li>
                        <FaHome />
                        Home
                      </li>
                    </Link>
                    <Link className="link-reset" to="/alljobs">
                      <li>
                        <FaToolbox />
                        Jobs
                      </li>
                    </Link>
                    <Link className="link-reset" to="/usersappliedapplication">
                      <li>
                        <MdTouchApp />
                        Applied
                      </li>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link className="link-reset" to="/home">
                      <li onClick={() => handleItemClick()}>
                        <FaHome />
                        Home
                      </li>
                    </Link>

                    <Link className="link-reset" to="/alljobs">
                      <li>
                        <FaToolbox />
                        All Jobs
                      </li>
                    </Link>
                    <Link className="link-reset" to="/jobsapplications">
                      <li>
                        <MdTouchApp />
                        Jobs Applications
                      </li>
                    </Link>

                    <Link className="link-reset" to="/postnewjobs">
                      <li>
                        <FaHome />
                        Post New Job
                      </li>
                    </Link>

                    <Link className="link-reset" to="/viewownjobs">
                      <li>
                        <FaToolbox />
                        View Own Jobs
                      </li>
                    </Link>
                  </>
                )}
              </ul>
            ) : (
              navigate("/")
            )}
          </div>
          <div>
            <button
              className="Singup-Button Singup-Button-2"
              onClick={handleLogOut}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
