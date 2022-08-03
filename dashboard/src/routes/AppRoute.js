import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";
import Home from "../pages/home/Home";
import { useState } from "react";
import Modal from "../components/modal/Modal";
import MakeProject from "../pages/createproject/makeProject";
import Setproject from "../pages/createproject/setProject";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Info from "../components/info/Info";
import Details from "../components/info/details";
import Login from "../pages/login/Login";
import CreateProject from "../pages/createproject/CreateProject";
import PrivateRoute from "./PrivateRoute";
import useAuth from "../auth/useAuth";

export default function AppRoute() {
  const auth = useAuth();
  return (
    <Router>
      {auth.user ? <Topbar /> : null}
      <div style={{ width: "100%" }}>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <div className="wrap">
        <Sidebar />
        <div style={{ flex: "3", paddingLeft: "50px" }}>
          <Routes>
            <Route path="/" element={<PrivateRoute Component={Home} />} />
            <Route path="/edit" element={<PrivateRoute Component={Modal} />} />
            <Route
              path="/info"
              element={<PrivateRoute Component={Details} />}
            />
            <Route
              path="/details"
              element={<PrivateRoute Component={Info} />}
            />
            <Route
              path="/createproject"
              element={<PrivateRoute Component={CreateProject} />}
            />
            <Route
              path="/makeproject"
              element={<PrivateRoute Component={MakeProject} />}
            />
            <Route
              path="/setproject"
              element={<PrivateRoute Component={Setproject} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
