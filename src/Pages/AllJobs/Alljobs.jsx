import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { FaToolbox } from "react-icons/fa";
import { CounterContext } from "../../Store";
import "./AllJobs.css";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Alljobs = () => {
  const { count } = useContext(CounterContext);

  const handleClick = (id) => {
    console.log("Clicked on item with id:", id);
  };

  return (
    <>
      <div className="row">
        <h1 style={{ textAlign: "center", margin: "1rem 0rem" }}>
          All Available Jobs
        </h1>
        <div className="col-12 Get-All-Jobs">
          {Array.isArray(count) &&
            count.map((item) => (
              <div className="card Card-Content-2 Card-Content-2-2">
                <h3>{item?.title}</h3>
                <h4>{item.catogary}</h4>
                <h6>
                  <FaLocationDot
                    style={{ marginRight: "5px", marginBottom: "3px" }}
                  />
                  {item.country}/{item.city}
                </h6>
                <p> FixSalary:{item?.fixSalary}</p>
                <button
                  style={{ marginTop: "1rem" }}
                  onClick={() => handleClick(item._id)}
                >
                  <Link to={`/getsinglejob/${item._id}`} className="link-reset">
                    See Job Details
                  </Link>
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Alljobs;
