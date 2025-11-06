import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductsDetails.css";

const ServiceDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="service-details-container">
      <h2>More services</h2>
      <button onClick={() => navigate("/service")}>Go Back</button>
    </div>
  );
};

export default ServiceDetails;
