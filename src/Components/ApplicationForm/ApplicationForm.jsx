import React, { useContext, useState } from "react";
import {
  MdOutlineDriveFileRenameOutline,
  MdPermContactCalendar,
} from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import "./ApplicationForm.css";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";
import { UserHeaders } from "../../UserHeader";
import { CounterContext } from "../../Store";
import { useParams } from "react-router-dom";
import notify from "../toast";
import { useNavigate } from "react-router-dom";

const ApplicationForm = () => {
  const navigate = useNavigate();
  const { jobid, postid } = useParams();
  const { user } = useContext(CounterContext);
  const token = localStorage.getItem("token");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  const handleApplyingJob = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("coverLetter", coverLetter);
    formData.append("applicantID", user?._id);
    formData.append("employerID", postid);
    formData.append("JobId", jobid);

    console.log(...formData.entries(), "!");
    console.log(formData, "2");
    axios
      .post("http://localhost:4000/api/v1/application/applyjobs", formData, {
        headers: UserHeaders(token),
      })
      .then((res) => {
        console.log(res, "res");
        notify(res?.data?.message);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err, "err");
        notify("SomeThing is wrong!");
      });
  };

  console.log(name, email, phone, address, coverLetter, jobid, postid);
  return (
    <>
      <div className="Singup-main">
        <div className="row Singup-second Singup-second-2">
          <div className="col-12">
            <div className="Singup-text">
              <h3 style={{ textAlign: "center", margin: "1rem 1rem " }}>
                Application Form
              </h3>
            </div>
            <div className="Right-Side">
              <span className="Input-span">
                <input
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <MdOutlineDriveFileRenameOutline />
              </span>
              <span className="Input-span">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MdOutlineMarkEmailRead />
              </span>
              <span className="Input-span">
                <input
                  type="text"
                  placeholder="Phone# No"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <MdPermContactCalendar />
              </span>
              <span className="Input-span">
                <input
                  type="text"
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
                <FaLocationDot />
              </span>
              <span className="Input-span">
                <textarea
                  type="text"
                  placeholder="Cover Letter"
                  onChange={(e) => setCoverLetter(e.target.value)}
                />
              </span>
              <button
                className="Singup-Button"
                style={{ marginBottom: "1rem" }}
                onClick={handleApplyingJob}
              >
                Send Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationForm;
