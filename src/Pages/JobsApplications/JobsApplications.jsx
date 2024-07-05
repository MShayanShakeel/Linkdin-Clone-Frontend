import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserHeaders } from "../../UserHeader";

const JobsApplications = () => {
  const token = localStorage.getItem("token");
  const [application, setApplications] = useState("");

  const handleEmployGetAllApplicantApplication = () => {
    axios
      .get("http://localhost:4000/api/v1/application/emplloyegetall", {
        headers: UserHeaders(token),
      })
      .then((res) => {
        console.log(res);
        setApplications(res?.data?.seeApplication);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    handleEmployGetAllApplicantApplication();
  }, []);
  console.log(application, "application");
  return (
    <>
      <div className="job-details-container">
        <div className="job-details-header">
          <h1>All Applicant Application</h1>
        </div>
        <div className="job-details-content">
          {Array.isArray(application) &&
            application.map((items, key) => (
              <div className="Seprat-inner-div">
                <h1 className="circle">{key + 1}</h1>
                <p>
                  <strong>Applicant Name:</strong> {items?.name}
                </p>

                <span className="Input-span">
                  <p style={{ width: "45%" }}>
                    <strong>Phone #:</strong> {items?.phone}
                  </p>
                  <p style={{ width: "45%" }}>
                    <strong>Email:</strong> {items?.email}
                  </p>
                </span>

                <p>
                  <strong>Address:</strong> {items?.address}
                </p>

                <p>
                  <strong>CoverLetter:</strong> {items?.coverLetter}
                </p>

                <span className="Edit-Button-main">
                  <button>Replay</button>
                </span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default JobsApplications;
