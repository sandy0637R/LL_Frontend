import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromSell } from "../../ReduxStore/reducer";
import { handleError, handleSuccess } from "../../utils/Utils"; // Make sure these functions are defined
import { useNavigate } from "react-router-dom";

const Sell = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSure, setIsSure] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false); // Track update mode
  const [formData, setFormData] = useState({
    title: "",
    propertyType: "",
    ownerName: "",
    loan: "",
    totalPaid: "",
    totalToBePaid: "",
    latitude: "",
    longitude: "",
    address: "",
    city: "",
    postcode: "",
    nomineeName: "",
    nomineeDOB: "",
    purchaseDate: "",
    terms: "",
  });

  // Retrieve sell[] from Redux
  const sellRecords = useSelector((state) => state.records.sell);

  const handleRemoveFromSell = (id) => {
    dispatch(removeFromSell(id)); // Dispatch the remove action
  };

  const hasLoanInfo = (record) => record.loan || record.totalPaid || record.totalToBePaid;
  const hasNomineeInfo = (record) => record.nomineeName || record.nomineeDOB;
  const amountToPay = (record) => record.totalToBePaid && record.totalPaid
    ? record.totalToBePaid - record.totalPaid
    : null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = (id) => {
    if (isSure) {
      // Here you'd send an API request to update the record with id and formData
      axios
        .put(`/api/records/${id}`, formData)
        .then((response) => {
          handleSuccess(response.data);
          setIsUpdating(false);
          setShowDetails(false);
        })
        .catch((error) => {
          handleError(error);
        });
    }
  };

  return (
    <div>
      <h3>Sold Records</h3>
      {sellRecords.length === 0 ? (
        <p>No records have been sold yet.</p>
      ) : (
        <ul>
          {sellRecords.map((record) => (
            <div key={record._id} className="record-main">
              {/* First Card */}
              {!showDetails && !isUpdating && (
                <div className="first-card">
                  <div>
                    <h5 className="record-title">{record.title || "Not provided"}</h5>

                    {/* Property Type */}
                    <p>
                      <strong>Property Type:</strong> {record.propertyType || "Not provided"}
                    </p>

                    {/* Owner Name */}
                    <p>
                      <strong>Owner Name:</strong> {record.ownerName || "Not provided"}
                    </p>

                    {/* Loan Info */}
                    {hasLoanInfo(record) && (
                      <p>
                        <strong>Loan:</strong> {record.loan || "Not provided"}
                      </p>
                    )}

                    <button
                      className="record-button"
                      onClick={() => setShowDetails(true)}
                    >
                      View Details
                    </button>

                    <button
                      onClick={() => handleRemoveFromSell(record._id)}
                      style={{ marginLeft: "10px" }}
                    >
                      Remove from Sell
                    </button>
                    <button
                      className="record-sell-btn"
                      onClick={() => handleSell(record._id)} // Implement handleSell method if needed
                      style={{ marginLeft: "10px" }}
                    >
                      Sell
                    </button>
                  </div>
                </div>
              )}

              {/* Second Card with Update */}
              {showDetails && !isUpdating && (
                <div className="details-card">
                  <h5 className="record-title">Property Details</h5>

                  <p>
                    <strong>Property Name:</strong> {record.title || "Not provided"}
                  </p>
                  <p>
                    <strong>Property Type:</strong> {record.propertyType || "Not provided"}
                  </p>
                  <p>
                    <strong>Owner Name:</strong> {record.ownerName || "Not provided"}
                  </p>
                  <p>
                    <strong>Post Code:</strong> {record.postcode || "Not provided"}
                  </p>
                  <p>
                    <strong>Address:</strong> {record.additionalAddress || "Not provided"}
                  </p>
                  <p>
                    <strong>City:</strong> {record.city || "Not provided"}
                  </p>

                  {/* Loan Info */}
                  {hasLoanInfo(record) && (
                    <div>
                      <p>
                        <strong>Loan:</strong> {record.loan || "Not provided"}
                      </p>
                      <p>
                        <strong>Total Paid:</strong> {record.totalPaid || "Not provided"}
                      </p>
                      <p>
                        <strong>Total Amount To Pay:</strong> {record.totalToBePaid || "Not provided"}
                      </p>
                      {amountToPay(record) !== null && (
                        <p>
                          <strong>Amount To Pay:</strong> {amountToPay(record)}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Nominee Info */}
                  {hasNomineeInfo(record) && (
                    <div>
                      <p>
                        <strong>Nominee Name:</strong> {record.nomineeName || "Not provided"}
                      </p>
                      <p>
                        <strong>Nominee Date of Birth:</strong> {record.nomineeDOB || "Not provided"}
                      </p>
                    </div>
                  )}

                  {/* Additional Info */}
                  <p>
                    <strong>Purchase Date:</strong> {record.purchaseDate || "Not provided"}
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
                        value={formData.address}
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
                      <label className="prop-form-label">Nominee Date of Birth:</label>
                      <input
                        type="date"
                        name="nomineeDOB"
                        value={formData.nomineeDOB}
                        onChange={handleChange}
                        className="update-form-input"
                      />
                    </div>

                    {/* Submit Update */}
                    <button
                      type="button"
                      onClick={() => handleUpdate(record._id)} // Call the update function with id
                      style={{ marginTop: "10px" }}
                    >
                      Update Property
                    </button>
                  </form>
                </div>
              )}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sell;
