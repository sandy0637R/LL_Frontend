import React from "react";
import "./ExploreList.css";

const ExploreList = ({ rec}) => {
    return (
        <div className="property-card">
          <img src={rec.image} alt={rec.propertyName} className="property-image" />
          <div className="property-details">
            <h3>{rec.propertyName}</h3>
            <p>
              <strong>Type:</strong> {rec.propertyType}
            </p>
            <p>
              <strong>Address:</strong> {rec.address}, {rec.cityName}
            </p>
            <p>
              <strong>Coordinates:</strong> {rec.latitude}, {rec.longitude}
            </p>
            <p>
              <strong>Postal Code:</strong> {rec.postCode}
            </p>
          </div>
          <a 
          href={`mailto:sandy0637R@gamil.com?subject=Inquiry about ${rec.propertyName}&body=I am interested in this property.`} 
          className="property-contact"
        >
          <button className="btn btn-success w-100">Buy</button>
        </a>
        </div>
      );
}
    
export default ExploreList;
