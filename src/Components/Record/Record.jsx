import React, { useState } from "react";

const Record = ({ obj }) => {
  const [showDetails, setShowDetails] = useState(false);

  const hasLoanInfo = obj.loan || obj.totalPaid || obj.totalAmountToPay;

  const hasNomineeInfo = obj.nomineeName || obj.nomineeDOB;

  const amountToPay =
    obj.totalAmountToPay && obj.totalPaid
      ? obj.totalAmountToPay - obj.totalPaid
      : null;

  return (
    <div className="container mt-5">
      {/* First Card */}
      {!showDetails && (
        <div className="card shadow-sm p-3 mb-4">
          <div className="card-body">
            <h5 className="card-title">{obj.title || "Not provided"}</h5>

            {/* Property Type */}
            <p className="card-text">
              <strong>Property Type:</strong>{" "}
              {obj.propertyType || "Not provided"}
            </p>

            {/* Owner Name */}
            <p className="card-text">
              <strong>Owner Name:</strong> {obj.ownerName || "Not provided"}
            </p>

            {/* Loan Info */}
            {hasLoanInfo && (
              <p className="card-text">
                <strong>Loan:</strong> {obj.loan || "Not provided"}
              </p>
            )}

            {/* Button to view more details */}
            <button
              className="btn btn-primary"
              onClick={() => setShowDetails(true)}
            >
              View Details
            </button>
          </div>
        </div>
      )}

      {/* Second Card */}
      {showDetails && (
        <div className="card shadow-sm p-3">
          <div className="card-body">
            <h5 className="card-title">Property Details</h5>
            <p>
              <strong>Property Name:</strong> {obj.title || "Not provided"}
            </p>
            <p>
              <strong>Property Type:</strong>{" "}
              {obj.propertyType || "Not provided"}
            </p>
            <p>
              <strong>Owner Name:</strong> {obj.ownerName || "Not provided"}
            </p>

            {/* Location and Address Information */}
            <p>
              <strong>Latitude:</strong> {obj.latitude || "Not provided"}
            </p>
            <p>
              <strong>Longitude:</strong> {obj.longitude || "Not provided"}
            </p>
            <p>
              <strong>Address:</strong>{" "}
              {obj.additionalAddress || "Not provided"}
            </p>
            <p>
              <strong>City:</strong> {obj.city || "Not provided"}
            </p>
            <p>
              <strong>Postcode:</strong> {obj.postcode || "Not provided"}
            </p>

            {/* Loan Info Section */}
            {hasLoanInfo && (
              <div>
                <p>
                  <strong>Loan:</strong> {obj.loan || "Not provided"}
                </p>
                <p>
                  <strong>Total Paid:</strong> {obj.totalPaid || "Not provided"}
                </p>
                <p>
                  <strong>Total Amount To Pay:</strong>{" "}
                  {obj.totalToBePaid || "Not provided"}
                </p>
                {amountToPay !== null && (
                  <p>
                    <strong>Amount To Pay:</strong> {amountToPay}
                  </p>
                )}
              </div>
            )}

            {/* Nominee Info Section */}
            {hasNomineeInfo && (
              <div>
                <p>
                  <strong>Nominee Name:</strong>{" "}
                  {obj.nomineeName || "Not provided"}
                </p>
                <p>
                  <strong>Nominee Date of Birth:</strong>{" "}
                  {obj.nomineeDOB || "Not provided"}
                </p>
              </div>
            )}

            {/* Additional Information */}
            <p>
              <strong>Purchase Date:</strong>{" "}
              {obj.purchasedate || "Not provided"}
            </p>
            <p>
              <strong>Terms:</strong> {obj.terms || "Not provided"}
            </p>

            {/* Back Button */}
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

export default Record;
