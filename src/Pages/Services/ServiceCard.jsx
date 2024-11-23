// ServiceCard.js
import React from 'react';

const ServiceCard = ({ title, items }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title text-primary">{title}</h5>
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
