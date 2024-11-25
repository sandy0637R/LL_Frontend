import React from "react";
import "./Help.css";

const HelpCard = ({ title, content }) => {
  return (
    <div className="help-card ">
      <div className="help-card-header">{title}</div>
      <div className="help-card-body card-background">
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HelpCard;
