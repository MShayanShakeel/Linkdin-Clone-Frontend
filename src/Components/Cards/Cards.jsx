import React from "react";
import "./Cards.css";
import { FaToolbox } from "react-icons/fa6";

const Cards = () => {
  return (
    <>
      <div className="Card-main row">
        <div className="card Card-Content col-md-3 col-xl-3 col-lg-3 col-sm-6">
          <div className="icon">
            <FaToolbox />
          </div>
          <div className="content">
            <h4>320</h4>
            <p>ABC Technology </p>
          </div>
        </div>

        <div className="card Card-Content col-md-3 col-xl-3 col-lg-3 col-sm-6">
          <div className="icon">
            <FaToolbox />
          </div>
          <div className="content">
            <h4>220</h4>
            <p>ABC Solution</p>
          </div>
        </div>

        <div className="card Card-Content col-md-3 col-xl-3 col-lg-3 col-sm-6">
          <div className="icon">
            <FaToolbox />
          </div>
          <div className="content">
            <h4>910</h4>
            <p>ABC Limited</p>
          </div>
        </div>

        <div className="card Card-Content col-md-3 col-xl-3 col-lg-3 col-sm-6">
          <div className="icon">
            <FaToolbox />
          </div>
          <div className="content">
            <h4>120</h4>
            <p>Smash Code</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
