import React, { useState } from "react";
import "./Record.css";
import axios from "axios";
import { handleSuccess } from "../../utils/Utils";
import { useNavigate } from "react-router-dom";

const Record = ({ obj }) => {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);

  const hasLoanInfo = obj.loan || obj.totalPaid || obj.totalAmountToPay;

  const hasNomineeInfo = obj.nomineeName || obj.nomineeDOB;

  const amountToPay =
    obj.totalAmountToPay && obj.totalPaid
      ? obj.totalAmountToPay - obj.totalPaid
      : null;
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token"); // Retrieve the JWT token from localStorage
      await axios.delete(`http://localhost:8080/records/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
        },
      });
      handleSuccess("Record Deleted SucessFully");
      navigate("/home");
    } catch (error) {
      console.error("Error deletiong record:", error);
    }
  };
  return (
    <div className="record-main">
      {/* First Card */}
      {!showDetails && (
        <div className="first-card">
          <button
            className="btn btn-danger"
            onClick={() => {
              handleDelete(obj._id);
            }}
          >
            {" "}
            Delete{" "}
          </button>
          <div className="">
            <h5 className="record-title">{obj.title || "Not provided"}</h5>

            {/* Property Type */}
            <p className="">
              <strong>Property Type:</strong>{" "}
              {obj.propertyType || "Not provided"}
            </p>

            {/* Owner Name */}
            <p className="">
              <strong>Owner Name:</strong> {obj.ownerName || "Not provided"}
            </p>

            {/* Loan Info */}
            {hasLoanInfo && (
              <p className="">
                <strong>Loan:</strong> {obj.loan || "Not provided"}
              </p>
            )}

            {/* Button to view more details */}
            <button
              className="record-button"
              onClick={() => setShowDetails(true)}
            >
              View Details
            </button>
          </div>
        </div>
      )}

      {/* Second Card */}
      {showDetails && (
        <div className="">
          <div className="">
            <h5 className="record-title">Property Details</h5>
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
              {obj.purchaseDate || "Not provided"}
            </p>
            <p>
              <strong>Terms:</strong> {obj.terms || "Not provided"}
            </p>

            {/* Back Button */}
            <button
              className="record-button"
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
