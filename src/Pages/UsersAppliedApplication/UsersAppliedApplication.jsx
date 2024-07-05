import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserHeaders } from "../../UserHeader";
import "./UsersAppliedApplication.css";
import notify from "../../Components/toast";

const UsersAppliedApplication = () => {
  const token = localStorage.getItem("token");
  const [applications, setApplications] = useState("");
  const [show, setShow] = useState(false);
  const [getId, setGetId] = useState("");

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  //   SEE JOB SEEKER OWN APPLIED APPLICATION
  const handleJobSeekerSeeAppliedApplication = () => {
    axios
      .get("http://localhost:4000/api/v1/application/jobgetall", {
        headers: UserHeaders(token),
      })
      .then((res) => {
        console.log(res, "Res");
        setApplications(res.data?.seeApplication);
      })
      .catch((err) => {
        console.log(err, "Error");
      });
  };

  //   DELET JOB SEEKER OWN APPLIED APPLICATION
  const handleJobSeekerDeleteAppliedApplication = () => {
    axios
      .delete(
        `http://localhost:4000/api/v1/application//jobseekerdelete/${getId}`,
        {
          headers: UserHeaders(token),
        }
      )
      .then((res) => {
        console.log(res.data?.message, "Res");
        notify(res.data?.message);
      })
      .catch((err) => {
        console.log(err, "Error");
        notify(res?.Response?.data?.message);
      });
  };

  useEffect(() => {
    handleJobSeekerSeeAppliedApplication();
  }, []);

  return (
    <>
      {show && (
        <div className="modal" onClick={handleHide}>
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Confirm Message</h4>
            </div>
            <div className="modal-body">
              <h6>Are you sure you want to delete this job</h6>
            </div>
            <div className="modal-footer">
              <button onClick={handleHide} className="button">
                Close
              </button>
              <button
                className="button"
                onClick={handleJobSeekerDeleteAppliedApplication}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="job-details-container">
        <div className="job-details-header">
          <h1>Job Details</h1>
        </div>
        <div className="job-details-content">
          {Array.isArray(applications) &&
            applications.map((items, key) => (
              <div className="Seprat-inner-div">
                <h1 className="circle">{key + 1}</h1>
                <p>
                  <strong>Title:</strong> {items?.name}
                </p>
                <p>
                  <strong>Category:</strong> {items?.email}
                </p>
                <p>
                  <strong>Country:</strong> {items?.phone}
                </p>
                <p>
                  <strong>City:</strong> {items?.coverLetter}
                </p>
                <p>
                  <strong>Location: </strong> {items?.address}
                </p>
                <button
                  onClick={() => {
                    handleShow();
                    setGetId(items?._id);
                  }}
                >
                  Delete Your Application
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default UsersAppliedApplication;
