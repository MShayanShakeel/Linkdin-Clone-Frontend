import React from "react";
import "./Cards.css";
import { FaToolbox } from "react-icons/fa6";

const Cards = () => {
  return (
    <>
      <div className="card-2-main">
        <h3 className="center-class">How JobFinder Work</h3>
        <div className="Card-main-2">
          <div className="card Card-Content-2">
            <FaToolbox />
            <h4>Create Account</h4>
            <p className="center-class">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
              est.
            </p>
          </div>

          <div
            className="card Card-Content-2"
            style={{
              background:
                "linear-gradient(to right, #866ae3, #795edd, #684bd2)",
            }}
          >
            <FaToolbox />
            <h4>Create Account</h4>
            <p className="center-class">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
              est.
            </p>
          </div>

          <div className="card Card-Content-2">
            <FaToolbox />
            <h4>Create Account</h4>
            <p className="center-class">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
              est.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
