import React from "react";
import "./Cards.css";
import { FaToolbox } from "react-icons/fa6";

const Cards = () => {
  return (
    <>
      <div className="card-2-main-3">
        <h1 className="center-class">POPULER CATOGRIES</h1>
        <div className="Card-main row">
          <div className="card Card-Content col-md-3 col-xl-3 col-lg-3 col-sm-6">
            <div className="icon">
              <FaToolbox />
            </div>
            <div className="content">
              <h4>920</h4>
              <p>FrontEnd-Development</p>
            </div>
          </div>

          <div className="card Card-Content col-md-3 col-xl-3 col-lg-3 col-sm-6">
            <div className="icon">
              <FaToolbox />
            </div>
            <div className="content ">
              <h4>9120</h4>
              <p>BackEnd-Development</p>
            </div>
          </div>

          <div className="card Card-Content col-md-3 col-xl-3 col-lg-3 col-sm-6">
            <div className="icon">
              <FaToolbox />
            </div>
            <div className="content">
              <h4>90</h4>

              <p>Artificial Intelligence</p>
            </div>
          </div>

          <div className="card Card-Content col-md-3 col-xl-3 col-lg-3 col-sm-6">
            <div className="icon">
              <FaToolbox />
            </div>
            <div className="content">
              <h4>220</h4>

              <p>Data Science</p>
            </div>
          </div>
        </div>

        <div className="Card-main row">
          <div className="card Card-Content col-md-3 col-xl-3 col-lg-3 col-sm-6">
            <div className="icon">
              <FaToolbox />
            </div>
            <div className="content">
              <h4>91</h4>

              <p>Cloud Computing</p>
            </div>
          </div>

          <div className="card Card-Content col-md-3 col-xl-3 col-lg-3 col-sm-6">
            <div className="icon">
              <FaToolbox />
            </div>
            <div className="content">
              <h4>20</h4>

              <p>Machine Learning</p>
            </div>
          </div>

          <div className="card Card-Content col-md-3 col-xl-3 col-lg-3 col-sm-6">
            <div className="icon">
              <FaToolbox />
            </div>
            <div className="content">
              <h4>12</h4>
              <p>Digital Marketing</p>
            </div>
          </div>

          <div className="card Card-Content col-md-3 col-xl-3 col-lg-3 col-sm-6">
            <div className="icon">
              <FaToolbox />
            </div>
            <div className="content">
              <h4>97</h4>
              <p>MERN Stack</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
