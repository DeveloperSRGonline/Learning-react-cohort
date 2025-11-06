import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  const handleMoreService = () => {
    navigate("/service/more");
  }
  return (
    <>
      <h2>Service section</h2>
      <button onClick={handleMoreService}>More services</button>
      <br />
      <hr />
      <Outlet />
    </>
  );
};

export default Service;
