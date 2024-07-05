import { useContext, useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Singup from "./Pages/Singup/Singup";
import Login from "./Pages/Singup/Login";
import Home from "./Pages/Home/Home";
import ApplicationForm from "./Components/ApplicationForm/ApplicationForm";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Alljobs from "./Pages/AllJobs/Alljobs";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { CounterContext } from "./Store";
import GetSingleJob from "./Components/GetSingleJob/GetSingleJob";
import Navbar from "./Components/Navbar/Navbar";
import PostNewJobs from "./Pages/PostNewJobs/PostNewJobs.jsx";
import UsersAppliedApplication from "./Pages/UsersAppliedApplication/UsersAppliedApplication.jsx";
import Layout from "./Layout.jsx";
import ViewOwnJobs from "./Pages/ViewOwnJobs/ViewOwnJobs.jsx";
import JobsApplications from "./Pages/JobsApplications/JobsApplications.jsx";

function App() {
  const { setCount, setUser } = useContext(CounterContext);

  const getUser = () => {
    const token = localStorage.getItem("token");
    console.log(token, "token");
    if (!token) {
      console.error("No token found in localStorage");
      return;
    }

    axios
      .get("http://localhost:4000/api/v1/user/getUser", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.users, "usergetres");
        setUser(res.data.users);
      })
      .catch((err) => {
        console.log(err, "usergetEERR");
      });
  };

  const handleGetAllJobs = () => {
    axios
      .get("http://localhost:4000/api/v1/job/getalljobs")
      .then((res) => {
        console.log(res, "getallRes");
        setCount(res?.data?.jobs);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  useEffect(() => {
    handleGetAllJobs();
    getUser();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/singup" element={<Singup />} />
          <Route path="/" element={<Login />} />

          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/alljobs" element={<Alljobs />} />
            <Route path="/getsinglejob/:id" element={<GetSingleJob />} />
            <Route path="/postnewjobs" element={<PostNewJobs />} />
            <Route path="/viewownjobs" element={<ViewOwnJobs />} />
            <Route path="/jobsapplications" element={<JobsApplications />} />
            <Route
              path="/usersappliedapplication"
              element={<UsersAppliedApplication />}
            />
            <Route
              path="/applicationform/:jobid/:postid"
              element={<ApplicationForm />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
