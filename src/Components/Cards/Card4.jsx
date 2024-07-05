import React from "react";
import "./Cards.css";
import { FaToolbox } from "react-icons/fa6";
import image1 from "../../Images/Amazon.png";
import image2 from "../../Images/Microsoft.png";
import image3 from "../../Images/Google.avif";

const Cards = () => {
  return (
    <>
      <div className="card-2-main">
        <h3 className="center-class">TOP COMPANIES</h3>
        <div className="Card-main-2">
          <div className="card Card-Content-2">
            <img src={image3} alt="image1" />
            <h4>Officially Partner</h4>
            <button>See Jobs</button>
          </div>

          <div className="card Card-Content-2">
            <img src={image2} alt="image1" />
            <h4>Officially Partner</h4>
            <button>See Jobs</button>
          </div>

          <div className="card Card-Content-2">
            <img src={image1} alt="image1" />
            <h4>Officially Partner</h4>
            <button>See Jobs</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
