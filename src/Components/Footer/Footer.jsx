import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 Navbar-First">
          <div className="footer-main">
            <p>All Right Reserved by with M Shayan Shakeel</p>
            <span className="Footer-icons">
              <FaInstagramSquare />
              <FaGithub />
              <FaLinkedin />
              <FaFacebook />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
