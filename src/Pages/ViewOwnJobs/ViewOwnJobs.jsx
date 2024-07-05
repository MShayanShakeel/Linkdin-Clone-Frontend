import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserHeaders } from "../../UserHeader";
import "./ViewOwnJobs.css";
import notify from "../../Components/toast";

const ViewOwnJobs = () => {
  const token = localStorage.getItem("token");
  const [applications, setApplications] = useState("");
  const [storeDeleteJobId, setStoreDeleteJobId] = useState(false);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const [title, setTitle] = useState("");
  const [catogary, setCatogory] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [expired, setExpired] = useState("");
  const [location, setLocation] = useState("");

  const handleShowUpdateModel = (applications) => {
    setShowEdit(true);
    if (applications) {
      setTitle(applications.title || "");
      setCatogory(applications.catogary || "");
      setCity(applications.city || "");
      setCountry(applications.country || "");
      setDescription(applications.description || "");
      setExpired(applications.expired || "");
      setLocation(applications.location || "");
      setStoreDeleteJobId(applications._id || "");
    }
  };
  const handleShowModel = () => setShow(true);
  const handleHideModel = () => setShow(false);

  //   const handleShowUpdateModel = () => setShowEdit(true);
  const handleHideUpdateModel = () => setShowEdit(false);

  //   EMPLOYE DELETE  OWN JOB
  const handleEmployeDeleteJob = () => {
    axios
      .delete(
        `http://localhost:4000/api/v1/job/deletejob/${storeDeleteJobId}`,
        {
          headers: UserHeaders(token),
        }
      )
      .then((res) => {
        console.log(res, "Res");
        notify(res?.data?.message);
        handleEmployeSeeOwnJobs();
      })
      .catch((err) => {
        console.log(err, "Error");
        notify("SomeThing Is Wrong!");
      });
  };

  //   EMPLOYE SEE OWN JOB
  const handleEmployeSeeOwnJobs = () => {
    axios
      .get("http://localhost:4000/api/v1/job/yourownjobs", {
        headers: UserHeaders(token),
      })
      .then((res) => {
        console.log(res, "Res");
        setApplications(res.data?.myJobs);
      })
      .catch((err) => {
        console.log(err, "Error");
      });
  };

  const handleEmployeUpdateOwnJob = () => {
    const data = {
      title,
      catogary,
      city,
      country,
      description,
      expired,
      location,
    };
    axios
      .put(
        `http://localhost:4000/api/v1/job/updatejob/${storeDeleteJobId}`,
        data,
        {
          headers: UserHeaders(token),
        }
      )
      .then((res) => {
        console.log(res, "Res");
        notify(res?.data?.message);
        handleHideUpdateModel();
        handleEmployeSeeOwnJobs();
      })
      .catch((err) => {
        console.log(err, "Error");
        notify("SomeThing Want to wrong!");
      });
  };

  useEffect(() => {
    handleEmployeSeeOwnJobs();
  }, []);

  return (
    <>
      {/* DELET MODEL  */}
      {show && (
        <div className="modal" onClick={handleHideModel}>
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Confirm Message</h4>
            </div>
            <div className="modal-body">
              <h6>Are you sure you want to delete this job</h6>
            </div>
            <div className="modal-footer">
              <button onClick={handleHideModel} className="button">
                Close
              </button>
              <button className="button" onClick={handleEmployeDeleteJob}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {/* DELET MODEL END */}

      {/* UPDATE MODEL  */}
      {showEdit && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">UPDATE</h4>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                placeholder="Catogary"
                value={catogary}
                onChange={(e) => setCatogory(e.target.value)}
              />
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <select
                value={expired}
                onChange={(e) => setExpired(e.target.value)}
              >
                <option value="">Expire</option>
                <option value="false">False</option>
                <option value="true">True</option>
              </select>
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button onClick={handleHideUpdateModel} className="button">
                Close
              </button>
              <button onClick={handleEmployeUpdateOwnJob} className="button">
                Update
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
                  <strong>Title:</strong> {items?.title}
                </p>
                <p>
                  <strong>Catogary:</strong> {items?.catogary}
                </p>
                <p>
                  <strong>Description:</strong> {items?.description}
                </p>

                <span className="Input-span">
                  <p style={{ width: "45%" }}>
                    <strong>Country: </strong> {items?.country}
                  </p>
                  <p style={{ width: "45%" }}>
                    <strong>City: </strong> {items?.city}
                  </p>
                </span>

                <p>
                  <strong>Location:</strong> {items?.location}
                </p>

                <span className="Input-span">
                  <p style={{ width: "45%" }}>
                    <strong>Salary:</strong> {items?.fixSalary}
                  </p>
                  <p>
                    <strong>Expired:</strong>{" "}
                    <strong>{items?.expired ? "True" : "False"}</strong>
                  </p>
                </span>

                <span className="Edit-Button-main">
                  <button
                    onClick={() => {
                      setStoreDeleteJobId(items?._id);
                      handleShowModel();
                    }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      setStoreDeleteJobId(items?._id);
                      handleShowUpdateModel(items);
                    }}
                  >
                    Edit
                  </button>
                </span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ViewOwnJobs;
