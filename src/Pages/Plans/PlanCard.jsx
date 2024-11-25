import React from "react";
import "./Plans.css";

const PlanCard = ({ title, items }) => {
  return (
    <div className="list-group-item plan-card-list">
      <h5 className="text-success">{title}</h5>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlanCard;
