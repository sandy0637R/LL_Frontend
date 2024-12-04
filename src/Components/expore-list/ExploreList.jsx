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
  href={`mailto:${'rautsandesh0637@gmail.com    '.trim()}?subject=${encodeURIComponent(
    `Inquiry about ${rec.propertyName.trim()}`
  )}&body=${encodeURIComponent('I am interested in this property.'.trim())}`} 
  className="property-contact"
>
  <button className="explore-buy-btn">Buy</button>
</a>

        </div>
  
      );
}
    
export default ExploreList;
