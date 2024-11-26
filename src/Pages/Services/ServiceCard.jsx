// ServiceCard.js
import React from "react";
import "./Services.css";

const ServiceCard = ({ title, items }) => {
  return (
    <div className="service-card">
      <div className="card-body custom-service-body">
        <h5 className="card-title text-primary custom-service-title">
          {title}
        </h5>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
