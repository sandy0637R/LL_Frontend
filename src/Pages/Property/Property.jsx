import React, { useState } from "react";

const Property = () => {
  const [showDetails, setShowDetails] = useState(false);

  const propertyData = {
    propertyName: "398403284",
    propertyType: "938240",
    ownerName: "3948398",
    latitude: "40394932",
    longitude: "-73349035",
    address: "1lkfk",
    city: "kdjwekfn",
    postcode: "10001",
    onLoan: true,
    nomineeName: "343893",
    nomineeDOB: "9349820",
  };

  return (
    <div className="container mt-5">
      {/* Property Card */}
      {!showDetails && (
        <div className="card shadow-sm p-3">
          <div className="card-body">
            <h5 className="card-title">{propertyData.propertyName}</h5>
            <p className="card-text">Type: {propertyData.propertyType}</p>
            <button
              className="btn btn-primary"
              onClick={() => setShowDetails(true)}
            >
              View
            </button>
          </div>
        </div>
      )}

      {/* Property Card Details*/}
      {showDetails && (
        <div className="card shadow-sm p-3">
          <div className="card-body">
            <h5 className="card-title">Property Details</h5>
            <p>
              Owner Name: {propertyData.ownerName}
            </p>
            <p>
              Property Name: {propertyData.propertyName}
            </p>
            <p>
              Latitude: {propertyData.latitude}
            </p>
            <p>
              Longitude: {propertyData.longitude}
            </p>
            <p>
              Address: {propertyData.address}
            </p>
            <p>
              City: {propertyData.city}
            </p>
            <p>
              Postcode: {propertyData.postcode}
            </p>
            <p>
              On Loan:{" "}
              {propertyData.onLoan ? "Yes" : "No"}
            </p>
            <p>
              Nominee Name: {propertyData.nomineeName}
            </p>
            <p>
              Nominee DOB: {propertyData.nomineeDOB}
            </p>
            <button
              className="btn btn-secondary"
              onClick={() => setShowDetails(false)}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Property;
