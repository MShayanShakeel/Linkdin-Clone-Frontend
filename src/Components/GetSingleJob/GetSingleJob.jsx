import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./GetSingleJob.css";

const GetSingleJob = () => {
  const { id } = useParams();
  const [singleJob, getSingleJob] = useState("");

  const handleGetSingleJob = () => {
    axios
      .get(`http://localhost:4000/api/v1/job/getsinglejob/${id}`)
      .then((res) => {
        console.log(res, "res");
        getSingleJob(res?.data?.job);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  useEffect(() => {
    handleGetSingleJob();
  }, []);

  console.log(singleJob, "singleJob");
  return (
    <>
      <div className="job-details-container">
        <div className="job-details-header">
          <h1>Job Details</h1>
        </div>
        <div className="job-details-content">
          <p>
            <strong>Title:</strong> {singleJob?.title}
          </p>
          <p>
            <strong>Category:</strong> {singleJob?.category}
          </p>
          <p>
            <strong>Country:</strong> {singleJob?.country}
          </p>
          <p>
            <strong>City:</strong> {singleJob?.city}
          </p>
          <p>
            <strong>Location: </strong> {singleJob?.location}
          </p>
          <p>
            <strong>Description: </strong> {singleJob?.description}
          </p>
          <p>
            <strong>Fix Salary: </strong> {singleJob?.fixSalary}
          </p>
          <button>
            <Link
              className="link-reset"
              to={`/applicationform/${singleJob?._id}/${singleJob?.postedBy}`}
            >
              Apply Now
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default GetSingleJob;
