import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Service.css";

const Service = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2 className="service-h1">Service Page</h2>
      <button onClick={() => navigate("/service/detail")}>
        Open more service Details
      </button>
      <hr />
      <Outlet />
    </>
  );
};

export default Service;
