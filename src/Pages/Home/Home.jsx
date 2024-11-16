import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const propertyDefinitions = {
    house: "A house is a standalone residential building designed for a single-family living.",
    flat: "A flat, or apartment, is a self-contained housing unit that occupies part of a building.",
    bungalow: "A bungalow is a single-story house, often with a spacious layout and large garden.",
    land: "Land refers to a plot of real estate property that can be used for construction or agriculture.",
    shops: "Shops are commercial spaces used for retail businesses or services.",
  };

  const propertyIcons = {
    house: "fa-solid fa-house",
    flat: "fa-regular fa-building",
    bungalow: "fa-solid fa-landmark",
    land: "fa-solid fa-map",
    shops: "fa-solid fa-shop",
  };

  return (
    <div className="dashboard-body">
      <div className="main-container">
        <div className="main-sec">
          <div className="main-sub-sec">
            <div className="text-sec">
              <p className="text-p">Property Management Software</p>
              <h1 className="text-h1">Real estate runs on LandLord</h1>
              <h4 className="text-h4">
                "We’re here to help you manage your property in a more
                innovative way. Manage your properties with ease. When you say
                property management, we think Landlord."
              </h4>
              <button className="dash-button">Get in touch</button>
            </div>
            <div className="button-sec">
              <div className="button-sub-sec">
                <Link
                  className="link"
                  style={{ color: "black" }}
                  to="/documents"
                >
                  <div className="dash-nav-button">
                    <h3 className="dash-nav-text">Documents</h3>
                    <i className="fa-regular fa-file dash-icon"></i>
                  </div>
                </Link>
                <Link
                  className="link"
                  style={{ color: "black" }}
                  to="/property"
                >
                  <div className="dash-nav-button">
                    <h3 className="dash-nav-text">Properties</h3>
                    <i className="fa-solid fa-location-dot dash-icon"></i>
                  </div>
                </Link>
              </div>
              <div className="button-sub-sec">
                <Link
                  className="link"
                  style={{ color: "black" }}
                  to="/maintainence"
                >
                  <div className="dash-nav-button">
                    <h3 className="dash-nav-text">Maintainence</h3>
                    <i className="fa-solid fa-list dash-icon"></i>
                  </div>
                </Link>
                <Link className="link" style={{ color: "black" }} to="/others">
                  <div className="dash-nav-button">
                    <h3 className="dash-nav-text">Others</h3>
                    <i className="fa-solid fa-magnifying-glass dash-icon"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="img-sec">
            <img
              src="/public/Dashboard-main-img.gif"
              alt=""
              className="dashboard-main-img"
            />
          </div>
        </div>
        <div className="property-types">
          <div className="pt-heading-sec">
            <h1>Types of Real Estate Properties</h1>
          </div>
          <div className="property-list">
            {Object.keys(propertyDefinitions).map((property) => (
              <div
                key={property}
                className="property-item"
                onClick={() => setSelectedProperty(property)}
              >
                <i className={`${propertyIcons[property]} property-icon`}></i>
                <span className="property-text">
                  {property.charAt(0).toUpperCase() + property.slice(1)}
                </span>
              </div>
            ))}
          </div>
          {selectedProperty && (
            <div className="property-definition">
              <h2>
                {selectedProperty.charAt(0).toUpperCase() +
                  selectedProperty.slice(1)}
              </h2>
              <p>{propertyDefinitions[selectedProperty]}</p>
              <button onClick={() => setSelectedProperty(null)}>Close</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
