import React, { useState } from "react";
import "./Record.css";
import axios from "axios";
import { handleError, handleSuccess } from "../../utils/Utils";
import { useNavigate } from "react-router-dom";

const Record = ({ obj }) => {
  const navigate = useNavigate();
  const [isSure, setIsSure] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [formData, setFormData] = useState({
    title: obj.title || "",
    propertyType: obj.propertyType || "",
    ownerName: obj.ownerName || "",
    loan: obj.loan || "",
    totalPaid: obj.totalPaid || "",
    totalToBePaid: obj.totalToBePaid || "",
    latitude: obj.latitude || "",
    longitude: obj.longitude || "",
    address: obj.additionalAddress || "",
    city: obj.city || "",
    postcode: obj.postcode || "",
    nomineeName: obj.nomineeName || "",
    nomineeDOB: obj.nomineeDOB || "",
    purchaseDate: obj.purchaseDate || "",
    terms: obj.terms || "",
  });

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `https://land-lord.onrender.com/records/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { message } = response.data;
      handleSuccess(message);
      navigate("/home");
    } catch (error) {
      console.error("Error deleting record:", error);
    }
  };

  const handleSell = async (id) => {
    try {
      const token = localStorage.getItem("token");

      console.log("Sending data to the server:", obj);

      const response = await axios.post(
        `http://localhost:8080/records/sell`,
        obj,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const { message } = response.data;
      handleSuccess(message);
      setTimeout(() => {
        navigate("/sell");
      }, 3000);
    } catch (error) {
      console.error("Error selling record:", error);
      handleError("Failed to sell record");
    }
  };

  // Handle the form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Update the record
  const handleUpdate = async (id) => {
    if (!isSure) {
      // Ensure the checkbox is checked before proceeding
      handleError("Please confirm !!!");
      return; // Block update action
    }
    try {
      const token = localStorage.getItem("token"); // Retrieve the JWT token from localStorage
      const respnse = await axios.patch(
        `https://land-lord.onrender.com/records/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        }
      );
      const { message } = respnse.data;
      handleSuccess(message);
      navigate("/home"); // Go back to the previous page
    } catch (error) {
      console.error("Error modifying the record:", error);
    }
  };

  const hasLoanInfo = obj.loan || obj.totalPaid || obj.totalAmountToPay;
  const hasNomineeInfo = obj.nomineeName || obj.nomineeDOB;
  const amountToPay =
    obj.totalAmountToPay && obj.totalPaid
      ? obj.totalAmountToPay - obj.totalPaid
      : null;

  return (
    <div className="record-main">
      {/* First Card */}
      {!showDetails && !isUpdating && (
        <div className="first-card">
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

            <button
              className="record-button"
              onClick={() => setShowDetails(true)}
            >
              View Details
            </button>

            <button
              className="record-button"
              style={{ marginLeft: "10px" }}
              onClick={() => handleSell(obj._id)}
            >
              Sell
            </button>

            <button
              className="record-delete-btn"
              onClick={() => {
                handleDelete(obj._id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      )}

      {/* Second Card with Update */}
      {showDetails && !isUpdating && (
        <div className="">
          <div className="">
            <h5 className="record-title">Property Details</h5>

            {/* View Mode */}
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
            <p>
              <strong>Post Code:</strong> {obj.postcode || "Not provided"}
            </p>
            <p>
              <strong>Address:</strong>{" "}
              {obj.additionalAddress || "Not provided"}
            </p>
            <p>
              <strong>City:</strong> {obj.city || "Not provided"}
            </p>

            {/* Loan Info */}
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

            {/* Nominee Info */}
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

            {/* Additional Info */}
            <p>
              <strong>Purchase Date:</strong>{" "}
              {obj.purchaseDate || "Not provided"}
            </p>

            {/* Update Button */}
            <button
              className="record-button"
              onClick={() => setIsUpdating(true)} // Switch to update mode
              style={{ marginRight: "20px" }}
            >
              Update
            </button>

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

      {/* Update Form Mode */}
      {isUpdating && (
        <div className="update-form">
          <h5 className="update-form-heading">Update Property Details</h5>
          <form>
            {/* Update Form Fields */}
            <div className="form-input-sec">
              <label className="prop-form-label">Property Name:</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="update-form-input"
              />
            </div>

            <div className="form-input-sec">
              <label className="prop-form-label">Property Type:</label>
              <input
                type="text"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="update-form-input"
              />
            </div>
            <div className="form-input-sec">
              <label className="prop-form-label">Post Code:</label>
              <input
                type="number"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                className="update-form-input"
              />
            </div>

            <div className="form-input-sec">
              <label className="prop-form-label">City:</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="update-form-input"
              />
            </div>

            <div className="form-input-sec">
              <label className="prop-form-label">Address:</label>
              <input
                type="text"
                name="address"
                value={formData.additionalAddress}
                onChange={handleChange}
                className="update-form-input"
              />
            </div>

            <div className="form-input-sec">
              <label className="prop-form-label">Owner Name:</label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                className="update-form-input"
              />
            </div>

            <div className="form-input-sec">
              <label className="prop-form-label">Purchase Date:</label>
              <input
                type="text"
                name="purchaseDate"
                value={formData.purchaseDate}
                onChange={handleChange}
                className="update-form-input"
              />
            </div>

            <div className="form-input-sec">
              <label className="prop-form-label">Nominee Name:</label>
              <input
                type="text"
                name="nomineeName"
                value={formData.nomineeName}
                onChange={handleChange}
                className="update-form-input"
              />
            </div>

            <div className="form-input-sec">
              <label className="prop-form-label">Nominee DOB:</label>
              <input
                type="text"
                name="nomineeDOB"
                value={formData.nomineeDOB}
                onChange={handleChange}
                className="update-form-input"
              />
            </div>

            <div className="form-input-sec">
              <label className="prop-form-label">Loan:</label>
              <input
                type="text"
                name="loan"
                value={formData.loan}
                onChange={handleChange}
                className="update-form-input"
              />
            </div>

            <div className="form-input-sec">
              <label className="prop-form-label">Total Paid:</label>
              <input
                type="number"
                name="totalPaid"
                value={formData.totalPaid}
                onChange={handleChange}
                className="update-form-input"
              />
            </div>

            <div className="form-input-sec">
              <label className="prop-form-label">Total Amount To Pay:</label>
              <input
                type="number"
                name="totalToBePaid"
                value={formData.totalToBePaid}
                onChange={handleChange}
                className="update-form-input"
              />
            </div>

            {/* Add other fields similarly */}
            <div className="update-check-sec">
              <input
                type="checkbox"
                checked={isSure}
                onChange={(e) => setIsSure(e.target.checked)}
              />
              <label className="update-check-label">
                {" "}
                Are you sure you want to update this record?
              </label>
            </div>

            <div className="rec-button-sec">
              <button
                type="button"
                className="record-button"
                onClick={() => handleUpdate(obj._id)}
                style={{ marginRight: "20px" }}
              >
                Update
              </button>

              <button
                className="record-button"
                onClick={() => setIsUpdating(false)} // Exit update mode
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Record;
