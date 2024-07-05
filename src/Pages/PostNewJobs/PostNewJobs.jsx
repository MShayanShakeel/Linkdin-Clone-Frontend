import React, { useState } from "react";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import "./PostNewJobs.css";
import axios from "axios";
import { UserHeaders } from "../../UserHeader";
import notify from "../../Components/toast";
import { useNavigate } from "react-router-dom";

const PostNewJobs = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [catogary, setCatogary] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [fixSalary, setFixSalary] = useState("");
  const [salaryRoll, setSalaryRoll] = useState("Select Salary Type");

  const handleSelectRole = (e) => {
    setCatogary(e.target.value);
  };
  const handleSelectSalary = (e) => {
    setSalaryRoll(e.target.value);
  };

  const handleCreateJobs = () => {
    const data = {
      title: title,
      description: description,
      catogary: catogary,
      country: country,
      city: city,
      location: location,
      fixSalary: fixSalary + salaryRoll,
    };
    axios
      .post("http://localhost:4000/api/v1/job/createjobs", data, {
        headers: UserHeaders(token),
      })
      .then((res) => {
        notify(res?.data?.message);
        navigate("/alljobs");
      })
      .catch((err) => {
        console.log(err?.message, "ERR");
        notify(err?.message);
      });
  };

  console.log(salaryRoll, "shayan");
  return (
    <>
      <div className="job-details-container">
        <div className="job-details-header">
          <h1>POST NEW JOB </h1>
        </div>
        <div className="job-details-content">
          <div className="Seprat-inner-div">
            <p>
              <span className="Input-span">
                <input
                  type="text"
                  placeholder="Job Tittle"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <select value={catogary} onChange={handleSelectRole}>
                  <option value="" disabled selected>
                    Select Catogory
                  </option>
                  <option value="Graphics & Designer">
                    Graphics & Designer
                  </option>
                  <option value="Mobile App Development">
                    Mobile App Development
                  </option>
                  <option value="Front-End Development">
                    Front-End Development
                  </option>
                  <option value="Back-End Development">
                    Back-End Development
                  </option>
                  <option value="Full Stack Development">
                    Full Stack Development
                  </option>
                  <option value="MERN Stack Development">
                    MERN Stack Development
                  </option>
                  <option value="MEAN Stack Development">
                    MEAN Stack Development
                  </option>
                  <option value="Data Entry">Data Entry</option>
                </select>
              </span>
            </p>
            <p>
              <span className="Input-span">
                <input
                  type="text"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </span>
            </p>

            <p>
              {" "}
              <span className="Input-span">
                <input
                  type="text"
                  placeholder="Address"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </span>
            </p>

            <p>
              <span className="Input-span">
                <select value={salaryRoll} onChange={handleSelectSalary}>
                  <option value="">Select Salary Type</option>
                  <option value="Fixed Salary">Fixed Salary</option>
                  <option value="Range Salary">Range Salary</option>
                </select>
                {salaryRoll === "Fixed Salary" ||
                salaryRoll === "Range Salary" ? (
                  <input
                    type="text"
                    placeholder="Enter Salary"
                    value={fixSalary}
                    onChange={(e) => {
                      setFixSalary(e.target.value);
                    }}
                  />
                ) : (
                  <p></p>
                )}
              </span>
            </p>
            <p>
              {" "}
              <span className="Input-span">
                <textarea
                  type="text"
                  placeholder="Job Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </span>
            </p>

            <button onClick={handleCreateJobs}>CREATE JOB</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostNewJobs;
